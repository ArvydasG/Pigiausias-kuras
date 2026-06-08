// Automatiškai sugeneruoti duomenys iš LEA Excel
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
        "id": 1,
        "name": "A. Praškevičiaus IĮ",
        "logo": "⛽",
        "city": "Kaišiadorių r. sav.",
        "address": "Kalvių g. 4, Šventininkų k.",
        "lat": 54.726075061935,
        "lng": 24.23633723717,
        "prices": {
            "A95": 1.67,
            "A98": null,
            "Diesel": 1.75,
            "LPG": 0.82
        }
    },
    {
        "id": 2,
        "name": "Adukesta",
        "logo": "⛽",
        "city": "Klaipėda",
        "address": "Laisvės g. 50, Maciuičių k.",
        "lat": 55.69354592622,
        "lng": 21.413641656476,
        "prices": {
            "A95": 1.79,
            "A98": null,
            "Diesel": 1.86,
            "LPG": 0.85
        }
    },
    {
        "id": 3,
        "name": "Alauša",
        "logo": "⛽",
        "city": "Utenos",
        "address": "Palijoniškio g. 1, Utena",
        "lat": 55.511886028346,
        "lng": 25.599999374524,
        "prices": {
            "A95": 1.709,
            "A98": null,
            "Diesel": 1.799,
            "LPG": 0.789
        }
    },
    {
        "id": 4,
        "name": "Alauša",
        "logo": "⛽",
        "city": "Visagino",
        "address": "Kosmoso g. 3, Visaginas",
        "lat": 55.599254418909,
        "lng": 26.420027365172,
        "prices": {
            "A95": 1.759,
            "A98": null,
            "Diesel": 1.859,
            "LPG": 0.799
        }
    },
    {
        "id": 5,
        "name": "Alauša",
        "logo": "⛽",
        "city": "Kaunas",
        "address": "Palemono g. 171, Kaunas",
        "lat": 54.923692678531,
        "lng": 24.068998659062,
        "prices": {
            "A95": 1.689,
            "A98": null,
            "Diesel": 1.779,
            "LPG": null
        }
    },
    {
        "id": 6,
        "name": "Alauša",
        "logo": "⛽",
        "city": "Vilnius",
        "address": "Kalvarijų g. 204G, Vilnius",
        "lat": 54.72086327836,
        "lng": 25.284837216737,
        "prices": {
            "A95": 1.739,
            "A98": null,
            "Diesel": 1.779,
            "LPG": 0.779
        }
    },
    {
        "id": 7,
        "name": "Alauša",
        "logo": "⛽",
        "city": "Vilnius",
        "address": "Kirtimų g. 23A, Vilnius",
        "lat": 54.651210291614,
        "lng": 25.150220498978,
        "prices": {
            "A95": 1.679,
            "A98": null,
            "Diesel": 1.769,
            "LPG": 0.799
        }
    },
    {
        "id": 8,
        "name": "Alauša",
        "logo": "⛽",
        "city": "Vilnius",
        "address": "Pelesos g. 1/2, Vilnius",
        "lat": 54.665560738493,
        "lng": 25.274983367545,
        "prices": {
            "A95": 1.729,
            "A98": null,
            "Diesel": 1.799,
            "LPG": 0.859
        }
    },
    {
        "id": 9,
        "name": "Alauša",
        "logo": "⛽",
        "city": "Ukmergės",
        "address": "Kauno g. 37, Ukmergė",
        "lat": 55.244490450828,
        "lng": 24.750026783324,
        "prices": {
            "A95": 1.689,
            "A98": null,
            "Diesel": 1.759,
            "LPG": 0.789
        }
    },
    {
        "id": 10,
        "name": "Alauša",
        "logo": "⛽",
        "city": "Utenos",
        "address": "Plento g. 17, Daugailiai",
        "lat": 55.594037899558,
        "lng": 25.833465888087,
        "prices": {
            "A95": 1.709,
            "A98": null,
            "Diesel": 1.799,
            "LPG": 0.799
        }
    },
    {
        "id": 11,
        "name": "Alauša",
        "logo": "⛽",
        "city": "Anykščių",
        "address": "Bajorų k.",
        "lat": 55.7081,
        "lng": 25.33397,
        "prices": {
            "A95": 1.779,
            "A98": null,
            "Diesel": 1.879,
            "LPG": 0.869
        }
    },
    {
        "id": 12,
        "name": "Alauša",
        "logo": "⛽",
        "city": "Šiaulių",
        "address": "Plento g. 2B, Kairiai",
        "lat": 55.920182320252,
        "lng": 23.425901245058,
        "prices": {
            "A95": 1.789,
            "A98": null,
            "Diesel": 1.849,
            "LPG": 0.849
        }
    },
    {
        "id": 13,
        "name": "Alauša",
        "logo": "⛽",
        "city": "Vilnius",
        "address": "Vilniaus g. 8, Grigiškės",
        "lat": 54.677411492298,
        "lng": 25.07904246686,
        "prices": {
            "A95": 1.729,
            "A98": null,
            "Diesel": 1.799,
            "LPG": 0.819
        }
    },
    {
        "id": 14,
        "name": "Alauša",
        "logo": "⛽",
        "city": "Marijampolės",
        "address": "Plytinės g. 2, Puskelnių k.",
        "lat": 54.605368866867,
        "lng": 23.405129799342,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.799,
            "LPG": null
        }
    },
    {
        "id": 15,
        "name": "Alauša",
        "logo": "⛽",
        "city": "Marijampolės",
        "address": "Stoties g. 49, Marijampolė",
        "lat": 54.562824715191,
        "lng": 23.366521663669,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.799,
            "LPG": 0.784
        }
    },
    {
        "id": 16,
        "name": "Alauša",
        "logo": "⛽",
        "city": "Širvintų",
        "address": "Paširvio g. 1, Paširvinčio k.",
        "lat": 55.024590257101,
        "lng": 24.985641243395,
        "prices": {
            "A95": 1.689,
            "A98": null,
            "Diesel": 1.759,
            "LPG": 0.784
        }
    },
    {
        "id": 17,
        "name": "Alauša",
        "logo": "⛽",
        "city": "Šakių",
        "address": "Šakių g. 51, Kudirkos Naumiestis",
        "lat": 54.783590587699,
        "lng": 22.873239078782,
        "prices": {
            "A95": 1.759,
            "A98": null,
            "Diesel": 1.839,
            "LPG": 0.899
        }
    },
    {
        "id": 18,
        "name": "Alauša",
        "logo": "⛽",
        "city": "Šalčininkų",
        "address": "Skraičionių g. 1, Skraičionių k.",
        "lat": 54.20413051462,
        "lng": 25.621030659238,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 1.899,
            "LPG": 0.809
        }
    },
    {
        "id": 19,
        "name": "Alauša",
        "logo": "⛽",
        "city": "Kalvarijos",
        "address": "Europos g. 17, Salaperaugio k.",
        "lat": 54.320436755344,
        "lng": 23.139958653199,
        "prices": {
            "A95": 1.749,
            "A98": null,
            "Diesel": 1.849,
            "LPG": 0.859
        }
    },
    {
        "id": 20,
        "name": "Alauša",
        "logo": "⛽",
        "city": "Ignalinos",
        "address": "Švenčionių g. 29A, Ignalina",
        "lat": 55.332132887716,
        "lng": 26.16724659976,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 1.899,
            "LPG": 0.809
        }
    },
    {
        "id": 21,
        "name": "Alauša",
        "logo": "⛽",
        "city": "Vilnius",
        "address": "Šiaurės g. 39, Vilnius",
        "lat": 54.703463453196,
        "lng": 25.41579179718,
        "prices": {
            "A95": 1.789,
            "A98": null,
            "Diesel": 1.849,
            "LPG": 0.799
        }
    },
    {
        "id": 22,
        "name": "Alauša",
        "logo": "⛽",
        "city": "Marijampolės",
        "address": "Sporto g. 50A, Marijampolė",
        "lat": 54.565969940539,
        "lng": 23.380467306534,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.799,
            "LPG": null
        }
    },
    {
        "id": 23,
        "name": "Alauša",
        "logo": "⛽",
        "city": "Utenos",
        "address": "J. Basanavičiaus g. 1C, Utena",
        "lat": 55.495520027119,
        "lng": 25.581640743456,
        "prices": {
            "A95": 1.709,
            "A98": null,
            "Diesel": 1.769,
            "LPG": 0.784
        }
    },
    {
        "id": 24,
        "name": "Alauša",
        "logo": "⛽",
        "city": "Vilnius",
        "address": "Šv. Stepono g. 44, Vilnius",
        "lat": 54.669124011262,
        "lng": 25.278784812092,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.799,
            "LPG": null
        }
    },
    {
        "id": 25,
        "name": "Alauša",
        "logo": "⛽",
        "city": "Vilnius",
        "address": "Buivydiškių g. 5, Vilnius",
        "lat": 54.710865092795,
        "lng": 25.240554532614,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.799,
            "LPG": null
        }
    },
    {
        "id": 26,
        "name": "Alauša",
        "logo": "⛽",
        "city": "Alytaus",
        "address": "Santaikos g. 2A, Santaikos k.",
        "lat": 54.388342911558,
        "lng": 23.820264257407,
        "prices": {
            "A95": 1.759,
            "A98": null,
            "Diesel": 1.849,
            "LPG": 0.899
        }
    },
    {
        "id": 27,
        "name": "Alauša",
        "logo": "⛽",
        "city": "Vilnius",
        "address": "Laisvės pr. 125A, Vilnius",
        "lat": 54.727835596878,
        "lng": 25.235623291338,
        "prices": {
            "A95": 1.689,
            "A98": null,
            "Diesel": 1.779,
            "LPG": null
        }
    },
    {
        "id": 28,
        "name": "Alauša",
        "logo": "⛽",
        "city": "Rokiškio",
        "address": "Dariaus ir Girėno g. 36, Obeliai",
        "lat": 55.949059510945,
        "lng": 25.814285128571,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 1.899,
            "LPG": null
        }
    },
    {
        "id": 29,
        "name": "Alauša",
        "logo": "⛽",
        "city": "Anykščių",
        "address": "A. Vienuolio g. 32A, Anykščiai",
        "lat": 55.522445801423,
        "lng": 25.090014713393,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.789,
            "LPG": 0.789
        }
    },
    {
        "id": 30,
        "name": "Andopas",
        "logo": "⛽",
        "city": "Šilutės",
        "address": "Ramučių g.43,  Barzdūnų k.",
        "lat": 55.358862525485,
        "lng": 21.503372528359,
        "prices": {
            "A95": 1.7,
            "A98": null,
            "Diesel": 1.78,
            "LPG": 0.8
        }
    },
    {
        "id": 31,
        "name": "Antivis",
        "logo": "⛽",
        "city": "Kelmės",
        "address": "Tytuvėnai, Žemaitės g.14",
        "lat": 55.626866838721,
        "lng": 22.928890848034,
        "prices": {
            "A95": 1.79,
            "A98": null,
            "Diesel": 1.89,
            "LPG": 0.89
        }
    },
    {
        "id": 32,
        "name": "Apsaga",
        "logo": "⛽",
        "city": "Šiaulių",
        "address": "Vilniaus g.16, Šiauliai",
        "lat": 55.923471379058,
        "lng": 23.350175276096,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 1.849,
            "LPG": 0.79
        }
    },
    {
        "id": 33,
        "name": "Apsaga",
        "logo": "⛽",
        "city": "Šiaulių",
        "address": "Pramonės g. 3A, Šiauliai",
        "lat": 55.917981693483,
        "lng": 23.297652091504,
        "prices": {
            "A95": 1.819,
            "A98": null,
            "Diesel": 1.869,
            "LPG": 0.8
        }
    },
    {
        "id": 34,
        "name": "Apsaga",
        "logo": "⛽",
        "city": "Šiaulių",
        "address": "Pramonės g. 28, Šiauliai",
        "lat": 55.904981403567,
        "lng": 23.328047806084,
        "prices": {
            "A95": 1.819,
            "A98": null,
            "Diesel": 1.869,
            "LPG": null
        }
    },
    {
        "id": 35,
        "name": "Apsaga",
        "logo": "⛽",
        "city": "Šiaulių",
        "address": "Nuklono g. 4, Šiauliai",
        "lat": 55.916729604787,
        "lng": 23.246900925062,
        "prices": {
            "A95": 1.819,
            "A98": null,
            "Diesel": 1.869,
            "LPG": 0.8
        }
    },
    {
        "id": 36,
        "name": "Apsaga",
        "logo": "⛽",
        "city": "Šiaulių",
        "address": "Tilžės g. 223, Šiauliai",
        "lat": 55.940609269748,
        "lng": 23.326278637781,
        "prices": {
            "A95": 1.819,
            "A98": null,
            "Diesel": 1.869,
            "LPG": 0.8
        }
    },
    {
        "id": 37,
        "name": "Apsaga",
        "logo": "⛽",
        "city": "Šiaulių",
        "address": "V. Bielskio g. 47A, Šiauliai",
        "lat": 55.95629428325,
        "lng": 23.308423926732,
        "prices": {
            "A95": 1.79,
            "A98": null,
            "Diesel": 1.86,
            "LPG": 0.8
        }
    },
    {
        "id": 38,
        "name": "Apsaga",
        "logo": "⛽",
        "city": "Radviliškio",
        "address": "Šiaulių g.12, Radviliškis",
        "lat": 55.815451236356,
        "lng": 23.543532538946,
        "prices": {
            "A95": 1.825,
            "A98": null,
            "Diesel": 1.915,
            "LPG": 0.839
        }
    },
    {
        "id": 39,
        "name": "Apsaga",
        "logo": "⛽",
        "city": "Radviliškio",
        "address": "Beržų g. 19, Baisogalos k.",
        "lat": 55.63478358818,
        "lng": 23.733496136839,
        "prices": {
            "A95": 1.84,
            "A98": null,
            "Diesel": 1.89,
            "LPG": 0.85
        }
    },
    {
        "id": 40,
        "name": "Apsaga",
        "logo": "⛽",
        "city": "Joniškio",
        "address": "Radikių k.",
        "lat": 56.209791953925,
        "lng": 23.570105921554,
        "prices": {
            "A95": 1.825,
            "A98": null,
            "Diesel": 1.915,
            "LPG": 0.839
        }
    },
    {
        "id": 41,
        "name": "Atsiauta",
        "logo": "⛽",
        "city": "Šiaulių",
        "address": "Vytauto 80, Kuršėnai",
        "lat": 56.014834584675,
        "lng": 22.951216382417,
        "prices": {
            "A95": 1.79,
            "A98": null,
            "Diesel": 1.89,
            "LPG": 0.85
        }
    },
    {
        "id": 42,
        "name": "Autograndas",
        "logo": "⛽",
        "city": "Visagino",
        "address": "Taikos pr. 47",
        "lat": 55.590458407807,
        "lng": 26.463235405489,
        "prices": {
            "A95": 1.754,
            "A98": null,
            "Diesel": 1.854,
            "LPG": null
        }
    },
    {
        "id": 43,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Vilnius",
        "address": "Vilnius, Antakalnio g. 128",
        "lat": 54.722231204958,
        "lng": 25.317294292765,
        "prices": {
            "A95": 1.759,
            "A98": null,
            "Diesel": 1.839,
            "LPG": 0.769
        }
    },
    {
        "id": 44,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Jonavos",
        "address": "Gudžionių k., Plento g. 24",
        "lat": 55.064506975498,
        "lng": 24.278262427206,
        "prices": {
            "A95": 1.739,
            "A98": null,
            "Diesel": 1.799,
            "LPG": 0.859
        }
    },
    {
        "id": 45,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Vilnius",
        "address": "Vilnius, Gerosios Vilties g. 33",
        "lat": 54.66672020716,
        "lng": 25.25082010089,
        "prices": {
            "A95": 1.769,
            "A98": null,
            "Diesel": 1.829,
            "LPG": 0.859
        }
    },
    {
        "id": 46,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Vilnius",
        "address": "Vilnius, Savanorių pr. 121",
        "lat": 54.660842649015,
        "lng": 25.233372163602,
        "prices": {
            "A95": 1.679,
            "A98": null,
            "Diesel": 1.769,
            "LPG": 0.849
        }
    },
    {
        "id": 47,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Kaunas",
        "address": "Kaunas, Raudondvario pl. 82",
        "lat": 54.907708263447,
        "lng": 23.874251676665,
        "prices": {
            "A95": 1.679,
            "A98": null,
            "Diesel": 1.749,
            "LPG": 0.819
        }
    },
    {
        "id": 48,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Kaunas",
        "address": "Kaunas, Jonavos g. 60A",
        "lat": 54.905036406082,
        "lng": 23.899567035911,
        "prices": {
            "A95": 1.679,
            "A98": null,
            "Diesel": 1.749,
            "LPG": 0.789
        }
    },
    {
        "id": 49,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Kaunas",
        "address": "Jaučiakių k.",
        "lat": 55.0308,
        "lng": 23.60344,
        "prices": {
            "A95": 1.819,
            "A98": null,
            "Diesel": 1.919,
            "LPG": 0.859
        }
    },
    {
        "id": 50,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Klaipėda",
        "address": "Klaipėda, Šilutės pl. 1",
        "lat": 55.704919498276,
        "lng": 21.163292062079,
        "prices": {
            "A95": 1.629,
            "A98": null,
            "Diesel": 1.709,
            "LPG": 0.779
        }
    },
    {
        "id": 51,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Palangos",
        "address": "Palanga, Klaipėdos pl. 44",
        "lat": 55.915435690393,
        "lng": 21.078105606641,
        "prices": {
            "A95": 1.749,
            "A98": null,
            "Diesel": 1.829,
            "LPG": 0.799
        }
    },
    {
        "id": 52,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Šilutės",
        "address": "Šilutė, Klaipėdos g. 4A",
        "lat": 55.35290881775,
        "lng": 21.463035625156,
        "prices": {
            "A95": 1.739,
            "A98": null,
            "Diesel": 1.799,
            "LPG": 0.789
        }
    },
    {
        "id": 53,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Neringos",
        "address": "Neringa, Nidos-Smiltynės pl. 6",
        "lat": 55.300700205984,
        "lng": 20.980073465491,
        "prices": {
            "A95": 1.879,
            "A98": null,
            "Diesel": 1.979,
            "LPG": null
        }
    },
    {
        "id": 54,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Alytaus",
        "address": "Alytus, Santaikos g. 33",
        "lat": 54.386612132372,
        "lng": 24.033146744609,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.779,
            "LPG": 0.789
        }
    },
    {
        "id": 55,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Druskininkų sav.",
        "address": "Druskininkai, Gardino g. 79",
        "lat": 53.999919902533,
        "lng": 23.988011453295,
        "prices": {
            "A95": 1.809,
            "A98": null,
            "Diesel": 1.899,
            "LPG": 0.929
        }
    },
    {
        "id": 56,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Lazdijų",
        "address": "Lazdijai, Turistų g. 88",
        "lat": 54.220630416749,
        "lng": 23.508918463955,
        "prices": {
            "A95": 1.709,
            "A98": null,
            "Diesel": 1.799,
            "LPG": 0.749
        }
    },
    {
        "id": 57,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Telšių",
        "address": "Telšiai, Šiaulių pl. 12",
        "lat": 56.00402616244,
        "lng": 22.244705344664,
        "prices": {
            "A95": 1.709,
            "A98": null,
            "Diesel": 1.809,
            "LPG": 0.829
        }
    },
    {
        "id": 58,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Joniškio",
        "address": "Joniškis, Vilniaus g. 72",
        "lat": 56.223351650975,
        "lng": 23.597612745873,
        "prices": {
            "A95": 1.759,
            "A98": null,
            "Diesel": 1.849,
            "LPG": 0.779
        }
    },
    {
        "id": 59,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Radviliškio",
        "address": "Radviliškis, Miško g. 64",
        "lat": 55.800637647417,
        "lng": 23.56593862342,
        "prices": {
            "A95": 1.779,
            "A98": null,
            "Diesel": 1.879,
            "LPG": 0.78
        }
    },
    {
        "id": 60,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Panevėžio",
        "address": "Panevėžys, Velžio kelias 74",
        "lat": 55.721850691234,
        "lng": 24.391548961583,
        "prices": {
            "A95": 1.739,
            "A98": null,
            "Diesel": 1.799,
            "LPG": 0.849
        }
    },
    {
        "id": 61,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Utenos",
        "address": "Utena, Basanavičiaus g. 1B",
        "lat": 55.495274437356,
        "lng": 25.574904291693,
        "prices": {
            "A95": 1.709,
            "A98": null,
            "Diesel": 1.769,
            "LPG": 0.789
        }
    },
    {
        "id": 62,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Raseinių",
        "address": "Raseiniai, Vilniaus g. 30",
        "lat": 55.371043693913,
        "lng": 23.132905281676,
        "prices": {
            "A95": 1.789,
            "A98": null,
            "Diesel": 1.919,
            "LPG": 0.79
        }
    },
    {
        "id": 63,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Jurbarko",
        "address": "Jurbarkas, Muitinės g. 22A",
        "lat": 55.07812220374,
        "lng": 22.744738088336,
        "prices": {
            "A95": 1.73,
            "A98": null,
            "Diesel": 1.81,
            "LPG": 0.79
        }
    },
    {
        "id": 64,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Prienų",
        "address": "Prienai, Vilniaus g. 3A",
        "lat": 54.628495543557,
        "lng": 23.958851566519,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 1.879,
            "LPG": 0.799
        }
    },
    {
        "id": 65,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Kėdainių",
        "address": "Kėdainiai, J. Basanavičiaus g. 95B",
        "lat": 55.276893002576,
        "lng": 23.95585453322,
        "prices": {
            "A95": 1.709,
            "A98": null,
            "Diesel": 1.799,
            "LPG": 0.879
        }
    },
    {
        "id": 66,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Ukmergės",
        "address": "Ukmergė, Kauno g. 49",
        "lat": 55.240905343201,
        "lng": 24.739769932227,
        "prices": {
            "A95": 1.679,
            "A98": null,
            "Diesel": 1.759,
            "LPG": 0.789
        }
    },
    {
        "id": 67,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Biržų r. sav.",
        "address": "Valantiškio k.",
        "lat": 56.191197122,
        "lng": 24.712076828,
        "prices": {
            "A95": 1.779,
            "A98": null,
            "Diesel": 1.859,
            "LPG": 0.889
        }
    },
    {
        "id": 68,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Šakių",
        "address": "Šakiai, Sodų g. 1",
        "lat": 54.945583359779,
        "lng": 23.045778499472,
        "prices": {
            "A95": 1.76,
            "A98": null,
            "Diesel": 1.81,
            "LPG": 0.84
        }
    },
    {
        "id": 69,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Skuodo",
        "address": "Skuodas, Vytauto g. 22",
        "lat": 56.259137096935,
        "lng": 21.530235941303,
        "prices": {
            "A95": 1.779,
            "A98": null,
            "Diesel": 1.829,
            "LPG": 0.8
        }
    },
    {
        "id": 70,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Vilnius",
        "address": "Vilnius  Kalvarijų g. 161A",
        "lat": 54.724007078784,
        "lng": 25.28240612954,
        "prices": {
            "A95": 1.739,
            "A98": null,
            "Diesel": 1.779,
            "LPG": 0.779
        }
    },
    {
        "id": 71,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Trakų",
        "address": "Trakai, Vilniaus g. 33",
        "lat": 54.627357281105,
        "lng": 24.948585100914,
        "prices": {
            "A95": 1.819,
            "A98": null,
            "Diesel": 1.879,
            "LPG": 0.849
        }
    },
    {
        "id": 72,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Molėtų",
        "address": "Molėtai, Vilniaus g.104",
        "lat": 55.216994288013,
        "lng": 25.403100589944,
        "prices": {
            "A95": 1.689,
            "A98": null,
            "Diesel": 1.799,
            "LPG": 0.839
        }
    },
    {
        "id": 73,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Kaunas",
        "address": "Kaunas, Minkovskių g. 132",
        "lat": 54.885755723755,
        "lng": 23.912020951469,
        "prices": {
            "A95": 1.839,
            "A98": null,
            "Diesel": 1.919,
            "LPG": 0.889
        }
    },
    {
        "id": 74,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Varėnos",
        "address": "Varėna, Čiurlionio g. 63",
        "lat": 54.218344462206,
        "lng": 24.565665481875,
        "prices": {
            "A95": 1.779,
            "A98": null,
            "Diesel": 1.869,
            "LPG": 0.879
        }
    },
    {
        "id": 75,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Klaipėda",
        "address": "Klaipėda, Tilžės g. 90",
        "lat": 55.700412171753,
        "lng": 21.19909301456,
        "prices": {
            "A95": 1.649,
            "A98": null,
            "Diesel": 1.719,
            "LPG": 0.789
        }
    },
    {
        "id": 76,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Vilnius",
        "address": "Vilnius, Metalo g. 4B",
        "lat": 54.640480240174,
        "lng": 25.267366061577,
        "prices": {
            "A95": 1.719,
            "A98": null,
            "Diesel": 1.789,
            "LPG": 0.799
        }
    },
    {
        "id": 77,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Šalčininkų",
        "address": "Šalčininkai, Vilniaus g. 5A",
        "lat": 54.317936391718,
        "lng": 25.381615844267,
        "prices": {
            "A95": 1.889,
            "A98": null,
            "Diesel": 1.989,
            "LPG": 0.829
        }
    },
    {
        "id": 78,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Širvintų",
        "address": "Širvintos, Musninkų g. 21",
        "lat": 55.032285891954,
        "lng": 24.96716811553,
        "prices": {
            "A95": 1.689,
            "A98": null,
            "Diesel": 1.759,
            "LPG": 0.789
        }
    },
    {
        "id": 79,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Kaunas",
        "address": "Kaunas, Chemijos g. 6",
        "lat": 54.903234799813,
        "lng": 23.982786342494,
        "prices": {
            "A95": 1.739,
            "A98": null,
            "Diesel": 1.789,
            "LPG": 0.809
        }
    },
    {
        "id": 80,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Akmenės",
        "address": "N. Akmenė, V. Kudirkos g. 21A",
        "lat": 56.318582715043,
        "lng": 22.884753448639,
        "prices": {
            "A95": 1.769,
            "A98": null,
            "Diesel": 1.819,
            "LPG": 0.79
        }
    },
    {
        "id": 81,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Vilnius",
        "address": "Vilkaraisčio k.",
        "lat": 54.862211074,
        "lng": 25.491386254,
        "prices": {
            "A95": 1.7,
            "A98": null,
            "Diesel": 1.76,
            "LPG": 0.79
        }
    },
    {
        "id": 82,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Panevėžio",
        "address": "Panevėžys, Smėlynės g. 169",
        "lat": 55.757761320918,
        "lng": 24.367231048815,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.769,
            "LPG": 0.819
        }
    },
    {
        "id": 83,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Pakruojo",
        "address": "Pakruojis, Statybininkų g. 28",
        "lat": 55.974424465548,
        "lng": 23.868955319686,
        "prices": {
            "A95": 1.709,
            "A98": null,
            "Diesel": 1.779,
            "LPG": 0.78
        }
    },
    {
        "id": 84,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Šilalės",
        "address": "Šilalė, Rytinio Kelio g. 2",
        "lat": 55.490070281313,
        "lng": 22.200059640314,
        "prices": {
            "A95": 1.769,
            "A98": null,
            "Diesel": 1.809,
            "LPG": 0.789
        }
    },
    {
        "id": 85,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Marijampolės",
        "address": "Pasiekų k.",
        "lat": 54.322471521,
        "lng": 23.146203467,
        "prices": {
            "A95": 1.849,
            "A98": null,
            "Diesel": 1.889,
            "LPG": 0.919
        }
    },
    {
        "id": 86,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Marijampolės",
        "address": "Pietarių k. Kauno g. 164",
        "lat": 54.586962291313,
        "lng": 23.384465306711,
        "prices": {
            "A95": 1.709,
            "A98": null,
            "Diesel": 1.779,
            "LPG": 0.789
        }
    },
    {
        "id": 87,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Vilnius",
        "address": "Vilnius, Molėtų pl. 27A",
        "lat": 54.767666275039,
        "lng": 25.272410374727,
        "prices": {
            "A95": 1.679,
            "A98": null,
            "Diesel": 1.739,
            "LPG": 0.799
        }
    },
    {
        "id": 88,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Vilnius",
        "address": "Vilnius, S. Batoro g. 15",
        "lat": 54.692183926093,
        "lng": 25.346600946666,
        "prices": {
            "A95": 1.709,
            "A98": null,
            "Diesel": 1.769,
            "LPG": 0.799
        }
    },
    {
        "id": 89,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Vilnius",
        "address": "Užubalių k. Senasis Ukmergės kelias 4",
        "lat": 54.76795796527,
        "lng": 25.196966959721,
        "prices": {
            "A95": 1.759,
            "A98": null,
            "Diesel": 1.859,
            "LPG": 0.779
        }
    },
    {
        "id": 90,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Vilnius",
        "address": "Vilnius, Rinktinės g. 59",
        "lat": 54.702819932579,
        "lng": 25.288207999099,
        "prices": {
            "A95": 1.689,
            "A98": null,
            "Diesel": 1.749,
            "LPG": 0.799
        }
    },
    {
        "id": 91,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Marijampolės",
        "address": "Marijampolė, Vasaros g. 15",
        "lat": 54.555439797489,
        "lng": 23.375386196829,
        "prices": {
            "A95": 1.709,
            "A98": null,
            "Diesel": 1.779,
            "LPG": 0.789
        }
    },
    {
        "id": 92,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Telšių",
        "address": "Ožtakių k., Dariaus ir Girėno g. 77",
        "lat": 55.730429736772,
        "lng": 22.376885610808,
        "prices": {
            "A95": 1.739,
            "A98": null,
            "Diesel": 1.829,
            "LPG": 0.919
        }
    },
    {
        "id": 93,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Rokiškio",
        "address": "Pandėlio k., Elektrinės g. 1",
        "lat": 56.019176955344,
        "lng": 25.222147537964,
        "prices": {
            "A95": 1.889,
            "A98": null,
            "Diesel": 1.979,
            "LPG": 0.859
        }
    },
    {
        "id": 94,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Radviliškio",
        "address": "Užuovėjos k.",
        "lat": 55.765111389119,
        "lng": 23.718871519531,
        "prices": {
            "A95": 1.779,
            "A98": null,
            "Diesel": 1.829,
            "LPG": 0.79
        }
    },
    {
        "id": 95,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Kaunas",
        "address": "Kaunas, Vaidoto g. 153",
        "lat": 54.861260952829,
        "lng": 23.958583764713,
        "prices": {
            "A95": 1.789,
            "A98": null,
            "Diesel": 1.889,
            "LPG": 0.889
        }
    },
    {
        "id": 96,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Kaišiadorių r. sav.",
        "address": "Triliškių k., Kauno pl. 5",
        "lat": 54.816278817,
        "lng": 24.455535868,
        "prices": {
            "A95": 1.749,
            "A98": null,
            "Diesel": 1.829,
            "LPG": 0.789
        }
    },
    {
        "id": 97,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Kaunas",
        "address": "Pagirių k., Marijampolės g. 1",
        "lat": 54.814578697465,
        "lng": 23.872580828086,
        "prices": {
            "A95": 1.749,
            "A98": null,
            "Diesel": 1.819,
            "LPG": 0.779
        }
    },
    {
        "id": 98,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Jonavos",
        "address": "Spanėnų k., Plento g. 46",
        "lat": 55.05817872242,
        "lng": 24.263521006454,
        "prices": {
            "A95": 1.779,
            "A98": null,
            "Diesel": 1.859,
            "LPG": 0.86
        }
    },
    {
        "id": 99,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Klaipėda",
        "address": "Priekulė, Klaipėdos g. 61",
        "lat": 55.748638834687,
        "lng": 21.16306608597,
        "prices": {
            "A95": 1.869,
            "A98": null,
            "Diesel": 1.949,
            "LPG": 0.87
        }
    },
    {
        "id": 100,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Mažeikių",
        "address": "Užežerės k., Gardenio g. 39",
        "lat": 56.163938374335,
        "lng": 22.101548138122,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.789,
            "LPG": 0.829
        }
    },
    {
        "id": 101,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Kaunas",
        "address": "Kaunas, Taikos pr. 120",
        "lat": 54.917400006632,
        "lng": 24.034813653694,
        "prices": {
            "A95": 1.709,
            "A98": null,
            "Diesel": 1.779,
            "LPG": 0.799
        }
    },
    {
        "id": 102,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Raseinių",
        "address": "Kalnujų k. 1",
        "lat": 55.29814,
        "lng": 23.06251,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 1.919,
            "LPG": 0.839
        }
    },
    {
        "id": 103,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Klaipėda",
        "address": "Klaipėda, Liepų g. 79A",
        "lat": 55.72061394142,
        "lng": 21.152902273998,
        "prices": {
            "A95": 1.629,
            "A98": null,
            "Diesel": 1.709,
            "LPG": 0.799
        }
    },
    {
        "id": 104,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Mažeikių",
        "address": "Mažeikiai, M. Daukšos g. 17",
        "lat": 56.305096245513,
        "lng": 22.350496697403,
        "prices": {
            "A95": 1.649,
            "A98": null,
            "Diesel": 1.749,
            "LPG": 0.839
        }
    },
    {
        "id": 105,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Druskininkų sav.",
        "address": "Druskininkai, Leipalingio g. 26",
        "lat": 54.030274420059,
        "lng": 23.983576336868,
        "prices": {
            "A95": 1.809,
            "A98": null,
            "Diesel": 1.899,
            "LPG": 0.929
        }
    },
    {
        "id": 106,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Varėnos",
        "address": "Merkinė, Vilniaus g. 87",
        "lat": 54.169037204315,
        "lng": 24.20789710442,
        "prices": {
            "A95": 1.839,
            "A98": null,
            "Diesel": 1.929,
            "LPG": 0.889
        }
    },
    {
        "id": 107,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Rietavo",
        "address": "Rietavas, Dariaus ir Girėno g. 19",
        "lat": 55.719466877971,
        "lng": 21.92824357279,
        "prices": {
            "A95": 1.789,
            "A98": null,
            "Diesel": 1.829,
            "LPG": 0.81
        }
    },
    {
        "id": 108,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Jonavos",
        "address": "Jonava, Žemaitės g. 1",
        "lat": 55.082285788414,
        "lng": 24.271009147293,
        "prices": {
            "A95": 1.779,
            "A98": null,
            "Diesel": 1.859,
            "LPG": 0.869
        }
    },
    {
        "id": 109,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Varėnos",
        "address": "Senoji Varėna, Vilniaus g. 6A",
        "lat": 54.256575579874,
        "lng": 24.547035109506,
        "prices": {
            "A95": 1.779,
            "A98": null,
            "Diesel": 1.869,
            "LPG": 0.899
        }
    },
    {
        "id": 110,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Šakių",
        "address": "Griškabūdis",
        "lat": 54.84978,
        "lng": 23.16967,
        "prices": {
            "A95": 1.76,
            "A98": null,
            "Diesel": 1.82,
            "LPG": null
        }
    },
    {
        "id": 111,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Vilnius",
        "address": "Vilnius, Brazdžionio g. 2",
        "lat": 54.614528820205,
        "lng": 25.308765538646,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.779,
            "LPG": null
        }
    },
    {
        "id": 112,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Alytaus",
        "address": "Likiškėlių k.",
        "lat": 54.388212273,
        "lng": 23.977968325,
        "prices": {
            "A95": 1.749,
            "A98": null,
            "Diesel": 1.839,
            "LPG": 0.799
        }
    },
    {
        "id": 113,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Šiaulių",
        "address": "Šiauliai, Kupiškio g. 4",
        "lat": 55.957701646703,
        "lng": 23.31592522716,
        "prices": {
            "A95": 1.729,
            "A98": null,
            "Diesel": 1.829,
            "LPG": 0.79
        }
    },
    {
        "id": 114,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Vilnius",
        "address": "Grigaičiai, Pavilnės g.",
        "lat": 54.680975378164,
        "lng": 25.410861279321,
        "prices": {
            "A95": 1.779,
            "A98": null,
            "Diesel": 1.849,
            "LPG": 0.809
        }
    },
    {
        "id": 115,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Kaunas",
        "address": "Ringaudų k., Gėlių g. 1A",
        "lat": 54.889395229933,
        "lng": 23.804682802318,
        "prices": {
            "A95": 1.779,
            "A98": null,
            "Diesel": 1.849,
            "LPG": 0.799
        }
    },
    {
        "id": 116,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Vilnius",
        "address": "Visalaukio g. 2",
        "lat": 54.779062771601,
        "lng": 25.342210338145,
        "prices": {
            "A95": 1.779,
            "A98": null,
            "Diesel": 1.849,
            "LPG": 0.789
        }
    },
    {
        "id": 117,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Zarasų",
        "address": "Sarakiškių k., Vytauto g. 61",
        "lat": 55.755513495988,
        "lng": 25.851320078964,
        "prices": {
            "A95": 1.789,
            "A98": null,
            "Diesel": 1.869,
            "LPG": 0.799
        }
    },
    {
        "id": 118,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Kupiškio",
        "address": "Noriūnų k., Parko g. 3A",
        "lat": 55.796476283947,
        "lng": 24.888755411324,
        "prices": {
            "A95": 1.689,
            "A98": null,
            "Diesel": 1.759,
            "LPG": 0.829
        }
    },
    {
        "id": 119,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Jurbarko",
        "address": "Klišių k., Pievų g. 2",
        "lat": 55.098428747197,
        "lng": 22.772948808397,
        "prices": {
            "A95": 1.77,
            "A98": null,
            "Diesel": 1.85,
            "LPG": 0.79
        }
    },
    {
        "id": 120,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Zarasų",
        "address": "Padustėlis, V. Striogos g. 4A",
        "lat": 55.739357127618,
        "lng": 25.85239438205,
        "prices": {
            "A95": 1.789,
            "A98": null,
            "Diesel": 1.869,
            "LPG": null
        }
    },
    {
        "id": 121,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Šilalės",
        "address": "Bučių k.",
        "lat": 55.57744,
        "lng": 22.18167,
        "prices": {
            "A95": 1.78,
            "A98": null,
            "Diesel": 1.87,
            "LPG": 0.79
        }
    },
    {
        "id": 122,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Tauragės",
        "address": "Taurų k., Tilžės pl. 36",
        "lat": 55.243258646337,
        "lng": 22.253033184564,
        "prices": {
            "A95": 1.689,
            "A98": null,
            "Diesel": 1.759,
            "LPG": 0.78
        }
    },
    {
        "id": 123,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Raseinių",
        "address": "Girkalnio k., Žemaičių g. 39",
        "lat": 55.342827232249,
        "lng": 23.160463973489,
        "prices": {
            "A95": 1.749,
            "A98": null,
            "Diesel": 1.839,
            "LPG": 0.78
        }
    },
    {
        "id": 124,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Vilnius",
        "address": "Vilnius, Zujūnų g. 2A",
        "lat": 54.710938350629,
        "lng": 25.161516873707,
        "prices": {
            "A95": 1.719,
            "A98": null,
            "Diesel": 1.759,
            "LPG": 0.81
        }
    },
    {
        "id": 125,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Mažeikių",
        "address": "Tirkšliai, Laukų g. 10",
        "lat": 56.306715796844,
        "lng": 22.345287512217,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.789,
            "LPG": null
        }
    },
    {
        "id": 126,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Plungės",
        "address": "Plateliai,  Ž. Kalvarijos g. 1A",
        "lat": 56.103855341062,
        "lng": 22.000731338848,
        "prices": {
            "A95": 1.859,
            "A98": null,
            "Diesel": 1.949,
            "LPG": 0.859
        }
    },
    {
        "id": 127,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Prienų",
        "address": "Veiverių k.",
        "lat": 54.74263,
        "lng": 23.71685,
        "prices": {
            "A95": 1.879,
            "A98": null,
            "Diesel": 1.979,
            "LPG": 0.87
        }
    },
    {
        "id": 128,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Marijampolės",
        "address": "Marijampolė, P. Armino g. 69",
        "lat": 54.533820899452,
        "lng": 23.35318840265,
        "prices": {
            "A95": 1.709,
            "A98": null,
            "Diesel": 1.779,
            "LPG": 0.789
        }
    },
    {
        "id": 129,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Radviliškio",
        "address": "Radviliškis, Šiaulių g. 1A",
        "lat": 55.825678499334,
        "lng": 23.523272389324,
        "prices": {
            "A95": 1.769,
            "A98": null,
            "Diesel": 1.879,
            "LPG": 0.8
        }
    },
    {
        "id": 130,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Druskininkų sav.",
        "address": "Leipalingis, Merkinės g. 37",
        "lat": 54.094484031244,
        "lng": 23.871556727156,
        "prices": {
            "A95": 1.849,
            "A98": null,
            "Diesel": 1.939,
            "LPG": 0.929
        }
    },
    {
        "id": 131,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Palangos",
        "address": "Palanga, Ganyklų g. 28C",
        "lat": 55.923397744039,
        "lng": 21.075793374831,
        "prices": {
            "A95": 1.779,
            "A98": null,
            "Diesel": 1.859,
            "LPG": 0.809
        }
    },
    {
        "id": 132,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Pasvalio",
        "address": "Aukštikalnio k., Mūšos g. 19",
        "lat": 56.070536983717,
        "lng": 24.413586111767,
        "prices": {
            "A95": 1.77,
            "A98": null,
            "Diesel": 1.86,
            "LPG": null
        }
    },
    {
        "id": 133,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Anykščių",
        "address": "Anykščiai, Mindaugo g. 23",
        "lat": 55.509000264811,
        "lng": 25.100598626351,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.789,
            "LPG": 0.789
        }
    },
    {
        "id": 134,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Klaipėda",
        "address": "Gargždai, Dariaus ir Girėno g. 10",
        "lat": 55.720905254465,
        "lng": 21.121846233086,
        "prices": {
            "A95": 1.779,
            "A98": null,
            "Diesel": 1.859,
            "LPG": 0.799
        }
    },
    {
        "id": 135,
        "name": "Bonsa",
        "logo": "⛽",
        "city": "Tauragės",
        "address": "Tilžės pl. 46, Taurai",
        "lat": 55.24243164586,
        "lng": 22.249876811285,
        "prices": {
            "A95": 1.659,
            "A98": null,
            "Diesel": 1.729,
            "LPG": 0.72
        }
    },
    {
        "id": 136,
        "name": "Bonsa",
        "logo": "⛽",
        "city": "Tauragės",
        "address": "Vaidatonių k. 1",
        "lat": 55.492840114,
        "lng": 22.617067212,
        "prices": {
            "A95": 1.78,
            "A98": null,
            "Diesel": 1.79,
            "LPG": 0.78
        }
    },
    {
        "id": 137,
        "name": "Bonsa",
        "logo": "⛽",
        "city": "Rietavo",
        "address": "Rietavo g. 32, Tverai",
        "lat": 55.736218530562,
        "lng": 22.138262131316,
        "prices": {
            "A95": 1.69,
            "A98": null,
            "Diesel": 1.74,
            "LPG": 0.74
        }
    },
    {
        "id": 138,
        "name": "Boost Petrol",
        "logo": "⛽",
        "city": "Šiaulių",
        "address": "Ginkūnų k., Aušros g. 26",
        "lat": 55.956221654059,
        "lng": 23.342757124148,
        "prices": {
            "A95": 1.849,
            "A98": null,
            "Diesel": 1.899,
            "LPG": 0.919
        }
    },
    {
        "id": 139,
        "name": "Boost Petrol",
        "logo": "⛽",
        "city": "Kelmės",
        "address": "Kęstučio g. 1B, Kelmė",
        "lat": 55.634763806888,
        "lng": 22.94546287644,
        "prices": {
            "A95": 1.849,
            "A98": null,
            "Diesel": 1.899,
            "LPG": 0.899
        }
    },
    {
        "id": 140,
        "name": "Boost Petrol",
        "logo": "⛽",
        "city": "Kelmės",
        "address": "Kuršukų k., Plento g. 1",
        "lat": 55.641788009387,
        "lng": 22.922542646026,
        "prices": {
            "A95": 1.859,
            "A98": null,
            "Diesel": 1.939,
            "LPG": 0.919
        }
    },
    {
        "id": 141,
        "name": "Boost Petrol",
        "logo": "⛽",
        "city": "Kaunas",
        "address": "Marvelės g. 132, Kaunas",
        "lat": 54.903978190806,
        "lng": 23.835469532681,
        "prices": {
            "A95": 1.849,
            "A98": null,
            "Diesel": 1.939,
            "LPG": 0.92
        }
    },
    {
        "id": 142,
        "name": "Boost Petrol",
        "logo": "⛽",
        "city": "Elektrėnų",
        "address": "Dubijos g. 36",
        "lat": 54.785304625123,
        "lng": 24.710382299064,
        "prices": {
            "A95": 1.859,
            "A98": null,
            "Diesel": 1.939,
            "LPG": 0.929
        }
    },
    {
        "id": 143,
        "name": "Boost Petrol",
        "logo": "⛽",
        "city": "Molėtų",
        "address": "Smėlinkos k.",
        "lat": 55.265755418135,
        "lng": 25.482754225472,
        "prices": {
            "A95": 1.8,
            "A98": null,
            "Diesel": 1.86,
            "LPG": 0.83
        }
    },
    {
        "id": 144,
        "name": "Boost Petrol",
        "logo": "⛽",
        "city": "Utenos",
        "address": "Zarasų g. 9, Utena",
        "lat": 55.512401054386,
        "lng": 25.643881152218,
        "prices": {
            "A95": 1.809,
            "A98": null,
            "Diesel": 1.869,
            "LPG": 0.829
        }
    },
    {
        "id": 145,
        "name": "Boost Petrol",
        "logo": "⛽",
        "city": "Kelmės",
        "address": "Maironių k., Kuršių g. 2",
        "lat": 55.600505208411,
        "lng": 23.042750285493,
        "prices": {
            "A95": 1.79,
            "A98": null,
            "Diesel": 1.86,
            "LPG": 0.81
        }
    },
    {
        "id": 146,
        "name": "Borusta",
        "logo": "⛽",
        "city": "Trakų",
        "address": "Vilniaus g. 2a, Aukštadvaris",
        "lat": 54.577824697357,
        "lng": 24.521613066587,
        "prices": {
            "A95": 1.8,
            "A98": null,
            "Diesel": 1.88,
            "LPG": 0.8
        }
    },
    {
        "id": 147,
        "name": "Borusta",
        "logo": "⛽",
        "city": "Prienų",
        "address": "Piliakalnio g. 3, Stakliškės",
        "lat": 54.572492767233,
        "lng": 24.38436197857,
        "prices": {
            "A95": 1.73,
            "A98": null,
            "Diesel": 1.85,
            "LPG": 0.8
        }
    },
    {
        "id": 148,
        "name": "Borusta",
        "logo": "⛽",
        "city": "Birštono",
        "address": "Prienų g. 14, Birštonas",
        "lat": 54.595451985763,
        "lng": 24.026724027482,
        "prices": {
            "A95": 1.8,
            "A98": null,
            "Diesel": 1.88,
            "LPG": 0.8
        }
    },
    {
        "id": 149,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Vilnius",
        "address": "Geležinio Vilko g. 2A, Vilnius",
        "lat": 54.670981105729,
        "lng": 25.236656277085,
        "prices": {
            "A95": 1.879,
            "A98": null,
            "Diesel": 1.979,
            "LPG": 0.959
        }
    },
    {
        "id": 150,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Vilnius",
        "address": "Baltupio g. 10, Vilnius",
        "lat": 54.735965540044,
        "lng": 25.265453478911,
        "prices": {
            "A95": 1.769,
            "A98": null,
            "Diesel": 1.849,
            "LPG": 0.809
        }
    },
    {
        "id": 151,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Vilnius",
        "address": "A. P. Kavoliuko g. 32A, Vilnius",
        "lat": 54.695313100096,
        "lng": 25.218175102593,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 1.889,
            "LPG": 0.959
        }
    },
    {
        "id": 152,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Vilnius",
        "address": "Sporto g. 16A, Vilnius",
        "lat": 54.69507635324,
        "lng": 25.298108451673,
        "prices": {
            "A95": 1.719,
            "A98": null,
            "Diesel": 1.814,
            "LPG": null
        }
    },
    {
        "id": 153,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Vilnius",
        "address": "Ukmergės g. 231, Vilnius",
        "lat": 54.72032390289,
        "lng": 25.24612120597,
        "prices": {
            "A95": 1.739,
            "A98": null,
            "Diesel": 1.834,
            "LPG": null
        }
    },
    {
        "id": 154,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Vilnius",
        "address": "Kareivių g. 13, Vilnius",
        "lat": 54.7185389347,
        "lng": 25.30056552277,
        "prices": {
            "A95": 1.739,
            "A98": null,
            "Diesel": 1.839,
            "LPG": 0.909
        }
    },
    {
        "id": 155,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Vilnius",
        "address": "A. Goštauto g. 13, Vilnius",
        "lat": 54.694355551477,
        "lng": 25.263428997837,
        "prices": {
            "A95": 1.709,
            "A98": null,
            "Diesel": 1.809,
            "LPG": null
        }
    },
    {
        "id": 156,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Vilnius",
        "address": "Laisvės pr. 43C, Vilnius",
        "lat": 54.709211762393,
        "lng": 25.228197763315,
        "prices": {
            "A95": 1.719,
            "A98": null,
            "Diesel": 1.819,
            "LPG": 0.959
        }
    },
    {
        "id": 157,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Vilnius",
        "address": "J. Tiškevičiaus g. 24, Vilnius",
        "lat": 54.623161845199,
        "lng": 25.110203616838,
        "prices": {
            "A95": 1.729,
            "A98": null,
            "Diesel": 1.809,
            "LPG": 0.829
        }
    },
    {
        "id": 158,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Vilnius",
        "address": "Eišiškių pl. 11, Vilnius",
        "lat": 54.651547998493,
        "lng": 25.269353159363,
        "prices": {
            "A95": 1.829,
            "A98": null,
            "Diesel": 1.919,
            "LPG": 0.959
        }
    },
    {
        "id": 159,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Kaunas",
        "address": "Pramonės pr. 18, Kaunas",
        "lat": 54.916191294285,
        "lng": 23.986586529755,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.799,
            "LPG": 0.869
        }
    },
    {
        "id": 160,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Kaunas",
        "address": "Baltijos g. 1, Mastaičių k.",
        "lat": 54.818866460034,
        "lng": 23.858143586599,
        "prices": {
            "A95": 1.909,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.969
        }
    },
    {
        "id": 161,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Kaunas",
        "address": "Raudondvario pl. 107A, Kaunas",
        "lat": 54.908183433538,
        "lng": 23.864909375024,
        "prices": {
            "A95": 1.714,
            "A98": null,
            "Diesel": 1.794,
            "LPG": 0.889
        }
    },
    {
        "id": 162,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Vilnius",
        "address": "Sudervės g. 2G, Avižienių k.",
        "lat": 54.760318782535,
        "lng": 25.201651605406,
        "prices": {
            "A95": 1.879,
            "A98": null,
            "Diesel": 1.959,
            "LPG": 0.859
        }
    },
    {
        "id": 163,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Kaunas",
        "address": "R. Kalantos g. 159, Kaunas",
        "lat": 54.894161221988,
        "lng": 24.006781049076,
        "prices": {
            "A95": 1.739,
            "A98": null,
            "Diesel": 1.849,
            "LPG": 0.919
        }
    },
    {
        "id": 164,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Alytaus",
        "address": "Naujoji g. 120, Alytus",
        "lat": 54.424589404103,
        "lng": 24.003451840954,
        "prices": {
            "A95": 1.744,
            "A98": null,
            "Diesel": 1.829,
            "LPG": 0.849
        }
    },
    {
        "id": 165,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Kaunas",
        "address": "Savanorių pr. 321, Kaunas",
        "lat": 54.919677327815,
        "lng": 23.951192518673,
        "prices": {
            "A95": 1.724,
            "A98": null,
            "Diesel": 1.829,
            "LPG": null
        }
    },
    {
        "id": 166,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Kaunas",
        "address": "Veiverių g. 49A, Kaunas",
        "lat": 54.880898578503,
        "lng": 23.894048223223,
        "prices": {
            "A95": 1.779,
            "A98": null,
            "Diesel": 1.869,
            "LPG": null
        }
    },
    {
        "id": 167,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Šiaulių",
        "address": "Dubijos g. 20A, Šiauliai",
        "lat": 55.928815596704,
        "lng": 23.297616216958,
        "prices": {
            "A95": 1.719,
            "A98": null,
            "Diesel": 1.799,
            "LPG": 0.939
        }
    },
    {
        "id": 168,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Vilnius",
        "address": "Talino g. 2B, Vilnius",
        "lat": 54.713429242705,
        "lng": 25.209111080137,
        "prices": {
            "A95": 1.719,
            "A98": null,
            "Diesel": 1.804,
            "LPG": 0.969
        }
    },
    {
        "id": 169,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Šiaulių",
        "address": "Pramonės g. 17a, Šiauliai",
        "lat": 55.909258059662,
        "lng": 23.319423717171,
        "prices": {
            "A95": 1.719,
            "A98": null,
            "Diesel": 1.819,
            "LPG": 0.829
        }
    },
    {
        "id": 170,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Elektrėnų",
        "address": "Sabališkių g. 1F, Elektrėnai",
        "lat": 54.789087569708,
        "lng": 24.675974764245,
        "prices": {
            "A95": 1.809,
            "A98": null,
            "Diesel": 1.889,
            "LPG": 0.929
        }
    },
    {
        "id": 171,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Utenos",
        "address": "J. Basanavičiaus g. 108a, Utena",
        "lat": 55.505150121406,
        "lng": 25.620955892662,
        "prices": {
            "A95": 1.759,
            "A98": null,
            "Diesel": 1.839,
            "LPG": 0.899
        }
    },
    {
        "id": 172,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Panevėžio",
        "address": "Baltijos Kelio g. 33, Ūtos k.",
        "lat": 55.810596899041,
        "lng": 24.369100297042,
        "prices": {
            "A95": 1.719,
            "A98": null,
            "Diesel": 1.809,
            "LPG": 0.869
        }
    },
    {
        "id": 173,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Palangos",
        "address": "Kretingos g. 56, Palanga",
        "lat": 55.914658059326,
        "lng": 21.077908045183,
        "prices": {
            "A95": 1.849,
            "A98": null,
            "Diesel": 1.929,
            "LPG": 0.859
        }
    },
    {
        "id": 174,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Šiaulių",
        "address": "Plento g. 1, Kuršėnai",
        "lat": 55.999263271689,
        "lng": 22.989648498124,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.959
        }
    },
    {
        "id": 175,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Klaipėda",
        "address": "Minijos g. 90, Klaipėda",
        "lat": 55.68767050546,
        "lng": 21.145004593369,
        "prices": {
            "A95": 1.709,
            "A98": null,
            "Diesel": 1.799,
            "LPG": 0.879
        }
    },
    {
        "id": 176,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Klaipėda",
        "address": "Taikos pr. 61B, Klaipėda",
        "lat": 55.692374932436,
        "lng": 21.153683467374,
        "prices": {
            "A95": 1.709,
            "A98": null,
            "Diesel": 1.799,
            "LPG": null
        }
    },
    {
        "id": 177,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Klaipėda",
        "address": "H. Manto g. 96, Klaipėda",
        "lat": 55.730400567749,
        "lng": 21.124714939447,
        "prices": {
            "A95": 1.749,
            "A98": null,
            "Diesel": 1.829,
            "LPG": null
        }
    },
    {
        "id": 178,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Marijampolės",
        "address": "Kauno g. 130, Marijampolė",
        "lat": 54.576373726398,
        "lng": 23.37149313808,
        "prices": {
            "A95": 1.729,
            "A98": null,
            "Diesel": 1.829,
            "LPG": 0.84
        }
    },
    {
        "id": 179,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Alytaus",
        "address": "Rūtų g. 2B, Alytus",
        "lat": 54.395039046367,
        "lng": 24.038235062751,
        "prices": {
            "A95": 1.728,
            "A98": null,
            "Diesel": 1.809,
            "LPG": 0.849
        }
    },
    {
        "id": 180,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Druskininkų sav.",
        "address": "M. K. Čiurlionio g. 113, Druskininkai",
        "lat": 54.010236390871,
        "lng": 23.993363466111,
        "prices": {
            "A95": 1.829,
            "A98": null,
            "Diesel": 1.919,
            "LPG": 0.949
        }
    },
    {
        "id": 181,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Panevėžio",
        "address": "J. Basanavičiaus g. 63, Panevėžys",
        "lat": 55.717691548969,
        "lng": 24.371199796149,
        "prices": {
            "A95": 1.789,
            "A98": null,
            "Diesel": 1.844,
            "LPG": 0.849
        }
    },
    {
        "id": 182,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Panevėžio",
        "address": "Parko g. 7A, Panevėžys",
        "lat": 55.73172671056,
        "lng": 24.342405025075,
        "prices": {
            "A95": 1.769,
            "A98": null,
            "Diesel": 1.869,
            "LPG": 0.869
        }
    },
    {
        "id": 183,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Marijampolės",
        "address": "Jono Dailidės g. 10, Marijampolė",
        "lat": 54.557178665212,
        "lng": 23.354024748948,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.809,
            "LPG": null
        }
    },
    {
        "id": 184,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Kėdainių",
        "address": "J. Basanavičiaus g. 40a, Kėdainiai",
        "lat": 55.286600755195,
        "lng": 23.972262695419,
        "prices": {
            "A95": 1.709,
            "A98": null,
            "Diesel": 1.809,
            "LPG": null
        }
    },
    {
        "id": 185,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Ukmergės",
        "address": "Ežero g. 7, Kurėnų k.",
        "lat": 55.311756690644,
        "lng": 24.787242852518,
        "prices": {
            "A95": 1.909,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.969
        }
    },
    {
        "id": 186,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Telšių",
        "address": "Luokės g. 70, Telšiai",
        "lat": 55.977122013446,
        "lng": 22.265377464828,
        "prices": {
            "A95": 1.739,
            "A98": null,
            "Diesel": 1.839,
            "LPG": 0.859
        }
    },
    {
        "id": 187,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Šilutės",
        "address": "Cintjoniškių g. 15, Šilutė",
        "lat": 55.350441269274,
        "lng": 21.474502487795,
        "prices": {
            "A95": 1.779,
            "A98": null,
            "Diesel": 1.839,
            "LPG": 0.839
        }
    },
    {
        "id": 188,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Varėnos",
        "address": "Savanorių g. 5, Varėna",
        "lat": 54.210204837942,
        "lng": 24.576699335397,
        "prices": {
            "A95": 1.839,
            "A98": null,
            "Diesel": 1.929,
            "LPG": 0.899
        }
    },
    {
        "id": 189,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Mažeikių",
        "address": "Žemaitijos g. 57, Mažeikiai",
        "lat": 56.302358171112,
        "lng": 22.345265886907,
        "prices": {
            "A95": 1.709,
            "A98": null,
            "Diesel": 1.789,
            "LPG": 0.859
        }
    },
    {
        "id": 190,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Joniškio",
        "address": "Sidabros g. 2A, Satkūnų k.",
        "lat": 56.2584164209,
        "lng": 23.621872572052,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 1.899,
            "LPG": 0.829
        }
    },
    {
        "id": 191,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Rokiškio",
        "address": "Respublikos g. 111A, Rokiškis",
        "lat": 55.952248925321,
        "lng": 25.589676893125,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.959
        }
    },
    {
        "id": 192,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Jonavos",
        "address": "Vasario 16-osios g. 33, Jonava",
        "lat": 55.070560092605,
        "lng": 24.263210959855,
        "prices": {
            "A95": 1.769,
            "A98": null,
            "Diesel": 1.869,
            "LPG": 0.899
        }
    },
    {
        "id": 193,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Vilnius",
        "address": "Geležinio Vilko g. 39, Vilnius",
        "lat": 54.702363998956,
        "lng": 25.264950229444,
        "prices": {
            "A95": 1.709,
            "A98": null,
            "Diesel": 1.809,
            "LPG": 0.959
        }
    },
    {
        "id": 194,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Kretingos",
        "address": "Klaipėdos g. 155, Kretinga",
        "lat": 55.863618513506,
        "lng": 21.217477378071,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.959
        }
    },
    {
        "id": 195,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Vilnius",
        "address": "Prūsų g. 26 A, Vilnius",
        "lat": 54.658561639794,
        "lng": 25.266332405278,
        "prices": {
            "A95": 1.829,
            "A98": null,
            "Diesel": 1.919,
            "LPG": 0.959
        }
    },
    {
        "id": 196,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Radviliškio",
        "address": "Gedimino g. 42B, Radviliškis",
        "lat": 55.811746686609,
        "lng": 23.549941342114,
        "prices": {
            "A95": 1.729,
            "A98": null,
            "Diesel": 1.819,
            "LPG": 0.86
        }
    },
    {
        "id": 197,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Tauragės",
        "address": "Gedimino g. 47, Tauragė",
        "lat": 55.24833124841,
        "lng": 22.303034422129,
        "prices": {
            "A95": 1.719,
            "A98": null,
            "Diesel": 1.779,
            "LPG": 0.869
        }
    },
    {
        "id": 198,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Panevėžio",
        "address": "Panevėžio aplinkl. 20, Šilagalio k.",
        "lat": 55.672298262675,
        "lng": 24.3365127986,
        "prices": {
            "A95": 1.719,
            "A98": null,
            "Diesel": 1.809,
            "LPG": 0.869
        }
    },
    {
        "id": 199,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Kaunas",
        "address": "Vakarinis aplinkkelis 10, Kaunas",
        "lat": 54.93560193802,
        "lng": 23.870450735032,
        "prices": {
            "A95": 1.739,
            "A98": null,
            "Diesel": 1.819,
            "LPG": 0.889
        }
    },
    {
        "id": 200,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Kaunas",
        "address": "Žemaičių pl. 19, Kaunas",
        "lat": 54.925271326176,
        "lng": 23.890608709255,
        "prices": {
            "A95": 1.679,
            "A98": null,
            "Diesel": 1.789,
            "LPG": 0.869
        }
    },
    {
        "id": 201,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Šilalės",
        "address": "Dvaro g. 3, Košių II k.",
        "lat": 55.484175749814,
        "lng": 22.588463370962,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 2.039,
            "LPG": 0.929
        }
    },
    {
        "id": 202,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Klaipėda",
        "address": "Vilniaus pl. 21, Jakų k.",
        "lat": 55.711540866509,
        "lng": 21.262928164221,
        "prices": {
            "A95": 1.879,
            "A98": null,
            "Diesel": 1.979,
            "LPG": 0.88
        }
    },
    {
        "id": 203,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Vilnius",
        "address": "Geležinio Vilko g. 24, Vilnius",
        "lat": 54.7514191292,
        "lng": 25.266494678923,
        "prices": {
            "A95": 1.734,
            "A98": null,
            "Diesel": 1.784,
            "LPG": null
        }
    },
    {
        "id": 204,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Kaunas",
        "address": "Taikos pr. 52A, Kaunas",
        "lat": 54.912015430123,
        "lng": 23.956753827611,
        "prices": {
            "A95": 1.714,
            "A98": null,
            "Diesel": 1.819,
            "LPG": null
        }
    },
    {
        "id": 205,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Biržų r. sav.",
        "address": "Kilučių g. 93, Biržai",
        "lat": 56.195071403028,
        "lng": 24.771803638326,
        "prices": {
            "A95": 1.834,
            "A98": null,
            "Diesel": 1.914,
            "LPG": 0.88
        }
    },
    {
        "id": 206,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Kaunas",
        "address": "Briedžių takas 6B, Kaunas",
        "lat": 54.935630185034,
        "lng": 23.965701090156,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.959
        }
    },
    {
        "id": 207,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Kaunas",
        "address": "Islandijos pl. 61C, Kaunas",
        "lat": 54.933770324538,
        "lng": 23.965671502038,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 1.999,
            "LPG": null
        }
    },
    {
        "id": 208,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Kaunas",
        "address": "Karaliaus Mindaugo pr. 34A, Kaunas",
        "lat": 54.89414890059,
        "lng": 23.913935629611,
        "prices": {
            "A95": 1.779,
            "A98": null,
            "Diesel": 1.869,
            "LPG": null
        }
    },
    {
        "id": 209,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Trakų",
        "address": "Didžiulio g. 5, Dėdeliškių k.",
        "lat": 54.686401460639,
        "lng": 25.054046625762,
        "prices": {
            "A95": 1.909,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.969
        }
    },
    {
        "id": 210,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Utenos",
        "address": "J. Basanavičiaus g. 3, Utena",
        "lat": 55.495602882232,
        "lng": 25.583575035251,
        "prices": {
            "A95": 1.749,
            "A98": null,
            "Diesel": 1.829,
            "LPG": 0.854
        }
    },
    {
        "id": 211,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Lazdijų",
        "address": "Nekrūnų k. 1",
        "lat": 54.226855438218,
        "lng": 23.524869273472,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 1.849,
            "LPG": 0.789
        }
    },
    {
        "id": 212,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Vilkaviškio",
        "address": "Vilkaviškio g. 10, Serdokų k.",
        "lat": 54.636415897234,
        "lng": 23.074796061532,
        "prices": {
            "A95": 1.839,
            "A98": null,
            "Diesel": 1.939,
            "LPG": 0.829
        }
    },
    {
        "id": 213,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Klaipėda",
        "address": "Taikos pr. 112A, Klaipėda",
        "lat": 55.666464960979,
        "lng": 21.17278674672,
        "prices": {
            "A95": 1.835,
            "A98": null,
            "Diesel": 1.885,
            "LPG": 0.82
        }
    },
    {
        "id": 214,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Klaipėda",
        "address": "Vilniaus pl. 1A, Klaipėda",
        "lat": 55.692750735065,
        "lng": 21.179687902881,
        "prices": {
            "A95": 1.729,
            "A98": null,
            "Diesel": 1.809,
            "LPG": 0.939
        }
    },
    {
        "id": 215,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Raseinių",
        "address": "Pikelių k. 1",
        "lat": 55.461295305577,
        "lng": 22.693870370643,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 2.039,
            "LPG": 0.929
        }
    },
    {
        "id": 216,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Kalvarijos",
        "address": "Europos g. 13a, Salaperaugio k.",
        "lat": 54.322808456757,
        "lng": 23.141138992804,
        "prices": {
            "A95": 1.749,
            "A98": null,
            "Diesel": 1.849,
            "LPG": null
        }
    },
    {
        "id": 217,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Kalvarijos",
        "address": "Muitinės g. 5B, Brazavo k.",
        "lat": 54.368078612894,
        "lng": 23.183745966844,
        "prices": {
            "A95": 1.749,
            "A98": null,
            "Diesel": 1.849,
            "LPG": null
        }
    },
    {
        "id": 218,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Šiaulių",
        "address": "Vilniaus g. 62, Šiauliai",
        "lat": 55.924822667579,
        "lng": 23.334056624833,
        "prices": {
            "A95": 1.689,
            "A98": null,
            "Diesel": 1.769,
            "LPG": null
        }
    },
    {
        "id": 219,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Kaunas",
        "address": "R. Kalantos g. 68, Kaunas",
        "lat": 54.893119099966,
        "lng": 23.995837971566,
        "prices": {
            "A95": 1.709,
            "A98": null,
            "Diesel": 1.819,
            "LPG": null
        }
    },
    {
        "id": 220,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Kaunas",
        "address": "Varnių g. 46, Kaunas",
        "lat": 54.914408295841,
        "lng": 23.900526260911,
        "prices": {
            "A95": 1.679,
            "A98": null,
            "Diesel": 1.754,
            "LPG": null
        }
    },
    {
        "id": 221,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Vilnius",
        "address": "Oslo g. 12, Vilnius",
        "lat": 54.670969622522,
        "lng": 25.192081567455,
        "prices": {
            "A95": 1.684,
            "A98": null,
            "Diesel": 1.774,
            "LPG": null
        }
    },
    {
        "id": 222,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Tauragės",
        "address": "Dariaus ir Girėno g. 83A, Tauragė",
        "lat": 55.267041248859,
        "lng": 22.309648665744,
        "prices": {
            "A95": 1.689,
            "A98": null,
            "Diesel": 1.749,
            "LPG": null
        }
    },
    {
        "id": 223,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Kaunas",
        "address": "Islandijos pl. 32, Kaunas",
        "lat": 54.939640464699,
        "lng": 23.893488060633,
        "prices": {
            "A95": 1.744,
            "A98": null,
            "Diesel": 1.814,
            "LPG": null
        }
    },
    {
        "id": 224,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Vilnius",
        "address": "Savanorių pr. 118, Vilnius",
        "lat": 54.661845879006,
        "lng": 25.235448696295,
        "prices": {
            "A95": 1.784,
            "A98": null,
            "Diesel": 1.874,
            "LPG": 0.919
        }
    },
    {
        "id": 225,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Vilnius",
        "address": "P. Žadeikos g. 1a, Vilnius",
        "lat": 54.730460473676,
        "lng": 25.239041515272,
        "prices": {
            "A95": 1.709,
            "A98": null,
            "Diesel": 1.809,
            "LPG": 0.879
        }
    },
    {
        "id": 226,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Vilnius",
        "address": "Savanorių pr. 119A, Vilnius",
        "lat": 54.662804098177,
        "lng": 25.234888701343,
        "prices": {
            "A95": 1.784,
            "A98": null,
            "Diesel": 1.874,
            "LPG": 0.919
        }
    },
    {
        "id": 227,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Vilnius",
        "address": "Kareivių g. 3, Vilnius",
        "lat": 54.715540895572,
        "lng": 25.291017110129,
        "prices": {
            "A95": 1.719,
            "A98": null,
            "Diesel": 1.794,
            "LPG": 0.839
        }
    },
    {
        "id": 228,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Vilnius",
        "address": "Geležinio Vilko g. 4, Vilnius",
        "lat": 54.702841809347,
        "lng": 25.263941048302,
        "prices": {
            "A95": 1.709,
            "A98": null,
            "Diesel": 1.809,
            "LPG": 0.959
        }
    },
    {
        "id": 229,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Vilnius",
        "address": "Gariūnų g. 45, Vilnius",
        "lat": 54.658968706922,
        "lng": 25.161134239827,
        "prices": {
            "A95": 1.694,
            "A98": null,
            "Diesel": 1.784,
            "LPG": null
        }
    },
    {
        "id": 230,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Kaunas",
        "address": "Savanorių pr. 404B, Kaunas",
        "lat": 54.928282692529,
        "lng": 23.973882665846,
        "prices": {
            "A95": 1.709,
            "A98": null,
            "Diesel": 1.799,
            "LPG": 0.849
        }
    },
    {
        "id": 231,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Kaunas",
        "address": "Tvirtovės alėja 33a, Kaunas",
        "lat": 54.913105831907,
        "lng": 23.926215955953,
        "prices": {
            "A95": 1.729,
            "A98": null,
            "Diesel": 1.799,
            "LPG": null
        }
    },
    {
        "id": 232,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Kaunas",
        "address": "Sukilėlių pr. 120, Kaunas",
        "lat": 54.928588087172,
        "lng": 23.928793055904,
        "prices": {
            "A95": 1.719,
            "A98": null,
            "Diesel": 1.789,
            "LPG": 0.819
        }
    },
    {
        "id": 233,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Kaunas",
        "address": "K. Baršausko g. 57, Kaunas",
        "lat": 54.899051475757,
        "lng": 23.959916990232,
        "prices": {
            "A95": 1.829,
            "A98": null,
            "Diesel": 1.889,
            "LPG": 0.899
        }
    },
    {
        "id": 234,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Kaunas",
        "address": "Jonavos g. 38, Kaunas",
        "lat": 54.901519485238,
        "lng": 23.894976351361,
        "prices": {
            "A95": 1.789,
            "A98": null,
            "Diesel": 1.879,
            "LPG": 0.8
        }
    },
    {
        "id": 235,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Šiaulių",
        "address": "Tilžės g. 25, Šiauliai",
        "lat": 55.912642127794,
        "lng": 23.273835919459,
        "prices": {
            "A95": 1.709,
            "A98": null,
            "Diesel": 1.809,
            "LPG": 0.959
        }
    },
    {
        "id": 236,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Klaipėda",
        "address": "Tilžės g. 56A, Klaipėda",
        "lat": 55.704277821679,
        "lng": 21.160807833616,
        "prices": {
            "A95": 1.659,
            "A98": null,
            "Diesel": 1.749,
            "LPG": 0.829
        }
    },
    {
        "id": 237,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Klaipėda",
        "address": "Jūrininkų pr. 31, Klaipėda",
        "lat": 55.656684285801,
        "lng": 21.182458205699,
        "prices": {
            "A95": 1.76,
            "A98": null,
            "Diesel": 1.86,
            "LPG": null
        }
    },
    {
        "id": 238,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Klaipėda",
        "address": "Sausio 15-osios g. 2, Klaipėda",
        "lat": 55.702076356719,
        "lng": 21.13800117799,
        "prices": {
            "A95": 1.659,
            "A98": null,
            "Diesel": 1.749,
            "LPG": null
        }
    },
    {
        "id": 239,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Panevėžio",
        "address": "Klaipėdos g. 92A, Panevėžys",
        "lat": 55.728708764412,
        "lng": 24.338971881354,
        "prices": {
            "A95": 1.749,
            "A98": null,
            "Diesel": 1.849,
            "LPG": null
        }
    },
    {
        "id": 240,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Vilnius",
        "address": "Molėtų g. 15, Didžiosios Riešės k.",
        "lat": 54.780662374003,
        "lng": 25.273859941062,
        "prices": {
            "A95": 1.694,
            "A98": null,
            "Diesel": 1.744,
            "LPG": null
        }
    },
    {
        "id": 241,
        "name": "Degta",
        "logo": "⛽",
        "city": "Elektrėnų",
        "address": "Vievis, Kauno g. 55A",
        "lat": 54.775244018424,
        "lng": 24.810488300775,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.959
        }
    },
    {
        "id": 242,
        "name": "Degta",
        "logo": "⛽",
        "city": "Anykščių",
        "address": "Anykščiai, Vienuolio g. 34A",
        "lat": 55.522518137248,
        "lng": 25.087942036375,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.799,
            "LPG": 0.799
        }
    },
    {
        "id": 243,
        "name": "Degta",
        "logo": "⛽",
        "city": "Rokiškio",
        "address": "Rokiškis, Respublikos g.113B,",
        "lat": 55.947087642712,
        "lng": 25.590698311846,
        "prices": {
            "A95": 1.839,
            "A98": null,
            "Diesel": 1.933,
            "LPG": 0.899
        }
    },
    {
        "id": 244,
        "name": "Deguva",
        "logo": "⛽",
        "city": "Kaunas",
        "address": "Raudondvario pl.234,Kaunas",
        "lat": 54.920739775952,
        "lng": 23.826135445305,
        "prices": {
            "A95": null,
            "A98": null,
            "Diesel": null,
            "LPG": 0.83
        }
    },
    {
        "id": 245,
        "name": "Deliuvis",
        "logo": "⛽",
        "city": "Panevėžio",
        "address": "Pušaloto g. 140, Panevėžys",
        "lat": 55.746585855142,
        "lng": 24.329156672735,
        "prices": {
            "A95": 1.679,
            "A98": null,
            "Diesel": 1.779,
            "LPG": 0.789
        }
    },
    {
        "id": 246,
        "name": "Deliuvis",
        "logo": "⛽",
        "city": "Panevėžio",
        "address": "G.Petkevičaitės-Bitės 35C, Panevėžys",
        "lat": 55.722554854919,
        "lng": 24.342261107798,
        "prices": {
            "A95": 1.679,
            "A98": null,
            "Diesel": 1.779,
            "LPG": 0.789
        }
    },
    {
        "id": 247,
        "name": "Deliuvis",
        "logo": "⛽",
        "city": "Panevėžio",
        "address": "S.Kerbedžio 2, Panevėžys",
        "lat": 55.743153507702,
        "lng": 24.342521030615,
        "prices": {
            "A95": 1.679,
            "A98": null,
            "Diesel": 1.779,
            "LPG": 0.789
        }
    },
    {
        "id": 248,
        "name": "DVS Topolis",
        "logo": "⛽",
        "city": "Rokiškio",
        "address": "Panevėžio 7c, Rokiškis",
        "lat": 55.942937175717,
        "lng": 25.585789366432,
        "prices": {
            "A95": null,
            "A98": null,
            "Diesel": null,
            "LPG": 0.959
        }
    },
    {
        "id": 249,
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Alytaus",
        "address": "Ūdrijos g.2, Alytus",
        "lat": 54.408333582994,
        "lng": 24.016312530272,
        "prices": {
            "A95": 1.69,
            "A98": null,
            "Diesel": 1.79,
            "LPG": 0.79
        }
    },
    {
        "id": 250,
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Raseinių",
        "address": "Žemaičių g. 34, Ariogala",
        "lat": 55.258718270463,
        "lng": 23.495883933965,
        "prices": {
            "A95": 1.779,
            "A98": null,
            "Diesel": 1.879,
            "LPG": 0.839
        }
    },
    {
        "id": 251,
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Kaunas",
        "address": "Ateities pl.40B, Kaunas",
        "lat": 54.921870159415,
        "lng": 24.047374941431,
        "prices": {
            "A95": 1.729,
            "A98": null,
            "Diesel": 1.799,
            "LPG": null
        }
    },
    {
        "id": 252,
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Biržų r. sav.",
        "address": "Jaunimo g.2a, Biržai",
        "lat": 56.207636420712,
        "lng": 24.770750536011,
        "prices": {
            "A95": 1.739,
            "A98": null,
            "Diesel": 1.819,
            "LPG": 0.81
        }
    },
    {
        "id": 253,
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Vilnius",
        "address": "Bukiškio k. Ukmergės g.437",
        "lat": 54.753604836182,
        "lng": 25.211752888379,
        "prices": {
            "A95": 1.759,
            "A98": null,
            "Diesel": 1.859,
            "LPG": 0.79
        }
    },
    {
        "id": 254,
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Kaunas",
        "address": "Draugystės g.8B, Kaunas",
        "lat": 54.908069565384,
        "lng": 23.992093859237,
        "prices": {
            "A95": 1.669,
            "A98": null,
            "Diesel": 1.769,
            "LPG": 0.759
        }
    },
    {
        "id": 255,
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Vilnius",
        "address": "Vilnius, Spyglių g. 2",
        "lat": 54.670286831601,
        "lng": 25.121320386193,
        "prices": {
            "A95": 1.729,
            "A98": null,
            "Diesel": 1.829,
            "LPG": 0.819
        }
    },
    {
        "id": 256,
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Kaunas",
        "address": "Ilgakiemio k., Kauno g.25",
        "lat": 54.783719421729,
        "lng": 23.876424433606,
        "prices": {
            "A95": 1.719,
            "A98": null,
            "Diesel": 1.799,
            "LPG": 0.79
        }
    },
    {
        "id": 257,
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Vilnius",
        "address": "Jeruzalės 2, Vilnius",
        "lat": 54.739869872453,
        "lng": 25.276166976092,
        "prices": {
            "A95": 1.739,
            "A98": null,
            "Diesel": 1.799,
            "LPG": 0.789
        }
    },
    {
        "id": 258,
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Jonavos",
        "address": "Vasario 16-osios g.70, Jonava",
        "lat": 55.07089293798,
        "lng": 24.258829068513,
        "prices": {
            "A95": 1.729,
            "A98": null,
            "Diesel": 1.829,
            "LPG": null
        }
    },
    {
        "id": 259,
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Klaipėda",
        "address": "Durpyno 63, Jonušų k.",
        "lat": 55.711660476267,
        "lng": 21.265068902292,
        "prices": {
            "A95": 1.789,
            "A98": null,
            "Diesel": 1.889,
            "LPG": 0.83
        }
    },
    {
        "id": 260,
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Kėdainių",
        "address": "Juodgirio k.1,",
        "lat": 55.20092,
        "lng": 23.62495,
        "prices": {
            "A95": 1.779,
            "A98": null,
            "Diesel": 1.879,
            "LPG": 0.839
        }
    },
    {
        "id": 261,
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Klaipėda",
        "address": "Medelyno g.126 Kalotės k.",
        "lat": 55.790221707798,
        "lng": 21.141633978645,
        "prices": {
            "A95": 1.75,
            "A98": null,
            "Diesel": 1.8,
            "LPG": 0.77
        }
    },
    {
        "id": 262,
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Vilnius",
        "address": "Kareivių g. 4, Vilnius",
        "lat": 54.717899269759,
        "lng": 25.295686584569,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.779,
            "LPG": 0.799
        }
    },
    {
        "id": 263,
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Kaunas",
        "address": "Jonavos g. 292B, Kaunas",
        "lat": 54.932309903639,
        "lng": 23.917895408309,
        "prices": {
            "A95": 1.759,
            "A98": null,
            "Diesel": 1.809,
            "LPG": 0.75
        }
    },
    {
        "id": 264,
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Vilnius",
        "address": "Kirtimų g. 33, Vilnius",
        "lat": 54.627379660787,
        "lng": 25.14931567253,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.799,
            "LPG": 0.819
        }
    },
    {
        "id": 265,
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Vilnius",
        "address": "Laisvės pr. 80B, Vilnius",
        "lat": 54.723450394684,
        "lng": 25.23299053555,
        "prices": {
            "A95": 1.719,
            "A98": null,
            "Diesel": 1.799,
            "LPG": 0.799
        }
    },
    {
        "id": 266,
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Lazdijų",
        "address": "Lazdijų sen., Janaslavo k.11",
        "lat": 54.175715716478,
        "lng": 23.480721172293,
        "prices": {
            "A95": 1.719,
            "A98": null,
            "Diesel": 1.819,
            "LPG": null
        }
    },
    {
        "id": 267,
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Trakų",
        "address": "Sodų g.3A, Lentvaris",
        "lat": 54.643401626797,
        "lng": 25.05342955005,
        "prices": {
            "A95": 1.69,
            "A98": null,
            "Diesel": 1.79,
            "LPG": 0.819
        }
    },
    {
        "id": 268,
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Vilnius",
        "address": "Liepkalnio g.112A, Vilnius",
        "lat": 54.652663965082,
        "lng": 25.30554311597,
        "prices": {
            "A95": 1.749,
            "A98": null,
            "Diesel": 1.829,
            "LPG": 0.79
        }
    },
    {
        "id": 269,
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Kaunas",
        "address": "Liuksemburgo aklg. 27, Kaunas",
        "lat": 54.859298707386,
        "lng": 23.836928570567,
        "prices": {
            "A95": 1.689,
            "A98": null,
            "Diesel": 1.749,
            "LPG": 0.769
        }
    },
    {
        "id": 270,
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Vilnius",
        "address": "Mokyklos g. 26, Maišiagalos mstl.",
        "lat": 54.873246278089,
        "lng": 25.073407229536,
        "prices": {
            "A95": 1.759,
            "A98": null,
            "Diesel": 1.859,
            "LPG": 0.799
        }
    },
    {
        "id": 271,
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Marijampolės",
        "address": "Stoties g. 6B, Marijampolė",
        "lat": 54.56495526925,
        "lng": 23.368437012363,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.799,
            "LPG": 0.78
        }
    },
    {
        "id": 272,
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Kaunas",
        "address": "Masiulio g.16C, Kaunas",
        "lat": 54.88516748179,
        "lng": 24.006218455735,
        "prices": {
            "A95": 1.759,
            "A98": null,
            "Diesel": 1.859,
            "LPG": 0.819
        }
    },
    {
        "id": 273,
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Kaunas",
        "address": "Marijampolės g. 58, Mastaičių k.",
        "lat": 54.809435938862,
        "lng": 23.85366538719,
        "prices": {
            "A95": 1.719,
            "A98": null,
            "Diesel": 1.799,
            "LPG": 0.79
        }
    },
    {
        "id": 274,
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Vilnius",
        "address": "Medininkų k., Pasieniečių g.10",
        "lat": 54.549583571288,
        "lng": 25.68001101058,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 1.899,
            "LPG": null
        }
    },
    {
        "id": 275,
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Klaipėda",
        "address": "Minijos g.154A, Klaipėda",
        "lat": 55.668493926371,
        "lng": 21.159075964782,
        "prices": {
            "A95": 1.75,
            "A98": null,
            "Diesel": 1.8,
            "LPG": 0.75
        }
    },
    {
        "id": 276,
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Kaunas",
        "address": "Savanorių pr.402A, Kaunas",
        "lat": 54.92758146251,
        "lng": 23.972026577206,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.779,
            "LPG": 0.799
        }
    },
    {
        "id": 277,
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Vilnius",
        "address": "Taikos g.1, Kreivalaužių k.",
        "lat": 54.835693633573,
        "lng": 25.460300960327,
        "prices": {
            "A95": 1.7,
            "A98": null,
            "Diesel": 1.76,
            "LPG": 0.79
        }
    },
    {
        "id": 278,
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Panevėžio",
        "address": "Nemuno g.79A, Panevėžys",
        "lat": 55.731910986701,
        "lng": 24.340750856484,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.799,
            "LPG": 0.799
        }
    },
    {
        "id": 279,
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Kaunas",
        "address": "Palemono g. 3A, Kaunas",
        "lat": 54.901003788645,
        "lng": 24.031197952121,
        "prices": {
            "A95": 1.71,
            "A98": null,
            "Diesel": 1.78,
            "LPG": null
        }
    },
    {
        "id": 280,
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Pasvalio",
        "address": "Pasvalys, Taikos g.24",
        "lat": 56.063680837892,
        "lng": 24.425772020792,
        "prices": {
            "A95": 1.749,
            "A98": null,
            "Diesel": 1.839,
            "LPG": 0.79
        }
    },
    {
        "id": 281,
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Kaišiadorių r. sav.",
        "address": "Paukštininkų g.4a, Kaišiadorys",
        "lat": 54.864365148761,
        "lng": 24.436501695046,
        "prices": {
            "A95": 1.749,
            "A98": null,
            "Diesel": 1.849,
            "LPG": 0.79
        }
    },
    {
        "id": 282,
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Marijampolės",
        "address": "Kauno g.165, Pietarių k.",
        "lat": 54.592864073158,
        "lng": 23.389467123612,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.799,
            "LPG": 0.779
        }
    },
    {
        "id": 283,
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Vilnius",
        "address": "Pajautos g. 31, Vilnius (Pilaitė)",
        "lat": 54.710142614651,
        "lng": 25.162037306075,
        "prices": {
            "A95": 1.719,
            "A98": null,
            "Diesel": 1.789,
            "LPG": 0.81
        }
    },
    {
        "id": 284,
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Radviliškio",
        "address": "Miško g.62, Radviliškis",
        "lat": 55.801870751102,
        "lng": 23.564058813995,
        "prices": {
            "A95": 1.749,
            "A98": null,
            "Diesel": 1.849,
            "LPG": 0.79
        }
    },
    {
        "id": 285,
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Panevėžio",
        "address": "Ramygalos g.186A, Panevėžys",
        "lat": 55.710096748411,
        "lng": 24.372400755236,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.799,
            "LPG": 0.79
        }
    },
    {
        "id": 286,
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Raseinių",
        "address": "Raščių k. 1A",
        "lat": 55.278231175166,
        "lng": 23.340148864947,
        "prices": {
            "A95": 1.739,
            "A98": null,
            "Diesel": 1.839,
            "LPG": 0.799
        }
    },
    {
        "id": 287,
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Trakų",
        "address": "Sausių g.2 Sausių k..",
        "lat": 54.707450808355,
        "lng": 24.996059697585,
        "prices": {
            "A95": 1.7,
            "A98": null,
            "Diesel": 1.8,
            "LPG": 0.79
        }
    },
    {
        "id": 288,
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Vilnius",
        "address": "Savanorių 225, Vilnius",
        "lat": 54.641043420248,
        "lng": 25.184203081384,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.799,
            "LPG": 0.819
        }
    },
    {
        "id": 289,
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Pasvalio",
        "address": "Sereikonių k., Baltijos kelio g.2",
        "lat": 55.906393712343,
        "lng": 24.33866485224,
        "prices": {
            "A95": 1.749,
            "A98": null,
            "Diesel": 1.839,
            "LPG": 0.799
        }
    },
    {
        "id": 290,
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Šiaulių",
        "address": "Sembos g.5, Šiauliai",
        "lat": 55.898858632845,
        "lng": 23.271854940463,
        "prices": {
            "A95": 1.729,
            "A98": null,
            "Diesel": 1.819,
            "LPG": 0.77
        }
    },
    {
        "id": 291,
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Panevėžio",
        "address": "Šilagalio k., Panevėžio aplinkl.12",
        "lat": 55.669935990903,
        "lng": 24.346045788539,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.779,
            "LPG": 0.799
        }
    },
    {
        "id": 292,
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Šilutės",
        "address": "Gluosnių g.4A, Šilutė",
        "lat": 55.34891542762,
        "lng": 21.468953248797,
        "prices": {
            "A95": 1.7,
            "A98": null,
            "Diesel": 1.78,
            "LPG": 0.78
        }
    },
    {
        "id": 293,
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Marijampolės",
        "address": "Skaisčiūnų k., Europos g.11",
        "lat": 54.558222120858,
        "lng": 23.274568331802,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.799,
            "LPG": 0.779
        }
    },
    {
        "id": 294,
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Klaipėda",
        "address": "Taikos pr.124, Klaipėda",
        "lat": 55.661136878497,
        "lng": 21.176366825205,
        "prices": {
            "A95": 1.75,
            "A98": null,
            "Diesel": 1.8,
            "LPG": 0.75
        }
    },
    {
        "id": 295,
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Vilnius",
        "address": "Gunkliškių g.2F, Vilnius",
        "lat": 54.622819779731,
        "lng": 25.105362732478,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.799,
            "LPG": 0.819
        }
    },
    {
        "id": 296,
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Kaunas",
        "address": "Vandžiogalos pl.86A, Kaunas",
        "lat": 54.951536313142,
        "lng": 23.893612699534,
        "prices": {
            "A95": 1.79,
            "A98": null,
            "Diesel": 1.84,
            "LPG": 0.8
        }
    },
    {
        "id": 297,
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Vilkaviškio",
        "address": "S.Nėries g.38, Vilkaviškis",
        "lat": 54.65812309862,
        "lng": 23.033138170388,
        "prices": {
            "A95": 1.759,
            "A98": null,
            "Diesel": 1.859,
            "LPG": 0.79
        }
    },
    {
        "id": 298,
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Kaunas",
        "address": "Žemaitkiemis, Stasio Krasausko g. 21",
        "lat": 54.97185144805,
        "lng": 23.859010610664,
        "prices": {
            "A95": 1.739,
            "A98": null,
            "Diesel": 1.839,
            "LPG": 0.799
        }
    },
    {
        "id": 299,
        "name": "Eniris",
        "logo": "⛽",
        "city": "Prienų",
        "address": "Alytaus pl. 2, Mardosų k.",
        "lat": 54.508713327585,
        "lng": 23.909914495381,
        "prices": {
            "A95": 1.69,
            "A98": null,
            "Diesel": 1.78,
            "LPG": 0.88
        }
    },
    {
        "id": 300,
        "name": "Eniris",
        "logo": "⛽",
        "city": "Jurbarko",
        "address": "Tauragės g. 29, Rimšų k.",
        "lat": 55.261861777521,
        "lng": 22.691954980927,
        "prices": {
            "A95": 1.85,
            "A98": null,
            "Diesel": 1.89,
            "LPG": 0.92
        }
    },
    {
        "id": 301,
        "name": "Eniris",
        "logo": "⛽",
        "city": "Kelmės",
        "address": "Puttvinskio g. 29, Kelmė",
        "lat": 55.641154421326,
        "lng": 22.927134839318,
        "prices": {
            "A95": 1.739,
            "A98": null,
            "Diesel": 1.809,
            "LPG": 0.769
        }
    },
    {
        "id": 302,
        "name": "Eniris",
        "logo": "⛽",
        "city": "Kretingos",
        "address": "Tiekėjų g. 34a, Kretinga",
        "lat": 55.88440399891,
        "lng": 21.221761955517,
        "prices": {
            "A95": 1.87,
            "A98": null,
            "Diesel": 1.97,
            "LPG": 0.93
        }
    },
    {
        "id": 303,
        "name": "Eniris",
        "logo": "⛽",
        "city": "Šilalės",
        "address": "Paršežerio g.1, Vabalų k.",
        "lat": 55.619490051465,
        "lng": 22.246164634007,
        "prices": {
            "A95": 1.79,
            "A98": null,
            "Diesel": 1.89,
            "LPG": 0.89
        }
    },
    {
        "id": 304,
        "name": "Eniris",
        "logo": "⛽",
        "city": "Pagėgių",
        "address": "Klaipėdos g. 6b, Pagėgiai",
        "lat": 55.140442114854,
        "lng": 21.903148657597,
        "prices": {
            "A95": 1.77,
            "A98": null,
            "Diesel": 1.88,
            "LPG": 0.94
        }
    },
    {
        "id": 305,
        "name": "Eniris",
        "logo": "⛽",
        "city": "Plungės",
        "address": "Dariaus ir Girėno g. 31, Plungė",
        "lat": 55.919865903407,
        "lng": 21.856997395799,
        "prices": {
            "A95": 1.69,
            "A98": null,
            "Diesel": 1.79,
            "LPG": null
        }
    },
    {
        "id": 306,
        "name": "Eniris",
        "logo": "⛽",
        "city": "Telšių",
        "address": "Telšių g. 2 b, Rainių k.",
        "lat": 55.956567575204,
        "lng": 22.301034416212,
        "prices": {
            "A95": 1.74,
            "A98": null,
            "Diesel": 1.82,
            "LPG": 0.88
        }
    },
    {
        "id": 307,
        "name": "Eniris",
        "logo": "⛽",
        "city": "Raseinių",
        "address": "Jurbarko g. 34, Raseiniai",
        "lat": 55.370632896838,
        "lng": 23.119425840266,
        "prices": {
            "A95": 1.78,
            "A98": null,
            "Diesel": 1.85,
            "LPG": 0.77
        }
    },
    {
        "id": 308,
        "name": "Eniris",
        "logo": "⛽",
        "city": "Kretingos",
        "address": "Platelių g. 1 a, Laivių k.",
        "lat": 56.064771910228,
        "lng": 21.589025269071,
        "prices": {
            "A95": 1.88,
            "A98": null,
            "Diesel": 1.98,
            "LPG": 0.96
        }
    },
    {
        "id": 309,
        "name": "Eniris",
        "logo": "⛽",
        "city": "Tauragės",
        "address": "Adakavo g. 1, Skaudvilė",
        "lat": 55.401576284972,
        "lng": 22.597756303194,
        "prices": {
            "A95": 1.79,
            "A98": null,
            "Diesel": 1.89,
            "LPG": 0.94
        }
    },
    {
        "id": 310,
        "name": "Eniris",
        "logo": "⛽",
        "city": "Šilalės",
        "address": "Rytinio Kelio g. 2a, Šilalė",
        "lat": 55.485882766305,
        "lng": 22.199427728634,
        "prices": {
            "A95": 1.77,
            "A98": null,
            "Diesel": 1.8,
            "LPG": 0.78
        }
    },
    {
        "id": 311,
        "name": "Eniris",
        "logo": "⛽",
        "city": "Telšių",
        "address": "Mažeikių g. 1, Telšiai",
        "lat": 55.999795145355,
        "lng": 22.241610326917,
        "prices": {
            "A95": 1.73,
            "A98": null,
            "Diesel": 1.83,
            "LPG": 0.87
        }
    },
    {
        "id": 312,
        "name": "Eniris",
        "logo": "⛽",
        "city": "Šilutės",
        "address": "Klaipėdos g. 76, Žemaičių Naumiestis",
        "lat": 55.355057424968,
        "lng": 21.680949583884,
        "prices": {
            "A95": 1.77,
            "A98": null,
            "Diesel": 1.83,
            "LPG": 0.84
        }
    },
    {
        "id": 313,
        "name": "Eniris",
        "logo": "⛽",
        "city": "Plungės",
        "address": "Minijos g. 1, Aleksandravo k.",
        "lat": 55.928882526201,
        "lng": 21.619915264482,
        "prices": {
            "A95": 1.79,
            "A98": null,
            "Diesel": 1.89,
            "LPG": 0.93
        }
    },
    {
        "id": 314,
        "name": "Eniris",
        "logo": "⛽",
        "city": "Akmenės",
        "address": "Plento g.2, Ventos m.",
        "lat": 56.194312631243,
        "lng": 22.678027945886,
        "prices": {
            "A95": 1.779,
            "A98": null,
            "Diesel": 1.829,
            "LPG": 0.859
        }
    },
    {
        "id": 315,
        "name": "Eniris",
        "logo": "⛽",
        "city": "Kaišiadorių r. sav.",
        "address": "Bačkonių k., Pastrėvio g. 1A,",
        "lat": 54.802429547907,
        "lng": 24.502153706039,
        "prices": {
            "A95": 1.789,
            "A98": null,
            "Diesel": 1.869,
            "LPG": 0.859
        }
    },
    {
        "id": 316,
        "name": "Eniris",
        "logo": "⛽",
        "city": "Mažeikių",
        "address": "Laižuvos g. 82 d, Mažeikiai,",
        "lat": 56.313737945777,
        "lng": 22.368050498128,
        "prices": {
            "A95": 1.769,
            "A98": null,
            "Diesel": 1.839,
            "LPG": 0.839
        }
    },
    {
        "id": 317,
        "name": "Eniris",
        "logo": "⛽",
        "city": "Skuodo",
        "address": "Skuodo g. 7, Stripinių k.",
        "lat": 56.283869872002,
        "lng": 21.833118275662,
        "prices": {
            "A95": 1.779,
            "A98": null,
            "Diesel": 1.829,
            "LPG": 0.799
        }
    },
    {
        "id": 318,
        "name": "Eniris",
        "logo": "⛽",
        "city": "Lazdijų",
        "address": "Alytaus g. 59, Krosnos k.",
        "lat": 54.379110035663,
        "lng": 23.528594311107,
        "prices": {
            "A95": 1.739,
            "A98": null,
            "Diesel": 1.849,
            "LPG": 0.849
        }
    },
    {
        "id": 319,
        "name": "Eniris",
        "logo": "⛽",
        "city": "Kelmės",
        "address": "Žemaitės g. 52, Užventis",
        "lat": 55.786497517556,
        "lng": 22.67107045332,
        "prices": {
            "A95": 1.76,
            "A98": null,
            "Diesel": 1.82,
            "LPG": 0.95
        }
    },
    {
        "id": 320,
        "name": "Eniris",
        "logo": "⛽",
        "city": "Kėdainių",
        "address": "Ruoščių k. 1",
        "lat": 55.332148280673,
        "lng": 23.918047949138,
        "prices": {
            "A95": 1.783,
            "A98": null,
            "Diesel": 1.854,
            "LPG": 0.92
        }
    },
    {
        "id": 321,
        "name": "Eniris",
        "logo": "⛽",
        "city": "Akmenės",
        "address": "Skabeikių k. 4",
        "lat": 56.159520168391,
        "lng": 22.761772600623,
        "prices": {
            "A95": 1.779,
            "A98": null,
            "Diesel": 1.829,
            "LPG": 0.799
        }
    },
    {
        "id": 322,
        "name": "Eniris",
        "logo": "⛽",
        "city": "Vilnius",
        "address": "Kalnuotės 1 k.",
        "lat": 54.939086569333,
        "lng": 25.341164513702,
        "prices": {
            "A95": 1.719,
            "A98": null,
            "Diesel": 1.809,
            "LPG": 0.899
        }
    },
    {
        "id": 323,
        "name": "Eniris",
        "logo": "⛽",
        "city": "Telšių",
        "address": "Beržų g. 24/Drąsiųjų 7, Tryškiai",
        "lat": 56.062051312096,
        "lng": 22.58243493856,
        "prices": {
            "A95": 1.78,
            "A98": null,
            "Diesel": 1.84,
            "LPG": 0.85
        }
    },
    {
        "id": 324,
        "name": "Eu Verslas",
        "logo": "⛽",
        "city": "Mažeikių",
        "address": "Viekšnių g. 24, Mažeikiai",
        "lat": 56.304210529804,
        "lng": 22.360247281548,
        "prices": {
            "A95": 1.639,
            "A98": null,
            "Diesel": 1.739,
            "LPG": 0.829
        }
    },
    {
        "id": 325,
        "name": "Eu Verslas",
        "logo": "⛽",
        "city": "Plungės",
        "address": "Telšių g. 127, Jovaišiškės k.",
        "lat": 55.908228846224,
        "lng": 21.871460788823,
        "prices": {
            "A95": 1.679,
            "A98": null,
            "Diesel": 1.779,
            "LPG": 0.75
        }
    },
    {
        "id": 326,
        "name": "Eu Verslas",
        "logo": "⛽",
        "city": "Plungės",
        "address": "Stoties g. 7C, Plungė",
        "lat": 55.920472627469,
        "lng": 21.832112698738,
        "prices": {
            "A95": 1.68,
            "A98": null,
            "Diesel": 1.78,
            "LPG": 0.75
        }
    },
    {
        "id": 327,
        "name": "Eu Verslas",
        "logo": "⛽",
        "city": "Plungės",
        "address": "Rietavo g. 107, Pakerų k.",
        "lat": 55.896651342463,
        "lng": 21.864482686792,
        "prices": {
            "A95": 1.679,
            "A98": null,
            "Diesel": 1.789,
            "LPG": null
        }
    },
    {
        "id": 328,
        "name": "Gazimpeksas",
        "logo": "⛽",
        "city": "Telšių",
        "address": "Telšiai, Mažeikių g. 7A",
        "lat": 56.000531160273,
        "lng": 22.247236847061,
        "prices": {
            "A95": null,
            "A98": null,
            "Diesel": null,
            "LPG": 0.82
        }
    },
    {
        "id": 329,
        "name": "Gelvybė",
        "logo": "⛽",
        "city": "Šakių",
        "address": "V. Kudirkos g. 11D, Šakiai",
        "lat": 54.954086297636,
        "lng": 23.024640680768,
        "prices": {
            "A95": 1.73,
            "A98": null,
            "Diesel": 1.81,
            "LPG": 0.79
        }
    },
    {
        "id": 330,
        "name": "Gelvybė",
        "logo": "⛽",
        "city": "Jurbarko",
        "address": "Muitinės g. 32, Jurbarkas",
        "lat": 55.077233973461,
        "lng": 22.750983276754,
        "prices": {
            "A95": 1.73,
            "A98": null,
            "Diesel": 1.81,
            "LPG": 0.79
        }
    },
    {
        "id": 331,
        "name": "Gelvybė",
        "logo": "⛽",
        "city": "Jurbarko",
        "address": "Knygnešių g. 9, Jurbarkas",
        "lat": 55.085607117547,
        "lng": 22.745631515396,
        "prices": {
            "A95": 1.73,
            "A98": null,
            "Diesel": 1.81,
            "LPG": 0.79
        }
    },
    {
        "id": 332,
        "name": "Gelvybė",
        "logo": "⛽",
        "city": "Kėdainių",
        "address": "Aristavos g. 4, Aristava",
        "lat": 55.297163000934,
        "lng": 24.076998682729,
        "prices": {
            "A95": 1.73,
            "A98": null,
            "Diesel": 1.81,
            "LPG": 0.79
        }
    },
    {
        "id": 333,
        "name": "Gelvybė",
        "logo": "⛽",
        "city": "Šakių",
        "address": "Mozūriškiai, Mozūriškių 10",
        "lat": 55.034516548925,
        "lng": 22.965399266555,
        "prices": {
            "A95": 1.73,
            "A98": null,
            "Diesel": 1.81,
            "LPG": null
        }
    },
    {
        "id": 334,
        "name": "Gelvybė",
        "logo": "⛽",
        "city": "Šakių",
        "address": "Sūduvos g. 3, Kiduliai",
        "lat": 55.063888223406,
        "lng": 22.780863001375,
        "prices": {
            "A95": 1.73,
            "A98": null,
            "Diesel": 1.81,
            "LPG": 0.79
        }
    },
    {
        "id": 335,
        "name": "Gelvybė",
        "logo": "⛽",
        "city": "Šakių",
        "address": "Kauno g. 50, Girėnai",
        "lat": 54.952786348272,
        "lng": 23.080360052679,
        "prices": {
            "A95": 1.73,
            "A98": null,
            "Diesel": 1.81,
            "LPG": 0.79
        }
    },
    {
        "id": 336,
        "name": "Gelvybė",
        "logo": "⛽",
        "city": "Jurbarko",
        "address": "S. Šimkaus g. 69, Seredžius",
        "lat": 55.078881933195,
        "lng": 23.395961482915,
        "prices": {
            "A95": 1.73,
            "A98": null,
            "Diesel": 1.81,
            "LPG": null
        }
    },
    {
        "id": 337,
        "name": "Gelvybė",
        "logo": "⛽",
        "city": "Vilkaviškio",
        "address": "Marijampolės g. 8, Rūdos k.",
        "lat": 54.601898256038,
        "lng": 23.194939663259,
        "prices": {
            "A95": 1.73,
            "A98": null,
            "Diesel": 1.81,
            "LPG": 0.79
        }
    },
    {
        "id": 338,
        "name": "Gelvybė",
        "logo": "⛽",
        "city": "Jurbarko",
        "address": "S. Daukanto g. 66, Jurbarkas",
        "lat": 55.082467382346,
        "lng": 22.78874023016,
        "prices": {
            "A95": 1.73,
            "A98": null,
            "Diesel": 1.81,
            "LPG": 0.79
        }
    },
    {
        "id": 339,
        "name": "GM (Circle K)",
        "logo": "🔴",
        "city": "Šakių",
        "address": "Kauno g. 68, Girėnų k.",
        "lat": 54.952746576142,
        "lng": 23.083420872261,
        "prices": {
            "A95": 1.857,
            "A98": null,
            "Diesel": 1.947,
            "LPG": 0.957
        }
    },
    {
        "id": 340,
        "name": "GM (Circle K)",
        "logo": "🔴",
        "city": "Jurbarko",
        "address": "Muitinės g. 34A, Jurbarkas",
        "lat": 55.076804400923,
        "lng": 22.752030344099,
        "prices": {
            "A95": 1.857,
            "A98": null,
            "Diesel": 1.947,
            "LPG": null
        }
    },
    {
        "id": 341,
        "name": "Jozita",
        "logo": "🟡",
        "city": "Šilalės",
        "address": "Šolių k., Pietinio Kelio g. 9",
        "lat": 55.485378050006,
        "lng": 22.171442314131,
        "prices": {
            "A95": 1.75,
            "A98": null,
            "Diesel": 1.8,
            "LPG": 0.73
        }
    },
    {
        "id": 342,
        "name": "Jozita",
        "logo": "🟡",
        "city": "Vilnius",
        "address": "Vilnius, Ukmergės g. 130",
        "lat": 54.703151143483,
        "lng": 25.257526880716,
        "prices": {
            "A95": 1.75,
            "A98": null,
            "Diesel": 1.8,
            "LPG": 0.73
        }
    },
    {
        "id": 343,
        "name": "Jozita",
        "logo": "🟡",
        "city": "Vilnius",
        "address": "Vilnius, Parko g. 64",
        "lat": 54.685892679117,
        "lng": 25.430597255673,
        "prices": {
            "A95": 1.75,
            "A98": null,
            "Diesel": 1.8,
            "LPG": 0.73
        }
    },
    {
        "id": 344,
        "name": "Jozita",
        "logo": "🟡",
        "city": "Vilnius",
        "address": "Vilnius, Pramonės g. 18",
        "lat": 54.695850002903,
        "lng": 25.432049085122,
        "prices": {
            "A95": 1.75,
            "A98": null,
            "Diesel": 1.8,
            "LPG": 0.73
        }
    },
    {
        "id": 345,
        "name": "Jozita",
        "logo": "🟡",
        "city": "Vilnius",
        "address": "Rudamina, Jašiūnų g. 2",
        "lat": 54.629793400238,
        "lng": 25.228928583637,
        "prices": {
            "A95": 1.75,
            "A98": null,
            "Diesel": 1.8,
            "LPG": 0.73
        }
    },
    {
        "id": 346,
        "name": "Jozita",
        "logo": "🟡",
        "city": "Vilnius",
        "address": "Vilnius, Baltosios Vokės g 35",
        "lat": 54.613233858074,
        "lng": 25.184045753062,
        "prices": {
            "A95": null,
            "A98": null,
            "Diesel": null,
            "LPG": 0.73
        }
    },
    {
        "id": 347,
        "name": "Jozita",
        "logo": "🟡",
        "city": "Kaunas",
        "address": "Kaunas, Kuršių 13A",
        "lat": 54.936165285733,
        "lng": 23.89569753031,
        "prices": {
            "A95": 1.75,
            "A98": null,
            "Diesel": 1.8,
            "LPG": 0.73
        }
    },
    {
        "id": 348,
        "name": "Jozita",
        "logo": "🟡",
        "city": "Kaunas",
        "address": "Kaunas, Jonavos g. 51",
        "lat": 54.934034941222,
        "lng": 23.91787629757,
        "prices": {
            "A95": 1.75,
            "A98": null,
            "Diesel": 1.8,
            "LPG": 0.73
        }
    },
    {
        "id": 349,
        "name": "Jozita",
        "logo": "🟡",
        "city": "Kaunas",
        "address": "Kaunas, Betygalos g. 8",
        "lat": 54.904524229888,
        "lng": 23.879734614808,
        "prices": {
            "A95": 1.75,
            "A98": null,
            "Diesel": 1.8,
            "LPG": 0.73
        }
    },
    {
        "id": 350,
        "name": "Jozita",
        "logo": "🟡",
        "city": "Kaunas",
        "address": "Kaunas, Baltų pr. 141A",
        "lat": 54.922806920913,
        "lng": 23.869743134766,
        "prices": {
            "A95": 1.75,
            "A98": null,
            "Diesel": 1.8,
            "LPG": 0.73
        }
    },
    {
        "id": 351,
        "name": "Jozita",
        "logo": "🟡",
        "city": "Kaunas",
        "address": "Kaunas, Partizanų g. 87G",
        "lat": 54.927297190264,
        "lng": 23.9991575405,
        "prices": {
            "A95": 1.75,
            "A98": null,
            "Diesel": 1.8,
            "LPG": 0.73
        }
    },
    {
        "id": 352,
        "name": "Jozita",
        "logo": "🟡",
        "city": "Kaunas",
        "address": "Garliava, Vytauto g. 111A",
        "lat": 54.828119368678,
        "lng": 23.873020626545,
        "prices": {
            "A95": 1.75,
            "A98": null,
            "Diesel": 1.8,
            "LPG": 0.73
        }
    },
    {
        "id": 353,
        "name": "Jozita",
        "logo": "🟡",
        "city": "Kaunas",
        "address": "Ramučiai, K. Bielinio g. 2A",
        "lat": 54.944066319123,
        "lng": 24.036069765704,
        "prices": {
            "A95": 1.75,
            "A98": null,
            "Diesel": 1.8,
            "LPG": 0.73
        }
    },
    {
        "id": 354,
        "name": "Jozita",
        "logo": "🟡",
        "city": "Klaipėda",
        "address": "Klipščių k., Šilelių g.1",
        "lat": 55.751443042304,
        "lng": 21.173204752232,
        "prices": {
            "A95": 1.75,
            "A98": null,
            "Diesel": 1.8,
            "LPG": 0.73
        }
    },
    {
        "id": 355,
        "name": "Jozita",
        "logo": "🟡",
        "city": "Klaipėda",
        "address": "Klaipėda, Taikos pr. 157",
        "lat": 55.661157288431,
        "lng": 21.178034740117,
        "prices": {
            "A95": 1.75,
            "A98": null,
            "Diesel": 1.8,
            "LPG": 0.73
        }
    },
    {
        "id": 356,
        "name": "Jozita",
        "logo": "🟡",
        "city": "Klaipėda",
        "address": "Gargždai, Gamyklos g. 1",
        "lat": 55.706519268316,
        "lng": 21.363618542144,
        "prices": {
            "A95": 1.75,
            "A98": null,
            "Diesel": 1.8,
            "LPG": 0.73
        }
    },
    {
        "id": 357,
        "name": "Jozita",
        "logo": "🟡",
        "city": "Klaipėda",
        "address": "Trepkalnių k., Mokyklos g. 2",
        "lat": 55.608507411372,
        "lng": 21.59396061748,
        "prices": {
            "A95": 1.75,
            "A98": null,
            "Diesel": 1.8,
            "LPG": 0.73
        }
    },
    {
        "id": 358,
        "name": "Jozita",
        "logo": "🟡",
        "city": "Šiaulių",
        "address": "Šiauliai, Architektų g. 80",
        "lat": 55.924587806652,
        "lng": 23.279548605568,
        "prices": {
            "A95": 1.75,
            "A98": null,
            "Diesel": 1.8,
            "LPG": 0.73
        }
    },
    {
        "id": 359,
        "name": "Jozita",
        "logo": "🟡",
        "city": "Šiaulių",
        "address": "Šiauliai, Girulių g. 1",
        "lat": 55.922226959803,
        "lng": 23.296967373834,
        "prices": {
            "A95": 1.75,
            "A98": null,
            "Diesel": 1.8,
            "LPG": 0.73
        }
    },
    {
        "id": 360,
        "name": "Jozita",
        "logo": "🟡",
        "city": "Šiaulių",
        "address": "Toliočiai, Plento g. 2B",
        "lat": 55.954344736391,
        "lng": 23.25595438632,
        "prices": {
            "A95": 1.75,
            "A98": null,
            "Diesel": 1.8,
            "LPG": 0.73
        }
    },
    {
        "id": 361,
        "name": "Jozita",
        "logo": "🟡",
        "city": "Kelmės",
        "address": "Kelmė, V.Putvinskio g. 37",
        "lat": 55.643414224332,
        "lng": 22.925627437851,
        "prices": {
            "A95": 1.75,
            "A98": null,
            "Diesel": 1.8,
            "LPG": 0.73
        }
    },
    {
        "id": 362,
        "name": "Jozita",
        "logo": "🟡",
        "city": "Raseinių",
        "address": "Raseiniai, Liepų g. 10e",
        "lat": 55.391360924296,
        "lng": 23.127078350227,
        "prices": {
            "A95": null,
            "A98": null,
            "Diesel": null,
            "LPG": 0.73
        }
    },
    {
        "id": 363,
        "name": "Jozita",
        "logo": "🟡",
        "city": "Raseinių",
        "address": "Raseiniai, Maironio g. 78b",
        "lat": 55.389994422621,
        "lng": 23.130738643525,
        "prices": {
            "A95": 1.75,
            "A98": null,
            "Diesel": 1.8,
            "LPG": 0.73
        }
    },
    {
        "id": 364,
        "name": "Jozita",
        "logo": "🟡",
        "city": "Šilutės",
        "address": "Šilutė, Šiaurės g. 1",
        "lat": 55.356546563728,
        "lng": 21.469002534388,
        "prices": {
            "A95": null,
            "A98": null,
            "Diesel": null,
            "LPG": 0.73
        }
    },
    {
        "id": 365,
        "name": "Jozita",
        "logo": "🟡",
        "city": "Pakruojo",
        "address": "Kuosiškių k. 4",
        "lat": 55.965915990244,
        "lng": 23.879809345198,
        "prices": {
            "A95": 1.75,
            "A98": null,
            "Diesel": 1.8,
            "LPG": 0.73
        }
    },
    {
        "id": 366,
        "name": "Jozita",
        "logo": "🟡",
        "city": "Šilutės",
        "address": "Traksėdžių k., Klaipėdos. 1",
        "lat": 55.376161536,
        "lng": 21.460126895,
        "prices": {
            "A95": 1.75,
            "A98": null,
            "Diesel": 1.8,
            "LPG": 0.73
        }
    },
    {
        "id": 367,
        "name": "Jozita",
        "logo": "🟡",
        "city": "Plungės",
        "address": "Varkaliai, Žemaičių g. 2A",
        "lat": 55.897047010202,
        "lng": 21.821425353094,
        "prices": {
            "A95": 1.75,
            "A98": null,
            "Diesel": 1.8,
            "LPG": 0.73
        }
    },
    {
        "id": 368,
        "name": "Jozita",
        "logo": "🟡",
        "city": "Tauragės",
        "address": "Papušynės k, Šilalės g. 105",
        "lat": 55.271722206507,
        "lng": 22.286408581904,
        "prices": {
            "A95": 1.65,
            "A98": null,
            "Diesel": 1.72,
            "LPG": 0.72
        }
    },
    {
        "id": 369,
        "name": "Jozita",
        "logo": "🟡",
        "city": "Panevėžio",
        "address": "Panevėžys, S. Kerbedžio g. 7F",
        "lat": 55.744787056812,
        "lng": 24.346261957822,
        "prices": {
            "A95": 1.75,
            "A98": null,
            "Diesel": 1.8,
            "LPG": 0.73
        }
    },
    {
        "id": 370,
        "name": "Jozita",
        "logo": "🟡",
        "city": "Klaipėda",
        "address": "Klaipėda, Priestočio g. 26",
        "lat": 55.71934951312,
        "lng": 21.140552187119,
        "prices": {
            "A95": null,
            "A98": null,
            "Diesel": null,
            "LPG": 0.73
        }
    },
    {
        "id": 371,
        "name": "Junasa",
        "logo": "⛽",
        "city": "Šiaulių",
        "address": "Žemaitės g. 131c",
        "lat": 55.948087603761,
        "lng": 23.320481378269,
        "prices": {
            "A95": 1.729,
            "A98": null,
            "Diesel": 1.799,
            "LPG": 0.8
        }
    },
    {
        "id": 372,
        "name": "Junasa",
        "logo": "⛽",
        "city": "Šiaulių",
        "address": "Bačiūnų g. 12a",
        "lat": 55.897986328182,
        "lng": 23.352088277858,
        "prices": {
            "A95": 1.729,
            "A98": null,
            "Diesel": 1.799,
            "LPG": 0.8
        }
    },
    {
        "id": 373,
        "name": "Junasa",
        "logo": "⛽",
        "city": "Šiaulių",
        "address": "M. Katiliškio g. 50, Gruzdžiai",
        "lat": 56.099315074319,
        "lng": 23.265858191655,
        "prices": {
            "A95": 1.759,
            "A98": null,
            "Diesel": 1.829,
            "LPG": 0.8
        }
    },
    {
        "id": 374,
        "name": "Kriketas",
        "logo": "⛽",
        "city": "Trakų",
        "address": "Senkelio g. 13, Trakai",
        "lat": 54.630719289507,
        "lng": 24.922943925408,
        "prices": {
            "A95": 1.709,
            "A98": null,
            "Diesel": 1.809,
            "LPG": 0.959
        }
    },
    {
        "id": 375,
        "name": "Lašų ŽŪB",
        "logo": "⛽",
        "city": "Rokiškio",
        "address": "Vytėnų vs 9, Vytėnai",
        "lat": 55.855608051917,
        "lng": 25.731252198589,
        "prices": {
            "A95": 1.87,
            "A98": null,
            "Diesel": 1.97,
            "LPG": null
        }
    },
    {
        "id": 376,
        "name": "Leosta",
        "logo": "⛽",
        "city": "Telšių",
        "address": "Telšių g. 66, LT-88238, Luokė",
        "lat": 55.90133150383,
        "lng": 22.50631233794,
        "prices": {
            "A95": 1.74,
            "A98": null,
            "Diesel": 1.84,
            "LPG": 0.88
        }
    },
    {
        "id": 377,
        "name": "Littaura",
        "logo": "⛽",
        "city": "Tauragės",
        "address": "Pramonės g. 6, Tauragė",
        "lat": 55.238328788075,
        "lng": 22.297767904726,
        "prices": {
            "A95": 1.68,
            "A98": null,
            "Diesel": 1.79,
            "LPG": null
        }
    },
    {
        "id": 378,
        "name": "M.Augustinaičio IĮ",
        "logo": "⛽",
        "city": "Kėdainių",
        "address": "Kėdainių g. 44 Šingalių k.",
        "lat": 55.249597837799,
        "lng": 23.851864116197,
        "prices": {
            "A95": 1.72,
            "A98": null,
            "Diesel": 1.82,
            "LPG": 0.89
        }
    },
    {
        "id": 379,
        "name": "Medelsta",
        "logo": "⛽",
        "city": "Vilnius",
        "address": "Pagirių k., Durpių g.45",
        "lat": 54.569190603015,
        "lng": 25.188073425176,
        "prices": {
            "A95": 1.71,
            "A98": null,
            "Diesel": 1.81,
            "LPG": 0.9
        }
    },
    {
        "id": 380,
        "name": "Melkasta",
        "logo": "⛽",
        "city": "Lazdijų",
        "address": "Kalvelių k., Lazdijų pl. 29",
        "lat": 54.106043765371,
        "lng": 23.673755882156,
        "prices": {
            "A95": 1.74,
            "A98": null,
            "Diesel": 1.84,
            "LPG": 0.79
        }
    },
    {
        "id": 381,
        "name": "Melkasta",
        "logo": "⛽",
        "city": "Vilkaviškio",
        "address": "Gulbiniškių k. 7",
        "lat": 54.712335027515,
        "lng": 23.207304205676,
        "prices": {
            "A95": 1.74,
            "A98": null,
            "Diesel": 1.84,
            "LPG": 0.79
        }
    },
    {
        "id": 382,
        "name": "Melkasta",
        "logo": "⛽",
        "city": "Lazdijų",
        "address": "Seirijų mstl., Algirdo g. 35A",
        "lat": 54.23949958954,
        "lng": 23.823059370659,
        "prices": {
            "A95": 1.74,
            "A98": null,
            "Diesel": 1.84,
            "LPG": 0.79
        }
    },
    {
        "id": 383,
        "name": "Mindega",
        "logo": "⛽",
        "city": "Kėdainių",
        "address": "Ramygalos g 55, Šėta",
        "lat": 55.29090832407,
        "lng": 24.253539438576,
        "prices": {
            "A95": 1.73,
            "A98": null,
            "Diesel": 1.82,
            "LPG": null
        }
    },
    {
        "id": 384,
        "name": "Naftrus",
        "logo": "⛽",
        "city": "Raseinių",
        "address": "Šilo g. 1, Ylių k.",
        "lat": 55.412978606957,
        "lng": 22.821811029139,
        "prices": {
            "A95": 1.78,
            "A98": null,
            "Diesel": 1.8,
            "LPG": 0.8
        }
    },
    {
        "id": 385,
        "name": "Naftrus",
        "logo": "⛽",
        "city": "Raseinių",
        "address": "Pievų g. 17, Slabados k.",
        "lat": 55.385884063032,
        "lng": 23.043490742819,
        "prices": {
            "A95": 1.77,
            "A98": null,
            "Diesel": 1.82,
            "LPG": 0.75
        }
    },
    {
        "id": 386,
        "name": "Naftrus",
        "logo": "⛽",
        "city": "Pakruojo",
        "address": "Topolių g. 1, Degučių k.",
        "lat": 55.970722472282,
        "lng": 23.587423704372,
        "prices": {
            "A95": 1.679,
            "A98": null,
            "Diesel": 1.769,
            "LPG": 0.8
        }
    },
    {
        "id": 387,
        "name": "Naftrus",
        "logo": "⛽",
        "city": "Raseinių",
        "address": "Vilniaus g. 3B, Raseiniai",
        "lat": 55.370428587948,
        "lng": 23.132319302825,
        "prices": {
            "A95": 1.789,
            "A98": null,
            "Diesel": 1.919,
            "LPG": 0.79
        }
    },
    {
        "id": 388,
        "name": "Narjanta",
        "logo": "⛽",
        "city": "Kupiškio",
        "address": "Kikonių g. 10, Aleksandrijos k.",
        "lat": 55.824341585778,
        "lng": 25.001344403718,
        "prices": {
            "A95": 1.829,
            "A98": null,
            "Diesel": 1.859,
            "LPG": 0.969
        }
    },
    {
        "id": 389,
        "name": "Narjanta",
        "logo": "⛽",
        "city": "Anykščių",
        "address": "Pumpučių g. 25, Pumpučiai",
        "lat": 55.424320034415,
        "lng": 24.920140274298,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 1.879,
            "LPG": 0.849
        }
    },
    {
        "id": 390,
        "name": "Narjanta",
        "logo": "⛽",
        "city": "Anykščių",
        "address": "Sausalaukės k. 2",
        "lat": 55.675989372192,
        "lng": 25.358614543098,
        "prices": {
            "A95": 1.829,
            "A98": null,
            "Diesel": 1.939,
            "LPG": 0.899
        }
    },
    {
        "id": 391,
        "name": "Narjanta",
        "logo": "⛽",
        "city": "Anykščių",
        "address": "Vilniaus g. 32, Troškūnai",
        "lat": 55.585327541086,
        "lng": 24.876454159829,
        "prices": {
            "A95": 1.829,
            "A98": null,
            "Diesel": 1.919,
            "LPG": 0.859
        }
    },
    {
        "id": 392,
        "name": "Narjanta",
        "logo": "⛽",
        "city": "Biržų r. sav.",
        "address": "S. Nėries g. 35, Vabalninkas",
        "lat": 55.974921805772,
        "lng": 24.740243090661,
        "prices": {
            "A95": 1.829,
            "A98": null,
            "Diesel": 1.929,
            "LPG": 0.87
        }
    },
    {
        "id": 393,
        "name": "Narjanta",
        "logo": "⛽",
        "city": "Kupiškio",
        "address": "Dvariškių vs. 2",
        "lat": 55.773387076169,
        "lng": 24.754009233221,
        "prices": {
            "A95": 1.829,
            "A98": null,
            "Diesel": 1.919,
            "LPG": 0.879
        }
    },
    {
        "id": 394,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Servečės g. 2, Vilnius",
        "lat": 54.63369710121,
        "lng": 25.30448615798,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.789,
            "LPG": null
        }
    },
    {
        "id": 395,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Ukmergės g. 296, Vilnius",
        "lat": 54.73616586753,
        "lng": 25.231155988402,
        "prices": {
            "A95": 1.679,
            "A98": null,
            "Diesel": 1.769,
            "LPG": null
        }
    },
    {
        "id": 396,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Talino g. 2C, Vilnius",
        "lat": 54.71377076335,
        "lng": 25.209105715719,
        "prices": {
            "A95": 1.679,
            "A98": null,
            "Diesel": 1.764,
            "LPG": null
        }
    },
    {
        "id": 397,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Erfurto g. 41, Vilnius",
        "lat": 54.672643740043,
        "lng": 25.198177474178,
        "prices": {
            "A95": 1.674,
            "A98": null,
            "Diesel": 1.774,
            "LPG": null
        }
    },
    {
        "id": 398,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Geležinio Vilko g. 63, Vilnius",
        "lat": 54.712098028842,
        "lng": 25.270731814797,
        "prices": {
            "A95": 1.669,
            "A98": null,
            "Diesel": 1.769,
            "LPG": null
        }
    },
    {
        "id": 399,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "S. Stanevičiaus g. 3, Vilnius",
        "lat": 54.721423650496,
        "lng": 25.25622969738,
        "prices": {
            "A95": 1.679,
            "A98": null,
            "Diesel": 1.769,
            "LPG": null
        }
    },
    {
        "id": 400,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Žirmūnų g. 68B, Vilnius",
        "lat": 54.717499369158,
        "lng": 25.304490348932,
        "prices": {
            "A95": 1.679,
            "A98": null,
            "Diesel": 1.774,
            "LPG": null
        }
    },
    {
        "id": 401,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Rygos g. 2, Vilnius",
        "lat": 54.715574884189,
        "lng": 25.228964372179,
        "prices": {
            "A95": 1.689,
            "A98": null,
            "Diesel": 1.779,
            "LPG": null
        }
    },
    {
        "id": 402,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Savanorių pr. 220A, Vilnius",
        "lat": 54.644301172646,
        "lng": 25.207368231009,
        "prices": {
            "A95": 1.719,
            "A98": null,
            "Diesel": 1.799,
            "LPG": null
        }
    },
    {
        "id": 403,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Parodų g. 1A, Vilnius",
        "lat": 54.673427322262,
        "lng": 25.224062970478,
        "prices": {
            "A95": 1.684,
            "A98": null,
            "Diesel": 1.784,
            "LPG": null
        }
    },
    {
        "id": 404,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Kauno g. 26, Vilnius",
        "lat": 54.671722820341,
        "lng": 25.270059921439,
        "prices": {
            "A95": 1.734,
            "A98": null,
            "Diesel": 1.799,
            "LPG": null
        }
    },
    {
        "id": 405,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Savanorių pr. 187, Vilnius",
        "lat": 54.646983465481,
        "lng": 25.21051580329,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.789,
            "LPG": null
        }
    },
    {
        "id": 406,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Kedrų g. 2, Vilnius",
        "lat": 54.677162591683,
        "lng": 25.255948149253,
        "prices": {
            "A95": 1.769,
            "A98": null,
            "Diesel": 1.859,
            "LPG": null
        }
    },
    {
        "id": 407,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Molėtų pl. 8, Vilnius",
        "lat": 54.75482645666,
        "lng": 25.271479396742,
        "prices": {
            "A95": 1.659,
            "A98": null,
            "Diesel": 1.759,
            "LPG": null
        }
    },
    {
        "id": 408,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "P. Lukšio g. 22, Vilnius",
        "lat": 54.711934120726,
        "lng": 25.293028683072,
        "prices": {
            "A95": 1.669,
            "A98": null,
            "Diesel": 1.769,
            "LPG": null
        }
    },
    {
        "id": 409,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Žirmūnų g. 54C, Vilnius",
        "lat": 54.706728916944,
        "lng": 25.304160185766,
        "prices": {
            "A95": 1.679,
            "A98": null,
            "Diesel": 1.774,
            "LPG": null
        }
    },
    {
        "id": 410,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Subačiaus g. 64, Vilnius",
        "lat": 54.676838128211,
        "lng": 25.309513036771,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.799,
            "LPG": null
        }
    },
    {
        "id": 411,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Dariaus ir Girėno g. 17, Vilnius",
        "lat": 54.655191737532,
        "lng": 25.270644643004,
        "prices": {
            "A95": 1.719,
            "A98": null,
            "Diesel": 1.819,
            "LPG": null
        }
    },
    {
        "id": 412,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Architektų g. 130, Vilnius",
        "lat": 54.680743382629,
        "lng": 25.207782716121,
        "prices": {
            "A95": 1.679,
            "A98": null,
            "Diesel": 1.779,
            "LPG": null
        }
    },
    {
        "id": 413,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Justiniškių g. 14B, Vilnius",
        "lat": 54.704996251829,
        "lng": 25.21494287309,
        "prices": {
            "A95": 1.689,
            "A98": null,
            "Diesel": 1.779,
            "LPG": null
        }
    },
    {
        "id": 414,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Geležinio Vilko g. 37A, Vilnius",
        "lat": 54.701397020696,
        "lng": 25.263756478794,
        "prices": {
            "A95": 1.689,
            "A98": null,
            "Diesel": 1.789,
            "LPG": null
        }
    },
    {
        "id": 415,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Pilaitės pr. 27, Vilnius",
        "lat": 54.709162937807,
        "lng": 25.189849634278,
        "prices": {
            "A95": 1.679,
            "A98": null,
            "Diesel": 1.769,
            "LPG": null
        }
    },
    {
        "id": 416,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Žirnių g. 17, Vilnius",
        "lat": 54.656627054632,
        "lng": 25.29210868538,
        "prices": {
            "A95": 1.689,
            "A98": null,
            "Diesel": 1.784,
            "LPG": null
        }
    },
    {
        "id": 417,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "J. Tiškevičiaus g. 19, Vilnius",
        "lat": 54.624389081553,
        "lng": 25.11159979045,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.779,
            "LPG": null
        }
    },
    {
        "id": 418,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Eišiškių pl. 82, Vilnius",
        "lat": 54.621224494009,
        "lng": 25.242997605932,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.799,
            "LPG": null
        }
    },
    {
        "id": 419,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Gariūnų g. 55, Vilnius",
        "lat": 54.658324431935,
        "lng": 25.158976989407,
        "prices": {
            "A95": 1.664,
            "A98": null,
            "Diesel": 1.754,
            "LPG": null
        }
    },
    {
        "id": 420,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Panerių g. 42, Vilnius",
        "lat": 54.668191021619,
        "lng": 25.264942182817,
        "prices": {
            "A95": 1.724,
            "A98": null,
            "Diesel": 1.779,
            "LPG": null
        }
    },
    {
        "id": 421,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Geležinio Vilko g. 41, Vilnius",
        "lat": 54.704175286323,
        "lng": 25.267039334991,
        "prices": {
            "A95": 1.689,
            "A98": null,
            "Diesel": 1.789,
            "LPG": null
        }
    },
    {
        "id": 422,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Kaunas",
        "address": "Pramonės pr. 6A, Kaunas",
        "lat": 54.909865723415,
        "lng": 23.984015548594,
        "prices": {
            "A95": 1.679,
            "A98": null,
            "Diesel": 1.779,
            "LPG": null
        }
    },
    {
        "id": 423,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Kaunas",
        "address": "Jonavos g. 110, Kaunas",
        "lat": 54.91360853655,
        "lng": 23.91202254403,
        "prices": {
            "A95": 1.679,
            "A98": null,
            "Diesel": 1.754,
            "LPG": null
        }
    },
    {
        "id": 424,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Kaunas",
        "address": "Veiverių g. 132D, Kaunas",
        "lat": 54.875495855173,
        "lng": 23.890852622637,
        "prices": {
            "A95": 1.729,
            "A98": null,
            "Diesel": 1.829,
            "LPG": null
        }
    },
    {
        "id": 425,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Kaunas",
        "address": "Žemaičių pl. 26, Kaunas",
        "lat": 54.925470144919,
        "lng": 23.891903042743,
        "prices": {
            "A95": 1.659,
            "A98": null,
            "Diesel": 1.769,
            "LPG": null
        }
    },
    {
        "id": 426,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Kaunas",
        "address": "R. Kalantos g. 27, Kaunas",
        "lat": 54.895068060092,
        "lng": 23.985969956958,
        "prices": {
            "A95": 1.689,
            "A98": null,
            "Diesel": 1.779,
            "LPG": null
        }
    },
    {
        "id": 427,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Kaunas",
        "address": "Ateities pl. 50B, Kaunas",
        "lat": 54.926168105996,
        "lng": 24.060313163353,
        "prices": {
            "A95": 1.659,
            "A98": null,
            "Diesel": 1.749,
            "LPG": null
        }
    },
    {
        "id": 428,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Kaunas",
        "address": "Taikos pr. 80A, Kaunas",
        "lat": 54.912056040444,
        "lng": 23.972848255175,
        "prices": {
            "A95": 1.669,
            "A98": null,
            "Diesel": 1.779,
            "LPG": null
        }
    },
    {
        "id": 429,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Kaunas",
        "address": "Birželio 23-iosios g. 23A, Kaunas",
        "lat": 54.916084425019,
        "lng": 23.953801637494,
        "prices": {
            "A95": 1.684,
            "A98": null,
            "Diesel": 1.789,
            "LPG": null
        }
    },
    {
        "id": 430,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Kaunas",
        "address": "Islandijos pl. 191E, Kaunas",
        "lat": 54.931465259256,
        "lng": 23.951131498418,
        "prices": {
            "A95": 1.679,
            "A98": null,
            "Diesel": 1.769,
            "LPG": null
        }
    },
    {
        "id": 431,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Kaunas",
        "address": "Raudondvario pl. 103, Kaunas",
        "lat": 54.906871162777,
        "lng": 23.872788531647,
        "prices": {
            "A95": 1.684,
            "A98": null,
            "Diesel": 1.764,
            "LPG": null
        }
    },
    {
        "id": 432,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Kaunas",
        "address": "Kuršių g. 1, Kaunas",
        "lat": 54.93628242283,
        "lng": 23.886037805996,
        "prices": {
            "A95": 1.669,
            "A98": null,
            "Diesel": 1.759,
            "LPG": null
        }
    },
    {
        "id": 433,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Kaunas",
        "address": "Vijoklių g. 1C, Ramučių k.",
        "lat": 54.948400936531,
        "lng": 24.018075831243,
        "prices": {
            "A95": 1.674,
            "A98": null,
            "Diesel": 1.764,
            "LPG": null
        }
    },
    {
        "id": 434,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Kaunas",
        "address": "Tunelio g. 26, Kaunas",
        "lat": 54.894768574692,
        "lng": 23.944270072479,
        "prices": {
            "A95": 1.724,
            "A98": null,
            "Diesel": 1.799,
            "LPG": null
        }
    },
    {
        "id": 435,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Kaunas",
        "address": "Vakarų g. 14, Kumpių k.",
        "lat": 54.949855322461,
        "lng": 23.873901564569,
        "prices": {
            "A95": 1.714,
            "A98": null,
            "Diesel": 1.789,
            "LPG": null
        }
    },
    {
        "id": 436,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Kaunas",
        "address": "Savanorių pr. 441C, Kaunas",
        "lat": 54.929360772916,
        "lng": 23.973382685321,
        "prices": {
            "A95": 1.679,
            "A98": null,
            "Diesel": 1.769,
            "LPG": null
        }
    },
    {
        "id": 437,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Kaunas",
        "address": "Vakarinis aplinkkelis 18, Kaunas",
        "lat": 54.934519750501,
        "lng": 23.866740485591,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.794,
            "LPG": null
        }
    },
    {
        "id": 438,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Kaunas",
        "address": "Europos pr. 43, Kaunas",
        "lat": 54.875764872355,
        "lng": 23.912369890098,
        "prices": {
            "A95": 1.719,
            "A98": null,
            "Diesel": 1.829,
            "LPG": null
        }
    },
    {
        "id": 439,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Klaipėda",
        "address": "Plieno g. 1, Klaipėda",
        "lat": 55.672962696139,
        "lng": 21.200992270001,
        "prices": {
            "A95": 1.679,
            "A98": null,
            "Diesel": 1.779,
            "LPG": null
        }
    },
    {
        "id": 440,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Klaipėda",
        "address": "Šilutės pl. 30, Klaipėda",
        "lat": 55.693091585158,
        "lng": 21.174969310488,
        "prices": {
            "A95": 1.659,
            "A98": null,
            "Diesel": 1.744,
            "LPG": null
        }
    },
    {
        "id": 441,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Klaipėda",
        "address": "Taikos pr. 60, Klaipėda",
        "lat": 55.688946692128,
        "lng": 21.155062374265,
        "prices": {
            "A95": 1.669,
            "A98": null,
            "Diesel": 1.759,
            "LPG": null
        }
    },
    {
        "id": 442,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Klaipėda",
        "address": "Minijos g. 119, Klaipėda",
        "lat": 55.684758548478,
        "lng": 21.150419051363,
        "prices": {
            "A95": 1.669,
            "A98": null,
            "Diesel": 1.759,
            "LPG": null
        }
    },
    {
        "id": 443,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Klaipėda",
        "address": "Artojo g. 2, Klaipėda",
        "lat": 55.717239303383,
        "lng": 21.151555805072,
        "prices": {
            "A95": 1.649,
            "A98": null,
            "Diesel": 1.739,
            "LPG": null
        }
    },
    {
        "id": 444,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Klaipėda",
        "address": "Smiltelės g. 17, Klaipėda",
        "lat": 55.669848190467,
        "lng": 21.192913707901,
        "prices": {
            "A95": 1.689,
            "A98": null,
            "Diesel": 1.769,
            "LPG": null
        }
    },
    {
        "id": 445,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Klaipėda",
        "address": "Šilutės pl. 5C, Klaipėda",
        "lat": 55.70317744543,
        "lng": 21.164914463258,
        "prices": {
            "A95": 1.639,
            "A98": null,
            "Diesel": 1.729,
            "LPG": null
        }
    },
    {
        "id": 446,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Klaipėda",
        "address": "Vilniaus pl. 9, Jakų k.",
        "lat": 55.706032950294,
        "lng": 21.238912921976,
        "prices": {
            "A95": 1.729,
            "A98": null,
            "Diesel": 1.799,
            "LPG": null
        }
    },
    {
        "id": 447,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Klaipėda",
        "address": "Sendvario g. 2, Sudmantų k.",
        "lat": 55.706091455978,
        "lng": 21.202602098325,
        "prices": {
            "A95": 1.689,
            "A98": null,
            "Diesel": 1.789,
            "LPG": null
        }
    },
    {
        "id": 448,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Šiaulių",
        "address": "Gegužių g. 28, Šiauliai",
        "lat": 55.905942849771,
        "lng": 23.259168175635,
        "prices": {
            "A95": 1.679,
            "A98": null,
            "Diesel": 1.779,
            "LPG": null
        }
    },
    {
        "id": 449,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Šiaulių",
        "address": "Tilžės g. 72, Šiauliai",
        "lat": 55.920290237256,
        "lng": 23.292906928478,
        "prices": {
            "A95": 1.679,
            "A98": null,
            "Diesel": 1.779,
            "LPG": null
        }
    },
    {
        "id": 450,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Šiaulių",
        "address": "Dubijos g. 18A, Šiauliai",
        "lat": 55.929388499786,
        "lng": 23.294117359116,
        "prices": {
            "A95": 1.679,
            "A98": null,
            "Diesel": 1.769,
            "LPG": null
        }
    },
    {
        "id": 451,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Panevėžio",
        "address": "Klaipėdos g. 81, Panevėžys",
        "lat": 55.728367788591,
        "lng": 24.332250936112,
        "prices": {
            "A95": 1.729,
            "A98": null,
            "Diesel": 1.799,
            "LPG": null
        }
    },
    {
        "id": 452,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Panevėžio",
        "address": "Ramygalos g. 145B, Panevėžys",
        "lat": 55.70964056333,
        "lng": 24.374703599315,
        "prices": {
            "A95": 1.689,
            "A98": null,
            "Diesel": 1.789,
            "LPG": null
        }
    },
    {
        "id": 453,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Panevėžio",
        "address": "Klaipėdos g. 66,  Panevėžys",
        "lat": 55.727693967394,
        "lng": 24.348482659249,
        "prices": {
            "A95": 1.729,
            "A98": null,
            "Diesel": 1.799,
            "LPG": null
        }
    },
    {
        "id": 454,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Pasvalio",
        "address": "Ąžuolpamūšio g. 1A, Raubonių k..",
        "lat": 56.117527830156,
        "lng": 24.476471005175,
        "prices": {
            "A95": 1.714,
            "A98": null,
            "Diesel": 1.779,
            "LPG": null
        }
    },
    {
        "id": 455,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Panevėžio",
        "address": "Margirio g. 1B, Panevėžys",
        "lat": 55.719355859663,
        "lng": 24.348949531256,
        "prices": {
            "A95": 1.679,
            "A98": null,
            "Diesel": 1.779,
            "LPG": null
        }
    },
    {
        "id": 456,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Panevėžio",
        "address": "Klaipėdos g. 144B, Panevėžys",
        "lat": 55.730719750622,
        "lng": 24.315873032583,
        "prices": {
            "A95": 1.719,
            "A98": null,
            "Diesel": 1.789,
            "LPG": null
        }
    },
    {
        "id": 457,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Panevėžio",
        "address": "Panevėžio aplinkl. 7, Šilagalio k.",
        "lat": 55.670512875389,
        "lng": 24.348530603735,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.789,
            "LPG": null
        }
    },
    {
        "id": 458,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Panevėžio",
        "address": "Panevėžio aplinkl. 22, Šilagalio k.",
        "lat": 55.672785418887,
        "lng": 24.332463333538,
        "prices": {
            "A95": 1.689,
            "A98": null,
            "Diesel": 1.779,
            "LPG": null
        }
    },
    {
        "id": 459,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Alytaus",
        "address": "Santaikos g. 34A, Alytus",
        "lat": 54.387090068491,
        "lng": 24.026280540985,
        "prices": {
            "A95": 1.689,
            "A98": null,
            "Diesel": 1.789,
            "LPG": null
        }
    },
    {
        "id": 460,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Alytaus",
        "address": "Ūdrijos g. 31, Alytus",
        "lat": 54.408900660653,
        "lng": 24.005283538255,
        "prices": {
            "A95": 1.689,
            "A98": null,
            "Diesel": 1.789,
            "LPG": null
        }
    },
    {
        "id": 461,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Marijampolės",
        "address": "Stoties g. 4C, Marijampolė",
        "lat": 54.560305240825,
        "lng": 23.365849518853,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.799,
            "LPG": null
        }
    },
    {
        "id": 462,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Marijampolės",
        "address": "Vilkaviškio g. 61D, Marijampolė",
        "lat": 54.562685827055,
        "lng": 23.332336993577,
        "prices": {
            "A95": 1.669,
            "A98": null,
            "Diesel": 1.794,
            "LPG": null
        }
    },
    {
        "id": 463,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Kalvarijos",
        "address": "Europos g. 1, Salaperaugio k.",
        "lat": 54.330092204888,
        "lng": 23.149474208778,
        "prices": {
            "A95": 1.729,
            "A98": null,
            "Diesel": 1.829,
            "LPG": null
        }
    },
    {
        "id": 464,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Kalvarijos",
        "address": "Europos g. 6, N.Valios k.",
        "lat": 54.347989783718,
        "lng": 23.166436050774,
        "prices": {
            "A95": null,
            "A98": null,
            "Diesel": 1.829,
            "LPG": null
        }
    },
    {
        "id": 465,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Mažeikių",
        "address": "M. Daukšos g. 29, Mažeikiai",
        "lat": 56.301251466526,
        "lng": 22.349854392162,
        "prices": {
            "A95": 1.669,
            "A98": null,
            "Diesel": 1.769,
            "LPG": null
        }
    },
    {
        "id": 466,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Šilalės",
        "address": "Katyčių k., Šilalės r.",
        "lat": 55.52212925,
        "lng": 22.359742833,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.799,
            "LPG": null
        }
    },
    {
        "id": 467,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Kėdainių",
        "address": "J. Basanavičiaus g. 91E, Kėdainiai",
        "lat": 55.27800846625,
        "lng": 23.959992594998,
        "prices": {
            "A95": 1.689,
            "A98": null,
            "Diesel": 1.789,
            "LPG": null
        }
    },
    {
        "id": 468,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Ukmergės",
        "address": "Kauno g. 45B, Ukmergė",
        "lat": 55.242008778845,
        "lng": 24.742998306054,
        "prices": {
            "A95": 1.689,
            "A98": null,
            "Diesel": 1.779,
            "LPG": null
        }
    },
    {
        "id": 469,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Utenos",
        "address": "J. Basanavičiaus g. 129, Utena",
        "lat": 55.505178955153,
        "lng": 25.624883317214,
        "prices": {
            "A95": 1.719,
            "A98": null,
            "Diesel": 1.799,
            "LPG": null
        }
    },
    {
        "id": 470,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Utenos",
        "address": "Kupiškio g. 12, Utena",
        "lat": 55.481095568035,
        "lng": 25.579116784771,
        "prices": {
            "A95": 1.714,
            "A98": null,
            "Diesel": 1.794,
            "LPG": null
        }
    },
    {
        "id": 471,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Molėtų",
        "address": "Aplinkkelio g. 165, Molėtai",
        "lat": 55.221824705919,
        "lng": 25.436191736164,
        "prices": {
            "A95": 1.669,
            "A98": null,
            "Diesel": 1.779,
            "LPG": null
        }
    },
    {
        "id": 472,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Švenčionių",
        "address": "Vilniaus g. 94, Pabradė",
        "lat": 54.978556886771,
        "lng": 25.756607272549,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.799,
            "LPG": null
        }
    },
    {
        "id": 473,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Jonavos",
        "address": "Plento g. 7, Gudžionių k.",
        "lat": 55.09509731787,
        "lng": 24.312455898296,
        "prices": {
            "A95": 1.689,
            "A98": null,
            "Diesel": 1.789,
            "LPG": null
        }
    },
    {
        "id": 474,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Radviliškio",
        "address": "Versmės g. 2, Radviliškis",
        "lat": 55.814364145423,
        "lng": 23.545938480434,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.789,
            "LPG": null
        }
    },
    {
        "id": 475,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Raseinių",
        "address": "Pušyno g. 11, Ylių k.",
        "lat": 55.411603304284,
        "lng": 22.83110655976,
        "prices": {
            "A95": 1.729,
            "A98": null,
            "Diesel": 1.839,
            "LPG": null
        }
    },
    {
        "id": 476,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Tauragės",
        "address": "Dariaus ir Girėno g. 130A, Tauragė",
        "lat": 55.26519815217,
        "lng": 22.30892438549,
        "prices": {
            "A95": 1.689,
            "A98": null,
            "Diesel": 1.749,
            "LPG": null
        }
    },
    {
        "id": 477,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Elektrėnų",
        "address": "Sabališkių g. 1U, Elektrėnai",
        "lat": 54.789248921345,
        "lng": 24.672805566654,
        "prices": {
            "A95": 1.739,
            "A98": null,
            "Diesel": 1.834,
            "LPG": null
        }
    },
    {
        "id": 478,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Telšių",
        "address": "Šiaulių pl. 1A, Gaudikaičių k.",
        "lat": 56.004975873979,
        "lng": 22.240108206049,
        "prices": {
            "A95": 1.679,
            "A98": null,
            "Diesel": 1.789,
            "LPG": null
        }
    },
    {
        "id": 479,
        "name": "Nostrada (RV Transport)",
        "logo": "⛽",
        "city": "Kalvarijos",
        "address": "Kazlavo k.",
        "lat": 54.332274804,
        "lng": 23.146532349,
        "prices": {
            "A95": 1.73,
            "A98": null,
            "Diesel": 1.83,
            "LPG": null
        }
    },
    {
        "id": 480,
        "name": "Orlen",
        "logo": "🦅",
        "city": "Alytaus",
        "address": "Kauno g. 73, Alytus",
        "lat": 54.403324054742,
        "lng": 24.037087664025,
        "prices": {
            "A95": 1.719,
            "A98": null,
            "Diesel": 1.829,
            "LPG": 0.759
        }
    },
    {
        "id": 481,
        "name": "Orlen",
        "logo": "🦅",
        "city": "Elektrėnų",
        "address": "​Žilvičių g. 1 A, Kakliniškių k.",
        "lat": 54.790815792415,
        "lng": 24.670561395898,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 1.889,
            "LPG": 0.859
        }
    },
    {
        "id": 482,
        "name": "Orlen",
        "logo": "🦅",
        "city": "Prienų",
        "address": "Alytaus g. 2, ​Verbyliškių k.",
        "lat": 54.578908841867,
        "lng": 24.169738208828,
        "prices": {
            "A95": 1.779,
            "A98": null,
            "Diesel": 1.879,
            "LPG": 0.819
        }
    },
    {
        "id": 483,
        "name": "Orlen",
        "logo": "🦅",
        "city": "Kaišiadorių r. sav.",
        "address": "Žiežmarių k.",
        "lat": 54.808836249,
        "lng": 24.419195965,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 1.889,
            "LPG": 0.859
        }
    },
    {
        "id": 484,
        "name": "Orlen",
        "logo": "🦅",
        "city": "Kaunas",
        "address": "Biruliškių k.",
        "lat": 54.93622576,
        "lng": 23.997593029,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.799,
            "LPG": 0.759
        }
    },
    {
        "id": 485,
        "name": "Orlen",
        "logo": "🦅",
        "city": "Kaunas",
        "address": "Beržų g. 2N, Ringaudai",
        "lat": 54.888635075134,
        "lng": 23.818573962813,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 1.899,
            "LPG": 0.849
        }
    },
    {
        "id": 486,
        "name": "Orlen",
        "logo": "🦅",
        "city": "Kaunas",
        "address": "Kalvarijos g. 138, Kaunas",
        "lat": 54.85134625102,
        "lng": 23.843111649083,
        "prices": {
            "A95": 1.819,
            "A98": null,
            "Diesel": 1.919,
            "LPG": 0.839
        }
    },
    {
        "id": 487,
        "name": "Orlen",
        "logo": "🦅",
        "city": "Kaunas",
        "address": "Pramonės pr. 37, Kaunas",
        "lat": 54.915921480821,
        "lng": 23.98421587608,
        "prices": {
            "A95": 1.719,
            "A98": null,
            "Diesel": 1.819,
            "LPG": 0.799
        }
    },
    {
        "id": 488,
        "name": "Orlen",
        "logo": "🦅",
        "city": "Kaunas",
        "address": "Varnių g. 50, Kaunas",
        "lat": 54.913838368335,
        "lng": 23.906968926968,
        "prices": {
            "A95": 1.739,
            "A98": null,
            "Diesel": 1.819,
            "LPG": 0.799
        }
    },
    {
        "id": 489,
        "name": "Orlen",
        "logo": "🦅",
        "city": "Kaunas",
        "address": "Veiverių g. 148 B, Kaunas",
        "lat": 54.867244793506,
        "lng": 23.887541184149,
        "prices": {
            "A95": 1.739,
            "A98": null,
            "Diesel": 1.839,
            "LPG": 0.819
        }
    },
    {
        "id": 490,
        "name": "Orlen",
        "logo": "🦅",
        "city": "Klaipėda",
        "address": "Minijos g. 44, Klaipėda",
        "lat": 55.693860666684,
        "lng": 21.14027267375,
        "prices": {
            "A95": 1.729,
            "A98": null,
            "Diesel": 1.829,
            "LPG": 0.819
        }
    },
    {
        "id": 491,
        "name": "Orlen",
        "logo": "🦅",
        "city": "Klaipėda",
        "address": "Šilutės pl. 26 A, Klaipėda",
        "lat": 55.698616307088,
        "lng": 21.167059057004,
        "prices": {
            "A95": 1.719,
            "A98": null,
            "Diesel": 1.799,
            "LPG": 0.759
        }
    },
    {
        "id": 492,
        "name": "Orlen",
        "logo": "🦅",
        "city": "Klaipėda",
        "address": "Šilutės pl. 94, Klaipėda",
        "lat": 55.668149136784,
        "lng": 21.208650898751,
        "prices": {
            "A95": 1.739,
            "A98": null,
            "Diesel": 1.829,
            "LPG": 0.829
        }
    },
    {
        "id": 493,
        "name": "Orlen",
        "logo": "🦅",
        "city": "Klaipėda",
        "address": "Vilniaus pl. 13, Jakų k.",
        "lat": 55.70783216772,
        "lng": 21.245789770617,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 1.889,
            "LPG": 0.829
        }
    },
    {
        "id": 494,
        "name": "Orlen",
        "logo": "🦅",
        "city": "Raseinių",
        "address": "Pikelių k. 6",
        "lat": 55.462045308514,
        "lng": 22.697107012411,
        "prices": {
            "A95": 1.859,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.899
        }
    },
    {
        "id": 495,
        "name": "Orlen",
        "logo": "🦅",
        "city": "Raseinių",
        "address": "Pikelių k. 8",
        "lat": 55.461746674882,
        "lng": 22.696596849883,
        "prices": {
            "A95": 1.859,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.899
        }
    },
    {
        "id": 496,
        "name": "Orlen",
        "logo": "🦅",
        "city": "Marijampolės",
        "address": "Aleksandravo k.",
        "lat": 54.584837642,
        "lng": 23.374203461,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.799,
            "LPG": 0.759
        }
    },
    {
        "id": 497,
        "name": "Orlen",
        "logo": "🦅",
        "city": "Mažeikių",
        "address": "​Skuodo g. 14, Mažeikiai",
        "lat": 56.314427524951,
        "lng": 22.310927073616,
        "prices": {
            "A95": 1.719,
            "A98": null,
            "Diesel": 1.819,
            "LPG": 0.799
        }
    },
    {
        "id": 498,
        "name": "Orlen",
        "logo": "🦅",
        "city": "Mažeikių",
        "address": "Žemaitijos g. 42, Mažeikiai",
        "lat": 56.302177792556,
        "lng": 22.342526513311,
        "prices": {
            "A95": 1.719,
            "A98": null,
            "Diesel": 1.819,
            "LPG": 0.799
        }
    },
    {
        "id": 499,
        "name": "Orlen",
        "logo": "🦅",
        "city": "Kretingos",
        "address": "Vilimiškės k.",
        "lat": 55.90508,
        "lng": 21.11236,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 1.869,
            "LPG": 0.799
        }
    },
    {
        "id": 500,
        "name": "Orlen",
        "logo": "🦅",
        "city": "Panevėžio",
        "address": "Klaipėdos g. 162 D, Panevėžys",
        "lat": 55.731739409143,
        "lng": 24.303399419553,
        "prices": {
            "A95": 1.779,
            "A98": null,
            "Diesel": 1.829,
            "LPG": 0.799
        }
    },
    {
        "id": 501,
        "name": "Orlen",
        "logo": "🦅",
        "city": "Panevėžio",
        "address": "Senamiesčio g. 115, Panevėžys",
        "lat": 55.748174309613,
        "lng": 24.391032133434,
        "prices": {
            "A95": 1.719,
            "A98": null,
            "Diesel": 1.799,
            "LPG": 0.779
        }
    },
    {
        "id": 502,
        "name": "Orlen",
        "logo": "🦅",
        "city": "Panevėžio",
        "address": "Šiaulių g. 50, Nausodės k.",
        "lat": 55.733870717573,
        "lng": 24.263500638429,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 1.859,
            "LPG": 0.819
        }
    },
    {
        "id": 503,
        "name": "Orlen",
        "logo": "🦅",
        "city": "Šiaulių",
        "address": "Serbentų g. 82, Šiauliai",
        "lat": 55.913663756062,
        "lng": 23.337127083604,
        "prices": {
            "A95": 1.759,
            "A98": null,
            "Diesel": 1.839,
            "LPG": 0.769
        }
    },
    {
        "id": 504,
        "name": "Orlen",
        "logo": "🦅",
        "city": "Tauragės",
        "address": "Gedimino g. 46, Tauragė",
        "lat": 55.244121647088,
        "lng": 22.304015859172,
        "prices": {
            "A95": 1.729,
            "A98": null,
            "Diesel": 1.799,
            "LPG": 0.829
        }
    },
    {
        "id": 505,
        "name": "Orlen",
        "logo": "🦅",
        "city": "Telšių",
        "address": "​Plungės g. 33 D, Telšiai",
        "lat": 55.979230355462,
        "lng": 22.226647037187,
        "prices": {
            "A95": 1.719,
            "A98": null,
            "Diesel": 1.819,
            "LPG": 0.819
        }
    },
    {
        "id": 506,
        "name": "Orlen",
        "logo": "🦅",
        "city": "Vilnius",
        "address": "Juodasis kl. 32, Vilnius",
        "lat": 54.654282125813,
        "lng": 25.371299799734,
        "prices": {
            "A95": 1.789,
            "A98": null,
            "Diesel": 1.899,
            "LPG": 0.819
        }
    },
    {
        "id": 507,
        "name": "Orlen",
        "logo": "🦅",
        "city": "Vilnius",
        "address": "O. ​Milašiaus g. 31, Vilnius",
        "lat": 54.728138351221,
        "lng": 25.326863660164,
        "prices": {
            "A95": 1.769,
            "A98": null,
            "Diesel": 1.899,
            "LPG": 0.839
        }
    },
    {
        "id": 508,
        "name": "Orlen",
        "logo": "🦅",
        "city": "Vilnius",
        "address": "Ukmergės g. 319, Vilnius",
        "lat": 54.736894925468,
        "lng": 25.231923519276,
        "prices": {
            "A95": 1.719,
            "A98": null,
            "Diesel": 1.819,
            "LPG": 0.819
        }
    },
    {
        "id": 509,
        "name": "Orlen",
        "logo": "🦅",
        "city": "Vilnius",
        "address": "Žirmūnų g. 1T, Vilnius",
        "lat": 54.695882985692,
        "lng": 25.29998029829,
        "prices": {
            "A95": 1.719,
            "A98": null,
            "Diesel": 1.819,
            "LPG": 0.839
        }
    },
    {
        "id": 510,
        "name": "Osijos dujos",
        "logo": "⛽",
        "city": "Vilkaviškio",
        "address": "Pamiškės g. 1, Osijos k.",
        "lat": 54.636557886673,
        "lng": 23.006510372742,
        "prices": {
            "A95": null,
            "A98": null,
            "Diesel": null,
            "LPG": 0.92
        }
    },
    {
        "id": 511,
        "name": "Pakelės namai",
        "logo": "⛽",
        "city": "Pasvalio",
        "address": "Liepų g. 4, Škilinpamūšio k.",
        "lat": 56.267591629302,
        "lng": 24.370953787291,
        "prices": {
            "A95": 1.79,
            "A98": null,
            "Diesel": 1.94,
            "LPG": 0.95
        }
    },
    {
        "id": 512,
        "name": "Pakelės namai",
        "logo": "⛽",
        "city": "Pasvalio",
        "address": "Pasienio g. 10, Škilinpamūšio k.",
        "lat": 56.272326063492,
        "lng": 24.367786768995,
        "prices": {
            "A95": 1.79,
            "A98": null,
            "Diesel": 1.94,
            "LPG": 0.95
        }
    },
    {
        "id": 513,
        "name": "Pynauja",
        "logo": "⛽",
        "city": "Šilalės",
        "address": "Dvaro g.1, Papynaujo k.,Kvėdarna",
        "lat": 55.565895282461,
        "lng": 21.996070268562,
        "prices": {
            "A95": 1.75,
            "A98": null,
            "Diesel": 1.91,
            "LPG": 0.86
        }
    },
    {
        "id": 514,
        "name": "Plovimo sistemos",
        "logo": "⛽",
        "city": "Šiaulių",
        "address": "Gegužių g. 28",
        "lat": 55.905942849771,
        "lng": 23.259168175635,
        "prices": {
            "A95": null,
            "A98": null,
            "Diesel": null,
            "LPG": 0.879
        }
    },
    {
        "id": 515,
        "name": "Plungės lagūna (Circle K)",
        "logo": "🔴",
        "city": "Rietavo",
        "address": "Plungės g. 32, Rietavas",
        "lat": 55.735023690264,
        "lng": 21.924138619529,
        "prices": {
            "A95": 1.869,
            "A98": null,
            "Diesel": 1.89,
            "LPG": 0.929
        }
    },
    {
        "id": 516,
        "name": "Prie Luksto",
        "logo": "⛽",
        "city": "Telšių",
        "address": "Telšiai, Masčio g. 21",
        "lat": 55.975694659155,
        "lng": 22.263550629031,
        "prices": {
            "A95": 1.735,
            "A98": null,
            "Diesel": 1.835,
            "LPG": 0.859
        }
    },
    {
        "id": 517,
        "name": "Propano ir butano dujų centras",
        "logo": "⛽",
        "city": "Ignalinos",
        "address": "Švenčionių 35, Ignalina",
        "lat": 55.327196910664,
        "lng": 26.174464088946,
        "prices": {
            "A95": 1.819,
            "A98": null,
            "Diesel": 1.919,
            "LPG": 0.81
        }
    },
    {
        "id": 518,
        "name": "Propano ir butano dujų centras",
        "logo": "⛽",
        "city": "Švenčionių",
        "address": "Aukštaičių g. 2a, Cirkliškio k.",
        "lat": 55.121543876848,
        "lng": 26.135602333895,
        "prices": {
            "A95": 1.86,
            "A98": null,
            "Diesel": 1.96,
            "LPG": 0.92
        }
    },
    {
        "id": 519,
        "name": "Raimondo Balsio IĮ",
        "logo": "⛽",
        "city": "Kelmės",
        "address": "Ramučių k., Luokės 2",
        "lat": 55.830035747881,
        "lng": 22.853368978413,
        "prices": {
            "A95": 1.8,
            "A98": null,
            "Diesel": 1.85,
            "LPG": 0.92
        }
    },
    {
        "id": 520,
        "name": "Regusa",
        "logo": "⛽",
        "city": "Kazlų Rūdos",
        "address": "Medelyno g. 4A, Jūrės k.",
        "lat": 54.769137634323,
        "lng": 23.486572058632,
        "prices": {
            "A95": 1.79,
            "A98": null,
            "Diesel": 1.89,
            "LPG": 0.82
        }
    },
    {
        "id": 521,
        "name": "Regusa",
        "logo": "⛽",
        "city": "Marijampolės",
        "address": "Sodo g. 11, Gavaltuvos k.",
        "lat": 54.676728409099,
        "lng": 23.417700810087,
        "prices": {
            "A95": 1.79,
            "A98": null,
            "Diesel": 1.89,
            "LPG": 0.8
        }
    },
    {
        "id": 522,
        "name": "Regusa",
        "logo": "⛽",
        "city": "Vilkaviškio",
        "address": "J. Basanavičiaus g. 45A, Kybartai",
        "lat": 54.638343845928,
        "lng": 22.763337662376,
        "prices": {
            "A95": 1.82,
            "A98": null,
            "Diesel": 1.92,
            "LPG": 0.82
        }
    },
    {
        "id": 523,
        "name": "Regusa",
        "logo": "⛽",
        "city": "Kazlų Rūdos",
        "address": "S. Daukanto g. 19D, Kazlų Rūda",
        "lat": 54.739257993521,
        "lng": 23.496298586715,
        "prices": {
            "A95": 1.79,
            "A98": null,
            "Diesel": 1.89,
            "LPG": 0.82
        }
    },
    {
        "id": 524,
        "name": "Regusa",
        "logo": "⛽",
        "city": "Kaunas",
        "address": "Marijampolės pl. 20, Kaunas",
        "lat": 54.850220812881,
        "lng": 23.965742496758,
        "prices": {
            "A95": 1.71,
            "A98": null,
            "Diesel": 1.79,
            "LPG": 0.8
        }
    },
    {
        "id": 525,
        "name": "S.Rimkevičiaus komercinė įmonė",
        "logo": "⛽",
        "city": "Joniškio",
        "address": "Turgaus g. 3, Joniškis",
        "lat": 56.228952145311,
        "lng": 23.610132627008,
        "prices": {
            "A95": 1.759,
            "A98": null,
            "Diesel": 1.849,
            "LPG": 0.779
        }
    },
    {
        "id": 526,
        "name": "S.Rimkevičiaus komercinė įmonė",
        "logo": "⛽",
        "city": "Joniškio",
        "address": "Miškininkų g. 14, Pelėdnagiai",
        "lat": 55.25253154582,
        "lng": 23.96805539912,
        "prices": {
            "A95": 1.729,
            "A98": null,
            "Diesel": 1.799,
            "LPG": 0.849
        }
    },
    {
        "id": 527,
        "name": "S.Savicko įmonė",
        "logo": "⛽",
        "city": "Kėdainių",
        "address": "Šėtos g. 120 , Kėdainiai",
        "lat": 55.297331016184,
        "lng": 24.001275479794,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.789,
            "LPG": null
        }
    },
    {
        "id": 528,
        "name": "S.Savicko įmonė",
        "logo": "⛽",
        "city": "Kėdainių",
        "address": "Dariaus ir Girėno 23 A, Kėdainiai",
        "lat": 55.312889630586,
        "lng": 23.978056937446,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.789,
            "LPG": 0.88
        }
    },
    {
        "id": 529,
        "name": "S.Savicko įmonė",
        "logo": "⛽",
        "city": "Kėdainių",
        "address": "Gedimino g. 50 , Kėdainiai",
        "lat": 55.291538869632,
        "lng": 23.960592990723,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.789,
            "LPG": 0.89
        }
    },
    {
        "id": 530,
        "name": "S.Savicko įmonė",
        "logo": "⛽",
        "city": "Kėdainių",
        "address": "Vandžiogalos g 29,Saviečių k.",
        "lat": 55.166933077931,
        "lng": 23.99478931166,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.789,
            "LPG": 0.89
        }
    },
    {
        "id": 531,
        "name": "S.Savicko įmonė (Circle K)",
        "logo": "🔴",
        "city": "Kėdainių",
        "address": "J.Basanavičiaus g. 103, Kėdainiai",
        "lat": 55.274238076654,
        "lng": 23.944684138496,
        "prices": {
            "A95": 1.749,
            "A98": null,
            "Diesel": 1.849,
            "LPG": 0.899
        }
    },
    {
        "id": 532,
        "name": "Saurida",
        "logo": "🔥",
        "city": "Akmenės",
        "address": "Naujoji Akmenė V. Kudirkos 18A",
        "lat": 56.317196235208,
        "lng": 22.884912762272,
        "prices": {
            "A95": 1.77,
            "A98": null,
            "Diesel": 1.82,
            "LPG": 0.8
        }
    },
    {
        "id": 533,
        "name": "Saurida",
        "logo": "🔥",
        "city": "Akmenės",
        "address": "Akmenės I kaimas Plento g. 1",
        "lat": 56.238514346182,
        "lng": 22.750824439689,
        "prices": {
            "A95": 1.77,
            "A98": null,
            "Diesel": 1.82,
            "LPG": 0.8
        }
    },
    {
        "id": 534,
        "name": "Saurida",
        "logo": "🔥",
        "city": "Akmenės",
        "address": "Pašakarnių km. Pašakarnių g. 1",
        "lat": 56.298082520393,
        "lng": 22.88522716746,
        "prices": {
            "A95": 1.77,
            "A98": null,
            "Diesel": 1.82,
            "LPG": 0.8
        }
    },
    {
        "id": 535,
        "name": "Saurida",
        "logo": "🔥",
        "city": "Šiaulių",
        "address": "Šiauliai Vilniaus g. 373A",
        "lat": 55.94272829869,
        "lng": 23.281565040015,
        "prices": {
            "A95": 1.77,
            "A98": null,
            "Diesel": 1.8,
            "LPG": 0.77
        }
    },
    {
        "id": 536,
        "name": "Saurida",
        "logo": "🔥",
        "city": "Šiaulių",
        "address": "Šiauliai Pramonės g. 7C",
        "lat": 55.916460503785,
        "lng": 23.301870703372,
        "prices": {
            "A95": 1.77,
            "A98": null,
            "Diesel": 1.8,
            "LPG": 0.77
        }
    },
    {
        "id": 537,
        "name": "Saurida",
        "logo": "🔥",
        "city": "Radviliškio",
        "address": "Radviliškis Gedimino g. 50C",
        "lat": 55.814641921695,
        "lng": 23.55309888886,
        "prices": {
            "A95": 1.73,
            "A98": null,
            "Diesel": 1.82,
            "LPG": 0.8
        }
    },
    {
        "id": 538,
        "name": "Saurida",
        "logo": "🔥",
        "city": "Radviliškio",
        "address": "Velžių km .Radviliškio plentas 2",
        "lat": 55.872901345544,
        "lng": 23.484553277253,
        "prices": {
            "A95": 1.77,
            "A98": null,
            "Diesel": 1.82,
            "LPG": 0.8
        }
    },
    {
        "id": 539,
        "name": "Saurida",
        "logo": "🔥",
        "city": "Skuodo",
        "address": "Skuodas Vytauto g. 20",
        "lat": 56.261448658193,
        "lng": 21.529893289101,
        "prices": {
            "A95": 1.77,
            "A98": null,
            "Diesel": 1.82,
            "LPG": 0.8
        }
    },
    {
        "id": 540,
        "name": "Saurida",
        "logo": "🔥",
        "city": "Klaipėda",
        "address": "Klaipėda Jūrininkų pr. 29",
        "lat": 55.656822587204,
        "lng": 21.183783636048,
        "prices": {
            "A95": 1.72,
            "A98": null,
            "Diesel": 1.78,
            "LPG": 0.76
        }
    },
    {
        "id": 541,
        "name": "Saurida",
        "logo": "🔥",
        "city": "Šilalės",
        "address": "Šilalė Rytinio kelio g. 19",
        "lat": 55.491828301685,
        "lng": 22.199235615413,
        "prices": {
            "A95": 1.77,
            "A98": null,
            "Diesel": 1.84,
            "LPG": 0.78
        }
    },
    {
        "id": 542,
        "name": "Saurida",
        "logo": "🔥",
        "city": "Jurbarko",
        "address": "Pašvenčio km.",
        "lat": 55.083689237896,
        "lng": 22.606701480533,
        "prices": {
            "A95": 1.75,
            "A98": null,
            "Diesel": 1.82,
            "LPG": 0.8
        }
    },
    {
        "id": 543,
        "name": "Saurida",
        "logo": "🔥",
        "city": "Kalvarijos",
        "address": "Kreivukės km.",
        "lat": 54.404472739,
        "lng": 23.19410617,
        "prices": {
            "A95": null,
            "A98": null,
            "Diesel": null,
            "LPG": 0.8
        }
    },
    {
        "id": 544,
        "name": "Saurida",
        "logo": "🔥",
        "city": "Kalvarijos",
        "address": "Kušliškių km. Suvalkijos g. 15",
        "lat": 54.434937822068,
        "lng": 23.204172723139,
        "prices": {
            "A95": 1.7,
            "A98": null,
            "Diesel": 1.79,
            "LPG": 0.8
        }
    },
    {
        "id": 545,
        "name": "Saurida",
        "logo": "🔥",
        "city": "Marijampolės",
        "address": "Marijampolė Statybininkų g. 8",
        "lat": 54.577893323534,
        "lng": 23.376914469235,
        "prices": {
            "A95": 1.74,
            "A98": null,
            "Diesel": 1.78,
            "LPG": 0.8
        }
    },
    {
        "id": 546,
        "name": "Saurida",
        "logo": "🔥",
        "city": "Alytaus",
        "address": "Alytus Miškininkų g. 7",
        "lat": 54.411694265162,
        "lng": 24.067674066903,
        "prices": {
            "A95": 1.74,
            "A98": null,
            "Diesel": 1.83,
            "LPG": null
        }
    },
    {
        "id": 547,
        "name": "Saurida",
        "logo": "🔥",
        "city": "Alytaus",
        "address": "Alytus Pramonės g. 5",
        "lat": 54.4243136,
        "lng": 24.0171029,
        "prices": {
            "A95": 1.74,
            "A98": null,
            "Diesel": 1.83,
            "LPG": 0.78
        }
    },
    {
        "id": 548,
        "name": "Saurida",
        "logo": "🔥",
        "city": "Lazdijų",
        "address": "Panarvės km.",
        "lat": 54.242560993,
        "lng": 23.543537586,
        "prices": {
            "A95": 1.74,
            "A98": null,
            "Diesel": 1.8,
            "LPG": 0.78
        }
    },
    {
        "id": 549,
        "name": "Saurida",
        "logo": "🔥",
        "city": "Prienų",
        "address": "Ignacavos km. Kauno pl. 18",
        "lat": 54.646668305922,
        "lng": 23.930061405492,
        "prices": {
            "A95": 1.74,
            "A98": null,
            "Diesel": 1.82,
            "LPG": 0.8
        }
    },
    {
        "id": 550,
        "name": "Saurida",
        "logo": "🔥",
        "city": "Kaunas",
        "address": "Domeikava Muitinės g. 2",
        "lat": 54.895852312863,
        "lng": 23.88743029157,
        "prices": {
            "A95": 1.77,
            "A98": null,
            "Diesel": 1.82,
            "LPG": 0.78
        }
    },
    {
        "id": 551,
        "name": "Saurida",
        "logo": "🔥",
        "city": "Kaunas",
        "address": "Kaunas Garažų g. 20",
        "lat": 54.923694313003,
        "lng": 24.000811206177,
        "prices": {
            "A95": 1.77,
            "A98": null,
            "Diesel": 1.79,
            "LPG": 0.75
        }
    },
    {
        "id": 552,
        "name": "Saurida",
        "logo": "🔥",
        "city": "Kaunas",
        "address": "Babtai Vandžiogalos g. 3",
        "lat": 54.94277583767,
        "lng": 23.88052421542,
        "prices": {
            "A95": 1.75,
            "A98": null,
            "Diesel": 1.81,
            "LPG": 0.78
        }
    },
    {
        "id": 553,
        "name": "Saurida",
        "logo": "🔥",
        "city": "Kaišiadorių r. sav.",
        "address": "Rumšiškės Lekavičiaus g. 71",
        "lat": 54.871853666786,
        "lng": 24.213242830808,
        "prices": {
            "A95": 1.77,
            "A98": null,
            "Diesel": 1.82,
            "LPG": 0.78
        }
    },
    {
        "id": 554,
        "name": "Saurida",
        "logo": "🔥",
        "city": "Šakių",
        "address": "Lėkėčių km. Šakių g. 3",
        "lat": 54.794650543941,
        "lng": 22.888466591164,
        "prices": {
            "A95": 1.74,
            "A98": null,
            "Diesel": 1.82,
            "LPG": 0.78
        }
    },
    {
        "id": 555,
        "name": "Saurida",
        "logo": "🔥",
        "city": "Prienų",
        "address": "Mauručiai Liepų g. 20",
        "lat": 54.636876701615,
        "lng": 23.948106948714,
        "prices": {
            "A95": 1.77,
            "A98": null,
            "Diesel": 1.82,
            "LPG": null
        }
    },
    {
        "id": 556,
        "name": "Saurida",
        "logo": "🔥",
        "city": "Ukmergės",
        "address": "Ukmergė Kareivinių g. 64",
        "lat": 55.258987706741,
        "lng": 24.790493941303,
        "prices": {
            "A95": 1.75,
            "A98": null,
            "Diesel": 1.83,
            "LPG": 0.75
        }
    },
    {
        "id": 557,
        "name": "Saurida",
        "logo": "🔥",
        "city": "Ukmergės",
        "address": "Ukmergė Vilniaus g. 122",
        "lat": 55.233433379435,
        "lng": 24.78107301741,
        "prices": {
            "A95": 1.75,
            "A98": null,
            "Diesel": 1.83,
            "LPG": 0.75
        }
    },
    {
        "id": 558,
        "name": "Saurida",
        "logo": "🔥",
        "city": "Ukmergės",
        "address": "Pageležių km.",
        "lat": 55.165134437,
        "lng": 24.514938944,
        "prices": {
            "A95": 1.77,
            "A98": null,
            "Diesel": 1.8,
            "LPG": 0.75
        }
    },
    {
        "id": 559,
        "name": "Saurida",
        "logo": "🔥",
        "city": "Vilnius",
        "address": "Čekoniškių km",
        "lat": 54.736723465,
        "lng": 25.085725471,
        "prices": {
            "A95": 1.74,
            "A98": null,
            "Diesel": 1.79,
            "LPG": null
        }
    },
    {
        "id": 560,
        "name": "Saurida",
        "logo": "🔥",
        "city": "Vilnius",
        "address": "Zujūnai Buivydiškių g. 1A",
        "lat": 54.710629644719,
        "lng": 25.240305857124,
        "prices": {
            "A95": 1.74,
            "A98": null,
            "Diesel": 1.79,
            "LPG": 0.77
        }
    },
    {
        "id": 561,
        "name": "Saurida",
        "logo": "🔥",
        "city": "Visagino",
        "address": "Visaginas Kosmoso g. 1",
        "lat": 55.59740696363,
        "lng": 26.403391634302,
        "prices": {
            "A95": 1.75,
            "A98": null,
            "Diesel": 1.81,
            "LPG": 0.75
        }
    },
    {
        "id": 562,
        "name": "Saurida",
        "logo": "🔥",
        "city": "Vilnius",
        "address": "Vilnius, Jankiškių g. 43a",
        "lat": 54.651911647363,
        "lng": 25.185588442341,
        "prices": {
            "A95": 1.74,
            "A98": null,
            "Diesel": 1.81,
            "LPG": 0.77
        }
    },
    {
        "id": 563,
        "name": "Saurida",
        "logo": "🔥",
        "city": "Vilnius",
        "address": "Vilnius, Rygos g. 2",
        "lat": 54.715574884189,
        "lng": 25.228964372179,
        "prices": {
            "A95": null,
            "A98": null,
            "Diesel": null,
            "LPG": 0.77
        }
    },
    {
        "id": 564,
        "name": "Saurida",
        "logo": "🔥",
        "city": "Vilnius",
        "address": "Vilnius Stanevičiaus g. 3A",
        "lat": 54.213612081582,
        "lng": 24.906437371348,
        "prices": {
            "A95": null,
            "A98": null,
            "Diesel": null,
            "LPG": 0.77
        }
    },
    {
        "id": 565,
        "name": "Skulas",
        "logo": "⛽",
        "city": "Alytaus",
        "address": "Simnas, Alytaus g. 48",
        "lat": 54.407106933374,
        "lng": 24.110641714237,
        "prices": {
            "A95": 1.76,
            "A98": null,
            "Diesel": 1.86,
            "LPG": 0.83
        }
    },
    {
        "id": 566,
        "name": "Skulas",
        "logo": "⛽",
        "city": "Alytaus",
        "address": "Likiškėlių k., Kalninės g. 5",
        "lat": 54.381917051217,
        "lng": 23.993118965995,
        "prices": {
            "A95": 1.76,
            "A98": null,
            "Diesel": 1.85,
            "LPG": 0.82
        }
    },
    {
        "id": 567,
        "name": "Skulas",
        "logo": "⛽",
        "city": "Kaunas",
        "address": "Kaunas, Ašigalio g. 1 A",
        "lat": 54.933420631538,
        "lng": 23.943545708407,
        "prices": {
            "A95": 1.689,
            "A98": null,
            "Diesel": 1.759,
            "LPG": 0.749
        }
    },
    {
        "id": 568,
        "name": "Skulas",
        "logo": "⛽",
        "city": "Kaunas",
        "address": "Kaunas, Marvelės g. 106 D",
        "lat": 54.901324815537,
        "lng": 23.85433023975,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.769,
            "LPG": null
        }
    },
    {
        "id": 569,
        "name": "Skulas",
        "logo": "⛽",
        "city": "Kaunas",
        "address": "Virbališkių k., Verslo g. 2",
        "lat": 54.90258231056,
        "lng": 23.762832797953,
        "prices": {
            "A95": 1.7,
            "A98": null,
            "Diesel": 1.77,
            "LPG": 0.75
        }
    },
    {
        "id": 570,
        "name": "Skulas",
        "logo": "⛽",
        "city": "Pasvalio",
        "address": "Pasvalys, Mūšos g. 2 E",
        "lat": 56.069592049378,
        "lng": 24.387502597825,
        "prices": {
            "A95": 1.73,
            "A98": null,
            "Diesel": 1.83,
            "LPG": 0.77
        }
    },
    {
        "id": 571,
        "name": "Skulas",
        "logo": "⛽",
        "city": "Vilnius",
        "address": "Vilnius, J.Kazlausko g. 34",
        "lat": 54.723185400815,
        "lng": 25.276822608559,
        "prices": {
            "A95": 1.679,
            "A98": null,
            "Diesel": 1.739,
            "LPG": 0.729
        }
    },
    {
        "id": 572,
        "name": "Stateta",
        "logo": "⛽",
        "city": "Marijampolės",
        "address": "Kantališkių k.",
        "lat": 54.636976614,
        "lng": 23.421718999,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.799,
            "LPG": 0.829
        }
    },
    {
        "id": 573,
        "name": "Stateta",
        "logo": "⛽",
        "city": "Vilnius",
        "address": "Ukmergės g. 246, Vilnius",
        "lat": 54.723213312553,
        "lng": 25.241257690471,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.799,
            "LPG": 0.829
        }
    },
    {
        "id": 574,
        "name": "Stateta",
        "logo": "⛽",
        "city": "Alytaus",
        "address": "Alytaus k.",
        "lat": 54.39870652,
        "lng": 24.100921259,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.799,
            "LPG": 0.829
        }
    },
    {
        "id": 575,
        "name": "Stateta",
        "logo": "⛽",
        "city": "Alytaus",
        "address": "Kauno g.1, Miklusėnai",
        "lat": 54.428066804273,
        "lng": 24.001371620224,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.799,
            "LPG": 0.829
        }
    },
    {
        "id": 576,
        "name": "Stateta",
        "logo": "⛽",
        "city": "Alytaus",
        "address": "Kaniukų k.",
        "lat": 54.369165714,
        "lng": 24.109499034,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.799,
            "LPG": 0.829
        }
    },
    {
        "id": 577,
        "name": "Stateta",
        "logo": "⛽",
        "city": "Prienų",
        "address": "Gustaičių k.",
        "lat": 54.747519444157,
        "lng": 23.704328759931,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.799,
            "LPG": 0.829
        }
    },
    {
        "id": 578,
        "name": "Stateta",
        "logo": "⛽",
        "city": "Kaunas",
        "address": "Erdvės g. 78, Ramučių k.",
        "lat": 54.929349780159,
        "lng": 24.038095795416,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.799,
            "LPG": 0.829
        }
    },
    {
        "id": 579,
        "name": "Stateta",
        "logo": "⛽",
        "city": "Panevėžio",
        "address": "Žemdirbių g. 15, Paliūniškio k.",
        "lat": 55.787745777419,
        "lng": 24.439259173553,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.799,
            "LPG": 0.829
        }
    },
    {
        "id": 580,
        "name": "Stateta",
        "logo": "⛽",
        "city": "Kupiškio",
        "address": "Panevėžio g. 9, Kupiškis",
        "lat": 55.826311271316,
        "lng": 24.978638418493,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.799,
            "LPG": 0.829
        }
    },
    {
        "id": 581,
        "name": "Stateta",
        "logo": "⛽",
        "city": "Kalvarijos",
        "address": "Turgaus g. 4, Kreivukė",
        "lat": 54.410870282171,
        "lng": 23.20685126968,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.799,
            "LPG": 0.829
        }
    },
    {
        "id": 582,
        "name": "Stateta",
        "logo": "⛽",
        "city": "Klaipėda",
        "address": "Minijos g. 90, Klaipėda",
        "lat": 55.68767050546,
        "lng": 21.145004593369,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.799,
            "LPG": 0.829
        }
    },
    {
        "id": 583,
        "name": "Stateta",
        "logo": "⛽",
        "city": "Utenos",
        "address": "Palangos g. 66, Utena",
        "lat": 55.497925549512,
        "lng": 25.58392145931,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.799,
            "LPG": 0.829
        }
    },
    {
        "id": 584,
        "name": "Šventosios investicijos",
        "logo": "⛽",
        "city": "Palangos",
        "address": "Elijos g.26 Palanga (Šventoji)",
        "lat": 56.012822886004,
        "lng": 21.10352984681,
        "prices": {
            "A95": 1.849,
            "A98": null,
            "Diesel": 1.929,
            "LPG": 0.959
        }
    },
    {
        "id": 585,
        "name": "Tomega",
        "logo": "⛽",
        "city": "Druskininkų sav.",
        "address": "Gardino g. 98, Druskininkai",
        "lat": 53.990179418582,
        "lng": 24.005703136328,
        "prices": {
            "A95": 1.8,
            "A98": null,
            "Diesel": 1.9,
            "LPG": 0.93
        }
    },
    {
        "id": 586,
        "name": "Tomega",
        "logo": "⛽",
        "city": "Šalčininkų",
        "address": "Tartoko k.",
        "lat": 54.301675876,
        "lng": 25.36083838,
        "prices": {
            "A95": 1.889,
            "A98": null,
            "Diesel": 1.989,
            "LPG": null
        }
    },
    {
        "id": 587,
        "name": "Tomega",
        "logo": "⛽",
        "city": "Šalčininkų",
        "address": "Dumblės k.",
        "lat": 54.142735346385,
        "lng": 25.028760624272,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 1.999,
            "LPG": null
        }
    },
    {
        "id": 588,
        "name": "Topgas",
        "logo": "⛽",
        "city": "Kupiškio",
        "address": "Slavinčiškio g.18, Slavinčiškis",
        "lat": 55.832444245849,
        "lng": 25.020037305085,
        "prices": {
            "A95": null,
            "A98": null,
            "Diesel": null,
            "LPG": 0.85
        }
    },
    {
        "id": 589,
        "name": "Topgas",
        "logo": "⛽",
        "city": "Kaišiadorių r. sav.",
        "address": "Paukštininkų g.13, Kaišiadorys",
        "lat": 54.865092530318,
        "lng": 24.434110673347,
        "prices": {
            "A95": null,
            "A98": null,
            "Diesel": null,
            "LPG": 0.85
        }
    },
    {
        "id": 590,
        "name": "Tormenta",
        "logo": "⛽",
        "city": "Kaunas",
        "address": "Linkuvos g. 77, Kaunas",
        "lat": 54.914334325546,
        "lng": 23.887784259342,
        "prices": {
            "A95": 1.75,
            "A98": null,
            "Diesel": 1.8,
            "LPG": null
        }
    },
    {
        "id": 591,
        "name": "Trevena",
        "logo": "⛽",
        "city": "Klaipėda",
        "address": "Kretingos pl. 1, Gargždai",
        "lat": 55.713758843818,
        "lng": 21.386548076471,
        "prices": {
            "A95": 1.79,
            "A98": null,
            "Diesel": 1.86,
            "LPG": 0.83
        }
    },
    {
        "id": 592,
        "name": "Trevena",
        "logo": "⛽",
        "city": "Klaipėda",
        "address": "Klaipėdos g. 39, Gargždai",
        "lat": 55.712279102631,
        "lng": 21.381632509353,
        "prices": {
            "A95": 1.73,
            "A98": null,
            "Diesel": 1.8,
            "LPG": 0.79
        }
    },
    {
        "id": 593,
        "name": "Trevena",
        "logo": "⛽",
        "city": "Šilutės",
        "address": "Tilžės g. 21, Saugų k.",
        "lat": 55.464590888221,
        "lng": 21.470355289742,
        "prices": {
            "A95": 1.73,
            "A98": null,
            "Diesel": 1.8,
            "LPG": 0.83
        }
    },
    {
        "id": 594,
        "name": "Trevena",
        "logo": "⛽",
        "city": "Klaipėda",
        "address": "Šv. Kristoforo g. 4, Dituvos k.",
        "lat": 55.581641400038,
        "lng": 21.285338607284,
        "prices": {
            "A95": 1.73,
            "A98": null,
            "Diesel": 1.8,
            "LPG": 0.83
        }
    },
    {
        "id": 595,
        "name": "Trevena",
        "logo": "⛽",
        "city": "Rietavo",
        "address": "Lėgų k. 1, Rietavas",
        "lat": 55.626265101,
        "lng": 21.969529539,
        "prices": {
            "A95": 1.79,
            "A98": null,
            "Diesel": 1.86,
            "LPG": 0.83
        }
    },
    {
        "id": 596,
        "name": "Trevena",
        "logo": "⛽",
        "city": "Kretingos",
        "address": "Laisvės g. 15, Darbėnai",
        "lat": 56.026618551745,
        "lng": 21.262680298138,
        "prices": {
            "A95": 1.89,
            "A98": null,
            "Diesel": 1.99,
            "LPG": 0.94
        }
    },
    {
        "id": 597,
        "name": "Trevena",
        "logo": "⛽",
        "city": "Kretingos",
        "address": "Vilniaus g. 29B, Kretinga",
        "lat": 55.896886119571,
        "lng": 21.244494096024,
        "prices": {
            "A95": 1.89,
            "A98": null,
            "Diesel": 1.99,
            "LPG": 0.94
        }
    },
    {
        "id": 598,
        "name": "Trevena",
        "logo": "⛽",
        "city": "Klaipėda",
        "address": "Veiviržėnų g. 29, Pyktiškės k.",
        "lat": 55.687086454447,
        "lng": 21.693217354684,
        "prices": {
            "A95": 1.79,
            "A98": null,
            "Diesel": 1.86,
            "LPG": 0.83
        }
    },
    {
        "id": 599,
        "name": "Trevena",
        "logo": "⛽",
        "city": "Šilutės",
        "address": "Liepų g. 4, Žemaitkiemio k.",
        "lat": 55.233897250012,
        "lng": 21.720712386441,
        "prices": {
            "A95": 1.73,
            "A98": null,
            "Diesel": 1.8,
            "LPG": 0.83
        }
    },
    {
        "id": 600,
        "name": "Trevena",
        "logo": "⛽",
        "city": "Rietavo",
        "address": "Kvėdarnos g. 2, Vatušių k.",
        "lat": 55.718465282451,
        "lng": 21.932260432249,
        "prices": {
            "A95": 1.79,
            "A98": null,
            "Diesel": 1.86,
            "LPG": 0.83
        }
    },
    {
        "id": 601,
        "name": "Trevena",
        "logo": "⛽",
        "city": "Klaipėda",
        "address": "Kretingos g. 28A, Klaipėda",
        "lat": 55.728361083068,
        "lng": 21.132430062225,
        "prices": {
            "A95": 1.73,
            "A98": null,
            "Diesel": 1.8,
            "LPG": 0.83
        }
    },
    {
        "id": 602,
        "name": "Trevena",
        "logo": "⛽",
        "city": "Klaipėda",
        "address": "Minijos g. 152A, Klaipėda",
        "lat": 55.669549040342,
        "lng": 21.158840433303,
        "prices": {
            "A95": 1.73,
            "A98": null,
            "Diesel": 1.8,
            "LPG": 0.79
        }
    },
    {
        "id": 603,
        "name": "Tripletas",
        "logo": "⛽",
        "city": "Mažeikių",
        "address": "Sedos g. 16, Mažeikiai",
        "lat": 56.305861345635,
        "lng": 22.342528608787,
        "prices": {
            "A95": 1.78,
            "A98": null,
            "Diesel": 1.88,
            "LPG": 0.78
        }
    },
    {
        "id": 604,
        "name": "Tumasa",
        "logo": "⛽",
        "city": "Mažeikių",
        "address": "Židikai, Mažeikiu g. 10",
        "lat": 54.716178632675,
        "lng": 25.495116955366,
        "prices": {
            "A95": 1.79,
            "A98": null,
            "Diesel": 1.89,
            "LPG": 0.95
        }
    },
    {
        "id": 605,
        "name": "Utentra",
        "logo": "⛽",
        "city": "Utenos",
        "address": "Utena, Pramonės g. 16",
        "lat": 55.494736444901,
        "lng": 25.645867411814,
        "prices": {
            "A95": null,
            "A98": null,
            "Diesel": 1.759,
            "LPG": null
        }
    },
    {
        "id": 606,
        "name": "V.Marcinkevičiaus IĮ",
        "logo": "⛽",
        "city": "Šilutės",
        "address": "Bažnyčios 7., Pavilnučio k.",
        "lat": 55.513912688714,
        "lng": 21.609493625168,
        "prices": {
            "A95": 1.83,
            "A98": null,
            "Diesel": 1.84,
            "LPG": 0.85
        }
    },
    {
        "id": 607,
        "name": "Valdegra",
        "logo": "⛽",
        "city": "Marijampolės",
        "address": "Prienų g.7, Igliaukos k.",
        "lat": 54.557938484735,
        "lng": 23.656260503296,
        "prices": {
            "A95": 1.719,
            "A98": null,
            "Diesel": 1.819,
            "LPG": 0.809
        }
    },
    {
        "id": 608,
        "name": "Velseka",
        "logo": "⛽",
        "city": "Kupiškio",
        "address": "Panevėžio g. 5, Kupiškis",
        "lat": 55.827824062245,
        "lng": 24.985741190782,
        "prices": {
            "A95": 1.719,
            "A98": null,
            "Diesel": 1.759,
            "LPG": 0.789
        }
    },
    {
        "id": 609,
        "name": "Viada",
        "logo": "🦌",
        "city": "Alytaus",
        "address": "Daugų k., Neveiglo g. 25",
        "lat": 54.366879665464,
        "lng": 24.337587190949,
        "prices": {
            "A95": 1.769,
            "A98": null,
            "Diesel": 1.859,
            "LPG": 0.899
        }
    },
    {
        "id": 610,
        "name": "Viada",
        "logo": "🦌",
        "city": "Alytaus",
        "address": "Alytus, Naujoji g. 27",
        "lat": 54.413977202221,
        "lng": 24.009628633042,
        "prices": {
            "A95": 1.749,
            "A98": null,
            "Diesel": 1.829,
            "LPG": 0.849
        }
    },
    {
        "id": 611,
        "name": "Viada",
        "logo": "🦌",
        "city": "Alytaus",
        "address": "Alytus, Ulonų g. 33B",
        "lat": 54.384755289361,
        "lng": 24.050002584257,
        "prices": {
            "A95": 1.729,
            "A98": null,
            "Diesel": 1.799,
            "LPG": 0.849
        }
    },
    {
        "id": 612,
        "name": "Viada",
        "logo": "🦌",
        "city": "Anykščių",
        "address": "Anykščiai, A. Vienuolio g. 34",
        "lat": 55.521698261388,
        "lng": 25.0861773943,
        "prices": {
            "A95": 1.759,
            "A98": null,
            "Diesel": 1.859,
            "LPG": 0.859
        }
    },
    {
        "id": 613,
        "name": "Viada",
        "logo": "🦌",
        "city": "Anykščių",
        "address": "Anykščiai, Piliakalnio g. 9",
        "lat": 55.54125730672,
        "lng": 25.134757396362,
        "prices": {
            "A95": 1.759,
            "A98": null,
            "Diesel": 1.859,
            "LPG": 0.859
        }
    },
    {
        "id": 614,
        "name": "Viada",
        "logo": "🦌",
        "city": "Biržų r. sav.",
        "address": "Biržai, Parodos g. 2",
        "lat": 56.201411055495,
        "lng": 24.748821884742,
        "prices": {
            "A95": 1.839,
            "A98": null,
            "Diesel": 1.919,
            "LPG": 0.879
        }
    },
    {
        "id": 615,
        "name": "Viada",
        "logo": "🦌",
        "city": "Biržų r. sav.",
        "address": "Biržai, Pasvalio g. 1B",
        "lat": 56.202025868093,
        "lng": 24.7376980934,
        "prices": {
            "A95": 1.839,
            "A98": null,
            "Diesel": 1.919,
            "LPG": 0.879
        }
    },
    {
        "id": 616,
        "name": "Viada",
        "logo": "🦌",
        "city": "Elektrėnų",
        "address": "Elektrėnai, Elektrinės g. 6",
        "lat": 54.784552792453,
        "lng": 24.654164800725,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 1.889,
            "LPG": 0.929
        }
    },
    {
        "id": 617,
        "name": "Viada",
        "logo": "🦌",
        "city": "Ignalinos",
        "address": "Ignalina, Turistų g. 28A",
        "lat": 55.338948590373,
        "lng": 26.14564006503,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.899
        }
    },
    {
        "id": 618,
        "name": "Viada",
        "logo": "🦌",
        "city": "Jonavos",
        "address": "Jonava, Darbininkų g. 4D",
        "lat": 55.093686978842,
        "lng": 24.282945564148,
        "prices": {
            "A95": 1.789,
            "A98": null,
            "Diesel": 1.869,
            "LPG": 0.899
        }
    },
    {
        "id": 619,
        "name": "Viada",
        "logo": "🦌",
        "city": "Joniškio",
        "address": "Joniškis, Vilniaus g. 51",
        "lat": 56.224395323649,
        "lng": 23.600907336735,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 1.899,
            "LPG": 0.829
        }
    },
    {
        "id": 620,
        "name": "Viada",
        "logo": "🦌",
        "city": "Kaišiadorių r. sav.",
        "address": "Kaišiadorys, Gedimino g. 135",
        "lat": 54.855280255366,
        "lng": 24.441792100874,
        "prices": {
            "A95": 1.859,
            "A98": null,
            "Diesel": 1.959,
            "LPG": 0.899
        }
    },
    {
        "id": 621,
        "name": "Viada",
        "logo": "🦌",
        "city": "Kalvarijos",
        "address": "Kalvarija, Dariaus ir Girėno g. 81",
        "lat": 54.424465938669,
        "lng": 23.231907795757,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 1.899,
            "LPG": 0.959
        }
    },
    {
        "id": 622,
        "name": "Viada",
        "logo": "🦌",
        "city": "Kalvarijos",
        "address": "Pelucmurgių k., Muitinės g. 35",
        "lat": 54.339820367442,
        "lng": 23.163098824752,
        "prices": {
            "A95": 1.749,
            "A98": null,
            "Diesel": 1.849,
            "LPG": null
        }
    },
    {
        "id": 623,
        "name": "Viada",
        "logo": "🦌",
        "city": "Kaunas",
        "address": "Kaunas, A. Juozapavičiaus pr. 90",
        "lat": 54.878078738636,
        "lng": 23.934133417874,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 1.899,
            "LPG": 0.899
        }
    },
    {
        "id": 624,
        "name": "Viada",
        "logo": "🦌",
        "city": "Kaunas",
        "address": "Kaunas, Ateities pl. 105",
        "lat": 54.927136551089,
        "lng": 24.04374608027,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.959
        }
    },
    {
        "id": 625,
        "name": "Viada",
        "logo": "🦌",
        "city": "Kaunas",
        "address": "Kaunas, Ateities pl. 37A",
        "lat": 54.918225121181,
        "lng": 24.039649760369,
        "prices": {
            "A95": 1.729,
            "A98": null,
            "Diesel": 1.829,
            "LPG": 0.869
        }
    },
    {
        "id": 626,
        "name": "Viada",
        "logo": "🦌",
        "city": "Kaunas",
        "address": "Kaunas, Baltijos g. 90B",
        "lat": 54.918004216122,
        "lng": 23.873689250962,
        "prices": {
            "A95": 1.679,
            "A98": null,
            "Diesel": 1.789,
            "LPG": 0.869
        }
    },
    {
        "id": 627,
        "name": "Viada",
        "logo": "🦌",
        "city": "Kaunas",
        "address": "Kaunas, Biruliškių g. 18A",
        "lat": 54.910628267057,
        "lng": 24.02320522071,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 1.899,
            "LPG": null
        }
    },
    {
        "id": 628,
        "name": "Viada",
        "logo": "🦌",
        "city": "Kaunas",
        "address": "Kaunas, Didžioji g. 84",
        "lat": 54.855148617576,
        "lng": 24.013175183913,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 1.899,
            "LPG": 0.899
        }
    },
    {
        "id": 629,
        "name": "Viada",
        "logo": "🦌",
        "city": "Kaunas",
        "address": "Kaunas, Islandijos pl. 61A",
        "lat": 54.933537475268,
        "lng": 23.968511542291,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.959
        }
    },
    {
        "id": 630,
        "name": "Viada",
        "logo": "🦌",
        "city": "Kaunas",
        "address": "Kaunas, K. Baršausko g. 64",
        "lat": 54.897649267175,
        "lng": 23.958109935726,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 1.889,
            "LPG": 0.899
        }
    },
    {
        "id": 631,
        "name": "Viada",
        "logo": "🦌",
        "city": "Kaunas",
        "address": "Kaunas, Karaliaus Mindaugo pr. 54",
        "lat": 54.887370413582,
        "lng": 23.921353362464,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 1.899,
            "LPG": 0.899
        }
    },
    {
        "id": 632,
        "name": "Viada",
        "logo": "🦌",
        "city": "Kaunas",
        "address": "Kaunas, Marijampolės pl. 29",
        "lat": 54.849556253687,
        "lng": 23.96678629516,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 1.899,
            "LPG": 0.899
        }
    },
    {
        "id": 633,
        "name": "Viada",
        "logo": "🦌",
        "city": "Kaunas",
        "address": "Kaunas, Miežėnų g. 18",
        "lat": 54.917642453181,
        "lng": 23.863193180348,
        "prices": {
            "A95": 1.679,
            "A98": null,
            "Diesel": 1.789,
            "LPG": 0.899
        }
    },
    {
        "id": 634,
        "name": "Viada",
        "logo": "🦌",
        "city": "Kaunas",
        "address": "Kaunas, P. Lukšio g. 66A",
        "lat": 54.9248666898,
        "lng": 23.942496880862,
        "prices": {
            "A95": 1.769,
            "A98": null,
            "Diesel": 1.839,
            "LPG": 0.899
        }
    },
    {
        "id": 635,
        "name": "Viada",
        "logo": "🦌",
        "city": "Kaunas",
        "address": "Kaunas, Pramonės pr. 44",
        "lat": 54.92711484196,
        "lng": 23.974663523945,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.799,
            "LPG": 0.849
        }
    },
    {
        "id": 636,
        "name": "Viada",
        "logo": "🦌",
        "city": "Kaunas",
        "address": "Kaunas, Raudondvario pl. 288",
        "lat": 54.921398970728,
        "lng": 23.810330696316,
        "prices": {
            "A95": 1.729,
            "A98": null,
            "Diesel": 1.839,
            "LPG": 0.899
        }
    },
    {
        "id": 637,
        "name": "Viada",
        "logo": "🦌",
        "city": "Kaunas",
        "address": "Kaunas, Statybininkų g. 3A",
        "lat": 54.920107612815,
        "lng": 23.948836617148,
        "prices": {
            "A95": 1.769,
            "A98": null,
            "Diesel": 1.829,
            "LPG": 0.899
        }
    },
    {
        "id": 638,
        "name": "Viada",
        "logo": "🦌",
        "city": "Kaunas",
        "address": "Kaunas, T. Masiulio g. 22B",
        "lat": 54.881007291787,
        "lng": 24.009786380459,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 1.899,
            "LPG": 0.899
        }
    },
    {
        "id": 639,
        "name": "Viada",
        "logo": "🦌",
        "city": "Kaunas",
        "address": "Kaunas, Veiverių g. 117",
        "lat": 54.866563596235,
        "lng": 23.889334576153,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 1.899,
            "LPG": 0.899
        }
    },
    {
        "id": 640,
        "name": "Viada",
        "logo": "🦌",
        "city": "Kaunas",
        "address": "Kaunas, Veiverių g. 124B",
        "lat": 54.88333310228,
        "lng": 23.893652262117,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 1.899,
            "LPG": 0.899
        }
    },
    {
        "id": 641,
        "name": "Viada",
        "logo": "🦌",
        "city": "Kaunas",
        "address": "Giraitės k., Automagistralės g. 4",
        "lat": 54.959108231104,
        "lng": 23.864332616266,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.959
        }
    },
    {
        "id": 642,
        "name": "Viada",
        "logo": "🦌",
        "city": "Kaunas",
        "address": "Ilgakiemio k., Prienų g. 22",
        "lat": 54.774118328827,
        "lng": 23.88969583618,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 1.899,
            "LPG": 0.899
        }
    },
    {
        "id": 643,
        "name": "Viada",
        "logo": "🦌",
        "city": "Kaunas",
        "address": "Kampiškių k., Baltijos g. 41",
        "lat": 54.921608476397,
        "lng": 23.884082643261,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.959
        }
    },
    {
        "id": 644,
        "name": "Viada",
        "logo": "🦌",
        "city": "Kaunas",
        "address": "Kumpių k., Verslo g. 13A",
        "lat": 54.925725290052,
        "lng": 24.045616585783,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.959
        }
    },
    {
        "id": 645,
        "name": "Viada",
        "logo": "🦌",
        "city": "Kaunas",
        "address": "Margavos k.",
        "lat": 54.957747783,
        "lng": 24.029920094,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 1.899,
            "LPG": 0.899
        }
    },
    {
        "id": 646,
        "name": "Viada",
        "logo": "🦌",
        "city": "Kaunas",
        "address": "Zapyškis, Vytauto g. 20A",
        "lat": 54.910330877132,
        "lng": 23.822998937137,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 1.899,
            "LPG": 0.899
        }
    },
    {
        "id": 647,
        "name": "Viada",
        "logo": "🦌",
        "city": "Kazlų Rūdos",
        "address": "Ąžuolų Būdos k.",
        "lat": 54.702999617,
        "lng": 23.520496122,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.959
        }
    },
    {
        "id": 648,
        "name": "Viada",
        "logo": "🦌",
        "city": "Kėdainių",
        "address": "Dotnuva, Tilto g. 2A",
        "lat": 55.288848362532,
        "lng": 23.980163980266,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.959
        }
    },
    {
        "id": 649,
        "name": "Viada",
        "logo": "🦌",
        "city": "Kėdainių",
        "address": "Gudžiūnų k., Baisogalos g. 5",
        "lat": 55.518550814837,
        "lng": 23.773519975959,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.959
        }
    },
    {
        "id": 650,
        "name": "Viada",
        "logo": "🦌",
        "city": "Klaipėda",
        "address": "Klaipėda, Liepojos g. 242",
        "lat": 55.753700163101,
        "lng": 21.131398585221,
        "prices": {
            "A95": 1.759,
            "A98": null,
            "Diesel": 1.859,
            "LPG": 0.899
        }
    },
    {
        "id": 651,
        "name": "Viada",
        "logo": "🦌",
        "city": "Klaipėda",
        "address": "Klaipėda, Nemuno g. 139",
        "lat": 55.673962992464,
        "lng": 21.148039429052,
        "prices": {
            "A95": 1.709,
            "A98": null,
            "Diesel": 1.809,
            "LPG": 0.879
        }
    },
    {
        "id": 652,
        "name": "Viada",
        "logo": "🦌",
        "city": "Klaipėda",
        "address": "Klaipėda, Priestočio g. 28",
        "lat": 55.71923583081,
        "lng": 21.141172051961,
        "prices": {
            "A95": 1.759,
            "A98": null,
            "Diesel": 1.859,
            "LPG": 0.879
        }
    },
    {
        "id": 653,
        "name": "Viada",
        "logo": "🦌",
        "city": "Klaipėda",
        "address": "Klaipėda, Šilutės pl. 52",
        "lat": 55.681965782159,
        "lng": 21.185173271776,
        "prices": {
            "A95": 1.759,
            "A98": null,
            "Diesel": 1.859,
            "LPG": 0.899
        }
    },
    {
        "id": 654,
        "name": "Viada",
        "logo": "🦌",
        "city": "Klaipėda",
        "address": "Klaipėda, Taikos pr. 70A-1",
        "lat": 55.683267407903,
        "lng": 21.160533661563,
        "prices": {
            "A95": 1.759,
            "A98": null,
            "Diesel": 1.859,
            "LPG": 0.879
        }
    },
    {
        "id": 655,
        "name": "Viada",
        "logo": "🦌",
        "city": "Klaipėda",
        "address": "Gargždai, Vilniaus pl. 65",
        "lat": 55.732203179846,
        "lng": 21.376157282561,
        "prices": {
            "A95": 1.889,
            "A98": null,
            "Diesel": 1.989,
            "LPG": 0.959
        }
    },
    {
        "id": 656,
        "name": "Viada",
        "logo": "🦌",
        "city": "Klaipėda",
        "address": "Kretingalė, Klaipėdos g. 1A",
        "lat": 55.753930749257,
        "lng": 21.134345913834,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.959
        }
    },
    {
        "id": 657,
        "name": "Viada",
        "logo": "🦌",
        "city": "Klaipėda",
        "address": "Sudmantų k., Vilniaus pl. 6",
        "lat": 55.704455811393,
        "lng": 21.221595910015,
        "prices": {
            "A95": 1.889,
            "A98": null,
            "Diesel": 1.989,
            "LPG": 0.959
        }
    },
    {
        "id": 658,
        "name": "Viada",
        "logo": "🦌",
        "city": "Kretingos",
        "address": "Kretinga, Vytauto g. 163",
        "lat": 55.890542988614,
        "lng": 21.27849578917,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.959
        }
    },
    {
        "id": 659,
        "name": "Viada",
        "logo": "🦌",
        "city": "Kretingos",
        "address": "Kretingsodžio k.",
        "lat": 55.902678317,
        "lng": 21.231238907,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.959
        }
    },
    {
        "id": 660,
        "name": "Viada",
        "logo": "🦌",
        "city": "Kupiškio",
        "address": "Kerelių k. 1A",
        "lat": 55.85691348018,
        "lng": 25.173915527885,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 1.899,
            "LPG": 0.899
        }
    },
    {
        "id": 661,
        "name": "Viada",
        "logo": "🦌",
        "city": "Kupiškio",
        "address": "Kupiškis, Pergalės g. 15",
        "lat": 55.844528687114,
        "lng": 24.978981737503,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 1.899,
            "LPG": 0.899
        }
    },
    {
        "id": 662,
        "name": "Viada",
        "logo": "🦌",
        "city": "Lazdijų",
        "address": "Lazdijai, Turistų g. 32",
        "lat": 54.228605629983,
        "lng": 23.528102293391,
        "prices": {
            "A95": 1.789,
            "A98": null,
            "Diesel": 1.849,
            "LPG": 0.799
        }
    },
    {
        "id": 663,
        "name": "Viada",
        "logo": "🦌",
        "city": "Marijampolės",
        "address": "Marijampolė, Geležinkelio g. 5",
        "lat": 54.554365530868,
        "lng": 23.362370693759,
        "prices": {
            "A95": 1.729,
            "A98": null,
            "Diesel": 1.829,
            "LPG": 0.799
        }
    },
    {
        "id": 664,
        "name": "Viada",
        "logo": "🦌",
        "city": "Marijampolės",
        "address": "Marijampolė, J. Ambrazevičiaus-Brazaičio g. 2",
        "lat": 54.567684249285,
        "lng": 23.339337894385,
        "prices": {
            "A95": 1.729,
            "A98": null,
            "Diesel": 1.829,
            "LPG": 0.799
        }
    },
    {
        "id": 665,
        "name": "Viada",
        "logo": "🦌",
        "city": "Mažeikių",
        "address": "Mažeikiai, Montuotojų g. 2A",
        "lat": 56.315600404663,
        "lng": 22.302744156822,
        "prices": {
            "A95": 1.719,
            "A98": null,
            "Diesel": 1.819,
            "LPG": 0.869
        }
    },
    {
        "id": 666,
        "name": "Viada",
        "logo": "🦌",
        "city": "Mažeikių",
        "address": "Mažeikiai, Žemaitijos g. 75",
        "lat": 56.300318979798,
        "lng": 22.360817921516,
        "prices": {
            "A95": 1.719,
            "A98": null,
            "Diesel": 1.819,
            "LPG": 0.869
        }
    },
    {
        "id": 667,
        "name": "Viada",
        "logo": "🦌",
        "city": "Molėtų",
        "address": "Molėtai, Vilniaus g. 101",
        "lat": 55.222871049877,
        "lng": 25.404627772702,
        "prices": {
            "A95": 1.739,
            "A98": null,
            "Diesel": 1.849,
            "LPG": 0.859
        }
    },
    {
        "id": 668,
        "name": "Viada",
        "logo": "🦌",
        "city": "Molėtų",
        "address": "Gojaus k., Utenos g. 16",
        "lat": 55.214639937139,
        "lng": 25.437842740416,
        "prices": {
            "A95": 1.739,
            "A98": null,
            "Diesel": 1.849,
            "LPG": 0.859
        }
    },
    {
        "id": 669,
        "name": "Viada",
        "logo": "🦌",
        "city": "Pakruojo",
        "address": "Pakruojis, Vytauto Didžiojo g. 98",
        "lat": 55.980449000364,
        "lng": 23.857991538876,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 1.899,
            "LPG": 0.879
        }
    },
    {
        "id": 670,
        "name": "Viada",
        "logo": "🦌",
        "city": "Panevėžio",
        "address": "Krekenava, Tilto g. 35",
        "lat": 55.541540615047,
        "lng": 24.107847858271,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.939
        }
    },
    {
        "id": 671,
        "name": "Viada",
        "logo": "🦌",
        "city": "Panevėžio",
        "address": "Ramygala, Vienkiemio g. 1B",
        "lat": 55.520984626152,
        "lng": 24.312591433671,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.959
        }
    },
    {
        "id": 672,
        "name": "Viada",
        "logo": "🦌",
        "city": "Panevėžio",
        "address": "Šilagalio k., Panevėžio aplinkl. 5",
        "lat": 55.670508726347,
        "lng": 24.349992994382,
        "prices": {
            "A95": 1.719,
            "A98": null,
            "Diesel": 1.809,
            "LPG": null
        }
    },
    {
        "id": 673,
        "name": "Viada",
        "logo": "🦌",
        "city": "Panevėžio",
        "address": "Tičkūnų k., Tičkūnų g. 31",
        "lat": 55.778861337238,
        "lng": 24.365006575531,
        "prices": {
            "A95": 1.759,
            "A98": null,
            "Diesel": 1.829,
            "LPG": 0.829
        }
    },
    {
        "id": 674,
        "name": "Viada",
        "logo": "🦌",
        "city": "Panevėžio",
        "address": "Panevėžys, J. Janonio g. 28A",
        "lat": 55.738819518936,
        "lng": 24.310174092795,
        "prices": {
            "A95": 1.789,
            "A98": null,
            "Diesel": 1.849,
            "LPG": 0.859
        }
    },
    {
        "id": 675,
        "name": "Viada",
        "logo": "🦌",
        "city": "Panevėžio",
        "address": "Panevėžys, Navadolio g. 31",
        "lat": 55.714597034135,
        "lng": 24.335141770698,
        "prices": {
            "A95": 1.789,
            "A98": null,
            "Diesel": 1.849,
            "LPG": 0.849
        }
    },
    {
        "id": 676,
        "name": "Viada",
        "logo": "🦌",
        "city": "Panevėžio",
        "address": "Panevėžys, Pušaloto g. 193A",
        "lat": 55.753179563094,
        "lng": 24.312024314102,
        "prices": {
            "A95": 1.789,
            "A98": null,
            "Diesel": 1.849,
            "LPG": 0.859
        }
    },
    {
        "id": 677,
        "name": "Viada",
        "logo": "🦌",
        "city": "Panevėžio",
        "address": "Panevėžys, Ramygalos g. 155",
        "lat": 55.703809063744,
        "lng": 24.380900172694,
        "prices": {
            "A95": 1.789,
            "A98": null,
            "Diesel": 1.849,
            "LPG": 0.849
        }
    },
    {
        "id": 678,
        "name": "Viada",
        "logo": "🦌",
        "city": "Panevėžio",
        "address": "Panevėžys, Ramygalos g. 186G",
        "lat": 55.709266395173,
        "lng": 24.373665752063,
        "prices": {
            "A95": 1.789,
            "A98": null,
            "Diesel": 1.849,
            "LPG": 0.849
        }
    },
    {
        "id": 679,
        "name": "Viada",
        "logo": "🦌",
        "city": "Panevėžio",
        "address": "Panevėžys, Senamiesčio g. 116A",
        "lat": 55.748535360093,
        "lng": 24.393313352202,
        "prices": {
            "A95": 1.759,
            "A98": null,
            "Diesel": 1.829,
            "LPG": 0.829
        }
    },
    {
        "id": 680,
        "name": "Viada",
        "logo": "🦌",
        "city": "Panevėžio",
        "address": "Panevėžys, Venslaviškio g. 16",
        "lat": 55.736930154141,
        "lng": 24.387145947845,
        "prices": {
            "A95": 1.789,
            "A98": null,
            "Diesel": 1.849,
            "LPG": 0.859
        }
    },
    {
        "id": 681,
        "name": "Viada",
        "logo": "🦌",
        "city": "Pasvalio",
        "address": "Brazdigalos k. 1",
        "lat": 56.040550673463,
        "lng": 24.377450037487,
        "prices": {
            "A95": 1.859,
            "A98": null,
            "Diesel": 1.959,
            "LPG": 0.899
        }
    },
    {
        "id": 682,
        "name": "Viada",
        "logo": "🦌",
        "city": "Pasvalio",
        "address": "Pasvalys, Vilniaus g. 50",
        "lat": 56.056008337092,
        "lng": 24.407401822697,
        "prices": {
            "A95": 1.829,
            "A98": null,
            "Diesel": 1.899,
            "LPG": 0.899
        }
    },
    {
        "id": 683,
        "name": "Viada",
        "logo": "🦌",
        "city": "Plungės",
        "address": "Plungė, J. Tumo-Vaižganto g. 102",
        "lat": 55.903039400421,
        "lng": 21.830014540735,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 1.879,
            "LPG": 0.889
        }
    },
    {
        "id": 684,
        "name": "Viada",
        "logo": "🦌",
        "city": "Plungės",
        "address": "Plungė, Žaltakalnio g. 10",
        "lat": 55.898376212408,
        "lng": 21.840254544206,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 1.879,
            "LPG": 0.889
        }
    },
    {
        "id": 685,
        "name": "Viada",
        "logo": "🦌",
        "city": "Prienų",
        "address": "Grigaliūnų k. 11",
        "lat": 54.704314711084,
        "lng": 23.650665842135,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.95
        }
    },
    {
        "id": 686,
        "name": "Viada",
        "logo": "🦌",
        "city": "Prienų",
        "address": "Mačiūnų k., Kauno pl. 40",
        "lat": 54.65897759174,
        "lng": 23.947103993943,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 1.899,
            "LPG": 0.899
        }
    },
    {
        "id": 687,
        "name": "Viada",
        "logo": "🦌",
        "city": "Raseinių",
        "address": "Vejukų k. 5",
        "lat": 55.37824,
        "lng": 22.91607,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.959
        }
    },
    {
        "id": 688,
        "name": "Viada",
        "logo": "🦌",
        "city": "Rokiškio",
        "address": "Rokiškis, Panevėžio g. 5",
        "lat": 55.944511716228,
        "lng": 25.585613514104,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.959
        }
    },
    {
        "id": 689,
        "name": "Viada",
        "logo": "🦌",
        "city": "Rokiškio",
        "address": "Rokiškis, Žemaitės g. 2C",
        "lat": 55.934098794094,
        "lng": 25.58560429401,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.959
        }
    },
    {
        "id": 690,
        "name": "Viada",
        "logo": "🦌",
        "city": "Skuodo",
        "address": "Skuodas, Vilniaus g. 50",
        "lat": 56.270201963498,
        "lng": 21.547109215309,
        "prices": {
            "A95": 1.859,
            "A98": null,
            "Diesel": 1.899,
            "LPG": 0.859
        }
    },
    {
        "id": 691,
        "name": "Viada",
        "logo": "🦌",
        "city": "Šalčininkų",
        "address": "Jašiūnai, Lydos g. 13",
        "lat": 54.293333955246,
        "lng": 25.384525035221,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.899
        }
    },
    {
        "id": 692,
        "name": "Viada",
        "logo": "🦌",
        "city": "Šiaulių",
        "address": "Šiauliai, Dubijos g. 1C",
        "lat": 55.92652448729,
        "lng": 23.307082067852,
        "prices": {
            "A95": 1.729,
            "A98": null,
            "Diesel": 1.819,
            "LPG": 0.899
        }
    },
    {
        "id": 693,
        "name": "Viada",
        "logo": "🦌",
        "city": "Šiaulių",
        "address": "Šiauliai, Gegužių g. 26",
        "lat": 55.905373844274,
        "lng": 23.260154558001,
        "prices": {
            "A95": 1.759,
            "A98": null,
            "Diesel": 1.859,
            "LPG": 0.899
        }
    },
    {
        "id": 694,
        "name": "Viada",
        "logo": "🦌",
        "city": "Šiaulių",
        "address": "Šiauliai, J. Basanavičiaus g. 122A",
        "lat": 55.954719323644,
        "lng": 23.315961856076,
        "prices": {
            "A95": 1.759,
            "A98": null,
            "Diesel": 1.859,
            "LPG": 0.899
        }
    },
    {
        "id": 695,
        "name": "Viada",
        "logo": "🦌",
        "city": "Šiaulių",
        "address": "Šiauliai, Tilžės g. 274",
        "lat": 55.944238214728,
        "lng": 23.331162186028,
        "prices": {
            "A95": 1.759,
            "A98": null,
            "Diesel": 1.859,
            "LPG": 0.899
        }
    },
    {
        "id": 696,
        "name": "Viada",
        "logo": "🦌",
        "city": "Šiaulių",
        "address": "Šiauliai, Užmiesčio g. 2",
        "lat": 55.922685575635,
        "lng": 23.357931973114,
        "prices": {
            "A95": 1.759,
            "A98": null,
            "Diesel": 1.859,
            "LPG": 0.899
        }
    },
    {
        "id": 697,
        "name": "Viada",
        "logo": "🦌",
        "city": "Šiaulių",
        "address": "Aukštelkės k., Ilgoji g. 1",
        "lat": 55.881907449049,
        "lng": 23.205173547941,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.959
        }
    },
    {
        "id": 698,
        "name": "Viada",
        "logo": "🦌",
        "city": "Šiaulių",
        "address": "Kuršėnai, Vilniaus g. 38A",
        "lat": 55.924038897212,
        "lng": 23.341152692937,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.959
        }
    },
    {
        "id": 699,
        "name": "Viada",
        "logo": "🦌",
        "city": "Šiaulių",
        "address": "Kužiai, Draugystės g. 2",
        "lat": 55.924315604346,
        "lng": 23.318545410092,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.959
        }
    },
    {
        "id": 700,
        "name": "Viada",
        "logo": "🦌",
        "city": "Šilalės",
        "address": "Kuodaičių k.",
        "lat": 55.564248336194,
        "lng": 22.169493638973,
        "prices": {
            "A95": 1.889,
            "A98": null,
            "Diesel": 1.989,
            "LPG": 0.959
        }
    },
    {
        "id": 701,
        "name": "Viada",
        "logo": "🦌",
        "city": "Šilutės",
        "address": "Šilutė, Tilžės g. 59",
        "lat": 55.342872662164,
        "lng": 21.496699108508,
        "prices": {
            "A95": 1.779,
            "A98": null,
            "Diesel": 1.839,
            "LPG": 0.839
        }
    },
    {
        "id": 702,
        "name": "Viada",
        "logo": "🦌",
        "city": "Širvintų",
        "address": "Širvintos, Plento g. 4",
        "lat": 55.045695805478,
        "lng": 24.942563876949,
        "prices": {
            "A95": 1.759,
            "A98": null,
            "Diesel": 1.859,
            "LPG": 0.859
        }
    },
    {
        "id": 703,
        "name": "Viada",
        "logo": "🦌",
        "city": "Švenčionių",
        "address": "Švenčionys, Vilniaus g. 50A",
        "lat": 55.125471574778,
        "lng": 26.145308812217,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.959
        }
    },
    {
        "id": 704,
        "name": "Viada",
        "logo": "🦌",
        "city": "Švenčionių",
        "address": "Kaltanėnai, Utenos g. 1",
        "lat": 55.255235841151,
        "lng": 25.990543675605,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 1.999,
            "LPG": null
        }
    },
    {
        "id": 705,
        "name": "Viada",
        "logo": "🦌",
        "city": "Švenčionių",
        "address": "Pabradė, Vilniaus g. 116B",
        "lat": 54.975086359761,
        "lng": 25.744879565083,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 1.869,
            "LPG": 0.959
        }
    },
    {
        "id": 706,
        "name": "Viada",
        "logo": "🦌",
        "city": "Švenčionių",
        "address": "Švenčionėliai, Žemutinė g. 51A",
        "lat": 55.168512396127,
        "lng": 26.015010702431,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.959
        }
    },
    {
        "id": 707,
        "name": "Viada",
        "logo": "🦌",
        "city": "Tauragės",
        "address": "Tauragė, Dariaus ir Girėno g. 138A",
        "lat": 55.266248027452,
        "lng": 22.310768152732,
        "prices": {
            "A95": 1.739,
            "A98": null,
            "Diesel": 1.799,
            "LPG": 0.899
        }
    },
    {
        "id": 708,
        "name": "Viada",
        "logo": "🦌",
        "city": "Tauragės",
        "address": "Tauragė, Pramonės g. 1",
        "lat": 55.240858907458,
        "lng": 22.305239868492,
        "prices": {
            "A95": 1.719,
            "A98": null,
            "Diesel": 1.779,
            "LPG": 0.899
        }
    },
    {
        "id": 709,
        "name": "Viada",
        "logo": "🦌",
        "city": "Telšių",
        "address": "Telšiai, Pramonės g. 2A",
        "lat": 55.993350341913,
        "lng": 22.240155647621,
        "prices": {
            "A95": 1.739,
            "A98": null,
            "Diesel": 1.839,
            "LPG": 0.859
        }
    },
    {
        "id": 710,
        "name": "Viada",
        "logo": "🦌",
        "city": "Trakų",
        "address": "Aukštųjų Semeniukų k., Logistikos g. 9",
        "lat": 54.701967576846,
        "lng": 25.009346355223,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.959
        }
    },
    {
        "id": 711,
        "name": "Viada",
        "logo": "🦌",
        "city": "Ukmergės",
        "address": "Ukmergė, Žiedo g. 15",
        "lat": 55.246239251106,
        "lng": 24.74320299213,
        "prices": {
            "A95": 1.759,
            "A98": null,
            "Diesel": 1.859,
            "LPG": 0.859
        }
    },
    {
        "id": 712,
        "name": "Viada",
        "logo": "🦌",
        "city": "Ukmergės",
        "address": "Dukstynos k., Vytauto g. 131",
        "lat": 55.269155374388,
        "lng": 24.810113629703,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.959
        }
    },
    {
        "id": 713,
        "name": "Viada",
        "logo": "🦌",
        "city": "Ukmergės",
        "address": "Šventupės k., Beržų g. 13",
        "lat": 55.233191100624,
        "lng": 24.729226748991,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.959
        }
    },
    {
        "id": 714,
        "name": "Viada",
        "logo": "🦌",
        "city": "Utenos",
        "address": "Utena, Metalo g. 8",
        "lat": 55.497023447182,
        "lng": 25.630736232563,
        "prices": {
            "A95": 1.769,
            "A98": null,
            "Diesel": 1.859,
            "LPG": 0.899
        }
    },
    {
        "id": 715,
        "name": "Viada",
        "logo": "🦌",
        "city": "Utenos",
        "address": "Utena, Pramonės g. 23",
        "lat": 55.490085829743,
        "lng": 25.650927482942,
        "prices": {
            "A95": 1.769,
            "A98": null,
            "Diesel": 1.859,
            "LPG": 0.899
        }
    },
    {
        "id": 716,
        "name": "Viada",
        "logo": "🦌",
        "city": "Utenos",
        "address": "Gedimino k., Vyturio g. 2",
        "lat": 55.478130553606,
        "lng": 25.581893374017,
        "prices": {
            "A95": 1.769,
            "A98": null,
            "Diesel": 1.859,
            "LPG": 0.899
        }
    },
    {
        "id": 717,
        "name": "Viada",
        "logo": "🦌",
        "city": "Varėnos",
        "address": "Valkininkai, Vilniaus g. 6",
        "lat": 54.256778421931,
        "lng": 24.547881933184,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.959
        }
    },
    {
        "id": 718,
        "name": "Viada",
        "logo": "🦌",
        "city": "Elektrėnų",
        "address": "Vievis, Kauno g. 26A",
        "lat": 54.770963566609,
        "lng": 24.822760019376,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.959
        }
    },
    {
        "id": 719,
        "name": "Viada",
        "logo": "🦌",
        "city": "Vilkaviškio",
        "address": "Vilkaviškis, Vytauto g. 105",
        "lat": 54.647676606964,
        "lng": 23.029109576265,
        "prices": {
            "A95": 1.859,
            "A98": null,
            "Diesel": 1.959,
            "LPG": 0.829
        }
    },
    {
        "id": 720,
        "name": "Viada",
        "logo": "🦌",
        "city": "Vilnius",
        "address": "Avižienių k., Ožiarūčių g. 1a",
        "lat": 54.763935573755,
        "lng": 25.196646184286,
        "prices": {
            "A95": 1.759,
            "A98": null,
            "Diesel": 1.859,
            "LPG": 0.859
        }
    },
    {
        "id": 721,
        "name": "Viada",
        "logo": "🦌",
        "city": "Vilnius",
        "address": "Vilnius, Ateities g. 17B",
        "lat": 54.735759931959,
        "lng": 25.258443525647,
        "prices": {
            "A95": 1.719,
            "A98": null,
            "Diesel": 1.799,
            "LPG": 0.809
        }
    },
    {
        "id": 722,
        "name": "Viada",
        "logo": "🦌",
        "city": "Vilnius",
        "address": "Vilnius, Dariaus ir Girėno g. 30A",
        "lat": 54.652974807961,
        "lng": 25.27210971586,
        "prices": {
            "A95": 1.759,
            "A98": null,
            "Diesel": 1.899,
            "LPG": 0.959
        }
    },
    {
        "id": 723,
        "name": "Viada",
        "logo": "🦌",
        "city": "Vilnius",
        "address": "Vilnius, Gariūnų g. 16A",
        "lat": 54.667292733056,
        "lng": 25.173851263325,
        "prices": {
            "A95": 1.759,
            "A98": null,
            "Diesel": 1.859,
            "LPG": 0.899
        }
    },
    {
        "id": 724,
        "name": "Viada",
        "logo": "🦌",
        "city": "Vilnius",
        "address": "Vilnius, Grigiškės, Kovo 11-osios g. 75",
        "lat": 54.669217427573,
        "lng": 25.104870630943,
        "prices": {
            "A95": 1.759,
            "A98": null,
            "Diesel": 1.859,
            "LPG": 0.899
        }
    },
    {
        "id": 725,
        "name": "Viada",
        "logo": "🦌",
        "city": "Vilnius",
        "address": "Vilnius, Justiniškių g. 12",
        "lat": 54.703261616967,
        "lng": 25.219452839913,
        "prices": {
            "A95": 1.719,
            "A98": null,
            "Diesel": 1.819,
            "LPG": null
        }
    },
    {
        "id": 726,
        "name": "Viada",
        "logo": "🦌",
        "city": "Vilnius",
        "address": "Vilnius, Kirtimų g. 29",
        "lat": 54.633287938607,
        "lng": 25.150721401512,
        "prices": {
            "A95": 1.759,
            "A98": null,
            "Diesel": 1.859,
            "LPG": 0.879
        }
    },
    {
        "id": 727,
        "name": "Viada",
        "logo": "🦌",
        "city": "Vilnius",
        "address": "Vilnius, Laisvės pr. 8",
        "lat": 54.674321922788,
        "lng": 25.222678866807,
        "prices": {
            "A95": 1.759,
            "A98": null,
            "Diesel": 1.859,
            "LPG": 0.959
        }
    },
    {
        "id": 728,
        "name": "Viada",
        "logo": "🦌",
        "city": "Vilnius",
        "address": "Vilnius, Liepkalnio g. 128A",
        "lat": 54.647477285307,
        "lng": 25.304044264045,
        "prices": {
            "A95": 1.759,
            "A98": null,
            "Diesel": 1.859,
            "LPG": 0.959
        }
    },
    {
        "id": 729,
        "name": "Viada",
        "logo": "🦌",
        "city": "Vilnius",
        "address": "Vilnius, Naugarduko g. 74",
        "lat": 54.671251883112,
        "lng": 25.261812380171,
        "prices": {
            "A95": 1.759,
            "A98": null,
            "Diesel": 1.859,
            "LPG": 0.959
        }
    },
    {
        "id": 730,
        "name": "Viada",
        "logo": "🦌",
        "city": "Vilnius",
        "address": "Vilnius, Nemenčinės pl. 5",
        "lat": 54.726327105764,
        "lng": 25.326509524754,
        "prices": {
            "A95": 1.759,
            "A98": null,
            "Diesel": 1.859,
            "LPG": 0.899
        }
    },
    {
        "id": 731,
        "name": "Viada",
        "logo": "🦌",
        "city": "Vilnius",
        "address": "Vilnius, Olandų g. 57",
        "lat": 54.68191114938,
        "lng": 25.314034235344,
        "prices": {
            "A95": 1.759,
            "A98": null,
            "Diesel": 1.859,
            "LPG": 0.959
        }
    },
    {
        "id": 732,
        "name": "Viada",
        "logo": "🦌",
        "city": "Vilnius",
        "address": "Vilnius, Ozo g. 12",
        "lat": 54.713801315387,
        "lng": 25.277101893573,
        "prices": {
            "A95": 1.719,
            "A98": null,
            "Diesel": 1.819,
            "LPG": 0.959
        }
    },
    {
        "id": 733,
        "name": "Viada",
        "logo": "🦌",
        "city": "Vilnius",
        "address": "Vilnius, Pilaitės pr. 13",
        "lat": 54.702859453253,
        "lng": 25.203955539132,
        "prices": {
            "A95": 1.759,
            "A98": null,
            "Diesel": 1.859,
            "LPG": 0.959
        }
    },
    {
        "id": 734,
        "name": "Viada",
        "logo": "🦌",
        "city": "Vilnius",
        "address": "Vilnius, Pilaitės pr. 28",
        "lat": 54.70147291883,
        "lng": 25.203324884737,
        "prices": {
            "A95": 1.759,
            "A98": null,
            "Diesel": 1.899,
            "LPG": 0.959
        }
    },
    {
        "id": 735,
        "name": "Viada",
        "logo": "🦌",
        "city": "Vilnius",
        "address": "Vilnius, Saltoniškių g. 12",
        "lat": 54.699353177426,
        "lng": 25.259829724794,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.799,
            "LPG": 0.959
        }
    },
    {
        "id": 736,
        "name": "Viada",
        "logo": "🦌",
        "city": "Vilnius",
        "address": "Vilnius, Sodų g. 22",
        "lat": 54.670655091605,
        "lng": 25.281856192873,
        "prices": {
            "A95": 1.759,
            "A98": null,
            "Diesel": 1.859,
            "LPG": 0.899
        }
    },
    {
        "id": 737,
        "name": "Viada",
        "logo": "🦌",
        "city": "Vilnius",
        "address": "Vilnius, Verkių g. 52",
        "lat": 54.720352233723,
        "lng": 25.295702761643,
        "prices": {
            "A95": 1.759,
            "A98": null,
            "Diesel": 1.799,
            "LPG": null
        }
    },
    {
        "id": 738,
        "name": "Viada",
        "logo": "🦌",
        "city": "Vilnius",
        "address": "Vilnius, Vilkpėdės g. 2",
        "lat": 54.665005395499,
        "lng": 25.246318348332,
        "prices": {
            "A95": 1.759,
            "A98": null,
            "Diesel": 1.859,
            "LPG": null
        }
    },
    {
        "id": 739,
        "name": "Viada",
        "logo": "🦌",
        "city": "Visagino",
        "address": "Visaginas, Statybininkų g. 1",
        "lat": 55.594458838736,
        "lng": 26.438903159666,
        "prices": {
            "A95": 1.859,
            "A98": null,
            "Diesel": 1.959,
            "LPG": 0.899
        }
    },
    {
        "id": 740,
        "name": "Viada",
        "logo": "🦌",
        "city": "Visagino",
        "address": "Visaginas, Taikos pr. 23B",
        "lat": 55.594871018825,
        "lng": 26.456513119143,
        "prices": {
            "A95": 1.859,
            "A98": null,
            "Diesel": 1.959,
            "LPG": 0.899
        }
    },
    {
        "id": 741,
        "name": "Viada",
        "logo": "🦌",
        "city": "Zarasų",
        "address": "Juodalaukių k. 2",
        "lat": 55.719610514,
        "lng": 26.210579098,
        "prices": {
            "A95": 1.859,
            "A98": null,
            "Diesel": 1.959,
            "LPG": 0.899
        }
    },
    {
        "id": 742,
        "name": "Vildega",
        "logo": "⛽",
        "city": "Vilkaviškio",
        "address": "Vytauto g. 2D, Vilkaviškis",
        "lat": 54.643311144152,
        "lng": 23.053135044432,
        "prices": {
            "A95": 1.759,
            "A98": null,
            "Diesel": 1.859,
            "LPG": 0.79
        }
    },
    {
        "id": 743,
        "name": "Vimijula",
        "logo": "⛽",
        "city": "Jonavos",
        "address": "Kauno g. 2A, Ručiūnų k.",
        "lat": 55.137903823116,
        "lng": 24.193454833791,
        "prices": {
            "A95": 1.82,
            "A98": null,
            "Diesel": 1.92,
            "LPG": 0.93
        }
    },
    {
        "id": 744,
        "name": "Virši",
        "logo": "⛽",
        "city": "Marijampolės",
        "address": "L.Taunio g. 3, Pasūduonės km.",
        "lat": 54.478964905478,
        "lng": 23.22357274742,
        "prices": {
            "A95": 1.724,
            "A98": null,
            "Diesel": 1.824,
            "LPG": 0.794
        }
    },
    {
        "id": 745,
        "name": "Visvilas",
        "logo": "⛽",
        "city": "Mažeikių",
        "address": "Laukų g. 2C.,Tirkšlių m.",
        "lat": 56.258202263274,
        "lng": 22.309466443169,
        "prices": {
            "A95": 1.75,
            "A98": null,
            "Diesel": 1.82,
            "LPG": 0.8
        }
    },
    {
        "id": 746,
        "name": "Vlantana",
        "logo": "⛽",
        "city": "Klaipėda",
        "address": "Dvaro g. 1, Gobergiškės k.",
        "lat": 55.719633887391,
        "lng": 21.293935590095,
        "prices": {
            "A95": 1.74,
            "A98": null,
            "Diesel": 1.8,
            "LPG": null
        }
    },
    {
        "id": 747,
        "name": "VVARFF (Circle K)",
        "logo": "🔴",
        "city": "Plungės",
        "address": "Pramogų g. 4, Truikių k.",
        "lat": 55.938947054529,
        "lng": 21.880118121337,
        "prices": {
            "A95": 1.776,
            "A98": null,
            "Diesel": 1.876,
            "LPG": 0.886
        }
    },
    {
        "id": 748,
        "name": "Žibalas",
        "logo": "⛽",
        "city": "Jonavos",
        "address": "Jonava, Taurostos g. 16a",
        "lat": 55.070245320311,
        "lng": 24.293809404831,
        "prices": {
            "A95": 1.83,
            "A98": null,
            "Diesel": 1.9,
            "LPG": 0.91
        }
    }
];