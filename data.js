// Automatiškai sugeneruoti duomenys iš kurohudas.lt
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
        "name": "Circle K",
        "logo": "🔴",
        "city": "Vilnius",
        "address": "Prūsų g. 26A",
        "lat": 54.65856164437176,
        "lng": 25.26633242540679,
        "prices": {
            "A95": 1.859,
            "A98": 1.939,
            "Diesel": 1.959,
            "LPG": 0.959
        }
    },
    {
        "id": 2,
        "name": "Neste",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Žirnių g. 17",
        "lat": 54.65662770906336,
        "lng": 25.29204673210407,
        "prices": {
            "A95": 1.769,
            "A98": null,
            "Diesel": 1.884,
            "LPG": null
        }
    },
    {
        "id": 3,
        "name": "Neste",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Talino g. 2C",
        "lat": 54.71377075770388,
        "lng": 25.20910569985162,
        "prices": {
            "A95": 1.774,
            "A98": 1.854,
            "Diesel": 1.854,
            "LPG": null
        }
    },
    {
        "id": 4,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Vilnius",
        "address": "P. Žadeikos g. 1A",
        "lat": 54.73049658116496,
        "lng": 25.23902704957303,
        "prices": {
            "A95": 1.839,
            "A98": 1.928,
            "Diesel": 1.919,
            "LPG": 0.949
        }
    },
    {
        "id": 5,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Vilnius",
        "address": "Oslo g. 12",
        "lat": 54.67103205173669,
        "lng": 25.1921299289435,
        "prices": {
            "A95": 1.779,
            "A98": null,
            "Diesel": 1.849,
            "LPG": null
        }
    },
    {
        "id": 6,
        "name": "Alauša",
        "logo": "⛽",
        "city": "Vilnius",
        "address": "Laisvės pr. 125A",
        "lat": 54.72771099105574,
        "lng": 25.23533263964038,
        "prices": {
            "A95": 1.789,
            "A98": 1.819,
            "Diesel": 1.879,
            "LPG": null
        }
    },
    {
        "id": 7,
        "name": "Neste",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Gariūnų g. 55",
        "lat": 54.6583244185077,
        "lng": 25.15897698760271,
        "prices": {
            "A95": 1.769,
            "A98": null,
            "Diesel": 1.829,
            "LPG": null
        }
    },
    {
        "id": 8,
        "name": "EMSI",
        "logo": "🛢️",
        "city": "Vilnius",
        "address": "Savanorių pr. 225",
        "lat": 54.64090804996842,
        "lng": 25.18426115906311,
        "prices": {
            "A95": 1.769,
            "A98": 1.799,
            "Diesel": 1.869,
            "LPG": 0.849
        }
    },
    {
        "id": 9,
        "name": "EMSI",
        "logo": "🛢️",
        "city": "Vilnius",
        "address": "Pajautos g. 31",
        "lat": 54.7102501242619,
        "lng": 25.16207138070829,
        "prices": {
            "A95": 1.769,
            "A98": 1.899,
            "Diesel": 1.86,
            "LPG": 0.86
        }
    },
    {
        "id": 10,
        "name": "Neste",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Kauno g. 26",
        "lat": 54.67159756361756,
        "lng": 25.27000947612614,
        "prices": {
            "A95": 1.789,
            "A98": 1.859,
            "Diesel": 1.899,
            "LPG": null
        }
    },
    {
        "id": 11,
        "name": "Neste",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Rygos g. 2",
        "lat": 54.71555643055593,
        "lng": 25.22901036057175,
        "prices": {
            "A95": 1.754,
            "A98": 1.834,
            "Diesel": 1.854,
            "LPG": 0.85
        }
    },
    {
        "id": 12,
        "name": "EMSI",
        "logo": "🛢️",
        "city": "Vilnius",
        "address": "Laisvės pr. 80B",
        "lat": 54.72346034383701,
        "lng": 25.23289768756159,
        "prices": {
            "A95": 1.749,
            "A98": 1.859,
            "Diesel": 1.839,
            "LPG": 0.889
        }
    },
    {
        "id": 13,
        "name": "Jozita",
        "logo": "🟡",
        "city": "Rudaminos sen.",
        "address": "Jašiūnų g. 2",
        "lat": 54.59726252057038,
        "lng": 25.31495936496432,
        "prices": {
            "A95": 1.79,
            "A98": 1.79,
            "Diesel": 1.87,
            "LPG": 0.78
        }
    },
    {
        "id": 14,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Vilnius",
        "address": "Geležinio Vilko g. 39",
        "lat": 54.70233131326255,
        "lng": 25.26463892334789,
        "prices": {
            "A95": 1.784,
            "A98": null,
            "Diesel": 1.851,
            "LPG": 0.951
        }
    },
    {
        "id": 15,
        "name": "Neste",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Geležinio Vilko g. 37",
        "lat": 54.70137872018208,
        "lng": 25.26378695040211,
        "prices": {
            "A95": 1.764,
            "A98": null,
            "Diesel": 1.834,
            "LPG": null
        }
    },
    {
        "id": 16,
        "name": "Neste",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Molėtų pl. 8",
        "lat": 54.754863206922,
        "lng": 25.27140287973618,
        "prices": {
            "A95": 1.734,
            "A98": 1.819,
            "Diesel": 1.829,
            "LPG": null
        }
    },
    {
        "id": 17,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Vilnius",
        "address": "Ukmergės g. 231",
        "lat": 54.72018788540043,
        "lng": 25.24624122778792,
        "prices": {
            "A95": 1.849,
            "A98": null,
            "Diesel": 1.959,
            "LPG": null
        }
    },
    {
        "id": 18,
        "name": "Neste",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "S. Stanevičiaus g. 3",
        "lat": 54.7214510999082,
        "lng": 25.25618393905753,
        "prices": {
            "A95": 1.749,
            "A98": 1.859,
            "Diesel": 1.889,
            "LPG": 0.84
        }
    },
    {
        "id": 19,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Užubaliai",
        "address": "Vilniaus r.",
        "lat": 54.768547,
        "lng": 25.195795,
        "prices": {
            "A95": 1.829,
            "A98": 1.974,
            "Diesel": 1.894,
            "LPG": 0.829
        }
    },
    {
        "id": 20,
        "name": "A. Lingės degalinė",
        "logo": "⛽",
        "city": "Vilnius",
        "address": "Minsko pl. 40",
        "lat": 54.64190163723683,
        "lng": 25.35277800578637,
        "prices": {
            "A95": 1.79,
            "A98": 1.84,
            "Diesel": 1.89,
            "LPG": null
        }
    },
    {
        "id": 21,
        "name": "Neste",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Erfurto g. 41",
        "lat": 54.67260704777315,
        "lng": 25.19825390725514,
        "prices": {
            "A95": 1.769,
            "A98": 1.849,
            "Diesel": 1.829,
            "LPG": null
        }
    },
    {
        "id": 22,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Vilnius",
        "address": "Gariūnų g. 45",
        "lat": 54.65881851343577,
        "lng": 25.16086647662532,
        "prices": {
            "A95": 1.789,
            "A98": null,
            "Diesel": 1.859,
            "LPG": null
        }
    },
    {
        "id": 23,
        "name": "Viada",
        "logo": "🦌",
        "city": "Vilnius",
        "address": "Gariūnų g. 16A",
        "lat": 54.66727417807511,
        "lng": 25.1739127803558,
        "prices": {
            "A95": 1.839,
            "A98": null,
            "Diesel": 1.939,
            "LPG": 0.959
        }
    },
    {
        "id": 24,
        "name": "Jozita",
        "logo": "🟡",
        "city": "Vilnius",
        "address": "Ukmergės g. 130",
        "lat": 54.70312241476525,
        "lng": 25.25769664585425,
        "prices": {
            "A95": 1.79,
            "A98": null,
            "Diesel": 1.87,
            "LPG": 0.78
        }
    },
    {
        "id": 25,
        "name": "Neste",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Geležinio Vilko g. 41",
        "lat": 54.70417528806448,
        "lng": 25.26703934259151,
        "prices": {
            "A95": 1.764,
            "A98": 1.844,
            "Diesel": 1.834,
            "LPG": null
        }
    },
    {
        "id": 26,
        "name": "Stateta",
        "logo": "⛽",
        "city": "Vilnius",
        "address": "Ukmergės g. 246",
        "lat": 54.72321329417767,
        "lng": 25.24125767180964,
        "prices": {
            "A95": 1.749,
            "A98": null,
            "Diesel": 1.859,
            "LPG": 0.899
        }
    },
    {
        "id": 27,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Vilnius",
        "address": "Geležinio Vilko g. 4",
        "lat": 54.70290322159953,
        "lng": 25.26408261034814,
        "prices": {
            "A95": 1.784,
            "A98": null,
            "Diesel": 1.854,
            "LPG": 0.959
        }
    },
    {
        "id": 28,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Vilnius",
        "address": "Geležinio Vilko g. 2A",
        "lat": 54.67091902763911,
        "lng": 25.23657683345884,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.959
        }
    },
    {
        "id": 29,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Vilnius",
        "address": "Eišiškių pl. 11",
        "lat": 54.65156532708755,
        "lng": 25.26941569239667,
        "prices": {
            "A95": 1.859,
            "A98": null,
            "Diesel": 1.959,
            "LPG": 0.959
        }
    },
    {
        "id": 30,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Vilnius",
        "address": "B. Brazdžionio g. 2",
        "lat": 54.614544,
        "lng": 25.30877,
        "prices": {
            "A95": 1.779,
            "A98": 1.849,
            "Diesel": 1.874,
            "LPG": null
        }
    },
    {
        "id": 31,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Vilnius",
        "address": "Laisvės pr. 43C",
        "lat": 54.70919425605932,
        "lng": 25.22815064169976,
        "prices": {
            "A95": 1.774,
            "A98": null,
            "Diesel": 1.874,
            "LPG": 0.959
        }
    },
    {
        "id": 32,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Vilnius",
        "address": "Savanorių pr. 119A",
        "lat": 54.6626972393775,
        "lng": 25.23479247675351,
        "prices": {
            "A95": 1.904,
            "A98": 1.969,
            "Diesel": 1.904,
            "LPG": 0.919
        }
    },
    {
        "id": 33,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Vilnius",
        "address": "Savanorių pr. 118",
        "lat": 54.66173982394228,
        "lng": 25.23527495786157,
        "prices": {
            "A95": 1.904,
            "A98": 1.969,
            "Diesel": 1.914,
            "LPG": 0.919
        }
    },
    {
        "id": 34,
        "name": "EMSI",
        "logo": "🛢️",
        "city": "Grigiškių sen.",
        "address": "Neravai (Vilnius",
        "lat": 54.66841326084606,
        "lng": 25.11167190729147,
        "prices": {
            "A95": 1.799,
            "A98": 1.879,
            "Diesel": 1.899,
            "LPG": 0.879
        }
    },
    {
        "id": 35,
        "name": "Viada",
        "logo": "🦌",
        "city": "Grigiškės",
        "address": "Kovo 11",
        "lat": 54.66921743174522,
        "lng": 25.10487061940423,
        "prices": {
            "A95": 1.859,
            "A98": 1.959,
            "Diesel": 1.959,
            "LPG": 0.959
        }
    },
    {
        "id": 36,
        "name": "Neste",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Justiniškių g. 14B",
        "lat": 54.7050052218859,
        "lng": 25.21494314466058,
        "prices": {
            "A95": 1.744,
            "A98": null,
            "Diesel": 1.844,
            "LPG": null
        }
    },
    {
        "id": 37,
        "name": "Alauša",
        "logo": "⛽",
        "city": "Vilnius",
        "address": "Kirtimų g. 23A",
        "lat": 54.65114727469383,
        "lng": 25.15023419558586,
        "prices": {
            "A95": 1.769,
            "A98": 1.899,
            "Diesel": 1.839,
            "LPG": 0.859
        }
    },
    {
        "id": 38,
        "name": "Neste",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Kedrų g. 2",
        "lat": 54.67721056479541,
        "lng": 25.2556550127988,
        "prices": {
            "A95": 1.809,
            "A98": 1.889,
            "Diesel": 1.919,
            "LPG": null
        }
    },
    {
        "id": 39,
        "name": "Neste",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Savanorių pr. 187D",
        "lat": 54.64792221270017,
        "lng": 25.21189176455311,
        "prices": {
            "A95": 1.789,
            "A98": null,
            "Diesel": 1.894,
            "LPG": null
        }
    },
    {
        "id": 40,
        "name": "Neste",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Savanorių pr. 220A",
        "lat": 54.64439953033898,
        "lng": 25.20741766238402,
        "prices": {
            "A95": 1.789,
            "A98": 1.869,
            "Diesel": 1.894,
            "LPG": null
        }
    },
    {
        "id": 41,
        "name": "Viada",
        "logo": "🦌",
        "city": "Vilnius",
        "address": "Saltoniškių g. 12",
        "lat": 54.69945953106311,
        "lng": 25.25997264264863,
        "prices": {
            "A95": 1.799,
            "A98": 1.939,
            "Diesel": 1.899,
            "LPG": 0.959
        }
    },
    {
        "id": 42,
        "name": "Viada",
        "logo": "🦌",
        "city": "Dariaus ir Girėno g. 30A",
        "address": "Vilnius",
        "lat": 54.65286700790748,
        "lng": 25.27210630943265,
        "prices": {
            "A95": 1.859,
            "A98": null,
            "Diesel": 1.959,
            "LPG": 0.959
        }
    },
    {
        "id": 43,
        "name": "Neste",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Dariaus ir Girėno g. 17",
        "lat": 54.6551917185153,
        "lng": 25.27064461073768,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 1.899,
            "LPG": 0.89
        }
    },
    {
        "id": 44,
        "name": "Neste",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Žirmūnų g. 68B",
        "lat": 54.71750833324291,
        "lng": 25.30449064008688,
        "prices": {
            "A95": 1.764,
            "A98": 1.844,
            "Diesel": 1.904,
            "LPG": null
        }
    },
    {
        "id": 45,
        "name": "EMSI",
        "logo": "🛢️",
        "city": "Vilnius",
        "address": "Kareivių g. 4",
        "lat": 54.71786335589203,
        "lng": 25.29568544842674,
        "prices": {
            "A95": 1.779,
            "A98": null,
            "Diesel": 1.889,
            "LPG": 0.859
        }
    },
    {
        "id": 46,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Vilnius",
        "address": "Rinktinės g. 59",
        "lat": 54.702833,
        "lng": 25.288126,
        "prices": {
            "A95": 1.759,
            "A98": 1.839,
            "Diesel": 1.879,
            "LPG": 0.839
        }
    },
    {
        "id": 47,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Vilnius",
        "address": "Baltupio g. 10",
        "lat": 54.73595460687649,
        "lng": 25.26563948798698,
        "prices": {
            "A95": 1.789,
            "A98": null,
            "Diesel": 1.894,
            "LPG": 0.879
        }
    },
    {
        "id": 48,
        "name": "Viada",
        "logo": "🦌",
        "city": "Vilnius",
        "address": "Kirtimų g. 29",
        "lat": 54.63332329834068,
        "lng": 25.15078437763621,
        "prices": {
            "A95": 1.859,
            "A98": 1.959,
            "Diesel": 1.959,
            "LPG": 0.959
        }
    },
    {
        "id": 49,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Vilnius",
        "address": "Kareivių g. 13",
        "lat": 54.71861164217726,
        "lng": 25.30049022929181,
        "prices": {
            "A95": 1.854,
            "A98": null,
            "Diesel": 1.959,
            "LPG": 0.959
        }
    },
    {
        "id": 50,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Vilnius",
        "address": "Kareivių g. 3",
        "lat": 54.71550696332742,
        "lng": 25.29082975352735,
        "prices": {
            "A95": 1.789,
            "A98": null,
            "Diesel": 1.889,
            "LPG": 0.919
        }
    },
    {
        "id": 51,
        "name": "Alauša",
        "logo": "⛽",
        "city": "Vilnius",
        "address": "Buivydiškių g. 5",
        "lat": 54.71086509230291,
        "lng": 25.24055455238721,
        "prices": {
            "A95": 1.799,
            "A98": 1.819,
            "Diesel": 1.889,
            "LPG": null
        }
    },
    {
        "id": 52,
        "name": "Viada",
        "logo": "🦌",
        "city": "Avižieniai",
        "address": "Ožiarūčių g. 1A",
        "lat": 54.76393556151198,
        "lng": 25.19664621855614,
        "prices": {
            "A95": 1.889,
            "A98": 2.059,
            "Diesel": 1.959,
            "LPG": 0.859
        }
    },
    {
        "id": 53,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Avižieniai",
        "address": "Sudervės g. 2D",
        "lat": 54.76205943953224,
        "lng": 25.19918585858561,
        "prices": {
            "A95": 1.959,
            "A98": 1.903,
            "Diesel": 2.0,
            "LPG": 0.959
        }
    },
    {
        "id": 54,
        "name": "Neste",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "P. Lukšio g. 22",
        "lat": 54.71194394264726,
        "lng": 25.29295142798171,
        "prices": {
            "A95": 1.754,
            "A98": null,
            "Diesel": 1.869,
            "LPG": 0.89
        }
    },
    {
        "id": 55,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Vilnius",
        "address": "Talino g. 2B",
        "lat": 54.71342924711023,
        "lng": 25.20911105779663,
        "prices": {
            "A95": 1.843,
            "A98": null,
            "Diesel": 1.904,
            "LPG": 0.969
        }
    },
    {
        "id": 56,
        "name": "Neste",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Pilaitės pr. 27",
        "lat": 54.70888552529534,
        "lng": 25.1897328780135,
        "prices": {
            "A95": 1.759,
            "A98": 1.839,
            "Diesel": 1.844,
            "LPG": null
        }
    },
    {
        "id": 57,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Vilnius",
        "address": "Gerosios Vilties g. 33",
        "lat": 54.666834,
        "lng": 25.251065,
        "prices": {
            "A95": 1.859,
            "A98": null,
            "Diesel": 1.949,
            "LPG": 0.859
        }
    },
    {
        "id": 58,
        "name": "Egas LPG",
        "logo": "⛽",
        "city": "Vilnius",
        "address": "Eišiškių pl.",
        "lat": 54.62131986604905,
        "lng": 25.2425570131925,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 2.269,
            "LPG": 0.89
        }
    },
    {
        "id": 59,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Vilnius",
        "address": "Kalvarijų g. 161A",
        "lat": 54.723999,
        "lng": 25.282324,
        "prices": {
            "A95": 1.777,
            "A98": null,
            "Diesel": 1.889,
            "LPG": 0.799
        }
    },
    {
        "id": 60,
        "name": "Viada",
        "logo": "🦌",
        "city": "Vilnius",
        "address": "Justiniškių g. 12",
        "lat": 54.70250197217955,
        "lng": 25.21904216569531,
        "prices": {
            "A95": 1.829,
            "A98": null,
            "Diesel": 1.904,
            "LPG": null
        }
    },
    {
        "id": 61,
        "name": "Alauša",
        "logo": "⛽",
        "city": "Vilnius",
        "address": "Šv. Stepono g. 44",
        "lat": 54.66912400602261,
        "lng": 25.27878479680534,
        "prices": {
            "A95": 1.759,
            "A98": 1.799,
            "Diesel": 1.859,
            "LPG": null
        }
    },
    {
        "id": 62,
        "name": "EMSI",
        "logo": "🛢️",
        "city": "Vilnius",
        "address": "Liepkalnio g. 112A",
        "lat": 54.65276994324628,
        "lng": 25.30571696503082,
        "prices": {
            "A95": 1.759,
            "A98": 1.859,
            "Diesel": 1.859,
            "LPG": 0.83
        }
    },
    {
        "id": 63,
        "name": "EMSI",
        "logo": "🛢️",
        "city": "Vilnius",
        "address": "Ukmergės g. 437",
        "lat": 54.75360483995487,
        "lng": 25.21175286922585,
        "prices": {
            "A95": 1.859,
            "A98": null,
            "Diesel": 1.919,
            "LPG": 0.85
        }
    },
    {
        "id": 64,
        "name": "Neste",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Ukmergės g. 296",
        "lat": 54.73616587417953,
        "lng": 25.23115602546852,
        "prices": {
            "A95": 1.779,
            "A98": null,
            "Diesel": 1.844,
            "LPG": null
        }
    },
    {
        "id": 65,
        "name": "Egas LPG",
        "logo": "⛽",
        "city": "Vilnius",
        "address": "Architektų g. 130",
        "lat": 54.68070177065575,
        "lng": 25.20785300082527,
        "prices": {
            "A95": 1.914,
            "A98": null,
            "Diesel": 2.034,
            "LPG": 0.89
        }
    },
    {
        "id": 66,
        "name": "Viada",
        "logo": "🦌",
        "city": "Vilnius",
        "address": "Dariaus ir Girėno g. 18A",
        "lat": 54.6528823183538,
        "lng": 25.27198803954287,
        "prices": {
            "A95": 1.859,
            "A98": 1.919,
            "Diesel": 1.959,
            "LPG": 0.959
        }
    },
    {
        "id": 67,
        "name": "A. Lingės degalinė",
        "logo": "⛽",
        "city": "Nemėžio sen.",
        "address": "Topolių g. 1",
        "lat": 54.6442592,
        "lng": 25.3367794,
        "prices": {
            "A95": 1.79,
            "A98": 1.84,
            "Diesel": 1.89,
            "LPG": 0.84
        }
    },
    {
        "id": 68,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Vilnius",
        "address": "A. P. Kavoliuko g. 32A",
        "lat": 54.69589616410293,
        "lng": 25.21916988758106,
        "prices": {
            "A95": 1.839,
            "A98": null,
            "Diesel": 1.939,
            "LPG": 0.959
        }
    },
    {
        "id": 69,
        "name": "EMSI",
        "logo": "🛢️",
        "city": "Vilnius",
        "address": "Jeruzalės g. 2",
        "lat": 54.73987004348816,
        "lng": 25.27615148700033,
        "prices": {
            "A95": 1.739,
            "A98": 1.839,
            "Diesel": 1.919,
            "LPG": 0.839
        }
    },
    {
        "id": 70,
        "name": "Neste",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Architektų g. 130",
        "lat": 54.68074339409625,
        "lng": 25.207782721532,
        "prices": {
            "A95": 1.804,
            "A98": null,
            "Diesel": 1.904,
            "LPG": 0.89
        }
    },
    {
        "id": 71,
        "name": "Viada",
        "logo": "🦌",
        "city": "Vilnius",
        "address": "Laisvės pr. 8",
        "lat": 54.6741507753479,
        "lng": 25.22272022864459,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.959
        }
    },
    {
        "id": 72,
        "name": "Neste",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Parodų g. 1A",
        "lat": 54.67341773081548,
        "lng": 25.22412466749446,
        "prices": {
            "A95": 1.809,
            "A98": 1.889,
            "Diesel": 1.909,
            "LPG": null
        }
    },
    {
        "id": 73,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Vilnius",
        "address": "A. Goštauto g. 13",
        "lat": 54.69441010188865,
        "lng": 25.2633686770277,
        "prices": {
            "A95": 1.844,
            "A98": null,
            "Diesel": 1.969,
            "LPG": null
        }
    },
    {
        "id": 74,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Vilnius",
        "address": "Savanoriu pr. 121",
        "lat": 54.660926,
        "lng": 25.233389,
        "prices": {
            "A95": 1.819,
            "A98": 1.919,
            "Diesel": 1.919,
            "LPG": 0.849
        }
    },
    {
        "id": 75,
        "name": "EMSI",
        "logo": "🛢️",
        "city": "Vilnius",
        "address": "Kirtimų g. 33",
        "lat": 54.62737968119305,
        "lng": 25.14931563557768,
        "prices": {
            "A95": 1.839,
            "A98": 1.809,
            "Diesel": 1.929,
            "LPG": 0.849
        }
    },
    {
        "id": 76,
        "name": "Neste",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Subačiaus g. 64",
        "lat": 54.67683812826259,
        "lng": 25.30951301381687,
        "prices": {
            "A95": 1.789,
            "A98": null,
            "Diesel": 1.889,
            "LPG": null
        }
    },
    {
        "id": 77,
        "name": "Viada",
        "logo": "🦌",
        "city": "Vilnius",
        "address": "Olandų g. 57",
        "lat": 54.68210161875903,
        "lng": 25.31386975375825,
        "prices": {
            "A95": 1.939,
            "A98": 1.859,
            "Diesel": 1.959,
            "LPG": 0.959
        }
    },
    {
        "id": 78,
        "name": "Neste",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Panerių g. 42",
        "lat": 54.66819102800463,
        "lng": 25.26494216869995,
        "prices": {
            "A95": 1.824,
            "A98": null,
            "Diesel": 1.899,
            "LPG": null
        }
    },
    {
        "id": 79,
        "name": "Viada",
        "logo": "🦌",
        "city": "Vilnius",
        "address": "Pilaitės pr. 13",
        "lat": 54.70285944452844,
        "lng": 25.20395556251661,
        "prices": {
            "A95": 1.859,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.959
        }
    },
    {
        "id": 80,
        "name": "Alauša",
        "logo": "⛽",
        "city": "Vilnius",
        "address": "Šiaurės g. 39",
        "lat": 54.70346346098306,
        "lng": 25.41579179931509,
        "prices": {
            "A95": 1.729,
            "A98": null,
            "Diesel": 1.839,
            "LPG": 0.799
        }
    },
    {
        "id": 81,
        "name": "NESTE Liepkalnio",
        "logo": "🟢",
        "city": "02121 Vilnius",
        "address": "Servečės g. 2",
        "lat": 54.63374908378751,
        "lng": 25.3044903857075,
        "prices": {
            "A95": 1.779,
            "A98": 1.829,
            "Diesel": 1.864,
            "LPG": null
        }
    },
    {
        "id": 82,
        "name": "Viada",
        "logo": "🦌",
        "city": "Vilnius",
        "address": "Liepkalnio g. 128A",
        "lat": 54.64751438771891,
        "lng": 25.30393696576357,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 1.959,
            "LPG": 0.959
        }
    },
    {
        "id": 83,
        "name": "Saurida",
        "logo": "🔥",
        "city": "Lietuva",
        "address": "Buivydiškių g. 1a",
        "lat": 54.72359786308865,
        "lng": 25.19128151789259,
        "prices": {
            "A95": 1.79,
            "A98": null,
            "Diesel": 1.88,
            "LPG": 0.82
        }
    },
    {
        "id": 84,
        "name": "Saurida",
        "logo": "🔥",
        "city": "Lithuania",
        "address": "Jankiškių g. 43A",
        "lat": 54.6520972135708,
        "lng": 25.18498942563164,
        "prices": {
            "A95": 1.79,
            "A98": null,
            "Diesel": 1.88,
            "LPG": 0.82
        }
    },
    {
        "id": 85,
        "name": "Neste",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Geležinio Vilko g. 63",
        "lat": 54.7119556185583,
        "lng": 25.27060318094085,
        "prices": {
            "A95": 1.779,
            "A98": null,
            "Diesel": 1.899,
            "LPG": null
        }
    },
    {
        "id": 86,
        "name": "Neste",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Eišiškių pl. 82",
        "lat": 54.62122448240286,
        "lng": 25.24299759698345,
        "prices": {
            "A95": 1.809,
            "A98": null,
            "Diesel": 1.889,
            "LPG": null
        }
    },
    {
        "id": 87,
        "name": "Viada",
        "logo": "🦌",
        "city": "Vilnius",
        "address": "Vilkpėdės g. 2",
        "lat": 54.66500538109361,
        "lng": 25.24631838470256,
        "prices": {
            "A95": 1.859,
            "A98": null,
            "Diesel": 1.959,
            "LPG": null
        }
    },
    {
        "id": 88,
        "name": "Viada",
        "logo": "🦌",
        "city": "Vilnius",
        "address": "Verkių g. 52A",
        "lat": 54.7215109423959,
        "lng": 25.29498161978538,
        "prices": {
            "A95": 1.829,
            "A98": 1.969,
            "Diesel": 1.939,
            "LPG": 0.959
        }
    },
    {
        "id": 89,
        "name": "Viada",
        "logo": "🦌",
        "city": "Vilnius",
        "address": "Sodų g. 22",
        "lat": 54.6695697139503,
        "lng": 25.2791243791038,
        "prices": {
            "A95": 1.869,
            "A98": 1.939,
            "Diesel": 1.969,
            "LPG": 0.959
        }
    },
    {
        "id": 90,
        "name": "Viada",
        "logo": "🦌",
        "city": "Vilnius",
        "address": "Pilaitės pr. 28",
        "lat": 54.70144304459182,
        "lng": 25.20361881415184,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.959
        }
    },
    {
        "id": 91,
        "name": "Viada",
        "logo": "🦌",
        "city": "Vilnius",
        "address": "Ozo g. 12",
        "lat": 54.7138012964879,
        "lng": 25.27710193096251,
        "prices": {
            "A95": 1.879,
            "A98": 1.999,
            "Diesel": 1.999,
            "LPG": 0.959
        }
    },
    {
        "id": 92,
        "name": "Viada",
        "logo": "🦌",
        "city": "Vilnius",
        "address": "Nemenčinės pl. 5",
        "lat": 54.72639896955627,
        "lng": 25.32651184629966,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.959
        }
    },
    {
        "id": 93,
        "name": "Viada",
        "logo": "🦌",
        "city": "Vilnius",
        "address": "Naugarduko g. 74",
        "lat": 54.67107223403232,
        "lng": 25.26180684095179,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.959
        }
    },
    {
        "id": 94,
        "name": "Viada",
        "logo": "🦌",
        "city": "Vilnius",
        "address": "Ateities g. 17B",
        "lat": 54.73565951122065,
        "lng": 25.25859569851156,
        "prices": {
            "A95": 1.869,
            "A98": 1.889,
            "Diesel": 1.969,
            "LPG": 0.929
        }
    },
    {
        "id": 95,
        "name": "Neste",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Žirmūnų g. 54C",
        "lat": 54.70672889911535,
        "lng": 25.30416014411291,
        "prices": {
            "A95": 1.794,
            "A98": 1.894,
            "Diesel": 1.909,
            "LPG": null
        }
    },
    {
        "id": 96,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Didžiosios Riešės k.",
        "address": "Molėtų g. 15",
        "lat": 54.78066235688043,
        "lng": 25.27385993312336,
        "prices": {
            "A95": 1.794,
            "A98": null,
            "Diesel": 1.909,
            "LPG": null
        }
    },
    {
        "id": 97,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Vilnius",
        "address": "Geležinio Vilko g. 24",
        "lat": 54.75141911544734,
        "lng": 25.26649466037761,
        "prices": {
            "A95": 1.834,
            "A98": null,
            "Diesel": 1.949,
            "LPG": null
        }
    },
    {
        "id": 98,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Avižienių k.",
        "address": "Sudervės g. 2G",
        "lat": 54.7604251,
        "lng": 25.2017462,
        "prices": {
            "A95": 1.889,
            "A98": null,
            "Diesel": 2.009,
            "LPG": 0.859
        }
    },
    {
        "id": 99,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Vilnius",
        "address": "Sporto g. 16A",
        "lat": 54.69508349177734,
        "lng": 25.2982793049517,
        "prices": {
            "A95": 1.859,
            "A98": null,
            "Diesel": 1.959,
            "LPG": null
        }
    },
    {
        "id": 100,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Vilnius",
        "address": "Zujūnų g. 2A",
        "lat": 54.71093834992543,
        "lng": 25.16151684900457,
        "prices": {
            "A95": 1.769,
            "A98": 1.879,
            "Diesel": 1.869,
            "LPG": 0.85
        }
    },
    {
        "id": 101,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Visalaukio g. 2",
        "address": "Vilnius",
        "lat": 54.779287,
        "lng": 25.341874,
        "prices": {
            "A95": 1.779,
            "A98": 1.859,
            "Diesel": 1.899,
            "LPG": 0.849
        }
    },
    {
        "id": 102,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Vilnius",
        "address": "S. Batoro g. 15",
        "lat": 54.692192,
        "lng": 25.346693,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 1.899,
            "LPG": 0.829
        }
    },
    {
        "id": 103,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Vilnius",
        "address": "Molėtų pl. 27A",
        "lat": 54.767745,
        "lng": 25.272406,
        "prices": {
            "A95": 1.799,
            "A98": 1.829,
            "Diesel": 1.899,
            "LPG": 0.829
        }
    },
    {
        "id": 104,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Vilnius",
        "address": "Metalo g. 4B",
        "lat": 54.640438,
        "lng": 25.267512,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 1.899,
            "LPG": 0.849
        }
    },
    {
        "id": 105,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Vilnius",
        "address": "Antakalnio g. 128",
        "lat": 54.722219,
        "lng": 25.317234,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 1.919,
            "LPG": 0.849
        }
    },
    {
        "id": 106,
        "name": "Alauša",
        "logo": "⛽",
        "city": "Vilnius",
        "address": "Pelesos g. 1/2",
        "lat": 54.66537929247533,
        "lng": 25.27514817280266,
        "prices": {
            "A95": 1.759,
            "A98": null,
            "Diesel": 1.859,
            "LPG": 0.859
        }
    },
    {
        "id": 107,
        "name": "Alauša",
        "logo": "⛽",
        "city": "Vilnius",
        "address": "Kalvarijų g. 204G",
        "lat": 54.72086326048473,
        "lng": 25.28483721253529,
        "prices": {
            "A95": 1.729,
            "A98": 1.929,
            "Diesel": 1.839,
            "LPG": 0.799
        }
    },
    {
        "id": 108,
        "name": "Jozita",
        "logo": "🟡",
        "city": "Vilnius",
        "address": "Pramonės g. 18",
        "lat": 54.69585001900736,
        "lng": 25.43204910198867,
        "prices": {
            "A95": 1.79,
            "A98": 1.79,
            "Diesel": 1.82,
            "LPG": 0.77
        }
    },
    {
        "id": 109,
        "name": "Jozita",
        "logo": "🟡",
        "city": "Vilnius",
        "address": "Parko g. 64",
        "lat": 54.68589269342304,
        "lng": 25.43059725645016,
        "prices": {
            "A95": 1.79,
            "A98": null,
            "Diesel": 1.82,
            "LPG": null
        }
    },
    {
        "id": 110,
        "name": "Orlen",
        "logo": "🦅",
        "city": "Vilnius",
        "address": "Žirmūnų g. 1T",
        "lat": 54.69588296880894,
        "lng": 25.29998032076544,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 1.899,
            "LPG": 0.869
        }
    },
    {
        "id": 111,
        "name": "Orlen",
        "logo": "🦅",
        "city": "Vilnius",
        "address": "Ukmergės g. 319",
        "lat": 54.73691271478881,
        "lng": 25.23193961071778,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 1.899,
            "LPG": 0.889
        }
    },
    {
        "id": 112,
        "name": "Orlen",
        "logo": "🦅",
        "city": "Vilnius",
        "address": "Juodasis kel. 32",
        "lat": 54.66298192017991,
        "lng": 25.34234849527971,
        "prices": {
            "A95": 1.839,
            "A98": null,
            "Diesel": 1.939,
            "LPG": 0.869
        }
    },
    {
        "id": 113,
        "name": "Orlen",
        "logo": "🦅",
        "city": "Vilnius",
        "address": "O. Milašiaus g. 31",
        "lat": 54.72818073571872,
        "lng": 25.32709793731249,
        "prices": {
            "A95": 1.839,
            "A98": 1.879,
            "Diesel": 1.939,
            "LPG": 0.889
        }
    },
    {
        "id": 114,
        "name": "Skulas",
        "logo": "⛽",
        "city": "Vilnius",
        "address": "J. Kazlausko g. 33",
        "lat": 54.72236574636785,
        "lng": 25.27102194561823,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 1.889,
            "LPG": 0.839
        }
    },
    {
        "id": 115,
        "name": "A. Lingės degalinė",
        "logo": "⛽",
        "city": "Vilnius",
        "address": "Liepkalnio g. 184",
        "lat": 54.62532249372828,
        "lng": 25.30695936357678,
        "prices": {
            "A95": 1.75,
            "A98": null,
            "Diesel": 1.89,
            "LPG": null
        }
    },
    {
        "id": 116,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Pavilnės g. 1",
        "address": "Vilniaus r.",
        "lat": 54.681567,
        "lng": 25.412533,
        "prices": {
            "A95": 1.779,
            "A98": 1.859,
            "Diesel": 1.999,
            "LPG": 0.849
        }
    },
    {
        "id": 117,
        "name": "Jozita",
        "logo": "🟡",
        "city": "Vilnius",
        "address": "Parko g. 69A",
        "lat": 54.68584112110852,
        "lng": 25.4306281995633,
        "prices": {
            "A95": 1.75,
            "A98": 1.75,
            "Diesel": 1.83,
            "LPG": 0.79
        }
    },
    {
        "id": 118,
        "name": "Milda",
        "logo": "⛽",
        "city": "Laiviai",
        "address": "Platelių g. 1A",
        "lat": 54.784396,
        "lng": 25.308218,
        "prices": {
            "A95": 1.773,
            "A98": null,
            "Diesel": 2.04,
            "LPG": 0.91
        }
    }
];