const translations = {
    lt: {
        // HTML static texts
        "app_title": "PIGIAUSIAS KURAS",
        "app_subtitle": "Raskite geriausią kainą savo mieste",
        "label_location": "Įveskite lokaciją, arba nustatykite pagal Gps",
        "btn_gps": "GPS",
        "btn_refresh": "🔄",
        "btn_settings": "⚙️",
        "label_address": "Tikslesniam atstumui – įveskite adresą (nebūtina)",
        "placeholder_address": "Pvz. Laisvės al. 1",
        "btn_search_address": "🔍",
        "label_radius": "Paieškos spindulys",
        "rad_1": "1Km spinduliu",
        "rad_2": "2Km spinduliu",
        "rad_3": "3Km spinduliu",
        "rad_5": "5Km spinduliu",
        "rad_10": "10Km spinduliu",
        "rad_all": "Rodyti viską (Visas miestas)",
        "label_networks": "Degalinių tinklai",
        "net_all": "Visi",
        "net_all_text": "Visi tinklai",
        "btn_find_cheapest": "Rasti arčiausią ir pigiausią",
        "title_cheapest": "Pigiausia degalinė:",
        "title_stations": "Degalinės:",
        "btn_toggle_view_list": "Rodyti sąrašą",
        "btn_toggle_view_map": "Rodyti žemėlapį",
        "footer_data": "Duomenys: <a href='https://www.ena.lt/' target='_blank' style='color: var(--primary-color); text-decoration: none; font-weight: bold;'>Lietuvos Energetikos Agentūra (LEA)</a> ir <a href='https://ev.vialietuva.lt/' target='_blank' style='color: var(--primary-color); text-decoration: none; font-weight: bold;'>Via Lietuva</a>.",
        "footer_updated": "Atnaujinta:",
        "footer_rights": "Visos teisės saugomos &copy; 2026",
        "modal_settings": "⚙️ Nustatymai",
        "settings_language": "Programėlės kalba",
        "settings_fuel_type": "Kuro tipas",
        "fuel_diesel": "Dyzelinas",
        "fuel_lpg": "Dujos (LPG)",
        "fuel_ev": "Elektra ⚡",
        "settings_nav": "Navigacija",
        "settings_calc": "Skaičiavimo režimas",
        "calc_with_discount": "Skaičiuoti su nuolaida",
        "calc_no_discount": "Rodyti be nuolaidos",
        "settings_discounts": "Tinklų Nuolaidos (ct/l)",
        "btn_save": "Išsaugoti",
        "btn_saved": "Išsaugota",
        
        // JS dynamic texts
        "disc_auto": "Automatinė",
        "disc_manual": "Įvesti ranka",
        "selected": "Pasirinkta:",
        "err_no_stations": "Atsiprašome, netoliese nėra degalinių su šiuo kuro tipu.",
        "err_no_address": "Prašome įvesti adresą.",
        "err_address_not_found": "Adresas nerastas. Patikrinkite, ar teisingai įvedėte.",
        "err_address_error": "Klaida ieškant adreso.",
        "ev_status_available": "Laisva",
        "ev_status_occupied": "Užimta / Nežinoma",
        "your_location": "Jūsų vieta",
        "tracked_live": "Sekama gyvai",
        "auto_center_on": "Auto-centravimas įjungtas",
        "auto_center_off": "Auto-centravimas išjungtas",
        "cheapest": "(Pigiausia)",
        "closest": "(Artimiausia)",
        "click_to_navigate": "Spauskite naviguoti",
        "with_discount": "su",
        "discount_suffix": "nuolaida",
        "approx_dist_title": "Apytikslis atstumas tiesia linija",
        "approx_dist": "Apytikslis atstumas:",
        "navigate": "Naviguoti",
        "no_more_stations": "Daugiau degalinių nerasta."
    },
    en: {
        // HTML static texts
        "app_title": "CHEAPEST FUEL",
        "app_subtitle": "Find the best price in your city",
        "label_location": "Select location, or use GPS",
        "btn_gps": "GPS",
        "btn_refresh": "🔄",
        "btn_settings": "⚙️",
        "label_address": "For exact distance - enter address (optional)",
        "placeholder_address": "e.g. Laisves ave. 1",
        "btn_search_address": "🔍",
        "label_radius": "Search radius",
        "rad_1": "Within 1Km",
        "rad_2": "Within 2Km",
        "rad_3": "Within 3Km",
        "rad_5": "Within 5Km",
        "rad_10": "Within 10Km",
        "rad_all": "Show all (Whole city)",
        "label_networks": "Gas stations",
        "net_all": "All",
        "net_all_text": "All networks",
        "btn_find_cheapest": "Find closest and cheapest",
        "title_cheapest": "Cheapest station:",
        "title_stations": "Stations:",
        "btn_toggle_view_list": "Show list",
        "btn_toggle_view_map": "Show map",
        "footer_data": "Data from: <a href='https://www.ena.lt/' target='_blank' style='color: var(--primary-color); text-decoration: none; font-weight: bold;'>Lithuanian Energy Agency (LEA)</a> and <a href='https://ev.vialietuva.lt/' target='_blank' style='color: var(--primary-color); text-decoration: none; font-weight: bold;'>Via Lietuva</a>.",
        "footer_updated": "Updated:",
        "footer_rights": "All rights reserved &copy; 2026",
        "modal_settings": "⚙️ Settings",
        "settings_language": "App Language",
        "settings_fuel_type": "Fuel type",
        "fuel_diesel": "Diesel",
        "fuel_lpg": "Gas (LPG)",
        "fuel_ev": "Electricity ⚡",
        "settings_nav": "Navigation app",
        "settings_calc": "Calculation mode",
        "calc_with_discount": "Calculate with discount",
        "calc_no_discount": "Show without discount",
        "settings_discounts": "Network Discounts (ct/l)",
        "btn_save": "Save",
        "btn_saved": "Saved",

        // JS dynamic texts
        "disc_auto": "Automatic",
        "disc_manual": "Enter manually",
        "selected": "Selected:",
        "err_no_stations": "Sorry, no stations with this fuel type nearby.",
        "err_no_address": "Please enter an address.",
        "err_address_not_found": "Address not found. Please check your input.",
        "err_address_error": "Error searching for address.",
        "ev_status_available": "Available",
        "ev_status_occupied": "Occupied / Unknown",
        "your_location": "Your location",
        "tracked_live": "Tracked live",
        "auto_center_on": "Auto-centering enabled",
        "auto_center_off": "Auto-centering disabled",
        "cheapest": "(Cheapest)",
        "closest": "(Closest)",
        "click_to_navigate": "Click to navigate",
        "with_discount": "with",
        "discount_suffix": "discount",
        "approx_dist_title": "Approximate straight line distance",
        "approx_dist": "Approximate distance:",
        "navigate": "Navigate",
        "no_more_stations": "No more stations found."
    }
};

let currentLang = localStorage.getItem('appLang') || 'lt';

function changeLanguage(lang) {
    if (translations[lang]) {
        currentLang = lang;
        localStorage.setItem('appLang', lang);
        
        // Update document lang attribute
        document.documentElement.lang = lang;
        
        // Update language button styles if exist
        document.querySelectorAll('.lang-btn, .flag-btn').forEach(btn => {
            if (btn.dataset.lang === lang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // Translate all data-i18n elements
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                if (el.tagName === 'INPUT' && el.type === 'text') {
                    el.placeholder = translations[lang][key];
                } else if (el.tagName === 'OPTION') {
                    el.innerText = translations[lang][key];
                } else {
                    el.innerHTML = translations[lang][key];
                }
            }
        });
        
        // Dispatch event so app.js can re-render UI if needed
        document.dispatchEvent(new Event('languageChanged'));
    }
}

function t(key) {
    return translations[currentLang][key] || key;
}

document.addEventListener('DOMContentLoaded', () => {
    // Initial translation apply
    changeLanguage(currentLang);
    
    // Bind lang buttons
    document.querySelectorAll('.lang-btn, .flag-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            changeLanguage(e.currentTarget.dataset.lang);
        });
    });
});
