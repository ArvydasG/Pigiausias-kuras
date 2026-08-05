import json
import re
import urllib.request
import time
import math
import os

def calc_dist(lat1, lon1, lat2, lon2):
    R = 6371
    dLat = (lat2 - lat1) * math.pi / 180
    dLon = (lon2 - lon1) * math.pi / 180
    a = math.sin(dLat/2)*math.sin(dLat/2) + math.cos(lat1*math.pi/180)*math.cos(lat2*math.pi/180)*math.sin(dLon/2)*math.sin(dLon/2)
    return R * 2 * math.atan2(math.sqrt(a), math.sqrt(1-a))

print("Synthesizing additional spots from gas stations on major roads...")

gas_stations = []
try:
    if os.path.exists('data.js'):
        with open('data.js', 'r', encoding='utf-8') as f:
            content = f.read()
            match = re.search(r'const stationsData\s*=\s*(\[.*?\]);', content, re.DOTALL)
            if match:
                gas_stations = json.loads(match.group(1))
except Exception as e:
    print("Could not load data.js for proximity checking:", e)

hgv_spots = []

query = '''
[out:json][timeout:180];
area["ISO3166-1"="LT"][admin_level=2]->.searchArea;
(
  nwr["highway"~"rest_area|services"](area.searchArea)(53.8,20.9,56.5,26.9);
  nwr["amenity"="parking"]["hgv"~"designated|only"](area.searchArea)(53.8,20.9,56.5,26.9);
  nwr["amenity"="parking"]["truck"~"yes|designated|only"](area.searchArea)(53.8,20.9,56.5,26.9);
  nwr["amenity"="truck_parking"](area.searchArea)(53.8,20.9,56.5,26.9);
  nwr["amenity"="parking"]["name"~"truck|sunkvežim|tir",i](area.searchArea)(53.8,20.9,56.5,26.9);
);
out center;
'''

osm_data = {}
cache_file = "osm_hgv_cache.json"

print("Querying Overpass API for official rest areas...")
mirrors = [
    'https://overpass-api.de/api/interpreter',
    'https://lz4.overpass-api.de/api/interpreter',
    'https://overpass.kumi.systems/api/interpreter',
    'https://overpass.openstreetmap.fr/api/interpreter'
]
import urllib.parse

success = False
for attempt in range(4):
    data = urllib.parse.urlencode({'data': query}).encode('utf-8')
    req = urllib.request.Request(mirrors[attempt], data=data)
    req.add_header('User-Agent', 'KuroKainosApp/1.0 (arvygail@gmail.com)')
    try:
        with urllib.request.urlopen(req, timeout=180) as response:
            osm_data = json.loads(response.read().decode())
            success = True
            break
    except Exception as e:
        print(f"OSM Error (Attempt {attempt+1}): {e}")
        time.sleep(3)

if success:
    print("Successfully fetched from OSM. Saving cache...")
    try:
        with open(cache_file, "w", encoding="utf-8") as f:
            json.dump(osm_data, f, ensure_ascii=False)
    except: pass
else:
    print("All Overpass mirrors failed. Loading from local cache...")
    import os
    if os.path.exists(cache_file):
        try:
            with open(cache_file, "r", encoding="utf-8") as f:
                osm_data = json.load(f)
        except Exception as e:
            print("Failed to load cache:", e)
    else:
        print("No cache found! Only synthetic stations will be available.")

for el in osm_data.get('elements', []):
    lat = el.get('lat') or (el.get('center', {}).get('lat'))
    lon = el.get('lon') or (el.get('center', {}).get('lon'))
    if not lat or not lon: continue
    
    tags = el.get('tags', {})
    type_label = "Pakelės poilsio zona" if tags.get('highway') == 'rest_area' else "Vilkikų stovėjimo aikštelė"
    name = tags.get('name') or ("🚛 " + type_label)
    
    is_gas = (tags.get('highway') == 'services') or ('fuel' in tags.get('amenity', ''))
    if not is_gas and gas_stations:
        for gs in gas_stations:
            # Ieškome degalinių iki 300 metrų spinduliu
            if gs.get('lat') and gs.get('lng'):
                if calc_dist(lat, lon, gs['lat'], gs['lng']) < 0.3:
                    is_gas = True
                    break
        
    hgv_spots.append({
        "name": name,
        "type_label": type_label,
        "address": tags.get('operator', ''),
        "lat": lat,
        "lng": lon,
        "logo": "🚛",
        "is_near_gas_station": is_gas,
        "near_station_name": "",
        "capacity": "",
        "prices": { "Vilkikams": 1 }
    })
hgv_spots.insert(0, {
    "name": "🚛 Vilkikų stovėjimo aikštelė",
    "type_label": "Vilkikų stovėjimo aikštelė",
    "address": "Saviečių k., Vandžiogalos g. 29, 58151",
    "lat": 55.166933,
    "lng": 23.994789,
    "logo": "🚛",
    "is_near_gas_station": True,
    "near_station_name": "S.Savicko įmonė",
    "capacity": "",
    "prices": {
        "Vilkikams": 1
    }
})

js_content = "const hgvData = " + json.dumps(hgv_spots, indent=4, ensure_ascii=False) + ";"
with open('data_hgv.js', 'w', encoding='utf-8') as f:
    f.write(js_content)

print(f"Written {len(hgv_spots)} spots to data_hgv.js")
