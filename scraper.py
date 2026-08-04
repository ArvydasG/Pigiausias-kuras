import os
import sys
import json
import time
import subprocess

def ensure_packages():
    required = {"playwright"}
    try:
        import pkg_resources
        installed = {pkg.key for pkg in pkg_resources.working_set}
        missing = required - installed
        if missing:
            print(f"Diegiami trukstami paketai: {missing}...")
            subprocess.check_call([sys.executable, "-m", "pip", "install", *missing])
            subprocess.check_call([sys.executable, "-m", "playwright", "install", "chromium"])
    except Exception as e:
        print(f"Nepavyko patikrinti paketu: {e}. Bandoma test...")

ensure_packages()

from playwright.sync_api import sync_playwright

DATA_FILE = "data.js"
API_URL = "https://api-degalukainos.ena.lt/api/v1/read/prices/latest"

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
    print("Pradedamas degalų kainų duomenų siuntimas iš naujojo LEA API naudojant Playwright...")

    api_response_data = None

    def handle_response(response):
        nonlocal api_response_data
        if API_URL in response.url and response.status == 200:
            try:
                json_data = response.json()
                if "data" in json_data:
                    api_response_data = json_data
            except Exception as e:
                print("Nepavyko nuskaityti API JSON:", e)

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.on("response", handle_response)
        
        print("Atidaromas LEA puslapis...")
        page.goto("https://degalukainos.ena.lt/", wait_until="networkidle")
        
        # Palaukiam 2 sekundes, kad įsitikintume jog API užklausa tikrai suvaikščiojo
        page.wait_for_timeout(2000)
        browser.close()

    if not api_response_data or "data" not in api_response_data:
        print("Klaida: Nepavyko perimti API duomenų iš puslapio.")
        return

    raw_data = api_response_data["data"]
    last_updated_api = api_response_data.get("last_updated", "Nežinoma")
    if ' ' in last_updated_api:
        last_updated_api = last_updated_api.split(' ')[0]
        
    print(f"Rasta {len(raw_data)} kainų įrašų iš API.")
    
    stations_dict = {}
    
    for row in raw_data:
        name = str(row.get("gas_station_name", row.get("company_name", ""))).strip()
        raw_city = str(row.get("municipality", "")).strip()
        address = str(row.get("address", "")).strip()
        fuel_type_raw = str(row.get("fuel_type", "")).strip()
        price_val = row.get("price")
        
        if not price_val:
            continue
        try:
            price = float(price_val)
        except ValueError:
            continue
            
        key = (name, raw_city, address)
        if key not in stations_dict:
            city = raw_city.replace(" m. sav.", "").replace(" r. sav.", "").replace(" sav.", "")
            display_city = city.replace("Vilniaus", "Vilnius").replace("Kauno", "Kaunas").replace("Klaipėdos", "Klaipėda")
            
            logo = "⛽"
            name_lower = name.lower()
            if "circle k" in name_lower: logo = "🔴"
            elif "viada" in name_lower: logo = "🦌"
            elif "neste" in name_lower: logo = "🟢"
            elif "baltic petroleum" in name_lower: logo = "🔵"
            elif "emsi" in name_lower: logo = "🛢️"
            elif "jozita" in name_lower: logo = "🟡"
            elif "saurida" in name_lower: logo = "🔥"
            elif "orlen" in name_lower: logo = "🦅"
            
            lat = float(row.get("latitude", 0)) if row.get("latitude") else 54.6872
            lng = float(row.get("longitude", 0)) if row.get("longitude") else 25.2797
            
            stations_dict[key] = {
                "name": name,
                "logo": logo,
                "city": display_city,
                "address": address,
                "lat": lat,
                "lng": lng,
                "prices": {
                    "A95": None,
                    "A98": None,
                    "Diesel": None,
                    "LPG": None
                }
            }
            
        if fuel_type_raw == 'benzinas_95':
            stations_dict[key]["prices"]["A95"] = price
        elif fuel_type_raw == 'benzinas_98':
            stations_dict[key]["prices"]["A98"] = price
        elif fuel_type_raw == 'dyzelinas':
            stations_dict[key]["prices"]["Diesel"] = price
        elif fuel_type_raw == 'snd':
            stations_dict[key]["prices"]["LPG"] = price

    stations = []
    count = 1
    for key, st in stations_dict.items():
        st["id"] = count
        stations.append(st)
        count += 1
        
    js_content = f"// Automatiškai sugeneruoti duomenys iš LEA API (via Playwright)\nconst lastUpdated = '{last_updated_api}';\nconst defaultDiscounts = {json.dumps(default_discounts, indent=4, ensure_ascii=False)};\nconst stationsData = {json.dumps(stations, indent=4, ensure_ascii=False)};"
    with open(DATA_FILE, "w", encoding="utf-8") as f:
        f.write(js_content)
        
    print(f"\nSėkmingai išsaugota {len(stations)} degalinių (sujungus kuro tipus) faile {DATA_FILE}!")

if __name__ == "__main__":
    fetch_data()
