// Automatiškai sugeneruoti duomenys iš LEA API (via Playwright)
const lastUpdated = '2026-11-14';
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
            "A95": 1.87,
            "A98": null,
            "Diesel": 2.2,
            "LPG": 1.05
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
            "A95": 1.82,
            "A98": null,
            "Diesel": 2.18,
            "LPG": 1.02
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
            "A95": 1.81,
            "A98": null,
            "Diesel": 2.22,
            "LPG": 1.05
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
            "A95": 1.87,
            "A98": null,
            "Diesel": 2.26,
            "LPG": 0.99
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
            "A95": 1.799,
            "A98": null,
            "Diesel": 2.199,
            "LPG": 1.039
        },
        "id": 5
    },
    {
        "name": "Autograndas",
        "logo": "⛽",
        "city": "Visagino",
        "address": "Visaginas, Taikos pr. 47, 31217",
        "lat": 55.59049932,
        "lng": 26.4632926,
        "prices": {
            "A95": 1.698,
            "A98": null,
            "Diesel": 2.098,
            "LPG": null
        },
        "id": 6
    },
    {
        "name": "Bemija",
        "logo": "⛽",
        "city": "Ukmergės",
        "address": "Ukmergė, Dariaus ir Girėno g. 31, 20154",
        "lat": 55.24072789,
        "lng": 24.78759909,
        "prices": {
            "A95": 1.67,
            "A98": null,
            "Diesel": 2.1,
            "LPG": 0.99
        },
        "id": 7
    },
    {
        "name": "Bonsa",
        "logo": "⛽",
        "city": "Tauragės",
        "address": "Taurai, Tilžės pl. 46, 72142",
        "lat": 55.24243868,
        "lng": 22.25002133,
        "prices": {
            "A95": 1.659,
            "A98": null,
            "Diesel": 2.099,
            "LPG": 0.95
        },
        "id": 8
    },
    {
        "name": "Bonsa",
        "logo": "⛽",
        "city": "Tauragės",
        "address": "Vaidatonių k. 1, 73406",
        "lat": 55.4692054,
        "lng": 22.67890501,
        "prices": {
            "A95": 1.72,
            "A98": null,
            "Diesel": 2.12,
            "LPG": 0.98
        },
        "id": 9
    },
    {
        "name": "Gelvybė",
        "logo": "⛽",
        "city": "Vilkaviškio",
        "address": "Rūdos k., Marijampolės g. 8, 70313",
        "lat": 54.60190628,
        "lng": 23.19493466,
        "prices": {
            "A95": 1.779,
            "A98": null,
            "Diesel": 2.179,
            "LPG": 1.04
        },
        "id": 10
    },
    {
        "name": "Gelvybė",
        "logo": "⛽",
        "city": "Kėdainių",
        "address": "Aristava, Aristavos g. 4, 58111",
        "lat": 55.29715858,
        "lng": 24.07702013,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 2.199,
            "LPG": 1.04
        },
        "id": 11
    },
    {
        "name": "Gelvybė",
        "logo": "⛽",
        "city": "Šakių",
        "address": "Girėnai, Kauno g. 50, 71129",
        "lat": 54.9528389,
        "lng": 23.08023645,
        "prices": {
            "A95": 1.869,
            "A98": null,
            "Diesel": 2.199,
            "LPG": 1.04
        },
        "id": 12
    },
    {
        "name": "Gelvybė",
        "logo": "⛽",
        "city": "Šakių",
        "address": "Šakiai, V. Kudirkos g. 11D, 71124",
        "lat": 54.95418698,
        "lng": 23.02456981,
        "prices": {
            "A95": 1.869,
            "A98": null,
            "Diesel": 2.199,
            "LPG": 1.04
        },
        "id": 13
    },
    {
        "name": "Gelvybė",
        "logo": "⛽",
        "city": "Jurbarko",
        "address": "Jurbarkas, Knygnešių g. 9, 74212",
        "lat": 55.08548938,
        "lng": 22.74549699,
        "prices": {
            "A95": 1.849,
            "A98": null,
            "Diesel": 2.199,
            "LPG": 1.04
        },
        "id": 14
    },
    {
        "name": "Gelvybė",
        "logo": "⛽",
        "city": "Jurbarko",
        "address": "Jurbarkas, Muitinės g. 32, 74111",
        "lat": 55.07714633,
        "lng": 22.7510279,
        "prices": {
            "A95": 1.849,
            "A98": null,
            "Diesel": 2.199,
            "LPG": 1.04
        },
        "id": 15
    },
    {
        "name": "Gelvybė",
        "logo": "⛽",
        "city": "Jurbarko",
        "address": "Jurbarkas, S. Daukanto g. 66, 74170",
        "lat": 55.08252673,
        "lng": 22.78879208,
        "prices": {
            "A95": 1.849,
            "A98": null,
            "Diesel": 2.199,
            "LPG": 1.04
        },
        "id": 16
    },
    {
        "name": "Gelvybė",
        "logo": "⛽",
        "city": "Šakių",
        "address": "Kiduliai, Sūduvos g. 3, 71400",
        "lat": 55.06387545,
        "lng": 22.7807238,
        "prices": {
            "A95": 1.849,
            "A98": null,
            "Diesel": 2.199,
            "LPG": 1.04
        },
        "id": 17
    },
    {
        "name": "Gelvybė",
        "logo": "⛽",
        "city": "Jurbarko",
        "address": "Seredžius, S. Šimkaus g. 69, 74425",
        "lat": 55.07883072,
        "lng": 23.39670955,
        "prices": {
            "A95": 1.849,
            "A98": null,
            "Diesel": 2.199,
            "LPG": null
        },
        "id": 18
    },
    {
        "name": "Gelvybė",
        "logo": "⛽",
        "city": "Šakių",
        "address": "Mozūriškiai, Mozūriškių 10, 71382",
        "lat": 55.02160289,
        "lng": 22.96955865,
        "prices": {
            "A95": 1.86,
            "A98": null,
            "Diesel": 2.19,
            "LPG": null
        },
        "id": 19
    },
    {
        "name": "Medelsta",
        "logo": "⛽",
        "city": "Vilnius",
        "address": "Pagirių k., Durpių g. 45, 14118",
        "lat": 54.56927739,
        "lng": 25.1881691,
        "prices": {
            "A95": 1.79,
            "A98": null,
            "Diesel": 2.19,
            "LPG": 1.07
        },
        "id": 20
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
            "LPG": 1.03
        },
        "id": 21
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
            "LPG": 1.01
        },
        "id": 22
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
            "LPG": 1.04
        },
        "id": 23
    },
    {
        "name": "Plungės lagūna",
        "logo": "⛽",
        "city": "Rietavo",
        "address": "Rietavas, Plungės g. 32, 90313",
        "lat": 55.73496531,
        "lng": 21.92401379,
        "prices": {
            "A95": 1.891,
            "A98": null,
            "Diesel": 2.199,
            "LPG": 1.096
        },
        "id": 24
    },
    {
        "name": "Prie Luksto",
        "logo": "⛽",
        "city": "Telšių",
        "address": "Telšiai, Masčio g. 21, 87139",
        "lat": 55.97576248,
        "lng": 22.26366425,
        "prices": {
            "A95": 1.855,
            "A98": null,
            "Diesel": 2.235,
            "LPG": 1.059
        },
        "id": 25
    },
    {
        "name": "Regusa",
        "logo": "⛽",
        "city": "Kaunas",
        "address": "Kaunas, Marijampolės pl. 20, 46147",
        "lat": 54.8502039,
        "lng": 23.9657416,
        "prices": {
            "A95": 1.75,
            "A98": null,
            "Diesel": 2.12,
            "LPG": 0.99
        },
        "id": 26
    },
    {
        "name": "Regusa",
        "logo": "⛽",
        "city": "Vilkaviškio",
        "address": "Kybartai, J. Basanavičiaus g. 45A, 70417",
        "lat": 54.63850721,
        "lng": 22.76327716,
        "prices": {
            "A95": 1.84,
            "A98": null,
            "Diesel": 2.12,
            "LPG": 0.99
        },
        "id": 27
    },
    {
        "name": "Stateta",
        "logo": "⛽",
        "city": "Prienų",
        "address": "Gustaičių k., 59296",
        "lat": 54.73842126,
        "lng": 23.71035892,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 2.119,
            "LPG": 1.049
        },
        "id": 28
    },
    {
        "name": "Stateta",
        "logo": "⛽",
        "city": "Vilnius",
        "address": "Vilnius, Ukmergės g. 246, 06120",
        "lat": 54.72324911,
        "lng": 25.24175616,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 2.119,
            "LPG": 1.049
        },
        "id": 29
    },
    {
        "name": "Stateta",
        "logo": "⛽",
        "city": "Utenos",
        "address": "Utena, Palangos g. 66, 28140",
        "lat": 55.49857993,
        "lng": 25.58371001,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 2.119,
            "LPG": 1.049
        },
        "id": 30
    },
    {
        "name": "Stateta",
        "logo": "⛽",
        "city": "Panevėžio",
        "address": "Paliūniškio k., Žemdirbių g. 15, 38440",
        "lat": 55.78756925,
        "lng": 24.43920971,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 2.119,
            "LPG": 1.049
        },
        "id": 31
    },
    {
        "name": "Stateta",
        "logo": "⛽",
        "city": "Marijampolės",
        "address": "Kantališkių k., 69841",
        "lat": 54.63445071,
        "lng": 23.43639714,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 2.119,
            "LPG": 1.049
        },
        "id": 32
    },
    {
        "name": "Stateta",
        "logo": "⛽",
        "city": "Kupiškio",
        "address": "Kupiškis, Panevėžio g. 9, 40134",
        "lat": 55.82603892,
        "lng": 24.97951392,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 2.119,
            "LPG": 1.049
        },
        "id": 33
    },
    {
        "name": "Stateta",
        "logo": "⛽",
        "city": "Klaipėda",
        "address": "Klaipėda, Minijos g. 90, 93239",
        "lat": 55.68528783,
        "lng": 21.1471005,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 2.119,
            "LPG": 1.049
        },
        "id": 34
    },
    {
        "name": "Stateta",
        "logo": "⛽",
        "city": "Kaunas",
        "address": "Ramučių k., Erdvės g. 78, 54463",
        "lat": 54.92905072,
        "lng": 24.03811456,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 2.119,
            "LPG": 1.049
        },
        "id": 35
    },
    {
        "name": "Stateta",
        "logo": "⛽",
        "city": "Kalvarijos",
        "address": "Kreivukė, Turgaus g. 4, 69232",
        "lat": 54.41091631,
        "lng": 23.20671774,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 2.119,
            "LPG": 1.049
        },
        "id": 36
    },
    {
        "name": "Stateta",
        "logo": "⛽",
        "city": "Alytaus",
        "address": "Alytaus k., 64464",
        "lat": 54.40773067,
        "lng": 24.08521954,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 2.119,
            "LPG": 1.049
        },
        "id": 37
    },
    {
        "name": "Stateta",
        "logo": "⛽",
        "city": "Alytaus",
        "address": "Kaniūkų k., 64104",
        "lat": 54.36604328,
        "lng": 24.12186902,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 2.119,
            "LPG": 1.049
        },
        "id": 38
    },
    {
        "name": "Stateta",
        "logo": "⛽",
        "city": "Alytaus",
        "address": "Miklusėnai, Kauno g. 1, 62461",
        "lat": 54.42803816,
        "lng": 24.0012011,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 2.119,
            "LPG": 1.049
        },
        "id": 39
    },
    {
        "name": "Tomega",
        "logo": "⛽",
        "city": "Šalčininkų",
        "address": "Tartoko k., 17127",
        "lat": 54.30592204,
        "lng": 25.36089318,
        "prices": {
            "A95": 1.859,
            "A98": null,
            "Diesel": 2.239,
            "LPG": null
        },
        "id": 40
    },
    {
        "name": "Tomega",
        "logo": "⛽",
        "city": "Druskininkų",
        "address": "Druskininkai, Gardino g. 98, 66225",
        "lat": 53.99029291,
        "lng": 24.00567101,
        "prices": {
            "A95": 1.84,
            "A98": null,
            "Diesel": 2.2,
            "LPG": 1.01
        },
        "id": 41
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
            "LPG": 1.0
        },
        "id": 42
    },
    {
        "name": "Trevena",
        "logo": "⛽",
        "city": "Šilutės",
        "address": "Žemaitkiemio k., Liepų g. 4, 99317",
        "lat": 55.22753566,
        "lng": 21.70188358,
        "prices": {
            "A95": 1.81,
            "A98": null,
            "Diesel": 2.19,
            "LPG": 1.05
        },
        "id": 43
    },
    {
        "name": "Trevena",
        "logo": "⛽",
        "city": "Rietavo",
        "address": "Vatušių k., Kvėdarnos g. 2, 90307",
        "lat": 55.71844617,
        "lng": 21.93221161,
        "prices": {
            "A95": 1.81,
            "A98": null,
            "Diesel": 2.19,
            "LPG": 1.02
        },
        "id": 44
    },
    {
        "name": "Trevena",
        "logo": "⛽",
        "city": "Rietavo",
        "address": "Rietavas, Lėgų k. 1, 90305",
        "lat": 55.6269372,
        "lng": 21.97178201,
        "prices": {
            "A95": 1.81,
            "A98": null,
            "Diesel": 2.19,
            "LPG": 1.05
        },
        "id": 45
    },
    {
        "name": "Trevena",
        "logo": "⛽",
        "city": "Klaipėda",
        "address": "Dituvos k., Šv. Kristoforo g. 4, 96357",
        "lat": 55.58208249,
        "lng": 21.28526307,
        "prices": {
            "A95": 1.81,
            "A98": null,
            "Diesel": 2.19,
            "LPG": 1.05
        },
        "id": 46
    },
    {
        "name": "Trevena",
        "logo": "⛽",
        "city": "Klaipėda",
        "address": "Gargždai, Kretingos pl. 1, 96105",
        "lat": 55.71383582,
        "lng": 21.38662566,
        "prices": {
            "A95": 1.81,
            "A98": null,
            "Diesel": 2.22,
            "LPG": 1.07
        },
        "id": 47
    },
    {
        "name": "Trevena",
        "logo": "⛽",
        "city": "Klaipėda",
        "address": "Pyktiškės k., Veiviržėnų g. 29, 96303",
        "lat": 55.68724108,
        "lng": 21.69352503,
        "prices": {
            "A95": 1.81,
            "A98": null,
            "Diesel": 2.19,
            "LPG": 1.05
        },
        "id": 48
    },
    {
        "name": "Trevena",
        "logo": "⛽",
        "city": "Klaipėda",
        "address": "Gargždai, Klaipėdos g. 39, 96157",
        "lat": 55.7122819,
        "lng": 21.3816268,
        "prices": {
            "A95": 1.75,
            "A98": null,
            "Diesel": 2.18,
            "LPG": 1.03
        },
        "id": 49
    },
    {
        "name": "Trevena",
        "logo": "⛽",
        "city": "Klaipėda",
        "address": "Klaipėda, Kretingos g. 28A, 92211",
        "lat": 55.7283977,
        "lng": 21.1325842,
        "prices": {
            "A95": 1.81,
            "A98": null,
            "Diesel": 2.19,
            "LPG": 1.05
        },
        "id": 50
    },
    {
        "name": "Trevena",
        "logo": "⛽",
        "city": "Klaipėda",
        "address": "Klaipėda, Minijos g. 152A, 93263",
        "lat": 55.6696562,
        "lng": 21.1586131,
        "prices": {
            "A95": 1.8,
            "A98": null,
            "Diesel": 2.19,
            "LPG": 1.05
        },
        "id": 51
    },
    {
        "name": "Trevena",
        "logo": "⛽",
        "city": "Šilutės",
        "address": "Saugų k., Tilžės g. 21, 99409",
        "lat": 55.46435252,
        "lng": 21.4702782,
        "prices": {
            "A95": 1.81,
            "A98": null,
            "Diesel": 2.19,
            "LPG": 1.05
        },
        "id": 52
    },
    {
        "name": "Trevena",
        "logo": "⛽",
        "city": "Kretingos",
        "address": "Kretinga, Vilniaus g. 29B, 97101",
        "lat": 55.8969624,
        "lng": 21.24431594,
        "prices": {
            "A95": 1.82,
            "A98": null,
            "Diesel": 2.21,
            "LPG": 1.08
        },
        "id": 53
    },
    {
        "name": "Trevena",
        "logo": "⛽",
        "city": "Kretingos",
        "address": "Darbėnai, Laisvės g. 15, 97264",
        "lat": 56.02481425,
        "lng": 21.26498187,
        "prices": {
            "A95": 1.82,
            "A98": null,
            "Diesel": 2.21,
            "LPG": 1.08
        },
        "id": 54
    },
    {
        "name": "Tripletas",
        "logo": "⛽",
        "city": "Mažeikių",
        "address": "Mažeikiai, Sedos g. 16, 89233",
        "lat": 56.30530435,
        "lng": 22.34252813,
        "prices": {
            "A95": 1.77,
            "A98": null,
            "Diesel": 2.22,
            "LPG": 1.03
        },
        "id": 55
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
        "id": 56
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
            "Diesel": 2.109,
            "LPG": null
        },
        "id": 57
    },
    {
        "name": "Velseka",
        "logo": "⛽",
        "city": "Kupiškio",
        "address": "Kupiškis, Panevėžio g. 5, 40134",
        "lat": 55.82748974,
        "lng": 24.98569522,
        "prices": {
            "A95": 1.659,
            "A98": null,
            "Diesel": 2.089,
            "LPG": 0.969
        },
        "id": 58
    },
    {
        "name": "Vildega",
        "logo": "⛽",
        "city": "Vilkaviškio",
        "address": "Vilkaviškis, Vytauto g. 2D, 70137",
        "lat": 54.64346113,
        "lng": 23.05291997,
        "prices": {
            "A95": 1.759,
            "A98": null,
            "Diesel": 2.159,
            "LPG": 1.03
        },
        "id": 59
    },
    {
        "name": "Vimijula",
        "logo": "⛽",
        "city": "Jonavos",
        "address": "Ručiūnų k., Kauno g. 2A, 55355",
        "lat": 55.13794926,
        "lng": 24.1932708,
        "prices": {
            "A95": 1.92,
            "A98": null,
            "Diesel": 2.25,
            "LPG": 1.06
        },
        "id": 60
    },
    {
        "name": "VIRŠI Lietuva",
        "logo": "⛽",
        "city": "Marijampolės",
        "address": "Pasūduonės k., L.Taunio g. 3, 69331",
        "lat": 54.47583948,
        "lng": 23.22134553,
        "prices": {
            "A95": 1.794,
            "A98": null,
            "Diesel": 2.184,
            "LPG": 1.034
        },
        "id": 61
    },
    {
        "name": "Žibalas",
        "logo": "⛽",
        "city": "Jonavos",
        "address": "Jonava, Taurostos g. 16A, 55195",
        "lat": 55.07211501,
        "lng": 24.29494647,
        "prices": {
            "A95": 1.94,
            "A98": null,
            "Diesel": 2.26,
            "LPG": 1.08
        },
        "id": 62
    },
    {
        "name": "Tomega",
        "logo": "⛽",
        "city": "Šalčininkų",
        "address": "Dumblės k., 17178",
        "lat": 54.16015419,
        "lng": 25.00989858,
        "prices": {
            "A95": 1.869,
            "A98": null,
            "Diesel": 2.249,
            "LPG": null
        },
        "id": 63
    },
    {
        "name": "UAB GINDANA degalai laivams",
        "logo": "⛽",
        "city": "Klaipėda",
        "address": "Klaipėda, Priešpilio g. 5, 91240",
        "lat": 55.70413979,
        "lng": 21.12956596,
        "prices": {
            "A95": 1.82,
            "A98": null,
            "Diesel": 2.2,
            "LPG": null
        },
        "id": 64
    },
    {
        "name": "Stateta",
        "logo": "⛽",
        "city": "Alytaus",
        "address": "Alytus, Santaikos g. 28 B, 62123",
        "lat": 54.40763497,
        "lng": 24.08515544,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 2.119,
            "LPG": null
        },
        "id": 65
    }
];