// Automatiškai sugeneruoti duomenys iš LEA API (via Playwright)
const lastUpdated = '2026-11-02';
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
            "A95": 1.91,
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
            "Diesel": 2.22,
            "LPG": 0.89
        },
        "id": 2
    },
    {
        "name": "IĮ Raimondo Balsio",
        "logo": "⛽",
        "city": "Kelmės",
        "address": "Ramučių k., Luokės g. 2, 86377",
        "lat": 55.83034343,
        "lng": 22.85339056,
        "prices": {
            "A95": 1.99,
            "A98": null,
            "Diesel": 2.25,
            "LPG": 0.94
        },
        "id": 3
    },
    {
        "name": "Tormenta",
        "logo": "⛽",
        "city": "Kaunas",
        "address": "Kaunas, Linkuvos g. 77, 48314",
        "lat": 54.6872,
        "lng": 25.2797,
        "prices": {
            "A95": 1.84,
            "A98": null,
            "Diesel": 2.19,
            "LPG": null
        },
        "id": 4
    },
    {
        "name": "Adukesta",
        "logo": "⛽",
        "city": "Klaipėda",
        "address": "Maciuičių k., Laisvės g. 50, 96159",
        "lat": 55.69353278,
        "lng": 21.41399033,
        "prices": {
            "A95": 1.92,
            "A98": null,
            "Diesel": 2.28,
            "LPG": 0.93
        },
        "id": 5
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
            "Diesel": 2.29,
            "LPG": 0.93
        },
        "id": 6
    },
    {
        "name": "Atsiauta",
        "logo": "⛽",
        "city": "Šiaulių",
        "address": "Kuršėnai, Vytauto g. 80, 81146",
        "lat": 56.01488869,
        "lng": 22.95124646,
        "prices": {
            "A95": 1.93,
            "A98": null,
            "Diesel": 2.25,
            "LPG": 0.91
        },
        "id": 7
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
            "LPG": 0.99
        },
        "id": 8
    },
    {
        "name": "Bonsa",
        "logo": "⛽",
        "city": "Tauragės",
        "address": "Taurai, Tilžės pl. 46, 72142",
        "lat": 55.24243868,
        "lng": 22.25002133,
        "prices": {
            "A95": 1.869,
            "A98": null,
            "Diesel": 2.169,
            "LPG": 0.89
        },
        "id": 9
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
            "Diesel": 2.21,
            "LPG": 0.91
        },
        "id": 10
    },
    {
        "name": "Dujovita",
        "logo": "⛽",
        "city": "Kaunas",
        "address": "Kaunas, Islandijos pl. 191D, 49170",
        "lat": 54.93161139,
        "lng": 23.95134209,
        "prices": {
            "A95": null,
            "A98": null,
            "Diesel": null,
            "LPG": 0.88
        },
        "id": 11
    },
    {
        "name": "Dujovita",
        "logo": "⛽",
        "city": "Kaunas",
        "address": "Kaunas, Jonavos g. 110, 44136",
        "lat": 54.91332994,
        "lng": 23.91165299,
        "prices": {
            "A95": null,
            "A98": null,
            "Diesel": null,
            "LPG": 0.87
        },
        "id": 12
    },
    {
        "name": "Dujovita",
        "logo": "⛽",
        "city": "Kėdainių",
        "address": "Kėdainiai, Basanavičiaus g. 91E, 57356",
        "lat": 55.27806842,
        "lng": 23.96011207,
        "prices": {
            "A95": null,
            "A98": null,
            "Diesel": null,
            "LPG": 0.92
        },
        "id": 13
    },
    {
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Marijampolės",
        "address": "Marijampolė, Stoties g. 6B, 68110",
        "lat": 54.5651634,
        "lng": 23.3685594,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 2.239,
            "LPG": 0.93
        },
        "id": 14
    },
    {
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Vilnius",
        "address": "Vilnius, Kareivių g. 4, 09109",
        "lat": 54.71780979,
        "lng": 25.29570785,
        "prices": {
            "A95": 1.869,
            "A98": null,
            "Diesel": 2.199,
            "LPG": 0.939
        },
        "id": 15
    },
    {
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Kaunas",
        "address": "Kaunas, Draugystės g. 8B, 51262",
        "lat": 54.90806211,
        "lng": 23.99208918,
        "prices": {
            "A95": 1.869,
            "A98": null,
            "Diesel": 2.219,
            "LPG": 0.919
        },
        "id": 16
    },
    {
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Marijampolės",
        "address": "Pietarių k., Kauno g. 165, 68100",
        "lat": 54.59288028,
        "lng": 23.3895944,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 2.199,
            "LPG": 0.919
        },
        "id": 17
    },
    {
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Alytaus",
        "address": "Alytus, Ūdrijos g. 2, 62402",
        "lat": 54.40818386,
        "lng": 24.01664565,
        "prices": {
            "A95": 1.89,
            "A98": null,
            "Diesel": 2.21,
            "LPG": 0.91
        },
        "id": 18
    },
    {
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Kaišiadorių",
        "address": "Kaišiadorys, Paukštininkų g. 4a, 56160",
        "lat": 54.86429653,
        "lng": 24.4365125,
        "prices": {
            "A95": 1.919,
            "A98": null,
            "Diesel": 2.219,
            "LPG": 0.93
        },
        "id": 19
    },
    {
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Marijampolės",
        "address": "Skaisčiūnų k., Europos g. 11, 69338",
        "lat": 54.55838998,
        "lng": 23.27509219,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 2.199,
            "LPG": 0.919
        },
        "id": 20
    },
    {
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Radviliškio",
        "address": "Radviliškis, Miško g. 62, 77158",
        "lat": 55.80188334,
        "lng": 23.56395801,
        "prices": {
            "A95": 1.889,
            "A98": null,
            "Diesel": 2.219,
            "LPG": 0.93
        },
        "id": 21
    },
    {
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Trakų",
        "address": "Sausių k., Sausių g. 2, 21401",
        "lat": 54.70748538,
        "lng": 24.99602824,
        "prices": {
            "A95": 1.91,
            "A98": null,
            "Diesel": 2.23,
            "LPG": 0.93
        },
        "id": 22
    },
    {
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Trakų",
        "address": "Lentvaris, Sodų g. 3, 25117",
        "lat": 54.64344711,
        "lng": 25.05337226,
        "prices": {
            "A95": 1.91,
            "A98": null,
            "Diesel": 2.23,
            "LPG": 0.939
        },
        "id": 23
    },
    {
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Vilnius",
        "address": "Bukiškis, Ukmergės g. 437, 14183",
        "lat": 54.75348736,
        "lng": 25.21176142,
        "prices": {
            "A95": 1.919,
            "A98": null,
            "Diesel": 2.239,
            "LPG": 0.93
        },
        "id": 24
    },
    {
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Vilnius",
        "address": "Maišiagala, Mokyklos g. 26, 14243",
        "lat": 54.87343023,
        "lng": 25.07348259,
        "prices": {
            "A95": 1.939,
            "A98": null,
            "Diesel": 2.259,
            "LPG": 0.959
        },
        "id": 25
    },
    {
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Vilnius",
        "address": "Kreivalaužių k., Taikos g. 1, 15166",
        "lat": 54.83569632,
        "lng": 25.46029697,
        "prices": {
            "A95": 1.89,
            "A98": null,
            "Diesel": 2.21,
            "LPG": 0.93
        },
        "id": 26
    },
    {
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Vilnius",
        "address": "Vilnius, Gunkliškių g. 2F, 02231",
        "lat": 54.62279493,
        "lng": 25.10535095,
        "prices": {
            "A95": 1.919,
            "A98": null,
            "Diesel": 2.239,
            "LPG": 0.939
        },
        "id": 27
    },
    {
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Vilnius",
        "address": "Vilnius, Kirtimų g. 33, 02300",
        "lat": 54.62720828,
        "lng": 25.14897108,
        "prices": {
            "A95": 1.859,
            "A98": null,
            "Diesel": 2.219,
            "LPG": 0.919
        },
        "id": 28
    },
    {
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Vilnius",
        "address": "Vilnius, Pajautos g. 31, 06200",
        "lat": 54.7104024,
        "lng": 25.16198676,
        "prices": {
            "A95": 1.889,
            "A98": null,
            "Diesel": 2.209,
            "LPG": 0.93
        },
        "id": 29
    },
    {
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Vilnius",
        "address": "Vilnius, Liepkalnio g. 112A, 02121",
        "lat": 54.65275983,
        "lng": 25.30571446,
        "prices": {
            "A95": 1.919,
            "A98": null,
            "Diesel": 2.239,
            "LPG": 0.93
        },
        "id": 30
    },
    {
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Vilnius",
        "address": "Vilnius, Savanorių pr. 225, 02300",
        "lat": 54.64104106,
        "lng": 25.18403844,
        "prices": {
            "A95": 1.859,
            "A98": null,
            "Diesel": 2.219,
            "LPG": 0.919
        },
        "id": 31
    },
    {
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Vilnius",
        "address": "Vilnius, Spyglių g. 2, 27101",
        "lat": 54.66843137,
        "lng": 25.11165178,
        "prices": {
            "A95": 1.939,
            "A98": null,
            "Diesel": 2.259,
            "LPG": 0.939
        },
        "id": 32
    },
    {
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Vilnius",
        "address": "Vilnius, Jeruzalės g. 2, 08414",
        "lat": 54.73986548,
        "lng": 25.27610011,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 2.219,
            "LPG": 0.939
        },
        "id": 33
    },
    {
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Vilnius",
        "address": "Vilnius, Laisvės pr. 80B, 06125",
        "lat": 54.72347679,
        "lng": 25.23316721,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 2.219,
            "LPG": 0.939
        },
        "id": 34
    },
    {
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Vilkaviškio",
        "address": "Vilkaviškis, S. Nėries g. 38, 70165",
        "lat": 54.65794056,
        "lng": 23.03319489,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 2.219,
            "LPG": 0.93
        },
        "id": 35
    },
    {
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Šilutės",
        "address": "Šilutė, Gluosnių g. 4A, 99116",
        "lat": 55.34875031,
        "lng": 21.46922756,
        "prices": {
            "A95": 1.89,
            "A98": null,
            "Diesel": 2.19,
            "LPG": 0.93
        },
        "id": 36
    },
    {
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Šiaulių",
        "address": "Šiauliai, Sembos g. 5, 78347",
        "lat": 55.89892732,
        "lng": 23.27165395,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 2.219,
            "LPG": 0.91
        },
        "id": 37
    },
    {
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Raseinių",
        "address": "Ariogala, Žemaičių g. 30, 60255",
        "lat": 55.2587905,
        "lng": 23.49594104,
        "prices": {
            "A95": 1.959,
            "A98": null,
            "Diesel": 2.259,
            "LPG": 0.939
        },
        "id": 38
    },
    {
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Raseinių",
        "address": "Raščių k. 1A, 60298",
        "lat": 55.27820222,
        "lng": 23.34160651,
        "prices": {
            "A95": 1.939,
            "A98": null,
            "Diesel": 2.239,
            "LPG": 0.939
        },
        "id": 39
    },
    {
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Pasvalio",
        "address": "Pasvalys, Taikos g. 24, 39132",
        "lat": 56.06369768,
        "lng": 24.42631703,
        "prices": {
            "A95": 1.919,
            "A98": null,
            "Diesel": 2.239,
            "LPG": 0.93
        },
        "id": 40
    },
    {
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Pasvalio",
        "address": "Sereikonių k., Baltijos kelio g. 2, 39236",
        "lat": 55.90641342,
        "lng": 24.33865077,
        "prices": {
            "A95": 1.919,
            "A98": null,
            "Diesel": 2.239,
            "LPG": 0.93
        },
        "id": 41
    },
    {
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Panevėžio",
        "address": "Šilagalio k., Panevėžio aplinkl. 12, 38242",
        "lat": 55.66976948,
        "lng": 24.34633601,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 2.199,
            "LPG": 0.939
        },
        "id": 42
    },
    {
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Panevėžio",
        "address": "Panevėžys, Ramygalos g. 186A, 36224",
        "lat": 55.71017122,
        "lng": 24.37247296,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 2.229,
            "LPG": 0.92
        },
        "id": 43
    },
    {
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Panevėžio",
        "address": "Panevėžys, Nemuno g. 79A, 35189",
        "lat": 55.73193471,
        "lng": 24.34074924,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 2.229,
            "LPG": 0.929
        },
        "id": 44
    },
    {
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Lazdijų",
        "address": "Lazdijų sen., Janaslavo k. 11, 67170",
        "lat": 54.17576376,
        "lng": 23.48093878,
        "prices": {
            "A95": 1.879,
            "A98": null,
            "Diesel": 2.179,
            "LPG": null
        },
        "id": 45
    },
    {
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Klaipėda",
        "address": "Jonušų k., Durpyno g. 63, 96173",
        "lat": 55.7116895,
        "lng": 21.26507038,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 2.219,
            "LPG": 0.95
        },
        "id": 46
    },
    {
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Klaipėda",
        "address": "Kalotės k., Medelyno g. 126, 96332",
        "lat": 55.79029011,
        "lng": 21.14171224,
        "prices": {
            "A95": 1.91,
            "A98": null,
            "Diesel": 2.23,
            "LPG": 0.95
        },
        "id": 47
    },
    {
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Klaipėda",
        "address": "Klaipėda, Minijos g. 154A, 93263",
        "lat": 55.66860732,
        "lng": 21.15908678,
        "prices": {
            "A95": 1.87,
            "A98": null,
            "Diesel": 2.21,
            "LPG": 0.91
        },
        "id": 48
    },
    {
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Klaipėda",
        "address": "Klaipėda, Taikos pr. 124, 94286",
        "lat": 55.66121606,
        "lng": 21.17621496,
        "prices": {
            "A95": 1.87,
            "A98": null,
            "Diesel": 2.21,
            "LPG": 0.91
        },
        "id": 49
    },
    {
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Kėdainių",
        "address": "Juodgirio k. 1, 58212",
        "lat": 55.19737936,
        "lng": 23.62609323,
        "prices": {
            "A95": 1.959,
            "A98": null,
            "Diesel": 2.259,
            "LPG": 0.939
        },
        "id": 50
    },
    {
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Kaunas",
        "address": "Kaunas, Vandžiogalos pl. 86A, 47478",
        "lat": 54.95162513,
        "lng": 23.89359938,
        "prices": {
            "A95": 1.959,
            "A98": null,
            "Diesel": 2.259,
            "LPG": 0.93
        },
        "id": 51
    },
    {
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Kaunas",
        "address": "Ilgakiemio k., Kauno g. 25, 53288",
        "lat": 54.78374136,
        "lng": 23.87666965,
        "prices": {
            "A95": 1.919,
            "A98": null,
            "Diesel": 2.239,
            "LPG": 0.93
        },
        "id": 52
    },
    {
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Kaunas",
        "address": "Mastaičių k., Marijampolės g. 58, 53285",
        "lat": 54.8095364,
        "lng": 23.8537512,
        "prices": {
            "A95": 1.919,
            "A98": null,
            "Diesel": 2.239,
            "LPG": 0.93
        },
        "id": 53
    },
    {
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Kaunas",
        "address": "Žemaitkiemis, S. Krasausko g. 21, 54340",
        "lat": 54.9719611,
        "lng": 23.85907355,
        "prices": {
            "A95": 1.939,
            "A98": null,
            "Diesel": 2.239,
            "LPG": 0.939
        },
        "id": 54
    },
    {
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Kaunas",
        "address": "Kaunas, Jonavos g. 292B, 44131",
        "lat": 54.9323864,
        "lng": 23.91794337,
        "prices": {
            "A95": 1.879,
            "A98": null,
            "Diesel": 2.239,
            "LPG": 0.939
        },
        "id": 55
    },
    {
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Kaunas",
        "address": "Kaunas, T. Masiulio g. 16A, 52375",
        "lat": 54.88508067,
        "lng": 24.00607542,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 2.219,
            "LPG": 0.919
        },
        "id": 56
    },
    {
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Kaunas",
        "address": "Kaunas, Armoniškių g. 31, 46401",
        "lat": 54.85928939,
        "lng": 23.83691046,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 2.199,
            "LPG": 0.919
        },
        "id": 57
    },
    {
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Kaunas",
        "address": "Kaunas, Palemono g. 3A, 52159",
        "lat": 54.90102166,
        "lng": 24.03125527,
        "prices": {
            "A95": 1.88,
            "A98": null,
            "Diesel": 2.19,
            "LPG": null
        },
        "id": 58
    },
    {
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Kaunas",
        "address": "Kaunas, Ateities pl. 40B, 52112",
        "lat": 54.92181644,
        "lng": 24.04739708,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 2.219,
            "LPG": null
        },
        "id": 59
    },
    {
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Jonavos",
        "address": "Jonava, Vasario 16-osios g. 70, 55165",
        "lat": 55.07088633,
        "lng": 24.25883229,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 2.199,
            "LPG": null
        },
        "id": 60
    },
    {
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Biržų",
        "address": "Biržai, Jaunimo g. 2a, 41168",
        "lat": 56.20767348,
        "lng": 24.7707614,
        "prices": {
            "A95": 1.919,
            "A98": null,
            "Diesel": 2.219,
            "LPG": 0.93
        },
        "id": 61
    },
    {
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Vilnius",
        "address": "Medininkų k., Pasieniečių g.10, 13192",
        "lat": 54.54956282,
        "lng": 25.67990653,
        "prices": {
            "A95": 2.019,
            "A98": null,
            "Diesel": 2.339,
            "LPG": null
        },
        "id": 62
    },
    {
        "name": "Milda",
        "logo": "⛽",
        "city": "Telšių",
        "address": "Telšiai, Mažeikių g. 1, 87101",
        "lat": 55.99974214,
        "lng": 22.24134565,
        "prices": {
            "A95": 1.91,
            "A98": null,
            "Diesel": 2.27,
            "LPG": 0.96
        },
        "id": 63
    },
    {
        "name": "Milda",
        "logo": "⛽",
        "city": "Telšių",
        "address": "Rainių k., Telšių g. 2B, 88401",
        "lat": 55.95661542,
        "lng": 22.30115967,
        "prices": {
            "A95": 1.91,
            "A98": null,
            "Diesel": 2.27,
            "LPG": 0.95
        },
        "id": 64
    },
    {
        "name": "Milda",
        "logo": "⛽",
        "city": "Raseinių",
        "address": "Raseiniai, Jurbarko g. 34, 60180",
        "lat": 55.3706348,
        "lng": 23.1198939,
        "prices": {
            "A95": 1.79,
            "A98": null,
            "Diesel": 2.19,
            "LPG": 0.93
        },
        "id": 65
    },
    {
        "name": "Kvistija",
        "logo": "⛽",
        "city": "Mažeikių",
        "address": "Mažeikiai, Laižuvos g. 82d, 89213",
        "lat": 56.31360111,
        "lng": 22.36826858,
        "prices": {
            "A95": 1.849,
            "A98": null,
            "Diesel": 2.169,
            "LPG": 0.899
        },
        "id": 66
    },
    {
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Kelmės",
        "address": "Kelmė, Putvinskio g. 29, 86113",
        "lat": 55.64120559,
        "lng": 22.92737617,
        "prices": {
            "A95": 1.809,
            "A98": null,
            "Diesel": 2.209,
            "LPG": 0.949
        },
        "id": 67
    },
    {
        "name": "Kvistija",
        "logo": "⛽",
        "city": "Kėdainių",
        "address": "Ruoščių k. 1, 57109",
        "lat": 55.33618253,
        "lng": 23.91491716,
        "prices": {
            "A95": 1.823,
            "A98": null,
            "Diesel": 2.184,
            "LPG": 0.89
        },
        "id": 68
    },
    {
        "name": "Kvistija",
        "logo": "⛽",
        "city": "Kaišiadorių",
        "address": "Bačkonių k., Pastrėvio g. 1A, 56240",
        "lat": 54.80250729,
        "lng": 24.50215726,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 2.199,
            "LPG": 0.939
        },
        "id": 69
    },
    {
        "name": "Milda",
        "logo": "⛽",
        "city": "Prienų",
        "address": "Mardosų k., Alytaus pl. 2, 59240",
        "lat": 54.50894152,
        "lng": 23.90953504,
        "prices": {
            "A95": 1.89,
            "A98": null,
            "Diesel": 2.21,
            "LPG": 0.94
        },
        "id": 70
    },
    {
        "name": "Milda",
        "logo": "⛽",
        "city": "Kretingos",
        "address": "Kretinga, Tiekėjų g. 34a, 97187",
        "lat": 55.88446681,
        "lng": 21.22162825,
        "prices": {
            "A95": 1.91,
            "A98": null,
            "Diesel": 2.25,
            "LPG": 0.95
        },
        "id": 71
    },
    {
        "name": "Kvistija",
        "logo": "⛽",
        "city": "Lazdijų",
        "address": "Alytaus g. 59, Krosnos k., 67443",
        "lat": 54.37908395,
        "lng": 23.5285495,
        "prices": {
            "A95": 1.879,
            "A98": null,
            "Diesel": 2.209,
            "LPG": 0.919
        },
        "id": 72
    },
    {
        "name": "Milda",
        "logo": "⛽",
        "city": "Šilalės",
        "address": "Šilalė, Rytinio Kelio g. 2a, 75122",
        "lat": 55.48590577,
        "lng": 22.19940808,
        "prices": {
            "A95": 1.89,
            "A98": null,
            "Diesel": 2.19,
            "LPG": 0.92
        },
        "id": 73
    },
    {
        "name": "Kvistija",
        "logo": "⛽",
        "city": "Vilnius",
        "address": "Kalnuotės 1 k. 15130",
        "lat": 54.94469576,
        "lng": 25.34424273,
        "prices": {
            "A95": 1.849,
            "A98": null,
            "Diesel": 2.199,
            "LPG": 0.939
        },
        "id": 74
    },
    {
        "name": "Kvistija",
        "logo": "⛽",
        "city": "Telšių",
        "address": "Tryškiai, Beržų g. 24/Drąsiųjų g. 7, 88155",
        "lat": 56.06254871,
        "lng": 22.58247782,
        "prices": {
            "A95": 1.91,
            "A98": null,
            "Diesel": 2.27,
            "LPG": 0.96
        },
        "id": 75
    },
    {
        "name": "Kvistija",
        "logo": "⛽",
        "city": "Kelmės",
        "address": "Užventis, Žemaitės g. 52, 86343",
        "lat": 55.78626896,
        "lng": 22.67103988,
        "prices": {
            "A95": 1.89,
            "A98": null,
            "Diesel": 2.2,
            "LPG": 0.9
        },
        "id": 76
    },
    {
        "name": "Milda",
        "logo": "⛽",
        "city": "Kretingos",
        "address": "Laivių k., Platelių g. 1a, 97317",
        "lat": 56.06316548,
        "lng": 21.58209235,
        "prices": {
            "A95": 1.92,
            "A98": null,
            "Diesel": 2.26,
            "LPG": 0.96
        },
        "id": 77
    },
    {
        "name": "Milda",
        "logo": "⛽",
        "city": "Pagėgių",
        "address": "Pagėgiai, Klaipėdos g. 6b, 99290",
        "lat": 55.14044207,
        "lng": 21.90325589,
        "prices": {
            "A95": 1.95,
            "A98": null,
            "Diesel": 2.27,
            "LPG": 0.95
        },
        "id": 78
    },
    {
        "name": "Milda",
        "logo": "⛽",
        "city": "Šilutės",
        "address": "Žemaičių Naumiestis, Klaipėdos g. 76, 99206",
        "lat": 55.35530481,
        "lng": 21.68003241,
        "prices": {
            "A95": 1.95,
            "A98": null,
            "Diesel": 2.26,
            "LPG": 0.95
        },
        "id": 79
    },
    {
        "name": "Kvistija",
        "logo": "⛽",
        "city": "Skuodo",
        "address": "Stripinių k., Skuodo g. 7, 98347",
        "lat": 56.28388299,
        "lng": 21.83305372,
        "prices": {
            "A95": 1.94,
            "A98": null,
            "Diesel": 2.26,
            "LPG": 0.92
        },
        "id": 80
    },
    {
        "name": "Milda",
        "logo": "⛽",
        "city": "Tauragės",
        "address": "Skaudvilė, Adakavo g. 1, 73435",
        "lat": 55.40159838,
        "lng": 22.5977644,
        "prices": {
            "A95": 1.99,
            "A98": null,
            "Diesel": 2.27,
            "LPG": 0.92
        },
        "id": 81
    },
    {
        "name": "Milda",
        "logo": "⛽",
        "city": "Jurbarko",
        "address": "Rimšų k., Tauragės g. 29, 74280",
        "lat": 55.26204357,
        "lng": 22.69181995,
        "prices": {
            "A95": 1.99,
            "A98": null,
            "Diesel": 2.25,
            "LPG": 0.92
        },
        "id": 82
    },
    {
        "name": "Milda",
        "logo": "⛽",
        "city": "Plungės",
        "address": "Minijos g. 1, Aleksandravo k., 90390",
        "lat": 55.92923165,
        "lng": 21.6199133,
        "prices": {
            "A95": 1.97,
            "A98": null,
            "Diesel": 2.26,
            "LPG": 0.96
        },
        "id": 83
    },
    {
        "name": "Milda",
        "logo": "⛽",
        "city": "Šilalės",
        "address": "Vabalų k., Paršežerio g. 1, 75406",
        "lat": 55.61976015,
        "lng": 22.24641341,
        "prices": {
            "A95": 1.92,
            "A98": null,
            "Diesel": 2.23,
            "LPG": 0.98
        },
        "id": 84
    },
    {
        "name": "Kvistija",
        "logo": "⛽",
        "city": "Akmenės",
        "address": "Venta, Plento g. 2, 85302",
        "lat": 56.1943071,
        "lng": 22.6779004,
        "prices": {
            "A95": 1.919,
            "A98": null,
            "Diesel": 2.229,
            "LPG": 0.919
        },
        "id": 85
    },
    {
        "name": "Milda",
        "logo": "⛽",
        "city": "Plungės",
        "address": "Plungė, Dariaus ir Girėno g. 31, 90118",
        "lat": 55.91994008,
        "lng": 21.85709942,
        "prices": {
            "A95": 1.869,
            "A98": null,
            "Diesel": 2.219,
            "LPG": 0.929
        },
        "id": 86
    },
    {
        "name": "Kvistija",
        "logo": "⛽",
        "city": "Akmenės",
        "address": "Skabeikių k. 4, 85233",
        "lat": 56.16014254,
        "lng": 22.76073507,
        "prices": {
            "A95": 1.919,
            "A98": null,
            "Diesel": 2.229,
            "LPG": 0.939
        },
        "id": 87
    },
    {
        "name": "Gelvybė",
        "logo": "⛽",
        "city": "Vilkaviškio",
        "address": "Rūdos k., Marijampolės g. 8, 70313",
        "lat": 54.60190628,
        "lng": 23.19493466,
        "prices": {
            "A95": 1.939,
            "A98": null,
            "Diesel": 2.229,
            "LPG": 0.91
        },
        "id": 88
    },
    {
        "name": "Gelvybė",
        "logo": "⛽",
        "city": "Kėdainių",
        "address": "Aristava, Aristavos g. 4, 58111",
        "lat": 55.29715858,
        "lng": 24.07702013,
        "prices": {
            "A95": 1.939,
            "A98": null,
            "Diesel": 2.229,
            "LPG": 0.89
        },
        "id": 89
    },
    {
        "name": "Gelvybė",
        "logo": "⛽",
        "city": "Šakių",
        "address": "Girėnai, Kauno g. 50, 71129",
        "lat": 54.9528389,
        "lng": 23.08023645,
        "prices": {
            "A95": 1.939,
            "A98": null,
            "Diesel": 2.219,
            "LPG": 0.89
        },
        "id": 90
    },
    {
        "name": "Gelvybė",
        "logo": "⛽",
        "city": "Šakių",
        "address": "Šakiai, V. Kudirkos g. 11D, 71124",
        "lat": 54.95418698,
        "lng": 23.02456981,
        "prices": {
            "A95": 1.939,
            "A98": null,
            "Diesel": 2.219,
            "LPG": 0.89
        },
        "id": 91
    },
    {
        "name": "Gelvybė",
        "logo": "⛽",
        "city": "Jurbarko",
        "address": "Jurbarkas, Knygnešių g. 9, 74212",
        "lat": 55.08548938,
        "lng": 22.74549699,
        "prices": {
            "A95": 1.939,
            "A98": null,
            "Diesel": 2.229,
            "LPG": 0.89
        },
        "id": 92
    },
    {
        "name": "Gelvybė",
        "logo": "⛽",
        "city": "Jurbarko",
        "address": "Jurbarkas, Muitinės g. 32, 74111",
        "lat": 55.07714633,
        "lng": 22.7510279,
        "prices": {
            "A95": 1.939,
            "A98": null,
            "Diesel": 2.229,
            "LPG": 0.89
        },
        "id": 93
    },
    {
        "name": "Gelvybė",
        "logo": "⛽",
        "city": "Jurbarko",
        "address": "Jurbarkas, S. Daukanto g. 66, 74170",
        "lat": 55.08252673,
        "lng": 22.78879208,
        "prices": {
            "A95": 1.939,
            "A98": null,
            "Diesel": 2.229,
            "LPG": 0.89
        },
        "id": 94
    },
    {
        "name": "Gelvybė",
        "logo": "⛽",
        "city": "Šakių",
        "address": "Kiduliai, Sūduvos g. 3, 71400",
        "lat": 55.06387545,
        "lng": 22.7807238,
        "prices": {
            "A95": 1.939,
            "A98": null,
            "Diesel": 2.229,
            "LPG": 0.89
        },
        "id": 95
    },
    {
        "name": "Gelvybė",
        "logo": "⛽",
        "city": "Jurbarko",
        "address": "Seredžius, S. Šimkaus g. 69, 74425",
        "lat": 55.07883072,
        "lng": 23.39670955,
        "prices": {
            "A95": 1.939,
            "A98": null,
            "Diesel": 2.229,
            "LPG": null
        },
        "id": 96
    },
    {
        "name": "Gelvybė",
        "logo": "⛽",
        "city": "Šakių",
        "address": "Mozūriškiai, Mozūriškių 10, 71382",
        "lat": 55.02160289,
        "lng": 22.96955865,
        "prices": {
            "A95": 1.93,
            "A98": null,
            "Diesel": 2.22,
            "LPG": null
        },
        "id": 97
    },
    {
        "name": "Junasa",
        "logo": "⛽",
        "city": "Šiaulių",
        "address": "Šiauliai, Bačiūnų g. 12a, 77109",
        "lat": 55.89789464,
        "lng": 23.35174183,
        "prices": {
            "A95": 1.859,
            "A98": null,
            "Diesel": 2.199,
            "LPG": 0.9
        },
        "id": 98
    },
    {
        "name": "Junasa",
        "logo": "⛽",
        "city": "Šiaulių",
        "address": "Šiauliai, Žemaitės g. 131c, 76175",
        "lat": 55.94801517,
        "lng": 23.32052749,
        "prices": {
            "A95": 1.859,
            "A98": null,
            "Diesel": 2.199,
            "LPG": 0.9
        },
        "id": 99
    },
    {
        "name": "Junasa",
        "logo": "⛽",
        "city": "Šiaulių",
        "address": "Gruzdžiai, M. Katiliškio g. 50, 81428",
        "lat": 56.09973108,
        "lng": 23.26565865,
        "prices": {
            "A95": 1.879,
            "A98": null,
            "Diesel": 2.199,
            "LPG": 0.9
        },
        "id": 100
    },
    {
        "name": "Leosta",
        "logo": "⛽",
        "city": "Telšių",
        "address": "Luokė, Telšių g. 66, 88236",
        "lat": 55.90135275,
        "lng": 22.50630756,
        "prices": {
            "A95": 1.99,
            "A98": null,
            "Diesel": 2.26,
            "LPG": 0.98
        },
        "id": 101
    },
    {
        "name": "Medelsta",
        "logo": "⛽",
        "city": "Vilnius",
        "address": "Pagirių k., Durpių g. 45, 14118",
        "lat": 54.56927739,
        "lng": 25.1881691,
        "prices": {
            "A95": 1.89,
            "A98": null,
            "Diesel": 2.25,
            "LPG": 0.94
        },
        "id": 102
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
            "LPG": 0.92
        },
        "id": 103
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
            "LPG": 0.91
        },
        "id": 104
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
            "LPG": 0.93
        },
        "id": 105
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
        "id": 106
    },
    {
        "name": "Plungės lagūna",
        "logo": "⛽",
        "city": "Rietavo",
        "address": "Rietavas, Plungės g. 32, 90313",
        "lat": 55.73496531,
        "lng": 21.92401379,
        "prices": {
            "A95": 1.964,
            "A98": null,
            "Diesel": 2.365,
            "LPG": 0.997
        },
        "id": 107
    },
    {
        "name": "Prie Luksto",
        "logo": "⛽",
        "city": "Telšių",
        "address": "Telšiai, Masčio g. 21, 87139",
        "lat": 55.97576248,
        "lng": 22.26366425,
        "prices": {
            "A95": 1.885,
            "A98": null,
            "Diesel": 2.265,
            "LPG": 0.969
        },
        "id": 108
    },
    {
        "name": "Regusa",
        "logo": "⛽",
        "city": "Kaunas",
        "address": "Kaunas, Marijampolės pl. 20, 46147",
        "lat": 54.8502039,
        "lng": 23.9657416,
        "prices": {
            "A95": 1.85,
            "A98": null,
            "Diesel": 2.19,
            "LPG": 0.91
        },
        "id": 109
    },
    {
        "name": "Regusa",
        "logo": "⛽",
        "city": "Kazlų Rūdos",
        "address": "Jūrės k., Medelyno g. 4A, 69446",
        "lat": 54.8500758,
        "lng": 23.96587232,
        "prices": {
            "A95": 1.97,
            "A98": null,
            "Diesel": 2.27,
            "LPG": 0.93
        },
        "id": 110
    },
    {
        "name": "Regusa",
        "logo": "⛽",
        "city": "Kazlų Rūdos",
        "address": "Kazlų Rūda, S. Daukanto g. 19D, 69430",
        "lat": 54.73959117,
        "lng": 23.49568398,
        "prices": {
            "A95": 1.97,
            "A98": null,
            "Diesel": 2.27,
            "LPG": 0.93
        },
        "id": 111
    },
    {
        "name": "Regusa",
        "logo": "⛽",
        "city": "Vilkaviškio",
        "address": "Kybartai, J. Basanavičiaus g. 45A, 70417",
        "lat": 54.63850721,
        "lng": 22.76327716,
        "prices": {
            "A95": 1.95,
            "A98": null,
            "Diesel": 2.27,
            "LPG": 0.93
        },
        "id": 112
    },
    {
        "name": "Stateta",
        "logo": "⛽",
        "city": "Prienų",
        "address": "Gustaičių k., 59296",
        "lat": 54.73842126,
        "lng": 23.71035892,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 2.149,
            "LPG": 0.919
        },
        "id": 113
    },
    {
        "name": "Stateta",
        "logo": "⛽",
        "city": "Vilnius",
        "address": "Vilnius, Ukmergės g. 246, 06120",
        "lat": 54.72324911,
        "lng": 25.24175616,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 2.149,
            "LPG": 0.919
        },
        "id": 114
    },
    {
        "name": "Stateta",
        "logo": "⛽",
        "city": "Utenos",
        "address": "Utena, Palangos g. 66, 28140",
        "lat": 55.49857993,
        "lng": 25.58371001,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 2.149,
            "LPG": 0.919
        },
        "id": 115
    },
    {
        "name": "Stateta",
        "logo": "⛽",
        "city": "Panevėžio",
        "address": "Paliūniškio k., Žemdirbių g. 15, 38440",
        "lat": 55.78756925,
        "lng": 24.43920971,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 2.149,
            "LPG": 0.919
        },
        "id": 116
    },
    {
        "name": "Stateta",
        "logo": "⛽",
        "city": "Marijampolės",
        "address": "Kantališkių k., 69841",
        "lat": 54.63445071,
        "lng": 23.43639714,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 2.149,
            "LPG": 0.919
        },
        "id": 117
    },
    {
        "name": "Stateta",
        "logo": "⛽",
        "city": "Kupiškio",
        "address": "Kupiškis, Panevėžio g. 9, 40134",
        "lat": 55.82603892,
        "lng": 24.97951392,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 2.149,
            "LPG": 0.919
        },
        "id": 118
    },
    {
        "name": "Stateta",
        "logo": "⛽",
        "city": "Klaipėda",
        "address": "Klaipėda, Minijos g. 90, 93239",
        "lat": 55.68528783,
        "lng": 21.1471005,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 2.149,
            "LPG": 0.919
        },
        "id": 119
    },
    {
        "name": "Stateta",
        "logo": "⛽",
        "city": "Kaunas",
        "address": "Ramučių k., Erdvės g. 78, 54463",
        "lat": 54.92905072,
        "lng": 24.03811456,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 2.149,
            "LPG": 0.919
        },
        "id": 120
    },
    {
        "name": "Stateta",
        "logo": "⛽",
        "city": "Kalvarijos",
        "address": "Kreivukė, Turgaus g. 4, 69232",
        "lat": 54.41091631,
        "lng": 23.20671774,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 2.149,
            "LPG": 0.919
        },
        "id": 121
    },
    {
        "name": "Stateta",
        "logo": "⛽",
        "city": "Alytaus",
        "address": "Alytaus k., 64464",
        "lat": 54.40773067,
        "lng": 24.08521954,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 2.149,
            "LPG": 0.919
        },
        "id": 122
    },
    {
        "name": "Stateta",
        "logo": "⛽",
        "city": "Alytaus",
        "address": "Kaniūkų k., 64104",
        "lat": 54.36604328,
        "lng": 24.12186902,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 2.149,
            "LPG": 0.919
        },
        "id": 123
    },
    {
        "name": "Stateta",
        "logo": "⛽",
        "city": "Alytaus",
        "address": "Miklusėnai, Kauno g. 1, 62461",
        "lat": 54.42803816,
        "lng": 24.0012011,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 2.149,
            "LPG": 0.919
        },
        "id": 124
    },
    {
        "name": "Šventosios investicijos",
        "logo": "⛽",
        "city": "Palangos",
        "address": "Palanga (Šventoji), Elijos g. 26, 00319",
        "lat": 56.01299671,
        "lng": 21.10379214,
        "prices": {
            "A95": 1.979,
            "A98": null,
            "Diesel": 2.299,
            "LPG": 1.02
        },
        "id": 125
    },
    {
        "name": "Tomega",
        "logo": "⛽",
        "city": "Šalčininkų",
        "address": "Tartoko k., 17127",
        "lat": 54.30592204,
        "lng": 25.36089318,
        "prices": {
            "A95": 2.019,
            "A98": null,
            "Diesel": 2.289,
            "LPG": null
        },
        "id": 126
    },
    {
        "name": "Tomega",
        "logo": "⛽",
        "city": "Druskininkų",
        "address": "Druskininkai, Gardino g. 98, 66225",
        "lat": 53.99029291,
        "lng": 24.00567101,
        "prices": {
            "A95": 1.98,
            "A98": null,
            "Diesel": 2.26,
            "LPG": 0.92
        },
        "id": 127
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
            "LPG": 0.89
        },
        "id": 128
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
            "LPG": 0.85
        },
        "id": 129
    },
    {
        "name": "Trevena",
        "logo": "⛽",
        "city": "Šilutės",
        "address": "Žemaitkiemio k., Liepų g. 4, 99317",
        "lat": 55.22753566,
        "lng": 21.70188358,
        "prices": {
            "A95": 1.88,
            "A98": null,
            "Diesel": 2.19,
            "LPG": 0.89
        },
        "id": 130
    },
    {
        "name": "Trevena",
        "logo": "⛽",
        "city": "Rietavo",
        "address": "Vatušių k., Kvėdarnos g. 2, 90307",
        "lat": 55.71844617,
        "lng": 21.93221161,
        "prices": {
            "A95": 1.88,
            "A98": null,
            "Diesel": 2.19,
            "LPG": 0.89
        },
        "id": 131
    },
    {
        "name": "Trevena",
        "logo": "⛽",
        "city": "Rietavo",
        "address": "Rietavas, Lėgų k. 1, 90305",
        "lat": 55.6269372,
        "lng": 21.97178201,
        "prices": {
            "A95": 1.88,
            "A98": null,
            "Diesel": 2.19,
            "LPG": 0.89
        },
        "id": 132
    },
    {
        "name": "Trevena",
        "logo": "⛽",
        "city": "Klaipėda",
        "address": "Dituvos k., Šv. Kristoforo g. 4, 96357",
        "lat": 55.58208249,
        "lng": 21.28526307,
        "prices": {
            "A95": 1.88,
            "A98": null,
            "Diesel": 2.19,
            "LPG": 0.89
        },
        "id": 133
    },
    {
        "name": "Trevena",
        "logo": "⛽",
        "city": "Klaipėda",
        "address": "Gargždai, Kretingos pl. 1, 96105",
        "lat": 55.71383582,
        "lng": 21.38662566,
        "prices": {
            "A95": 1.92,
            "A98": null,
            "Diesel": 2.23,
            "LPG": 0.93
        },
        "id": 134
    },
    {
        "name": "Trevena",
        "logo": "⛽",
        "city": "Klaipėda",
        "address": "Pyktiškės k., Veiviržėnų g. 29, 96303",
        "lat": 55.68724108,
        "lng": 21.69352503,
        "prices": {
            "A95": 1.88,
            "A98": null,
            "Diesel": 2.19,
            "LPG": 0.89
        },
        "id": 135
    },
    {
        "name": "Trevena",
        "logo": "⛽",
        "city": "Klaipėda",
        "address": "Gargždai, Klaipėdos g. 39, 96157",
        "lat": 55.7122819,
        "lng": 21.3816268,
        "prices": {
            "A95": 1.88,
            "A98": null,
            "Diesel": 2.19,
            "LPG": 0.89
        },
        "id": 136
    },
    {
        "name": "Trevena",
        "logo": "⛽",
        "city": "Klaipėda",
        "address": "Klaipėda, Kretingos g. 28A, 92211",
        "lat": 55.7283977,
        "lng": 21.1325842,
        "prices": {
            "A95": 1.88,
            "A98": null,
            "Diesel": 2.19,
            "LPG": 0.89
        },
        "id": 137
    },
    {
        "name": "Trevena",
        "logo": "⛽",
        "city": "Klaipėda",
        "address": "Klaipėda, Minijos g. 152A, 93263",
        "lat": 55.6696562,
        "lng": 21.1586131,
        "prices": {
            "A95": 1.88,
            "A98": null,
            "Diesel": 2.19,
            "LPG": 0.89
        },
        "id": 138
    },
    {
        "name": "Trevena",
        "logo": "⛽",
        "city": "Šilutės",
        "address": "Saugų k., Tilžės g. 21, 99409",
        "lat": 55.46435252,
        "lng": 21.4702782,
        "prices": {
            "A95": 1.88,
            "A98": null,
            "Diesel": 2.19,
            "LPG": 0.89
        },
        "id": 139
    },
    {
        "name": "Trevena",
        "logo": "⛽",
        "city": "Kretingos",
        "address": "Kretinga, Vilniaus g. 29B, 97101",
        "lat": 55.8969624,
        "lng": 21.24431594,
        "prices": {
            "A95": 1.92,
            "A98": null,
            "Diesel": 2.26,
            "LPG": 0.97
        },
        "id": 140
    },
    {
        "name": "Trevena",
        "logo": "⛽",
        "city": "Kretingos",
        "address": "Darbėnai, Laisvės g. 15, 97264",
        "lat": 56.02481425,
        "lng": 21.26498187,
        "prices": {
            "A95": 1.92,
            "A98": null,
            "Diesel": 2.26,
            "LPG": 0.97
        },
        "id": 141
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
            "LPG": 0.93
        },
        "id": 142
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
        "id": 143
    },
    {
        "name": "Velseka",
        "logo": "⛽",
        "city": "Kupiškio",
        "address": "Kupiškis, Panevėžio g. 5, 40134",
        "lat": 55.82748974,
        "lng": 24.98569522,
        "prices": {
            "A95": 1.779,
            "A98": null,
            "Diesel": 2.149,
            "LPG": 0.869
        },
        "id": 144
    },
    {
        "name": "Vimijula",
        "logo": "⛽",
        "city": "Jonavos",
        "address": "Ručiūnų k., Kauno g. 2A, 55355",
        "lat": 55.13794926,
        "lng": 24.1932708,
        "prices": {
            "A95": 1.98,
            "A98": null,
            "Diesel": 2.29,
            "LPG": 0.95
        },
        "id": 145
    },
    {
        "name": "VIRŠI Lietuva",
        "logo": "⛽",
        "city": "Marijampolės",
        "address": "Pasūduonės k., L.Taunio g. 3, 69331",
        "lat": 54.47583948,
        "lng": 23.22134553,
        "prices": {
            "A95": 1.944,
            "A98": null,
            "Diesel": 2.204,
            "LPG": 0.954
        },
        "id": 146
    },
    {
        "name": "Žibalas",
        "logo": "⛽",
        "city": "Jonavos",
        "address": "Jonava, Taurostos g. 16A, 55195",
        "lat": 55.07211501,
        "lng": 24.29494647,
        "prices": {
            "A95": 2.03,
            "A98": null,
            "Diesel": 2.3,
            "LPG": 1.0
        },
        "id": 147
    },
    {
        "name": "Tomega",
        "logo": "⛽",
        "city": "Šalčininkų",
        "address": "Dumblės k., 17178",
        "lat": 54.16015419,
        "lng": 25.00989858,
        "prices": {
            "A95": 2.029,
            "A98": null,
            "Diesel": 2.299,
            "LPG": null
        },
        "id": 148
    },
    {
        "name": "UAB GINDANA degalai laivams",
        "logo": "⛽",
        "city": "Klaipėda",
        "address": "Klaipėda, Priešpilio g. 5, 91240",
        "lat": 55.70413979,
        "lng": 21.12956596,
        "prices": {
            "A95": 1.85,
            "A98": null,
            "Diesel": 2.23,
            "LPG": null
        },
        "id": 149
    },
    {
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Kaunas",
        "address": "Kaunas, Savanorių pr. 402A, 49281",
        "lat": 54.92750478,
        "lng": 23.97218798,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 2.239,
            "LPG": 0.939
        },
        "id": 150
    },
    {
        "name": "Stateta",
        "logo": "⛽",
        "city": "Alytaus",
        "address": "Alytus, Santaikos g. 28 B, 62123",
        "lat": 54.40763497,
        "lng": 24.08515544,
        "prices": {
            "A95": 1.779,
            "A98": null,
            "Diesel": 2.149,
            "LPG": null
        },
        "id": 151
    }
];