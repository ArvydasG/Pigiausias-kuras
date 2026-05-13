// Automatiškai sugeneruoti duomenys iš degalukaina.lt
const stationsData = [
    {
        "id": 1,
        "name": "A. Praškevičiaus IĮ",
        "logo": "⛽",
        "city": "Kaišiadorių",
        "address": "Kalvių g. 4, Šventininkų k.",
        "lat": 54.8270857,
        "lng": 24.4264088,
        "prices": {
            "A95": 1.76,
            "A98": null,
            "Diesel": 1.86,
            "LPG": 0.86
        }
    },
    {
        "id": 2,
        "name": "Adukesta",
        "logo": "⛽",
        "city": "Klaipėda",
        "address": "Laisvės g. 50, Maciuičių k.",
        "lat": 55.7127529,
        "lng": 21.1350469,
        "prices": {
            "A95": 1.79,
            "A98": null,
            "Diesel": 1.95,
            "LPG": 0.93
        }
    },
    {
        "id": 3,
        "name": "Alauša",
        "logo": "⛽",
        "city": "Marijampolės",
        "address": "Stoties g. 49, Marijampolė",
        "lat": 54.562859,
        "lng": 23.3665326,
        "prices": {
            "A95": 1.69,
            "A98": null,
            "Diesel": 1.85,
            "LPG": 0.8
        }
    },
    {
        "id": 4,
        "name": "Alauša",
        "logo": "⛽",
        "city": "Šalčininkų",
        "address": "Skraičionių g. 1, Skraičionių k.",
        "lat": 54.3173722,
        "lng": 25.2380361,
        "prices": {
            "A95": 1.75,
            "A98": null,
            "Diesel": 1.95,
            "LPG": 0.9
        }
    },
    {
        "id": 5,
        "name": "Alauša",
        "logo": "⛽",
        "city": "Alytaus",
        "address": "Santaikos g. 2A, Santaikos k.",
        "lat": 55.7319393,
        "lng": 21.1423197,
        "prices": {
            "A95": 1.7,
            "A98": null,
            "Diesel": 1.87,
            "LPG": 0.89
        }
    },
    {
        "id": 6,
        "name": "Alauša",
        "logo": "⛽",
        "city": "Vilnius",
        "address": "Vilniaus g. 8, Grigiškės",
        "lat": 54.6774447,
        "lng": 25.0790496,
        "prices": {
            "A95": 1.7,
            "A98": null,
            "Diesel": 1.86,
            "LPG": 0.8
        }
    },
    {
        "id": 7,
        "name": "Alauša",
        "logo": "⛽",
        "city": "Šiaulių",
        "address": "Plento g. 2B, Kairiai",
        "lat": 55.9201684,
        "lng": 23.4259981,
        "prices": {
            "A95": 1.75,
            "A98": null,
            "Diesel": 1.95,
            "LPG": 0.85
        }
    },
    {
        "id": 8,
        "name": "Alauša",
        "logo": "⛽",
        "city": "Utenos",
        "address": "Plento g. 17, Daugailiai",
        "lat": 55.5939915,
        "lng": 25.8334044,
        "prices": {
            "A95": 1.69,
            "A98": null,
            "Diesel": 1.85,
            "LPG": 0.9
        }
    },
    {
        "id": 9,
        "name": "Alauša",
        "logo": "⛽",
        "city": "Vilnius",
        "address": "Pelesos g. 1/2, Vilnius",
        "lat": 54.6709912,
        "lng": 25.2896066,
        "prices": {
            "A95": 1.8,
            "A98": null,
            "Diesel": 1.86,
            "LPG": 0.8
        }
    },
    {
        "id": 10,
        "name": "Alauša",
        "logo": "⛽",
        "city": "Širvintų",
        "address": "Paširvio g. 1, Paširvinčio k.",
        "lat": 55.0096018,
        "lng": 24.8883492,
        "prices": {
            "A95": 1.69,
            "A98": null,
            "Diesel": 1.85,
            "LPG": 0.8
        }
    },
    {
        "id": 11,
        "name": "Alauša",
        "logo": "⛽",
        "city": "Utenos",
        "address": "Palijoniškio g. 1, Utena",
        "lat": 55.5118474,
        "lng": 25.6000041,
        "prices": {
            "A95": 1.69,
            "A98": null,
            "Diesel": 1.85,
            "LPG": 0.9
        }
    },
    {
        "id": 12,
        "name": "Alauša",
        "logo": "⛽",
        "city": "Šakių",
        "address": "Šakių g. 51, Kudirkos Naumiestis",
        "lat": 54.7841309,
        "lng": 22.8733826,
        "prices": {
            "A95": 1.78,
            "A98": null,
            "Diesel": 1.93,
            "LPG": 0.9
        }
    },
    {
        "id": 13,
        "name": "Alauša",
        "logo": "⛽",
        "city": "Vilnius",
        "address": "Šiaurės g. 39, Vilnius",
        "lat": 54.7033878,
        "lng": 25.4159415,
        "prices": {
            "A95": 1.7,
            "A98": null,
            "Diesel": 1.86,
            "LPG": 0.83
        }
    },
    {
        "id": 14,
        "name": "Alauša",
        "logo": "⛽",
        "city": "Visagino",
        "address": "Kosmoso g. 3, Visaginas",
        "lat": 55.5991692,
        "lng": 26.4198645,
        "prices": {
            "A95": 1.7,
            "A98": null,
            "Diesel": 1.86,
            "LPG": 0.8
        }
    },
    {
        "id": 15,
        "name": "Alauša",
        "logo": "⛽",
        "city": "Vilnius",
        "address": "Kirtimų g. 23A, Vilnius",
        "lat": 54.6511367,
        "lng": 25.1502321,
        "prices": {
            "A95": 1.7,
            "A98": null,
            "Diesel": 1.86,
            "LPG": 0.8
        }
    },
    {
        "id": 16,
        "name": "Alauša",
        "logo": "⛽",
        "city": "Ukmergės",
        "address": "Kauno g. 37, Ukmergė",
        "lat": 55.244496,
        "lng": 24.75002,
        "prices": {
            "A95": 1.69,
            "A98": null,
            "Diesel": 1.85,
            "LPG": 0.8
        }
    },
    {
        "id": 17,
        "name": "Alauša",
        "logo": "⛽",
        "city": "Vilnius",
        "address": "Kalvarijų g. 204G, Vilnius",
        "lat": 54.7208665,
        "lng": 25.284772,
        "prices": {
            "A95": 1.69,
            "A98": null,
            "Diesel": 1.85,
            "LPG": 0.8
        }
    },
    {
        "id": 18,
        "name": "Alauša",
        "logo": "⛽",
        "city": "Utenos",
        "address": "J. Basanavičiaus g. 1C, Utena",
        "lat": 55.4956691,
        "lng": 25.5817844,
        "prices": {
            "A95": 1.69,
            "A98": null,
            "Diesel": 1.85,
            "LPG": 0.8
        }
    },
    {
        "id": 19,
        "name": "Alauša",
        "logo": "⛽",
        "city": "Kalvarijos",
        "address": "Europos g. 17, Salaperaugio k.",
        "lat": 54.7397108,
        "lng": 25.2804959,
        "prices": {
            "A95": 1.87,
            "A98": null,
            "Diesel": 1.98,
            "LPG": 0.93
        }
    },
    {
        "id": 20,
        "name": "Alauša",
        "logo": "⛽",
        "city": "Ignalinos",
        "address": "Švenčionių g. 29A, Ignalina",
        "lat": 55.3320479,
        "lng": 26.1671283,
        "prices": {
            "A95": 1.7,
            "A98": null,
            "Diesel": 1.86,
            "LPG": 0.8
        }
    },
    {
        "id": 21,
        "name": "Alauša",
        "logo": "⛽",
        "city": "Anykščių",
        "address": "Bajorų k.",
        "lat": 55.6952506,
        "lng": 25.3406209,
        "prices": {
            "A95": 1.78,
            "A98": null,
            "Diesel": 1.95,
            "LPG": 0.89
        }
    },
    {
        "id": 22,
        "name": "Alauša",
        "logo": "⛽",
        "city": "Anykščių",
        "address": "A. Vienuolio g. 32A, Anykščiai",
        "lat": 55.5224395,
        "lng": 25.0899632,
        "prices": {
            "A95": 1.69,
            "A98": null,
            "Diesel": 1.85,
            "LPG": 0.8
        }
    },
    {
        "id": 23,
        "name": "Andopas",
        "logo": "⛽",
        "city": "Šilutės",
        "address": "Ramučių g.43",
        "lat": 55.3588294,
        "lng": 21.5033999,
        "prices": {
            "A95": 1.75,
            "A98": null,
            "Diesel": 1.92,
            "LPG": 0.88
        }
    },
    {
        "id": 24,
        "name": "Antivis",
        "logo": "⛽",
        "city": "Kelmės",
        "address": "Tytuvėnai, Žemaitės g.14",
        "lat": 55.6865165,
        "lng": 22.8611849,
        "prices": {
            "A95": 1.84,
            "A98": null,
            "Diesel": 1.99,
            "LPG": 0.93
        }
    },
    {
        "id": 25,
        "name": "Apsaga",
        "logo": "⛽",
        "city": "Radviliškio",
        "address": "Beržų g. 19, Baisogalos k.",
        "lat": 55.6934168,
        "lng": 23.6501225,
        "prices": {
            "A95": 1.87,
            "A98": null,
            "Diesel": 2.02,
            "LPG": 0.93
        }
    },
    {
        "id": 26,
        "name": "Apsaga",
        "logo": "⛽",
        "city": "Šiaulių",
        "address": "Nuklono g. 4, Šiauliai",
        "lat": 55.9167296,
        "lng": 23.2469009,
        "prices": {
            "A95": 1.85,
            "A98": null,
            "Diesel": 1.97,
            "LPG": 0.9
        }
    },
    {
        "id": 27,
        "name": "Apsaga",
        "logo": "⛽",
        "city": "Radviliškio",
        "address": "Šiaulių g.12, Radviliškis",
        "lat": 55.8154505,
        "lng": 23.5436826,
        "prices": {
            "A95": 1.92,
            "A98": null,
            "Diesel": 2.03,
            "LPG": 0.93
        }
    },
    {
        "id": 28,
        "name": "Apsaga",
        "logo": "⛽",
        "city": "Šiaulių",
        "address": "Pramonės g. 3A, Šiauliai",
        "lat": 55.9178654,
        "lng": 23.2975256,
        "prices": {
            "A95": 1.84,
            "A98": null,
            "Diesel": 1.97,
            "LPG": 0.9
        }
    },
    {
        "id": 29,
        "name": "Apsaga",
        "logo": "⛽",
        "city": "Joniškio",
        "address": "Radikių k.",
        "lat": 56.2246299,
        "lng": 23.4865961,
        "prices": {
            "A95": 1.78,
            "A98": null,
            "Diesel": 1.94,
            "LPG": 0.93
        }
    },
    {
        "id": 30,
        "name": "Apsaga",
        "logo": "⛽",
        "city": "Šiaulių",
        "address": "Tilžės g. 223, Šiauliai",
        "lat": 55.9412708,
        "lng": 23.3262732,
        "prices": {
            "A95": 1.85,
            "A98": null,
            "Diesel": 1.97,
            "LPG": 0.9
        }
    },
    {
        "id": 31,
        "name": "Apsaga",
        "logo": "⛽",
        "city": "Šiaulių",
        "address": "V. Bielskio g. 47A, Šiauliai",
        "lat": 55.9563473,
        "lng": 23.3084505,
        "prices": {
            "A95": 1.84,
            "A98": null,
            "Diesel": 1.96,
            "LPG": 0.89
        }
    },
    {
        "id": 32,
        "name": "Apsaga",
        "logo": "⛽",
        "city": "Šiaulių",
        "address": "Vilniaus g.16, Šiauliai",
        "lat": 55.9235482,
        "lng": 23.3500986,
        "prices": {
            "A95": 1.83,
            "A98": null,
            "Diesel": 1.96,
            "LPG": 0.88
        }
    },
    {
        "id": 33,
        "name": "Atsiauta",
        "logo": "⛽",
        "city": "Šiaulių",
        "address": "Vytauto 80, Kuršėnai",
        "lat": 56.0147959,
        "lng": 22.9514104,
        "prices": {
            "A95": 1.88,
            "A98": null,
            "Diesel": 2.05,
            "LPG": 0.95
        }
    },
    {
        "id": 34,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Radviliškio",
        "address": "Radviliškis, Šiaulių g. 1A",
        "lat": 55.6934168,
        "lng": 23.6501225,
        "prices": {
            "A95": 1.85,
            "A98": null,
            "Diesel": 1.95,
            "LPG": 0.89
        }
    },
    {
        "id": 35,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Kaišiadorių",
        "address": "Triliškių k., Kauno pl. 5",
        "lat": 54.8270857,
        "lng": 24.4264088,
        "prices": {
            "A95": 1.84,
            "A98": null,
            "Diesel": 1.98,
            "LPG": 0.87
        }
    },
    {
        "id": 36,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Raseinių",
        "address": "Raseiniai, Vilniaus g. 30",
        "lat": 55.3764559,
        "lng": 23.1988999,
        "prices": {
            "A95": 1.72,
            "A98": null,
            "Diesel": 1.95,
            "LPG": 0.86
        }
    },
    {
        "id": 37,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Rietavo",
        "address": "Rietavas, Dariaus ir Girėno g. 19",
        "lat": 55.7240783,
        "lng": 22.0024769,
        "prices": {
            "A95": 1.78,
            "A98": null,
            "Diesel": 1.96,
            "LPG": 0.88
        }
    },
    {
        "id": 38,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Kaunas",
        "address": "Ringaudų k., Gėlių g. 1A",
        "lat": 54.8982139,
        "lng": 23.9044817,
        "prices": {
            "A95": 1.78,
            "A98": null,
            "Diesel": 1.98,
            "LPG": 0.87
        }
    },
    {
        "id": 39,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Zarasų",
        "address": "Sarakiškių k., Vytauto g. 61",
        "lat": 55.7303771,
        "lng": 26.0387936,
        "prices": {
            "A95": 1.84,
            "A98": null,
            "Diesel": 1.98,
            "LPG": 0.84
        }
    },
    {
        "id": 40,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Varėnos",
        "address": "Senoji Varėna, Vilniaus g. 6A",
        "lat": 54.1725666,
        "lng": 24.4183024,
        "prices": {
            "A95": 1.94,
            "A98": null,
            "Diesel": 2.07,
            "LPG": 0.93
        }
    },
    {
        "id": 41,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Skuodo",
        "address": "Skuodas, Vytauto g. 22",
        "lat": 56.2274045,
        "lng": 21.6899322,
        "prices": {
            "A95": 1.78,
            "A98": null,
            "Diesel": 1.92,
            "LPG": 0.88
        }
    },
    {
        "id": 42,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Jonavos",
        "address": "Spanėnų k., Plento g. 46",
        "lat": 55.1168377,
        "lng": 24.2815728,
        "prices": {
            "A95": 1.94,
            "A98": null,
            "Diesel": 2.05,
            "LPG": 0.9
        }
    },
    {
        "id": 43,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Tauragės",
        "address": "Taurų k., Tilžės pl. 36",
        "lat": 55.3564378,
        "lng": 22.405222,
        "prices": {
            "A95": 1.75,
            "A98": null,
            "Diesel": 1.93,
            "LPG": 0.9
        }
    },
    {
        "id": 44,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Telšių",
        "address": "Telšiai, Šiaulių pl. 12",
        "lat": 56.0130975,
        "lng": 22.1366723,
        "prices": {
            "A95": 1.87,
            "A98": null,
            "Diesel": 1.98,
            "LPG": 0.93
        }
    },
    {
        "id": 45,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Trakų",
        "address": "Trakai, Vilniaus g. 33",
        "lat": 54.6510344,
        "lng": 24.9333479,
        "prices": {
            "A95": 1.89,
            "A98": null,
            "Diesel": 2.04,
            "LPG": 0.95
        }
    },
    {
        "id": 46,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Panevėžio",
        "address": "Panevėžys, Smėlynės g. 169",
        "lat": 55.7575994,
        "lng": 24.3677103,
        "prices": {
            "A95": 1.81,
            "A98": null,
            "Diesel": 1.94,
            "LPG": 0.9
        }
    },
    {
        "id": 47,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Radviliškio",
        "address": "Radviliškis, Miško g. 64",
        "lat": 55.6934168,
        "lng": 23.6501225,
        "prices": {
            "A95": 1.86,
            "A98": null,
            "Diesel": 1.97,
            "LPG": 0.89
        }
    },
    {
        "id": 48,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Prienų",
        "address": "Prienai, Vilniaus g. 3A",
        "lat": 54.6334424,
        "lng": 24.2204708,
        "prices": {
            "A95": 1.84,
            "A98": null,
            "Diesel": 1.96,
            "LPG": 0.91
        }
    },
    {
        "id": 49,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Klaipėda",
        "address": "Priekulė, Klaipėdos g. 61",
        "lat": 55.7127529,
        "lng": 21.1350469,
        "prices": {
            "A95": 1.85,
            "A98": null,
            "Diesel": 1.99,
            "LPG": 0.92
        }
    },
    {
        "id": 50,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Plungės",
        "address": "Plateliai,  Ž. Kalvarijos g. 1A",
        "lat": 55.953916,
        "lng": 21.8335407,
        "prices": {
            "A95": 1.86,
            "A98": null,
            "Diesel": 2.04,
            "LPG": 0.87
        }
    },
    {
        "id": 51,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Marijampolės",
        "address": "Pietarių k. Kauno g. 164",
        "lat": 54.6792304,
        "lng": 23.2004406,
        "prices": {
            "A95": 1.7,
            "A98": null,
            "Diesel": 1.86,
            "LPG": 0.94
        }
    },
    {
        "id": 52,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Marijampolės",
        "address": "Pasiekų k.",
        "lat": 54.6792304,
        "lng": 23.2004406,
        "prices": {
            "A95": 1.87,
            "A98": null,
            "Diesel": 2.0,
            "LPG": 0.92
        }
    },
    {
        "id": 53,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Pakruojo",
        "address": "Pakruojis, Statybininkų g. 28",
        "lat": 56.0731045,
        "lng": 23.8319151,
        "prices": {
            "A95": 1.79,
            "A98": null,
            "Diesel": 1.95,
            "LPG": 0.86
        }
    },
    {
        "id": 54,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Vilnius",
        "address": "Vilnius, S. Batoro g. 15",
        "lat": 54.6870458,
        "lng": 25.2829111,
        "prices": {
            "A95": 1.83,
            "A98": null,
            "Diesel": 1.95,
            "LPG": 0.92
        }
    },
    {
        "id": 55,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Panevėžio",
        "address": "Panevėžys, Velžio kelias 74",
        "lat": 55.9155086,
        "lng": 25.0309026,
        "prices": {
            "A95": 1.8,
            "A98": null,
            "Diesel": 1.94,
            "LPG": 0.88
        }
    },
    {
        "id": 56,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Palangos",
        "address": "Palanga, Ganyklų g. 28C",
        "lat": 55.9725989,
        "lng": 21.0946759,
        "prices": {
            "A95": 1.8,
            "A98": null,
            "Diesel": 1.95,
            "LPG": 0.92
        }
    },
    {
        "id": 57,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Palangos",
        "address": "Palanga, Klaipėdos pl. 44",
        "lat": 55.9229818,
        "lng": 21.0682657,
        "prices": {
            "A95": 1.86,
            "A98": null,
            "Diesel": 1.97,
            "LPG": 0.92
        }
    },
    {
        "id": 58,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Rokiškio",
        "address": "Pandėlio k., Elektrinės g. 1",
        "lat": 55.9538411,
        "lng": 25.6812626,
        "prices": {
            "A95": 1.89,
            "A98": null,
            "Diesel": 2.04,
            "LPG": 0.85
        }
    },
    {
        "id": 59,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Vilnius",
        "address": "Vilnius, Metalo g. 4B",
        "lat": 54.6870458,
        "lng": 25.2829111,
        "prices": {
            "A95": 1.85,
            "A98": null,
            "Diesel": 1.96,
            "LPG": 0.89
        }
    },
    {
        "id": 60,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Širvintų",
        "address": "Širvintos, Musninkų g. 21",
        "lat": 55.0096018,
        "lng": 24.8883492,
        "prices": {
            "A95": 1.7,
            "A98": null,
            "Diesel": 1.86,
            "LPG": 0.88
        }
    },
    {
        "id": 61,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Šilutės",
        "address": "Šilutė, Klaipėdos g. 4A",
        "lat": 55.3750109,
        "lng": 21.5403978,
        "prices": {
            "A95": 1.76,
            "A98": null,
            "Diesel": 1.94,
            "LPG": 0.89
        }
    },
    {
        "id": 62,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Šilalės",
        "address": "Šilalė, Rytinio Kelio g. 2",
        "lat": 55.5252224,
        "lng": 22.2160078,
        "prices": {
            "A95": 1.77,
            "A98": null,
            "Diesel": 1.94,
            "LPG": 0.86
        }
    },
    {
        "id": 63,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Šiaulių",
        "address": "Šiauliai, Kupiškio g. 4",
        "lat": 55.9398236,
        "lng": 23.3937822,
        "prices": {
            "A95": 1.78,
            "A98": null,
            "Diesel": 1.97,
            "LPG": 0.89
        }
    },
    {
        "id": 64,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Šalčininkų",
        "address": "Šalčininkai, Vilniaus g. 5A",
        "lat": 54.3173722,
        "lng": 25.2380361,
        "prices": {
            "A95": 1.95,
            "A98": null,
            "Diesel": 2.07,
            "LPG": 0.94
        }
    },
    {
        "id": 65,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Šakių",
        "address": "Šakiai, Sodų g. 1",
        "lat": 54.9148731,
        "lng": 23.078048,
        "prices": {
            "A95": 1.78,
            "A98": null,
            "Diesel": 1.91,
            "LPG": 0.9
        }
    },
    {
        "id": 66,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Vilnius",
        "address": "Visalaukio g. 2",
        "lat": 54.779293,
        "lng": 25.3420915,
        "prices": {
            "A95": 1.78,
            "A98": null,
            "Diesel": 1.98,
            "LPG": 0.87
        }
    },
    {
        "id": 67,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Vilnius",
        "address": "Vilnius, Zujūnų g. 2A",
        "lat": 54.6870458,
        "lng": 25.2829111,
        "prices": {
            "A95": 1.8,
            "A98": null,
            "Diesel": 1.92,
            "LPG": 0.87
        }
    },
    {
        "id": 68,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Vilnius",
        "address": "Vilnius, Savanorių pr. 121",
        "lat": 54.6621953,
        "lng": 25.2343407,
        "prices": {
            "A95": 1.78,
            "A98": null,
            "Diesel": 1.96,
            "LPG": 0.85
        }
    },
    {
        "id": 69,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Vilnius",
        "address": "Vilnius, Rinktinės g. 59",
        "lat": 54.6870458,
        "lng": 25.2829111,
        "prices": {
            "A95": 1.82,
            "A98": null,
            "Diesel": 1.92,
            "LPG": 0.95
        }
    },
    {
        "id": 70,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Vilnius",
        "address": "Vilnius, Molėtų pl. 27A",
        "lat": 54.6870458,
        "lng": 25.2829111,
        "prices": {
            "A95": 1.78,
            "A98": null,
            "Diesel": 1.91,
            "LPG": 0.94
        }
    },
    {
        "id": 71,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Ukmergės",
        "address": "Ukmergė, Kauno g. 49",
        "lat": 55.301698,
        "lng": 24.7372908,
        "prices": {
            "A95": 1.7,
            "A98": null,
            "Diesel": 1.86,
            "LPG": 0.87
        }
    },
    {
        "id": 72,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Vilnius",
        "address": "Vilnius, Gerosios Vilties g. 33",
        "lat": 54.6870458,
        "lng": 25.2829111,
        "prices": {
            "A95": 1.87,
            "A98": null,
            "Diesel": 2.02,
            "LPG": 0.95
        }
    },
    {
        "id": 73,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Vilnius",
        "address": "Vilnius, Antakalnio g. 128",
        "lat": 54.7219118,
        "lng": 25.3366162,
        "prices": {
            "A95": 1.8,
            "A98": null,
            "Diesel": 1.96,
            "LPG": 0.86
        }
    },
    {
        "id": 74,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Vilnius",
        "address": "Vilnius  Kalvarijų g. 161A",
        "lat": 54.6870458,
        "lng": 25.2829111,
        "prices": {
            "A95": 1.7,
            "A98": null,
            "Diesel": 1.86,
            "LPG": 0.86
        }
    },
    {
        "id": 75,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Vilnius",
        "address": "Vilkaraisčio k.",
        "lat": 54.6870458,
        "lng": 25.2829111,
        "prices": {
            "A95": 1.83,
            "A98": null,
            "Diesel": 1.93,
            "LPG": 0.86
        }
    },
    {
        "id": 76,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Prienų",
        "address": "Veiverių k.",
        "lat": 54.7767423,
        "lng": 23.726472,
        "prices": {
            "A95": 1.92,
            "A98": null,
            "Diesel": 2.06,
            "LPG": 0.91
        }
    },
    {
        "id": 77,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Varėnos",
        "address": "Varėna, Čiurlionio g. 63",
        "lat": 54.1725666,
        "lng": 24.4183024,
        "prices": {
            "A95": 1.94,
            "A98": null,
            "Diesel": 2.07,
            "LPG": 0.96
        }
    },
    {
        "id": 78,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Biržų",
        "address": "Valantiškio k.",
        "lat": 56.175453,
        "lng": 24.8313461,
        "prices": {
            "A95": 1.8,
            "A98": null,
            "Diesel": 1.98,
            "LPG": 0.93
        }
    },
    {
        "id": 79,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Radviliškio",
        "address": "Užuovėjos k.",
        "lat": 55.8042338,
        "lng": 23.5894747,
        "prices": {
            "A95": 1.8,
            "A98": null,
            "Diesel": 1.95,
            "LPG": 0.87
        }
    },
    {
        "id": 80,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Vilnius",
        "address": "Užubalių k. Senasis Ukmergės kelias 4",
        "lat": 54.6870458,
        "lng": 25.2829111,
        "prices": {
            "A95": 1.84,
            "A98": null,
            "Diesel": 1.97,
            "LPG": 0.9
        }
    },
    {
        "id": 81,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Mažeikių",
        "address": "Užežerės k., Gardenio g. 39",
        "lat": 56.2596823,
        "lng": 22.2867095,
        "prices": {
            "A95": 1.83,
            "A98": null,
            "Diesel": 1.91,
            "LPG": 0.89
        }
    },
    {
        "id": 82,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Utenos",
        "address": "Utena, Basanavičiaus g. 1B",
        "lat": 55.5277248,
        "lng": 25.2821151,
        "prices": {
            "A95": 1.7,
            "A98": null,
            "Diesel": 1.86,
            "LPG": 0.9
        }
    },
    {
        "id": 83,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Jonavos",
        "address": "Gudžionių k., Plento g. 24",
        "lat": 55.1168377,
        "lng": 24.2815728,
        "prices": {
            "A95": 1.86,
            "A98": null,
            "Diesel": 2.0,
            "LPG": 0.92
        }
    },
    {
        "id": 84,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Kaunas",
        "address": "Kaunas, Taikos pr. 120",
        "lat": 54.9211336,
        "lng": 24.00626,
        "prices": {
            "A95": 1.76,
            "A98": null,
            "Diesel": 1.92,
            "LPG": 0.9
        }
    },
    {
        "id": 85,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Kaunas",
        "address": "Kaunas, Minkovskių g. 132",
        "lat": 54.8982139,
        "lng": 23.9044817,
        "prices": {
            "A95": 1.9,
            "A98": null,
            "Diesel": 1.99,
            "LPG": 0.93
        }
    },
    {
        "id": 86,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Kaunas",
        "address": "Kaunas, Jonavos g. 60A",
        "lat": 54.8982139,
        "lng": 23.9044817,
        "prices": {
            "A95": 1.75,
            "A98": null,
            "Diesel": 1.95,
            "LPG": 0.9
        }
    },
    {
        "id": 87,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Kaunas",
        "address": "Kaunas, Chemijos g. 6",
        "lat": 54.8982139,
        "lng": 23.9044817,
        "prices": {
            "A95": 1.82,
            "A98": null,
            "Diesel": 1.96,
            "LPG": 0.9
        }
    },
    {
        "id": 88,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Raseinių",
        "address": "Kalnujų k. 1",
        "lat": 55.3735907,
        "lng": 23.1211369,
        "prices": {
            "A95": 1.8,
            "A98": null,
            "Diesel": 1.99,
            "LPG": 0.91
        }
    },
    {
        "id": 89,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Jurbarko",
        "address": "Jurbarkas, Muitinės g. 22A",
        "lat": 55.2176268,
        "lng": 22.9652342,
        "prices": {
            "A95": 1.76,
            "A98": null,
            "Diesel": 1.95,
            "LPG": 0.87
        }
    },
    {
        "id": 90,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Joniškio",
        "address": "Joniškis, Vilniaus g. 72",
        "lat": 56.2246299,
        "lng": 23.4865961,
        "prices": {
            "A95": 1.8,
            "A98": null,
            "Diesel": 1.98,
            "LPG": 0.86
        }
    },
    {
        "id": 91,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Jonavos",
        "address": "Jonava, Žemaitės g. 1",
        "lat": 55.1168377,
        "lng": 24.2815728,
        "prices": {
            "A95": 1.94,
            "A98": null,
            "Diesel": 2.05,
            "LPG": 0.92
        }
    },
    {
        "id": 92,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Kaunas",
        "address": "Jaučiakių k.",
        "lat": 54.8982139,
        "lng": 23.9044817,
        "prices": {
            "A95": 1.87,
            "A98": null,
            "Diesel": 2.03,
            "LPG": 0.96
        }
    },
    {
        "id": 93,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Kaunas",
        "address": "Kaunas, Raudondvario pl. 82",
        "lat": 54.9158711,
        "lng": 23.8338251,
        "prices": {
            "A95": 1.8,
            "A98": null,
            "Diesel": 1.97,
            "LPG": 0.89
        }
    },
    {
        "id": 94,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Vilnius",
        "address": "Grigaičiai, Pavilnės g.",
        "lat": 54.6870458,
        "lng": 25.2829111,
        "prices": {
            "A95": 1.78,
            "A98": null,
            "Diesel": 1.98,
            "LPG": 0.87
        }
    },
    {
        "id": 95,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Raseinių",
        "address": "Girkalnio k., Žemaičių g. 39",
        "lat": 55.3764559,
        "lng": 23.1988999,
        "prices": {
            "A95": 1.77,
            "A98": null,
            "Diesel": 1.97,
            "LPG": 0.9
        }
    },
    {
        "id": 96,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Klaipėda",
        "address": "Gargždai, Dariaus ir Girėno g. 10",
        "lat": 55.7127529,
        "lng": 21.1350469,
        "prices": {
            "A95": 1.78,
            "A98": null,
            "Diesel": 1.94,
            "LPG": 0.86
        }
    },
    {
        "id": 97,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Druskininkų",
        "address": "Druskininkai, Leipalingio g. 26",
        "lat": 54.0524348,
        "lng": 24.0222546,
        "prices": {
            "A95": 1.89,
            "A98": null,
            "Diesel": 2.02,
            "LPG": 0.95
        }
    },
    {
        "id": 98,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Druskininkų",
        "address": "Druskininkai, Gardino g. 79",
        "lat": 54.0524348,
        "lng": 24.0222546,
        "prices": {
            "A95": 1.89,
            "A98": null,
            "Diesel": 2.02,
            "LPG": 0.95
        }
    },
    {
        "id": 99,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Šilalės",
        "address": "Bučių k.",
        "lat": 55.5252224,
        "lng": 22.2160078,
        "prices": {
            "A95": 1.79,
            "A98": null,
            "Diesel": 1.97,
            "LPG": 0.86
        }
    },
    {
        "id": 100,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Kaunas",
        "address": "Pagirių k., Marijampolės g. 1",
        "lat": 54.8982139,
        "lng": 23.9044817,
        "prices": {
            "A95": 1.78,
            "A98": null,
            "Diesel": 1.97,
            "LPG": 0.86
        }
    },
    {
        "id": 101,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Anykščių",
        "address": "Anykščiai, Mindaugo g. 23",
        "lat": 55.5349516,
        "lng": 25.0424158,
        "prices": {
            "A95": 1.7,
            "A98": null,
            "Diesel": 1.86,
            "LPG": 0.85
        }
    },
    {
        "id": 102,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Alytaus",
        "address": "Alytus, Santaikos g. 33",
        "lat": 55.7319393,
        "lng": 21.1423197,
        "prices": {
            "A95": 1.79,
            "A98": null,
            "Diesel": 1.94,
            "LPG": 0.86
        }
    },
    {
        "id": 103,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Alytaus",
        "address": "Likiškėlių k.",
        "lat": 54.3966595,
        "lng": 24.0162804,
        "prices": {
            "A95": 1.79,
            "A98": null,
            "Diesel": 1.96,
            "LPG": 0.89
        }
    },
    {
        "id": 104,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Kupiškio",
        "address": "Noriūnų k., Parko g. 3A",
        "lat": 55.8667202,
        "lng": 25.0307101,
        "prices": {
            "A95": 1.75,
            "A98": null,
            "Diesel": 1.91,
            "LPG": 0.85
        }
    },
    {
        "id": 105,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Akmenės",
        "address": "N. Akmenė, V. Kudirkos g. 21A",
        "lat": 56.2415748,
        "lng": 22.8625876,
        "prices": {
            "A95": 1.77,
            "A98": null,
            "Diesel": 1.96,
            "LPG": 0.86
        }
    },
    {
        "id": 106,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Telšių",
        "address": "Ožtakių k., Dariaus ir Girėno g. 77",
        "lat": 56.0130975,
        "lng": 22.1366723,
        "prices": {
            "A95": 1.88,
            "A98": null,
            "Diesel": 1.99,
            "LPG": 0.93
        }
    },
    {
        "id": 107,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Molėtų",
        "address": "Molėtai, Vilniaus g.104",
        "lat": 55.2282306,
        "lng": 25.4148997,
        "prices": {
            "A95": 1.84,
            "A98": null,
            "Diesel": 1.97,
            "LPG": 0.9
        }
    },
    {
        "id": 108,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Varėnos",
        "address": "Merkinė, Vilniaus g. 87",
        "lat": 54.1725666,
        "lng": 24.4183024,
        "prices": {
            "A95": 1.9,
            "A98": null,
            "Diesel": 2.03,
            "LPG": 0.97
        }
    },
    {
        "id": 109,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Mažeikių",
        "address": "Mažeikiai, M. Daukšos g. 17",
        "lat": 56.2596823,
        "lng": 22.2867095,
        "prices": {
            "A95": 1.83,
            "A98": null,
            "Diesel": 1.91,
            "LPG": 0.87
        }
    },
    {
        "id": 110,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Marijampolės",
        "address": "Marijampolė, Vasaros g. 15",
        "lat": 54.6792304,
        "lng": 23.2004406,
        "prices": {
            "A95": 1.7,
            "A98": null,
            "Diesel": 1.86,
            "LPG": 0.91
        }
    },
    {
        "id": 111,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Marijampolės",
        "address": "Marijampolė, P. Armino g. 69",
        "lat": 54.6792304,
        "lng": 23.2004406,
        "prices": {
            "A95": 1.7,
            "A98": null,
            "Diesel": 1.86,
            "LPG": 0.89
        }
    },
    {
        "id": 112,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Druskininkų",
        "address": "Leipalingis, Merkinės g. 37",
        "lat": 54.0524348,
        "lng": 24.0222546,
        "prices": {
            "A95": 1.9,
            "A98": null,
            "Diesel": 2.03,
            "LPG": 0.95
        }
    },
    {
        "id": 113,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Lazdijų",
        "address": "Lazdijai, Turistų g. 88",
        "lat": 54.1607523,
        "lng": 23.6775875,
        "prices": {
            "A95": 1.72,
            "A98": null,
            "Diesel": 1.91,
            "LPG": 0.89
        }
    },
    {
        "id": 114,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Kėdainių",
        "address": "Kėdainiai, J. Basanavičiaus g. 95B",
        "lat": 55.339637,
        "lng": 24.0118376,
        "prices": {
            "A95": 1.89,
            "A98": null,
            "Diesel": 1.99,
            "LPG": 0.93
        }
    },
    {
        "id": 115,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Jurbarko",
        "address": "Klišių k., Pievų g. 2",
        "lat": 55.2176268,
        "lng": 22.9652342,
        "prices": {
            "A95": 1.76,
            "A98": null,
            "Diesel": 1.95,
            "LPG": 0.87
        }
    },
    {
        "id": 116,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Klaipėda",
        "address": "Klaipėda, Šilutės pl. 1",
        "lat": 55.7127529,
        "lng": 21.1350469,
        "prices": {
            "A95": 1.79,
            "A98": null,
            "Diesel": 1.95,
            "LPG": 0.88
        }
    },
    {
        "id": 117,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Klaipėda",
        "address": "Klaipėda, Liepų g. 79A",
        "lat": 55.7127529,
        "lng": 21.1350469,
        "prices": {
            "A95": 1.8,
            "A98": null,
            "Diesel": 1.95,
            "LPG": 0.91
        }
    },
    {
        "id": 118,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Klaipėda",
        "address": "Klaipėda, Tilžės g. 90",
        "lat": 55.7127529,
        "lng": 21.1350469,
        "prices": {
            "A95": 1.79,
            "A98": null,
            "Diesel": 1.95,
            "LPG": 0.86
        }
    },
    {
        "id": 119,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Kaunas",
        "address": "Kaunas, Vaidoto g. 153",
        "lat": 54.8982139,
        "lng": 23.9044817,
        "prices": {
            "A95": 1.93,
            "A98": null,
            "Diesel": 2.07,
            "LPG": 0.95
        }
    },
    {
        "id": 120,
        "name": "Bemija",
        "logo": "⛽",
        "city": "Ukmergės",
        "address": "Dariaus ir Girėmo g. 31, Ukmergė",
        "lat": 55.301698,
        "lng": 24.7372908,
        "prices": {
            "A95": 1.85,
            "A98": null,
            "Diesel": 1.95,
            "LPG": 0.89
        }
    },
    {
        "id": 121,
        "name": "Bonsa",
        "logo": "⛽",
        "city": "Tauragės",
        "address": "Tilžės pl. 46, Taurai",
        "lat": 55.2423921,
        "lng": 22.2496937,
        "prices": {
            "A95": 1.7,
            "A98": null,
            "Diesel": 1.84,
            "LPG": 0.8
        }
    },
    {
        "id": 122,
        "name": "Bonsa",
        "logo": "⛽",
        "city": "Tauragės",
        "address": "Vaidatonių k. 1",
        "lat": 55.4812844,
        "lng": 22.6579734,
        "prices": {
            "A95": 1.7,
            "A98": null,
            "Diesel": 1.85,
            "LPG": 0.9
        }
    },
    {
        "id": 123,
        "name": "Boost Petrol",
        "logo": "⛽",
        "city": "Šiaulių",
        "address": "Ginkūnų k., Aušros g. 26",
        "lat": 55.9398236,
        "lng": 23.3937822,
        "prices": {
            "A95": 1.92,
            "A98": null,
            "Diesel": 2.04,
            "LPG": 0.94
        }
    },
    {
        "id": 124,
        "name": "Boost Petrol",
        "logo": "⛽",
        "city": "Kaunas",
        "address": "Marvelės g. 132, Kaunas",
        "lat": 54.9038368,
        "lng": 23.835313,
        "prices": {
            "A95": 1.95,
            "A98": null,
            "Diesel": 2.05,
            "LPG": 0.95
        }
    },
    {
        "id": 125,
        "name": "Boost Petrol",
        "logo": "⛽",
        "city": "Molėtų",
        "address": "Smėlinkos k.",
        "lat": 55.2156442,
        "lng": 25.2677333,
        "prices": {
            "A95": 1.86,
            "A98": null,
            "Diesel": 2.01,
            "LPG": 0.89
        }
    },
    {
        "id": 126,
        "name": "Boost Petrol",
        "logo": "⛽",
        "city": "Kelmės",
        "address": "Maironių k., Kuršių g. 2",
        "lat": 55.6865165,
        "lng": 22.8611849,
        "prices": {
            "A95": 1.79,
            "A98": null,
            "Diesel": 1.94,
            "LPG": 0.85
        }
    },
    {
        "id": 127,
        "name": "Boost Petrol",
        "logo": "⛽",
        "city": "Kelmės",
        "address": "Kęstučio g. 1B, Kelmė",
        "lat": 55.6347932,
        "lng": 22.9454316,
        "prices": {
            "A95": 1.92,
            "A98": null,
            "Diesel": 2.04,
            "LPG": 0.94
        }
    },
    {
        "id": 128,
        "name": "Boost Petrol",
        "logo": "⛽",
        "city": "Kelmės",
        "address": "Kuršukų k., Plento g. 1",
        "lat": 55.6865165,
        "lng": 22.8611849,
        "prices": {
            "A95": 1.96,
            "A98": null,
            "Diesel": 2.08,
            "LPG": 0.96
        }
    },
    {
        "id": 129,
        "name": "Boost Petrol",
        "logo": "⛽",
        "city": "Elektrėnų",
        "address": "Dubijos g. 36",
        "lat": 54.7862307,
        "lng": 24.7143876,
        "prices": {
            "A95": 1.96,
            "A98": null,
            "Diesel": 2.08,
            "LPG": 0.96
        }
    },
    {
        "id": 130,
        "name": "Boost Petrol",
        "logo": "⛽",
        "city": "Utenos",
        "address": "Zarasų g. 9, Utena",
        "lat": 55.5123015,
        "lng": 25.643978,
        "prices": {
            "A95": 1.87,
            "A98": null,
            "Diesel": 1.97,
            "LPG": 0.9
        }
    },
    {
        "id": 131,
        "name": "Borusta",
        "logo": "⛽",
        "city": "Prienų",
        "address": "Piliakalnio g. 3, Stakliškės",
        "lat": 54.5822273,
        "lng": 24.3177801,
        "prices": {
            "A95": 1.78,
            "A98": null,
            "Diesel": 1.91,
            "LPG": 0.89
        }
    },
    {
        "id": 132,
        "name": "Borusta",
        "logo": "⛽",
        "city": "Birštono",
        "address": "Prienų g. 14, Birštonas",
        "lat": 54.5953856,
        "lng": 24.0266915,
        "prices": {
            "A95": 1.82,
            "A98": null,
            "Diesel": 1.94,
            "LPG": 0.91
        }
    },
    {
        "id": 133,
        "name": "Borusta",
        "logo": "⛽",
        "city": "Trakų",
        "address": "Vilniaus g. 2a, Aukštadvaris",
        "lat": 54.5780863,
        "lng": 24.5215204,
        "prices": {
            "A95": 1.78,
            "A98": null,
            "Diesel": 1.93,
            "LPG": 0.89
        }
    },
    {
        "id": 134,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Telšių",
        "address": "Luokės g. 70, Telšiai",
        "lat": 55.9771223,
        "lng": 22.2651123,
        "prices": {
            "A95": 1.93,
            "A98": null,
            "Diesel": 2.05,
            "LPG": 0.93
        }
    },
    {
        "id": 135,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Druskininkų",
        "address": "M. K. Čiurlionio g. 113, Druskininkai",
        "lat": 54.0101815,
        "lng": 23.993238,
        "prices": {
            "A95": 1.91,
            "A98": null,
            "Diesel": 2.04,
            "LPG": 0.96
        }
    },
    {
        "id": 136,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Klaipėda",
        "address": "Minijos g. 90, Klaipėda",
        "lat": 55.6883791,
        "lng": 21.1444616,
        "prices": {
            "A95": 1.86,
            "A98": null,
            "Diesel": 2.0,
            "LPG": 0.95
        }
    },
    {
        "id": 137,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Kaunas",
        "address": "Sukilėlių pr. 120, Kaunas",
        "lat": 54.9283933,
        "lng": 23.92897,
        "prices": {
            "A95": 1.84,
            "A98": null,
            "Diesel": 1.99,
            "LPG": 0.9
        }
    },
    {
        "id": 138,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Joniškio",
        "address": "Sidabros g. 2A, Satkūnų k.",
        "lat": 56.2246299,
        "lng": 23.4865961,
        "prices": {
            "A95": 1.89,
            "A98": null,
            "Diesel": 2.07,
            "LPG": 0.93
        }
    },
    {
        "id": 139,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Vilnius",
        "address": "Sudervės g. 2G, Avižienių k.",
        "lat": 54.6870458,
        "lng": 25.2829111,
        "prices": {
            "A95": 1.93,
            "A98": null,
            "Diesel": 2.04,
            "LPG": 0.96
        }
    },
    {
        "id": 140,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Vilnius",
        "address": "Laisvės pr. 43C, Vilnius",
        "lat": 54.7091754,
        "lng": 25.2280415,
        "prices": {
            "A95": 1.85,
            "A98": null,
            "Diesel": 1.98,
            "LPG": 0.96
        }
    },
    {
        "id": 141,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Palangos",
        "address": "Kretingos g. 56, Palanga",
        "lat": 55.9146664,
        "lng": 21.0779032,
        "prices": {
            "A95": 1.93,
            "A98": null,
            "Diesel": 2.04,
            "LPG": 0.98
        }
    },
    {
        "id": 142,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Klaipėda",
        "address": "Taikos pr. 112A, Klaipėda",
        "lat": 55.6664679,
        "lng": 21.1726233,
        "prices": {
            "A95": 1.88,
            "A98": null,
            "Diesel": 2.01,
            "LPG": 0.92
        }
    },
    {
        "id": 143,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Kretingos",
        "address": "Klaipėdos g. 155, Kretinga",
        "lat": 55.8635199,
        "lng": 21.2177355,
        "prices": {
            "A95": 1.96,
            "A98": null,
            "Diesel": 2.1,
            "LPG": 0.96
        }
    },
    {
        "id": 144,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Biržų",
        "address": "Kilučių g. 93, Biržai",
        "lat": 56.1948403,
        "lng": 24.7721388,
        "prices": {
            "A95": 1.82,
            "A98": null,
            "Diesel": 2.0,
            "LPG": 0.96
        }
    },
    {
        "id": 145,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Marijampolės",
        "address": "Kauno g. 130, Marijampolė",
        "lat": 54.5762251,
        "lng": 23.3715049,
        "prices": {
            "A95": 1.89,
            "A98": null,
            "Diesel": 1.99,
            "LPG": 0.86
        }
    },
    {
        "id": 146,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Vilnius",
        "address": "Kareivių g. 3, Vilnius",
        "lat": 54.7155483,
        "lng": 25.29102,
        "prices": {
            "A95": 1.86,
            "A98": null,
            "Diesel": 1.96,
            "LPG": 0.94
        }
    },
    {
        "id": 147,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Vilnius",
        "address": "Kareivių g. 13, Vilnius",
        "lat": 54.7185811,
        "lng": 25.3006212,
        "prices": {
            "A95": 1.9,
            "A98": null,
            "Diesel": 2.01,
            "LPG": 0.97
        }
    },
    {
        "id": 148,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Kaunas",
        "address": "K. Baršausko g. 57, Kaunas",
        "lat": 54.8990388,
        "lng": 23.9599289,
        "prices": {
            "A95": 1.91,
            "A98": null,
            "Diesel": 2.0,
            "LPG": 0.96
        }
    },
    {
        "id": 149,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Vilnius",
        "address": "Talino g. 2B, Vilnius",
        "lat": 54.7133435,
        "lng": 25.2094358,
        "prices": {
            "A95": 1.87,
            "A98": null,
            "Diesel": 2.0,
            "LPG": 1.0
        }
    },
    {
        "id": 150,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Kaunas",
        "address": "Jonavos g. 38, Kaunas",
        "lat": 54.9015997,
        "lng": 23.8950293,
        "prices": {
            "A95": 1.83,
            "A98": null,
            "Diesel": 2.03,
            "LPG": 0.9
        }
    },
    {
        "id": 151,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Vilnius",
        "address": "J. Tiškevičiaus g. 24, Vilnius",
        "lat": 54.6229425,
        "lng": 25.1103142,
        "prices": {
            "A95": 1.9,
            "A98": null,
            "Diesel": 2.04,
            "LPG": 0.96
        }
    },
    {
        "id": 152,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Panevėžio",
        "address": "J. Basanavičiaus g. 63, Panevėžys",
        "lat": 55.7175054,
        "lng": 24.3712382,
        "prices": {
            "A95": 1.86,
            "A98": null,
            "Diesel": 2.0,
            "LPG": 0.94
        }
    },
    {
        "id": 153,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Šiaulių",
        "address": "Tilžės g. 25, Šiauliai",
        "lat": 55.9126827,
        "lng": 23.2739983,
        "prices": {
            "A95": 1.86,
            "A98": null,
            "Diesel": 1.98,
            "LPG": 0.96
        }
    },
    {
        "id": 154,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Kaunas",
        "address": "R. Kalantos g. 159, Kaunas",
        "lat": 54.8940105,
        "lng": 24.0066234,
        "prices": {
            "A95": 1.89,
            "A98": null,
            "Diesel": 1.99,
            "LPG": 0.97
        }
    },
    {
        "id": 155,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Vilnius",
        "address": "Savanorių pr. 119A, Vilnius",
        "lat": 54.6626698,
        "lng": 25.2347375,
        "prices": {
            "A95": 1.85,
            "A98": null,
            "Diesel": 1.99,
            "LPG": 0.92
        }
    },
    {
        "id": 156,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Vilnius",
        "address": "Savanorių pr. 118, Vilnius",
        "lat": 54.6618438,
        "lng": 25.2354442,
        "prices": {
            "A95": 1.85,
            "A98": null,
            "Diesel": 1.99,
            "LPG": 0.92
        }
    },
    {
        "id": 157,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Varėnos",
        "address": "Savanorių g. 5, Varėna",
        "lat": 54.2102458,
        "lng": 24.5768123,
        "prices": {
            "A95": 1.95,
            "A98": null,
            "Diesel": 2.08,
            "LPG": 0.97
        }
    },
    {
        "id": 158,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Kaunas",
        "address": "Savanorių pr. 404B, Kaunas",
        "lat": 54.9283513,
        "lng": 23.9739193,
        "prices": {
            "A95": 1.83,
            "A98": null,
            "Diesel": 1.99,
            "LPG": 0.95
        }
    },
    {
        "id": 159,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Elektrėnų",
        "address": "Sabališkių g. 1F, Elektrėnai",
        "lat": 54.7891686,
        "lng": 24.6760563,
        "prices": {
            "A95": 1.96,
            "A98": null,
            "Diesel": 2.08,
            "LPG": 0.95
        }
    },
    {
        "id": 160,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Alytaus",
        "address": "Rūtų g. 2B, Alytus",
        "lat": 54.3950614,
        "lng": 24.0379049,
        "prices": {
            "A95": 1.89,
            "A98": null,
            "Diesel": 2.01,
            "LPG": 0.92
        }
    },
    {
        "id": 161,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Rokiškio",
        "address": "Respublikos g. 111A, Rokiškis",
        "lat": 55.9522264,
        "lng": 25.589774,
        "prices": {
            "A95": 1.96,
            "A98": null,
            "Diesel": 2.08,
            "LPG": 0.96
        }
    },
    {
        "id": 162,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Kaunas",
        "address": "Raudondvario pl. 107A, Kaunas",
        "lat": 54.9081595,
        "lng": 23.8652652,
        "prices": {
            "A95": 1.83,
            "A98": null,
            "Diesel": 2.0,
            "LPG": 0.96
        }
    },
    {
        "id": 163,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Vilnius",
        "address": "A. P. Kavoliuko g. 32A, Vilnius",
        "lat": 54.6953297,
        "lng": 25.2182785,
        "prices": {
            "A95": 1.87,
            "A98": null,
            "Diesel": 2.0,
            "LPG": 0.96
        }
    },
    {
        "id": 164,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Alytaus",
        "address": "Naujoji g. 120, Alytus",
        "lat": 54.4246479,
        "lng": 24.0035005,
        "prices": {
            "A95": 1.87,
            "A98": null,
            "Diesel": 2.02,
            "LPG": 0.92
        }
    },
    {
        "id": 165,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Vilnius",
        "address": "Prūsų g. 26 A, Vilnius",
        "lat": 54.6586559,
        "lng": 25.2666334,
        "prices": {
            "A95": 1.91,
            "A98": null,
            "Diesel": 2.02,
            "LPG": 1.0
        }
    },
    {
        "id": 166,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Kaunas",
        "address": "Pramonės pr. 18, Kaunas",
        "lat": 54.9162183,
        "lng": 23.9866766,
        "prices": {
            "A95": 1.89,
            "A98": null,
            "Diesel": 2.01,
            "LPG": 0.95
        }
    },
    {
        "id": 167,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Šiaulių",
        "address": "Pramonės g. 17a, Šiauliai",
        "lat": 55.9093544,
        "lng": 23.3194671,
        "prices": {
            "A95": 1.87,
            "A98": null,
            "Diesel": 1.99,
            "LPG": 0.93
        }
    },
    {
        "id": 168,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Šiaulių",
        "address": "Plento g. 1, Kuršėnai",
        "lat": 55.999255,
        "lng": 22.9896575,
        "prices": {
            "A95": 1.96,
            "A98": null,
            "Diesel": 2.1,
            "LPG": 0.96
        }
    },
    {
        "id": 169,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Raseinių",
        "address": "Pikelių k. 1",
        "lat": 55.3764559,
        "lng": 23.1988999,
        "prices": {
            "A95": 1.96,
            "A98": null,
            "Diesel": 2.1,
            "LPG": 0.99
        }
    },
    {
        "id": 170,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Panevėžio",
        "address": "Parko g. 7A, Panevėžys",
        "lat": 55.731737,
        "lng": 24.3424294,
        "prices": {
            "A95": 1.83,
            "A98": null,
            "Diesel": 2.01,
            "LPG": 0.96
        }
    },
    {
        "id": 171,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Panevėžio",
        "address": "Panevėžio aplinkl. 20, Šilagalio k.",
        "lat": 55.9155086,
        "lng": 25.0309026,
        "prices": {
            "A95": 1.86,
            "A98": null,
            "Diesel": 1.98,
            "LPG": 0.95
        }
    },
    {
        "id": 172,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Vilnius",
        "address": "P. Žadeikos g. 1a, Vilnius",
        "lat": 54.7305638,
        "lng": 25.2390191,
        "prices": {
            "A95": 1.85,
            "A98": null,
            "Diesel": 2.0,
            "LPG": 0.95
        }
    },
    {
        "id": 173,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Lazdijų",
        "address": "Nekrūnų k. 1",
        "lat": 54.1607523,
        "lng": 23.6775875,
        "prices": {
            "A95": 1.77,
            "A98": null,
            "Diesel": 1.97,
            "LPG": 0.93
        }
    },
    {
        "id": 174,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Utenos",
        "address": "J. Basanavičiaus g. 108a, Utena",
        "lat": 55.5050046,
        "lng": 25.6209141,
        "prices": {
            "A95": 1.89,
            "A98": null,
            "Diesel": 2.0,
            "LPG": 0.96
        }
    },
    {
        "id": 175,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Kaunas",
        "address": "Žemaičių pl. 19, Kaunas",
        "lat": 54.9252968,
        "lng": 23.8904637,
        "prices": {
            "A95": 1.9,
            "A98": null,
            "Diesel": 1.97,
            "LPG": 0.94
        }
    },
    {
        "id": 176,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Mažeikių",
        "address": "Žemaitijos g. 57, Mažeikiai",
        "lat": 56.3024538,
        "lng": 22.3454238,
        "prices": {
            "A95": 1.88,
            "A98": null,
            "Diesel": 2.0,
            "LPG": 0.94
        }
    },
    {
        "id": 177,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Klaipėda",
        "address": "Vilniaus pl. 21, Jakų k.",
        "lat": 55.7127529,
        "lng": 21.1350469,
        "prices": {
            "A95": 1.96,
            "A98": null,
            "Diesel": 2.07,
            "LPG": 0.94
        }
    },
    {
        "id": 178,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Klaipėda",
        "address": "Vilniaus pl. 1A, Klaipėda",
        "lat": 55.692786,
        "lng": 21.1797748,
        "prices": {
            "A95": 1.87,
            "A98": null,
            "Diesel": 1.98,
            "LPG": 0.96
        }
    },
    {
        "id": 179,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Vilkaviškio",
        "address": "Vilkaviškio g. 10, Serdokų k.",
        "lat": 54.5770716,
        "lng": 22.9419043,
        "prices": {
            "A95": 1.82,
            "A98": null,
            "Diesel": 2.04,
            "LPG": 0.96
        }
    },
    {
        "id": 180,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Panevėžio",
        "address": "Baltijos Kelio g. 33, Ūtos k.",
        "lat": 55.9155086,
        "lng": 25.0309026,
        "prices": {
            "A95": 1.86,
            "A98": null,
            "Diesel": 1.98,
            "LPG": 0.98
        }
    },
    {
        "id": 181,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Kaunas",
        "address": "Baltijos g. 1, Mastaičių k.",
        "lat": 54.8982139,
        "lng": 23.9044817,
        "prices": {
            "A95": 1.96,
            "A98": null,
            "Diesel": 2.1,
            "LPG": 1.0
        }
    },
    {
        "id": 182,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Vilnius",
        "address": "Baltupio g. 10, Vilnius",
        "lat": 54.7359333,
        "lng": 25.2654489,
        "prices": {
            "A95": 1.87,
            "A98": null,
            "Diesel": 1.96,
            "LPG": 0.93
        }
    },
    {
        "id": 183,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Kaunas",
        "address": "Briedžių takas 6B, Kaunas",
        "lat": 54.935652,
        "lng": 23.9656801,
        "prices": {
            "A95": 1.96,
            "A98": null,
            "Diesel": 2.1,
            "LPG": 0.96
        }
    },
    {
        "id": 184,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Šilutės",
        "address": "Cintjoniškių g. 15, Šilutė",
        "lat": 55.3503645,
        "lng": 21.4744317,
        "prices": {
            "A95": 1.84,
            "A98": null,
            "Diesel": 2.04,
            "LPG": 0.95
        }
    },
    {
        "id": 185,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Jonavos",
        "address": "Vasario 16-osios g. 33, Jonava",
        "lat": 55.0705601,
        "lng": 24.2632109,
        "prices": {
            "A95": 1.95,
            "A98": null,
            "Diesel": 2.06,
            "LPG": 0.95
        }
    },
    {
        "id": 186,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Trakų",
        "address": "Didžiulio g. 5, Dėdeliškių k.",
        "lat": 54.5642276,
        "lng": 24.7282274,
        "prices": {
            "A95": 1.96,
            "A98": null,
            "Diesel": 2.1,
            "LPG": 1.0
        }
    },
    {
        "id": 187,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Šiaulių",
        "address": "Dubijos g. 20A, Šiauliai",
        "lat": 55.9287546,
        "lng": 23.2975956,
        "prices": {
            "A95": 1.88,
            "A98": null,
            "Diesel": 1.98,
            "LPG": 0.96
        }
    },
    {
        "id": 188,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Šilalės",
        "address": "Dvaro g. 3, Košių II k.",
        "lat": 55.5252224,
        "lng": 22.2160078,
        "prices": {
            "A95": 1.96,
            "A98": null,
            "Diesel": 2.1,
            "LPG": 0.99
        }
    },
    {
        "id": 189,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Utenos",
        "address": "J. Basanavičiaus g. 3, Utena",
        "lat": 55.4957333,
        "lng": 25.5839148,
        "prices": {
            "A95": 1.78,
            "A98": null,
            "Diesel": 1.94,
            "LPG": 0.87
        }
    },
    {
        "id": 190,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Ukmergės",
        "address": "Ežero g. 7, Kurėnų k.",
        "lat": 55.301698,
        "lng": 24.7372908,
        "prices": {
            "A95": 1.96,
            "A98": null,
            "Diesel": 2.1,
            "LPG": 1.0
        }
    },
    {
        "id": 191,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Kaunas",
        "address": "Vakarinis aplinkkelis 10, Kaunas",
        "lat": 54.8982139,
        "lng": 23.9044817,
        "prices": {
            "A95": 1.84,
            "A98": null,
            "Diesel": 2.0,
            "LPG": 0.96
        }
    },
    {
        "id": 192,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Radviliškio",
        "address": "Gedimino g. 42B, Radviliškis",
        "lat": 55.8116866,
        "lng": 23.5500705,
        "prices": {
            "A95": 1.85,
            "A98": null,
            "Diesel": 1.98,
            "LPG": 0.93
        }
    },
    {
        "id": 193,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Tauragės",
        "address": "Gedimino g. 47, Tauragė",
        "lat": 55.2482942,
        "lng": 22.3030291,
        "prices": {
            "A95": 1.91,
            "A98": null,
            "Diesel": 1.99,
            "LPG": 0.93
        }
    },
    {
        "id": 194,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Vilnius",
        "address": "Geležinio Vilko g. 2A, Vilnius",
        "lat": 54.6710025,
        "lng": 25.2366353,
        "prices": {
            "A95": 1.96,
            "A98": null,
            "Diesel": 2.07,
            "LPG": 0.96
        }
    },
    {
        "id": 195,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Klaipėda",
        "address": "Tilžės g. 56A, Klaipėda",
        "lat": 55.7041492,
        "lng": 21.1608983,
        "prices": {
            "A95": 1.85,
            "A98": null,
            "Diesel": 2.0,
            "LPG": 0.94
        }
    },
    {
        "id": 196,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Vilnius",
        "address": "Geležinio Vilko g. 39, Vilnius",
        "lat": 54.7023542,
        "lng": 25.264959,
        "prices": {
            "A95": 1.88,
            "A98": null,
            "Diesel": 2.0,
            "LPG": 0.96
        }
    },
    {
        "id": 197,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Vilnius",
        "address": "Eišiškių pl. 11, Vilnius",
        "lat": 54.6515293,
        "lng": 25.2694468,
        "prices": {
            "A95": 1.91,
            "A98": null,
            "Diesel": 2.02,
            "LPG": 0.96
        }
    },
    {
        "id": 198,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Vilnius",
        "address": "Geležinio Vilko g. 4, Vilnius",
        "lat": 54.7028361,
        "lng": 25.2639154,
        "prices": {
            "A95": 1.88,
            "A98": null,
            "Diesel": 2.0,
            "LPG": 0.96
        }
    },
    {
        "id": 199,
        "name": "Degta",
        "logo": "⛽",
        "city": "Anykščių",
        "address": "Anykščiai, Vienuolio g. 34A",
        "lat": 55.5349516,
        "lng": 25.0424158,
        "prices": {
            "A95": 1.77,
            "A98": null,
            "Diesel": 2.0,
            "LPG": 0.88
        }
    },
    {
        "id": 200,
        "name": "Degta",
        "logo": "⛽",
        "city": "Rokiškio",
        "address": "Rokiškis, Respublikos g.113B,",
        "lat": 55.9538411,
        "lng": 25.6812626,
        "prices": {
            "A95": 1.9,
            "A98": null,
            "Diesel": 2.01,
            "LPG": 0.9
        }
    },
    {
        "id": 201,
        "name": "Degta",
        "logo": "⛽",
        "city": "Elektrėnų",
        "address": "Vievis, Kauno g. 55A",
        "lat": 54.763291,
        "lng": 24.7695541,
        "prices": {
            "A95": 1.96,
            "A98": null,
            "Diesel": 2.1,
            "LPG": 0.96
        }
    },
    {
        "id": 202,
        "name": "Deliuvis",
        "logo": "⛽",
        "city": "Panevėžio",
        "address": "Pušaloto g. 140, Panevėžys",
        "lat": 55.7465858,
        "lng": 24.3291567,
        "prices": {
            "A95": 1.73,
            "A98": null,
            "Diesel": 1.92,
            "LPG": 0.89
        }
    },
    {
        "id": 203,
        "name": "Deliuvis",
        "logo": "⛽",
        "city": "Panevėžio",
        "address": "G.Petkevičaitės-Bitės 35C, Panevėžys",
        "lat": 55.9155086,
        "lng": 25.0309026,
        "prices": {
            "A95": 1.73,
            "A98": null,
            "Diesel": 1.92,
            "LPG": 0.89
        }
    },
    {
        "id": 204,
        "name": "Deliuvis",
        "logo": "⛽",
        "city": "Panevėžio",
        "address": "S.Kerbedžio 2, Panevėžys",
        "lat": 55.7431736,
        "lng": 24.3424941,
        "prices": {
            "A95": 1.73,
            "A98": null,
            "Diesel": 1.92,
            "LPG": 0.89
        }
    },
    {
        "id": 205,
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Kaunas",
        "address": "Draugystės g.8B, Kaunas",
        "lat": 54.9080536,
        "lng": 23.9920719,
        "prices": {
            "A95": 1.83,
            "A98": null,
            "Diesel": 1.96,
            "LPG": 0.87
        }
    },
    {
        "id": 206,
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Šilutės",
        "address": "Gluosnių g.4A, Šilutė",
        "lat": 55.3489154,
        "lng": 21.4689533,
        "prices": {
            "A95": 1.76,
            "A98": null,
            "Diesel": 1.96,
            "LPG": 0.88
        }
    },
    {
        "id": 207,
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Vilnius",
        "address": "Bukiškio k. Ukmergės g.437",
        "lat": 54.6870458,
        "lng": 25.2829111,
        "prices": {
            "A95": 1.84,
            "A98": null,
            "Diesel": 1.97,
            "LPG": 0.89
        }
    },
    {
        "id": 208,
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Klaipėda",
        "address": "Durpyno 63, Jonušų k.",
        "lat": 55.7127529,
        "lng": 21.1350469,
        "prices": {
            "A95": 1.87,
            "A98": null,
            "Diesel": 1.98,
            "LPG": 0.89
        }
    },
    {
        "id": 209,
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Vilnius",
        "address": "Jeruzalės 2, Vilnius",
        "lat": 54.7398609,
        "lng": 25.2761745,
        "prices": {
            "A95": 1.78,
            "A98": null,
            "Diesel": 1.97,
            "LPG": 0.86
        }
    },
    {
        "id": 210,
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Biržų",
        "address": "Jaunimo g.2a, Biržai",
        "lat": 56.2076707,
        "lng": 24.7708027,
        "prices": {
            "A95": 1.77,
            "A98": null,
            "Diesel": 1.95,
            "LPG": 0.89
        }
    },
    {
        "id": 211,
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Vilnius",
        "address": "Gunkliškių g.2F, Vilnius",
        "lat": 54.6227504,
        "lng": 25.1050189,
        "prices": {
            "A95": 1.83,
            "A98": null,
            "Diesel": 1.97,
            "LPG": 0.9
        }
    },
    {
        "id": 212,
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Kaišiadorių",
        "address": "Paukštininkų g.4a, Kaišiadorys",
        "lat": 54.8643505,
        "lng": 24.436539,
        "prices": {
            "A95": 1.84,
            "A98": null,
            "Diesel": 1.98,
            "LPG": 0.87
        }
    },
    {
        "id": 213,
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Kaunas",
        "address": "Jonavos g. 292B, Kaunas",
        "lat": 54.9324269,
        "lng": 23.9180391,
        "prices": {
            "A95": 1.8,
            "A98": null,
            "Diesel": 1.93,
            "LPG": 0.85
        }
    },
    {
        "id": 214,
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Vilnius",
        "address": "Kareivių g. 4, Vilnius",
        "lat": 54.7179121,
        "lng": 25.2956973,
        "prices": {
            "A95": 1.8,
            "A98": null,
            "Diesel": 1.93,
            "LPG": 0.88
        }
    },
    {
        "id": 215,
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Kėdainių",
        "address": "Juodgirio k.1,",
        "lat": 55.339637,
        "lng": 24.0118376,
        "prices": {
            "A95": 1.86,
            "A98": null,
            "Diesel": 2.0,
            "LPG": 0.9
        }
    },
    {
        "id": 216,
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Kaunas",
        "address": "Ilgakiemio k., Kauno g.25",
        "lat": 54.8982139,
        "lng": 23.9044817,
        "prices": {
            "A95": 1.8,
            "A98": null,
            "Diesel": 1.96,
            "LPG": 0.86
        }
    },
    {
        "id": 217,
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Marijampolės",
        "address": "Stoties g. 6B, Marijampolė",
        "lat": 54.5651422,
        "lng": 23.3685518,
        "prices": {
            "A95": 1.86,
            "A98": null,
            "Diesel": 1.98,
            "LPG": 0.86
        }
    },
    {
        "id": 218,
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Trakų",
        "address": "Sausių g.2 Sausių k..",
        "lat": 54.5642276,
        "lng": 24.7282274,
        "prices": {
            "A95": 1.82,
            "A98": null,
            "Diesel": 1.94,
            "LPG": 0.87
        }
    },
    {
        "id": 219,
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Raseinių",
        "address": "Žemaičių g. 34, Ariogala",
        "lat": 55.2676804,
        "lng": 23.4707004,
        "prices": {
            "A95": 1.86,
            "A98": null,
            "Diesel": 2.0,
            "LPG": 0.9
        }
    },
    {
        "id": 220,
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Kaunas",
        "address": "Žemaitkiemis, Stasio Krasausko g. 21",
        "lat": 54.8982139,
        "lng": 23.9044817,
        "prices": {
            "A95": 1.78,
            "A98": null,
            "Diesel": 1.96,
            "LPG": 0.9
        }
    },
    {
        "id": 221,
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Alytaus",
        "address": "Ūdrijos g.2, Alytus",
        "lat": 54.4081412,
        "lng": 24.0166467,
        "prices": {
            "A95": 1.78,
            "A98": null,
            "Diesel": 1.93,
            "LPG": 0.86
        }
    },
    {
        "id": 222,
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Panevėžio",
        "address": "Šilagalio k., Panevėžio aplinkl.12",
        "lat": 55.9155086,
        "lng": 25.0309026,
        "prices": {
            "A95": 1.8,
            "A98": null,
            "Diesel": 1.95,
            "LPG": 0.88
        }
    },
    {
        "id": 223,
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Vilnius",
        "address": "Vilnius, Spyglių g. 2",
        "lat": 54.6870458,
        "lng": 25.2829111,
        "prices": {
            "A95": 1.86,
            "A98": null,
            "Diesel": 1.98,
            "LPG": 0.88
        }
    },
    {
        "id": 224,
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Kaunas",
        "address": "Vandžiogalos pl.86A, Kaunas",
        "lat": 54.9515318,
        "lng": 23.8936351,
        "prices": {
            "A95": 1.77,
            "A98": null,
            "Diesel": 1.97,
            "LPG": 0.88
        }
    },
    {
        "id": 225,
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Klaipėda",
        "address": "Taikos pr.124, Klaipėda",
        "lat": 55.661071,
        "lng": 21.1762437,
        "prices": {
            "A95": 1.79,
            "A98": null,
            "Diesel": 1.92,
            "LPG": 0.85
        }
    },
    {
        "id": 226,
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Vilkaviškio",
        "address": "S.Nėries g.38, Vilkaviškis",
        "lat": 54.6581148,
        "lng": 23.0332434,
        "prices": {
            "A95": 1.74,
            "A98": null,
            "Diesel": 1.96,
            "LPG": 0.89
        }
    },
    {
        "id": 227,
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Vilnius",
        "address": "Taikos g.1, Kreivalaužių k.",
        "lat": 54.6870458,
        "lng": 25.2829111,
        "prices": {
            "A95": 1.83,
            "A98": null,
            "Diesel": 1.93,
            "LPG": 0.86
        }
    },
    {
        "id": 228,
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Trakų",
        "address": "Sodų g.3A, Lentvaris",
        "lat": 54.6434035,
        "lng": 25.0534576,
        "prices": {
            "A95": 1.82,
            "A98": null,
            "Diesel": 1.96,
            "LPG": 0.9
        }
    },
    {
        "id": 229,
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Vilnius",
        "address": "Savanorių 225, Vilnius",
        "lat": 54.641028,
        "lng": 25.1841354,
        "prices": {
            "A95": 1.78,
            "A98": null,
            "Diesel": 1.96,
            "LPG": 0.85
        }
    },
    {
        "id": 230,
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Marijampolės",
        "address": "Skaisčiūnų k., Europos g.11",
        "lat": 54.6792304,
        "lng": 23.2004406,
        "prices": {
            "A95": 1.8,
            "A98": null,
            "Diesel": 1.96,
            "LPG": 0.87
        }
    },
    {
        "id": 231,
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Kaunas",
        "address": "Savanorių pr.402A, Kaunas",
        "lat": 54.927502,
        "lng": 23.9722133,
        "prices": {
            "A95": 1.81,
            "A98": null,
            "Diesel": 1.95,
            "LPG": 0.9
        }
    },
    {
        "id": 232,
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Pasvalio",
        "address": "Sereikonių k., Baltijos kelio g.2",
        "lat": 56.0706909,
        "lng": 24.3842838,
        "prices": {
            "A95": 1.77,
            "A98": null,
            "Diesel": 1.94,
            "LPG": 0.89
        }
    },
    {
        "id": 233,
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Šiaulių",
        "address": "Sembos g.5, Šiauliai",
        "lat": 55.8988643,
        "lng": 23.271743,
        "prices": {
            "A95": 1.78,
            "A98": null,
            "Diesel": 1.93,
            "LPG": 0.85
        }
    },
    {
        "id": 234,
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Marijampolės",
        "address": "Kauno g.165, Pietarių k.",
        "lat": 54.6792304,
        "lng": 23.2004406,
        "prices": {
            "A95": 1.8,
            "A98": null,
            "Diesel": 1.96,
            "LPG": 0.87
        }
    },
    {
        "id": 235,
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Raseinių",
        "address": "Raščių k. 1A",
        "lat": 55.3764559,
        "lng": 23.1988999,
        "prices": {
            "A95": 1.78,
            "A98": null,
            "Diesel": 1.96,
            "LPG": 0.9
        }
    },
    {
        "id": 236,
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Panevėžio",
        "address": "Ramygalos g.186A, Panevėžys",
        "lat": 55.7100897,
        "lng": 24.3723092,
        "prices": {
            "A95": 1.74,
            "A98": null,
            "Diesel": 1.94,
            "LPG": 0.88
        }
    },
    {
        "id": 237,
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Pasvalio",
        "address": "Pasvalys, Taikos g.24",
        "lat": 56.0706909,
        "lng": 24.3842838,
        "prices": {
            "A95": 1.77,
            "A98": null,
            "Diesel": 1.94,
            "LPG": 0.86
        }
    },
    {
        "id": 238,
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Vilnius",
        "address": "Pajautos g. 31, Vilnius (Pilaitė)",
        "lat": 54.7101432,
        "lng": 25.1620536,
        "prices": {
            "A95": 1.8,
            "A98": null,
            "Diesel": 1.96,
            "LPG": 0.91
        }
    },
    {
        "id": 239,
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Panevėžio",
        "address": "Nemuno g.79A, Panevėžys",
        "lat": 55.7317427,
        "lng": 24.3406939,
        "prices": {
            "A95": 1.74,
            "A98": null,
            "Diesel": 1.94,
            "LPG": 0.89
        }
    },
    {
        "id": 240,
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Vilnius",
        "address": "Mokyklos g. 26, Maišiagalos mstl.",
        "lat": 54.6870458,
        "lng": 25.2829111,
        "prices": {
            "A95": 1.84,
            "A98": null,
            "Diesel": 1.97,
            "LPG": 0.9
        }
    },
    {
        "id": 241,
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Radviliškio",
        "address": "Miško g.62, Radviliškis",
        "lat": 55.8018115,
        "lng": 23.5637751,
        "prices": {
            "A95": 1.86,
            "A98": null,
            "Diesel": 1.97,
            "LPG": 0.86
        }
    },
    {
        "id": 242,
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Klaipėda",
        "address": "Minijos g.154A, Klaipėda",
        "lat": 55.6684939,
        "lng": 21.159076,
        "prices": {
            "A95": 1.79,
            "A98": null,
            "Diesel": 1.92,
            "LPG": 0.85
        }
    },
    {
        "id": 243,
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Klaipėda",
        "address": "Medelyno g.126 Kalotės k.",
        "lat": 55.7127529,
        "lng": 21.1350469,
        "prices": {
            "A95": 1.79,
            "A98": null,
            "Diesel": 1.95,
            "LPG": 0.86
        }
    },
    {
        "id": 244,
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Kaunas",
        "address": "Masiulio g.16C, Kaunas",
        "lat": 54.8870451,
        "lng": 24.0060571,
        "prices": {
            "A95": 1.84,
            "A98": null,
            "Diesel": 1.94,
            "LPG": 0.9
        }
    },
    {
        "id": 245,
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Kaunas",
        "address": "Marijampolės g. 58, Mastaičių k.",
        "lat": 54.8982139,
        "lng": 23.9044817,
        "prices": {
            "A95": 1.8,
            "A98": null,
            "Diesel": 1.96,
            "LPG": 0.86
        }
    },
    {
        "id": 246,
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Kaunas",
        "address": "Liuksemburgo aklg. 27, Kaunas",
        "lat": 54.8592253,
        "lng": 23.8371192,
        "prices": {
            "A95": 1.75,
            "A98": null,
            "Diesel": 1.95,
            "LPG": 0.86
        }
    },
    {
        "id": 247,
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Vilnius",
        "address": "Liepkalnio g.112A, Vilnius",
        "lat": 54.6526579,
        "lng": 25.3057172,
        "prices": {
            "A95": 1.78,
            "A98": null,
            "Diesel": 1.96,
            "LPG": 0.89
        }
    },
    {
        "id": 248,
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Vilnius",
        "address": "Laisvės pr. 80B, Vilnius",
        "lat": 54.7234552,
        "lng": 25.2329482,
        "prices": {
            "A95": 1.78,
            "A98": null,
            "Diesel": 1.98,
            "LPG": 0.89
        }
    },
    {
        "id": 249,
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Vilnius",
        "address": "Kirtimų g. 33, Vilnius",
        "lat": 54.6279215,
        "lng": 25.1496569,
        "prices": {
            "A95": 1.77,
            "A98": null,
            "Diesel": 1.95,
            "LPG": 0.85
        }
    },
    {
        "id": 250,
        "name": "Eniris",
        "logo": "⛽",
        "city": "Šilutės",
        "address": "Klaipėdos g. 76, Žemaičių Naumiestis",
        "lat": 55.3552823,
        "lng": 21.6800586,
        "prices": {
            "A95": 1.81,
            "A98": null,
            "Diesel": 1.99,
            "LPG": 0.92
        }
    },
    {
        "id": 251,
        "name": "Eniris",
        "logo": "⛽",
        "city": "Šilalės",
        "address": "Paršežerio g.1, Vabalų k.",
        "lat": 55.5252224,
        "lng": 22.2160078,
        "prices": {
            "A95": 1.76,
            "A98": null,
            "Diesel": 1.99,
            "LPG": 0.92
        }
    },
    {
        "id": 252,
        "name": "Eniris",
        "logo": "⛽",
        "city": "Kretingos",
        "address": "Platelių g. 1 a, Laivių k.",
        "lat": 55.9686093,
        "lng": 21.3604059,
        "prices": {
            "A95": 1.87,
            "A98": null,
            "Diesel": 2.05,
            "LPG": 0.96
        }
    },
    {
        "id": 253,
        "name": "Eniris",
        "logo": "⛽",
        "city": "Akmenės",
        "address": "Plento g.2, Ventos m.",
        "lat": 56.2415748,
        "lng": 22.8625876,
        "prices": {
            "A95": 1.76,
            "A98": null,
            "Diesel": 1.92,
            "LPG": 0.9
        }
    },
    {
        "id": 254,
        "name": "Eniris",
        "logo": "⛽",
        "city": "Kelmės",
        "address": "Puttvinskio g. 29, Kelmė",
        "lat": 55.6865165,
        "lng": 22.8611849,
        "prices": {
            "A95": 1.75,
            "A98": null,
            "Diesel": 1.9,
            "LPG": 0.85
        }
    },
    {
        "id": 255,
        "name": "Eniris",
        "logo": "⛽",
        "city": "Kėdainių",
        "address": "Ruoščių k. 1",
        "lat": 55.339637,
        "lng": 24.0118376,
        "prices": {
            "A95": 1.73,
            "A98": null,
            "Diesel": 1.9,
            "LPG": 0.92
        }
    },
    {
        "id": 256,
        "name": "Eniris",
        "logo": "⛽",
        "city": "Šilalės",
        "address": "Rytinio Kelio g. 2a, Šilalė",
        "lat": 55.4859035,
        "lng": 22.1996267,
        "prices": {
            "A95": 1.75,
            "A98": null,
            "Diesel": 1.92,
            "LPG": 0.85
        }
    },
    {
        "id": 257,
        "name": "Eniris",
        "logo": "⛽",
        "city": "Akmenės",
        "address": "Skabeikių k. 4",
        "lat": 56.2415748,
        "lng": 22.8625876,
        "prices": {
            "A95": 1.76,
            "A98": null,
            "Diesel": 1.92,
            "LPG": 0.88
        }
    },
    {
        "id": 258,
        "name": "Eniris",
        "logo": "⛽",
        "city": "Skuodo",
        "address": "Skuodo g. 7, Stripinių k.",
        "lat": 56.2274045,
        "lng": 21.6899322,
        "prices": {
            "A95": 1.76,
            "A98": null,
            "Diesel": 1.92,
            "LPG": 0.88
        }
    },
    {
        "id": 259,
        "name": "Eniris",
        "logo": "⛽",
        "city": "Jurbarko",
        "address": "Tauragės g. 29, Rimšų k.",
        "lat": 55.2176268,
        "lng": 22.9652342,
        "prices": {
            "A95": 1.91,
            "A98": null,
            "Diesel": 2.04,
            "LPG": 0.92
        }
    },
    {
        "id": 260,
        "name": "Eniris",
        "logo": "⛽",
        "city": "Telšių",
        "address": "Telšių g. 2 b, Rainių k.",
        "lat": 56.0130975,
        "lng": 22.1366723,
        "prices": {
            "A95": 1.91,
            "A98": null,
            "Diesel": 2.01,
            "LPG": 0.93
        }
    },
    {
        "id": 261,
        "name": "Eniris",
        "logo": "⛽",
        "city": "Kretingos",
        "address": "Tiekėjų g. 34a, Kretinga",
        "lat": 55.884461,
        "lng": 21.2215329,
        "prices": {
            "A95": 1.86,
            "A98": null,
            "Diesel": 2.04,
            "LPG": 0.94
        }
    },
    {
        "id": 262,
        "name": "Eniris",
        "logo": "⛽",
        "city": "Kelmės",
        "address": "Žemaitės g. 52, Užventis",
        "lat": 55.7861028,
        "lng": 22.6709028,
        "prices": {
            "A95": 1.77,
            "A98": null,
            "Diesel": 1.93,
            "LPG": 0.95
        }
    },
    {
        "id": 263,
        "name": "Eniris",
        "logo": "⛽",
        "city": "Plungės",
        "address": "Minijos g. 1, Aleksandravo k.",
        "lat": 55.953916,
        "lng": 21.8335407,
        "prices": {
            "A95": 1.85,
            "A98": null,
            "Diesel": 1.99,
            "LPG": 0.96
        }
    },
    {
        "id": 264,
        "name": "Eniris",
        "logo": "⛽",
        "city": "Telšių",
        "address": "Mažeikių g. 1, Telšiai",
        "lat": 55.9997952,
        "lng": 22.2416104,
        "prices": {
            "A95": 1.89,
            "A98": null,
            "Diesel": 2.01,
            "LPG": 0.92
        }
    },
    {
        "id": 265,
        "name": "Eniris",
        "logo": "⛽",
        "city": "Mažeikių",
        "address": "Laižuvos g. 82 d, Mažeikiai,",
        "lat": 56.3137433,
        "lng": 22.3682032,
        "prices": {
            "A95": 1.74,
            "A98": null,
            "Diesel": 1.86,
            "LPG": 0.88
        }
    },
    {
        "id": 266,
        "name": "Eniris",
        "logo": "⛽",
        "city": "Prienų",
        "address": "Alytaus pl. 2, Mardosų k.",
        "lat": 54.6334424,
        "lng": 24.2204708,
        "prices": {
            "A95": 1.79,
            "A98": null,
            "Diesel": 1.93,
            "LPG": 0.97
        }
    },
    {
        "id": 267,
        "name": "Eniris",
        "logo": "⛽",
        "city": "Lazdijų",
        "address": "Alytaus g. 59, Krosnos k.",
        "lat": 54.1607523,
        "lng": 23.6775875,
        "prices": {
            "A95": 1.78,
            "A98": null,
            "Diesel": 1.96,
            "LPG": 0.89
        }
    },
    {
        "id": 268,
        "name": "Eniris",
        "logo": "⛽",
        "city": "Tauragės",
        "address": "Adakavo g. 1, Skaudvilė",
        "lat": 55.4015729,
        "lng": 22.5977437,
        "prices": {
            "A95": 1.91,
            "A98": null,
            "Diesel": 2.04,
            "LPG": 0.94
        }
    },
    {
        "id": 269,
        "name": "Eniris",
        "logo": "⛽",
        "city": "Kaišiadorių",
        "address": "Bačkonių k., Pastrėvio g. 1A,",
        "lat": 54.8270857,
        "lng": 24.4264088,
        "prices": {
            "A95": 1.8,
            "A98": null,
            "Diesel": 1.97,
            "LPG": 0.87
        }
    },
    {
        "id": 270,
        "name": "Eniris",
        "logo": "⛽",
        "city": "Telšių",
        "address": "Beržų g. 24/Drąsiųjų 7, Tryškiai",
        "lat": 56.0130975,
        "lng": 22.1366723,
        "prices": {
            "A95": 1.89,
            "A98": null,
            "Diesel": 1.99,
            "LPG": 0.94
        }
    },
    {
        "id": 271,
        "name": "Eniris",
        "logo": "⛽",
        "city": "Pagėgių",
        "address": "Klaipėdos g. 6b, Pagėgiai",
        "lat": 55.1404171,
        "lng": 21.9034153,
        "prices": {
            "A95": 1.88,
            "A98": null,
            "Diesel": 1.99,
            "LPG": 0.94
        }
    },
    {
        "id": 272,
        "name": "Eniris",
        "logo": "⛽",
        "city": "Raseinių",
        "address": "Jurbarko g. 34, Raseiniai",
        "lat": 55.3706566,
        "lng": 23.1192973,
        "prices": {
            "A95": 1.73,
            "A98": null,
            "Diesel": 1.93,
            "LPG": 0.86
        }
    },
    {
        "id": 273,
        "name": "Eniris",
        "logo": "⛽",
        "city": "Vilnius",
        "address": "Kalnuotės 1 k.",
        "lat": 54.6870458,
        "lng": 25.2829111,
        "prices": {
            "A95": 1.85,
            "A98": null,
            "Diesel": 1.96,
            "LPG": 0.92
        }
    },
    {
        "id": 274,
        "name": "Eu Verslas",
        "logo": "⛽",
        "city": "Mažeikių",
        "address": "Viekšnių g. 24, Mažeikiai",
        "lat": 56.3042092,
        "lng": 22.3602577,
        "prices": {
            "A95": 1.7,
            "A98": null,
            "Diesel": 1.86,
            "LPG": 0.8
        }
    },
    {
        "id": 275,
        "name": "Eu Verslas",
        "logo": "⛽",
        "city": "Plungės",
        "address": "Telšių g. 127, Jovaišiškės k.",
        "lat": 55.953916,
        "lng": 21.8335407,
        "prices": {
            "A95": 1.7,
            "A98": null,
            "Diesel": 1.86,
            "LPG": 0.8
        }
    },
    {
        "id": 276,
        "name": "Eu Verslas",
        "logo": "⛽",
        "city": "Plungės",
        "address": "Stoties g. 7C, Plungė",
        "lat": 55.9203765,
        "lng": 21.8321274,
        "prices": {
            "A95": 1.7,
            "A98": null,
            "Diesel": 1.86,
            "LPG": 0.8
        }
    },
    {
        "id": 277,
        "name": "Gazimpeksas",
        "logo": "⛽",
        "city": "Rietavo",
        "address": "Tverai, Rietavo g. 32",
        "lat": 55.7240783,
        "lng": 22.0024769,
        "prices": {
            "A95": 1.75,
            "A98": null,
            "Diesel": 1.99,
            "LPG": 0.85
        }
    },
    {
        "id": 278,
        "name": "Gelvybė",
        "logo": "⛽",
        "city": "Jurbarko",
        "address": "Muitinės g. 32, Jurbarkas",
        "lat": 55.0771976,
        "lng": 22.7510003,
        "prices": {
            "A95": 1.76,
            "A98": null,
            "Diesel": 1.95,
            "LPG": 0.87
        }
    },
    {
        "id": 279,
        "name": "Gelvybė",
        "logo": "⛽",
        "city": "Šakių",
        "address": "V. Kudirkos g. 11D, Šakiai",
        "lat": 54.9541387,
        "lng": 23.0246372,
        "prices": {
            "A95": 1.78,
            "A98": null,
            "Diesel": 1.91,
            "LPG": 0.9
        }
    },
    {
        "id": 280,
        "name": "Gelvybė",
        "logo": "⛽",
        "city": "Šakių",
        "address": "Sūduvos g. 3, Kiduliai",
        "lat": 55.0638386,
        "lng": 22.7807167,
        "prices": {
            "A95": 1.76,
            "A98": null,
            "Diesel": 1.95,
            "LPG": 0.87
        }
    },
    {
        "id": 281,
        "name": "Gelvybė",
        "logo": "⛽",
        "city": "Jurbarko",
        "address": "S. Daukanto g. 66, Jurbarkas",
        "lat": 55.0825362,
        "lng": 22.7889958,
        "prices": {
            "A95": 1.76,
            "A98": null,
            "Diesel": 1.95,
            "LPG": 0.87
        }
    },
    {
        "id": 282,
        "name": "Gelvybė",
        "logo": "⛽",
        "city": "Šakių",
        "address": "Kauno g. 50, Girėnai",
        "lat": 54.9527529,
        "lng": 23.0802937,
        "prices": {
            "A95": 1.78,
            "A98": null,
            "Diesel": 1.95,
            "LPG": 0.9
        }
    },
    {
        "id": 283,
        "name": "Gelvybė",
        "logo": "⛽",
        "city": "Vilkaviškio",
        "address": "Marijampolės g. 8, Rūdos k.",
        "lat": 54.5770716,
        "lng": 22.9419043,
        "prices": {
            "A95": 1.79,
            "A98": null,
            "Diesel": 1.96,
            "LPG": 0.87
        }
    },
    {
        "id": 284,
        "name": "Gelvybė",
        "logo": "⛽",
        "city": "Jurbarko",
        "address": "Knygnešių g. 9, Jurbarkas",
        "lat": 55.0854928,
        "lng": 22.7455381,
        "prices": {
            "A95": 1.76,
            "A98": null,
            "Diesel": 1.95,
            "LPG": 0.87
        }
    },
    {
        "id": 285,
        "name": "Gelvybė",
        "logo": "⛽",
        "city": "Kėdainių",
        "address": "Aristavos g. 4, Aristava",
        "lat": 55.2971374,
        "lng": 24.0769203,
        "prices": {
            "A95": 1.76,
            "A98": null,
            "Diesel": 1.95,
            "LPG": 0.9
        }
    },
    {
        "id": 286,
        "name": "GM Circle K",
        "logo": "🔴",
        "city": "Šakių",
        "address": "Kauno g. 68, Girėnų k.",
        "lat": 54.9148731,
        "lng": 23.078048,
        "prices": {
            "A95": 1.94,
            "A98": null,
            "Diesel": 2.06,
            "LPG": 0.99
        }
    },
    {
        "id": 287,
        "name": "Jozita",
        "logo": "🟡",
        "city": "Raseinių",
        "address": "Raseiniai, Maironio g. 78b",
        "lat": 55.3764559,
        "lng": 23.1988999,
        "prices": {
            "A95": 1.79,
            "A98": null,
            "Diesel": 1.92,
            "LPG": 0.83
        }
    },
    {
        "id": 288,
        "name": "Jozita",
        "logo": "🟡",
        "city": "Kaunas",
        "address": "Ramučiai, K. Bielinio g. 2A",
        "lat": 54.8982139,
        "lng": 23.9044817,
        "prices": {
            "A95": 1.79,
            "A98": null,
            "Diesel": 1.92,
            "LPG": 0.83
        }
    },
    {
        "id": 289,
        "name": "Jozita",
        "logo": "🟡",
        "city": "Kelmės",
        "address": "Kelmė, V.Putvinskio g. 37",
        "lat": 55.6865165,
        "lng": 22.8611849,
        "prices": {
            "A95": 1.75,
            "A98": null,
            "Diesel": 1.92,
            "LPG": 0.83
        }
    },
    {
        "id": 290,
        "name": "Jozita",
        "logo": "🟡",
        "city": "Tauragės",
        "address": "Papušynės k, Šilalės g. 105",
        "lat": 55.3564378,
        "lng": 22.405222,
        "prices": {
            "A95": 1.79,
            "A98": null,
            "Diesel": 1.92,
            "LPG": 0.83
        }
    },
    {
        "id": 291,
        "name": "Jozita",
        "logo": "🟡",
        "city": "Panevėžio",
        "address": "Panevėžys, S. Kerbedžio g. 7F",
        "lat": 55.9155086,
        "lng": 25.0309026,
        "prices": {
            "A95": 1.77,
            "A98": null,
            "Diesel": 1.92,
            "LPG": 0.83
        }
    },
    {
        "id": 292,
        "name": "Jozita",
        "logo": "🟡",
        "city": "Pakruojo",
        "address": "Kuosiškių k. 4",
        "lat": 56.0731045,
        "lng": 23.8319151,
        "prices": {
            "A95": 1.78,
            "A98": null,
            "Diesel": 1.92,
            "LPG": 0.83
        }
    },
    {
        "id": 293,
        "name": "Jozita",
        "logo": "🟡",
        "city": "Klaipėda",
        "address": "Klipščių k., Šilelių g.1",
        "lat": 55.7127529,
        "lng": 21.1350469,
        "prices": {
            "A95": 1.79,
            "A98": null,
            "Diesel": 1.92,
            "LPG": 0.83
        }
    },
    {
        "id": 294,
        "name": "Jozita",
        "logo": "🟡",
        "city": "Klaipėda",
        "address": "Klaipėda, Taikos pr. 157",
        "lat": 55.695369,
        "lng": 21.1481735,
        "prices": {
            "A95": 1.79,
            "A98": null,
            "Diesel": 1.92,
            "LPG": 0.83
        }
    },
    {
        "id": 295,
        "name": "Jozita",
        "logo": "🟡",
        "city": "Klaipėda",
        "address": "Gargždai, Gamyklos g. 1",
        "lat": 55.7127529,
        "lng": 21.1350469,
        "prices": {
            "A95": 1.77,
            "A98": null,
            "Diesel": 1.92,
            "LPG": 0.83
        }
    },
    {
        "id": 296,
        "name": "Jozita",
        "logo": "🟡",
        "city": "Kaunas",
        "address": "Garliava, Vytauto g. 111A",
        "lat": 54.8982139,
        "lng": 23.9044817,
        "prices": {
            "A95": 1.79,
            "A98": null,
            "Diesel": 1.92,
            "LPG": 0.83
        }
    },
    {
        "id": 297,
        "name": "Jozita",
        "logo": "🟡",
        "city": "Kaunas",
        "address": "Kaunas, Baltų pr. 141A",
        "lat": 54.8982139,
        "lng": 23.9044817,
        "prices": {
            "A95": 1.79,
            "A98": null,
            "Diesel": 1.92,
            "LPG": 0.83
        }
    },
    {
        "id": 298,
        "name": "Jozita",
        "logo": "🟡",
        "city": "Kaunas",
        "address": "Kaunas, Betygalos g. 8",
        "lat": 54.8982139,
        "lng": 23.9044817,
        "prices": {
            "A95": 1.79,
            "A98": null,
            "Diesel": 1.92,
            "LPG": 0.83
        }
    },
    {
        "id": 299,
        "name": "Jozita",
        "logo": "🟡",
        "city": "Kaunas",
        "address": "Kaunas, Jonavos g. 51",
        "lat": 54.9346828,
        "lng": 23.9165278,
        "prices": {
            "A95": 1.79,
            "A98": null,
            "Diesel": 1.92,
            "LPG": 0.83
        }
    },
    {
        "id": 300,
        "name": "Jozita",
        "logo": "🟡",
        "city": "Kaunas",
        "address": "Kaunas, Kuršių 13A",
        "lat": 54.8982139,
        "lng": 23.9044817,
        "prices": {
            "A95": 1.79,
            "A98": null,
            "Diesel": 1.92,
            "LPG": 0.83
        }
    },
    {
        "id": 301,
        "name": "Jozita",
        "logo": "🟡",
        "city": "Kaunas",
        "address": "Kaunas, Partizanų g. 87G",
        "lat": 54.8982139,
        "lng": 23.9044817,
        "prices": {
            "A95": 1.79,
            "A98": null,
            "Diesel": 1.92,
            "LPG": 0.83
        }
    },
    {
        "id": 302,
        "name": "Jozita",
        "logo": "🟡",
        "city": "Šiaulių",
        "address": "Toliočiai, Plento g. 2B",
        "lat": 55.9398236,
        "lng": 23.3937822,
        "prices": {
            "A95": 1.79,
            "A98": null,
            "Diesel": 1.92,
            "LPG": 0.83
        }
    },
    {
        "id": 303,
        "name": "Jozita",
        "logo": "🟡",
        "city": "Šilutės",
        "address": "Traksėdžių k., Klaipėdos. 1",
        "lat": 55.3750109,
        "lng": 21.5403978,
        "prices": {
            "A95": 1.79,
            "A98": null,
            "Diesel": 1.92,
            "LPG": 0.83
        }
    },
    {
        "id": 304,
        "name": "Jozita",
        "logo": "🟡",
        "city": "Klaipėda",
        "address": "Trepkalnių k., Mokyklos g. 2",
        "lat": 55.7127529,
        "lng": 21.1350469,
        "prices": {
            "A95": 1.79,
            "A98": null,
            "Diesel": 1.92,
            "LPG": 0.83
        }
    },
    {
        "id": 305,
        "name": "Jozita",
        "logo": "🟡",
        "city": "Plungės",
        "address": "Varkaliai, Žemaičių g. 2A",
        "lat": 55.953916,
        "lng": 21.8335407,
        "prices": {
            "A95": 1.79,
            "A98": null,
            "Diesel": 1.92,
            "LPG": 0.83
        }
    },
    {
        "id": 306,
        "name": "Jozita",
        "logo": "🟡",
        "city": "Vilnius",
        "address": "Vilnius, Parko g. 64",
        "lat": 54.6870458,
        "lng": 25.2829111,
        "prices": {
            "A95": 1.79,
            "A98": null,
            "Diesel": 1.92,
            "LPG": 0.83
        }
    },
    {
        "id": 307,
        "name": "Jozita",
        "logo": "🟡",
        "city": "Vilnius",
        "address": "Vilnius, Pramonės g. 18",
        "lat": 54.6870458,
        "lng": 25.2829111,
        "prices": {
            "A95": 1.79,
            "A98": null,
            "Diesel": 1.92,
            "LPG": 0.83
        }
    },
    {
        "id": 308,
        "name": "Jozita",
        "logo": "🟡",
        "city": "Vilnius",
        "address": "Vilnius, Ukmergės g. 130",
        "lat": 54.7024407,
        "lng": 25.2594241,
        "prices": {
            "A95": 1.79,
            "A98": null,
            "Diesel": 1.92,
            "LPG": 0.83
        }
    },
    {
        "id": 309,
        "name": "Jozita",
        "logo": "🟡",
        "city": "Šiaulių",
        "address": "Šiauliai, Architektų g. 80",
        "lat": 55.9398236,
        "lng": 23.3937822,
        "prices": {
            "A95": 1.79,
            "A98": null,
            "Diesel": 1.92,
            "LPG": 0.83
        }
    },
    {
        "id": 310,
        "name": "Jozita",
        "logo": "🟡",
        "city": "Šiaulių",
        "address": "Šiauliai, Girulių g. 1",
        "lat": 55.9398236,
        "lng": 23.3937822,
        "prices": {
            "A95": 1.79,
            "A98": null,
            "Diesel": 1.92,
            "LPG": 0.83
        }
    },
    {
        "id": 311,
        "name": "Jozita",
        "logo": "🟡",
        "city": "Šilalės",
        "address": "Šolių k., Pietinio Kelio g. 9",
        "lat": 55.5252224,
        "lng": 22.2160078,
        "prices": {
            "A95": 1.79,
            "A98": null,
            "Diesel": 1.92,
            "LPG": 0.83
        }
    },
    {
        "id": 312,
        "name": "Jozita",
        "logo": "🟡",
        "city": "Vilnius",
        "address": "Rudamina, Jašiūnų g. 2",
        "lat": 54.6870458,
        "lng": 25.2829111,
        "prices": {
            "A95": 1.79,
            "A98": null,
            "Diesel": 1.92,
            "LPG": 0.83
        }
    },
    {
        "id": 313,
        "name": "Junasa",
        "logo": "⛽",
        "city": "Šiaulių",
        "address": "Bačiūnų g. 12a",
        "lat": 55.8979296,
        "lng": 23.3517196,
        "prices": {
            "A95": 1.75,
            "A98": null,
            "Diesel": 1.9,
            "LPG": 0.84
        }
    },
    {
        "id": 314,
        "name": "Junasa",
        "logo": "⛽",
        "city": "Šiaulių",
        "address": "Žemaitės g. 131c",
        "lat": 55.9481053,
        "lng": 23.3204268,
        "prices": {
            "A95": 1.75,
            "A98": null,
            "Diesel": 1.9,
            "LPG": 0.84
        }
    },
    {
        "id": 315,
        "name": "Junasa",
        "logo": "⛽",
        "city": "Šiaulių",
        "address": "M. Katiliškio g. 50, Gruzdžiai",
        "lat": 56.0992272,
        "lng": 23.2658189,
        "prices": {
            "A95": 1.75,
            "A98": null,
            "Diesel": 1.9,
            "LPG": 0.84
        }
    },
    {
        "id": 316,
        "name": "Kenaoil",
        "logo": "⛽",
        "city": "Vilnius",
        "address": "Miško g.6, Kena",
        "lat": 54.6460569,
        "lng": 25.6251383,
        "prices": {
            "A95": 1.91,
            "A98": null,
            "Diesel": 2.02,
            "LPG": 0.96
        }
    },
    {
        "id": 317,
        "name": "Kriketas",
        "logo": "⛽",
        "city": "Trakų",
        "address": "Senkelio g. 13, Trakai",
        "lat": 54.6308624,
        "lng": 24.9225879,
        "prices": {
            "A95": 1.95,
            "A98": null,
            "Diesel": 2.06,
            "LPG": 0.96
        }
    },
    {
        "id": 318,
        "name": "Leosta",
        "logo": "⛽",
        "city": "Telšių",
        "address": "Telšių g. 66, LT-88238, Luokė",
        "lat": 55.9013437,
        "lng": 22.5062918,
        "prices": {
            "A95": 1.92,
            "A98": null,
            "Diesel": 2.08,
            "LPG": 0.92
        }
    },
    {
        "id": 319,
        "name": "M.Augustinaičio IĮ",
        "logo": "⛽",
        "city": "Kėdainių",
        "address": "Kėdainių g. 44 Šingalių k.",
        "lat": 55.339637,
        "lng": 24.0118376,
        "prices": {
            "A95": 1.9,
            "A98": null,
            "Diesel": 1.99,
            "LPG": 0.93
        }
    },
    {
        "id": 320,
        "name": "Madalva",
        "logo": "⛽",
        "city": "Tauragės",
        "address": "Žygaičių k., Žygaičių g.2",
        "lat": 55.3564378,
        "lng": 22.405222,
        "prices": {
            "A95": 1.75,
            "A98": null,
            "Diesel": 1.91,
            "LPG": 0.79
        }
    },
    {
        "id": 321,
        "name": "Medelsta",
        "logo": "⛽",
        "city": "Vilnius",
        "address": "Pagirių k., Durpių g.45",
        "lat": 54.6870458,
        "lng": 25.2829111,
        "prices": {
            "A95": 1.84,
            "A98": null,
            "Diesel": 1.97,
            "LPG": 0.93
        }
    },
    {
        "id": 322,
        "name": "Melkasta",
        "logo": "⛽",
        "city": "Lazdijų",
        "address": "Seirijų mstl., Algirdo g. 35A",
        "lat": 54.1607523,
        "lng": 23.6775875,
        "prices": {
            "A95": 1.75,
            "A98": null,
            "Diesel": 1.95,
            "LPG": 0.9
        }
    },
    {
        "id": 323,
        "name": "Melkasta",
        "logo": "⛽",
        "city": "Lazdijų",
        "address": "Kalvelių k., Lazdijų pl. 29",
        "lat": 54.1607523,
        "lng": 23.6775875,
        "prices": {
            "A95": 1.75,
            "A98": null,
            "Diesel": 1.95,
            "LPG": 0.9
        }
    },
    {
        "id": 324,
        "name": "Melkasta",
        "logo": "⛽",
        "city": "Vilkaviškio",
        "address": "Gulbiniškių k. 7",
        "lat": 54.5770716,
        "lng": 22.9419043,
        "prices": {
            "A95": 1.76,
            "A98": null,
            "Diesel": 1.95,
            "LPG": 0.91
        }
    },
    {
        "id": 325,
        "name": "Naftrus",
        "logo": "⛽",
        "city": "Raseinių",
        "address": "Pievų g. 17, Slabados k.",
        "lat": 55.3764559,
        "lng": 23.1988999,
        "prices": {
            "A95": 1.81,
            "A98": null,
            "Diesel": 1.94,
            "LPG": 0.85
        }
    },
    {
        "id": 326,
        "name": "Naftrus",
        "logo": "⛽",
        "city": "Pakruojo",
        "address": "Topolių g. 1, Degučių k.",
        "lat": 56.0731045,
        "lng": 23.8319151,
        "prices": {
            "A95": 1.75,
            "A98": null,
            "Diesel": 1.9,
            "LPG": 0.86
        }
    },
    {
        "id": 327,
        "name": "Naftrus",
        "logo": "⛽",
        "city": "Raseinių",
        "address": "Vilniaus g. 3B, Raseiniai",
        "lat": 55.3703149,
        "lng": 23.1321196,
        "prices": {
            "A95": 1.72,
            "A98": null,
            "Diesel": 1.95,
            "LPG": 0.86
        }
    },
    {
        "id": 328,
        "name": "Naftrus",
        "logo": "⛽",
        "city": "Raseinių",
        "address": "Šilo g. 1, Ylių k.",
        "lat": 55.3764559,
        "lng": 23.1988999,
        "prices": {
            "A95": 1.75,
            "A98": null,
            "Diesel": 1.95,
            "LPG": 0.9
        }
    },
    {
        "id": 329,
        "name": "Narjanta",
        "logo": "⛽",
        "city": "Anykščių",
        "address": "Vilniaus g. 32, Troškūnai",
        "lat": 55.5848527,
        "lng": 24.8784603,
        "prices": {
            "A95": 1.83,
            "A98": null,
            "Diesel": 2.0,
            "LPG": 0.9
        }
    },
    {
        "id": 330,
        "name": "Narjanta",
        "logo": "⛽",
        "city": "Kupiškio",
        "address": "Dvariškių vs. 2",
        "lat": 55.7705222,
        "lng": 24.7550445,
        "prices": {
            "A95": 1.83,
            "A98": null,
            "Diesel": 2.0,
            "LPG": 0.9
        }
    },
    {
        "id": 331,
        "name": "Narjanta",
        "logo": "⛽",
        "city": "Kupiškio",
        "address": "Kikonių g. 10, Aleksandrijos k.",
        "lat": 55.8667202,
        "lng": 25.0307101,
        "prices": {
            "A95": 1.83,
            "A98": null,
            "Diesel": 2.0,
            "LPG": 0.97
        }
    },
    {
        "id": 332,
        "name": "Narjanta",
        "logo": "⛽",
        "city": "Anykščių",
        "address": "Pumpučių g. 25, Pumpučiai",
        "lat": 55.4243113,
        "lng": 24.9204947,
        "prices": {
            "A95": 1.83,
            "A98": null,
            "Diesel": 2.02,
            "LPG": 0.95
        }
    },
    {
        "id": 333,
        "name": "Narjanta",
        "logo": "⛽",
        "city": "Biržų",
        "address": "S. Nėries g. 35, Vabalninkas",
        "lat": 55.9749782,
        "lng": 24.7401225,
        "prices": {
            "A95": 1.81,
            "A98": null,
            "Diesel": 2.0,
            "LPG": 0.89
        }
    },
    {
        "id": 334,
        "name": "Narjanta",
        "logo": "⛽",
        "city": "Anykščių",
        "address": "Sausalaukės k. 2",
        "lat": 55.5349516,
        "lng": 25.0424158,
        "prices": {
            "A95": 1.82,
            "A98": null,
            "Diesel": 1.96,
            "LPG": 0.9
        }
    },
    {
        "id": 335,
        "name": "Orlen",
        "logo": "⛽",
        "city": "Klaipėda",
        "address": "Šilutės pl. 26 A, Klaipėda",
        "lat": 55.6985726,
        "lng": 21.1673283,
        "prices": {
            "A95": 1.73,
            "A98": null,
            "Diesel": 1.86,
            "LPG": 0.82
        }
    },
    {
        "id": 336,
        "name": "Orlen",
        "logo": "⛽",
        "city": "Kaunas",
        "address": "Pramonės pr. 37, Kaunas",
        "lat": 54.9158016,
        "lng": 23.9842046,
        "prices": {
            "A95": 1.73,
            "A98": null,
            "Diesel": 1.88,
            "LPG": 0.88
        }
    },
    {
        "id": 337,
        "name": "Orlen",
        "logo": "⛽",
        "city": "Panevėžio",
        "address": "Šiaulių g. 50, Nausodės k.",
        "lat": 55.9155086,
        "lng": 25.0309026,
        "prices": {
            "A95": 1.7,
            "A98": null,
            "Diesel": 1.86,
            "LPG": 0.88
        }
    },
    {
        "id": 338,
        "name": "Orlen",
        "logo": "⛽",
        "city": "Klaipėda",
        "address": "Vilniaus pl. 13, Jakų k.",
        "lat": 55.7127529,
        "lng": 21.1350469,
        "prices": {
            "A95": 1.85,
            "A98": null,
            "Diesel": 1.96,
            "LPG": 0.89
        }
    },
    {
        "id": 339,
        "name": "Orlen",
        "logo": "⛽",
        "city": "Kretingos",
        "address": "Vilimiškės k.",
        "lat": 55.9686093,
        "lng": 21.3604059,
        "prices": {
            "A95": 1.84,
            "A98": null,
            "Diesel": 1.95,
            "LPG": 0.9
        }
    },
    {
        "id": 340,
        "name": "Orlen",
        "logo": "⛽",
        "city": "Kaunas",
        "address": "Veiverių g. 148 B, Kaunas",
        "lat": 54.8673208,
        "lng": 23.8872771,
        "prices": {
            "A95": 1.73,
            "A98": null,
            "Diesel": 1.88,
            "LPG": 0.84
        }
    },
    {
        "id": 341,
        "name": "Orlen",
        "logo": "⛽",
        "city": "Kaunas",
        "address": "Varnių g. 50, Kaunas",
        "lat": 54.9138013,
        "lng": 23.9068499,
        "prices": {
            "A95": 1.73,
            "A98": null,
            "Diesel": 1.88,
            "LPG": 0.87
        }
    },
    {
        "id": 342,
        "name": "Orlen",
        "logo": "⛽",
        "city": "Mažeikių",
        "address": "Skuodo g. 14, Mažeikiai",
        "lat": 56.3144551,
        "lng": 22.3109727,
        "prices": {
            "A95": 1.7,
            "A98": null,
            "Diesel": 1.88,
            "LPG": 0.83
        }
    },
    {
        "id": 343,
        "name": "Orlen",
        "logo": "⛽",
        "city": "Klaipėda",
        "address": "Šilutės pl. 94, Klaipėda",
        "lat": 55.6681613,
        "lng": 21.2086486,
        "prices": {
            "A95": 1.7,
            "A98": null,
            "Diesel": 1.88,
            "LPG": 0.84
        }
    },
    {
        "id": 344,
        "name": "Orlen",
        "logo": "⛽",
        "city": "Mažeikių",
        "address": "Žemaitijos g. 42, Mažeikiai",
        "lat": 56.3020425,
        "lng": 22.3424737,
        "prices": {
            "A95": 1.73,
            "A98": null,
            "Diesel": 1.88,
            "LPG": 0.85
        }
    },
    {
        "id": 345,
        "name": "Orlen",
        "logo": "⛽",
        "city": "Kaišiadorių",
        "address": "Žiežmarių k.",
        "lat": 54.8145899,
        "lng": 24.4618241,
        "prices": {
            "A95": 1.86,
            "A98": null,
            "Diesel": 1.98,
            "LPG": 0.88
        }
    },
    {
        "id": 346,
        "name": "Orlen",
        "logo": "⛽",
        "city": "Vilnius",
        "address": "Žirmūnų g. 1T, Vilnius",
        "lat": 54.6960068,
        "lng": 25.3001004,
        "prices": {
            "A95": 1.76,
            "A98": null,
            "Diesel": 1.92,
            "LPG": 0.89
        }
    },
    {
        "id": 347,
        "name": "Orlen",
        "logo": "⛽",
        "city": "Telšių",
        "address": "Plungės g. 33 D, Telšiai",
        "lat": 55.9792186,
        "lng": 22.2266776,
        "prices": {
            "A95": 1.73,
            "A98": null,
            "Diesel": 1.88,
            "LPG": 0.88
        }
    },
    {
        "id": 348,
        "name": "Orlen",
        "logo": "⛽",
        "city": "Šiaulių",
        "address": "Serbentų g. 82, Šiauliai",
        "lat": 55.9139254,
        "lng": 23.3369683,
        "prices": {
            "A95": 1.73,
            "A98": null,
            "Diesel": 1.88,
            "LPG": 0.86
        }
    },
    {
        "id": 349,
        "name": "Orlen",
        "logo": "⛽",
        "city": "Vilnius",
        "address": "Ukmergės g. 319, Vilnius",
        "lat": 54.7369256,
        "lng": 25.2321131,
        "prices": {
            "A95": 1.76,
            "A98": null,
            "Diesel": 1.92,
            "LPG": 0.89
        }
    },
    {
        "id": 350,
        "name": "Orlen",
        "logo": "⛽",
        "city": "Elektrėnų",
        "address": "Žilvičių g. 1 A, Kakliniškių k.",
        "lat": 54.763291,
        "lng": 24.7695541,
        "prices": {
            "A95": 1.86,
            "A98": null,
            "Diesel": 1.98,
            "LPG": 0.88
        }
    },
    {
        "id": 351,
        "name": "Orlen",
        "logo": "⛽",
        "city": "Vilnius",
        "address": "O. Milašiaus g. 31, Vilnius",
        "lat": 54.7280491,
        "lng": 25.3270109,
        "prices": {
            "A95": 1.7,
            "A98": null,
            "Diesel": 1.86,
            "LPG": 0.9
        }
    },
    {
        "id": 352,
        "name": "Orlen",
        "logo": "⛽",
        "city": "Panevėžio",
        "address": "Klaipėdos g. 162 D, Panevėžys",
        "lat": 55.7317398,
        "lng": 24.303173,
        "prices": {
            "A95": 1.73,
            "A98": null,
            "Diesel": 1.88,
            "LPG": 0.87
        }
    },
    {
        "id": 353,
        "name": "Orlen",
        "logo": "⛽",
        "city": "Alytaus",
        "address": "Kauno g. 73, Alytus",
        "lat": 54.4033241,
        "lng": 24.0370877,
        "prices": {
            "A95": 1.73,
            "A98": null,
            "Diesel": 1.88,
            "LPG": 0.83
        }
    },
    {
        "id": 354,
        "name": "Orlen",
        "logo": "⛽",
        "city": "Kaunas",
        "address": "Kalvarijos g. 138, Kaunas",
        "lat": 54.8653731,
        "lng": 23.8727714,
        "prices": {
            "A95": 1.7,
            "A98": null,
            "Diesel": 1.86,
            "LPG": 0.88
        }
    },
    {
        "id": 355,
        "name": "Orlen",
        "logo": "⛽",
        "city": "Vilnius",
        "address": "Juodasis kl. 32, Vilnius",
        "lat": 54.6598413,
        "lng": 25.3599938,
        "prices": {
            "A95": 1.73,
            "A98": null,
            "Diesel": 1.86,
            "LPG": 0.9
        }
    },
    {
        "id": 356,
        "name": "Orlen",
        "logo": "⛽",
        "city": "Tauragės",
        "address": "Gedimino g. 46, Tauragė",
        "lat": 55.2442701,
        "lng": 22.3038396,
        "prices": {
            "A95": 1.73,
            "A98": null,
            "Diesel": 1.88,
            "LPG": 0.88
        }
    },
    {
        "id": 357,
        "name": "Orlen",
        "logo": "⛽",
        "city": "Raseinių",
        "address": "Pikelių k. 6",
        "lat": 55.3764559,
        "lng": 23.1988999,
        "prices": {
            "A95": 1.93,
            "A98": null,
            "Diesel": 2.06,
            "LPG": 0.92
        }
    },
    {
        "id": 358,
        "name": "Orlen",
        "logo": "⛽",
        "city": "Kaunas",
        "address": "Biruliškių k.",
        "lat": 54.9243192,
        "lng": 24.0113084,
        "prices": {
            "A95": 1.7,
            "A98": null,
            "Diesel": 1.86,
            "LPG": 0.8
        }
    },
    {
        "id": 359,
        "name": "Orlen",
        "logo": "⛽",
        "city": "Klaipėda",
        "address": "Minijos g. 44, Klaipėda",
        "lat": 55.6938676,
        "lng": 21.1402705,
        "prices": {
            "A95": 1.7,
            "A98": null,
            "Diesel": 1.86,
            "LPG": 0.88
        }
    },
    {
        "id": 360,
        "name": "Orlen",
        "logo": "⛽",
        "city": "Kaunas",
        "address": "Beržų g. 2N, Ringaudai",
        "lat": 54.8888853,
        "lng": 23.8178211,
        "prices": {
            "A95": 1.8,
            "A98": null,
            "Diesel": 1.94,
            "LPG": 0.9
        }
    },
    {
        "id": 361,
        "name": "Orlen",
        "logo": "⛽",
        "city": "Prienų",
        "address": "Alytaus g. 2, Verbyliškių k.",
        "lat": 54.6334424,
        "lng": 24.2204708,
        "prices": {
            "A95": 1.84,
            "A98": null,
            "Diesel": 1.97,
            "LPG": 0.88
        }
    },
    {
        "id": 362,
        "name": "Orlen",
        "logo": "⛽",
        "city": "Raseinių",
        "address": "Pikelių k. 8",
        "lat": 55.3764559,
        "lng": 23.1988999,
        "prices": {
            "A95": 1.93,
            "A98": null,
            "Diesel": 2.06,
            "LPG": 0.92
        }
    },
    {
        "id": 363,
        "name": "Orlen",
        "logo": "⛽",
        "city": "Marijampolės",
        "address": "Aleksandravo k.",
        "lat": 54.419463,
        "lng": 23.0387666,
        "prices": {
            "A95": 1.7,
            "A98": null,
            "Diesel": 1.86,
            "LPG": 0.8
        }
    },
    {
        "id": 364,
        "name": "Orlen",
        "logo": "⛽",
        "city": "Panevėžio",
        "address": "Senamiesčio g. 115, Panevėžys",
        "lat": 55.7481994,
        "lng": 24.3908149,
        "prices": {
            "A95": 1.7,
            "A98": null,
            "Diesel": 1.86,
            "LPG": 0.83
        }
    },
    {
        "id": 365,
        "name": "Pakelės namai",
        "logo": "⛽",
        "city": "Pasvalio",
        "address": "Pasienio g. 10, Škilinpamūšio k.",
        "lat": 56.0706909,
        "lng": 24.3842838,
        "prices": {
            "A95": 1.79,
            "A98": null,
            "Diesel": 2.09,
            "LPG": 0.95
        }
    },
    {
        "id": 366,
        "name": "Pakelės namai",
        "logo": "⛽",
        "city": "Pasvalio",
        "address": "Liepų g. 4, Škilinpamūšio k.",
        "lat": 56.0706909,
        "lng": 24.3842838,
        "prices": {
            "A95": 1.79,
            "A98": null,
            "Diesel": 2.09,
            "LPG": 0.95
        }
    },
    {
        "id": 367,
        "name": "Plungės lagūna (Circle K)",
        "logo": "🔴",
        "city": "Rietavo",
        "address": "Plungės g. 32, Rietavas",
        "lat": 55.7350721,
        "lng": 21.9240545,
        "prices": {
            "A95": 1.87,
            "A98": null,
            "Diesel": 2.0,
            "LPG": 0.97
        }
    },
    {
        "id": 368,
        "name": "Prie Luksto",
        "logo": "⛽",
        "city": "Telšių",
        "address": "Telšiai, Masčio g. 21",
        "lat": 56.0130975,
        "lng": 22.1366723,
        "prices": {
            "A95": 1.93,
            "A98": null,
            "Diesel": 2.05,
            "LPG": 0.93
        }
    },
    {
        "id": 369,
        "name": "Propano ir butano dujų centras",
        "logo": "⛽",
        "city": "Švenčionių",
        "address": "Aukštaičių g. 2a, Cirkliškio k.",
        "lat": 55.0697365,
        "lng": 25.9983183,
        "prices": {
            "A95": 1.76,
            "A98": null,
            "Diesel": 1.92,
            "LPG": 0.85
        }
    },
    {
        "id": 370,
        "name": "Propano ir butano dujų centras",
        "logo": "⛽",
        "city": "Ignalinos",
        "address": "Švenčionių 35, Ignalina",
        "lat": 55.3271809,
        "lng": 26.1744803,
        "prices": {
            "A95": 1.76,
            "A98": null,
            "Diesel": 1.92,
            "LPG": 0.83
        }
    },
    {
        "id": 371,
        "name": "Pynauja",
        "logo": "⛽",
        "city": "Šilalės",
        "address": "Dvaro g.1, Papynaujo k.,Kvėdarna",
        "lat": 55.5252224,
        "lng": 22.2160078,
        "prices": {
            "A95": 1.77,
            "A98": null,
            "Diesel": 1.95,
            "LPG": 0.94
        }
    },
    {
        "id": 372,
        "name": "Raimondo Balsio IĮ",
        "logo": "⛽",
        "city": "Kelmės",
        "address": "Ramučių k., Luokės 2",
        "lat": 55.6865165,
        "lng": 22.8611849,
        "prices": {
            "A95": 1.8,
            "A98": null,
            "Diesel": 1.99,
            "LPG": 0.92
        }
    },
    {
        "id": 373,
        "name": "Regusa",
        "logo": "⛽",
        "city": "Marijampolės",
        "address": "Sodo g. 11, Gavaltuvos k.",
        "lat": 54.6792304,
        "lng": 23.2004406,
        "prices": {
            "A95": 1.79,
            "A98": null,
            "Diesel": 1.97,
            "LPG": 0.89
        }
    },
    {
        "id": 374,
        "name": "Regusa",
        "logo": "⛽",
        "city": "Vilkaviškio",
        "address": "J. Basanavičiaus g. 45A, Kybartai",
        "lat": 54.6387352,
        "lng": 22.7632799,
        "prices": {
            "A95": 1.81,
            "A98": null,
            "Diesel": 1.99,
            "LPG": 0.89
        }
    },
    {
        "id": 375,
        "name": "Regusa",
        "logo": "⛽",
        "city": "Kaunas",
        "address": "Marijampolės pl. 20, Kaunas",
        "lat": 54.8502039,
        "lng": 23.9657416,
        "prices": {
            "A95": 1.73,
            "A98": null,
            "Diesel": 1.92,
            "LPG": 0.86
        }
    },
    {
        "id": 376,
        "name": "Regusa",
        "logo": "⛽",
        "city": "Kazlų Rūdos",
        "address": "S. Daukanto g. 19D, Kazlų Rūda",
        "lat": 54.7392942,
        "lng": 23.4962233,
        "prices": {
            "A95": 1.79,
            "A98": null,
            "Diesel": 1.97,
            "LPG": 0.89
        }
    },
    {
        "id": 377,
        "name": "Regusa",
        "logo": "⛽",
        "city": "Kazlų Rūdos",
        "address": "Medelyno g. 4A, Jūrės k.",
        "lat": 54.7901401,
        "lng": 23.448325,
        "prices": {
            "A95": 1.79,
            "A98": null,
            "Diesel": 1.97,
            "LPG": 0.89
        }
    },
    {
        "id": 378,
        "name": "S.Rimkevičiaus komercinė įmonė",
        "logo": "⛽",
        "city": "Joniškio",
        "address": "Miškininkų g. 14, Pelėdnagiai",
        "lat": 56.2246299,
        "lng": 23.4865961,
        "prices": {
            "A95": 1.89,
            "A98": null,
            "Diesel": 1.97,
            "LPG": 0.9
        }
    },
    {
        "id": 379,
        "name": "S.Rimkevičiaus komercinė įmonė",
        "logo": "⛽",
        "city": "Joniškio",
        "address": "Turgaus g. 3, Joniškis",
        "lat": 56.2289344,
        "lng": 23.6100885,
        "prices": {
            "A95": 1.79,
            "A98": null,
            "Diesel": 1.98,
            "LPG": 0.88
        }
    },
    {
        "id": 380,
        "name": "S.Savicko įmonė",
        "logo": "⛽",
        "city": "Kėdainių",
        "address": "Vandžiogalos g 29,Saviečių k.",
        "lat": 55.339637,
        "lng": 24.0118376,
        "prices": {
            "A95": 1.86,
            "A98": null,
            "Diesel": 1.96,
            "LPG": 0.91
        }
    },
    {
        "id": 381,
        "name": "S.Savicko įmonė",
        "logo": "⛽",
        "city": "Kėdainių",
        "address": "Gedimino g. 50 , Kėdainiai",
        "lat": 55.2914813,
        "lng": 23.96054,
        "prices": {
            "A95": 1.86,
            "A98": null,
            "Diesel": 1.96,
            "LPG": 0.91
        }
    },
    {
        "id": 382,
        "name": "S.Savicko įmonė",
        "logo": "⛽",
        "city": "Kėdainių",
        "address": "Dariaus ir Girėno 23 A, Kėdainiai",
        "lat": 55.3127081,
        "lng": 23.9781131,
        "prices": {
            "A95": 1.86,
            "A98": null,
            "Diesel": 1.96,
            "LPG": 0.91
        }
    },
    {
        "id": 383,
        "name": "S.Savicko įmonė (Circle K)",
        "logo": "🔴",
        "city": "Kėdainių",
        "address": "J.Basanavičiaus g. 103, Kėdainiai",
        "lat": 55.2742329,
        "lng": 23.9449674,
        "prices": {
            "A95": 1.89,
            "A98": null,
            "Diesel": 1.99,
            "LPG": 0.94
        }
    },
    {
        "id": 384,
        "name": "Saurida",
        "logo": "⛽",
        "city": "Šiaulių",
        "address": "Šiauliai Pramonės g. 7C",
        "lat": 55.9398236,
        "lng": 23.3937822,
        "prices": {
            "A95": 1.77,
            "A98": null,
            "Diesel": 1.94,
            "LPG": 0.86
        }
    },
    {
        "id": 385,
        "name": "Saurida",
        "logo": "⛽",
        "city": "Vilnius",
        "address": "Zujūnai Buivydiškių g. 1A",
        "lat": 54.6870458,
        "lng": 25.2829111,
        "prices": {
            "A95": 1.77,
            "A98": null,
            "Diesel": 1.92,
            "LPG": 0.85
        }
    },
    {
        "id": 386,
        "name": "Saurida",
        "logo": "⛽",
        "city": "Visagino",
        "address": "Visaginas Kosmoso g. 1",
        "lat": 55.5853627,
        "lng": 26.4823701,
        "prices": {
            "A95": 1.77,
            "A98": null,
            "Diesel": 1.94,
            "LPG": 0.86
        }
    },
    {
        "id": 387,
        "name": "Saurida",
        "logo": "⛽",
        "city": "Šiaulių",
        "address": "Šiauliai Vilniaus g. 373A",
        "lat": 55.9427909,
        "lng": 23.2813753,
        "prices": {
            "A95": 1.77,
            "A98": null,
            "Diesel": 1.94,
            "LPG": 0.86
        }
    },
    {
        "id": 388,
        "name": "Saurida",
        "logo": "⛽",
        "city": "Šilalės",
        "address": "Šilalė Rytinio kelio g. 19",
        "lat": 55.5252224,
        "lng": 22.2160078,
        "prices": {
            "A95": 1.77,
            "A98": null,
            "Diesel": 1.9,
            "LPG": 0.85
        }
    },
    {
        "id": 389,
        "name": "Saurida",
        "logo": "⛽",
        "city": "Vilnius",
        "address": "Vilnius, Jankiškių g. 43a",
        "lat": 54.6870458,
        "lng": 25.2829111,
        "prices": {
            "A95": 1.77,
            "A98": null,
            "Diesel": 1.92,
            "LPG": 0.86
        }
    },
    {
        "id": 390,
        "name": "Saurida",
        "logo": "⛽",
        "city": "Akmenės",
        "address": "Akmenės I kaimas Plento g. 1",
        "lat": 56.2415748,
        "lng": 22.8625876,
        "prices": {
            "A95": 1.77,
            "A98": null,
            "Diesel": 1.92,
            "LPG": 0.86
        }
    },
    {
        "id": 391,
        "name": "Saurida",
        "logo": "⛽",
        "city": "Radviliškio",
        "address": "Velžių km .Radviliškio plentas 2",
        "lat": 55.6934168,
        "lng": 23.6501225,
        "prices": {
            "A95": 1.77,
            "A98": null,
            "Diesel": 1.95,
            "LPG": 0.86
        }
    },
    {
        "id": 392,
        "name": "Saurida",
        "logo": "⛽",
        "city": "Ukmergės",
        "address": "Ukmergė Vilniaus g. 122",
        "lat": 55.2477293,
        "lng": 24.7599714,
        "prices": {
            "A95": 1.77,
            "A98": null,
            "Diesel": 1.94,
            "LPG": 0.86
        }
    },
    {
        "id": 393,
        "name": "Saurida",
        "logo": "⛽",
        "city": "Ukmergės",
        "address": "Ukmergė Kareivinių g. 64",
        "lat": 55.301698,
        "lng": 24.7372908,
        "prices": {
            "A95": 1.77,
            "A98": null,
            "Diesel": 1.94,
            "LPG": 0.86
        }
    },
    {
        "id": 394,
        "name": "Saurida",
        "logo": "⛽",
        "city": "Skuodo",
        "address": "Skuodas Vytauto g. 20",
        "lat": 56.2274045,
        "lng": 21.6899322,
        "prices": {
            "A95": 1.77,
            "A98": null,
            "Diesel": 1.9,
            "LPG": 0.86
        }
    },
    {
        "id": 395,
        "name": "Saurida",
        "logo": "⛽",
        "city": "Radviliškio",
        "address": "Radviliškis Gedimino g. 50C",
        "lat": 55.6934168,
        "lng": 23.6501225,
        "prices": {
            "A95": 1.77,
            "A98": null,
            "Diesel": 1.9,
            "LPG": 0.86
        }
    },
    {
        "id": 396,
        "name": "Saurida",
        "logo": "⛽",
        "city": "Alytaus",
        "address": "Alytus Pramonės g. 5",
        "lat": 55.7319393,
        "lng": 21.1423197,
        "prices": {
            "A95": 1.77,
            "A98": null,
            "Diesel": 1.94,
            "LPG": 0.86
        }
    },
    {
        "id": 397,
        "name": "Saurida",
        "logo": "⛽",
        "city": "Kaunas",
        "address": "Babtai Vandžiogalos g. 3",
        "lat": 54.8982139,
        "lng": 23.9044817,
        "prices": {
            "A95": 1.77,
            "A98": null,
            "Diesel": 1.91,
            "LPG": 0.86
        }
    },
    {
        "id": 398,
        "name": "Saurida",
        "logo": "⛽",
        "city": "Kaunas",
        "address": "Domeikava Muitinės g. 2",
        "lat": 54.8982139,
        "lng": 23.9044817,
        "prices": {
            "A95": 1.77,
            "A98": null,
            "Diesel": 1.92,
            "LPG": 0.86
        }
    },
    {
        "id": 399,
        "name": "Saurida",
        "logo": "⛽",
        "city": "Prienų",
        "address": "Ignacavos km. Kauno pl. 18",
        "lat": 54.6334424,
        "lng": 24.2204708,
        "prices": {
            "A95": 1.77,
            "A98": null,
            "Diesel": 1.94,
            "LPG": 0.86
        }
    },
    {
        "id": 400,
        "name": "Saurida",
        "logo": "⛽",
        "city": "Kaunas",
        "address": "Kaunas Garažų g. 20",
        "lat": 54.8982139,
        "lng": 23.9044817,
        "prices": {
            "A95": 1.77,
            "A98": null,
            "Diesel": 1.9,
            "LPG": 0.86
        }
    },
    {
        "id": 401,
        "name": "Saurida",
        "logo": "⛽",
        "city": "Klaipėda",
        "address": "Klaipėda Jūrininkų pr. 29",
        "lat": 55.7127529,
        "lng": 21.1350469,
        "prices": {
            "A95": 1.75,
            "A98": null,
            "Diesel": 1.93,
            "LPG": 0.82
        }
    },
    {
        "id": 402,
        "name": "Saurida",
        "logo": "⛽",
        "city": "Kalvarijos",
        "address": "Kušliškių km. Suvalkijos g. 15",
        "lat": 54.7397108,
        "lng": 25.2804959,
        "prices": {
            "A95": 1.77,
            "A98": null,
            "Diesel": 1.95,
            "LPG": 0.86
        }
    },
    {
        "id": 403,
        "name": "Saurida",
        "logo": "⛽",
        "city": "Šakių",
        "address": "Lėkėčių km. Šakių g. 3",
        "lat": 54.9148731,
        "lng": 23.078048,
        "prices": {
            "A95": 1.77,
            "A98": null,
            "Diesel": 1.9,
            "LPG": 0.86
        }
    },
    {
        "id": 404,
        "name": "Saurida",
        "logo": "⛽",
        "city": "Marijampolės",
        "address": "Marijampolė Statybininkų g. 8",
        "lat": 54.6792304,
        "lng": 23.2004406,
        "prices": {
            "A95": 1.77,
            "A98": null,
            "Diesel": 1.97,
            "LPG": 0.86
        }
    },
    {
        "id": 405,
        "name": "Saurida",
        "logo": "⛽",
        "city": "Akmenės",
        "address": "Naujoji Akmenė V. Kudirkos 18A",
        "lat": 56.2415748,
        "lng": 22.8625876,
        "prices": {
            "A95": 1.77,
            "A98": null,
            "Diesel": 1.92,
            "LPG": 0.86
        }
    },
    {
        "id": 406,
        "name": "Saurida",
        "logo": "⛽",
        "city": "Ukmergės",
        "address": "Pageležių km.",
        "lat": 55.301698,
        "lng": 24.7372908,
        "prices": {
            "A95": 1.77,
            "A98": null,
            "Diesel": 1.88,
            "LPG": 0.82
        }
    },
    {
        "id": 407,
        "name": "Saurida",
        "logo": "⛽",
        "city": "Lazdijų",
        "address": "Panarvės km.",
        "lat": 54.2507018,
        "lng": 23.5468307,
        "prices": {
            "A95": 1.77,
            "A98": null,
            "Diesel": 1.92,
            "LPG": 0.86
        }
    },
    {
        "id": 408,
        "name": "Saurida",
        "logo": "⛽",
        "city": "Akmenės",
        "address": "Pašakarnių km. Pašakarnių g. 1",
        "lat": 56.2415748,
        "lng": 22.8625876,
        "prices": {
            "A95": 1.77,
            "A98": null,
            "Diesel": 1.92,
            "LPG": 0.86
        }
    },
    {
        "id": 409,
        "name": "Saurida",
        "logo": "⛽",
        "city": "Jurbarko",
        "address": "Pašvenčio km.",
        "lat": 55.0839161,
        "lng": 22.6069418,
        "prices": {
            "A95": 1.77,
            "A98": null,
            "Diesel": 1.89,
            "LPG": 0.86
        }
    },
    {
        "id": 410,
        "name": "Saurida",
        "logo": "⛽",
        "city": "Kaišiadorių",
        "address": "Rumšiškės Lekavičiaus g. 71",
        "lat": 54.8270857,
        "lng": 24.4264088,
        "prices": {
            "A95": 1.77,
            "A98": null,
            "Diesel": 1.94,
            "LPG": 0.86
        }
    },
    {
        "id": 411,
        "name": "Skulas",
        "logo": "⛽",
        "city": "Alytaus",
        "address": "Likiškėlių k., Kalninės g. 5",
        "lat": 55.7319393,
        "lng": 21.1423197,
        "prices": {
            "A95": 1.78,
            "A98": null,
            "Diesel": 1.95,
            "LPG": 0.88
        }
    },
    {
        "id": 412,
        "name": "Skulas",
        "logo": "⛽",
        "city": "Pasvalio",
        "address": "Pasvalys, Mūšos g. 2 E",
        "lat": 56.0706909,
        "lng": 24.3842838,
        "prices": {
            "A95": 1.71,
            "A98": null,
            "Diesel": 1.87,
            "LPG": 0.8
        }
    },
    {
        "id": 413,
        "name": "Skulas",
        "logo": "⛽",
        "city": "Kaunas",
        "address": "Kaunas, Ašigalio g. 1 A",
        "lat": 54.8982139,
        "lng": 23.9044817,
        "prices": {
            "A95": 1.8,
            "A98": null,
            "Diesel": 1.93,
            "LPG": 0.83
        }
    },
    {
        "id": 414,
        "name": "Skulas",
        "logo": "⛽",
        "city": "Alytaus",
        "address": "Simnas, Alytaus g. 48",
        "lat": 55.7319393,
        "lng": 21.1423197,
        "prices": {
            "A95": 1.79,
            "A98": null,
            "Diesel": 1.97,
            "LPG": 0.89
        }
    },
    {
        "id": 415,
        "name": "Skulas",
        "logo": "⛽",
        "city": "Vilnius",
        "address": "Vilnius, J.Kazlausko g. 34",
        "lat": 54.6870458,
        "lng": 25.2829111,
        "prices": {
            "A95": 1.78,
            "A98": null,
            "Diesel": 1.95,
            "LPG": 0.85
        }
    },
    {
        "id": 416,
        "name": "Skulas",
        "logo": "⛽",
        "city": "Kaunas",
        "address": "Virbališkių k., Verslo g. 2",
        "lat": 54.8982139,
        "lng": 23.9044817,
        "prices": {
            "A95": 1.8,
            "A98": null,
            "Diesel": 1.93,
            "LPG": 0.83
        }
    },
    {
        "id": 417,
        "name": "Stateta",
        "logo": "⛽",
        "city": "Kupiškio",
        "address": "Panevėžio g. 9, Kupiškis",
        "lat": 55.8260509,
        "lng": 24.9799373,
        "prices": {
            "A95": 1.75,
            "A98": null,
            "Diesel": 1.87,
            "LPG": 0.9
        }
    },
    {
        "id": 418,
        "name": "Stateta",
        "logo": "⛽",
        "city": "Kalvarijos",
        "address": "Turgaus g. 4, Kreivukė",
        "lat": 54.4108297,
        "lng": 23.2069152,
        "prices": {
            "A95": 1.75,
            "A98": null,
            "Diesel": 1.87,
            "LPG": 0.9
        }
    },
    {
        "id": 419,
        "name": "Stateta",
        "logo": "⛽",
        "city": "Panevėžio",
        "address": "Žemdirbių g. 15, Paliūniškio k.",
        "lat": 55.9155086,
        "lng": 25.0309026,
        "prices": {
            "A95": 1.75,
            "A98": null,
            "Diesel": 1.87,
            "LPG": 0.9
        }
    },
    {
        "id": 420,
        "name": "Stateta",
        "logo": "⛽",
        "city": "Vilnius",
        "address": "Ukmergės g. 246, Vilnius",
        "lat": 54.7231463,
        "lng": 25.2410592,
        "prices": {
            "A95": 1.75,
            "A98": null,
            "Diesel": 1.87,
            "LPG": 0.9
        }
    },
    {
        "id": 421,
        "name": "Stateta",
        "logo": "⛽",
        "city": "Alytaus",
        "address": "Alytaus k.",
        "lat": 54.4071385,
        "lng": 24.1017634,
        "prices": {
            "A95": 1.75,
            "A98": null,
            "Diesel": 1.87,
            "LPG": 0.9
        }
    },
    {
        "id": 422,
        "name": "Stateta",
        "logo": "⛽",
        "city": "Kaunas",
        "address": "Erdvės g. 78, Ramučių k.",
        "lat": 54.8982139,
        "lng": 23.9044817,
        "prices": {
            "A95": 1.75,
            "A98": null,
            "Diesel": 1.87,
            "LPG": 0.9
        }
    },
    {
        "id": 423,
        "name": "Stateta",
        "logo": "⛽",
        "city": "Prienų",
        "address": "Gustaičių k.",
        "lat": 54.6334424,
        "lng": 24.2204708,
        "prices": {
            "A95": 1.75,
            "A98": null,
            "Diesel": 1.87,
            "LPG": 0.9
        }
    },
    {
        "id": 424,
        "name": "Stateta",
        "logo": "⛽",
        "city": "Alytaus",
        "address": "Kaniukų k.",
        "lat": 54.4116685,
        "lng": 23.9314591,
        "prices": {
            "A95": 1.75,
            "A98": null,
            "Diesel": 1.87,
            "LPG": 0.9
        }
    },
    {
        "id": 425,
        "name": "Stateta",
        "logo": "⛽",
        "city": "Marijampolės",
        "address": "Kantališkių k.",
        "lat": 54.6792304,
        "lng": 23.2004406,
        "prices": {
            "A95": 1.75,
            "A98": null,
            "Diesel": 1.87,
            "LPG": 0.9
        }
    },
    {
        "id": 426,
        "name": "Stateta",
        "logo": "⛽",
        "city": "Alytaus",
        "address": "Kauno g.1, Miklusėnai",
        "lat": 54.428042,
        "lng": 24.0013991,
        "prices": {
            "A95": 1.75,
            "A98": null,
            "Diesel": 1.87,
            "LPG": 0.9
        }
    },
    {
        "id": 427,
        "name": "Stateta",
        "logo": "⛽",
        "city": "Klaipėda",
        "address": "Minijos g. 90, Klaipėda",
        "lat": 55.6883791,
        "lng": 21.1444616,
        "prices": {
            "A95": 1.75,
            "A98": null,
            "Diesel": 1.87,
            "LPG": 0.9
        }
    },
    {
        "id": 428,
        "name": "Stateta",
        "logo": "⛽",
        "city": "Utenos",
        "address": "Palangos g. 66, Utena",
        "lat": 55.4985476,
        "lng": 25.5839697,
        "prices": {
            "A95": 1.75,
            "A98": null,
            "Diesel": 1.87,
            "LPG": 0.9
        }
    },
    {
        "id": 429,
        "name": "Šventosios investicijos",
        "logo": "⛽",
        "city": "Palangos",
        "address": "Elijos g.26 Palanga (Šventoji)",
        "lat": 55.9725989,
        "lng": 21.0946759,
        "prices": {
            "A95": 1.92,
            "A98": null,
            "Diesel": 2.04,
            "LPG": 0.96
        }
    },
    {
        "id": 430,
        "name": "Tomega",
        "logo": "⛽",
        "city": "Druskininkų",
        "address": "Gardino g. 98, Druskininkai",
        "lat": 53.9901794,
        "lng": 24.0057031,
        "prices": {
            "A95": 1.85,
            "A98": null,
            "Diesel": 1.99,
            "LPG": 0.95
        }
    },
    {
        "id": 431,
        "name": "Trevena",
        "logo": "⛽",
        "city": "Klaipėda",
        "address": "Šv. Kristoforo g. 4, Dituvos k.",
        "lat": 55.7127529,
        "lng": 21.1350469,
        "prices": {
            "A95": 1.77,
            "A98": null,
            "Diesel": 1.95,
            "LPG": 0.93
        }
    },
    {
        "id": 432,
        "name": "Trevena",
        "logo": "⛽",
        "city": "Kretingos",
        "address": "Vilniaus g. 29B, Kretinga",
        "lat": 55.8969426,
        "lng": 21.2443258,
        "prices": {
            "A95": 1.88,
            "A98": null,
            "Diesel": 2.05,
            "LPG": 0.94
        }
    },
    {
        "id": 433,
        "name": "Trevena",
        "logo": "⛽",
        "city": "Klaipėda",
        "address": "Veiviržėnų g. 29, Pyktiškės k.",
        "lat": 55.7127529,
        "lng": 21.1350469,
        "prices": {
            "A95": 1.79,
            "A98": null,
            "Diesel": 1.98,
            "LPG": 0.93
        }
    },
    {
        "id": 434,
        "name": "Trevena",
        "logo": "⛽",
        "city": "Šilutės",
        "address": "Tilžės g. 21, Saugų k.",
        "lat": 55.3750109,
        "lng": 21.5403978,
        "prices": {
            "A95": 1.77,
            "A98": null,
            "Diesel": 1.95,
            "LPG": 0.89
        }
    },
    {
        "id": 435,
        "name": "Trevena",
        "logo": "⛽",
        "city": "Rietavo",
        "address": "Kvėdarnos g. 2, Vatušių k.",
        "lat": 55.7240783,
        "lng": 22.0024769,
        "prices": {
            "A95": 1.77,
            "A98": null,
            "Diesel": 1.95,
            "LPG": 0.93
        }
    },
    {
        "id": 436,
        "name": "Trevena",
        "logo": "⛽",
        "city": "Klaipėda",
        "address": "Minijos g. 152A, Klaipėda",
        "lat": 55.6696562,
        "lng": 21.1586131,
        "prices": {
            "A95": 1.77,
            "A98": null,
            "Diesel": 1.95,
            "LPG": 0.93
        }
    },
    {
        "id": 437,
        "name": "Trevena",
        "logo": "⛽",
        "city": "Rietavo",
        "address": "Lėgų k. 1, Rietavas",
        "lat": 55.7240783,
        "lng": 22.0024769,
        "prices": {
            "A95": 1.79,
            "A98": null,
            "Diesel": 1.98,
            "LPG": 0.93
        }
    },
    {
        "id": 438,
        "name": "Trevena",
        "logo": "⛽",
        "city": "Kretingos",
        "address": "Laisvės g. 15, Darbėnai",
        "lat": 56.0267748,
        "lng": 21.2626243,
        "prices": {
            "A95": 1.88,
            "A98": null,
            "Diesel": 2.05,
            "LPG": 0.94
        }
    },
    {
        "id": 439,
        "name": "Trevena",
        "logo": "⛽",
        "city": "Klaipėda",
        "address": "Kretingos pl. 1, Gargždai",
        "lat": 55.7213423,
        "lng": 21.3854871,
        "prices": {
            "A95": 1.77,
            "A98": null,
            "Diesel": 1.95,
            "LPG": 0.93
        }
    },
    {
        "id": 440,
        "name": "Trevena",
        "logo": "⛽",
        "city": "Klaipėda",
        "address": "Kretingos g. 28A, Klaipėda",
        "lat": 55.7283977,
        "lng": 21.1325842,
        "prices": {
            "A95": 1.77,
            "A98": null,
            "Diesel": 1.95,
            "LPG": 0.93
        }
    },
    {
        "id": 441,
        "name": "Trevena",
        "logo": "⛽",
        "city": "Klaipėda",
        "address": "Klaipėdos g. 39, Gargždai",
        "lat": 55.7122819,
        "lng": 21.3816268,
        "prices": {
            "A95": 1.74,
            "A98": null,
            "Diesel": 1.93,
            "LPG": 0.89
        }
    },
    {
        "id": 442,
        "name": "Trevena",
        "logo": "⛽",
        "city": "Šilutės",
        "address": "Liepų g. 4, Žemaitkiemio k.",
        "lat": 55.3750109,
        "lng": 21.5403978,
        "prices": {
            "A95": 1.77,
            "A98": null,
            "Diesel": 1.95,
            "LPG": 0.89
        }
    },
    {
        "id": 443,
        "name": "Tripletas",
        "logo": "⛽",
        "city": "Mažeikių",
        "address": "Sedos g. 16, Mažeikiai",
        "lat": 56.3052828,
        "lng": 22.3424876,
        "prices": {
            "A95": 1.78,
            "A98": null,
            "Diesel": 1.96,
            "LPG": 0.87
        }
    },
    {
        "id": 444,
        "name": "Tumasa",
        "logo": "⛽",
        "city": "Mažeikių",
        "address": "Židikai, Mažeikiu g. 10",
        "lat": 56.2596823,
        "lng": 22.2867095,
        "prices": {
            "A95": 1.85,
            "A98": null,
            "Diesel": 2.02,
            "LPG": 0.95
        }
    },
    {
        "id": 445,
        "name": "V.Marcinkevičiaus IĮ",
        "logo": "⛽",
        "city": "Šilutės r.sav.",
        "address": "Bažnyčios 7., Pavilnučio k.",
        "lat": 54.6872,
        "lng": 25.2797,
        "prices": {
            "A95": 1.78,
            "A98": null,
            "Diesel": 1.94,
            "LPG": 0.92
        }
    },
    {
        "id": 446,
        "name": "Valdegra",
        "logo": "⛽",
        "city": "Marijampolės",
        "address": "Prienų g.7, Igliaukos k.",
        "lat": 54.6792304,
        "lng": 23.2004406,
        "prices": {
            "A95": 1.8,
            "A98": null,
            "Diesel": 1.96,
            "LPG": 0.93
        }
    },
    {
        "id": 447,
        "name": "Velseka",
        "logo": "⛽",
        "city": "Kupiškio",
        "address": "Panevėžio g. 5, Kupiškis",
        "lat": 55.8271711,
        "lng": 24.985997,
        "prices": {
            "A95": 1.74,
            "A98": null,
            "Diesel": 1.89,
            "LPG": 0.86
        }
    },
    {
        "id": 448,
        "name": "Viada",
        "logo": "🦌",
        "city": "Klaipėda",
        "address": "Klaipėda, Šilutės pl. 52",
        "lat": 55.6817397,
        "lng": 21.1851383,
        "prices": {
            "A95": 1.9,
            "A98": null,
            "Diesel": 2.04,
            "LPG": 0.96
        }
    },
    {
        "id": 449,
        "name": "Viada",
        "logo": "🦌",
        "city": "Alytaus",
        "address": "Alytus, Naujoji g. 27",
        "lat": 55.7319393,
        "lng": 21.1423197,
        "prices": {
            "A95": 1.89,
            "A98": null,
            "Diesel": 2.0,
            "LPG": 0.92
        }
    },
    {
        "id": 450,
        "name": "Viada",
        "logo": "🦌",
        "city": "Alytaus",
        "address": "Alytus, Ulonų g. 33B",
        "lat": 55.7319393,
        "lng": 21.1423197,
        "prices": {
            "A95": 1.89,
            "A98": null,
            "Diesel": 2.0,
            "LPG": 0.92
        }
    },
    {
        "id": 451,
        "name": "Viada",
        "logo": "🦌",
        "city": "Anykščių",
        "address": "Anykščiai, A. Vienuolio g. 34",
        "lat": 55.5349516,
        "lng": 25.0424158,
        "prices": {
            "A95": 1.86,
            "A98": null,
            "Diesel": 2.06,
            "LPG": 0.94
        }
    },
    {
        "id": 452,
        "name": "Viada",
        "logo": "🦌",
        "city": "Anykščių",
        "address": "Anykščiai, Piliakalnio g. 9",
        "lat": 55.5349516,
        "lng": 25.0424158,
        "prices": {
            "A95": 1.86,
            "A98": null,
            "Diesel": 2.06,
            "LPG": 0.94
        }
    },
    {
        "id": 453,
        "name": "Viada",
        "logo": "🦌",
        "city": "Šiaulių",
        "address": "Aukštelkės k., Ilgoji g. 1",
        "lat": 55.9398236,
        "lng": 23.3937822,
        "prices": {
            "A95": 1.96,
            "A98": null,
            "Diesel": 2.08,
            "LPG": 0.96
        }
    },
    {
        "id": 454,
        "name": "Viada",
        "logo": "🦌",
        "city": "Trakų",
        "address": "Aukštųjų Semeniukų k., Logistikos g. 9",
        "lat": 54.5642276,
        "lng": 24.7282274,
        "prices": {
            "A95": 1.96,
            "A98": null,
            "Diesel": 2.1,
            "LPG": 0.96
        }
    },
    {
        "id": 455,
        "name": "Viada",
        "logo": "🦌",
        "city": "Vilnius",
        "address": "Avižienių k., Ožiarūčių g. 1a",
        "lat": 54.6870458,
        "lng": 25.2829111,
        "prices": {
            "A95": 1.94,
            "A98": null,
            "Diesel": 2.04,
            "LPG": 0.96
        }
    },
    {
        "id": 456,
        "name": "Viada",
        "logo": "🦌",
        "city": "Biržų",
        "address": "Biržai, Parodos g. 2",
        "lat": 56.175453,
        "lng": 24.8313461,
        "prices": {
            "A95": 1.82,
            "A98": null,
            "Diesel": 2.0,
            "LPG": 0.96
        }
    },
    {
        "id": 457,
        "name": "Viada",
        "logo": "🦌",
        "city": "Biržų",
        "address": "Biržai, Pasvalio g. 1B",
        "lat": 56.175453,
        "lng": 24.8313461,
        "prices": {
            "A95": 1.82,
            "A98": null,
            "Diesel": 2.0,
            "LPG": 0.96
        }
    },
    {
        "id": 458,
        "name": "Viada",
        "logo": "🦌",
        "city": "Panevėžio",
        "address": "Ramygala, Vienkiemio g. 1B",
        "lat": 55.9155086,
        "lng": 25.0309026,
        "prices": {
            "A95": 1.96,
            "A98": null,
            "Diesel": 2.1,
            "LPG": 0.96
        }
    },
    {
        "id": 459,
        "name": "Viada",
        "logo": "🦌",
        "city": "Kaunas",
        "address": "Zapyškis, Vytauto g. 20A",
        "lat": 54.8982139,
        "lng": 23.9044817,
        "prices": {
            "A95": 1.9,
            "A98": null,
            "Diesel": 2.06,
            "LPG": 0.96
        }
    },
    {
        "id": 460,
        "name": "Viada",
        "logo": "🦌",
        "city": "Kazlų Rūdos",
        "address": "Ąžuolų Būdos k.",
        "lat": 54.7901401,
        "lng": 23.448325,
        "prices": {
            "A95": 1.96,
            "A98": null,
            "Diesel": 2.08,
            "LPG": 0.96
        }
    },
    {
        "id": 461,
        "name": "Viada",
        "logo": "🦌",
        "city": "Šiaulių",
        "address": "Šiauliai, Dubijos g. 1C",
        "lat": 55.9398236,
        "lng": 23.3937822,
        "prices": {
            "A95": 1.9,
            "A98": null,
            "Diesel": 2.02,
            "LPG": 0.96
        }
    },
    {
        "id": 462,
        "name": "Viada",
        "logo": "🦌",
        "city": "Šiaulių",
        "address": "Šiauliai, Gegužių g. 26",
        "lat": 55.9398236,
        "lng": 23.3937822,
        "prices": {
            "A95": 1.88,
            "A98": null,
            "Diesel": 2.0,
            "LPG": 0.96
        }
    },
    {
        "id": 463,
        "name": "Viada",
        "logo": "🦌",
        "city": "Šiaulių",
        "address": "Šiauliai, J. Basanavičiaus g. 122A",
        "lat": 55.9398236,
        "lng": 23.3937822,
        "prices": {
            "A95": 1.9,
            "A98": null,
            "Diesel": 2.02,
            "LPG": 0.96
        }
    },
    {
        "id": 464,
        "name": "Viada",
        "logo": "🦌",
        "city": "Šiaulių",
        "address": "Šiauliai, Tilžės g. 274",
        "lat": 55.9643348,
        "lng": 23.3492713,
        "prices": {
            "A95": 1.9,
            "A98": null,
            "Diesel": 2.02,
            "LPG": 0.96
        }
    },
    {
        "id": 465,
        "name": "Viada",
        "logo": "🦌",
        "city": "Šiaulių",
        "address": "Šiauliai, Užmiesčio g. 2",
        "lat": 55.9398236,
        "lng": 23.3937822,
        "prices": {
            "A95": 1.9,
            "A98": null,
            "Diesel": 2.02,
            "LPG": 0.96
        }
    },
    {
        "id": 466,
        "name": "Viada",
        "logo": "🦌",
        "city": "Šilutės",
        "address": "Šilutė, Tilžės g. 59",
        "lat": 55.3750109,
        "lng": 21.5403978,
        "prices": {
            "A95": 1.85,
            "A98": null,
            "Diesel": 2.04,
            "LPG": 0.96
        }
    },
    {
        "id": 467,
        "name": "Viada",
        "logo": "🦌",
        "city": "Širvintų",
        "address": "Širvintos, Plento g. 4",
        "lat": 55.0096018,
        "lng": 24.8883492,
        "prices": {
            "A95": 1.9,
            "A98": null,
            "Diesel": 2.06,
            "LPG": 0.96
        }
    },
    {
        "id": 468,
        "name": "Viada",
        "logo": "🦌",
        "city": "Ukmergės",
        "address": "Šventupės k., Beržų g. 13",
        "lat": 55.301698,
        "lng": 24.7372908,
        "prices": {
            "A95": 1.96,
            "A98": null,
            "Diesel": 2.1,
            "LPG": 0.96
        }
    },
    {
        "id": 469,
        "name": "Viada",
        "logo": "🦌",
        "city": "Švenčionių",
        "address": "Švenčionys, Vilniaus g. 50A",
        "lat": 55.0697365,
        "lng": 25.9983183,
        "prices": {
            "A95": 1.96,
            "A98": null,
            "Diesel": 2.1,
            "LPG": 0.96
        }
    },
    {
        "id": 470,
        "name": "Viada",
        "logo": "🦌",
        "city": "Švenčionių",
        "address": "Švenčionėliai, Žemutinė g. 51A",
        "lat": 55.0697365,
        "lng": 25.9983183,
        "prices": {
            "A95": 1.96,
            "A98": null,
            "Diesel": 2.1,
            "LPG": 0.96
        }
    },
    {
        "id": 471,
        "name": "Viada",
        "logo": "🦌",
        "city": "Rokiškio",
        "address": "Rokiškis, Žemaitės g. 2C",
        "lat": 55.9538411,
        "lng": 25.6812626,
        "prices": {
            "A95": 1.96,
            "A98": null,
            "Diesel": 2.08,
            "LPG": 0.96
        }
    },
    {
        "id": 472,
        "name": "Viada",
        "logo": "🦌",
        "city": "Rokiškio",
        "address": "Rokiškis, Panevėžio g. 5",
        "lat": 55.965382,
        "lng": 25.600896,
        "prices": {
            "A95": 1.96,
            "A98": null,
            "Diesel": 2.08,
            "LPG": 0.96
        }
    },
    {
        "id": 473,
        "name": "Viada",
        "logo": "🦌",
        "city": "Visagino",
        "address": "Visaginas, Taikos pr. 23B",
        "lat": 55.5853627,
        "lng": 26.4823701,
        "prices": {
            "A95": 1.94,
            "A98": null,
            "Diesel": 2.06,
            "LPG": 0.96
        }
    },
    {
        "id": 474,
        "name": "Viada",
        "logo": "🦌",
        "city": "Plungės",
        "address": "Plungė, Žaltakalnio g. 10",
        "lat": 55.953916,
        "lng": 21.8335407,
        "prices": {
            "A95": 1.88,
            "A98": null,
            "Diesel": 2.04,
            "LPG": 0.96
        }
    },
    {
        "id": 475,
        "name": "Viada",
        "logo": "🦌",
        "city": "Plungės",
        "address": "Plungė, J. Tumo-Vaižganto g. 102",
        "lat": 55.953916,
        "lng": 21.8335407,
        "prices": {
            "A95": 1.88,
            "A98": null,
            "Diesel": 2.04,
            "LPG": 0.96
        }
    },
    {
        "id": 476,
        "name": "Viada",
        "logo": "🦌",
        "city": "Pasvalio",
        "address": "Pasvalys, Vilniaus g. 50",
        "lat": 56.0706909,
        "lng": 24.3842838,
        "prices": {
            "A95": 1.93,
            "A98": null,
            "Diesel": 2.06,
            "LPG": 0.96
        }
    },
    {
        "id": 477,
        "name": "Viada",
        "logo": "🦌",
        "city": "Panevėžio",
        "address": "Panevėžys, Venslaviškio g. 16",
        "lat": 55.9155086,
        "lng": 25.0309026,
        "prices": {
            "A95": 1.86,
            "A98": null,
            "Diesel": 2.0,
            "LPG": 0.96
        }
    },
    {
        "id": 478,
        "name": "Viada",
        "logo": "🦌",
        "city": "Panevėžio",
        "address": "Panevėžys, Senamiesčio g. 116A",
        "lat": 55.9155086,
        "lng": 25.0309026,
        "prices": {
            "A95": 1.86,
            "A98": null,
            "Diesel": 2.0,
            "LPG": 0.95
        }
    },
    {
        "id": 479,
        "name": "Viada",
        "logo": "🦌",
        "city": "Panevėžio",
        "address": "Panevėžys, Ramygalos g. 186G",
        "lat": 55.9155086,
        "lng": 25.0309026,
        "prices": {
            "A95": 1.86,
            "A98": null,
            "Diesel": 2.0,
            "LPG": 0.94
        }
    },
    {
        "id": 480,
        "name": "Viada",
        "logo": "🦌",
        "city": "Panevėžio",
        "address": "Panevėžys, Ramygalos g. 155",
        "lat": 55.9155086,
        "lng": 25.0309026,
        "prices": {
            "A95": 1.86,
            "A98": null,
            "Diesel": 2.0,
            "LPG": 0.94
        }
    },
    {
        "id": 481,
        "name": "Viada",
        "logo": "🦌",
        "city": "Panevėžio",
        "address": "Panevėžys, Pušaloto g. 193A",
        "lat": 55.9155086,
        "lng": 25.0309026,
        "prices": {
            "A95": 1.86,
            "A98": null,
            "Diesel": 2.0,
            "LPG": 0.96
        }
    },
    {
        "id": 482,
        "name": "Viada",
        "logo": "🦌",
        "city": "Panevėžio",
        "address": "Panevėžys, Navadolio g. 31",
        "lat": 55.9155086,
        "lng": 25.0309026,
        "prices": {
            "A95": 1.86,
            "A98": null,
            "Diesel": 2.0,
            "LPG": 0.94
        }
    },
    {
        "id": 483,
        "name": "Viada",
        "logo": "🦌",
        "city": "Panevėžio",
        "address": "Panevėžys, J. Janonio g. 28A",
        "lat": 55.9155086,
        "lng": 25.0309026,
        "prices": {
            "A95": 1.86,
            "A98": null,
            "Diesel": 2.0,
            "LPG": 0.96
        }
    },
    {
        "id": 484,
        "name": "Viada",
        "logo": "🦌",
        "city": "Pakruojo",
        "address": "Pakruojis, Vytauto Didžiojo g. 98",
        "lat": 56.0731045,
        "lng": 23.8319151,
        "prices": {
            "A95": 1.89,
            "A98": null,
            "Diesel": 2.05,
            "LPG": 0.96
        }
    },
    {
        "id": 485,
        "name": "Viada",
        "logo": "🦌",
        "city": "Pasvalio",
        "address": "Brazdigalos k. 1",
        "lat": 56.0706909,
        "lng": 24.3842838,
        "prices": {
            "A95": 1.96,
            "A98": null,
            "Diesel": 2.08,
            "LPG": 0.96
        }
    },
    {
        "id": 486,
        "name": "Viada",
        "logo": "🦌",
        "city": "Molėtų",
        "address": "Molėtai, Vilniaus g. 101",
        "lat": 55.2127255,
        "lng": 25.3981142,
        "prices": {
            "A95": 1.9,
            "A98": null,
            "Diesel": 2.02,
            "LPG": 0.96
        }
    },
    {
        "id": 487,
        "name": "Viada",
        "logo": "🦌",
        "city": "Mažeikių",
        "address": "Mažeikiai, Žemaitijos g. 75",
        "lat": 56.2596823,
        "lng": 22.2867095,
        "prices": {
            "A95": 1.88,
            "A98": null,
            "Diesel": 2.0,
            "LPG": 0.9
        }
    },
    {
        "id": 488,
        "name": "Viada",
        "logo": "🦌",
        "city": "Vilnius",
        "address": "Vilnius, Kirtimų g. 29",
        "lat": 54.6870458,
        "lng": 25.2829111,
        "prices": {
            "A95": 1.95,
            "A98": null,
            "Diesel": 2.07,
            "LPG": 0.96
        }
    },
    {
        "id": 489,
        "name": "Viada",
        "logo": "🦌",
        "city": "Telšių",
        "address": "Telšiai, Pramonės g. 2A",
        "lat": 56.0130975,
        "lng": 22.1366723,
        "prices": {
            "A95": 1.93,
            "A98": null,
            "Diesel": 2.05,
            "LPG": 0.93
        }
    },
    {
        "id": 490,
        "name": "Viada",
        "logo": "🦌",
        "city": "Panevėžio",
        "address": "Tičkūnų k., Tičkūnų g. 31",
        "lat": 55.9155086,
        "lng": 25.0309026,
        "prices": {
            "A95": 1.86,
            "A98": null,
            "Diesel": 2.0,
            "LPG": 0.96
        }
    },
    {
        "id": 491,
        "name": "Viada",
        "logo": "🦌",
        "city": "Ukmergės",
        "address": "Ukmergė, Žiedo g. 15",
        "lat": 55.301698,
        "lng": 24.7372908,
        "prices": {
            "A95": 1.9,
            "A98": null,
            "Diesel": 2.06,
            "LPG": 0.96
        }
    },
    {
        "id": 492,
        "name": "Viada",
        "logo": "🦌",
        "city": "Utenos",
        "address": "Utena, Metalo g. 8",
        "lat": 55.5277248,
        "lng": 25.2821151,
        "prices": {
            "A95": 1.94,
            "A98": null,
            "Diesel": 2.0,
            "LPG": 0.96
        }
    },
    {
        "id": 493,
        "name": "Viada",
        "logo": "🦌",
        "city": "Utenos",
        "address": "Utena, Pramonės g. 23",
        "lat": 55.5277248,
        "lng": 25.2821151,
        "prices": {
            "A95": 1.94,
            "A98": null,
            "Diesel": 2.0,
            "LPG": 0.96
        }
    },
    {
        "id": 494,
        "name": "Viada",
        "logo": "🦌",
        "city": "Varėnos",
        "address": "Valkininkai, Vilniaus g. 6",
        "lat": 54.1725666,
        "lng": 24.4183024,
        "prices": {
            "A95": 1.96,
            "A98": null,
            "Diesel": 2.1,
            "LPG": 0.96
        }
    },
    {
        "id": 495,
        "name": "Viada",
        "logo": "🦌",
        "city": "Raseinių",
        "address": "Vejukų k. 5",
        "lat": 55.3942341,
        "lng": 22.9071636,
        "prices": {
            "A95": 1.96,
            "A98": null,
            "Diesel": 2.1,
            "LPG": 0.96
        }
    },
    {
        "id": 496,
        "name": "Viada",
        "logo": "🦌",
        "city": "Elektrėnų",
        "address": "Vievis, Kauno g. 26A",
        "lat": 54.763291,
        "lng": 24.7695541,
        "prices": {
            "A95": 1.96,
            "A98": null,
            "Diesel": 2.1,
            "LPG": 0.96
        }
    },
    {
        "id": 497,
        "name": "Viada",
        "logo": "🦌",
        "city": "Vilkaviškio",
        "address": "Vilkaviškis, Vytauto g. 105",
        "lat": 54.6379827,
        "lng": 23.0084464,
        "prices": {
            "A95": 1.84,
            "A98": null,
            "Diesel": 2.06,
            "LPG": 0.96
        }
    },
    {
        "id": 498,
        "name": "Viada",
        "logo": "🦌",
        "city": "Vilnius",
        "address": "Vilnius, Ateities g. 17B",
        "lat": 54.6870458,
        "lng": 25.2829111,
        "prices": {
            "A95": 1.87,
            "A98": null,
            "Diesel": 2.02,
            "LPG": 0.93
        }
    },
    {
        "id": 499,
        "name": "Viada",
        "logo": "🦌",
        "city": "Vilnius",
        "address": "Vilnius, Dariaus ir Girėno g. 30A",
        "lat": 54.6870458,
        "lng": 25.2829111,
        "prices": {
            "A95": 1.91,
            "A98": null,
            "Diesel": 2.02,
            "LPG": 0.96
        }
    },
    {
        "id": 500,
        "name": "Viada",
        "logo": "🦌",
        "city": "Vilnius",
        "address": "Vilnius, Gariūnų g. 16A",
        "lat": 54.6870458,
        "lng": 25.2829111,
        "prices": {
            "A95": 1.9,
            "A98": null,
            "Diesel": 2.0,
            "LPG": 0.96
        }
    },
    {
        "id": 501,
        "name": "Viada",
        "logo": "🦌",
        "city": "Vilnius",
        "address": "Vilnius, Grigiškės, Kovo 11-osios g. 75",
        "lat": 54.6870458,
        "lng": 25.2829111,
        "prices": {
            "A95": 1.94,
            "A98": null,
            "Diesel": 2.06,
            "LPG": 0.96
        }
    },
    {
        "id": 502,
        "name": "Viada",
        "logo": "🦌",
        "city": "Tauragės",
        "address": "Tauragė, Dariaus ir Girėno g. 138A",
        "lat": 55.3564378,
        "lng": 22.405222,
        "prices": {
            "A95": 1.93,
            "A98": null,
            "Diesel": 2.06,
            "LPG": 0.93
        }
    },
    {
        "id": 503,
        "name": "Viada",
        "logo": "🦌",
        "city": "Švenčionių",
        "address": "Pabradė, Vilniaus g. 116B",
        "lat": 55.0697365,
        "lng": 25.9983183,
        "prices": {
            "A95": 1.94,
            "A98": null,
            "Diesel": 2.03,
            "LPG": 0.96
        }
    },
    {
        "id": 504,
        "name": "Viada",
        "logo": "🦌",
        "city": "Vilnius",
        "address": "Vilnius, Laisvės pr. 8",
        "lat": 54.6870458,
        "lng": 25.2829111,
        "prices": {
            "A95": 1.96,
            "A98": null,
            "Diesel": 2.07,
            "LPG": 0.96
        }
    },
    {
        "id": 505,
        "name": "Viada",
        "logo": "🦌",
        "city": "Vilnius",
        "address": "Vilnius, Liepkalnio g. 128A",
        "lat": 54.6870458,
        "lng": 25.2829111,
        "prices": {
            "A95": 1.94,
            "A98": null,
            "Diesel": 2.06,
            "LPG": 0.96
        }
    },
    {
        "id": 506,
        "name": "Viada",
        "logo": "🦌",
        "city": "Vilnius",
        "address": "Vilnius, Naugarduko g. 74",
        "lat": 54.6870458,
        "lng": 25.2829111,
        "prices": {
            "A95": 1.93,
            "A98": null,
            "Diesel": 2.07,
            "LPG": 0.96
        }
    },
    {
        "id": 507,
        "name": "Viada",
        "logo": "🦌",
        "city": "Vilnius",
        "address": "Vilnius, Nemenčinės pl. 5",
        "lat": 54.6870458,
        "lng": 25.2829111,
        "prices": {
            "A95": 1.94,
            "A98": null,
            "Diesel": 2.06,
            "LPG": 0.96
        }
    },
    {
        "id": 508,
        "name": "Viada",
        "logo": "🦌",
        "city": "Klaipėda",
        "address": "Sudmantų k., Vilniaus pl. 6",
        "lat": 55.7127529,
        "lng": 21.1350469,
        "prices": {
            "A95": 1.96,
            "A98": null,
            "Diesel": 2.08,
            "LPG": 0.96
        }
    },
    {
        "id": 509,
        "name": "Viada",
        "logo": "🦌",
        "city": "Vilnius",
        "address": "Vilnius, Olandų g. 57",
        "lat": 54.6870458,
        "lng": 25.2829111,
        "prices": {
            "A95": 1.94,
            "A98": null,
            "Diesel": 2.06,
            "LPG": 0.96
        }
    },
    {
        "id": 510,
        "name": "Viada",
        "logo": "🦌",
        "city": "Vilnius",
        "address": "Vilnius, Ozo g. 12",
        "lat": 54.6870458,
        "lng": 25.2829111,
        "prices": {
            "A95": 1.89,
            "A98": null,
            "Diesel": 2.02,
            "LPG": 0.96
        }
    },
    {
        "id": 511,
        "name": "Viada",
        "logo": "🦌",
        "city": "Vilnius",
        "address": "Vilnius, Pilaitės pr. 13",
        "lat": 54.7035238,
        "lng": 25.2064706,
        "prices": {
            "A95": 1.92,
            "A98": null,
            "Diesel": 2.05,
            "LPG": 0.96
        }
    },
    {
        "id": 512,
        "name": "Viada",
        "logo": "🦌",
        "city": "Vilnius",
        "address": "Vilnius, Pilaitės pr. 28",
        "lat": 54.7035238,
        "lng": 25.2064706,
        "prices": {
            "A95": 1.92,
            "A98": null,
            "Diesel": 2.05,
            "LPG": 0.96
        }
    },
    {
        "id": 513,
        "name": "Viada",
        "logo": "🦌",
        "city": "Vilnius",
        "address": "Vilnius, Saltoniškių g. 12",
        "lat": 54.6870458,
        "lng": 25.2829111,
        "prices": {
            "A95": 1.88,
            "A98": null,
            "Diesel": 2.0,
            "LPG": 0.96
        }
    },
    {
        "id": 514,
        "name": "Viada",
        "logo": "🦌",
        "city": "Skuodo",
        "address": "Skuodas, Vilniaus g. 50",
        "lat": 56.2274045,
        "lng": 21.6899322,
        "prices": {
            "A95": 1.89,
            "A98": null,
            "Diesel": 2.04,
            "LPG": 0.96
        }
    },
    {
        "id": 515,
        "name": "Viada",
        "logo": "🦌",
        "city": "Vilnius",
        "address": "Vilnius, Sodų g. 22",
        "lat": 54.6707057,
        "lng": 25.2818457,
        "prices": {
            "A95": 1.9,
            "A98": null,
            "Diesel": 2.02,
            "LPG": 0.96
        }
    },
    {
        "id": 516,
        "name": "Viada",
        "logo": "🦌",
        "city": "Visagino",
        "address": "Visaginas, Statybininkų g. 1",
        "lat": 55.5946207,
        "lng": 26.438832,
        "prices": {
            "A95": 1.94,
            "A98": null,
            "Diesel": 2.06,
            "LPG": 0.96
        }
    },
    {
        "id": 517,
        "name": "Viada",
        "logo": "🦌",
        "city": "Joniškio",
        "address": "Joniškis, Vilniaus g. 51",
        "lat": 56.2246299,
        "lng": 23.4865961,
        "prices": {
            "A95": 1.89,
            "A98": null,
            "Diesel": 2.07,
            "LPG": 0.93
        }
    },
    {
        "id": 518,
        "name": "Viada",
        "logo": "🦌",
        "city": "Kaunas",
        "address": "Kaunas, P. Lukšio g. 66A",
        "lat": 54.8982139,
        "lng": 23.9044817,
        "prices": {
            "A95": 1.87,
            "A98": null,
            "Diesel": 2.02,
            "LPG": 0.96
        }
    },
    {
        "id": 519,
        "name": "Viada",
        "logo": "🦌",
        "city": "Kaunas",
        "address": "Kaunas, Miežėnų g. 18",
        "lat": 54.8982139,
        "lng": 23.9044817,
        "prices": {
            "A95": 1.9,
            "A98": null,
            "Diesel": 1.98,
            "LPG": 0.93
        }
    },
    {
        "id": 520,
        "name": "Viada",
        "logo": "🦌",
        "city": "Kaunas",
        "address": "Kaunas, Marijampolės pl. 29",
        "lat": 54.8982139,
        "lng": 23.9044817,
        "prices": {
            "A95": 1.9,
            "A98": null,
            "Diesel": 2.06,
            "LPG": 0.96
        }
    },
    {
        "id": 521,
        "name": "Viada",
        "logo": "🦌",
        "city": "Kaunas",
        "address": "Kaunas, Karaliaus Mindaugo pr. 54",
        "lat": 54.8914648,
        "lng": 23.9194883,
        "prices": {
            "A95": 1.96,
            "A98": null,
            "Diesel": 2.04,
            "LPG": 0.96
        }
    },
    {
        "id": 522,
        "name": "Viada",
        "logo": "🦌",
        "city": "Kaunas",
        "address": "Kaunas, K. Baršausko g. 64",
        "lat": 54.8982139,
        "lng": 23.9044817,
        "prices": {
            "A95": 1.92,
            "A98": null,
            "Diesel": 2.0,
            "LPG": 0.96
        }
    },
    {
        "id": 523,
        "name": "Viada",
        "logo": "🦌",
        "city": "Kaunas",
        "address": "Kaunas, Islandijos pl. 61A",
        "lat": 54.8982139,
        "lng": 23.9044817,
        "prices": {
            "A95": 1.96,
            "A98": null,
            "Diesel": 2.1,
            "LPG": 0.96
        }
    },
    {
        "id": 524,
        "name": "Viada",
        "logo": "🦌",
        "city": "Kaunas",
        "address": "Kaunas, Didžioji g. 84",
        "lat": 54.8982139,
        "lng": 23.9044817,
        "prices": {
            "A95": 1.9,
            "A98": null,
            "Diesel": 2.06,
            "LPG": 0.96
        }
    },
    {
        "id": 525,
        "name": "Viada",
        "logo": "🦌",
        "city": "Kaunas",
        "address": "Kaunas, Baltijos g. 90B",
        "lat": 54.8982139,
        "lng": 23.9044817,
        "prices": {
            "A95": 1.9,
            "A98": null,
            "Diesel": 1.98,
            "LPG": 0.93
        }
    },
    {
        "id": 526,
        "name": "Viada",
        "logo": "🦌",
        "city": "Kaunas",
        "address": "Kaunas, Ateities pl. 37A",
        "lat": 54.8982139,
        "lng": 23.9044817,
        "prices": {
            "A95": 1.9,
            "A98": null,
            "Diesel": 2.0,
            "LPG": 0.95
        }
    },
    {
        "id": 527,
        "name": "Viada",
        "logo": "🦌",
        "city": "Kaunas",
        "address": "Kaunas, Ateities pl. 105",
        "lat": 54.8982139,
        "lng": 23.9044817,
        "prices": {
            "A95": 1.96,
            "A98": null,
            "Diesel": 2.1,
            "LPG": 0.96
        }
    },
    {
        "id": 528,
        "name": "Viada",
        "logo": "🦌",
        "city": "Kaunas",
        "address": "Kaunas, A. Juozapavičiaus pr. 90",
        "lat": 54.8776399,
        "lng": 23.9344807,
        "prices": {
            "A95": 1.96,
            "A98": null,
            "Diesel": 2.04,
            "LPG": 0.96
        }
    },
    {
        "id": 529,
        "name": "Viada",
        "logo": "🦌",
        "city": "Kaunas",
        "address": "Kampiškių k., Baltijos g. 41",
        "lat": 54.8982139,
        "lng": 23.9044817,
        "prices": {
            "A95": 1.96,
            "A98": null,
            "Diesel": 2.1,
            "LPG": 0.96
        }
    },
    {
        "id": 530,
        "name": "Viada",
        "logo": "🦌",
        "city": "Kalvarijos",
        "address": "Kalvarija, Dariaus ir Girėno g. 81",
        "lat": 54.7397108,
        "lng": 25.2804959,
        "prices": {
            "A95": 1.96,
            "A98": null,
            "Diesel": 2.1,
            "LPG": 0.96
        }
    },
    {
        "id": 531,
        "name": "Viada",
        "logo": "🦌",
        "city": "Kaišiadorių",
        "address": "Kaišiadorys, Gedimino g. 135",
        "lat": 54.8632112,
        "lng": 24.4607189,
        "prices": {
            "A95": 1.9,
            "A98": null,
            "Diesel": 2.08,
            "LPG": 0.96
        }
    },
    {
        "id": 532,
        "name": "Viada",
        "logo": "🦌",
        "city": "Zarasų",
        "address": "Juodalaukių k. 2",
        "lat": 55.7303771,
        "lng": 26.0387936,
        "prices": {
            "A95": 1.94,
            "A98": null,
            "Diesel": 2.08,
            "LPG": 0.96
        }
    },
    {
        "id": 533,
        "name": "Viada",
        "logo": "🦌",
        "city": "Kaunas",
        "address": "Kaunas, Pramonės pr. 44",
        "lat": 54.9270186,
        "lng": 23.9730388,
        "prices": {
            "A95": 1.86,
            "A98": null,
            "Diesel": 2.0,
            "LPG": 0.95
        }
    },
    {
        "id": 534,
        "name": "Viada",
        "logo": "🦌",
        "city": "Jonavos",
        "address": "Jonava, Darbininkų g. 4D",
        "lat": 55.1168377,
        "lng": 24.2815728,
        "prices": {
            "A95": 1.95,
            "A98": null,
            "Diesel": 2.06,
            "LPG": 0.95
        }
    },
    {
        "id": 535,
        "name": "Viada",
        "logo": "🦌",
        "city": "Šalčininkų",
        "address": "Jašiūnai, Lydos g. 13",
        "lat": 54.3173722,
        "lng": 25.2380361,
        "prices": {
            "A95": 1.96,
            "A98": null,
            "Diesel": 2.08,
            "LPG": 0.96
        }
    },
    {
        "id": 536,
        "name": "Viada",
        "logo": "🦌",
        "city": "Kaunas",
        "address": "Ilgakiemio k., Prienų g. 22",
        "lat": 54.8982139,
        "lng": 23.9044817,
        "prices": {
            "A95": 1.9,
            "A98": null,
            "Diesel": 2.06,
            "LPG": 0.96
        }
    },
    {
        "id": 537,
        "name": "Viada",
        "logo": "🦌",
        "city": "Ignalinos",
        "address": "Ignalina, Turistų g. 28A",
        "lat": 55.4107237,
        "lng": 26.3013003,
        "prices": {
            "A95": 1.94,
            "A98": null,
            "Diesel": 2.08,
            "LPG": 0.96
        }
    },
    {
        "id": 538,
        "name": "Viada",
        "logo": "🦌",
        "city": "Kėdainių",
        "address": "Gudžiūnų k., Baisogalos g. 5",
        "lat": 55.339637,
        "lng": 24.0118376,
        "prices": {
            "A95": 1.96,
            "A98": null,
            "Diesel": 2.08,
            "LPG": 0.96
        }
    },
    {
        "id": 539,
        "name": "Viada",
        "logo": "🦌",
        "city": "Prienų",
        "address": "Grigaliūnų k. 11",
        "lat": 54.6334424,
        "lng": 24.2204708,
        "prices": {
            "A95": 1.96,
            "A98": null,
            "Diesel": 2.1,
            "LPG": 0.95
        }
    },
    {
        "id": 540,
        "name": "Viada",
        "logo": "🦌",
        "city": "Molėtų",
        "address": "Gojaus k., Utenos g. 16",
        "lat": 55.2282306,
        "lng": 25.4148997,
        "prices": {
            "A95": 1.9,
            "A98": null,
            "Diesel": 2.02,
            "LPG": 0.96
        }
    },
    {
        "id": 541,
        "name": "Viada",
        "logo": "🦌",
        "city": "Kaunas",
        "address": "Giraitės k., Automagistralės g. 4",
        "lat": 54.8982139,
        "lng": 23.9044817,
        "prices": {
            "A95": 1.96,
            "A98": null,
            "Diesel": 2.1,
            "LPG": 0.96
        }
    },
    {
        "id": 542,
        "name": "Viada",
        "logo": "🦌",
        "city": "Utenos",
        "address": "Gedimino k., Vyturio g. 2",
        "lat": 55.5277248,
        "lng": 25.2821151,
        "prices": {
            "A95": 1.94,
            "A98": null,
            "Diesel": 2.0,
            "LPG": 0.94
        }
    },
    {
        "id": 543,
        "name": "Viada",
        "logo": "🦌",
        "city": "Klaipėda",
        "address": "Gargždai, Vilniaus pl. 65",
        "lat": 55.7321931,
        "lng": 21.3761937,
        "prices": {
            "A95": 1.96,
            "A98": null,
            "Diesel": 2.08,
            "LPG": 0.96
        }
    },
    {
        "id": 544,
        "name": "Viada",
        "logo": "🦌",
        "city": "Elektrėnų",
        "address": "Elektrėnai, Elektrinės g. 6",
        "lat": 54.763291,
        "lng": 24.7695541,
        "prices": {
            "A95": 1.96,
            "A98": null,
            "Diesel": 2.08,
            "LPG": 0.95
        }
    },
    {
        "id": 545,
        "name": "Viada",
        "logo": "🦌",
        "city": "Ukmergės",
        "address": "Dukstynos k., Vytauto g. 131",
        "lat": 55.301698,
        "lng": 24.7372908,
        "prices": {
            "A95": 1.96,
            "A98": null,
            "Diesel": 2.1,
            "LPG": 0.96
        }
    },
    {
        "id": 546,
        "name": "Viada",
        "logo": "🦌",
        "city": "Kėdainių",
        "address": "Dotnuva, Tilto g. 2A",
        "lat": 55.339637,
        "lng": 24.0118376,
        "prices": {
            "A95": 1.96,
            "A98": null,
            "Diesel": 2.08,
            "LPG": 0.96
        }
    },
    {
        "id": 547,
        "name": "Viada",
        "logo": "🦌",
        "city": "Alytaus",
        "address": "Daugų k., Neveiglo g. 25",
        "lat": 55.7319393,
        "lng": 21.1423197,
        "prices": {
            "A95": 1.9,
            "A98": null,
            "Diesel": 2.02,
            "LPG": 0.94
        }
    },
    {
        "id": 548,
        "name": "Viada",
        "logo": "🦌",
        "city": "Tauragės",
        "address": "Tauragė, Pramonės g. 1",
        "lat": 55.2408267,
        "lng": 22.3054542,
        "prices": {
            "A95": 1.93,
            "A98": null,
            "Diesel": 2.06,
            "LPG": 0.93
        }
    },
    {
        "id": 549,
        "name": "Viada",
        "logo": "🦌",
        "city": "Prienų",
        "address": "Mačiūnų k., Kauno pl. 40",
        "lat": 54.6334424,
        "lng": 24.2204708,
        "prices": {
            "A95": 1.9,
            "A98": null,
            "Diesel": 2.06,
            "LPG": 0.96
        }
    },
    {
        "id": 550,
        "name": "Viada",
        "logo": "🦌",
        "city": "Marijampolės",
        "address": "Marijampolė, J. Ambrazevičiaus-Brazaičio g. 2",
        "lat": 54.6792304,
        "lng": 23.2004406,
        "prices": {
            "A95": 1.89,
            "A98": null,
            "Diesel": 1.99,
            "LPG": 0.9
        }
    },
    {
        "id": 551,
        "name": "Viada",
        "logo": "🦌",
        "city": "Marijampolės",
        "address": "Marijampolė, Geležinkelio g. 5",
        "lat": 54.6792304,
        "lng": 23.2004406,
        "prices": {
            "A95": 1.89,
            "A98": null,
            "Diesel": 1.99,
            "LPG": 0.9
        }
    },
    {
        "id": 552,
        "name": "Viada",
        "logo": "🦌",
        "city": "Kaunas",
        "address": "Margavos k.",
        "lat": 54.9561472,
        "lng": 23.9534738,
        "prices": {
            "A95": 1.92,
            "A98": null,
            "Diesel": 2.06,
            "LPG": 0.96
        }
    },
    {
        "id": 553,
        "name": "Viada",
        "logo": "🦌",
        "city": "Lazdijų",
        "address": "Lazdijai, Turistų g. 32",
        "lat": 54.1607523,
        "lng": 23.6775875,
        "prices": {
            "A95": 1.8,
            "A98": null,
            "Diesel": 2.0,
            "LPG": 0.93
        }
    },
    {
        "id": 554,
        "name": "Viada",
        "logo": "🦌",
        "city": "Šiaulių",
        "address": "Kužiai, Draugystės g. 2",
        "lat": 55.9398236,
        "lng": 23.3937822,
        "prices": {
            "A95": 1.96,
            "A98": null,
            "Diesel": 2.08,
            "LPG": 0.96
        }
    },
    {
        "id": 555,
        "name": "Viada",
        "logo": "🦌",
        "city": "Šiaulių",
        "address": "Kuršėnai, Vilniaus g. 38A",
        "lat": 55.9398236,
        "lng": 23.3937822,
        "prices": {
            "A95": 1.96,
            "A98": null,
            "Diesel": 2.1,
            "LPG": 0.96
        }
    },
    {
        "id": 556,
        "name": "Viada",
        "logo": "🦌",
        "city": "Kupiškio",
        "address": "Kupiškis, Pergalės g. 15",
        "lat": 55.8667202,
        "lng": 25.0307101,
        "prices": {
            "A95": 1.86,
            "A98": null,
            "Diesel": 2.02,
            "LPG": 0.96
        }
    },
    {
        "id": 557,
        "name": "Viada",
        "logo": "🦌",
        "city": "Šilalės",
        "address": "Kuodaičių k.",
        "lat": 55.5252224,
        "lng": 22.2160078,
        "prices": {
            "A95": 1.96,
            "A98": null,
            "Diesel": 2.1,
            "LPG": 0.96
        }
    },
    {
        "id": 558,
        "name": "Viada",
        "logo": "🦌",
        "city": "Kaunas",
        "address": "Kumpių k., Verslo g. 13A",
        "lat": 54.8982139,
        "lng": 23.9044817,
        "prices": {
            "A95": 1.96,
            "A98": null,
            "Diesel": 2.1,
            "LPG": 0.96
        }
    },
    {
        "id": 559,
        "name": "Viada",
        "logo": "🦌",
        "city": "Kretingos",
        "address": "Kretingsodžio k.",
        "lat": 55.9686093,
        "lng": 21.3604059,
        "prices": {
            "A95": 1.96,
            "A98": null,
            "Diesel": 2.1,
            "LPG": 0.96
        }
    },
    {
        "id": 560,
        "name": "Viada",
        "logo": "🦌",
        "city": "Klaipėda",
        "address": "Kretingalė, Klaipėdos g. 1A",
        "lat": 55.7127529,
        "lng": 21.1350469,
        "prices": {
            "A95": 1.96,
            "A98": null,
            "Diesel": 2.1,
            "LPG": 0.96
        }
    },
    {
        "id": 561,
        "name": "Viada",
        "logo": "🦌",
        "city": "Kretingos",
        "address": "Kretinga, Vytauto g. 163",
        "lat": 55.9686093,
        "lng": 21.3604059,
        "prices": {
            "A95": 1.96,
            "A98": null,
            "Diesel": 2.1,
            "LPG": 0.96
        }
    },
    {
        "id": 562,
        "name": "Viada",
        "logo": "🦌",
        "city": "Panevėžio",
        "address": "Krekenava, Tilto g. 35",
        "lat": 55.9155086,
        "lng": 25.0309026,
        "prices": {
            "A95": 1.96,
            "A98": null,
            "Diesel": 2.1,
            "LPG": 0.96
        }
    },
    {
        "id": 563,
        "name": "Viada",
        "logo": "🦌",
        "city": "Mažeikių",
        "address": "Mažeikiai, Montuotojų g. 2A",
        "lat": 56.2596823,
        "lng": 22.2867095,
        "prices": {
            "A95": 1.88,
            "A98": null,
            "Diesel": 2.0,
            "LPG": 0.9
        }
    },
    {
        "id": 564,
        "name": "Viada",
        "logo": "🦌",
        "city": "Klaipėda",
        "address": "Klaipėda, Taikos pr. 70A-1",
        "lat": 55.7127529,
        "lng": 21.1350469,
        "prices": {
            "A95": 1.88,
            "A98": null,
            "Diesel": 2.02,
            "LPG": 0.96
        }
    },
    {
        "id": 565,
        "name": "Viada",
        "logo": "🦌",
        "city": "Klaipėda",
        "address": "Klaipėda, Priestočio g. 28",
        "lat": 55.7127529,
        "lng": 21.1350469,
        "prices": {
            "A95": 1.88,
            "A98": null,
            "Diesel": 2.02,
            "LPG": 0.96
        }
    },
    {
        "id": 566,
        "name": "Viada",
        "logo": "🦌",
        "city": "Klaipėda",
        "address": "Klaipėda, Nemuno g. 139",
        "lat": 55.6951154,
        "lng": 21.1335756,
        "prices": {
            "A95": 1.88,
            "A98": null,
            "Diesel": 2.02,
            "LPG": 0.96
        }
    },
    {
        "id": 567,
        "name": "Viada",
        "logo": "🦌",
        "city": "Klaipėda",
        "address": "Klaipėda, Liepojos g. 242",
        "lat": 55.7127529,
        "lng": 21.1350469,
        "prices": {
            "A95": 1.9,
            "A98": null,
            "Diesel": 2.04,
            "LPG": 0.96
        }
    },
    {
        "id": 568,
        "name": "Viada",
        "logo": "🦌",
        "city": "Kupiškio",
        "address": "Kerelių k. 1A",
        "lat": 55.8667202,
        "lng": 25.0307101,
        "prices": {
            "A95": 1.86,
            "A98": null,
            "Diesel": 2.02,
            "LPG": 0.96
        }
    },
    {
        "id": 569,
        "name": "Viada",
        "logo": "🦌",
        "city": "Kaunas",
        "address": "Kaunas, Veiverių g. 124B",
        "lat": 54.8982139,
        "lng": 23.9044817,
        "prices": {
            "A95": 1.94,
            "A98": null,
            "Diesel": 2.04,
            "LPG": 0.96
        }
    },
    {
        "id": 570,
        "name": "Viada",
        "logo": "🦌",
        "city": "Kaunas",
        "address": "Kaunas, Veiverių g. 117",
        "lat": 54.8982139,
        "lng": 23.9044817,
        "prices": {
            "A95": 1.94,
            "A98": null,
            "Diesel": 2.04,
            "LPG": 0.96
        }
    },
    {
        "id": 571,
        "name": "Viada",
        "logo": "🦌",
        "city": "Kaunas",
        "address": "Kaunas, T. Masiulio g. 22B",
        "lat": 54.8982139,
        "lng": 23.9044817,
        "prices": {
            "A95": 1.89,
            "A98": null,
            "Diesel": 2.0,
            "LPG": 0.96
        }
    },
    {
        "id": 572,
        "name": "Viada",
        "logo": "🦌",
        "city": "Kaunas",
        "address": "Kaunas, Statybininkų g. 3A",
        "lat": 54.8982139,
        "lng": 23.9044817,
        "prices": {
            "A95": 1.87,
            "A98": null,
            "Diesel": 2.03,
            "LPG": 0.96
        }
    },
    {
        "id": 573,
        "name": "Viada",
        "logo": "🦌",
        "city": "Kaunas",
        "address": "Kaunas, Raudondvario pl. 288",
        "lat": 54.9158711,
        "lng": 23.8338251,
        "prices": {
            "A95": 1.87,
            "A98": null,
            "Diesel": 2.03,
            "LPG": 0.96
        }
    },
    {
        "id": 574,
        "name": "Vildega",
        "logo": "⛽",
        "city": "Vilkaviškio",
        "address": "Vytauto g. 2D, Vilkaviškis",
        "lat": 54.6433403,
        "lng": 23.0530856,
        "prices": {
            "A95": 1.74,
            "A98": null,
            "Diesel": 1.96,
            "LPG": 0.89
        }
    },
    {
        "id": 575,
        "name": "Vimijula",
        "logo": "⛽",
        "city": "Jonavos",
        "address": "Kauno g. 2A, Ručiūnų k.",
        "lat": 55.1168377,
        "lng": 24.2815728,
        "prices": {
            "A95": 1.82,
            "A98": null,
            "Diesel": 2.04,
            "LPG": 0.97
        }
    },
    {
        "id": 576,
        "name": "Virši",
        "logo": "⛽",
        "city": "Marijampolės",
        "address": "L.Taunio g. 3, Pasūduonės km.",
        "lat": 54.6792304,
        "lng": 23.2004406,
        "prices": {
            "A95": 1.88,
            "A98": null,
            "Diesel": 1.98,
            "LPG": 0.92
        }
    },
    {
        "id": 577,
        "name": "Visvilas",
        "logo": "⛽",
        "city": "Mažeikių",
        "address": "Laukų g. 2C.,Tirkšlių m.",
        "lat": 56.2596823,
        "lng": 22.2867095,
        "prices": {
            "A95": 1.82,
            "A98": null,
            "Diesel": 1.9,
            "LPG": 0.87
        }
    },
    {
        "id": 578,
        "name": "VVARFF (Circle K)",
        "logo": "🔴",
        "city": "Plungės",
        "address": "Pramogų g. 4, Truikių k.",
        "lat": 55.953916,
        "lng": 21.8335407,
        "prices": {
            "A95": 1.86,
            "A98": null,
            "Diesel": 2.0,
            "LPG": 0.93
        }
    },
    {
        "id": 579,
        "name": "Žibalas",
        "logo": "⛽",
        "city": "Jonavos",
        "address": "Jonava, Taurostos g. 16a",
        "lat": 55.1168377,
        "lng": 24.2815728,
        "prices": {
            "A95": 1.98,
            "A98": null,
            "Diesel": 2.09,
            "LPG": 0.96
        }
    },
    {
        "id": 580,
        "name": "Alauša",
        "logo": "⛽",
        "city": "Vilnius",
        "address": "Buivydiškių g. 5, Vilnius",
        "lat": 54.7108303,
        "lng": 25.2404105,
        "prices": {
            "A95": 1.7,
            "A98": null,
            "Diesel": 1.86,
            "LPG": null
        }
    },
    {
        "id": 581,
        "name": "Alauša",
        "logo": "⛽",
        "city": "Rokiškio",
        "address": "Dariaus ir Girėno g. 36, Obeliai",
        "lat": 55.9485496,
        "lng": 25.8143193,
        "prices": {
            "A95": 1.7,
            "A98": null,
            "Diesel": 1.86,
            "LPG": null
        }
    },
    {
        "id": 582,
        "name": "Alauša",
        "logo": "⛽",
        "city": "Vilnius",
        "address": "Laisvės pr. 125A, Vilnius",
        "lat": 54.7276342,
        "lng": 25.2363041,
        "prices": {
            "A95": 1.7,
            "A98": null,
            "Diesel": 1.86,
            "LPG": null
        }
    },
    {
        "id": 583,
        "name": "Alauša",
        "logo": "⛽",
        "city": "Kaunas",
        "address": "Palemono g. 171, Kaunas",
        "lat": 54.9236968,
        "lng": 24.0690468,
        "prices": {
            "A95": 1.76,
            "A98": null,
            "Diesel": 1.9,
            "LPG": null
        }
    },
    {
        "id": 584,
        "name": "Alauša",
        "logo": "⛽",
        "city": "Marijampolės",
        "address": "Plytinės g. 2, Puskelnių k.",
        "lat": 54.6792304,
        "lng": 23.2004406,
        "prices": {
            "A95": 1.69,
            "A98": null,
            "Diesel": 1.85,
            "LPG": null
        }
    },
    {
        "id": 585,
        "name": "Alauša",
        "logo": "⛽",
        "city": "Marijampolės",
        "address": "Sporto g. 50A, Marijampolė",
        "lat": 54.566841,
        "lng": 23.3776035,
        "prices": {
            "A95": 1.69,
            "A98": null,
            "Diesel": 1.85,
            "LPG": null
        }
    },
    {
        "id": 586,
        "name": "Alauša",
        "logo": "⛽",
        "city": "Vilnius",
        "address": "Šv. Stepono g. 44, Vilnius",
        "lat": 54.669143,
        "lng": 25.2787962,
        "prices": {
            "A95": 1.7,
            "A98": null,
            "Diesel": 1.86,
            "LPG": null
        }
    },
    {
        "id": 587,
        "name": "Apsaga",
        "logo": "⛽",
        "city": "Šiaulių",
        "address": "Pramonės g. 28, Šiauliai",
        "lat": 55.9049517,
        "lng": 23.3280681,
        "prices": {
            "A95": 1.85,
            "A98": null,
            "Diesel": 1.97,
            "LPG": null
        }
    },
    {
        "id": 588,
        "name": "Autograndas",
        "logo": "⛽",
        "city": "Visagino",
        "address": "Taikos pr. 47",
        "lat": 55.5903811,
        "lng": 26.4633608,
        "prices": {
            "A95": 1.7,
            "A98": null,
            "Diesel": 1.88,
            "LPG": null
        }
    },
    {
        "id": 589,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Mažeikių",
        "address": "Tirkšliai, Laukų g. 10",
        "lat": 56.2596823,
        "lng": 22.2867095,
        "prices": {
            "A95": 1.83,
            "A98": null,
            "Diesel": 1.91,
            "LPG": null
        }
    },
    {
        "id": 590,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Vilnius",
        "address": "Vilnius, Brazdžionio g. 2",
        "lat": 54.6870458,
        "lng": 25.2829111,
        "prices": {
            "A95": 1.76,
            "A98": null,
            "Diesel": 1.96,
            "LPG": null
        }
    },
    {
        "id": 591,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Zarasų",
        "address": "Padustėlis, V. Striogos g. 4A",
        "lat": 55.7303771,
        "lng": 26.0387936,
        "prices": {
            "A95": 1.84,
            "A98": null,
            "Diesel": 1.98,
            "LPG": null
        }
    },
    {
        "id": 592,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Šakių",
        "address": "Griškabūdis",
        "lat": 54.8510876,
        "lng": 23.170468,
        "prices": {
            "A95": 1.78,
            "A98": null,
            "Diesel": 1.93,
            "LPG": null
        }
    },
    {
        "id": 593,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Neringos",
        "address": "Neringa, Nidos-Smiltynės pl. 6",
        "lat": 55.4756828,
        "lng": 21.092587,
        "prices": {
            "A95": 1.95,
            "A98": null,
            "Diesel": 2.1,
            "LPG": null
        }
    },
    {
        "id": 594,
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Pasvalio",
        "address": "Aukštikalnio k., Mūšos g. 19",
        "lat": 56.0706909,
        "lng": 24.3842838,
        "prices": {
            "A95": 1.76,
            "A98": null,
            "Diesel": 1.93,
            "LPG": null
        }
    },
    {
        "id": 595,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Vilnius",
        "address": "Molėtų g. 15, Didžiosios Riešės k.",
        "lat": 54.6870458,
        "lng": 25.2829111,
        "prices": {
            "A95": 1.8,
            "A98": null,
            "Diesel": 1.93,
            "LPG": null
        }
    },
    {
        "id": 596,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Kalvarijos",
        "address": "Muitinės g. 5B, Brazavo k.",
        "lat": 54.7397108,
        "lng": 25.2804959,
        "prices": {
            "A95": 1.96,
            "A98": null,
            "Diesel": 2.1,
            "LPG": null
        }
    },
    {
        "id": 597,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Vilnius",
        "address": "Oslo g. 12, Vilnius",
        "lat": 54.6710312,
        "lng": 25.1921158,
        "prices": {
            "A95": 1.83,
            "A98": null,
            "Diesel": 1.95,
            "LPG": null
        }
    },
    {
        "id": 598,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Kaunas",
        "address": "R. Kalantos g. 68, Kaunas",
        "lat": 54.8930507,
        "lng": 23.9958043,
        "prices": {
            "A95": 1.86,
            "A98": null,
            "Diesel": 1.96,
            "LPG": null
        }
    },
    {
        "id": 599,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Klaipėda",
        "address": "Sausio 15-osios g. 2, Klaipėda",
        "lat": 55.7020689,
        "lng": 21.1380345,
        "prices": {
            "A95": 1.87,
            "A98": null,
            "Diesel": 2.02,
            "LPG": null
        }
    },
    {
        "id": 600,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Kaunas",
        "address": "Savanorių pr. 321, Kaunas",
        "lat": 54.9200306,
        "lng": 23.9510946,
        "prices": {
            "A95": 1.86,
            "A98": null,
            "Diesel": 2.03,
            "LPG": null
        }
    },
    {
        "id": 601,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Vilnius",
        "address": "Sporto g. 16A, Vilnius",
        "lat": 54.6950807,
        "lng": 25.2981194,
        "prices": {
            "A95": 1.9,
            "A98": null,
            "Diesel": 2.06,
            "LPG": null
        }
    },
    {
        "id": 602,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Kaunas",
        "address": "Taikos pr. 52A, Kaunas",
        "lat": 54.9119499,
        "lng": 23.9567415,
        "prices": {
            "A95": 1.85,
            "A98": null,
            "Diesel": 2.01,
            "LPG": null
        }
    },
    {
        "id": 603,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Klaipėda",
        "address": "Taikos pr. 61B, Klaipėda",
        "lat": 55.692392,
        "lng": 21.1537884,
        "prices": {
            "A95": 1.86,
            "A98": null,
            "Diesel": 2.0,
            "LPG": null
        }
    },
    {
        "id": 604,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Kaunas",
        "address": "Tvirtovės alėja 33a, Kaunas",
        "lat": 54.8982139,
        "lng": 23.9044817,
        "prices": {
            "A95": 1.83,
            "A98": null,
            "Diesel": 2.02,
            "LPG": null
        }
    },
    {
        "id": 605,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Vilnius",
        "address": "Ukmergės g. 231, Vilnius",
        "lat": 54.7202043,
        "lng": 25.2463301,
        "prices": {
            "A95": 1.88,
            "A98": null,
            "Diesel": 1.99,
            "LPG": null
        }
    },
    {
        "id": 606,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Kaunas",
        "address": "Varnių g. 46, Kaunas",
        "lat": 54.9144567,
        "lng": 23.9002271,
        "prices": {
            "A95": 1.79,
            "A98": null,
            "Diesel": 1.98,
            "LPG": null
        }
    },
    {
        "id": 607,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Šiaulių",
        "address": "Vilniaus g. 62, Šiauliai",
        "lat": 55.9248038,
        "lng": 23.3340344,
        "prices": {
            "A95": 1.85,
            "A98": null,
            "Diesel": 1.95,
            "LPG": null
        }
    },
    {
        "id": 608,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Kaunas",
        "address": "Veiverių g. 49A, Kaunas",
        "lat": 54.880898,
        "lng": 23.8942251,
        "prices": {
            "A95": 1.93,
            "A98": null,
            "Diesel": 2.02,
            "LPG": null
        }
    },
    {
        "id": 609,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Kaunas",
        "address": "Karaliaus Mindaugo pr. 34A, Kaunas",
        "lat": 54.8941634,
        "lng": 23.9142007,
        "prices": {
            "A95": 1.95,
            "A98": null,
            "Diesel": 2.02,
            "LPG": null
        }
    },
    {
        "id": 610,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Vilnius",
        "address": "A. Goštauto g. 13, Vilnius",
        "lat": 54.6942218,
        "lng": 25.2634259,
        "prices": {
            "A95": 1.88,
            "A98": null,
            "Diesel": 2.0,
            "LPG": null
        }
    },
    {
        "id": 611,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Panevėžio",
        "address": "Klaipėdos g. 92A, Panevėžys",
        "lat": 55.7287147,
        "lng": 24.3389488,
        "prices": {
            "A95": 1.81,
            "A98": null,
            "Diesel": 1.99,
            "LPG": null
        }
    },
    {
        "id": 612,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Tauragės",
        "address": "Dariaus ir Girėno g. 83A, Tauragė",
        "lat": 55.266997,
        "lng": 22.3098059,
        "prices": {
            "A95": 1.88,
            "A98": null,
            "Diesel": 1.96,
            "LPG": null
        }
    },
    {
        "id": 613,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Kalvarijos",
        "address": "Europos g. 13a, Salaperaugio k.",
        "lat": 54.7397108,
        "lng": 25.2804959,
        "prices": {
            "A95": 1.96,
            "A98": null,
            "Diesel": 2.1,
            "LPG": null
        }
    },
    {
        "id": 614,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Vilnius",
        "address": "Gariūnų g. 45, Vilnius",
        "lat": 54.6589215,
        "lng": 25.1611257,
        "prices": {
            "A95": 1.84,
            "A98": null,
            "Diesel": 1.96,
            "LPG": null
        }
    },
    {
        "id": 615,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Vilnius",
        "address": "Geležinio Vilko g. 24, Vilnius",
        "lat": 54.7514091,
        "lng": 25.2663978,
        "prices": {
            "A95": 1.84,
            "A98": null,
            "Diesel": 1.97,
            "LPG": null
        }
    },
    {
        "id": 616,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Kaunas",
        "address": "Islandijos pl. 32, Kaunas",
        "lat": 54.9396832,
        "lng": 23.8926605,
        "prices": {
            "A95": 1.91,
            "A98": null,
            "Diesel": 1.98,
            "LPG": null
        }
    },
    {
        "id": 617,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Kaunas",
        "address": "Islandijos pl. 61C, Kaunas",
        "lat": 54.9335863,
        "lng": 23.965766,
        "prices": {
            "A95": 1.96,
            "A98": null,
            "Diesel": 2.1,
            "LPG": null
        }
    },
    {
        "id": 618,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Kėdainių",
        "address": "J. Basanavičiaus g. 40a, Kėdainiai",
        "lat": 55.2865804,
        "lng": 23.9721881,
        "prices": {
            "A95": 1.89,
            "A98": null,
            "Diesel": 1.99,
            "LPG": null
        }
    },
    {
        "id": 619,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Marijampolės",
        "address": "Jono Dailidės g. 10, Marijampolė",
        "lat": 54.5570913,
        "lng": 23.3540738,
        "prices": {
            "A95": 1.86,
            "A98": null,
            "Diesel": 1.97,
            "LPG": null
        }
    },
    {
        "id": 620,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Klaipėda",
        "address": "Jūrininkų pr. 31, Klaipėda",
        "lat": 55.6566409,
        "lng": 21.1823952,
        "prices": {
            "A95": 1.85,
            "A98": null,
            "Diesel": 2.01,
            "LPG": null
        }
    },
    {
        "id": 621,
        "name": "Circle K",
        "logo": "🔴",
        "city": "Klaipėda",
        "address": "H. Manto g. 96, Klaipėda",
        "lat": 55.7303221,
        "lng": 21.1246904,
        "prices": {
            "A95": 1.9,
            "A98": null,
            "Diesel": 2.03,
            "LPG": null
        }
    },
    {
        "id": 622,
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Vilnius",
        "address": "Medininkų k., Pasieniečių g.10",
        "lat": 54.6870458,
        "lng": 25.2829111,
        "prices": {
            "A95": 1.82,
            "A98": null,
            "Diesel": 2.0,
            "LPG": null
        }
    },
    {
        "id": 623,
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Jonavos",
        "address": "Vasario 16-osios g.70, Jonava",
        "lat": 55.0708603,
        "lng": 24.2588537,
        "prices": {
            "A95": 1.9,
            "A98": null,
            "Diesel": 2.0,
            "LPG": null
        }
    },
    {
        "id": 624,
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Kaunas",
        "address": "Palemono g. 3A, Kaunas",
        "lat": 54.9010209,
        "lng": 24.0311752,
        "prices": {
            "A95": 1.73,
            "A98": null,
            "Diesel": 1.89,
            "LPG": null
        }
    },
    {
        "id": 625,
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Lazdijų",
        "address": "Lazdijų sen., Janaslavo k.11",
        "lat": 54.1607523,
        "lng": 23.6775875,
        "prices": {
            "A95": 1.71,
            "A98": null,
            "Diesel": 1.91,
            "LPG": null
        }
    },
    {
        "id": 626,
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Kaunas",
        "address": "Ateities pl.40B, Kaunas",
        "lat": 54.9218463,
        "lng": 24.0477225,
        "prices": {
            "A95": 1.76,
            "A98": null,
            "Diesel": 1.92,
            "LPG": null
        }
    },
    {
        "id": 627,
        "name": "Eniris",
        "logo": "⛽",
        "city": "Plungės",
        "address": "Dariaus ir Girėno g. 31, Plungė",
        "lat": 55.919887,
        "lng": 21.8570671,
        "prices": {
            "A95": 1.85,
            "A98": null,
            "Diesel": 1.99,
            "LPG": null
        }
    },
    {
        "id": 628,
        "name": "Eu Verslas",
        "logo": "⛽",
        "city": "Plungės",
        "address": "Rietavo g. 107, Pakerų k.",
        "lat": 55.953916,
        "lng": 21.8335407,
        "prices": {
            "A95": 1.75,
            "A98": null,
            "Diesel": 1.87,
            "LPG": null
        }
    },
    {
        "id": 629,
        "name": "Gelvybė",
        "logo": "⛽",
        "city": "Šakių",
        "address": "Mozūriškiai, Mozūriškių 10",
        "lat": 54.9148731,
        "lng": 23.078048,
        "prices": {
            "A95": 1.78,
            "A98": null,
            "Diesel": 1.91,
            "LPG": null
        }
    },
    {
        "id": 630,
        "name": "Gelvybė",
        "logo": "⛽",
        "city": "Jurbarko",
        "address": "S. Šimkaus g. 69, Seredžius",
        "lat": 55.0789086,
        "lng": 23.3969234,
        "prices": {
            "A95": 1.76,
            "A98": null,
            "Diesel": 1.95,
            "LPG": null
        }
    },
    {
        "id": 631,
        "name": "GM Circle K",
        "logo": "🔴",
        "city": "Jurbarko",
        "address": "Muitinės g. 34A, Jurbarkas",
        "lat": 55.0768054,
        "lng": 22.7518386,
        "prices": {
            "A95": 1.94,
            "A98": null,
            "Diesel": 2.06,
            "LPG": null
        }
    },
    {
        "id": 632,
        "name": "Lašų ŽŪB",
        "logo": "⛽",
        "city": "Rokiškio",
        "address": "Vytėnų vs 9, Vytėnai",
        "lat": 55.9538411,
        "lng": 25.6812626,
        "prices": {
            "A95": 1.87,
            "A98": null,
            "Diesel": 2.06,
            "LPG": null
        }
    },
    {
        "id": 633,
        "name": "Littaura",
        "logo": "⛽",
        "city": "Tauragės",
        "address": "Pramonės g. 6, Tauragė",
        "lat": 55.2382714,
        "lng": 22.297675,
        "prices": {
            "A95": 1.85,
            "A98": null,
            "Diesel": 1.97,
            "LPG": null
        }
    },
    {
        "id": 634,
        "name": "Mindega",
        "logo": "⛽",
        "city": "Kėdainių",
        "address": "Ramygalos g 55, Šėta",
        "lat": 55.2903578,
        "lng": 24.2529976,
        "prices": {
            "A95": 1.84,
            "A98": null,
            "Diesel": 1.9,
            "LPG": null
        }
    },
    {
        "id": 635,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Gariūnų g. 55, Vilnius",
        "lat": 54.6583266,
        "lng": 25.1592954,
        "prices": {
            "A95": 1.82,
            "A98": null,
            "Diesel": 1.94,
            "LPG": null
        }
    },
    {
        "id": 636,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Kedrų g. 2, Vilnius",
        "lat": 54.6772095,
        "lng": 25.2556439,
        "prices": {
            "A95": 1.91,
            "A98": null,
            "Diesel": 1.99,
            "LPG": null
        }
    },
    {
        "id": 637,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Ukmergės",
        "address": "Kauno g. 45B, Ukmergė",
        "lat": 55.2420375,
        "lng": 24.7429222,
        "prices": {
            "A95": 1.82,
            "A98": null,
            "Diesel": 1.92,
            "LPG": null
        }
    },
    {
        "id": 638,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Kauno g. 26, Vilnius",
        "lat": 54.6716123,
        "lng": 25.270971,
        "prices": {
            "A95": 1.89,
            "A98": null,
            "Diesel": 1.97,
            "LPG": null
        }
    },
    {
        "id": 639,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Šilalės",
        "address": "Katyčių k., Šilalės r.",
        "lat": 55.5252224,
        "lng": 22.2160078,
        "prices": {
            "A95": 1.84,
            "A98": null,
            "Diesel": 1.99,
            "LPG": null
        }
    },
    {
        "id": 640,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Justiniškių g. 14B, Vilnius",
        "lat": 54.7049091,
        "lng": 25.2147007,
        "prices": {
            "A95": 1.86,
            "A98": null,
            "Diesel": 1.94,
            "LPG": null
        }
    },
    {
        "id": 641,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Kaunas",
        "address": "Jonavos g. 110, Kaunas",
        "lat": 54.9133284,
        "lng": 23.9116506,
        "prices": {
            "A95": 1.79,
            "A98": null,
            "Diesel": 1.97,
            "LPG": null
        }
    },
    {
        "id": 642,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "J. Tiškevičiaus g. 19, Vilnius",
        "lat": 54.6244066,
        "lng": 25.1119814,
        "prices": {
            "A95": 1.83,
            "A98": null,
            "Diesel": 1.97,
            "LPG": null
        }
    },
    {
        "id": 643,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Kėdainių",
        "address": "J. Basanavičiaus g. 91E, Kėdainiai",
        "lat": 55.2781085,
        "lng": 23.959972,
        "prices": {
            "A95": 1.85,
            "A98": null,
            "Diesel": 1.95,
            "LPG": null
        }
    },
    {
        "id": 644,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Utenos",
        "address": "J. Basanavičiaus g. 129, Utena",
        "lat": 55.5051789,
        "lng": 25.6248833,
        "prices": {
            "A95": 1.85,
            "A98": null,
            "Diesel": 1.96,
            "LPG": null
        }
    },
    {
        "id": 645,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Geležinio Vilko g. 63, Vilnius",
        "lat": 54.7121034,
        "lng": 25.2707309,
        "prices": {
            "A95": 1.81,
            "A98": null,
            "Diesel": 1.94,
            "LPG": null
        }
    },
    {
        "id": 646,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Geležinio Vilko g. 41, Vilnius",
        "lat": 54.7041729,
        "lng": 25.2670837,
        "prices": {
            "A95": 1.86,
            "A98": null,
            "Diesel": 1.98,
            "LPG": null
        }
    },
    {
        "id": 647,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Geležinio Vilko g. 37A, Vilnius",
        "lat": 54.7013241,
        "lng": 25.2638052,
        "prices": {
            "A95": 1.86,
            "A98": null,
            "Diesel": 1.98,
            "LPG": null
        }
    },
    {
        "id": 648,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Šiaulių",
        "address": "Gegužių g. 28, Šiauliai",
        "lat": 55.9059107,
        "lng": 23.2587205,
        "prices": {
            "A95": 1.8,
            "A98": null,
            "Diesel": 1.93,
            "LPG": null
        }
    },
    {
        "id": 649,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Kaunas",
        "address": "Islandijos pl. 191E, Kaunas",
        "lat": 54.9314194,
        "lng": 23.9508055,
        "prices": {
            "A95": 1.83,
            "A98": null,
            "Diesel": 1.96,
            "LPG": null
        }
    },
    {
        "id": 650,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Kaunas",
        "address": "Europos pr. 43, Kaunas",
        "lat": 54.8758012,
        "lng": 23.912098,
        "prices": {
            "A95": 1.88,
            "A98": null,
            "Diesel": 1.98,
            "LPG": null
        }
    },
    {
        "id": 651,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Kalvarijos",
        "address": "Europos g. 1, Salaperaugio k.",
        "lat": 54.7397108,
        "lng": 25.2804959,
        "prices": {
            "A95": 1.87,
            "A98": null,
            "Diesel": 1.97,
            "LPG": null
        }
    },
    {
        "id": 652,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Erfurto g. 41, Vilnius",
        "lat": 54.6728103,
        "lng": 25.1979479,
        "prices": {
            "A95": 1.82,
            "A98": null,
            "Diesel": 1.94,
            "LPG": null
        }
    },
    {
        "id": 653,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Eišiškių pl. 82, Vilnius",
        "lat": 54.6212846,
        "lng": 25.2429403,
        "prices": {
            "A95": 1.86,
            "A98": null,
            "Diesel": 1.97,
            "LPG": null
        }
    },
    {
        "id": 654,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Šiaulių",
        "address": "Dubijos g. 18A, Šiauliai",
        "lat": 55.9293669,
        "lng": 23.2941339,
        "prices": {
            "A95": 1.85,
            "A98": null,
            "Diesel": 1.95,
            "LPG": null
        }
    },
    {
        "id": 655,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Dariaus ir Girėno g. 17, Vilnius",
        "lat": 54.6552621,
        "lng": 25.2702703,
        "prices": {
            "A95": 1.87,
            "A98": null,
            "Diesel": 1.98,
            "LPG": null
        }
    },
    {
        "id": 656,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Tauragės",
        "address": "Dariaus ir Girėno g. 130A, Tauragė",
        "lat": 55.2653157,
        "lng": 22.3088337,
        "prices": {
            "A95": 1.85,
            "A98": null,
            "Diesel": 1.96,
            "LPG": null
        }
    },
    {
        "id": 657,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Kaunas",
        "address": "Birželio 23-iosios g. 23A, Kaunas",
        "lat": 54.9159784,
        "lng": 23.9535991,
        "prices": {
            "A95": 1.82,
            "A98": null,
            "Diesel": 1.97,
            "LPG": null
        }
    },
    {
        "id": 658,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Kaunas",
        "address": "Ateities pl. 50B, Kaunas",
        "lat": 54.9260285,
        "lng": 24.0605624,
        "prices": {
            "A95": 1.79,
            "A98": null,
            "Diesel": 1.96,
            "LPG": null
        }
    },
    {
        "id": 659,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Klaipėda",
        "address": "Artojo g. 2, Klaipėda",
        "lat": 55.7168107,
        "lng": 21.150527,
        "prices": {
            "A95": 1.8,
            "A98": null,
            "Diesel": 1.93,
            "LPG": null
        }
    },
    {
        "id": 660,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Architektų g. 130, Vilnius",
        "lat": 54.6808398,
        "lng": 25.2076283,
        "prices": {
            "A95": 1.82,
            "A98": null,
            "Diesel": 1.94,
            "LPG": null
        }
    },
    {
        "id": 661,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Molėtų",
        "address": "Aplinkkelio g. 165, Molėtai",
        "lat": 55.2282306,
        "lng": 25.4148997,
        "prices": {
            "A95": 1.82,
            "A98": null,
            "Diesel": 1.95,
            "LPG": null
        }
    },
    {
        "id": 662,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Marijampolės",
        "address": "Stoties g. 4C, Marijampolė",
        "lat": 54.5603639,
        "lng": 23.3659257,
        "prices": {
            "A95": 1.84,
            "A98": null,
            "Diesel": 1.94,
            "LPG": null
        }
    },
    {
        "id": 663,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Kaunas",
        "address": "Vakarinis aplinkkelis 18, Kaunas",
        "lat": 54.8982139,
        "lng": 23.9044817,
        "prices": {
            "A95": 1.82,
            "A98": null,
            "Diesel": 1.97,
            "LPG": null
        }
    },
    {
        "id": 664,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Ukmergės g. 296, Vilnius",
        "lat": 54.7361438,
        "lng": 25.2311187,
        "prices": {
            "A95": 1.82,
            "A98": null,
            "Diesel": 1.96,
            "LPG": null
        }
    },
    {
        "id": 665,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Kaunas",
        "address": "Tunelio g. 26, Kaunas",
        "lat": 54.8946555,
        "lng": 23.9442777,
        "prices": {
            "A95": 1.87,
            "A98": null,
            "Diesel": 1.97,
            "LPG": null
        }
    },
    {
        "id": 666,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Šiaulių",
        "address": "Tilžės g. 72, Šiauliai",
        "lat": 55.9200839,
        "lng": 23.2932849,
        "prices": {
            "A95": 1.8,
            "A98": null,
            "Diesel": 1.93,
            "LPG": null
        }
    },
    {
        "id": 667,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Talino g. 2C, Vilnius",
        "lat": 54.7138968,
        "lng": 25.2096844,
        "prices": {
            "A95": 1.84,
            "A98": null,
            "Diesel": 1.96,
            "LPG": null
        }
    },
    {
        "id": 668,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Kaunas",
        "address": "Taikos pr. 80A, Kaunas",
        "lat": 54.9120996,
        "lng": 23.9726146,
        "prices": {
            "A95": 1.82,
            "A98": null,
            "Diesel": 1.97,
            "LPG": null
        }
    },
    {
        "id": 669,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Klaipėda",
        "address": "Taikos pr. 60, Klaipėda",
        "lat": 55.6889111,
        "lng": 21.1551766,
        "prices": {
            "A95": 1.82,
            "A98": null,
            "Diesel": 1.95,
            "LPG": null
        }
    },
    {
        "id": 670,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Subačiaus g. 64, Vilnius",
        "lat": 54.6767354,
        "lng": 25.3092992,
        "prices": {
            "A95": 1.87,
            "A98": null,
            "Diesel": 1.97,
            "LPG": null
        }
    },
    {
        "id": 671,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Kaunas",
        "address": "Vakarų g. 14, Kumpių k.",
        "lat": 54.8982139,
        "lng": 23.9044817,
        "prices": {
            "A95": 1.81,
            "A98": null,
            "Diesel": 1.98,
            "LPG": null
        }
    },
    {
        "id": 672,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Klaipėda",
        "address": "Smiltelės g. 17, Klaipėda",
        "lat": 55.6698478,
        "lng": 21.1929514,
        "prices": {
            "A95": 1.81,
            "A98": null,
            "Diesel": 1.94,
            "LPG": null
        }
    },
    {
        "id": 673,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Servečės g. 2, Vilnius",
        "lat": 54.6341739,
        "lng": 25.3045356,
        "prices": {
            "A95": 1.82,
            "A98": null,
            "Diesel": 1.94,
            "LPG": null
        }
    },
    {
        "id": 674,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Klaipėda",
        "address": "Sendvario g. 2, Sudmantų k.",
        "lat": 55.7127529,
        "lng": 21.1350469,
        "prices": {
            "A95": 1.85,
            "A98": null,
            "Diesel": 1.97,
            "LPG": null
        }
    },
    {
        "id": 675,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Kaunas",
        "address": "Savanorių pr. 441C, Kaunas",
        "lat": 54.9293519,
        "lng": 23.9734688,
        "prices": {
            "A95": 1.81,
            "A98": null,
            "Diesel": 1.96,
            "LPG": null
        }
    },
    {
        "id": 676,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Savanorių pr. 220A, Vilnius",
        "lat": 54.6440341,
        "lng": 25.2074576,
        "prices": {
            "A95": 1.82,
            "A98": null,
            "Diesel": 1.96,
            "LPG": null
        }
    },
    {
        "id": 677,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Savanorių pr. 187, Vilnius",
        "lat": 54.6468852,
        "lng": 25.2102272,
        "prices": {
            "A95": 1.82,
            "A98": null,
            "Diesel": 1.96,
            "LPG": null
        }
    },
    {
        "id": 678,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Alytaus",
        "address": "Santaikos g. 34A, Alytus",
        "lat": 54.3870841,
        "lng": 24.0262949,
        "prices": {
            "A95": 1.85,
            "A98": null,
            "Diesel": 1.96,
            "LPG": null
        }
    },
    {
        "id": 679,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Panevėžio",
        "address": "Klaipėdos g. 66,  Panevėžys",
        "lat": 55.7277452,
        "lng": 24.3488051,
        "prices": {
            "A95": 1.81,
            "A98": null,
            "Diesel": 1.95,
            "LPG": null
        }
    },
    {
        "id": 680,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Kaunas",
        "address": "Veiverių g. 132D, Kaunas",
        "lat": 54.875505,
        "lng": 23.89097,
        "prices": {
            "A95": 1.89,
            "A98": null,
            "Diesel": 1.99,
            "LPG": null
        }
    },
    {
        "id": 681,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Radviliškio",
        "address": "Versmės g. 2, Radviliškis",
        "lat": 55.8142724,
        "lng": 23.5460383,
        "prices": {
            "A95": 1.82,
            "A98": null,
            "Diesel": 1.95,
            "LPG": null
        }
    },
    {
        "id": 682,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Kaunas",
        "address": "Vijoklių g. 1C, Ramučių k.",
        "lat": 54.8982139,
        "lng": 23.9044817,
        "prices": {
            "A95": 1.81,
            "A98": null,
            "Diesel": 1.96,
            "LPG": null
        }
    },
    {
        "id": 683,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Marijampolės",
        "address": "Vilkaviškio g. 61D, Marijampolė",
        "lat": 54.5626096,
        "lng": 23.3323659,
        "prices": {
            "A95": 1.83,
            "A98": null,
            "Diesel": 1.93,
            "LPG": null
        }
    },
    {
        "id": 684,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Švenčionių",
        "address": "Vilniaus g. 94, Pabradė",
        "lat": 54.978537,
        "lng": 25.7566235,
        "prices": {
            "A95": 1.86,
            "A98": null,
            "Diesel": 1.93,
            "LPG": null
        }
    },
    {
        "id": 685,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Klaipėda",
        "address": "Vilniaus pl. 9, Jakų k.",
        "lat": 55.7127529,
        "lng": 21.1350469,
        "prices": {
            "A95": 1.84,
            "A98": null,
            "Diesel": 1.98,
            "LPG": null
        }
    },
    {
        "id": 686,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Pasvalio",
        "address": "Ąžuolpamūšio g. 1A, Raubonių k..",
        "lat": 56.0706909,
        "lng": 24.3842838,
        "prices": {
            "A95": 1.85,
            "A98": null,
            "Diesel": 1.97,
            "LPG": null
        }
    },
    {
        "id": 687,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Telšių",
        "address": "Šiaulių pl. 1A, Gaudikaičių k.",
        "lat": 56.0130975,
        "lng": 22.1366723,
        "prices": {
            "A95": 1.88,
            "A98": null,
            "Diesel": 1.96,
            "LPG": null
        }
    },
    {
        "id": 688,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Klaipėda",
        "address": "Šilutės pl. 30, Klaipėda",
        "lat": 55.6930895,
        "lng": 21.1747696,
        "prices": {
            "A95": 1.82,
            "A98": null,
            "Diesel": 1.93,
            "LPG": null
        }
    },
    {
        "id": 689,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Klaipėda",
        "address": "Šilutės pl. 5C, Klaipėda",
        "lat": 55.7031833,
        "lng": 21.1647917,
        "prices": {
            "A95": 1.83,
            "A98": null,
            "Diesel": 1.97,
            "LPG": null
        }
    },
    {
        "id": 690,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Alytaus",
        "address": "Ūdrijos g. 31, Alytus",
        "lat": 54.408962,
        "lng": 24.0051873,
        "prices": {
            "A95": 1.85,
            "A98": null,
            "Diesel": 1.96,
            "LPG": null
        }
    },
    {
        "id": 691,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Kaunas",
        "address": "Žemaičių pl. 26, Kaunas",
        "lat": 54.9255312,
        "lng": 23.8917929,
        "prices": {
            "A95": 1.86,
            "A98": null,
            "Diesel": 1.95,
            "LPG": null
        }
    },
    {
        "id": 692,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Žirmūnų g. 54C, Vilnius",
        "lat": 54.7067448,
        "lng": 25.304138,
        "prices": {
            "A95": 1.85,
            "A98": null,
            "Diesel": 1.94,
            "LPG": null
        }
    },
    {
        "id": 693,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Žirmūnų g. 68B, Vilnius",
        "lat": 54.7174439,
        "lng": 25.3044408,
        "prices": {
            "A95": 1.85,
            "A98": null,
            "Diesel": 1.94,
            "LPG": null
        }
    },
    {
        "id": 694,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Žirnių g. 17, Vilnius",
        "lat": 54.6566534,
        "lng": 25.2920381,
        "prices": {
            "A95": 1.85,
            "A98": null,
            "Diesel": 1.98,
            "LPG": null
        }
    },
    {
        "id": 695,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Panevėžio",
        "address": "Ramygalos g. 145B, Panevėžys",
        "lat": 55.709517,
        "lng": 24.3747541,
        "prices": {
            "A95": 1.82,
            "A98": null,
            "Diesel": 1.95,
            "LPG": null
        }
    },
    {
        "id": 696,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "P. Lukšio g. 22, Vilnius",
        "lat": 54.7119036,
        "lng": 25.293073,
        "prices": {
            "A95": 1.84,
            "A98": null,
            "Diesel": 1.94,
            "LPG": null
        }
    },
    {
        "id": 697,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Panerių g. 42, Vilnius",
        "lat": 54.6681843,
        "lng": 25.2651336,
        "prices": {
            "A95": 1.88,
            "A98": null,
            "Diesel": 1.95,
            "LPG": null
        }
    },
    {
        "id": 698,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Panevėžio",
        "address": "Panevėžio aplinkl. 22, Šilagalio k.",
        "lat": 55.9155086,
        "lng": 25.0309026,
        "prices": {
            "A95": 1.82,
            "A98": null,
            "Diesel": 1.94,
            "LPG": null
        }
    },
    {
        "id": 699,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Panevėžio",
        "address": "Panevėžio aplinkl. 7, Šilagalio k.",
        "lat": 55.9155086,
        "lng": 25.0309026,
        "prices": {
            "A95": 1.83,
            "A98": null,
            "Diesel": 1.95,
            "LPG": null
        }
    },
    {
        "id": 700,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Molėtų pl. 8, Vilnius",
        "lat": 54.75485,
        "lng": 25.271346,
        "prices": {
            "A95": 1.8,
            "A98": null,
            "Diesel": 1.93,
            "LPG": null
        }
    },
    {
        "id": 701,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Klaipėda",
        "address": "Minijos g. 119, Klaipėda",
        "lat": 55.6847139,
        "lng": 21.1505231,
        "prices": {
            "A95": 1.82,
            "A98": null,
            "Diesel": 1.96,
            "LPG": null
        }
    },
    {
        "id": 702,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Parodų g. 1A, Vilnius",
        "lat": 54.6734231,
        "lng": 25.2240676,
        "prices": {
            "A95": 1.83,
            "A98": null,
            "Diesel": 1.95,
            "LPG": null
        }
    },
    {
        "id": 703,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Pilaitės pr. 27, Vilnius",
        "lat": 54.7094735,
        "lng": 25.1898838,
        "prices": {
            "A95": 1.82,
            "A98": null,
            "Diesel": 1.95,
            "LPG": null
        }
    },
    {
        "id": 704,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Jonavos",
        "address": "Plento g. 7, Gudžionių k.",
        "lat": 55.1168377,
        "lng": 24.2815728,
        "prices": {
            "A95": 1.86,
            "A98": null,
            "Diesel": 1.96,
            "LPG": null
        }
    },
    {
        "id": 705,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Klaipėda",
        "address": "Plieno g. 1, Klaipėda",
        "lat": 55.6728215,
        "lng": 21.2017347,
        "prices": {
            "A95": 1.82,
            "A98": null,
            "Diesel": 1.94,
            "LPG": null
        }
    },
    {
        "id": 706,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Panevėžio",
        "address": "Margirio g. 1B, Panevėžys",
        "lat": 55.7193962,
        "lng": 24.3488668,
        "prices": {
            "A95": 1.82,
            "A98": null,
            "Diesel": 1.95,
            "LPG": null
        }
    },
    {
        "id": 707,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Mažeikių",
        "address": "M. Daukšos g. 29, Mažeikiai",
        "lat": 56.3012334,
        "lng": 22.3498409,
        "prices": {
            "A95": 1.83,
            "A98": null,
            "Diesel": 1.93,
            "LPG": null
        }
    },
    {
        "id": 708,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Kaunas",
        "address": "Pramonės pr. 6A, Kaunas",
        "lat": 54.9099418,
        "lng": 23.9837672,
        "prices": {
            "A95": 1.85,
            "A98": null,
            "Diesel": 1.97,
            "LPG": null
        }
    },
    {
        "id": 709,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Raseinių",
        "address": "Pušyno g. 11, Ylių k.",
        "lat": 55.3764559,
        "lng": 23.1988999,
        "prices": {
            "A95": 1.86,
            "A98": null,
            "Diesel": 2.01,
            "LPG": null
        }
    },
    {
        "id": 710,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Kaunas",
        "address": "R. Kalantos g. 27, Kaunas",
        "lat": 54.8950704,
        "lng": 23.9859176,
        "prices": {
            "A95": 1.86,
            "A98": null,
            "Diesel": 1.96,
            "LPG": null
        }
    },
    {
        "id": 711,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Kaunas",
        "address": "Raudondvario pl. 103, Kaunas",
        "lat": 54.9068617,
        "lng": 23.8728216,
        "prices": {
            "A95": 1.82,
            "A98": null,
            "Diesel": 1.97,
            "LPG": null
        }
    },
    {
        "id": 712,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Rygos g. 2, Vilnius",
        "lat": 54.71563,
        "lng": 25.2287063,
        "prices": {
            "A95": 1.83,
            "A98": null,
            "Diesel": 1.95,
            "LPG": null
        }
    },
    {
        "id": 713,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "S. Stanevičiaus g. 3, Vilnius",
        "lat": 54.7214903,
        "lng": 25.2561146,
        "prices": {
            "A95": 1.82,
            "A98": null,
            "Diesel": 1.94,
            "LPG": null
        }
    },
    {
        "id": 714,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Elektrėnų",
        "address": "Sabališkių g. 1U, Elektrėnai",
        "lat": 54.7890725,
        "lng": 24.6724424,
        "prices": {
            "A95": 1.88,
            "A98": null,
            "Diesel": 2.03,
            "LPG": null
        }
    },
    {
        "id": 715,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Kaunas",
        "address": "Kuršių g. 1, Kaunas",
        "lat": 54.9364848,
        "lng": 23.8863425,
        "prices": {
            "A95": 1.79,
            "A98": null,
            "Diesel": 1.97,
            "LPG": null
        }
    },
    {
        "id": 716,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Utenos",
        "address": "Kupiškio g. 12, Utena",
        "lat": 55.5042901,
        "lng": 25.5819592,
        "prices": {
            "A95": 1.84,
            "A98": null,
            "Diesel": 1.95,
            "LPG": null
        }
    },
    {
        "id": 717,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Panevėžio",
        "address": "Klaipėdos g. 81, Panevėžys",
        "lat": 55.7283773,
        "lng": 24.3323377,
        "prices": {
            "A95": 1.81,
            "A98": null,
            "Diesel": 1.95,
            "LPG": null
        }
    },
    {
        "id": 718,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Panevėžio",
        "address": "Klaipėdos g. 144B, Panevėžys",
        "lat": 55.73063,
        "lng": 24.316109,
        "prices": {
            "A95": 1.82,
            "A98": null,
            "Diesel": 1.95,
            "LPG": null
        }
    },
    {
        "id": 719,
        "name": "Nostrada (RV Transport)",
        "logo": "⛽",
        "city": "Kalvarijos",
        "address": "Kazlavo km. 4 Kalvarijos sav.",
        "lat": 54.7397108,
        "lng": 25.2804959,
        "prices": {
            "A95": 1.88,
            "A98": null,
            "Diesel": 1.98,
            "LPG": null
        }
    },
    {
        "id": 720,
        "name": "S.Savicko įmonė",
        "logo": "⛽",
        "city": "Kėdainių",
        "address": "Šėtos g. 120 , Kėdainiai",
        "lat": 55.2972995,
        "lng": 24.001282,
        "prices": {
            "A95": 1.86,
            "A98": null,
            "Diesel": 1.96,
            "LPG": null
        }
    },
    {
        "id": 721,
        "name": "Saurida",
        "logo": "⛽",
        "city": "Alytaus",
        "address": "Alytus Miškininkų g. 7",
        "lat": 55.7319393,
        "lng": 21.1423197,
        "prices": {
            "A95": 1.77,
            "A98": null,
            "Diesel": 1.94,
            "LPG": null
        }
    },
    {
        "id": 722,
        "name": "Saurida",
        "logo": "⛽",
        "city": "Prienų",
        "address": "Mauručiai Liepų g. 20",
        "lat": 54.6334424,
        "lng": 24.2204708,
        "prices": {
            "A95": 1.77,
            "A98": null,
            "Diesel": 1.88,
            "LPG": null
        }
    },
    {
        "id": 723,
        "name": "Saurida",
        "logo": "⛽",
        "city": "Vilnius",
        "address": "Čekoniškių km",
        "lat": 54.7106736,
        "lng": 25.1564879,
        "prices": {
            "A95": 1.77,
            "A98": null,
            "Diesel": 1.94,
            "LPG": null
        }
    },
    {
        "id": 724,
        "name": "Skaistčio ŽŪB",
        "logo": "⛽",
        "city": "Joniškio",
        "address": "Skaistgirys, Liepų g.22",
        "lat": 56.2246299,
        "lng": 23.4865961,
        "prices": {
            "A95": 1.79,
            "A98": null,
            "Diesel": 1.99,
            "LPG": null
        }
    },
    {
        "id": 725,
        "name": "Skulas",
        "logo": "⛽",
        "city": "Kaunas",
        "address": "Kaunas, Marvelės g. 106 D",
        "lat": 54.8982139,
        "lng": 23.9044817,
        "prices": {
            "A95": 1.8,
            "A98": null,
            "Diesel": 1.93,
            "LPG": null
        }
    },
    {
        "id": 726,
        "name": "Tomega",
        "logo": "⛽",
        "city": "Šalčininkų",
        "address": "Dumblės k.",
        "lat": 54.3173722,
        "lng": 25.2380361,
        "prices": {
            "A95": 1.95,
            "A98": null,
            "Diesel": 2.08,
            "LPG": null
        }
    },
    {
        "id": 727,
        "name": "Tomega",
        "logo": "⛽",
        "city": "Šalčininkų",
        "address": "Tartoko k.",
        "lat": 54.4568791,
        "lng": 25.2794666,
        "prices": {
            "A95": 1.95,
            "A98": null,
            "Diesel": 2.07,
            "LPG": null
        }
    },
    {
        "id": 728,
        "name": "Tormenta",
        "logo": "⛽",
        "city": "Kaunas",
        "address": "Linkuvos g. 77, Kaunas",
        "lat": 54.9142997,
        "lng": 23.8877048,
        "prices": {
            "A95": 1.79,
            "A98": null,
            "Diesel": 1.94,
            "LPG": null
        }
    },
    {
        "id": 729,
        "name": "Viada",
        "logo": "🦌",
        "city": "Vilnius",
        "address": "Vilnius, Justiniškių g. 12",
        "lat": 54.6870458,
        "lng": 25.2829111,
        "prices": {
            "A95": 1.9,
            "A98": null,
            "Diesel": 2.02,
            "LPG": null
        }
    },
    {
        "id": 730,
        "name": "Viada",
        "logo": "🦌",
        "city": "Panevėžio",
        "address": "Šilagalio k., Panevėžio aplinkl. 5",
        "lat": 55.9155086,
        "lng": 25.0309026,
        "prices": {
            "A95": 1.86,
            "A98": null,
            "Diesel": 1.98,
            "LPG": null
        }
    },
    {
        "id": 731,
        "name": "Viada",
        "logo": "🦌",
        "city": "Švenčionių",
        "address": "Kaltanėnai, Utenos g. 1",
        "lat": 55.0697365,
        "lng": 25.9983183,
        "prices": {
            "A95": 1.96,
            "A98": null,
            "Diesel": 2.08,
            "LPG": null
        }
    },
    {
        "id": 732,
        "name": "Viada",
        "logo": "🦌",
        "city": "Kaunas",
        "address": "Kaunas, Biruliškių g. 18A",
        "lat": 54.8982139,
        "lng": 23.9044817,
        "prices": {
            "A95": 1.9,
            "A98": null,
            "Diesel": 2.02,
            "LPG": null
        }
    },
    {
        "id": 733,
        "name": "Viada",
        "logo": "🦌",
        "city": "Kalvarijos",
        "address": "Pelucmurgių k., Muitinės g. 35",
        "lat": 54.7397108,
        "lng": 25.2804959,
        "prices": {
            "A95": 1.96,
            "A98": null,
            "Diesel": 2.1,
            "LPG": null
        }
    },
    {
        "id": 734,
        "name": "Viada",
        "logo": "🦌",
        "city": "Vilnius",
        "address": "Vilnius, Vilkpėdės g. 2",
        "lat": 54.6724101,
        "lng": 25.2351009,
        "prices": {
            "A95": 1.85,
            "A98": null,
            "Diesel": 1.99,
            "LPG": null
        }
    },
    {
        "id": 735,
        "name": "Viada",
        "logo": "🦌",
        "city": "Vilnius",
        "address": "Vilnius, Verkių g. 52",
        "lat": 54.6870458,
        "lng": 25.2829111,
        "prices": {
            "A95": 1.9,
            "A98": null,
            "Diesel": 2.0,
            "LPG": null
        }
    },
    {
        "id": 736,
        "name": "Vlantana",
        "logo": "⛽",
        "city": "Klaipėda",
        "address": "Dvaro g. 1, Gobergiškės k.",
        "lat": 55.7127529,
        "lng": 21.1350469,
        "prices": {
            "A95": 1.78,
            "A98": null,
            "Diesel": 1.96,
            "LPG": null
        }
    },
    {
        "id": 737,
        "name": "Deguva",
        "logo": "⛽",
        "city": "Kaunas",
        "address": "Raudondvario pl.234,Kaunas",
        "lat": 54.9209907,
        "lng": 23.8246861,
        "prices": {
            "A95": null,
            "A98": null,
            "Diesel": null,
            "LPG": 0.88
        }
    },
    {
        "id": 738,
        "name": "DVS Topolis",
        "logo": "⛽",
        "city": "Rokiškio",
        "address": "Panevėžio 7c, Rokiškis",
        "lat": 55.9430601,
        "lng": 25.5856573,
        "prices": {
            "A95": null,
            "A98": null,
            "Diesel": null,
            "LPG": 0.96
        }
    },
    {
        "id": 739,
        "name": "Gazimpeksas",
        "logo": "⛽",
        "city": "Telšių",
        "address": "Telšiai, Mažeikių g. 7A",
        "lat": 56.0130975,
        "lng": 22.1366723,
        "prices": {
            "A95": null,
            "A98": null,
            "Diesel": null,
            "LPG": 0.85
        }
    },
    {
        "id": 740,
        "name": "Gazimpeksas",
        "logo": "⛽",
        "city": "Skuodo",
        "address": "Skuodas,Vytauto g. 20",
        "lat": 56.2274045,
        "lng": 21.6899322,
        "prices": {
            "A95": null,
            "A98": null,
            "Diesel": null,
            "LPG": 0.85
        }
    },
    {
        "id": 741,
        "name": "Jozita",
        "logo": "🟡",
        "city": "Šilutės",
        "address": "Šilutė, Šiaurės g. 1",
        "lat": 55.3750109,
        "lng": 21.5403978,
        "prices": {
            "A95": null,
            "A98": null,
            "Diesel": null,
            "LPG": 0.83
        }
    },
    {
        "id": 742,
        "name": "Jozita",
        "logo": "🟡",
        "city": "Vilnius",
        "address": "Vilnius, Baltosios Vokės g 35",
        "lat": 54.6870458,
        "lng": 25.2829111,
        "prices": {
            "A95": null,
            "A98": null,
            "Diesel": null,
            "LPG": 0.83
        }
    },
    {
        "id": 743,
        "name": "Jozita",
        "logo": "🟡",
        "city": "Raseinių",
        "address": "Raseiniai, Liepų g. 10e",
        "lat": 55.3764559,
        "lng": 23.1988999,
        "prices": {
            "A95": null,
            "A98": null,
            "Diesel": null,
            "LPG": 0.83
        }
    },
    {
        "id": 744,
        "name": "Jozita",
        "logo": "🟡",
        "city": "Klaipėda",
        "address": "Klaipėda, Priestočio g. 26",
        "lat": 55.7127529,
        "lng": 21.1350469,
        "prices": {
            "A95": null,
            "A98": null,
            "Diesel": null,
            "LPG": 0.83
        }
    },
    {
        "id": 745,
        "name": "Madalva",
        "logo": "⛽",
        "city": "Plungės",
        "address": "Plungė , Lentpjūvės g.10A",
        "lat": 55.953916,
        "lng": 21.8335407,
        "prices": {
            "A95": null,
            "A98": null,
            "Diesel": null,
            "LPG": 0.83
        }
    },
    {
        "id": 746,
        "name": "Madalva",
        "logo": "⛽",
        "city": "Tauragės",
        "address": "Tauragė , Pramonės g.10A",
        "lat": 55.3564378,
        "lng": 22.405222,
        "prices": {
            "A95": null,
            "A98": null,
            "Diesel": null,
            "LPG": 0.83
        }
    },
    {
        "id": 747,
        "name": "Madalva",
        "logo": "⛽",
        "city": "Tauragės",
        "address": "Tauragė , Dariaus ir Girėno g.49",
        "lat": 55.3564378,
        "lng": 22.405222,
        "prices": {
            "A95": null,
            "A98": null,
            "Diesel": null,
            "LPG": 0.83
        }
    },
    {
        "id": 748,
        "name": "Madalva",
        "logo": "⛽",
        "city": "Šilalės",
        "address": "Gineikių k.",
        "lat": 55.5252224,
        "lng": 22.2160078,
        "prices": {
            "A95": null,
            "A98": null,
            "Diesel": null,
            "LPG": 0.84
        }
    },
    {
        "id": 749,
        "name": "Neste Lietuva",
        "logo": "🟢",
        "city": "Kalvarijos",
        "address": "Europos g. 6, N.Valios k.",
        "lat": 54.7397108,
        "lng": 25.2804959,
        "prices": {
            "A95": null,
            "A98": null,
            "Diesel": 1.97,
            "LPG": null
        }
    },
    {
        "id": 750,
        "name": "Osijos dujos",
        "logo": "⛽",
        "city": "Vilkaviškio",
        "address": "Pamiškės g. 1, Osijos k.",
        "lat": 54.5770716,
        "lng": 22.9419043,
        "prices": {
            "A95": null,
            "A98": null,
            "Diesel": null,
            "LPG": 0.92
        }
    },
    {
        "id": 751,
        "name": "Plovimo sistemos",
        "logo": "⛽",
        "city": "Šiaulių",
        "address": "Gegužių g. 28",
        "lat": 55.9059107,
        "lng": 23.2587205,
        "prices": {
            "A95": null,
            "A98": null,
            "Diesel": null,
            "LPG": 0.91
        }
    },
    {
        "id": 752,
        "name": "RV",
        "logo": "⛽",
        "city": "Mažeikių",
        "address": "Algirdo g. 42, Mažeikiai",
        "lat": 56.3185082,
        "lng": 22.3181309,
        "prices": {
            "A95": null,
            "A98": null,
            "Diesel": null,
            "LPG": 0.88
        }
    },
    {
        "id": 753,
        "name": "RV",
        "logo": "⛽",
        "city": "Švenčionių",
        "address": "Mokyklos g. 23, Švenčionys",
        "lat": 55.137806,
        "lng": 26.155728,
        "prices": {
            "A95": null,
            "A98": null,
            "Diesel": null,
            "LPG": 0.93
        }
    },
    {
        "id": 754,
        "name": "RV",
        "logo": "⛽",
        "city": "Mažeikių",
        "address": "Daukšos g. 29/Žemaitijos g. 69, Mažeikiai",
        "lat": 56.2596823,
        "lng": 22.2867095,
        "prices": {
            "A95": null,
            "A98": null,
            "Diesel": null,
            "LPG": 0.87
        }
    },
    {
        "id": 755,
        "name": "Saurida",
        "logo": "⛽",
        "city": "Kalvarijos",
        "address": "Kreivukės km.",
        "lat": 54.7397108,
        "lng": 25.2804959,
        "prices": {
            "A95": null,
            "A98": null,
            "Diesel": null,
            "LPG": 0.86
        }
    },
    {
        "id": 756,
        "name": "Saurida",
        "logo": "⛽",
        "city": "Vilnius",
        "address": "Vilnius Stanevičiaus g. 3A",
        "lat": 54.6870458,
        "lng": 25.2829111,
        "prices": {
            "A95": null,
            "A98": null,
            "Diesel": null,
            "LPG": 0.84
        }
    },
    {
        "id": 757,
        "name": "Saurida",
        "logo": "⛽",
        "city": "Vilnius",
        "address": "Vilnius, Rygos g. 2",
        "lat": 54.6870458,
        "lng": 25.2829111,
        "prices": {
            "A95": null,
            "A98": null,
            "Diesel": null,
            "LPG": 0.86
        }
    },
    {
        "id": 758,
        "name": "Topgas",
        "logo": "⛽",
        "city": "Kupiškio",
        "address": "Slavinčiškio g.18, Slavinčiškis",
        "lat": 55.8324305,
        "lng": 25.0200782,
        "prices": {
            "A95": null,
            "A98": null,
            "Diesel": null,
            "LPG": 0.85
        }
    },
    {
        "id": 759,
        "name": "Topgas",
        "logo": "⛽",
        "city": "Pasvalio",
        "address": "Stoties g.25, Pasvalys",
        "lat": 56.0673047,
        "lng": 24.3859087,
        "prices": {
            "A95": null,
            "A98": null,
            "Diesel": null,
            "LPG": 0.85
        }
    },
    {
        "id": 760,
        "name": "Topgas",
        "logo": "⛽",
        "city": "Marijampolės",
        "address": "Gėlyno g.25, Marijampolė",
        "lat": 54.5817953,
        "lng": 23.3672622,
        "prices": {
            "A95": null,
            "A98": null,
            "Diesel": null,
            "LPG": 0.9
        }
    },
    {
        "id": 761,
        "name": "Topgas",
        "logo": "⛽",
        "city": "Kaišiadorių",
        "address": "Paukštininkų g.13, Kaišiadorys",
        "lat": 54.865105,
        "lng": 24.434153,
        "prices": {
            "A95": null,
            "A98": null,
            "Diesel": null,
            "LPG": 0.87
        }
    },
    {
        "id": 762,
        "name": "Utentra",
        "logo": "⛽",
        "city": "Utenos",
        "address": "Utena, Pramonės g. 16",
        "lat": 55.5277248,
        "lng": 25.2821151,
        "prices": {
            "A95": null,
            "A98": null,
            "Diesel": 1.85,
            "LPG": null
        }
    }
];