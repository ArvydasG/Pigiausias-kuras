document.addEventListener('DOMContentLoaded', () => {

    let allStationsRaw = typeof evStationsData !== 'undefined' ? stationsData.concat(evStationsData) : stationsData;
    if (typeof hgvData !== 'undefined') {
        allStationsRaw = allStationsRaw.concat(hgvData);
    }

    const welcomeScreen = document.getElementById('welcome-screen');
    const mainApp = document.getElementById('main-app');
    const step1 = document.getElementById('welcome-step-1');
    const step2 = document.getElementById('welcome-step-2');
    const welcomeBack = document.getElementById('welcome-back');
    
    let selectedAppFuel = null;
    let selectedAppVehicle = null;

    document.querySelectorAll('.fuel-type-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            selectedAppFuel = btn.closest('button').getAttribute('data-type');
            if (selectedAppFuel === 'electric') {
                selectedAppVehicle = 'car';
                initializeApp();
            } else {
                step1.style.display = 'none';
                step2.style.display = 'block';
            }
        });
    });

    document.querySelectorAll('.vehicle-type-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            selectedAppVehicle = btn.closest('button').getAttribute('data-vehicle');
            initializeApp();
        });
    });

    if (welcomeBack) {
        welcomeBack.addEventListener('click', () => {
            step2.style.display = 'none';
            step1.style.display = 'block';
        });
    }

    let allStations = [];

    function initializeApp() {
        welcomeScreen.style.display = 'none';
        mainApp.style.display = 'block';

        // Paimame VISUS duomenis be jokio filtravimo (kaip norėjo vartotojas)
        allStations = allStationsRaw.map(s => {
            let cityStr = s.city || t('city_unknown');
            if (!s.ev_status && s.network !== 'HGV' && s.address && String(s.address).includes(',')) {
                cityStr = String(s.address).split(',')[0].trim();
            } else if (s.city) {
                cityStr = String(s.city).split(',')[0].trim();
            }
            return { ...s, city: cityStr };
        });

        // Toggle visibility of fuel buttons based on selection - PASALINTA (mygtukai nebeslepiami)
        const fuelBtnsMap = {
            'A95': document.querySelector('.fuel-btn[data-type="A95"]'),
            'A98': document.querySelector('.fuel-btn[data-type="A98"]'),
            'Dyzelinas': document.querySelector('.fuel-btn[data-type="Diesel"]') || document.querySelector('.fuel-btn[data-type="Dyzelinas"]'),
            'Dujos': document.querySelector('.fuel-btn[data-type="LPG"]') || document.querySelector('.fuel-btn[data-type="Dujos"]'),
            'Elektra': document.querySelector('.fuel-btn[data-type="Elektra"]'),
            'Vilkikams': document.querySelector('.fuel-btn[data-type="Vilkikams"]')
        };

        // Automatiškai paspaudžiame atitinkamą kuro mygtuką pagal pradinį pasirinkimą
        if (selectedAppFuel === 'electric') {
            if (fuelBtnsMap['Elektra']) fuelBtnsMap['Elektra'].click();
        } else {
            if (selectedAppVehicle === 'car') {
                if (fuelBtnsMap['A95']) fuelBtnsMap['A95'].click();
            } else if (selectedAppVehicle === 'hgv') {
                if (fuelBtnsMap['Vilkikams']) fuelBtnsMap['Vilkikams'].click();
            }
        }

        // Populate cities dynamically from ALL stations
        const uniqueCities = [...new Set(allStations.map(s => s.city))].sort();
        citySelect.innerHTML = '';
        
        const allOption = document.createElement('option');
        allOption.value = 'all';
        allOption.textContent = t('city_all');
        allOption.setAttribute('data-i18n', 'city_all');
        citySelect.appendChild(allOption);
        
        uniqueCities.forEach(city => {
            const option = document.createElement('option');
            option.value = city;
            option.textContent = city;
            citySelect.appendChild(option);
        });

        citySelect.value = 'all';
        userLocation = { lat: 55.1694, lng: 23.8813 }; // Center of Lithuania

        // Initial search
        setTimeout(() => findCheapestFuel(false, true), 100);
    }
    
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
    const refreshBtn = document.getElementById('refresh-btn');
    const lastUpdatedText = document.getElementById('last-updated-text');
    
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
                        ${t('disc_auto')} (${defaultDiscCt} ct/l)
                    </label>
                    <label>
                        <input type="radio" name="disc-${network.name.replace(/\s+/g, '-')}" value="manual" ${savedSetting.type === 'manual' ? 'checked' : ''}>
                        ${t('disc_manual')}
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
        saveSettingsBtn.addEventListener('click', (e) => {
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
            
            const btn = e.target;
            const originalText = btn.innerHTML;
            btn.classList.add('saved');
            btn.innerHTML = '✔ ' + t('btn_saved');
            
            setTimeout(() => {
                settingsModal.classList.add('hidden');
                btn.classList.remove('saved');
                btn.innerHTML = originalText;
                
                if (!resultsContainer.classList.contains('hidden')) {
                    findCheapestFuel();
                }
            }, 800);
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

    if (refreshBtn) {
        refreshBtn.addEventListener('click', () => {
            window.location.reload();
        });
    }

    if (lastUpdatedText && typeof lastUpdated !== 'undefined') {
        lastUpdatedText.textContent = lastUpdated;
    }

    // City population is now handled in initializeApp

    // Event Listeners
    function resetAutoCenter() {
        autoCenterMap = true;
        if (centerBtn) {
            centerBtn.innerHTML = '🎯';
            centerBtn.title = t('auto_center_on');
        }
    }

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
        resetAutoCenter();
        
        const selectedCity = e.target.value;
        if (selectedCity === 'all') {
            userLocation = { lat: 55.1694, lng: 23.8813 }; // Center of Lithuania
        } else {
            const stationsInCity = allStations.filter(s => s.city === selectedCity);
            let validStations = stationsInCity.filter(s => typeof s.lat === 'number' && !isNaN(s.lat) && typeof s.lng === 'number' && !isNaN(s.lng));
            if (validStations.length > 0) {
                const sumLat = validStations.reduce((sum, s) => sum + s.lat, 0);
                const sumLng = validStations.reduce((sum, s) => sum + s.lng, 0);
                userLocation = { 
                    lat: sumLat / validStations.length, 
                    lng: sumLng / validStations.length 
                };
            }
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
        resetAutoCenter();
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
            
            updateNetworkDropdownText();

            if (!resultsContainer.classList.contains('hidden')) {
                findCheapestFuel();
            }
        }
    });
    
    function updateNetworkDropdownText() {
        const checked = Array.from(document.querySelectorAll('.network-cb:checked'));
        if (checked.length === 0 || (checked.length === 1 && checked[0].value === 'all')) {
            networkDropdownText.innerText = t('net_all_text');
        } else if (checked.length === 1) {
            networkDropdownText.innerText = checked[0].parentNode.textContent.trim();
        } else {
            networkDropdownText.innerText = `${t('selected')} ${checked.length}`;
        }
    }

    toggleViewBtn.addEventListener('click', () => {
        isMapView = !isMapView;
        if (isMapView) {
            mapContainer.classList.remove('hidden');
            otherStationsList.classList.add('hidden');
            toggleViewBtn.innerText = t('btn_toggle_view_list');
            if (map) {
                map.invalidateSize();
            }
        } else {
            mapContainer.classList.add('hidden');
            otherStationsList.classList.remove('hidden');
            toggleViewBtn.innerText = t('btn_toggle_view_map');
        }
    });

    // Haversine formula to calculate distance between two coordinates
    function calculateDistance(lat1, lon1, lat2, lon2) {
        lat1 = parseFloat(lat1); lon1 = parseFloat(lon1);
        lat2 = parseFloat(lat2); lon2 = parseFloat(lon2);
        if (isNaN(lat1) || isNaN(lon1) || isNaN(lat2) || isNaN(lon2)) return Infinity;
        
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
        
        let query;
        if (!address) {
            // If no address is provided, search for the city center
            query = encodeURIComponent(`${city}, Lithuania`);
        } else {
            query = encodeURIComponent(`${address}, ${city}, Lithuania`);
        }

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
                alert(t('err_address_not_found'));
            }
        } catch (error) {
            console.error("Address search failed", error);
            alert(t('err_address_error'));
        }
    }

    function updateCityFromLocation() {
        if (!userLocation) return;
        let minDistance = Infinity;
        let closestCity = citySelect.value;
        for(let station of allStations) {
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
    function findCheapestFuel(skipRecenter = false, isInitialLoad = false) {
        if (!userLocation) return;
        
        let referenceCity = citySelect.value;
        if (usingGps) {
            let minDist = Infinity;
            allStations.forEach(s => {
                if (typeof s.lat === 'number' && typeof s.lng === 'number' && !isNaN(s.lat) && !isNaN(s.lng)) {
                    const d = calculateDistance(userLocation.lat, userLocation.lng, s.lat, s.lng);
                    if (d < minDist) {
                        minDist = d;
                        if (s.city && s.city !== 'Nežinomas') {
                            referenceCity = s.city;
                        }
                    }
                }
            });
        }

        const activeCheckboxes = document.querySelectorAll('.network-cb:checked');
        const selectedNetworks = Array.from(activeCheckboxes).map(cb => cb.value);
        const maxRadius = radiusSelect.value === 'all' ? Infinity : parseFloat(radiusSelect.value);

        // Add distance and apply discounts to each station
        let availableStations = allStations.map(station => {
            const dist = calculateDistance(userLocation.lat, userLocation.lng, station.lat, station.lng);
            
            // For HGV, fetch Diesel price from the nearest gas station
            if (selectedFuel === 'Vilkikams' && station.is_near_gas_station) {
                let closestGasStation = null;
                let minDist = Infinity;
                allStationsRaw.forEach(gs => {
                    if (gs.prices && gs.prices['Diesel']) {
                        const d = calculateDistance(station.lat, station.lng, gs.lat, gs.lng);
                        if (d < minDist && d < 0.3) {
                            minDist = d;
                            closestGasStation = gs;
                        }
                    }
                });
                if (closestGasStation) {
                    if (!station.prices) station.prices = {};
                    station.prices['Vilkikams'] = closestGasStation.prices['Diesel'];
                    station.near_station_network = closestGasStation.name;
                }
            }

            let calculatedPrices = {};
            let appliedDiscounts = {};
            
            let networkStringToMatch = station.name;
            if (selectedFuel === 'Vilkikams' && station.near_station_network) {
                networkStringToMatch = station.near_station_network;
            }
            let matchedNetwork = networksData.find(net => networkStringToMatch.toLowerCase().includes(net.name.toLowerCase()));
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
            
            if (station.prices) {
                for (let fuelType in station.prices) {
                    if (station.prices[fuelType] !== null) {
                        calculatedPrices[fuelType] = Math.max(0, station.prices[fuelType] - discountValue);
                        appliedDiscounts[fuelType] = discountValue;
                    } else {
                        calculatedPrices[fuelType] = null;
                    }
                }
            }
            
            return { 
                ...station, 
                distance: dist,
                calculatedPrices: calculatedPrices,
                appliedDiscounts: appliedDiscounts,
                originalPrices: station.prices || {}
            };
        }).filter(station => {
            // Must have the selected fuel
            if (station.originalPrices[selectedFuel] == null) return false;
            
            // Network filter
            if (!selectedNetworks.includes('all')) {
                const matchesNetwork = selectedNetworks.some(net => station.name.toLowerCase().includes(net.toLowerCase()));
                if (!matchesNetwork) return false;
            }

            // Privalo turėti validžias koordinates, kitaip Leaflet išmes klaidą
            if (typeof station.lat !== 'number' || isNaN(station.lat) || typeof station.lng !== 'number' || isNaN(station.lng)) {
                return false;
            }
            
            if (maxRadius !== Infinity) {
                return typeof station.distance === 'number' && !isNaN(station.distance) && station.distance <= maxRadius;
            } else {
                if (selectedFuel === 'Vilkikams') return true;
                if (referenceCity === 'all') return true;
                return station.city === referenceCity;
            }
        });

        if (availableStations.length === 0) {
            if (!isInitialLoad && !skipRecenter) alert(t('err_no_stations'));
            return;
        }

        // Sort by calculated price ascending, then by distance
        availableStations.sort((a, b) => {
            let priceA = a.calculatedPrices[selectedFuel] === 0 ? Infinity : a.calculatedPrices[selectedFuel];
            let priceB = b.calculatedPrices[selectedFuel] === 0 ? Infinity : b.calculatedPrices[selectedFuel];
            
            // For HGV, treat dummy price 1 as Infinity so real prices bubble to the top
            if (selectedFuel === 'Vilkikams') {
                if (!a.originalPrices || a.originalPrices['Vilkikams'] === 1) priceA = Infinity;
                if (!b.originalPrices || b.originalPrices['Vilkikams'] === 1) priceB = Infinity;
            }

            if (priceA === priceB) {
                return a.distance - b.distance;
            }
            return priceA - priceB;
        });

        const cheapest = availableStations[0];
        const others = availableStations.slice(1);

        renderResults(cheapest, others, skipRecenter);
    }

    function createNavLink(station) {
        const app = navAppSelect.value;
        const query = `${station.name} ${station.address || ''}, ${station.city || ''}`.trim();
        const destination = (station.lat && station.lng) ? `${station.lat},${station.lng}` : encodeURIComponent(query);
        
        if (app === 'waze') {
            if (station.lat && station.lng) {
                return `https://waze.com/ul?ll=${station.lat},${station.lng}&navigate=yes`;
            } else {
                return `https://waze.com/ul?q=${destination}&navigate=yes`;
            }
        } else {
            let url = `https://www.google.com/maps/dir/?api=1&destination=${destination}`;
            if (userLocation && userLocation.lat && userLocation.lng) {
                // If user uses GPS, use their actual location, otherwise omit origin to let Maps use device GPS
                if (usingGps) {
                    url += `&origin=${userLocation.lat},${userLocation.lng}`;
                }
            }
            url += `&travelmode=driving&dir_action=navigate`;
            return url;
        }
    }

    function renderResults(cheapest, others, skipRecenter = false) {
        document.getElementById('find-cheapest-btn').classList.add('hidden');
        resultsContainer.classList.remove('hidden');
        
        if (selectedFuel === 'Vilkikams') {
            document.querySelector('#results-container h2').textContent = t('title_closest_hgv');
            document.querySelector('.other-options-title').textContent = t('title_other_hgv');
        } else if (selectedFuel === 'Elektra') {
            document.querySelector('#results-container h2').textContent = t('title_closest_ev');
            document.querySelector('.other-options-title').textContent = t('title_other_ev');
        } else {
            document.querySelector('#results-container h2').textContent = t('title_cheapest');
            document.querySelector('.other-options-title').textContent = t('title_stations');
        }

        function getTranslatedTypeLabel(label) {
            if (label === 'Pakelės poilsio zona') return t('type_rest_area');
            if (label === 'Vilkikų stovėjimo aikštelė') return t('type_hgv_parking');
            return label;
        }

        function getTranslatedName(name, label) {
            if (name === '🚛 ' + label) return '🚛 ' + getTranslatedTypeLabel(label);
            return name;
        }

        function formatPriceHTML(station) {
            if (selectedFuel === 'Vilkikams') {
                let html = `<div style="font-size: 14px; font-weight: bold; color: var(--primary-color);">${getTranslatedTypeLabel(station.type_label) || t('hgv_rest_area')}</div>`;
                if (station.is_near_gas_station) {
                    html += `<div style="font-size: 11px; color: var(--success-color); margin-top: 4px; font-weight: bold;">${t('hgv_near_station')} (${station.near_station_name})</div>`;
                    if (station.originalPrices && station.originalPrices['Vilkikams'] && station.originalPrices['Vilkikams'] !== 1) {
                        const finalPrice = station.calculatedPrices[selectedFuel].toFixed(2);
                        const discountCt = station.appliedDiscounts[selectedFuel] * 100;
                        html += `<div class="price-value" style="font-size: 16px; margin-top: 5px;">${finalPrice}</div><div class="price-currency">€ / L</div>`;
                        if (discountCt > 0) {
                            html += `<div style="font-size: 11px; color: var(--success-color); margin-top: 2px; font-family: 'Share Tech Mono';">(-${discountCt.toFixed(1)} ct)</div>`;
                        }
                    }
                }
                if (station.capacity) {
                    html += `<div style="font-size: 10px; color: #666; margin-top: 2px;">${station.capacity}</div>`;
                }
                return html;
            }
            
            const finalPrice = station.calculatedPrices[selectedFuel].toFixed(2);
            const discountCt = station.appliedDiscounts[selectedFuel] * 100;
            const currencyStr = selectedFuel === 'Elektra' ? '€ / kWh' : '€ / L';
            
            let html = `<div class="price-value">${finalPrice}</div><div class="price-currency">${currencyStr}</div>`;
            if (discountCt > 0) {
                html += `<div style="font-size: 11px; color: var(--success-color); margin-top: 4px; font-family: 'Share Tech Mono';">(-${discountCt.toFixed(1)} ct)</div>`;
            }
            
            if (selectedFuel === 'Elektra') {
                const statusText = station.ev_status === 'Laisva' ? t('ev_status_available') : t('ev_status_occupied');
                html += `<div style="font-size: 11px; font-weight: bold; color: ${station.ev_status === 'Laisva' ? 'var(--success-color)' : 'var(--text-secondary)'}; margin-top: 4px;">${statusText}</div>
                        <div style="font-size: 10px; color: #666; margin-top: 2px;">${station.ev_connectors || ''}</div>`;
            }
            
            return html;
        }

        // Render cheapest as a clickable link
        cheapestCard.innerHTML = `
            <a href="${createNavLink(cheapest)}" target="_blank" class="result-card highlight" style="display:flex; width:100%; border:none; box-shadow:none; padding:0; margin:0;">
                <div class="station-info">
                    <div class="station-logo" style="${selectedFuel === 'Vilkikams' && cheapest.is_near_gas_station ? 'font-size: 0.7em; line-height: 1.1;' : ''}">
                        ${selectedFuel === 'Vilkikams' && cheapest.is_near_gas_station ? '⛽<br>🚛' : cheapest.logo}
                    </div>
                    <div class="station-details">
                        <h4>${getTranslatedName(cheapest.name, cheapest.type_label)} <span class="distance-badge" title="${t('approx_dist_title')}">~ ${cheapest.distance.toFixed(1)} km</span></h4>
                        <p>📍 ${cheapest.address ? cheapest.address + ', ' : ''}${cheapest.city}<br>
                           <span style="font-size: 10px; color: #888;">GPS: ${cheapest.lat.toFixed(5)}, ${cheapest.lng.toFixed(5)}</span><br>
                           <span style="font-size: 10px; color: var(--primary-color);">${t('click_to_navigate')}</span>
                        </p>
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
                    centerBtn.title = t('auto_center_on');
                    centerBtn.innerHTML = '🎯';

                    centerBtn.onclick = function(e) {
                        e.stopPropagation();
                        autoCenterMap = !autoCenterMap;
                        centerBtn.innerHTML = autoCenterMap ? '🎯' : '🔓';
                        centerBtn.title = autoCenterMap ? t('auto_center_on') : t('auto_center_off');
                        if (autoCenterMap && userLocation) {
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
                        centerBtn.title = t('auto_center_off');
                    }
                }
            });
            
            // moveend event listener removed to prevent dynamic recalculation on pan/zoom
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
            .bindPopup(`<b>${t('your_location')}</b><br>${t('tracked_live')}`);

        const nonZeroOthers = others.filter(s => s.calculatedPrices[selectedFuel] > 0 && !(selectedFuel === 'Vilkikams' && (!s.originalPrices || s.originalPrices['Vilkikams'] === 1)));
        
        // Ensure cheapest is not a dummy price for min/max calculation
        let realCheapestPrice = cheapest.calculatedPrices[selectedFuel];
        if (selectedFuel === 'Vilkikams' && (!cheapest.originalPrices || cheapest.originalPrices['Vilkikams'] === 1)) {
            realCheapestPrice = 1;
        }
        
        const minPrice = parseFloat(realCheapestPrice);
        const maxPrice = nonZeroOthers.length > 0 ? parseFloat(nonZeroOthers[nonZeroOthers.length - 1].calculatedPrices[selectedFuel]) : minPrice;
        
        function getPriceStyle(priceVal) {
            const price = parseFloat(priceVal);
            if (price === 0) {
                return { bg: '#2196F3', color: 'white' }; // Blue for zero/unknown
            }
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
        const cheapestStatus = cheapest.ev_status === 'Laisva' ? t('ev_status_available') : t('ev_status_occupied');
        const cHasRealPrice = selectedFuel !== 'Vilkikams' || (cheapest.originalPrices && cheapest.originalPrices['Vilkikams'] && cheapest.originalPrices['Vilkikams'] !== 1);
        const cStyle = !cHasRealPrice ? {bg: '#1e3a8a', color: 'white'} : getPriceStyle(cheapest.calculatedPrices[selectedFuel]);
        const cDiscount = (cheapest.appliedDiscounts[selectedFuel] || 0) * 100;
        const cDiscountBadge = cDiscount > 0 ? `<div style="font-size: 10px; background: rgba(76, 175, 80, 0.9); color: white; padding: 1px 3px; border-radius: 2px; position: absolute; top: -12px; white-space: nowrap;">-${cDiscount.toFixed(1)} ct</div>` : '';
        
        const cheapestIcon = L.divIcon({
            html: `
                <div style="display: flex; flex-direction: column; align-items: center; position: relative;">
                    ${cDiscountBadge}
                    <div style="background: ${cStyle.bg}; color: ${cStyle.color}; padding: 2px 6px; border: 2px solid #111; border-radius: 2px; font-weight: bold; font-family: 'Share Tech Mono', monospace; font-size: 14px; box-shadow: 2px 2px 0 #111; white-space: nowrap; margin-bottom: -4px; z-index: 2;">
                        ${!cHasRealPrice ? 'TIR' : cheapest.calculatedPrices[selectedFuel].toFixed(2) + ' €'}
                    </div>
                    <div style="${iconStyle}; font-size: ${selectedFuel === 'Vilkikams' && cheapest.is_near_gas_station ? '20px' : '30px'}; line-height: 1; text-align: center; z-index: 1;">
                        ${selectedFuel === 'Elektra' ? '⚡' : (selectedFuel === 'Vilkikams' ? (cheapest.is_near_gas_station ? '⛽<br>🚛' : '🚛') : '🔥')}
                    </div>
                </div>
            `,
            className: '',
            iconSize: [60, 60],
            iconAnchor: [30, 56]
        });
        L.marker([cheapest.lat, cheapest.lng], {icon: cheapestIcon, zIndexOffset: 999})
            .addTo(map)
            .bindPopup(`
                <b>${getTranslatedName(cheapest.name, cheapest.type_label)} ${selectedFuel === 'Vilkikams' ? '' : (selectedFuel !== 'Elektra' ? t('cheapest') : t('closest'))}</b><br>
                ${selectedFuel === 'Elektra' ? 
                    `<strong style="color: ${cheapest.ev_status === 'Laisva' ? 'var(--success-color)' : '#666'};">${cheapestStatus}</strong><br>
                    <span style="font-size: 11px; color: #444;">${cheapest.ev_connectors || ''}</span>` :
                  (selectedFuel === 'Vilkikams' ? 
                    `<strong style="color: var(--primary-color);">${getTranslatedTypeLabel(cheapest.type_label)}</strong><br>
                     ${cHasRealPrice ? `<strong style="font-family: 'Black Ops One', system-ui; font-size: 16px;">${cheapest.calculatedPrices[selectedFuel].toFixed(2)} €/L</strong>
                     ${cDiscount > 0 ? `<span style="font-size: 11px; color: var(--success-color);"> (${t('with_discount')} -${cDiscount.toFixed(1)} ct/l ${t('discount_suffix')})</span>` : ''}<br>` : ''}` :
                    `<strong style="color: var(--primary-color); font-family: 'Black Ops One', system-ui; font-size: 16px;">${cheapest.calculatedPrices[selectedFuel].toFixed(2)} €/L</strong>
                    ${cDiscount > 0 ? `<span style="font-size: 11px; color: var(--success-color);"> (${t('with_discount')} -${cDiscount.toFixed(1)} ct/l ${t('discount_suffix')})</span>` : ''}`)
                }<br>
                <span style="font-size: 10px; color: #888;">GPS: ${cheapest.lat.toFixed(5)}, ${cheapest.lng.toFixed(5)}</span><br>
                <span style="font-size: 12px; color: #666;" title="${t('approx_dist_title')}">${t('approx_dist')} ~ ${cheapest.distance.toFixed(1)} km</span><br>
                <a href="${createNavLink(cheapest)}" target="_blank" style="display:inline-block; margin-top:5px; color: var(--primary-color); font-weight: bold; text-decoration: none;">${t('navigate')}</a>
            `);

        // Other Stations Markers
        others.forEach(station => {
            const price = station.calculatedPrices[selectedFuel];
            const hasRealPrice = selectedFuel !== 'Vilkikams' || (station.originalPrices && station.originalPrices['Vilkikams'] && station.originalPrices['Vilkikams'] !== 1);
            const pStyle = !hasRealPrice ? {bg: '#1e3a8a', color: 'white'} : getPriceStyle(price);
            const stationStatus = station.ev_status === 'Laisva' ? t('ev_status_available') : t('ev_status_occupied');
            
            const sDiscount = (station.appliedDiscounts[selectedFuel] || 0) * 100;
            const sDiscountBadge = sDiscount > 0 ? `<div style="font-size: 9px; background: rgba(76, 175, 80, 0.9); color: white; padding: 1px 3px; border-radius: 2px; position: absolute; top: -10px; white-space: nowrap;">-${sDiscount.toFixed(1)}</div>` : '';
            
            const icon = L.divIcon({
                html: `
                    <div style="display: flex; flex-direction: column; align-items: center; position: relative;">
                        ${sDiscountBadge}
                        <div style="background: ${pStyle.bg}; color: ${pStyle.color}; padding: 2px 4px; border: 2px solid #111; border-radius: 2px; font-weight: bold; font-family: 'Share Tech Mono', monospace; font-size: 12px; box-shadow: 2px 2px 0 #111; white-space: nowrap; margin-bottom: -2px; z-index: 2;">
                            ${!hasRealPrice ? 'TIR' : price.toFixed(2) + ' €'}
                        </div>
                        <div style="${iconStyle}; font-size: ${selectedFuel === 'Vilkikams' && station.is_near_gas_station ? '12px' : '18px'}; line-height: 1; text-align: center; filter: grayscale(20%); z-index: 1;">
                            ${selectedFuel === 'Vilkikams' && station.is_near_gas_station ? '⛽<br>🚛' : station.logo}
                        </div>
                    </div>
                `,
                className: '',
                iconSize: [50, 50],
                iconAnchor: [25, 48]
            });
            L.marker([station.lat, station.lng], {icon: icon})
                .addTo(map)
                .bindPopup(`
                    <b>${getTranslatedName(station.name, station.type_label)}</b><br>
                    ${selectedFuel === 'Elektra' ? 
                        `<strong style="color: ${station.ev_status === 'Laisva' ? 'var(--success-color)' : '#666'};">${stationStatus}</strong><br>
                        <span style="font-size: 11px; color: #444;">${station.ev_connectors || ''}</span>` :
                      (selectedFuel === 'Vilkikams' ? 
                        `<strong style="color: var(--primary-color);">${getTranslatedTypeLabel(station.type_label)}</strong><br>
                         ${hasRealPrice ? `<strong style="font-family: 'Black Ops One', system-ui; font-size: 14px;">${price.toFixed(2)} €/L</strong>
                         ${sDiscount > 0 ? `<span style="font-size: 11px; color: var(--success-color);"> (${t('with_discount')} -${sDiscount.toFixed(1)} ct/l ${t('discount_suffix')})</span>` : ''}<br>` : ''}` :
                        `<strong style="font-family: 'Black Ops One', system-ui; font-size: 14px;">${price.toFixed(2)} €/L</strong>
                        ${sDiscount > 0 ? `<span style="font-size: 11px; color: var(--success-color);"> (${t('with_discount')} -${sDiscount.toFixed(1)} ct/l ${t('discount_suffix')})</span>` : ''}`)
                    }<br>
                    <span style="font-size: 10px; color: #888;">GPS: ${station.lat.toFixed(5)}, ${station.lng.toFixed(5)}</span><br>
                    <span style="font-size: 12px; color: #666;" title="${t('approx_dist_title')}">${t('approx_dist')} ~ ${station.distance.toFixed(1)} km</span><br>
                    <a href="${createNavLink(station)}" target="_blank" style="display:inline-block; margin-top:5px; color: var(--primary-color); text-decoration: none;">${t('navigate')}</a>
                `);
        });

        // Fit map bounds to show user and cheapest station
        if (autoCenterMap && !skipRecenter) {
            const group = new L.featureGroup([
                L.marker([userLocation.lat, userLocation.lng]),
                L.marker([cheapest.lat, cheapest.lng])
            ]);
            map.fitBounds(group.getBounds().pad(0.3));
        }

        // Render others (List)
        otherStationsList.innerHTML = '';
        if (others.length === 0) {
            otherStationsList.innerHTML = `<p style="color: var(--text-secondary); font-size: 14px;">${t('no_more_stations')}</p>`;
        } else {
            others.forEach(station => {
                const card = document.createElement('a');
                card.href = createNavLink(station);
                card.target = "_blank";
                card.className = 'result-card';
                card.innerHTML = `
                    <div class="station-info">
                        <div class="station-logo" style="${selectedFuel === 'Vilkikams' && station.is_near_gas_station ? 'font-size: 0.7em; line-height: 1.1;' : ''}">
                            ${selectedFuel === 'Vilkikams' && station.is_near_gas_station ? '⛽<br>🚛' : station.logo}
                        </div>
                        <div class="station-details">
                            <h4>${getTranslatedName(station.name, station.type_label)} <span class="distance-badge" title="${t('approx_dist_title')}">~ ${station.distance.toFixed(1)} km</span></h4>
                            <p>📍 ${station.address ? station.address + ', ' : ''}${station.city}<br>
                               <span style="font-size: 10px; color: #888;">GPS: ${station.lat.toFixed(5)}, ${station.lng.toFixed(5)}</span>
                            </p>
                        </div>
                    </div>
                    <div class="price-tag" style="text-align: right;">
                        ${formatPriceHTML(station)}
                    </div>
                `;
                otherStationsList.appendChild(card);
            });
        }
    }

    // Re-render strings when language changes
    document.addEventListener('languageChanged', () => {
        if (!resultsContainer.classList.contains('hidden')) {
            findCheapestFuel(); // This will re-render all results with new language strings
        }
        if (isMapView) {
            toggleViewBtn.innerText = t('btn_toggle_view_list');
        } else {
            toggleViewBtn.innerText = t('btn_toggle_view_map');
        }
        updateNetworkDropdownText();
        renderDiscountsModal();
    });
});
