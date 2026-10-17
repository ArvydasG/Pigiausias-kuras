// Automatiškai sugeneruoti duomenys iš LEA API (via Playwright)
const lastUpdated = '2026-10-17';
const defaultDiscounts = {
    "Circle K": 0.035,
    "Neste": 0.035,
    "Viada": 0.03,
    "Baltic Petroleum": 0.0,
    "Emsi": 0.0,
    "Jozita": 0.0,
    "Saurida": 0.0,
    "Orlen": 0.0
};
const stationsData = [
    {
        "name": "Pynauja",
        "logo": "⛽",
        "city": "Šilalės",
        "address": "Kvėdarna, Papynaujo k., Dvaro g. 1, 75342",
        "lat": 55.56638461,
        "lng": 21.99570763,
        "prices": {
            "A95": 1.94,
            "A98": null,
            "Diesel": 2.25,
            "LPG": 0.89
        },
        "id": 1
    },
    {
        "name": "IĮ M.Augustinaičio",
        "logo": "⛽",
        "city": "Kėdainių",
        "address": "Šingalių k., Kėdainių g. 44, 58185",
        "lat": 55.24962757,
        "lng": 23.8518839,
        "prices": {
            "A95": 1.97,
            "A98": null,
            "Diesel": 2.2,
            "LPG": 0.89
        },
        "id": 2
    },
    {
        "name": "Adukesta",
        "logo": "⛽",
        "city": "Klaipėda",
        "address": "Maciuičių k., Laisvės g. 50, 96159",
        "lat": 55.69353278,
        "lng": 21.41399033,
        "prices": {
            "A95": 1.98,
            "A98": null,
            "Diesel": 2.26,
            "LPG": 0.87
        },
        "id": 3
    },
    {
        "name": "Antivis",
        "logo": "⛽",
        "city": "Kelmės",
        "address": "Tytuvėnai, Žemaitės g. 14, 86490",
        "lat": 55.59400851,
        "lng": 23.17958449,
        "prices": {
            "A95": 1.98,
            "A98": null,
            "Diesel": 2.24,
            "LPG": 0.88
        },
        "id": 4
    },
    {
        "name": "Atsiauta",
        "logo": "⛽",
        "city": "Šiaulių",
        "address": "Kuršėnai, Vytauto g. 80, 81146",
        "lat": 56.01488869,
        "lng": 22.95124646,
        "prices": {
            "A95": 1.99,
            "A98": null,
            "Diesel": 2.29,
            "LPG": 0.89
        },
        "id": 5
    },
    {
        "name": "Bemija",
        "logo": "⛽",
        "city": "Ukmergės",
        "address": "Ukmergė, Dariaus ir Girėno g. 31, 20154",
        "lat": 55.24072789,
        "lng": 24.78759909,
        "prices": {
            "A95": 1.92,
            "A98": null,
            "Diesel": 2.22,
            "LPG": 0.97
        },
        "id": 6
    },
    {
        "name": "Bonsa",
        "logo": "⛽",
        "city": "Tauragės",
        "address": "Taurai, Tilžės pl. 46, 72142",
        "lat": 55.24243868,
        "lng": 22.25002133,
        "prices": {
            "A95": 1.889,
            "A98": null,
            "Diesel": 2.159,
            "LPG": 0.79
        },
        "id": 7
    },
    {
        "name": "Bonsa",
        "logo": "⛽",
        "city": "Tauragės",
        "address": "Vaidatonių k. 1, 73406",
        "lat": 55.4692054,
        "lng": 22.67890501,
        "prices": {
            "A95": 1.91,
            "A98": null,
            "Diesel": 2.14,
            "LPG": 0.81
        },
        "id": 8
    },
    {
        "name": "Junasa",
        "logo": "⛽",
        "city": "Šiaulių",
        "address": "Šiauliai, Bačiūnų g. 12a, 77109",
        "lat": 55.89789464,
        "lng": 23.35174183,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 2.149,
            "LPG": 0.84
        },
        "id": 9
    },
    {
        "name": "Junasa",
        "logo": "⛽",
        "city": "Šiaulių",
        "address": "Šiauliai, Žemaitės g. 131c, 76175",
        "lat": 55.94801517,
        "lng": 23.32052749,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 2.149,
            "LPG": 0.84
        },
        "id": 10
    },
    {
        "name": "Junasa",
        "logo": "⛽",
        "city": "Šiaulių",
        "address": "Gruzdžiai, M. Katiliškio g. 50, 81428",
        "lat": 56.09973108,
        "lng": 23.26565865,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 2.149,
            "LPG": 0.84
        },
        "id": 11
    },
    {
        "name": "Leosta",
        "logo": "⛽",
        "city": "Telšių",
        "address": "Luokė, Telšių g. 66, 88236",
        "lat": 55.90135275,
        "lng": 22.50630756,
        "prices": {
            "A95": 2.0,
            "A98": null,
            "Diesel": 2.25,
            "LPG": 0.93
        },
        "id": 12
    },
    {
        "name": "Medelsta",
        "logo": "⛽",
        "city": "Vilnius",
        "address": "Pagirių k., Durpių g. 45, 14118",
        "lat": 54.56927739,
        "lng": 25.1881691,
        "prices": {
            "A95": 1.95,
            "A98": null,
            "Diesel": 2.23,
            "LPG": 0.9
        },
        "id": 13
    },
    {
        "name": "RV",
        "logo": "⛽",
        "city": "Mažeikių",
        "address": "Mažeikiai, Daukšos g. 29 / Žemaitijos g. 69, 89132",
        "lat": 56.301079,
        "lng": 22.349796,
        "prices": {
            "A95": null,
            "A98": null,
            "Diesel": null,
            "LPG": 0.89
        },
        "id": 14
    },
    {
        "name": "RV",
        "logo": "⛽",
        "city": "Mažeikių",
        "address": "Mažeikiai, Algirdo g. 42, 89101",
        "lat": 56.31857887,
        "lng": 22.31892788,
        "prices": {
            "A95": null,
            "A98": null,
            "Diesel": null,
            "LPG": 0.87
        },
        "id": 15
    },
    {
        "name": "RV",
        "logo": "⛽",
        "city": "Švenčionių",
        "address": "Švenčionys, Mokyklos g. 23, 18111",
        "lat": 55.13841406,
        "lng": 26.1565448,
        "prices": {
            "A95": null,
            "A98": null,
            "Diesel": null,
            "LPG": 0.89
        },
        "id": 16
    },
    {
        "name": "Plovimo sistemos",
        "logo": "⛽",
        "city": "Šiaulių",
        "address": "Šiauliai, Gegužių g. 28, 78322",
        "lat": 55.90621528,
        "lng": 23.25912984,
        "prices": {
            "A95": null,
            "A98": null,
            "Diesel": null,
            "LPG": 0.919
        },
        "id": 17
    },
    {
        "name": "Plungės lagūna",
        "logo": "⛽",
        "city": "Rietavo",
        "address": "Rietavas, Plungės g. 32, 90313",
        "lat": 55.73496531,
        "lng": 21.92401379,
        "prices": {
            "A95": 1.999,
            "A98": null,
            "Diesel": 2.316,
            "LPG": 0.915
        },
        "id": 18
    },
    {
        "name": "Prie Luksto",
        "logo": "⛽",
        "city": "Telšių",
        "address": "Telšiai, Masčio g. 21, 87139",
        "lat": 55.97576248,
        "lng": 22.26366425,
        "prices": {
            "A95": 2.005,
            "A98": null,
            "Diesel": 2.265,
            "LPG": 0.939
        },
        "id": 19
    },
    {
        "name": "Regusa",
        "logo": "⛽",
        "city": "Kaunas",
        "address": "Kaunas, Marijampolės pl. 20, 46147",
        "lat": 54.8502039,
        "lng": 23.9657416,
        "prices": {
            "A95": 1.89,
            "A98": null,
            "Diesel": 2.18,
            "LPG": 0.88
        },
        "id": 20
    },
    {
        "name": "Regusa",
        "logo": "⛽",
        "city": "Kazlų Rūdos",
        "address": "Jūrės k., Medelyno g. 4A, 69446",
        "lat": 54.8500758,
        "lng": 23.96587232,
        "prices": {
            "A95": 1.98,
            "A98": null,
            "Diesel": 2.28,
            "LPG": 0.89
        },
        "id": 21
    },
    {
        "name": "Regusa",
        "logo": "⛽",
        "city": "Kazlų Rūdos",
        "address": "Kazlų Rūda, S. Daukanto g. 19D, 69430",
        "lat": 54.73959117,
        "lng": 23.49568398,
        "prices": {
            "A95": 1.98,
            "A98": null,
            "Diesel": 2.28,
            "LPG": 0.89
        },
        "id": 22
    },
    {
        "name": "Regusa",
        "logo": "⛽",
        "city": "Marijampolės",
        "address": "Gavaltuvos k., Sodo g. 11, 69370",
        "lat": 54.67677045,
        "lng": 23.41801347,
        "prices": {
            "A95": 1.93,
            "A98": null,
            "Diesel": 2.23,
            "LPG": 0.87
        },
        "id": 23
    },
    {
        "name": "Regusa",
        "logo": "⛽",
        "city": "Vilkaviškio",
        "address": "Kybartai, J. Basanavičiaus g. 45A, 70417",
        "lat": 54.63850721,
        "lng": 22.76327716,
        "prices": {
            "A95": 1.98,
            "A98": null,
            "Diesel": 2.28,
            "LPG": 0.89
        },
        "id": 24
    },
    {
        "name": "Saurida",
        "logo": "🔥",
        "city": "Alytaus",
        "address": "Alytus, Pramonės g. 5, 62323",
        "lat": 54.4231173,
        "lng": 24.01804635,
        "prices": {
            "A95": 1.87,
            "A98": null,
            "Diesel": 2.17,
            "LPG": 0.86
        },
        "id": 25
    },
    {
        "name": "Saurida",
        "logo": "🔥",
        "city": "Ukmergės",
        "address": "Ukmergė, Kareivinių g. 64, 20184",
        "lat": 55.25902962,
        "lng": 24.79054882,
        "prices": {
            "A95": 1.89,
            "A98": null,
            "Diesel": 2.18,
            "LPG": 0.88
        },
        "id": 26
    },
    {
        "name": "Saurida",
        "logo": "🔥",
        "city": "Ukmergės",
        "address": "Ukmergė, Vilniaus g. 122, 20168",
        "lat": 55.23353894,
        "lng": 24.78125386,
        "prices": {
            "A95": 1.89,
            "A98": null,
            "Diesel": 2.18,
            "LPG": 0.88
        },
        "id": 27
    },
    {
        "name": "Saurida",
        "logo": "🔥",
        "city": "Kaišiadorių",
        "address": "Rumšiškės, Lekavičiaus g. 71, 56337",
        "lat": 54.87186337,
        "lng": 24.21316962,
        "prices": {
            "A95": 1.93,
            "A98": null,
            "Diesel": 2.2,
            "LPG": 0.9
        },
        "id": 28
    },
    {
        "name": "Saurida",
        "logo": "🔥",
        "city": "Ukmergės",
        "address": "Pageležių k, 20278",
        "lat": 55.16500146,
        "lng": 24.51567585,
        "prices": {
            "A95": 1.91,
            "A98": null,
            "Diesel": 2.19,
            "LPG": 0.86
        },
        "id": 29
    },
    {
        "name": "Saurida",
        "logo": "🔥",
        "city": "Radviliškio",
        "address": "Radviliškis, Gedimino g. 50C, 82482",
        "lat": 55.81466839,
        "lng": 23.55310618,
        "prices": {
            "A95": 1.92,
            "A98": null,
            "Diesel": 2.17,
            "LPG": 0.88
        },
        "id": 30
    },
    {
        "name": "Saurida",
        "logo": "🔥",
        "city": "Šiaulių",
        "address": "Šiauliai, Vilniaus g. 373A, 76326",
        "lat": 55.94285655,
        "lng": 23.28159232,
        "prices": {
            "A95": 1.92,
            "A98": null,
            "Diesel": 2.17,
            "LPG": 0.88
        },
        "id": 31
    },
    {
        "name": "Saurida",
        "logo": "🔥",
        "city": "Šilalės",
        "address": "Šilalė, Rytinio kelio g. 19, 75133",
        "lat": 55.49188005,
        "lng": 22.19923862,
        "prices": {
            "A95": 1.85,
            "A98": null,
            "Diesel": 2.17,
            "LPG": 0.88
        },
        "id": 32
    },
    {
        "name": "Saurida",
        "logo": "🔥",
        "city": "Vilnius",
        "address": "Vilnius, Jankiškių g. 43a, 02300",
        "lat": 54.6518904,
        "lng": 25.1856677,
        "prices": {
            "A95": 1.9,
            "A98": null,
            "Diesel": 2.19,
            "LPG": 0.88
        },
        "id": 33
    },
    {
        "name": "Saurida",
        "logo": "🔥",
        "city": "Visagino",
        "address": "Visaginas, Kosmoso g. 1, 31142",
        "lat": 55.5974245,
        "lng": 26.403381,
        "prices": {
            "A95": 1.9,
            "A98": null,
            "Diesel": 2.19,
            "LPG": 0.85
        },
        "id": 34
    },
    {
        "name": "Saurida",
        "logo": "🔥",
        "city": "Kaunas",
        "address": "Babtai, Vandžiogalos g. 3, 54328",
        "lat": 55.0969665,
        "lng": 23.8062494,
        "prices": {
            "A95": 1.89,
            "A98": null,
            "Diesel": 2.19,
            "LPG": 0.89
        },
        "id": 35
    },
    {
        "name": "Saurida",
        "logo": "🔥",
        "city": "Klaipėda",
        "address": "Klaipėda, Jūrininkų pr. 29, 95225",
        "lat": 55.6568391,
        "lng": 21.1838207,
        "prices": {
            "A95": 1.9,
            "A98": null,
            "Diesel": 2.18,
            "LPG": 0.89
        },
        "id": 36
    },
    {
        "name": "Saurida",
        "logo": "🔥",
        "city": "Prienų",
        "address": "Ignacavos k., Kauno pl. 18, 59149",
        "lat": 54.64665695,
        "lng": 23.93049151,
        "prices": {
            "A95": 1.91,
            "A98": null,
            "Diesel": 2.18,
            "LPG": 0.88
        },
        "id": 37
    },
    {
        "name": "Saurida",
        "logo": "🔥",
        "city": "Prienų",
        "address": "Mauručiai, Liepų g. 20, 59290",
        "lat": 54.771033,
        "lng": 23.7654659,
        "prices": {
            "A95": 1.92,
            "A98": null,
            "Diesel": 2.19,
            "LPG": null
        },
        "id": 38
    },
    {
        "name": "Saurida",
        "logo": "🔥",
        "city": "Radviliškio",
        "address": "Velžių k., Radviliškio plentas 2, 82218",
        "lat": 55.81474228,
        "lng": 23.55307458,
        "prices": {
            "A95": 1.92,
            "A98": null,
            "Diesel": 2.17,
            "LPG": 0.88
        },
        "id": 39
    },
    {
        "name": "Saurida",
        "logo": "🔥",
        "city": "Šiaulių",
        "address": "Šiauliai, Pramonės g. 7C, 78140",
        "lat": 55.91643206,
        "lng": 23.30171072,
        "prices": {
            "A95": 1.92,
            "A98": null,
            "Diesel": 2.17,
            "LPG": 0.88
        },
        "id": 40
    },
    {
        "name": "Saurida",
        "logo": "🔥",
        "city": "Vilnius",
        "address": "Zujūnai, Buivydiškių g. 1A, 14160",
        "lat": 54.7237502,
        "lng": 25.19128421,
        "prices": {
            "A95": 1.9,
            "A98": null,
            "Diesel": 2.19,
            "LPG": 0.87
        },
        "id": 41
    },
    {
        "name": "Saurida",
        "logo": "🔥",
        "city": "Akmenės",
        "address": "Naujoji Akmenė,  V. Kudirkos g. 18A, 85171",
        "lat": 56.31719142,
        "lng": 22.88494412,
        "prices": {
            "A95": 1.94,
            "A98": null,
            "Diesel": 2.19,
            "LPG": 0.88
        },
        "id": 42
    },
    {
        "name": "Saurida",
        "logo": "🔥",
        "city": "Akmenės",
        "address": "Pašakarnių k. Pašakarnių g. 1, 85271",
        "lat": 56.29814833,
        "lng": 22.88503939,
        "prices": {
            "A95": 1.95,
            "A98": null,
            "Diesel": 2.2,
            "LPG": 0.88
        },
        "id": 43
    },
    {
        "name": "Saurida",
        "logo": "🔥",
        "city": "Alytaus",
        "address": "Alytus, Miškininkų g. 7, 62201",
        "lat": 54.41146029,
        "lng": 24.06778707,
        "prices": {
            "A95": 1.87,
            "A98": null,
            "Diesel": 2.17,
            "LPG": null
        },
        "id": 44
    },
    {
        "name": "Saurida",
        "logo": "🔥",
        "city": "Kalvarijos",
        "address": "Kušliškių k. Suvalkijos g. 15, 69200",
        "lat": 54.43620168,
        "lng": 23.20482315,
        "prices": {
            "A95": 1.88,
            "A98": null,
            "Diesel": 2.17,
            "LPG": 0.84
        },
        "id": 45
    },
    {
        "name": "Saurida",
        "logo": "🔥",
        "city": "Kaunas",
        "address": "Kaunas, Garažų g. 20, 50314",
        "lat": 54.92355136,
        "lng": 24.00080623,
        "prices": {
            "A95": 1.93,
            "A98": null,
            "Diesel": 2.18,
            "LPG": 0.86
        },
        "id": 46
    },
    {
        "name": "Saurida",
        "logo": "🔥",
        "city": "Marijampolės",
        "address": "Marijampolė, Statybininkų g. 8, 68108",
        "lat": 54.57805775,
        "lng": 23.37781586,
        "prices": {
            "A95": 1.88,
            "A98": null,
            "Diesel": 2.16,
            "LPG": null
        },
        "id": 47
    },
    {
        "name": "Saurida",
        "logo": "🔥",
        "city": "Akmenės",
        "address": "Akmenės I k., Plento g. 1, 85380",
        "lat": 56.2384613,
        "lng": 22.75082341,
        "prices": {
            "A95": 1.95,
            "A98": null,
            "Diesel": 2.19,
            "LPG": 0.88
        },
        "id": 48
    },
    {
        "name": "Saurida",
        "logo": "🔥",
        "city": "Lazdijų",
        "address": "Panarvės k., 67168",
        "lat": 54.23326851,
        "lng": 23.53994591,
        "prices": {
            "A95": 1.89,
            "A98": null,
            "Diesel": 2.16,
            "LPG": 0.88
        },
        "id": 49
    },
    {
        "name": "Saurida",
        "logo": "🔥",
        "city": "Šakių",
        "address": "Lėkėčių k., Šakių g. 3, 71229",
        "lat": 54.97730671,
        "lng": 23.48357232,
        "prices": {
            "A95": 1.92,
            "A98": null,
            "Diesel": 2.2,
            "LPG": 0.88
        },
        "id": 50
    },
    {
        "name": "Saurida",
        "logo": "🔥",
        "city": "Kaunas",
        "address": "Domeikava, Muitinės g. 2, 54359",
        "lat": 54.95635825,
        "lng": 23.90473892,
        "prices": {
            "A95": 1.92,
            "A98": null,
            "Diesel": 2.19,
            "LPG": 0.89
        },
        "id": 51
    },
    {
        "name": "Saurida",
        "logo": "🔥",
        "city": "Vilnius",
        "address": "Čekoniškių k., 14207",
        "lat": 54.73739562,
        "lng": 25.07998794,
        "prices": {
            "A95": 1.9,
            "A98": null,
            "Diesel": 2.19,
            "LPG": null
        },
        "id": 52
    },
    {
        "name": "Saurida",
        "logo": "🔥",
        "city": "Jurbarko",
        "address": "Pašvenčio k., 74218",
        "lat": 55.08231765,
        "lng": 22.61092267,
        "prices": {
            "A95": 1.9,
            "A98": null,
            "Diesel": 2.16,
            "LPG": 0.84
        },
        "id": 53
    },
    {
        "name": "Saurida",
        "logo": "🔥",
        "city": "Kalvarijos",
        "address": "Kreivukės k., 69232",
        "lat": 54.40733298,
        "lng": 23.22100491,
        "prices": {
            "A95": null,
            "A98": null,
            "Diesel": null,
            "LPG": 0.84
        },
        "id": 54
    },
    {
        "name": "Saurida",
        "logo": "🔥",
        "city": "Vilnius",
        "address": "Vilnius, Stanevičiaus g. 3A, 07131",
        "lat": 54.72169255,
        "lng": 25.25586707,
        "prices": {
            "A95": null,
            "A98": null,
            "Diesel": null,
            "LPG": 0.88
        },
        "id": 55
    },
    {
        "name": "Saurida",
        "logo": "🔥",
        "city": "Vilnius",
        "address": "Vilnius, Rygos g. 2, 05264",
        "lat": 54.7156844,
        "lng": 25.22833024,
        "prices": {
            "A95": null,
            "A98": null,
            "Diesel": null,
            "LPG": 0.88
        },
        "id": 56
    },
    {
        "name": "Stateta",
        "logo": "⛽",
        "city": "Prienų",
        "address": "Gustaičių k., 59296",
        "lat": 54.73842126,
        "lng": 23.71035892,
        "prices": {
            "A95": 1.839,
            "A98": null,
            "Diesel": 2.149,
            "LPG": 0.879
        },
        "id": 57
    },
    {
        "name": "Stateta",
        "logo": "⛽",
        "city": "Vilnius",
        "address": "Vilnius, Ukmergės g. 246, 06120",
        "lat": 54.72324911,
        "lng": 25.24175616,
        "prices": {
            "A95": 1.839,
            "A98": null,
            "Diesel": 2.149,
            "LPG": 0.879
        },
        "id": 58
    },
    {
        "name": "Stateta",
        "logo": "⛽",
        "city": "Utenos",
        "address": "Utena, Palangos g. 66, 28140",
        "lat": 55.49857993,
        "lng": 25.58371001,
        "prices": {
            "A95": 1.839,
            "A98": null,
            "Diesel": 2.149,
            "LPG": 0.879
        },
        "id": 59
    },
    {
        "name": "Stateta",
        "logo": "⛽",
        "city": "Panevėžio",
        "address": "Paliūniškio k., Žemdirbių g. 15, 38440",
        "lat": 55.78756925,
        "lng": 24.43920971,
        "prices": {
            "A95": 1.839,
            "A98": null,
            "Diesel": 2.149,
            "LPG": 0.879
        },
        "id": 60
    },
    {
        "name": "Stateta",
        "logo": "⛽",
        "city": "Marijampolės",
        "address": "Kantališkių k., 69841",
        "lat": 54.63445071,
        "lng": 23.43639714,
        "prices": {
            "A95": 1.839,
            "A98": null,
            "Diesel": 2.149,
            "LPG": 0.879
        },
        "id": 61
    },
    {
        "name": "Stateta",
        "logo": "⛽",
        "city": "Kupiškio",
        "address": "Kupiškis, Panevėžio g. 9, 40134",
        "lat": 55.82603892,
        "lng": 24.97951392,
        "prices": {
            "A95": 1.839,
            "A98": null,
            "Diesel": 2.149,
            "LPG": 0.879
        },
        "id": 62
    },
    {
        "name": "Stateta",
        "logo": "⛽",
        "city": "Klaipėda",
        "address": "Klaipėda, Minijos g. 90, 93239",
        "lat": 55.68528783,
        "lng": 21.1471005,
        "prices": {
            "A95": 1.839,
            "A98": null,
            "Diesel": 2.149,
            "LPG": 0.879
        },
        "id": 63
    },
    {
        "name": "Stateta",
        "logo": "⛽",
        "city": "Kaunas",
        "address": "Ramučių k., Erdvės g. 78, 54463",
        "lat": 54.92905072,
        "lng": 24.03811456,
        "prices": {
            "A95": 1.839,
            "A98": null,
            "Diesel": 2.149,
            "LPG": 0.879
        },
        "id": 64
    },
    {
        "name": "Stateta",
        "logo": "⛽",
        "city": "Kalvarijos",
        "address": "Kreivukė, Turgaus g. 4, 69232",
        "lat": 54.41091631,
        "lng": 23.20671774,
        "prices": {
            "A95": 1.839,
            "A98": null,
            "Diesel": 2.149,
            "LPG": 0.879
        },
        "id": 65
    },
    {
        "name": "Stateta",
        "logo": "⛽",
        "city": "Alytaus",
        "address": "Alytaus k., 64464",
        "lat": 54.40773067,
        "lng": 24.08521954,
        "prices": {
            "A95": 1.839,
            "A98": null,
            "Diesel": 2.149,
            "LPG": 0.879
        },
        "id": 66
    },
    {
        "name": "Stateta",
        "logo": "⛽",
        "city": "Alytaus",
        "address": "Kaniūkų k., 64104",
        "lat": 54.36604328,
        "lng": 24.12186902,
        "prices": {
            "A95": 1.839,
            "A98": null,
            "Diesel": 2.149,
            "LPG": 0.879
        },
        "id": 67
    },
    {
        "name": "Stateta",
        "logo": "⛽",
        "city": "Alytaus",
        "address": "Miklusėnai, Kauno g. 1, 62461",
        "lat": 54.42803816,
        "lng": 24.0012011,
        "prices": {
            "A95": 1.839,
            "A98": null,
            "Diesel": 2.149,
            "LPG": 0.879
        },
        "id": 68
    },
    {
        "name": "Tomega",
        "logo": "⛽",
        "city": "Šalčininkų",
        "address": "Tartoko k., 17127",
        "lat": 54.30592204,
        "lng": 25.36089318,
        "prices": {
            "A95": 2.029,
            "A98": null,
            "Diesel": 2.279,
            "LPG": null
        },
        "id": 69
    },
    {
        "name": "Tomega",
        "logo": "⛽",
        "city": "Druskininkų",
        "address": "Druskininkai, Gardino g. 98, 66225",
        "lat": 53.99029291,
        "lng": 24.00567101,
        "prices": {
            "A95": 1.99,
            "A98": null,
            "Diesel": 2.25,
            "LPG": 0.88
        },
        "id": 70
    },
    {
        "name": "Topgas",
        "logo": "⛽",
        "city": "Kaišiadorių",
        "address": "Kaišiadorys, Paukštininkų g. 13, 56161",
        "lat": 54.86513266,
        "lng": 24.4341538,
        "prices": {
            "A95": null,
            "A98": null,
            "Diesel": null,
            "LPG": 0.86
        },
        "id": 71
    },
    {
        "name": "Topgas",
        "logo": "⛽",
        "city": "Kupiškio",
        "address": "Slavinčiškis, Slavinčiškio g. 18, 40333",
        "lat": 55.83154966,
        "lng": 25.0198713,
        "prices": {
            "A95": null,
            "A98": null,
            "Diesel": null,
            "LPG": 0.81
        },
        "id": 72
    },
    {
        "name": "Tripletas",
        "logo": "⛽",
        "city": "Mažeikių",
        "address": "Mažeikiai, Sedos g. 16, 89233",
        "lat": 56.30530435,
        "lng": 22.34252813,
        "prices": {
            "A95": 1.88,
            "A98": null,
            "Diesel": 2.2,
            "LPG": 0.84
        },
        "id": 73
    },
    {
        "name": "Tumasa",
        "logo": "⛽",
        "city": "Mažeikių",
        "address": "Židikai, Mažeikių g. 10, 89442",
        "lat": 56.31799412,
        "lng": 22.01862611,
        "prices": {
            "A95": 1.98,
            "A98": null,
            "Diesel": 2.3,
            "LPG": 0.94
        },
        "id": 74
    },
    {
        "name": "Utentra",
        "logo": "⛽",
        "city": "Utenos",
        "address": "Utena, Pramonės g. 16, 28119",
        "lat": 55.49470397,
        "lng": 25.64582108,
        "prices": {
            "A95": null,
            "A98": null,
            "Diesel": 2.169,
            "LPG": null
        },
        "id": 75
    },
    {
        "name": "Velseka",
        "logo": "⛽",
        "city": "Kupiškio",
        "address": "Kupiškis, Panevėžio g. 5, 40134",
        "lat": 55.82748974,
        "lng": 24.98569522,
        "prices": {
            "A95": 1.847,
            "A98": null,
            "Diesel": 2.147,
            "LPG": 0.827
        },
        "id": 76
    },
    {
        "name": "Vimijula",
        "logo": "⛽",
        "city": "Jonavos",
        "address": "Ručiūnų k., Kauno g. 2A, 55355",
        "lat": 55.13794926,
        "lng": 24.1932708,
        "prices": {
            "A95": 1.97,
            "A98": null,
            "Diesel": 2.26,
            "LPG": 0.89
        },
        "id": 77
    },
    {
        "name": "VIRŠI Lietuva",
        "logo": "⛽",
        "city": "Marijampolės",
        "address": "Pasūduonės k., L.Taunio g. 3, 69331",
        "lat": 54.47583948,
        "lng": 23.22134553,
        "prices": {
            "A95": 1.954,
            "A98": null,
            "Diesel": 2.234,
            "LPG": 0.934
        },
        "id": 78
    },
    {
        "name": "Žibalas",
        "logo": "⛽",
        "city": "Jonavos",
        "address": "Jonava, Taurostos g. 16A, 55195",
        "lat": 55.07211501,
        "lng": 24.29494647,
        "prices": {
            "A95": 2.05,
            "A98": null,
            "Diesel": 2.29,
            "LPG": 0.96
        },
        "id": 79
    },
    {
        "name": "Tomega",
        "logo": "⛽",
        "city": "Šalčininkų",
        "address": "Dumblės k., 17178",
        "lat": 54.16015419,
        "lng": 25.00989858,
        "prices": {
            "A95": 2.039,
            "A98": null,
            "Diesel": 2.289,
            "LPG": null
        },
        "id": 80
    },
    {
        "name": "UAB GINDANA degalai laivams",
        "logo": "⛽",
        "city": "Klaipėda",
        "address": "Klaipėda, Priešpilio g. 5, 91240",
        "lat": 55.70413979,
        "lng": 21.12956596,
        "prices": {
            "A95": 1.99,
            "A98": null,
            "Diesel": 2.22,
            "LPG": null
        },
        "id": 81
    },
    {
        "name": "Saurida",
        "logo": "🔥",
        "city": "Skuodo",
        "address": "Skuodas, Vytauto g. 20, 98123",
        "lat": 56.26078641,
        "lng": 21.53007634,
        "prices": {
            "A95": 1.92,
            "A98": null,
            "Diesel": 2.21,
            "LPG": 0.88
        },
        "id": 82
    },
    {
        "name": "Stateta",
        "logo": "⛽",
        "city": "Alytaus",
        "address": "Alytus, Santaikos g. 28 B, 62123",
        "lat": 54.40763497,
        "lng": 24.08515544,
        "prices": {
            "A95": 1.839,
            "A98": null,
            "Diesel": 2.149,
            "LPG": null
        },
        "id": 83
    },
    {
        "name": "Saurida",
        "logo": "🔥",
        "city": "Kaunas",
        "address": "Neveronių k., Martinavos g. 1, 54475",
        "lat": 54.9245727,
        "lng": 24.07912738,
        "prices": {
            "A95": 1.89,
            "A98": null,
            "Diesel": 2.18,
            "LPG": 0.88
        },
        "id": 84
    }
];