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
    const navAppSelect = document.getElementById('nav-app-select');
    
    const settingsModal = document.getElementById('settings-modal');
    const openSettingsBtn = document.getElementById('open-settings-btn');
    const closeSettingsBtn = document.getElementById('close-settings-btn');
    const saveSettingsBtn = document.getElementById('save-settings-btn');
    const discountsContainer = document.getElementById('discounts-container');
    const calcModeRadios = document.getElementsByName('calc-mode');

    let map = null; // Leaflet map instance
    let isMapView = true;
    let watchId = null;
    let userMarker = null;
    let autoCenterMap = true;
    let centerBtn = null;

    // Load settings from localStorage
    let userDiscounts = JSON.parse(localStorage.getItem('userDiscounts')) || {};
    let calcMode = localStorage.getItem('calcMode') || 'with_discount';
    
    // Set initial radio
    calcModeRadios.forEach(radio => {
        if (radio.value === calcMode) radio.checked = true;
    });

    const networksData = [
        { name: "Circle K", logo: "🔴" },
        { name: "Neste", logo: "🟢" },
        { name: "Viada", logo: "🦌" },
        { name: "Baltic Petroleum", logo: "🔵" },
        { name: "Emsi", logo: "🛢️" },
        { name: "Jozita", logo: "🟡" },
        { name: "Saurida", logo: "⛽" },
        { name: "Orlen", logo: "⛽" }
    ];

    function renderDiscountsModal() {
        if (!discountsContainer) return;
        discountsContainer.innerHTML = '';
        networksData.forEach(network => {
            // defaultDiscounts comes from data.js
            const defaultDisc = (typeof defaultDiscounts !== 'undefined' ? defaultDiscounts[network.name] : 0) || 0;
            const defaultDiscCt = (defaultDisc * 100).toFixed(1);
            
            const savedSetting = userDiscounts[network.name] || { type: 'auto', customValue: 0 };
            
            const item = document.createElement('div');
            item.className = 'discount-item';
            
            item.innerHTML = `
                <div class="discount-header">
                    <span>${network.logo}</span>
                    <span>${network.name}</span>
                </div>
                <div class="discount-controls">
                    <label>
                        <input type="radio" name="disc-${network.name.replace(/\s+/g, '-')}" value="auto" ${savedSetting.type === 'auto' ? 'checked' : ''}>
                        Automatinė (${defaultDiscCt} ct/l)
                    </label>
                    <label>
                        <input type="radio" name="disc-${network.name.replace(/\s+/g, '-')}" value="manual" ${savedSetting.type === 'manual' ? 'checked' : ''}>
                        Įvesti ranka
                    </label>
                    <div class="custom-discount-input ${savedSetting.type === 'auto' ? 'hidden' : ''}">
                        <input type="number" step="0.1" min="0" max="50" class="manual-disc-input" data-network="${network.name}" value="${savedSetting.customValue}">
                        <span style="color: var(--text-secondary); font-size: 12px;">ct/l</span>
                    </div>
                </div>
            `;
            
            const radios = item.querySelectorAll(`input[type="radio"]`);
            const customInputDiv = item.querySelector('.custom-discount-input');
            radios.forEach(radio => {
                radio.addEventListener('change', (e) => {
                    if (e.target.value === 'manual') {
                        customInputDiv.classList.remove('hidden');
                    } else {
                        customInputDiv.classList.add('hidden');
                    }
                });
            });
            
            discountsContainer.appendChild(item);
        });
    }

    if (openSettingsBtn) {
        openSettingsBtn.addEventListener('click', () => {
            renderDiscountsModal();
            settingsModal.classList.remove('hidden');
        });
    }

    if (closeSettingsBtn) {
        closeSettingsBtn.addEventListener('click', () => {
            settingsModal.classList.add('hidden');
        });
    }

    if (saveSettingsBtn) {
        saveSettingsBtn.addEventListener('click', () => {
            const selectedMode = document.querySelector('input[name="calc-mode"]:checked').value;
            calcMode = selectedMode;
            localStorage.setItem('calcMode', calcMode);
            
            if (navAppSelect) localStorage.setItem('navAppPref', navAppSelect.value);
            
            networksData.forEach(network => {
                const selectedType = document.querySelector(`input[name="disc-${network.name.replace(/\s+/g, '-')}"]:checked`).value;
                const customVal = document.querySelector(`input.manual-disc-input[data-network="${network.name}"]`).value;
                userDiscounts[network.name] = {
                    type: selectedType,
                    customValue: parseFloat(customVal) || 0
                };
            });
            localStorage.setItem('userDiscounts', JSON.stringify(userDiscounts));
            
            settingsModal.classList.add('hidden');
            
            if (!resultsContainer.classList.contains('hidden')) {
                findCheapestFuel();
            }
        });
    }

    // Make find button visible by default now since we have a fallback
    findBtn.classList.remove('hidden');

    const savedNavApp = localStorage.getItem('navAppPref');
    if (savedNavApp) {
        navAppSelect.value = savedNavApp;
    }
    navAppSelect.addEventListener('change', (e) => {
        localStorage.setItem('navAppPref', e.target.value);
        if (!resultsContainer.classList.contains('hidden')) {
            findCheapestFuel();
        }
    });

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
                        if (map && isMapView && autoCenterMap) {
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

        // Add distance and apply discounts to each station
        let availableStations = stationsData.map(station => {
            const dist = calculateDistance(userLocation.lat, userLocation.lng, station.lat, station.lng);
            
            let calculatedPrices = {};
            let appliedDiscounts = {};
            
            let matchedNetwork = networksData.find(net => station.name.toLowerCase().includes(net.name.toLowerCase()));
            let discountValue = 0; // in Euros
            
            if (calcMode === 'with_discount' && matchedNetwork) {
                const netName = matchedNetwork.name;
                const setting = userDiscounts[netName] || { type: 'auto', customValue: 0 };
                
                if (setting.type === 'manual') {
                    discountValue = setting.customValue / 100;
                } else {
                    discountValue = (typeof defaultDiscounts !== 'undefined' ? defaultDiscounts[netName] : 0) || 0;
                }
            }
            
            for (let fuelType in station.prices) {
                if (station.prices[fuelType] !== null) {
                    calculatedPrices[fuelType] = Math.max(0, station.prices[fuelType] - discountValue);
                    appliedDiscounts[fuelType] = discountValue;
                } else {
                    calculatedPrices[fuelType] = null;
                }
            }
            
            return { 
                ...station, 
                distance: dist,
                calculatedPrices: calculatedPrices,
                appliedDiscounts: appliedDiscounts,
                originalPrices: station.prices
            };
        }).filter(station => {
            // Must have the selected fuel
            if (station.originalPrices[selectedFuel] == null) return false;
            
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

        // Sort by calculated price ascending, then by distance
        availableStations.sort((a, b) => {
            if (a.calculatedPrices[selectedFuel] === b.calculatedPrices[selectedFuel]) {
                return a.distance - b.distance;
            }
            return a.calculatedPrices[selectedFuel] - b.calculatedPrices[selectedFuel];
        });

        const cheapest = availableStations[0];
        const others = availableStations.slice(1);

        renderResults(cheapest, others);
    }

    function createNavLink(station) {
        const app = navAppSelect.value;
        const query = `${station.name} ${station.address}, ${station.city}`;
        
        if (app === 'waze') {
            if (station.lat && station.lng) {
                return `https://waze.com/ul?ll=${station.lat},${station.lng}&navigate=yes`;
            } else {
                return `https://waze.com/ul?q=${encodeURIComponent(query)}&navigate=yes`;
            }
        } else {
            let url = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(query)}`;
            if (userLocation && userLocation.lat && userLocation.lng) {
                url += `&origin=${userLocation.lat},${userLocation.lng}`;
            }
            url += `&travelmode=driving&dir_action=navigate`;
            return url;
        }
    }

    function renderResults(cheapest, others) {
        resultsContainer.classList.remove('hidden');

        function formatPriceHTML(station) {
            const finalPrice = station.calculatedPrices[selectedFuel].toFixed(2);
            const discountCt = station.appliedDiscounts[selectedFuel] * 100;
            let html = `<div class="price-value">${finalPrice}</div><div class="price-currency">€ / L</div>`;
            if (discountCt > 0) {
                html += `<div style="font-size: 11px; color: var(--success-color); margin-top: 4px; font-family: 'Share Tech Mono';">(-${discountCt.toFixed(1)} ct)</div>`;
            }
            return html;
        }

        // Render cheapest as a clickable link
        cheapestCard.innerHTML = `
            <a href="${createNavLink(cheapest)}" target="_blank" class="result-card highlight" style="display:flex; width:100%; border:none; box-shadow:none; padding:0; margin:0;">
                <div class="station-info">
                    <div class="station-logo">${cheapest.logo}</div>
                    <div class="station-details">
                        <h4>${cheapest.name} <span class="distance-badge" title="Apytikslis atstumas tiesia linija">~ ${cheapest.distance.toFixed(1)} km</span></h4>
                        <p>📍 ${cheapest.address}, ${cheapest.city}<br><span style="font-size: 10px; color: var(--primary-color);">Spauskite naviguoti</span></p>
                    </div>
                </div>
                <div class="price-tag" style="text-align: right;">
                    ${formatPriceHTML(cheapest)}
                </div>
            </a>
        `;

        // Initialize or update Map
        if (!map) {
            map = L.map('map').setView([userLocation.lat, userLocation.lng], 12);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; OpenStreetMap contributors'
            }).addTo(map);

            const CenterControl = L.Control.extend({
                options: { position: 'topleft' },
                onAdd: function () {
                    centerBtn = L.DomUtil.create('div', 'leaflet-bar leaflet-control leaflet-control-custom');
                    centerBtn.style.backgroundColor = '#111';
                    centerBtn.style.border = '2px solid #333';
                    centerBtn.style.color = '#FFF';
                    centerBtn.style.width = '34px';
                    centerBtn.style.height = '34px';
                    centerBtn.style.display = 'flex';
                    centerBtn.style.justifyContent = 'center';
                    centerBtn.style.alignItems = 'center';
                    centerBtn.style.cursor = 'pointer';
                    centerBtn.style.fontSize = '18px';
                    centerBtn.title = 'Auto-centravimas įjungtas';
                    centerBtn.innerHTML = '🎯';

                    centerBtn.onclick = function(e) {
                        e.stopPropagation();
                        autoCenterMap = !autoCenterMap;
                        centerBtn.innerHTML = autoCenterMap ? '🎯' : '🔓';
                        centerBtn.title = autoCenterMap ? 'Auto-centravimas įjungtas' : 'Auto-centravimas išjungtas';
                        if (autoCenterMap && usingGps && userLocation) {
                            map.panTo([userLocation.lat, userLocation.lng]);
                        }
                    };
                    return centerBtn;
                }
            });
            map.addControl(new CenterControl());

            map.on('dragstart', () => {
                if (autoCenterMap) {
                    autoCenterMap = false;
                    if (centerBtn) {
                        centerBtn.innerHTML = '🔓';
                        centerBtn.title = 'Auto-centravimas išjungtas';
                    }
                }
            });
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

        const minPrice = parseFloat(cheapest.calculatedPrices[selectedFuel]);
        const maxPrice = others.length > 0 ? parseFloat(others[others.length - 1].calculatedPrices[selectedFuel]) : minPrice;
        
        function getPriceStyle(priceVal) {
            const price = parseFloat(priceVal);
            if (minPrice === maxPrice) {
                return { bg: 'var(--success-color)', color: 'white' };
            }
            const ratio = (price - minPrice) / (maxPrice - minPrice);
            if (ratio < 0.33) {
                return { bg: 'var(--success-color)', color: 'white' };
            } else if (ratio < 0.66) {
                return { bg: '#FFD700', color: '#111' }; // Yellow
            } else {
                return { bg: '#F44336', color: 'white' }; // Red
            }
        }

        // Cheapest Station Marker
        const cStyle = getPriceStyle(cheapest.calculatedPrices[selectedFuel]);
        const cDiscount = cheapest.appliedDiscounts[selectedFuel] * 100;
        const cDiscountBadge = cDiscount > 0 ? `<div style="font-size: 10px; background: rgba(76, 175, 80, 0.9); color: white; padding: 1px 3px; border-radius: 2px; position: absolute; top: -12px; white-space: nowrap;">-${cDiscount.toFixed(1)} ct</div>` : '';
        
        const cheapestIcon = L.divIcon({
            html: `
                <div style="display: flex; flex-direction: column; align-items: center; position: relative;">
                    ${cDiscountBadge}
                    <div style="background: ${cStyle.bg}; color: ${cStyle.color}; padding: 2px 6px; border: 2px solid #111; border-radius: 2px; font-weight: bold; font-family: 'Share Tech Mono', monospace; font-size: 14px; box-shadow: 2px 2px 0 #111; white-space: nowrap; margin-bottom: -4px; z-index: 2;">
                        ${cheapest.calculatedPrices[selectedFuel].toFixed(2)} €
                    </div>
                    <div style="${iconStyle}; font-size: 30px; z-index: 1;">⚡</div>
                </div>
            `,
            className: '',
            iconSize: [60, 60],
            iconAnchor: [30, 56]
        });
        L.marker([cheapest.lat, cheapest.lng], {icon: cheapestIcon, zIndexOffset: 999})
            .addTo(map)
            .bindPopup(`
                <b>${cheapest.name} (Pigiausia)</b><br>
                <strong style="color: var(--primary-color); font-family: 'Black Ops One', system-ui; font-size: 16px;">${cheapest.calculatedPrices[selectedFuel].toFixed(2)} €/L</strong>
                ${cDiscount > 0 ? `<span style="font-size: 11px; color: var(--success-color);"> (su -${cDiscount.toFixed(1)} ct/l nuolaida)</span>` : ''}<br>
                <span style="font-size: 12px; color: #666;" title="Apytikslis atstumas tiesia linija">Apytikslis atstumas: ~ ${cheapest.distance.toFixed(1)} km</span><br>
                <a href="${createNavLink(cheapest)}" target="_blank" style="display:inline-block; margin-top:5px; color: var(--primary-color); font-weight: bold; text-decoration: none;">Naviguoti</a>
            `);

        // Other Stations Markers
        others.forEach(station => {
            const price = station.calculatedPrices[selectedFuel];
            const pStyle = getPriceStyle(price);
            
            const sDiscount = station.appliedDiscounts[selectedFuel] * 100;
            const sDiscountBadge = sDiscount > 0 ? `<div style="font-size: 9px; background: rgba(76, 175, 80, 0.9); color: white; padding: 1px 3px; border-radius: 2px; position: absolute; top: -10px; white-space: nowrap;">-${sDiscount.toFixed(1)}</div>` : '';
            
            const icon = L.divIcon({
                html: `
                    <div style="display: flex; flex-direction: column; align-items: center; position: relative;">
                        ${sDiscountBadge}
                        <div style="background: ${pStyle.bg}; color: ${pStyle.color}; padding: 2px 4px; border: 2px solid #111; border-radius: 2px; font-weight: bold; font-family: 'Share Tech Mono', monospace; font-size: 12px; box-shadow: 2px 2px 0 #111; white-space: nowrap; margin-bottom: -2px; z-index: 2;">
                            ${price.toFixed(2)} €
                        </div>
                        <div style="${iconStyle}; font-size: 18px; filter: grayscale(20%); z-index: 1;">${station.logo}</div>
                    </div>
                `,
                className: '',
                iconSize: [50, 50],
                iconAnchor: [25, 48]
            });
            L.marker([station.lat, station.lng], {icon: icon})
                .addTo(map)
                .bindPopup(`
                    <b>${station.name}</b><br>
                    <strong style="font-family: 'Black Ops One', system-ui; font-size: 14px;">${price.toFixed(2)} €/L</strong>
                    ${sDiscount > 0 ? `<span style="font-size: 11px; color: var(--success-color);"> (su -${sDiscount.toFixed(1)} ct/l)</span>` : ''}<br>
                    <span style="font-size: 12px; color: #666;" title="Apytikslis atstumas tiesia linija">Apytikslis atstumas: ~ ${station.distance.toFixed(1)} km</span><br>
                    <a href="${createNavLink(station)}" target="_blank" style="display:inline-block; margin-top:5px; color: var(--primary-color); text-decoration: none;">Naviguoti</a>
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
                card.href = createNavLink(station);
                card.target = "_blank";
                card.className = 'result-card';
                card.innerHTML = `
                    <div class="station-info">
                        <div class="station-logo">${station.logo}</div>
                        <div class="station-details">
                            <h4>${station.name} <span class="distance-badge" title="Apytikslis atstumas tiesia linija">~ ${station.distance.toFixed(1)} km</span></h4>
                            <p>📍 ${station.address}, ${station.city}</p>
                        </div>
                    </div>
                    <div class="price-tag" style="text-align: right;">
                        <div class="price-value" style="color: var(--text-primary); font-size: 18px;">${station.calculatedPrices[selectedFuel].toFixed(2)}</div>
                        <div class="price-currency">€ / L</div>
                        ${station.appliedDiscounts[selectedFuel] > 0 ? `<div style="font-size: 10px; color: var(--success-color); margin-top: 4px; font-family: 'Share Tech Mono';">(-${(station.appliedDiscounts[selectedFuel]*100).toFixed(1)} ct)</div>` : ''}
                    </div>
                `;
                otherStationsList.appendChild(card);
            });
        }
    }
});
