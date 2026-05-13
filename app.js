document.addEventListener('DOMContentLoaded', () => {
    // State variables
    let selectedFuel = 'A95';
    let userLocation = null; // Will be set after cities are loaded
    let usingGps = false;

    // DOM Elements
    const citySelect = document.getElementById('city-select');
    const useGpsBtn = document.getElementById('use-gps-btn');
    const addressInputGroup = document.getElementById('address-input-group');
    const fuelContainer = document.getElementById('fuel-type-container');
    const fuelBtns = document.querySelectorAll('.fuel-btn');
    const findBtn = document.getElementById('find-cheapest-btn');
    const resultsContainer = document.getElementById('results-container');
    const cheapestCard = document.getElementById('cheapest-card');
    const otherStationsList = document.getElementById('other-stations-list');
    const mapContainer = document.getElementById('map');
    const toggleViewBtn = document.getElementById('toggle-view-btn');
    const radiusSelect = document.getElementById('radius-select');
    const networkDropdownBtn = document.getElementById('network-dropdown-btn');
    const networkDropdownText = document.getElementById('network-dropdown-text');
    const networkDropdownOptions = document.getElementById('network-dropdown-options');
    const networkCheckboxes = document.querySelectorAll('.network-cb');
    const addressInput = document.getElementById('address-input');
    const searchAddressBtn = document.getElementById('search-address-btn');
    let map = null; // Leaflet map instance
    let isMapView = true;
    let watchId = null;
    let userMarker = null;

    // Make find button visible by default now since we have a fallback
    findBtn.classList.remove('hidden');

    // Populate cities dynamically
    const uniqueCities = [...new Set(stationsData.map(s => s.city))].sort();
    citySelect.innerHTML = '';
    uniqueCities.forEach(city => {
        const option = document.createElement('option');
        option.value = city;
        option.textContent = city;
        citySelect.appendChild(option);
    });

    // Set default city to Vilnius or the first available
    const defaultCity = uniqueCities.includes("Vilnius") ? "Vilnius" : uniqueCities[0];
    citySelect.value = defaultCity;
    const defaultStation = stationsData.find(s => s.city === defaultCity);
    if (defaultStation) {
        userLocation = { lat: defaultStation.lat, lng: defaultStation.lng };
    }

    // Event Listeners
    citySelect.addEventListener('change', (e) => {
        usingGps = false;
        if (watchId) {
            navigator.geolocation.clearWatch(watchId);
            watchId = null;
        }
        useGpsBtn.style.background = '#FF3B30';
        useGpsBtn.style.color = 'white';
        addressInputGroup.classList.remove('hidden');
        findBtn.classList.remove('hidden');
        
        const selectedCity = e.target.value;
        const firstStationInCity = stationsData.find(s => s.city === selectedCity);
        if (firstStationInCity) {
            userLocation = { lat: firstStationInCity.lat, lng: firstStationInCity.lng };
        }
        // Automatically search when city changes if results are already visible
        if (!resultsContainer.classList.contains('hidden')) {
            findCheapestFuel();
        }
    });

    useGpsBtn.addEventListener('click', () => {
        initLocation();
    });

    searchAddressBtn.addEventListener('click', () => {
        searchByAddress();
    });

    addressInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchByAddress();
        }
    });

    fuelContainer.addEventListener('click', (e) => {
        if(e.target.classList.contains('fuel-btn')) {
            fuelBtns.forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');
            selectedFuel = e.target.getAttribute('data-type');
            if (!resultsContainer.classList.contains('hidden')) {
                findCheapestFuel(); 
            }
        }
    });

    findBtn.addEventListener('click', () => {
        findCheapestFuel();
    });

    radiusSelect.addEventListener('change', () => {
        if (!resultsContainer.classList.contains('hidden')) {
            findCheapestFuel();
        }
    });

    networkDropdownBtn.addEventListener('click', () => {
        networkDropdownOptions.classList.toggle('hidden');
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.custom-select-container')) {
            networkDropdownOptions.classList.add('hidden');
        }
    });

    networkDropdownOptions.addEventListener('change', (e) => {
        if (e.target.classList.contains('network-cb')) {
            const val = e.target.value;
            if (val === 'all') {
                if (e.target.checked) {
                    networkCheckboxes.forEach(cb => { if (cb.value !== 'all') cb.checked = false; });
                }
            } else {
                const allCb = document.querySelector('.network-cb[value="all"]');
                if (e.target.checked) {
                    if (allCb) allCb.checked = false;
                } else {
                    const anyChecked = document.querySelectorAll('.network-cb:checked').length > 0;
                    if (!anyChecked && allCb) allCb.checked = true;
                }
            }
            
            const checked = Array.from(document.querySelectorAll('.network-cb:checked'));
            if (checked.length === 0 || (checked.length === 1 && checked[0].value === 'all')) {
                networkDropdownText.innerText = 'Visi tinklai';
            } else if (checked.length === 1) {
                networkDropdownText.innerText = checked[0].parentNode.textContent.trim();
            } else {
                networkDropdownText.innerText = `Pasirinkta: ${checked.length}`;
            }

            if (!resultsContainer.classList.contains('hidden')) {
                findCheapestFuel();
            }
        }
    });

    toggleViewBtn.addEventListener('click', () => {
        isMapView = !isMapView;
        if (isMapView) {
            mapContainer.classList.remove('hidden');
            otherStationsList.classList.add('hidden');
            toggleViewBtn.innerText = 'Rodyti sąrašą';
            if (map) {
                map.invalidateSize();
            }
        } else {
            mapContainer.classList.add('hidden');
            otherStationsList.classList.remove('hidden');
            toggleViewBtn.innerText = 'Rodyti žemėlapį';
        }
    });

    // Haversine formula to calculate distance between two coordinates
    function calculateDistance(lat1, lon1, lat2, lon2) {
        const R = 6371; // Radius of the earth in km
        const dLat = (lat2 - lat1) * Math.PI / 180;
        const dLon = (lon2 - lon1) * Math.PI / 180;
        const a = 
            Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
            Math.sin(dLon/2) * Math.sin(dLon/2); 
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
        const d = R * c; // Distance in km
        return d;
    }

    function initLocation() {
        if (watchId) {
            navigator.geolocation.clearWatch(watchId);
            watchId = null;
        }

        useGpsBtn.style.background = '#FF9500'; // Orange while loading

        if ("geolocation" in navigator) {
            watchId = navigator.geolocation.watchPosition(
                (position) => {
                    const isFirstTime = !usingGps;
                    usingGps = true;
                    userLocation = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    };
                    useGpsBtn.style.background = 'var(--success-color)';
                    useGpsBtn.style.color = 'white';
                    addressInputGroup.classList.add('hidden');
                    findBtn.classList.add('hidden');
                    
                    if (isFirstTime || resultsContainer.classList.contains('hidden')) {
                        updateCityFromLocation();
                        findCheapestFuel();
                    } else {
                        if (userMarker) {
                            userMarker.setLatLng([userLocation.lat, userLocation.lng]);
                        }
                        if (map && isMapView) {
                            map.panTo([userLocation.lat, userLocation.lng]);
                        }
                    }
                },
                (error) => {
                    if (!usingGps) {
                        console.warn("GPS failed or blocked, falling back to IP.", error);
                        fetchIPLocation();
                    }
                },
                { enableHighAccuracy: true, maximumAge: 0, timeout: 10000 }
            );
        } else {
            fetchIPLocation();
        }
    }

    async function fetchIPLocation() {
        useGpsBtn.style.background = '#FF9500';
        try {
            const response = await fetch('https://get.geojs.io/v1/ip/geo.json');
            if (!response.ok) throw new Error('Network error');
            const data = await response.json();
            
            usingGps = true;
            userLocation = {
                lat: parseFloat(data.latitude),
                lng: parseFloat(data.longitude)
            };
            
            useGpsBtn.style.background = 'var(--success-color)';
            useGpsBtn.style.color = 'white';
            addressInputGroup.classList.add('hidden');
            findBtn.classList.add('hidden');
            
            updateCityFromLocation();
            findCheapestFuel();
        } catch (error) {
            console.error("IP geocoding failed", error);
            usingGps = false;
            useGpsBtn.style.background = '#FF3B30';
            useGpsBtn.style.color = 'white';
            addressInputGroup.classList.remove('hidden');
            findBtn.classList.remove('hidden');
        }
    }

    async function searchByAddress() {
        const address = addressInput.value.trim();
        const city = citySelect.value;
        if (!address) {
            alert("Prašome įvesti adresą.");
            return;
        }

        // User is typing an address, leave the GPS button red

        const query = encodeURIComponent(`${address}, ${city}, Lithuania`);
        try {
            const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${query}&limit=1`);
            if (!response.ok) throw new Error('Network error');
            const data = await response.json();
            
            if (data && data.length > 0) {
                usingGps = false;
                if (watchId) {
                    navigator.geolocation.clearWatch(watchId);
                    watchId = null;
                }
                userLocation = {
                    lat: parseFloat(data[0].lat),
                    lng: parseFloat(data[0].lon)
                };
                
                useGpsBtn.style.background = '#FF3B30';
                useGpsBtn.style.color = 'white';
                
                updateCityFromLocation();
                findCheapestFuel();
            } else {
                alert("Adresas nerastas. Patikrinkite, ar teisingai įvedėte.");
            }
        } catch (error) {
            console.error("Address search failed", error);
            alert("Klaida ieškant adreso.");
        }
    }

    function updateCityFromLocation() {
        if (!userLocation) return;
        let minDistance = Infinity;
        let closestCity = citySelect.value;
        for(let station of stationsData) {
            let dist = calculateDistance(userLocation.lat, userLocation.lng, station.lat, station.lng);
            if (dist < minDistance) {
                minDistance = dist;
                closestCity = station.city;
            }
        }
        // Ensure the option actually exists in the select
        if (Array.from(citySelect.options).some(opt => opt.value === closestCity)) {
            citySelect.value = closestCity;
        }
    }

    // Core Logic
    function findCheapestFuel() {
        if (!userLocation) return;

        const selectedCity = citySelect.value;
        const activeCheckboxes = document.querySelectorAll('.network-cb:checked');
        const selectedNetworks = Array.from(activeCheckboxes).map(cb => cb.value);
        const maxRadius = radiusSelect.value === 'all' ? Infinity : parseFloat(radiusSelect.value);

        // Add distance to each station and filter out those without the selected fuel
        let availableStations = stationsData.map(station => {
            const dist = calculateDistance(userLocation.lat, userLocation.lng, station.lat, station.lng);
            return { ...station, distance: dist };
        }).filter(station => {
            // Must have the selected fuel
            if (station.prices[selectedFuel] == null) return false;
            
            // Network filter
            if (!selectedNetworks.includes('all')) {
                const matchesNetwork = selectedNetworks.some(net => station.name.toLowerCase().includes(net.toLowerCase()));
                if (!matchesNetwork) return false;
            }
            
            if (maxRadius !== Infinity) {
                return station.distance <= maxRadius;
            } else {
                return station.city === citySelect.value;
            }
        });

        if (availableStations.length === 0) {
            alert('Atsiprašome, netoliese nėra degalinių su šiuo kuro tipu.');
            return;
        }

        // Sort by price ascending, then by distance
        availableStations.sort((a, b) => {
            if (a.prices[selectedFuel] === b.prices[selectedFuel]) {
                return a.distance - b.distance;
            }
            return a.prices[selectedFuel] - b.prices[selectedFuel];
        });

        const cheapest = availableStations[0];
        const others = availableStations.slice(1);

        renderResults(cheapest, others);
    }

    function createGoogleMapsLink(station) {
        const query = `${station.name} ${station.address}, ${station.city}`;
        let url = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(query)}`;
        if (userLocation && userLocation.lat && userLocation.lng) {
            url += `&origin=${userLocation.lat},${userLocation.lng}`;
        }
        url += `&travelmode=driving&dir_action=navigate`;
        return url;
    }

    function renderResults(cheapest, others) {
        resultsContainer.classList.remove('hidden');

        // Render cheapest as a clickable link
        cheapestCard.innerHTML = `
            <a href="${createGoogleMapsLink(cheapest)}" target="_blank" class="result-card highlight" style="display:flex; width:100%; border:none; box-shadow:none; padding:0; margin:0;">
                <div class="station-info">
                    <div class="station-logo">${cheapest.logo}</div>
                    <div class="station-details">
                        <h4>${cheapest.name} <span class="distance-badge">${cheapest.distance.toFixed(1)} km</span></h4>
                        <p>📍 ${cheapest.address}, ${cheapest.city}<br><span style="font-size: 10px; color: var(--primary-color);">Spauskite naviguoti</span></p>
                    </div>
                </div>
                <div class="price-tag">
                    <div class="price-value">${cheapest.prices[selectedFuel].toFixed(2)}</div>
                    <div class="price-currency">€ / L</div>
                </div>
            </a>
        `;

        // Initialize or update Map
        if (!map) {
            map = L.map('map').setView([userLocation.lat, userLocation.lng], 12);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; OpenStreetMap contributors'
            }).addTo(map);
        } else {
            // Clear existing markers
            map.eachLayer((layer) => {
                if (layer instanceof L.Marker) {
                    layer.remove();
                }
            });
        }
        
        // Define common style for icons
        const iconStyle = `
            font-size: 24px;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;
            text-shadow: 0 2px 4px rgba(0,0,0,0.3);
        `;

        // User Location Marker
        const userIcon = L.divIcon({
            html: `<div style="${iconStyle}">🚗</div>`,
            className: '',
            iconSize: [30, 30],
            iconAnchor: [15, 15]
        });
        userMarker = L.marker([userLocation.lat, userLocation.lng], {icon: userIcon, zIndexOffset: 1000})
            .addTo(map)
            .bindPopup("<b>Jūsų vieta</b><br>Sekama gyvai");

        // Cheapest Station Marker
        const cheapestIcon = L.divIcon({
            html: `<div style="${iconStyle}; font-size: 30px;">🏆</div>`,
            className: '',
            iconSize: [40, 40],
            iconAnchor: [20, 40]
        });
        L.marker([cheapest.lat, cheapest.lng], {icon: cheapestIcon, zIndexOffset: 999})
            .addTo(map)
            .bindPopup(`
                <b>${cheapest.name} (Pigiausia)</b><br>
                <strong style="color: var(--success-color); font-size: 16px;">${cheapest.prices[selectedFuel].toFixed(2)} €/L</strong><br>
                <span style="font-size: 12px; color: #666;">Atstumas: ${cheapest.distance.toFixed(1)} km</span><br>
                <a href="${createGoogleMapsLink(cheapest)}" target="_blank" style="display:inline-block; margin-top:5px; color: var(--primary-color); font-weight: bold; text-decoration: none;">Naviguoti</a>
            `);

        // Other Stations Markers
        others.forEach(station => {
            const icon = L.divIcon({
                html: `<div style="${iconStyle}; font-size: 18px; filter: grayscale(50%);">${station.logo}</div>`,
                className: '',
                iconSize: [24, 24],
                iconAnchor: [12, 24]
            });
            L.marker([station.lat, station.lng], {icon: icon})
                .addTo(map)
                .bindPopup(`
                    <b>${station.name}</b><br>
                    <strong>${station.prices[selectedFuel].toFixed(2)} €/L</strong><br>
                    <span style="font-size: 12px; color: #666;">Atstumas: ${station.distance.toFixed(1)} km</span><br>
                    <a href="${createGoogleMapsLink(station)}" target="_blank" style="display:inline-block; margin-top:5px; color: var(--primary-color); text-decoration: none;">Naviguoti</a>
                `);
        });

        // Fit map bounds to show user and cheapest station
        const group = new L.featureGroup([
            L.marker([userLocation.lat, userLocation.lng]),
            L.marker([cheapest.lat, cheapest.lng])
        ]);
        map.fitBounds(group.getBounds().pad(0.3));

        // Render others (List)
        otherStationsList.innerHTML = '';
        if (others.length === 0) {
            otherStationsList.innerHTML = '<p style="color: var(--text-secondary); font-size: 14px;">Daugiau degalinių nerasta.</p>';
        } else {
            others.forEach(station => {
                const card = document.createElement('a');
                card.href = createGoogleMapsLink(station);
                card.target = "_blank";
                card.className = 'result-card';
                card.innerHTML = `
                    <div class="station-info">
                        <div class="station-logo">${station.logo}</div>
                        <div class="station-details">
                            <h4>${station.name} <span class="distance-badge">${station.distance.toFixed(1)} km</span></h4>
                            <p>📍 ${station.address}, ${station.city}</p>
                        </div>
                    </div>
                    <div class="price-tag">
                        <div class="price-value" style="color: var(--text-primary); font-size: 18px;">${station.prices[selectedFuel].toFixed(2)}</div>
                        <div class="price-currency">€ / L</div>
                    </div>
                `;
                otherStationsList.appendChild(card);
            });
        }
    }
});
