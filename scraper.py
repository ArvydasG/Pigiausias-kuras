import os
import json
import time
import requests
from bs4 import BeautifulSoup

DATA_FILE = "data.js"
CACHE_FILE = "coords_cache.json"

# Load coordinate cache
coords_cache = {}
if os.path.exists(CACHE_FILE):
    with open(CACHE_FILE, "r", encoding="utf-8") as f:
        coords_cache = json.load(f)

def save_cache():
    with open(CACHE_FILE, "w", encoding="utf-8") as f:
        json.dump(coords_cache, f, ensure_ascii=False, indent=4)

def geocode_address(address, city):
    """Fetches coordinates for a given address using Nominatim (OpenStreetMap)."""
    search_query = f"{address}, {city}, Lietuva".replace('\u200b', '').strip()
    if search_query in coords_cache:
        return coords_cache[search_query]

    # Use ASCII logging to avoid Windows cp1257 encoding errors
    print(f"Ieskoma koordinaciu: {search_query.encode('ascii', 'ignore').decode('ascii')}...")
    try:
        # Nominatim API
        url = "https://nominatim.openstreetmap.org/search"
        params = {
            "q": search_query,
            "format": "json",
            "limit": 1
        }
        headers = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
        }
        response = requests.get(url, params=params, headers=headers, timeout=10)
        
        if response.status_code != 200:
            print(f"Nominatim klaida: {response.status_code}")
            time.sleep(1)
            # Return a dummy coordinate so the script doesn't skip the station entirely
            return {"lat": 54.6872, "lng": 25.2797} # Default to Vilnius center
            
        data = response.json()
        
        if data:
            coords = {
                "lat": float(data[0]["lat"]),
                "lng": float(data[0]["lon"])
            }
            coords_cache[search_query] = coords
            time.sleep(1.2) # Be nice to Nominatim
            return coords
        else:
            # Fallback to city center if address not found
            print(f"NERASTA: {search_query}. Bandoma ieškoti tik pagal miestą...")
            time.sleep(1.2)
            res_city = requests.get(url, params={"q": f"{city}, Lietuva", "format": "json", "limit": 1}, headers=headers).json()
            if res_city:
                coords = {"lat": float(res_city[0]["lat"]), "lng": float(res_city[0]["lon"])}
                coords_cache[search_query] = coords
                time.sleep(1.2)
                return coords
            
    except Exception as e:
        print(f"Klaida ieškant koordinačių: {e}")
    
    return None

def fetch_data():
    default_discounts = {
        "Circle K": 0.035,
        "Neste": 0.035,
        "Viada": 0.030,
        "Baltic Petroleum": 0.000,
        "Emsi": 0.000,
        "Jozita": 0.000,
        "Saurida": 0.000,
        "Orlen": 0.000
    }
    print("Pradedamas degalų kainų duomenų siuntimas iš degalukaina.lt...")
    response = requests.get("https://degalukaina.lt/")
    soup = BeautifulSoup(response.text, "html.parser")
    
    table = soup.find("table")
    if not table:
        print("Klaida: nerasta duomenų lentelė.")
        return
    
    rows = table.find("tbody").find_all("tr")
    
    stations = []
    
    print(f"Rasta eilučių: {len(rows)}")
    
    count = 0
    for row in rows:
        tds = row.find_all("td")
        if len(tds) < 5:
            continue # Probably a header or empty row
        
        # 1. City / Municipality
        city = tds[0].get("data-place", "").replace(" m. sav.", "").replace(" r. sav.", "").replace(" sav.", "")
        if not city:
            continue
            
        # 2. Name
        name_tag = tds[0].find("span", class_="fw-semibold")
        if not name_tag:
            continue
        name = name_tag.text.strip()
        
        # 3. Address
        address_tag = tds[0].find("div", class_="text-light")
        if not address_tag:
            continue
        address_full = address_tag.get_text(separator=" ", strip=True)
        address = address_full.replace('\u200b', '').strip()
        
        # Prices
        def extract_price(td):
            val = td.text.strip()
            if val == '–' or not val:
                return None
            try:
                return float(val)
            except ValueError:
                return None
                
        price_diesel = extract_price(tds[1])
        price_a95 = extract_price(tds[2])
        price_a98 = extract_price(tds[3])
        price_lpg = extract_price(tds[4])
        
        # Clean up city names
        display_city = city.replace("Vilniaus", "Vilnius").replace("Kauno", "Kaunas").replace("Klaipėdos", "Klaipėda")
        
        coords = geocode_address(address, display_city)
        if not coords:
            coords = {"lat": 54.6872, "lng": 25.2797} # Fallback to Vilnius center
            
        # Determine logo emoji
        logo = "⛽"
        name_lower = name.lower()
        if "circle k" in name_lower: logo = "🔴"
        elif "viada" in name_lower: logo = "🦌"
        elif "neste" in name_lower: logo = "🟢"
        elif "baltic petroleum" in name_lower: logo = "🔵"
        elif "emsi" in name_lower: logo = "🛢️"
        elif "jozita" in name_lower: logo = "🟡"
            
        station = {
            "id": count + 1,
            "name": name,
            "logo": logo,
            "city": display_city,
            "address": address,
            "lat": coords["lat"],
            "lng": coords["lng"],
            "prices": {
                "A95": price_a95,
                "A98": price_a98,
                "Diesel": price_diesel,
                "LPG": price_lpg
            }
        }
        stations.append(station)
        count += 1
        
        # Save cache every 10 items
        if count % 10 == 0:
            save_cache()
            # Also save data.js incrementally so we can see updates live
            js_content = f"// Automatiškai sugeneruoti duomenys iš degalukaina.lt\nconst defaultDiscounts = {json.dumps(default_discounts, indent=4, ensure_ascii=False)};\nconst stationsData = {json.dumps(stations, indent=4, ensure_ascii=False)};"
            with open(DATA_FILE, "w", encoding="utf-8") as f:
                f.write(js_content)
            
    save_cache()
    
    # Final Save to data.js
    js_content = f"// Automatiškai sugeneruoti duomenys iš degalukaina.lt\nconst defaultDiscounts = {json.dumps(default_discounts, indent=4, ensure_ascii=False)};\nconst stationsData = {json.dumps(stations, indent=4, ensure_ascii=False)};"
    with open(DATA_FILE, "w", encoding="utf-8") as f:
        f.write(js_content)
        
    print(f"\nSėkmingai išsaugota {len(stations)} degalinių faile {DATA_FILE}!")

if __name__ == "__main__":
    fetch_data()
