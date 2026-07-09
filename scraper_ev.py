import requests
import json
import os
from datetime import datetime
import pytz

def fetch_ev_stations():
    base_url = "https://ev.vialietuva.lt/ocpi/2.3.0/locations"
    limit = 100
    offset = 0
    ev_stations = []
    
    try:
        while True:
            url = f"{base_url}?limit={limit}&offset={offset}"
            response = requests.get(url, timeout=15)
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
                        
                        for evse in loc.get("evses", []):
                            if evse.get("status") == "AVAILABLE":
                                is_available = True
                                
                            for connector in evse.get("connectors", []):
                                standard = connector.get("standard", "")
                                power = connector.get("max_electric_power", 0) / 1000 # Convert W to kW
                                if power > 0:
                                    connectors_list.append(f"{standard} ({power}kW)")
                                else:
                                    connectors_list.append(standard)
                                    
                        # Remove duplicates from connectors_list
                        connectors_list = list(set(connectors_list))
                        
                        station = {
                            "name": f"🔌 {name}",
                            "address": address,
                            "city": city,
                            "lat": lat,
                            "lng": lng,
                            "logo": "⚡",
                            "prices": {
                                "Elektra": 0.00 # Dummy price for sorting, usually apps sort by distance if price is same
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
    print("Fetching EV stations...")
    stations = fetch_ev_stations()
    print(f"Found {len(stations)} EV stations.")
    
    js_content = f"const evStationsData = {json.dumps(stations, ensure_ascii=False, indent=4)};\n"
    
    with open("data_ev.js", "w", encoding="utf-8") as f:
        f.write(js_content)
    
    print("Saved to data_ev.js")

if __name__ == "__main__":
    main()
