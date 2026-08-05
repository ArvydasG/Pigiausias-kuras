import json
import re
import urllib.request
import time

print("Synthesizing additional spots from gas stations on major roads...")

hgv_spots = []

query = '''
[out:json][timeout:180];
(
  nwr["highway"~"rest_area|services"](53.8,20.9,56.5,26.9);
  nwr["amenity"="parking"]["hgv"~"designated|only"](53.8,20.9,56.5,26.9);
  nwr["amenity"="parking"]["truck"~"yes|designated|only"](53.8,20.9,56.5,26.9);
  nwr["amenity"="truck_parking"](53.8,20.9,56.5,26.9);
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
        
    hgv_spots.append({
        "name": name,
        "type_label": type_label,
        "address": tags.get('operator', ''),
        "lat": lat,
        "lng": lon,
        "logo": "🚛",
        "is_near_gas_station": True,
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
