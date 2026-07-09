import requests
import json
import os
from datetime import datetime
import pytz
import time
import random

HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    "Accept": "application/json"
}

def fetch_tariffs():
    url = "https://ev.vialietuva.lt/ocpi/2.3.0/tariffs"
    tariffs = {}
    try:
        time.sleep(random.uniform(1.0, 3.0))
        response = requests.get(url, headers=HEADERS, timeout=15)
        response.raise_for_status()
        data = response.json()
        if "data" in data and isinstance(data["data"], list):
            for t in data["data"]:
                t_id = t.get("id")
                elements = t.get("elements", [])
                price = 0.0
                for el in elements:
                    components = el.get("price_components", [])
                    for comp in components:
                        if comp.get("type") == "ENERGY":
                            price = float(comp.get("price", 0))
                            break
                    if price > 0:
                        break
                if t_id and price > 0:
                    tariffs[t_id] = price
        return tariffs
    except Exception as e:
        print(f"Error fetching tariffs: {e}")
        return {}

def fetch_ev_stations(tariffs):
    base_url = "https://ev.vialietuva.lt/ocpi/2.3.0/locations"
    limit = 100
    offset = 0
    ev_stations = []
    
    try:
        while True:
            time.sleep(random.uniform(1.0, 3.0))
            url = f"{base_url}?limit={limit}&offset={offset}"
            response = requests.get(url, headers=HEADERS, timeout=15)
            response.raise_for_status()
            data = response.json()
            
            if "data" in data and isinstance(data["data"], list):
                if not data["data"]:
                    break
                    
                for loc in data["data"]:
                    try:
                        name = loc.get("name", "Nežinoma stotelė")
                        address = loc.get("address", "")
                        city = loc.get("city", "")
                        
                        coords = loc.get("coordinates", {})
                        lat = float(coords.get("latitude", 0))
                        lng = float(coords.get("longitude", 0))
                        
                        if not lat or not lng:
                            continue
                        
                        # Extract connectors info
                        connectors_list = []
                        is_available = False
                        station_prices = []
                        
                        for evse in loc.get("evses", []):
                            if evse.get("status") == "AVAILABLE":
                                is_available = True
                                
                            for connector in evse.get("connectors", []):
                                standard = connector.get("standard", "")
                                power = connector.get("max_electric_power", 0) / 1000 # Convert W to kW
                                
                                # Check for price
                                conn_price = 0.0
                                t_ids = connector.get("tariff_ids", [])
                                for tid in t_ids:
                                    if tid in tariffs:
                                        conn_price = tariffs[tid]
                                        station_prices.append(conn_price)
                                        break
                                
                                price_str = f" - {conn_price:.2f}€/kWh" if conn_price > 0 else ""
                                
                                if power > 0:
                                    connectors_list.append(f"{standard} ({power}kW){price_str}")
                                else:
                                    connectors_list.append(f"{standard}{price_str}")
                                    
                        # Remove duplicates from connectors_list
                        connectors_list = list(set(connectors_list))
                        
                        min_price = min(station_prices) if station_prices else 0.0
                        
                        station = {
                            "name": f"🔌 {name}",
                            "address": address,
                            "city": city,
                            "lat": lat,
                            "lng": lng,
                            "logo": "⚡",
                            "prices": {
                                "Elektra": min_price
                            },
                            "ev_status": "Laisva" if is_available else "Užimta / Nežinoma",
                            "ev_connectors": ", ".join(connectors_list)
                        }
                        
                        ev_stations.append(station)
                    except Exception as e:
                        print(f"Error parsing station: {e}")
                        continue
                        
            # Pagination logic
            total_count = int(response.headers.get('X-Total-Count', 0))
            offset += limit
            if offset >= total_count or not total_count:
                break
                
        return ev_stations
    except Exception as e:
        print(f"Error fetching EV data: {e}")
        return []

def main():
    print("Fetching EV tariffs...")
    tariffs = fetch_tariffs()
    print(f"Found {len(tariffs)} tariffs.")
    
    print("Fetching EV stations...")
    stations = fetch_ev_stations(tariffs)
    print(f"Found {len(stations)} EV stations.")
    
    js_content = f"const evStationsData = {json.dumps(stations, ensure_ascii=False, indent=4)};\n"
    
    with open("data_ev.js", "w", encoding="utf-8") as f:
        f.write(js_content)
    
    print("Saved to data_ev.js")

if __name__ == "__main__":
    main()
