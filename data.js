// Automatiškai sugeneruoti duomenys iš LEA API (via Playwright)
const lastUpdated = '2026-08-26';
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
        "name": "Orlen",
        "logo": "🦅",
        "city": "Alytaus",
        "address": "Alytus, Kauno g. 73, 62107",
        "lat": 54.40333915,
        "lng": 24.03722399,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.959,
            "LPG": 0.699
        },
        "id": 1
    },
    {
        "name": "Orlen",
        "logo": "🦅",
        "city": "Kaunas",
        "address": "Kaunas, Pramonės pr. 37, 51271",
        "lat": 54.91585276,
        "lng": 23.98422079,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.959,
            "LPG": 0.699
        },
        "id": 2
    },
    {
        "name": "Orlen",
        "logo": "🦅",
        "city": "Kaunas",
        "address": "Kaunas, Varnių g. 50, 48401",
        "lat": 54.9140172,
        "lng": 23.90678036,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.959,
            "LPG": 0.699
        },
        "id": 3
    },
    {
        "name": "Orlen",
        "logo": "🦅",
        "city": "Marijampolės",
        "address": "Aleksandravo k., 68100",
        "lat": 54.58308722,
        "lng": 23.37086423,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.959,
            "LPG": 0.699
        },
        "id": 4
    },
    {
        "name": "Orlen",
        "logo": "🦅",
        "city": "Klaipėda",
        "address": "Jakų k., Vilniaus pl. 13, 92498",
        "lat": 55.7078271,
        "lng": 21.24580407,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.959,
            "LPG": 0.699
        },
        "id": 5
    },
    {
        "name": "Orlen",
        "logo": "🦅",
        "city": "Kaunas",
        "address": "Biruliškių k., 54469",
        "lat": 54.93243935,
        "lng": 23.99547918,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.959,
            "LPG": 0.699
        },
        "id": 6
    },
    {
        "name": "Orlen",
        "logo": "🦅",
        "city": "Kaunas",
        "address": "Kaunas, Veiverių g. 148B, 46392",
        "lat": 54.86744108,
        "lng": 23.88743718,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.959,
            "LPG": 0.699
        },
        "id": 7
    },
    {
        "name": "Orlen",
        "logo": "🦅",
        "city": "Kaunas",
        "address": "Kaunas, Kalvarijos g. 138, 46403",
        "lat": 54.8509628,
        "lng": 23.84277086,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.959,
            "LPG": 0.699
        },
        "id": 8
    },
    {
        "name": "Orlen",
        "logo": "🦅",
        "city": "Elektrėnų",
        "address": "Kakliniškių k., Žilvičių g. 1A, 26138",
        "lat": 54.79091383,
        "lng": 24.6705793,
        "prices": {
            "A95": 1.759,
            "A98": null,
            "Diesel": 2.049,
            "LPG": 0.739
        },
        "id": 9
    },
    {
        "name": "Orlen",
        "logo": "🦅",
        "city": "Klaipėda",
        "address": "Klaipėda, Minijos g. 44, 91197",
        "lat": 55.69402922,
        "lng": 21.14043635,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.959,
            "LPG": 0.699
        },
        "id": 10
    },
    {
        "name": "Orlen",
        "logo": "🦅",
        "city": "Mažeikių",
        "address": "Mažeikiai, Skuodo g. 14, 89100",
        "lat": 56.31431341,
        "lng": 22.31135742,
        "prices": {
            "A95": 1.719,
            "A98": null,
            "Diesel": 1.969,
            "LPG": 0.719
        },
        "id": 11
    },
    {
        "name": "Orlen",
        "logo": "🦅",
        "city": "Mažeikių",
        "address": "Mažeikiai, Žemaitijos g. 42, 89239",
        "lat": 56.30221098,
        "lng": 22.34252436,
        "prices": {
            "A95": 1.719,
            "A98": null,
            "Diesel": 1.969,
            "LPG": 0.719
        },
        "id": 12
    },
    {
        "name": "Orlen",
        "logo": "🦅",
        "city": "Tauragės",
        "address": "Tauragė, Gedimino g. 46, 72336",
        "lat": 55.24419352,
        "lng": 22.30366066,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.959,
            "LPG": 0.699
        },
        "id": 13
    },
    {
        "name": "Orlen",
        "logo": "🦅",
        "city": "Vilnius",
        "address": "Vilnius, Juodasis kl. 32, 11307",
        "lat": 54.6630527,
        "lng": 25.34233266,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.959,
            "LPG": 0.699
        },
        "id": 14
    },
    {
        "name": "Orlen",
        "logo": "🦅",
        "city": "Vilnius",
        "address": "Vilnius, O. Milašiaus g. 31, 10102",
        "lat": 54.7283229,
        "lng": 25.32769699,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.959,
            "LPG": 0.699
        },
        "id": 15
    },
    {
        "name": "Orlen",
        "logo": "🦅",
        "city": "Vilnius",
        "address": "Vilnius, Ukmergės g. 319, 06305",
        "lat": 54.73702639,
        "lng": 25.23212033,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.959,
            "LPG": 0.699
        },
        "id": 16
    },
    {
        "name": "Orlen",
        "logo": "🦅",
        "city": "Vilnius",
        "address": "Vilnius, Žirmūnų g. 1T, 09239",
        "lat": 54.6958937,
        "lng": 25.2997947,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.959,
            "LPG": 0.699
        },
        "id": 17
    },
    {
        "name": "Orlen",
        "logo": "🦅",
        "city": "Telšių",
        "address": "Telšiai, Plungės g. 33 D, 87329",
        "lat": 55.97928106,
        "lng": 22.2266501,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.959,
            "LPG": 0.699
        },
        "id": 18
    },
    {
        "name": "Orlen",
        "logo": "🦅",
        "city": "Šiaulių",
        "address": "Šiauliai, Serbentų g. 82, 77126",
        "lat": 55.91387792,
        "lng": 23.3370541,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.959,
            "LPG": 0.699
        },
        "id": 19
    },
    {
        "name": "Orlen",
        "logo": "🦅",
        "city": "Raseinių",
        "address": "Nemakščių apyl., Pikelių k. 6, 60375",
        "lat": 55.46458563,
        "lng": 22.68468183,
        "prices": {
            "A95": 1.829,
            "A98": null,
            "Diesel": 2.129,
            "LPG": 0.729
        },
        "id": 20
    },
    {
        "name": "Orlen",
        "logo": "🦅",
        "city": "Raseinių",
        "address": "Pikelių k. 8, 60375",
        "lat": 55.46455832,
        "lng": 22.68467026,
        "prices": {
            "A95": 1.829,
            "A98": null,
            "Diesel": 2.129,
            "LPG": 0.729
        },
        "id": 21
    },
    {
        "name": "Orlen",
        "logo": "🦅",
        "city": "Prienų",
        "address": "Verbyliškių k., Alytaus g. 2, 59431",
        "lat": 54.57908431,
        "lng": 24.17043753,
        "prices": {
            "A95": 1.759,
            "A98": null,
            "Diesel": 2.059,
            "LPG": 0.729
        },
        "id": 22
    },
    {
        "name": "Orlen",
        "logo": "🦅",
        "city": "Panevėžio",
        "address": "Nausodė, Šiaulių g. 50, 38366",
        "lat": 55.73395012,
        "lng": 24.26358364,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.959,
            "LPG": 0.699
        },
        "id": 23
    },
    {
        "name": "Orlen",
        "logo": "🦅",
        "city": "Panevėžio",
        "address": "Panevėžys, Klaipėdos g. 162 D, 37372",
        "lat": 55.73181631,
        "lng": 24.30314301,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.959,
            "LPG": 0.699
        },
        "id": 24
    },
    {
        "name": "Orlen",
        "logo": "🦅",
        "city": "Panevėžio",
        "address": "Panevėžys, Senamiesčio g. 115, 35114",
        "lat": 55.74831082,
        "lng": 24.39088063,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.959,
            "LPG": 0.699
        },
        "id": 25
    },
    {
        "name": "Orlen",
        "logo": "🦅",
        "city": "Kretingos",
        "address": "Vilimiškės k., 97220",
        "lat": 55.90330766,
        "lng": 21.10564714,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.959,
            "LPG": 0.699
        },
        "id": 26
    },
    {
        "name": "Orlen",
        "logo": "🦅",
        "city": "Klaipėda",
        "address": "Klaipėda, Šilutės pl. 94, 95264",
        "lat": 55.69859274,
        "lng": 21.16732402,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.959,
            "LPG": 0.699
        },
        "id": 27
    },
    {
        "name": "Orlen",
        "logo": "🦅",
        "city": "Klaipėda",
        "address": "Klaipėda, Šilutės pl. 26A, 91177",
        "lat": 55.6985726,
        "lng": 21.1673283,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.959,
            "LPG": 0.699
        },
        "id": 28
    },
    {
        "name": "Orlen",
        "logo": "🦅",
        "city": "Kaunas",
        "address": "Ringaudų k., Beržų g. 2N, 53335",
        "lat": 54.88867225,
        "lng": 23.81845076,
        "prices": {
            "A95": 1.759,
            "A98": null,
            "Diesel": 2.029,
            "LPG": 0.729
        },
        "id": 29
    },
    {
        "name": "Orlen",
        "logo": "🦅",
        "city": "Kaišiadorių",
        "address": "Žiežmarių k., Kauno pl. 6, 56232",
        "lat": 54.8162686,
        "lng": 24.43314197,
        "prices": {
            "A95": 1.759,
            "A98": null,
            "Diesel": 2.049,
            "LPG": 0.739
        },
        "id": 30
    },
    {
        "name": "Pynauja",
        "logo": "⛽",
        "city": "Šilalės",
        "address": "Kvėdarna, Papynaujo k., Dvaro g. 1, 75342",
        "lat": 55.56638461,
        "lng": 21.99570763,
        "prices": {
            "A95": 1.74,
            "A98": null,
            "Diesel": 2.03,
            "LPG": 0.8
        },
        "id": 31
    },
    {
        "name": "I.Stonkuvienės prekybos įmonė",
        "logo": "⛽",
        "city": "Kretingos",
        "address": "Kartena, Kretingos g. 51, 97351",
        "lat": 55.9169838,
        "lng": 21.4675181,
        "prices": {
            "A95": 1.89,
            "A98": null,
            "Diesel": 2.12,
            "LPG": null
        },
        "id": 32
    },
    {
        "name": "IĮ A. Praškevičiaus",
        "logo": "⛽",
        "city": "Kaišiadorių",
        "address": "Migonių k., Kalvių g. 4, 56292",
        "lat": 54.72598846,
        "lng": 24.23618661,
        "prices": {
            "A95": 1.74,
            "A98": null,
            "Diesel": 1.99,
            "LPG": 0.72
        },
        "id": 33
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
            "Diesel": 2.07,
            "LPG": 0.79
        },
        "id": 34
    },
    {
        "name": "IĮ Raimondo Balsio",
        "logo": "⛽",
        "city": "Kelmės",
        "address": "Ramučių k., Luokės g. 2, 86377",
        "lat": 55.83034343,
        "lng": 22.85339056,
        "prices": {
            "A95": 1.82,
            "A98": null,
            "Diesel": 2.05,
            "LPG": 0.83
        },
        "id": 35
    },
    {
        "name": "IĮ V.Marcinkevičiaus",
        "logo": "⛽",
        "city": "Šilutės",
        "address": "Pavilnučio k., Bažnyčios g. 7, 99392",
        "lat": 55.51381701,
        "lng": 21.6098326,
        "prices": {
            "A95": 1.79,
            "A98": null,
            "Diesel": 2.08,
            "LPG": 0.74
        },
        "id": 36
    },
    {
        "name": "Lašų žemės ūkio bendrovė",
        "logo": "⛽",
        "city": "Rokiškio",
        "address": "Vytėnai, Vytėnų vs 9, 42255",
        "lat": 55.8578166,
        "lng": 25.73192538,
        "prices": {
            "A95": 1.87,
            "A98": null,
            "Diesel": 2.17,
            "LPG": null
        },
        "id": 37
    },
    {
        "name": "Tormenta",
        "logo": "⛽",
        "city": "Kaunas",
        "address": "Kaunas, Linkuvos g. 77, 48314",
        "lat": 54.6872,
        "lng": 25.2797,
        "prices": {
            "A95": 1.79,
            "A98": null,
            "Diesel": 2.02,
            "LPG": null
        },
        "id": 38
    },
    {
        "name": "S.Savicko įmonė",
        "logo": "⛽",
        "city": "Kėdainių",
        "address": "Kėdainiai, Šėtos g. 120, 58115",
        "lat": 55.2972995,
        "lng": 24.001282,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 2.109,
            "LPG": null
        },
        "id": 39
    },
    {
        "name": "S.Savicko įmonė",
        "logo": "⛽",
        "city": "Kėdainių",
        "address": "Kėdainiai, Dariaus ir Girėno 23 A, 57149",
        "lat": 55.31303444,
        "lng": 23.97790383,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 2.109,
            "LPG": 0.77
        },
        "id": 40
    },
    {
        "name": "S.Savicko įmonė",
        "logo": "⛽",
        "city": "Kėdainių",
        "address": "Kėdainiai, Gedimino g. 50, 57309",
        "lat": 55.2914644,
        "lng": 23.96104847,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 2.109,
            "LPG": 0.77
        },
        "id": 41
    },
    {
        "name": "S.Savicko įmonė",
        "logo": "⛽",
        "city": "Kėdainių",
        "address": "Saviečių k., Vandžiogalos g. 29, 58151",
        "lat": 55.16694613,
        "lng": 23.99479742,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 2.109,
            "LPG": 0.77
        },
        "id": 42
    },
    {
        "name": "Sigito Rimkevičiaus komercinė įmonė",
        "logo": "⛽",
        "city": "Joniškio",
        "address": "Joniškis, Turgaus g. 3, 84172",
        "lat": 56.22890581,
        "lng": 23.61009591,
        "prices": {
            "A95": 1.729,
            "A98": null,
            "Diesel": 2.009,
            "LPG": 0.729
        },
        "id": 43
    },
    {
        "name": "Sigito Rimkevičiaus komercinė įmonė",
        "logo": "⛽",
        "city": "Kėdainių",
        "address": "Pelėdnagiai, Miškininkų g. 14, 58163",
        "lat": 55.25255387,
        "lng": 23.96797453,
        "prices": {
            "A95": 1.809,
            "A98": null,
            "Diesel": 2.109,
            "LPG": 0.779
        },
        "id": 44
    },
    {
        "name": "Adukesta",
        "logo": "⛽",
        "city": "Klaipėda",
        "address": "Maciuičių k., Laisvės g. 50, 96159",
        "lat": 55.69353278,
        "lng": 21.41399033,
        "prices": {
            "A95": 1.82,
            "A98": null,
            "Diesel": 2.12,
            "LPG": 0.77
        },
        "id": 45
    },
    {
        "name": "Alauša",
        "logo": "⛽",
        "city": "Anykščių",
        "address": "Anykščiai, A. Vienuolio g. 32A, 29149",
        "lat": 55.52255492,
        "lng": 25.08965407,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.959,
            "LPG": 0.669
        },
        "id": 46
    },
    {
        "name": "Alauša",
        "logo": "⛽",
        "city": "Ukmergės",
        "address": "Ukmergė, Kauno g. 37, 20120",
        "lat": 55.24422122,
        "lng": 24.74978876,
        "prices": {
            "A95": 1.694,
            "A98": null,
            "Diesel": 1.984,
            "LPG": 0.694
        },
        "id": 47
    },
    {
        "name": "Alauša",
        "logo": "⛽",
        "city": "Vilnius",
        "address": "Vilnius, Kalvarijų g. 204G, 08247",
        "lat": 54.7209466,
        "lng": 25.28481687,
        "prices": {
            "A95": 1.694,
            "A98": null,
            "Diesel": 1.954,
            "LPG": 0.694
        },
        "id": 48
    },
    {
        "name": "Alauša",
        "logo": "⛽",
        "city": "Marijampolės",
        "address": "Marijampolė, Stoties g. 49, 68261",
        "lat": 54.56213662,
        "lng": 23.36640412,
        "prices": {
            "A95": 1.694,
            "A98": null,
            "Diesel": 1.959,
            "LPG": 0.669
        },
        "id": 49
    },
    {
        "name": "Alauša",
        "logo": "⛽",
        "city": "Vilnius",
        "address": "Grigiškės, Vilniaus g. 8, 27101",
        "lat": 54.67731309,
        "lng": 25.07888331,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.699
        },
        "id": 50
    },
    {
        "name": "Alauša",
        "logo": "⛽",
        "city": "Utenos",
        "address": "Utena, Palijoniškio g. 1, 28183",
        "lat": 55.5118318,
        "lng": 25.59995261,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.699
        },
        "id": 51
    },
    {
        "name": "Alauša",
        "logo": "⛽",
        "city": "Ignalinos",
        "address": "Ignalina, Švenčionių g. 29A, 30132",
        "lat": 55.33210138,
        "lng": 26.16708676,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.959,
            "LPG": 0.669
        },
        "id": 52
    },
    {
        "name": "Alauša",
        "logo": "⛽",
        "city": "Marijampolės",
        "address": "Marijampolė, Sporto g. 50A, 68110",
        "lat": 54.56607355,
        "lng": 23.38045057,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.959,
            "LPG": null
        },
        "id": 53
    },
    {
        "name": "Alauša",
        "logo": "⛽",
        "city": "Visagino",
        "address": "Visaginas, Kosmoso g. 3, 31142",
        "lat": 55.59919455,
        "lng": 26.42003012,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.959,
            "LPG": 0.669
        },
        "id": 54
    },
    {
        "name": "Alauša",
        "logo": "⛽",
        "city": "Vilnius",
        "address": "Vilnius, Buivydiškių g. 5, 07171",
        "lat": 54.71083857,
        "lng": 25.240395,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.959,
            "LPG": null
        },
        "id": 55
    },
    {
        "name": "Alauša",
        "logo": "⛽",
        "city": "Šalčininkų",
        "address": "Skraičionys, Skraičionių g. 1, 17140",
        "lat": 54.20415359,
        "lng": 25.62109381,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.799
        },
        "id": 56
    },
    {
        "name": "Alauša",
        "logo": "⛽",
        "city": "Rokiškio",
        "address": "Obeliai, Dariaus ir Girėno g. 36, 42209",
        "lat": 55.94861185,
        "lng": 25.81422087,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.959,
            "LPG": null
        },
        "id": 57
    },
    {
        "name": "Alauša",
        "logo": "⛽",
        "city": "Kaunas",
        "address": "Kaunas, Palemono g. 171, 52107",
        "lat": 54.92348811,
        "lng": 24.07211322,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.959,
            "LPG": null
        },
        "id": 58
    },
    {
        "name": "Alauša",
        "logo": "⛽",
        "city": "Vilnius",
        "address": "Vilnius, Laisvės pr. 125A, 06118",
        "lat": 54.72763704,
        "lng": 25.23519729,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.959,
            "LPG": null
        },
        "id": 59
    },
    {
        "name": "Alauša",
        "logo": "⛽",
        "city": "Vilnius",
        "address": "Vilnius, Šv. Stepono g. 44, 01312",
        "lat": 54.66909614,
        "lng": 25.27854118,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.959,
            "LPG": null
        },
        "id": 60
    },
    {
        "name": "Alauša",
        "logo": "⛽",
        "city": "Šiaulių",
        "address": "Kairiai, Plento g. 2B, 80114",
        "lat": 55.92021973,
        "lng": 23.42593712,
        "prices": {
            "A95": 1.749,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.699
        },
        "id": 61
    },
    {
        "name": "Andopas",
        "logo": "⛽",
        "city": "Šilutės",
        "address": "Šilutė, Ramučių g. 43, 99150",
        "lat": 55.35879495,
        "lng": 21.50333955,
        "prices": {
            "A95": 1.72,
            "A98": null,
            "Diesel": 1.98,
            "LPG": 0.72
        },
        "id": 62
    },
    {
        "name": "Antivis",
        "logo": "⛽",
        "city": "Kelmės",
        "address": "Tytuvėnai, Žemaitės g. 14, 86490",
        "lat": 55.59400851,
        "lng": 23.17958449,
        "prices": {
            "A95": 1.88,
            "A98": null,
            "Diesel": 2.14,
            "LPG": 0.79
        },
        "id": 63
    },
    {
        "name": "Apsaga",
        "logo": "⛽",
        "city": "Radviliškio",
        "address": "Baisogalos k., Beržų g. 19, 82323",
        "lat": 55.6345988,
        "lng": 23.73338104,
        "prices": {
            "A95": 1.804,
            "A98": null,
            "Diesel": 2.074,
            "LPG": 0.775
        },
        "id": 64
    },
    {
        "name": "Apsaga",
        "logo": "⛽",
        "city": "Šiaulių",
        "address": "Šiauliai, Pramonės g. 3A, 78140",
        "lat": 55.91809812,
        "lng": 23.29757432,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 2.059,
            "LPG": 0.759
        },
        "id": 65
    },
    {
        "name": "Apsaga",
        "logo": "⛽",
        "city": "Joniškio",
        "address": "Radikių k., 13, 84164",
        "lat": 56.20731459,
        "lng": 23.58029994,
        "prices": {
            "A95": 1.764,
            "A98": null,
            "Diesel": 2.034,
            "LPG": 0.779
        },
        "id": 66
    },
    {
        "name": "Apsaga",
        "logo": "⛽",
        "city": "Šiaulių",
        "address": "Šiauliai, Pramonės g. 28, 77116",
        "lat": 55.90496011,
        "lng": 23.3280691,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 2.059,
            "LPG": null
        },
        "id": 67
    },
    {
        "name": "Apsaga",
        "logo": "⛽",
        "city": "Šiaulių",
        "address": "Šiauliai, Vilniaus g. 16, 76265",
        "lat": 55.92360097,
        "lng": 23.35025761,
        "prices": {
            "A95": 1.789,
            "A98": null,
            "Diesel": 2.049,
            "LPG": 0.755
        },
        "id": 68
    },
    {
        "name": "Apsaga",
        "logo": "⛽",
        "city": "Radviliškio",
        "address": "Radviliškis, Šiaulių g. 12, 82142",
        "lat": 55.8154361,
        "lng": 23.54351198,
        "prices": {
            "A95": 1.824,
            "A98": null,
            "Diesel": 2.109,
            "LPG": 0.769
        },
        "id": 69
    },
    {
        "name": "Atsiauta",
        "logo": "⛽",
        "city": "Šiaulių",
        "address": "Kuršėnai, Vytauto g. 80, 81146",
        "lat": 56.01488869,
        "lng": 22.95124646,
        "prices": {
            "A95": 1.79,
            "A98": null,
            "Diesel": 2.09,
            "LPG": 0.76
        },
        "id": 70
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
            "Diesel": 1.995,
            "LPG": null
        },
        "id": 71
    },
    {
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Panevėžio",
        "address": "Panevėžys, Velžio kl. 74, 36148",
        "lat": 55.72192931,
        "lng": 24.39146228,
        "prices": {
            "A95": 1.819,
            "A98": null,
            "Diesel": 2.049,
            "LPG": 0.719
        },
        "id": 72
    },
    {
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Alytaus",
        "address": "Alytus, Santaikos g. 33, 62100",
        "lat": 54.38674968,
        "lng": 24.03291319,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.989,
            "LPG": 0.719
        },
        "id": 73
    },
    {
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Marijampolės",
        "address": "Marijampolė, P. Armino g. 69, 68127",
        "lat": 54.53386654,
        "lng": 23.35330631,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.699
        },
        "id": 74
    },
    {
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Telšių",
        "address": "Telšiai, Šiaulių pl. 12, 88101",
        "lat": 56.00404657,
        "lng": 22.24472049,
        "prices": {
            "A95": 1.809,
            "A98": null,
            "Diesel": 2.109,
            "LPG": 0.779
        },
        "id": 75
    },
    {
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Kėdainių",
        "address": "Kėdainiai, J. Basanavičiaus g. 95B, 57352",
        "lat": 55.27702438,
        "lng": 23.95582653,
        "prices": {
            "A95": 1.849,
            "A98": null,
            "Diesel": 2.149,
            "LPG": 0.799
        },
        "id": 76
    },
    {
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Klaipėda",
        "address": "Klaipėda, Tilžės g. 90, 91101",
        "lat": 55.70069671,
        "lng": 21.19891436,
        "prices": {
            "A95": 1.749,
            "A98": null,
            "Diesel": 2.039,
            "LPG": 0.729
        },
        "id": 77
    },
    {
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Mažeikių",
        "address": "Mažeikiai, M. Daukšos g. 17, 89234",
        "lat": 56.30505361,
        "lng": 22.35098426,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 2.029,
            "LPG": 0.739
        },
        "id": 78
    },
    {
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Molėtų",
        "address": "Molėtai, Vilniaus g. 104, 33114",
        "lat": 55.21741912,
        "lng": 25.40343537,
        "prices": {
            "A95": 1.809,
            "A98": null,
            "Diesel": 2.109,
            "LPG": 0.799
        },
        "id": 79
    },
    {
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Širvintų",
        "address": "Širvintos, Musninkų g. 21, 19126",
        "lat": 55.03227678,
        "lng": 24.96719053,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.979,
            "LPG": 0.719
        },
        "id": 80
    },
    {
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Ukmergės",
        "address": "Ukmergė, Kauno g. 49, 20115",
        "lat": 55.24093222,
        "lng": 24.7397265,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.989,
            "LPG": 0.699
        },
        "id": 81
    },
    {
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Druskininkų",
        "address": "Druskininkai, Gardino g. 79, 69191",
        "lat": 53.99978044,
        "lng": 23.98786677,
        "prices": {
            "A95": 1.879,
            "A98": null,
            "Diesel": 2.179,
            "LPG": 0.819
        },
        "id": 82
    },
    {
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Klaipėda",
        "address": "Klaipėda, Liepų g. 79A, 92195",
        "lat": 55.72092335,
        "lng": 21.15287961,
        "prices": {
            "A95": 1.739,
            "A98": null,
            "Diesel": 2.029,
            "LPG": 0.729
        },
        "id": 83
    },
    {
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Marijampolės",
        "address": "Pietarių k., Kauno g. 164, 68100",
        "lat": 54.58697587,
        "lng": 23.38447536,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.709
        },
        "id": 84
    },
    {
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Mažeikių",
        "address": "Užežerės k., Gardenio g. 39, 89382",
        "lat": 56.16391283,
        "lng": 22.10157612,
        "prices": {
            "A95": 1.819,
            "A98": null,
            "Diesel": 2.119,
            "LPG": 0.749
        },
        "id": 85
    },
    {
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Vilnius",
        "address": "Vilnius, Gerosios Vilties g. 33, 03202",
        "lat": 54.66681545,
        "lng": 25.25087372,
        "prices": {
            "A95": 1.819,
            "A98": null,
            "Diesel": 2.119,
            "LPG": 0.799
        },
        "id": 86
    },
    {
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Vilnius",
        "address": "Vilnius, Molėtų pl. 27A, 08450",
        "lat": 54.76769921,
        "lng": 25.27233948,
        "prices": {
            "A95": 1.729,
            "A98": null,
            "Diesel": 2.019,
            "LPG": 0.709
        },
        "id": 87
    },
    {
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Druskininkų",
        "address": "Druskininkai, Leipalingio g. 26, 66371",
        "lat": 54.0302633,
        "lng": 23.98351194,
        "prices": {
            "A95": 1.879,
            "A98": null,
            "Diesel": 2.179,
            "LPG": 0.819
        },
        "id": 88
    },
    {
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Jonavos",
        "address": "Spanėnų k., Plento g. 46, 55305",
        "lat": 55.05810663,
        "lng": 24.26351919,
        "prices": {
            "A95": 1.819,
            "A98": null,
            "Diesel": 2.109,
            "LPG": 0.77
        },
        "id": 89
    },
    {
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Kaunas",
        "address": "Kaunas, Jonavos g. 60A, 44191",
        "lat": 54.90505612,
        "lng": 23.8995314,
        "prices": {
            "A95": 1.789,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.719
        },
        "id": 90
    },
    {
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Varėnos",
        "address": "Merkinė, Vilniaus g. 87, 65333",
        "lat": 54.16910964,
        "lng": 24.20781256,
        "prices": {
            "A95": 1.869,
            "A98": null,
            "Diesel": 2.159,
            "LPG": 0.819
        },
        "id": 91
    },
    {
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Jonavos",
        "address": "Jonava, Žemaitės g. 1, 55134",
        "lat": 55.08237996,
        "lng": 24.27093489,
        "prices": {
            "A95": 1.819,
            "A98": null,
            "Diesel": 2.109,
            "LPG": 0.779
        },
        "id": 92
    },
    {
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Radviliškio",
        "address": "Radviliškis, Šiaulių g. 1A, 82142",
        "lat": 55.8255192,
        "lng": 23.5233024,
        "prices": {
            "A95": 1.729,
            "A98": null,
            "Diesel": 1.989,
            "LPG": 0.71
        },
        "id": 93
    },
    {
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Vilnius",
        "address": "Vilnius, Metalo g. 4B, 02189",
        "lat": 54.64049978,
        "lng": 25.2674053,
        "prices": {
            "A95": 1.789,
            "A98": null,
            "Diesel": 2.089,
            "LPG": 0.759
        },
        "id": 94
    },
    {
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Vilnius",
        "address": "Vilnius, Zujūnų g. 2A, 06200",
        "lat": 54.7109034,
        "lng": 25.16166454,
        "prices": {
            "A95": 1.749,
            "A98": null,
            "Diesel": 2.039,
            "LPG": 0.69
        },
        "id": 95
    },
    {
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Joniškio",
        "address": "Joniškis, Vilniaus g. 72, 84172",
        "lat": 56.22341207,
        "lng": 23.59765138,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.979,
            "LPG": 0.719
        },
        "id": 96
    },
    {
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Kaunas",
        "address": "Kaunas, Vaidoto g. 153, 45392",
        "lat": 54.8613118,
        "lng": 23.95855979,
        "prices": {
            "A95": 1.849,
            "A98": null,
            "Diesel": 2.149,
            "LPG": 0.759
        },
        "id": 97
    },
    {
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Pakruojo",
        "address": "Pakruojis, Statybininkų g. 28, 83163",
        "lat": 55.97443806,
        "lng": 23.86903974,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 2.039,
            "LPG": 0.71
        },
        "id": 98
    },
    {
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Utenos",
        "address": "Utena, Basanavičiaus g. 1B, 28138",
        "lat": 55.49540378,
        "lng": 25.5748768,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.699
        },
        "id": 99
    },
    {
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Zarasų",
        "address": "Sarakiškių k., Vytauto g. 61, 32139",
        "lat": 55.73731746,
        "lng": 26.27264138,
        "prices": {
            "A95": 1.789,
            "A98": null,
            "Diesel": 2.079,
            "LPG": 0.749
        },
        "id": 100
    },
    {
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Zarasų",
        "address": "Padustėlio k., V. Striogos g. 4A, 32306",
        "lat": 55.73945142,
        "lng": 25.85242031,
        "prices": {
            "A95": 1.789,
            "A98": null,
            "Diesel": 2.079,
            "LPG": null
        },
        "id": 101
    },
    {
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Vilnius",
        "address": "Užubalių k., Senasis Ukmergės kl. 4, 14013",
        "lat": 54.76853735,
        "lng": 25.1959108,
        "prices": {
            "A95": 1.779,
            "A98": null,
            "Diesel": 2.079,
            "LPG": 0.739
        },
        "id": 102
    },
    {
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Vilnius",
        "address": "Vilkaraisčio k., 15173",
        "lat": 54.86329651,
        "lng": 25.49097875,
        "prices": {
            "A95": 1.719,
            "A98": null,
            "Diesel": 2.039,
            "LPG": 0.71
        },
        "id": 103
    },
    {
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Vilnius",
        "address": "Grigaičiai, Pavilnės g. 1, 11236",
        "lat": 54.68113798,
        "lng": 25.41214971,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 2.049,
            "LPG": 0.739
        },
        "id": 104
    },
    {
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Vilnius",
        "address": "Vilnius, Savanorių pr. 121, 03150",
        "lat": 54.66080422,
        "lng": 25.23356177,
        "prices": {
            "A95": 1.739,
            "A98": null,
            "Diesel": 2.049,
            "LPG": 0.739
        },
        "id": 105
    },
    {
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Vilnius",
        "address": "Vilnius,  Kalvarijų g. 161A, 08311",
        "lat": 54.72402245,
        "lng": 25.28225813,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.959,
            "LPG": 0.699
        },
        "id": 106
    },
    {
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Vilnius",
        "address": "Vilnius, S. Batoro g. 15, 11100",
        "lat": 54.69230173,
        "lng": 25.34643156,
        "prices": {
            "A95": 1.759,
            "A98": null,
            "Diesel": 2.049,
            "LPG": 0.739
        },
        "id": 107
    },
    {
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Vilnius",
        "address": "Vilnius, Antakalnio g. 128, 10200",
        "lat": 54.72228126,
        "lng": 25.31733675,
        "prices": {
            "A95": 1.739,
            "A98": null,
            "Diesel": 2.029,
            "LPG": 0.719
        },
        "id": 108
    },
    {
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Vilnius",
        "address": "Vilnius, Visalaukio g. 2, 08401",
        "lat": 54.77924539,
        "lng": 25.34234801,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 2.049,
            "LPG": 0.699
        },
        "id": 109
    },
    {
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Vilnius",
        "address": "Vilnius, B. Brazdžionio g. 2, 47266",
        "lat": 54.6139816,
        "lng": 25.30897645,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 2.039,
            "LPG": null
        },
        "id": 110
    },
    {
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Varėnos",
        "address": "Varėna, M. K. Čiurlionio g. 63, 65219",
        "lat": 54.21831148,
        "lng": 24.56589846,
        "prices": {
            "A95": 1.869,
            "A98": null,
            "Diesel": 2.149,
            "LPG": 0.759
        },
        "id": 111
    },
    {
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Varėnos",
        "address": "Senosios Varėnos k., Vilniaus g. 6A, 65486",
        "lat": 54.2565096,
        "lng": 24.54704418,
        "prices": {
            "A95": 1.869,
            "A98": null,
            "Diesel": 2.149,
            "LPG": 0.759
        },
        "id": 112
    },
    {
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Trakų",
        "address": "Trakai, Vilniaus g. 33, 21118",
        "lat": 54.62734448,
        "lng": 24.94864735,
        "prices": {
            "A95": 1.819,
            "A98": null,
            "Diesel": 2.119,
            "LPG": 0.779
        },
        "id": 113
    },
    {
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Telšių",
        "address": "Ožtakių k., Dariaus ir Girėno g. 76, 88321",
        "lat": 55.73052761,
        "lng": 22.37689064,
        "prices": {
            "A95": 1.809,
            "A98": null,
            "Diesel": 2.109,
            "LPG": 0.789
        },
        "id": 114
    },
    {
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Tauragės",
        "address": "Taurų k., Tilžės pl. 362, 72142",
        "lat": 55.24330849,
        "lng": 22.25303084,
        "prices": {
            "A95": 1.759,
            "A98": null,
            "Diesel": 2.049,
            "LPG": 0.71
        },
        "id": 115
    },
    {
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Šilutės",
        "address": "Šilutė, Klaipėdos g. 4A, 99116",
        "lat": 55.35291592,
        "lng": 21.46311915,
        "prices": {
            "A95": 1.719,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.729
        },
        "id": 116
    },
    {
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Šilalės",
        "address": "Bučių k., 75381",
        "lat": 55.57018285,
        "lng": 22.17665794,
        "prices": {
            "A95": 1.819,
            "A98": null,
            "Diesel": 2.049,
            "LPG": 0.73
        },
        "id": 117
    },
    {
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Šilalės",
        "address": "Šilalė, Rytinio kelio g. 2, 75122",
        "lat": 55.49009238,
        "lng": 22.20001532,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 2.029,
            "LPG": 0.719
        },
        "id": 118
    },
    {
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Šiaulių",
        "address": "Šiauliai, Kupiškio g. 4, 76146",
        "lat": 55.95757509,
        "lng": 23.31605137,
        "prices": {
            "A95": 1.729,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.73
        },
        "id": 119
    },
    {
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Šalčininkų",
        "address": "Šalčininkai, Vilniaus g. 5A, 17102",
        "lat": 54.31795465,
        "lng": 25.38159677,
        "prices": {
            "A95": 1.869,
            "A98": null,
            "Diesel": 2.149,
            "LPG": 0.789
        },
        "id": 120
    },
    {
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Šakių",
        "address": "Šakiai, Sodų g. 1, 71136",
        "lat": 54.9455784,
        "lng": 23.0458561,
        "prices": {
            "A95": 1.789,
            "A98": null,
            "Diesel": 2.079,
            "LPG": 0.73
        },
        "id": 121
    },
    {
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Šakių",
        "address": "Griškabūdis, A. Skelčio g., 71296",
        "lat": 54.85233402,
        "lng": 23.17687677,
        "prices": {
            "A95": 1.819,
            "A98": null,
            "Diesel": 2.089,
            "LPG": null
        },
        "id": 122
    },
    {
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Skuodo",
        "address": "Skuodas, Vytauto g. 22, 98122",
        "lat": 56.25942364,
        "lng": 21.53042207,
        "prices": {
            "A95": 1.719,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.699
        },
        "id": 123
    },
    {
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Rokiškio",
        "address": "Pandėlio k., Elektrinės g. 1, 42370",
        "lat": 56.01918459,
        "lng": 25.22214427,
        "prices": {
            "A95": 1.829,
            "A98": null,
            "Diesel": 2.099,
            "LPG": 0.809
        },
        "id": 124
    },
    {
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Rietavo",
        "address": "Rietavas, Dariaus ir Girėno g. 19, 90316",
        "lat": 55.719486,
        "lng": 21.92852019,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.72
        },
        "id": 125
    },
    {
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Raseinių",
        "address": "Kalnujų k. 1, 60191",
        "lat": 55.33559872,
        "lng": 23.1020618,
        "prices": {
            "A95": 1.819,
            "A98": null,
            "Diesel": 2.079,
            "LPG": 0.759
        },
        "id": 126
    },
    {
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Raseinių",
        "address": "Girkalnio k., Žemaičių g. 39, 60311",
        "lat": 55.31823249,
        "lng": 23.21079649,
        "prices": {
            "A95": 1.819,
            "A98": null,
            "Diesel": 2.049,
            "LPG": 0.71
        },
        "id": 127
    },
    {
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Raseinių",
        "address": "Raseiniai, Vilniaus g. 30, 60183",
        "lat": 55.3708352,
        "lng": 23.13329253,
        "prices": {
            "A95": 1.819,
            "A98": null,
            "Diesel": 2.049,
            "LPG": 0.71
        },
        "id": 128
    },
    {
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Radviliškio",
        "address": "Radviliškis, Miško g. 64, 82128",
        "lat": 55.8007344,
        "lng": 23.56542278,
        "prices": {
            "A95": 1.729,
            "A98": null,
            "Diesel": 1.989,
            "LPG": 0.71
        },
        "id": 129
    },
    {
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Radviliškio",
        "address": "Užuovėjos k., 82215",
        "lat": 55.76333015,
        "lng": 23.74294809,
        "prices": {
            "A95": 1.739,
            "A98": null,
            "Diesel": 2.009,
            "LPG": 0.71
        },
        "id": 130
    },
    {
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Prienų",
        "address": "Veiverių k., Kauno g. 85, 59285",
        "lat": 54.76102906,
        "lng": 23.7132276,
        "prices": {
            "A95": 1.879,
            "A98": null,
            "Diesel": 2.149,
            "LPG": 0.77
        },
        "id": 131
    },
    {
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Prienų",
        "address": "Prienai, Vilniaus g. 3A, 59115",
        "lat": 54.62860959,
        "lng": 23.95850085,
        "prices": {
            "A95": 1.749,
            "A98": null,
            "Diesel": 2.049,
            "LPG": 0.719
        },
        "id": 132
    },
    {
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Plungės",
        "address": "Plateliai,  Žemaičių Kalvarijos g. 1A, 90421",
        "lat": 56.04407982,
        "lng": 21.81567675,
        "prices": {
            "A95": 1.879,
            "A98": null,
            "Diesel": 2.149,
            "LPG": 0.789
        },
        "id": 133
    },
    {
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Pasvalio",
        "address": "Pasvalys, Mūšos g. 18, 39104",
        "lat": 56.07093117,
        "lng": 24.41123079,
        "prices": {
            "A95": 1.719,
            "A98": null,
            "Diesel": 2.019,
            "LPG": null
        },
        "id": 134
    },
    {
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Palangos",
        "address": "Palanga, Klaipėdos pl. 44, 00111",
        "lat": 55.9154883,
        "lng": 21.07814978,
        "prices": {
            "A95": 1.779,
            "A98": null,
            "Diesel": 2.079,
            "LPG": 0.729
        },
        "id": 135
    },
    {
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Palangos",
        "address": "Palanga, Ganyklų g. 28C, 00126",
        "lat": 55.92349224,
        "lng": 21.07464189,
        "prices": {
            "A95": 1.769,
            "A98": null,
            "Diesel": 2.069,
            "LPG": 0.719
        },
        "id": 136
    },
    {
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Mažeikių",
        "address": "Tirkšliai, Laukų g. 10, 89330",
        "lat": 56.26244684,
        "lng": 22.31040817,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 2.099,
            "LPG": null
        },
        "id": 137
    },
    {
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Kalvarijos",
        "address": "Pasiekų k., Europos g. 12, 69270",
        "lat": 54.32239096,
        "lng": 23.14519109,
        "prices": {
            "A95": 1.819,
            "A98": null,
            "Diesel": 2.119,
            "LPG": 0.829
        },
        "id": 138
    },
    {
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Lazdijų",
        "address": "Lazdijai, Turistų g. 88, 67102",
        "lat": 54.22065604,
        "lng": 23.5089976,
        "prices": {
            "A95": 1.739,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.729
        },
        "id": 139
    },
    {
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Kupiškio",
        "address": "Noriūnų k., Parko g. 3A, 40395",
        "lat": 55.79647651,
        "lng": 24.88883792,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.709
        },
        "id": 140
    },
    {
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Klaipėda",
        "address": "Gargždai, Dariaus ir Girėno g. 10, 96144",
        "lat": 55.70747618,
        "lng": 21.38030291,
        "prices": {
            "A95": 1.789,
            "A98": null,
            "Diesel": 2.079,
            "LPG": 0.719
        },
        "id": 141
    },
    {
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Klaipėda",
        "address": "Priekulė, Klaipėdos g. 61, 96342",
        "lat": 55.5620308,
        "lng": 21.3088866,
        "prices": {
            "A95": 1.849,
            "A98": null,
            "Diesel": 2.149,
            "LPG": 0.75
        },
        "id": 142
    },
    {
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Kaunas",
        "address": "Jaučakių k., 54217",
        "lat": 55.0384555,
        "lng": 23.60782038,
        "prices": {
            "A95": 1.849,
            "A98": null,
            "Diesel": 2.149,
            "LPG": 0.759
        },
        "id": 143
    },
    {
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Kaunas",
        "address": "Ringaudų k., Gėlių g. 1A, 53335",
        "lat": 54.88949505,
        "lng": 23.80472397,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 2.049,
            "LPG": 0.729
        },
        "id": 144
    },
    {
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Kaunas",
        "address": "Pagirių k., Marijampolės g. 1, 53282",
        "lat": 54.81474778,
        "lng": 23.87240005,
        "prices": {
            "A95": 1.759,
            "A98": null,
            "Diesel": 2.029,
            "LPG": 0.699
        },
        "id": 145
    },
    {
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Kaunas",
        "address": "Kaunas, Raudondvario pl. 82, 47179",
        "lat": 54.90762462,
        "lng": 23.87405934,
        "prices": {
            "A95": 1.749,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.739
        },
        "id": 146
    },
    {
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Kaunas",
        "address": "Kaunas, Chemijos g. 6, 51344",
        "lat": 54.90316716,
        "lng": 23.98274502,
        "prices": {
            "A95": 1.779,
            "A98": null,
            "Diesel": 2.049,
            "LPG": 0.739
        },
        "id": 147
    },
    {
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Kaišiadorių",
        "address": "Triliškių k., Kauno pl. 5, 56179",
        "lat": 54.81686838,
        "lng": 24.43656186,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 2.099,
            "LPG": 0.729
        },
        "id": 148
    },
    {
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Jonavos",
        "address": "Gudžionių k., Plento g. 24, 58244",
        "lat": 55.09903665,
        "lng": 24.31591229,
        "prices": {
            "A95": 1.789,
            "A98": null,
            "Diesel": 2.049,
            "LPG": 0.829
        },
        "id": 149
    },
    {
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Druskininkų",
        "address": "Leipalingis, Merkinės g. 37, 67280",
        "lat": 54.0946203,
        "lng": 23.8714383,
        "prices": {
            "A95": 1.869,
            "A98": null,
            "Diesel": 2.159,
            "LPG": 0.819
        },
        "id": 150
    },
    {
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Biržų",
        "address": "Valantiškio k., 41131",
        "lat": 56.19739426,
        "lng": 24.70957386,
        "prices": {
            "A95": 1.789,
            "A98": null,
            "Diesel": 2.069,
            "LPG": 0.779
        },
        "id": 151
    },
    {
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Anykščių",
        "address": "Anykščiai, Mindaugo g. 23, 29141",
        "lat": 55.50854285,
        "lng": 25.09624695,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.989,
            "LPG": 0.699
        },
        "id": 152
    },
    {
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Alytaus",
        "address": "Likiškėliai, Pabalių g. 11, 64381",
        "lat": 54.38778364,
        "lng": 23.99615494,
        "prices": {
            "A95": 1.709,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.729
        },
        "id": 153
    },
    {
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Jurbarko",
        "address": "Jurbarkas, Muitinės g. 22A, 74111",
        "lat": 55.07822253,
        "lng": 22.74491424,
        "prices": {
            "A95": 1.789,
            "A98": null,
            "Diesel": 2.079,
            "LPG": 0.73
        },
        "id": 154
    },
    {
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Kaunas",
        "address": "Kaunas, Taikos pr. 120, 52140",
        "lat": 54.91742079,
        "lng": 24.03510568,
        "prices": {
            "A95": 1.719,
            "A98": null,
            "Diesel": 2.019,
            "LPG": 0.729
        },
        "id": 155
    },
    {
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Neringos",
        "address": "Neringa, Nidos-Smiltynės pl. 6, 93125",
        "lat": 55.30072267,
        "lng": 20.98002534,
        "prices": {
            "A95": 1.849,
            "A98": null,
            "Diesel": 2.119,
            "LPG": null
        },
        "id": 156
    },
    {
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Jurbarko",
        "address": "Klišių k., Pievų g. 2, 74211",
        "lat": 55.09944466,
        "lng": 22.77334068,
        "prices": {
            "A95": 1.789,
            "A98": null,
            "Diesel": 2.079,
            "LPG": 0.73
        },
        "id": 157
    },
    {
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Akmenės",
        "address": "Naujoji Akmenė, V. Kudirkos g. 21A, 85145",
        "lat": 56.31847208,
        "lng": 22.88559738,
        "prices": {
            "A95": 1.749,
            "A98": null,
            "Diesel": 2.029,
            "LPG": 0.72
        },
        "id": 158
    },
    {
        "name": "Bemija",
        "logo": "⛽",
        "city": "Ukmergės",
        "address": "Ukmergė, Dariaus ir Girėno g. 31, 20154",
        "lat": 55.24072789,
        "lng": 24.78759909,
        "prices": {
            "A95": 1.8,
            "A98": null,
            "Diesel": 2.1,
            "LPG": 0.76
        },
        "id": 159
    },
    {
        "name": "Bonsa",
        "logo": "⛽",
        "city": "Tauragės",
        "address": "Taurai, Tilžės pl. 46, 72142",
        "lat": 55.24243868,
        "lng": 22.25002133,
        "prices": {
            "A95": 1.759,
            "A98": null,
            "Diesel": 2.049,
            "LPG": 0.68
        },
        "id": 160
    },
    {
        "name": "Bonsa",
        "logo": "⛽",
        "city": "Tauragės",
        "address": "Vaidatonių k. 1, 73406",
        "lat": 55.4692054,
        "lng": 22.67890501,
        "prices": {
            "A95": 1.82,
            "A98": null,
            "Diesel": 2.02,
            "LPG": 0.73
        },
        "id": 161
    },
    {
        "name": "Abromika",
        "logo": "⛽",
        "city": "Šiaulių",
        "address": "Ginkūnų k., Aušros g. 26, 81492",
        "lat": 55.9357609,
        "lng": 23.0777888,
        "prices": {
            "A95": 1.879,
            "A98": null,
            "Diesel": 2.159,
            "LPG": 0.799
        },
        "id": 162
    },
    {
        "name": "Abromika",
        "logo": "⛽",
        "city": "Utenos",
        "address": "Utena, Zarasų g. 9, 28216",
        "lat": 55.51265598,
        "lng": 25.6439842,
        "prices": {
            "A95": 1.809,
            "A98": null,
            "Diesel": 2.089,
            "LPG": 0.749
        },
        "id": 163
    },
    {
        "name": "Abromika",
        "logo": "⛽",
        "city": "Molėtų",
        "address": "Smėlinkos vs. 1, 33171",
        "lat": 55.2643412,
        "lng": 25.49004139,
        "prices": {
            "A95": 1.879,
            "A98": null,
            "Diesel": 2.189,
            "LPG": 0.799
        },
        "id": 164
    },
    {
        "name": "Abromika",
        "logo": "⛽",
        "city": "Kelmės",
        "address": "Kelmė, Kęstučio g. 1B, 86139",
        "lat": 55.63480388,
        "lng": 22.94542371,
        "prices": {
            "A95": 1.889,
            "A98": null,
            "Diesel": 2.159,
            "LPG": 0.799
        },
        "id": 165
    },
    {
        "name": "Abromika",
        "logo": "⛽",
        "city": "Kelmės",
        "address": "Maironių k., Kuršių g. 2, 86203",
        "lat": 55.60068714,
        "lng": 23.04274232,
        "prices": {
            "A95": 1.83,
            "A98": null,
            "Diesel": 2.06,
            "LPG": 0.74
        },
        "id": 166
    },
    {
        "name": "Abromika",
        "logo": "⛽",
        "city": "Kelmės",
        "address": "Kuršukų k., Plento g. 1, 86120",
        "lat": 55.61830337,
        "lng": 22.90140057,
        "prices": {
            "A95": 1.889,
            "A98": null,
            "Diesel": 2.189,
            "LPG": 0.829
        },
        "id": 167
    },
    {
        "name": "Boost Petrol",
        "logo": "⛽",
        "city": "Kaunas",
        "address": "Kaunas, Marvelės g. 132, 46230",
        "lat": 54.9038368,
        "lng": 23.835313,
        "prices": {
            "A95": 1.889,
            "A98": null,
            "Diesel": 2.189,
            "LPG": 0.83
        },
        "id": 168
    },
    {
        "name": "Abromika",
        "logo": "⛽",
        "city": "Elektrėnų",
        "address": "Elektrėnai, Dubijos g. 36, 26130",
        "lat": 54.7862307,
        "lng": 24.7143876,
        "prices": {
            "A95": 1.889,
            "A98": null,
            "Diesel": 2.189,
            "LPG": 0.829
        },
        "id": 169
    },
    {
        "name": "Borusta",
        "logo": "⛽",
        "city": "Birštono",
        "address": "Birštonas, Prienų g. 14, 59219",
        "lat": 54.59551071,
        "lng": 24.02665222,
        "prices": {
            "A95": 1.759,
            "A98": null,
            "Diesel": 2.059,
            "LPG": 0.749
        },
        "id": 170
    },
    {
        "name": "Borusta",
        "logo": "⛽",
        "city": "Trakų",
        "address": "Aukštadvaris, Vilniaus g. 2a, 21253",
        "lat": 54.5780333,
        "lng": 24.52148244,
        "prices": {
            "A95": 1.76,
            "A98": null,
            "Diesel": 2.06,
            "LPG": 0.75
        },
        "id": 171
    },
    {
        "name": "Borusta",
        "logo": "⛽",
        "city": "Prienų",
        "address": "Stakliškės, Piliakalnio g. 3, 59370",
        "lat": 54.58242467,
        "lng": 24.31776812,
        "prices": {
            "A95": 1.749,
            "A98": null,
            "Diesel": 2.049,
            "LPG": 0.739
        },
        "id": 172
    },
    {
        "name": "Circle K",
        "logo": "🔴",
        "city": "Marijampolės",
        "address": "Marijampolė, Kauno g. 130, 68230",
        "lat": 54.5762408,
        "lng": 23.37145108,
        "prices": {
            "A95": 1.809,
            "A98": null,
            "Diesel": 2.099,
            "LPG": 0.794
        },
        "id": 173
    },
    {
        "name": "Circle K",
        "logo": "🔴",
        "city": "Klaipėda",
        "address": "Klaipėda, Tilžės g. 56A, 91110",
        "lat": 55.7042798,
        "lng": 21.16070837,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 2.089,
            "LPG": 0.789
        },
        "id": 174
    },
    {
        "name": "Circle K",
        "logo": "🔴",
        "city": "Alytaus",
        "address": "Alytus, Naujoji g. 120, 62175",
        "lat": 54.4245839,
        "lng": 24.00384076,
        "prices": {
            "A95": 1.82,
            "A98": null,
            "Diesel": 2.089,
            "LPG": 0.769
        },
        "id": 175
    },
    {
        "name": "Circle K",
        "logo": "🔴",
        "city": "Kaunas",
        "address": "Kaunas, Pramonės pr. 18, 51183",
        "lat": 54.91633041,
        "lng": 23.9865814,
        "prices": {
            "A95": 1.849,
            "A98": null,
            "Diesel": 2.114,
            "LPG": 0.779
        },
        "id": 176
    },
    {
        "name": "Circle K",
        "logo": "🔴",
        "city": "Kaunas",
        "address": "Kaunas, Raudondvario pl. 107A, 47186",
        "lat": 54.90819539,
        "lng": 23.86488247,
        "prices": {
            "A95": 1.834,
            "A98": null,
            "Diesel": 2.084,
            "LPG": 0.799
        },
        "id": 177
    },
    {
        "name": "Circle K",
        "logo": "🔴",
        "city": "Utenos",
        "address": "Utena, J. Basanavičiaus g. 3, 28134",
        "lat": 55.49610987,
        "lng": 25.58294292,
        "prices": {
            "A95": 1.784,
            "A98": null,
            "Diesel": 2.079,
            "LPG": 0.764
        },
        "id": 178
    },
    {
        "name": "Circle K",
        "logo": "🔴",
        "city": "Kaunas",
        "address": "Kaunas, Vakarinio aplinkkelio 10, 48182",
        "lat": 54.93560587,
        "lng": 23.87042322,
        "prices": {
            "A95": 1.859,
            "A98": null,
            "Diesel": 2.129,
            "LPG": 0.829
        },
        "id": 179
    },
    {
        "name": "Circle K",
        "logo": "🔴",
        "city": "Panevėžio",
        "address": "Ūtos k., Baltijos Kelio g. 33, 35189",
        "lat": 55.81053429,
        "lng": 24.36859072,
        "prices": {
            "A95": 1.819,
            "A98": null,
            "Diesel": 2.119,
            "LPG": 0.889
        },
        "id": 180
    },
    {
        "name": "Circle K",
        "logo": "🔴",
        "city": "Vilnius",
        "address": "Vilnius, Kareivių g. 3, 08221",
        "lat": 54.71563832,
        "lng": 25.29084551,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 2.069,
            "LPG": 0.769
        },
        "id": 181
    },
    {
        "name": "Circle K",
        "logo": "🔴",
        "city": "Vilnius",
        "address": "Vilnius, Savanorių pr. 118, 03153",
        "lat": 54.66186065,
        "lng": 25.23522223,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 2.099,
            "LPG": 0.809
        },
        "id": 182
    },
    {
        "name": "Circle K",
        "logo": "🔴",
        "city": "Vilnius",
        "address": "Vilnius, Savanorių pr. 119A, 03150",
        "lat": 54.66267877,
        "lng": 25.23500717,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 2.099,
            "LPG": 0.809
        },
        "id": 183
    },
    {
        "name": "Circle K",
        "logo": "🔴",
        "city": "Kaunas",
        "address": "Kaunas, Žemaičių pl. 19, 48255",
        "lat": 54.92533676,
        "lng": 23.89068586,
        "prices": {
            "A95": 1.819,
            "A98": null,
            "Diesel": 2.084,
            "LPG": 0.809
        },
        "id": 184
    },
    {
        "name": "Circle K",
        "logo": "🔴",
        "city": "Panevėžio",
        "address": "Šilagalio k., Panevėžio aplinkl. 20, 36258",
        "lat": 55.67273361,
        "lng": 24.33664263,
        "prices": {
            "A95": 1.819,
            "A98": null,
            "Diesel": 2.119,
            "LPG": 0.799
        },
        "id": 185
    },
    {
        "name": "Circle K",
        "logo": "🔴",
        "city": "Šilutės",
        "address": "Šilutė, Cintjoniškių g. 15, 99116",
        "lat": 55.35049055,
        "lng": 21.47453993,
        "prices": {
            "A95": 1.805,
            "A98": null,
            "Diesel": 2.105,
            "LPG": 0.769
        },
        "id": 186
    },
    {
        "name": "Circle K",
        "logo": "🔴",
        "city": "Klaipėda",
        "address": "Klaipėda, Sausio 15-osios g. 2, 91200",
        "lat": 55.70221153,
        "lng": 21.13803973,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 2.089,
            "LPG": null
        },
        "id": 187
    },
    {
        "name": "Circle K",
        "logo": "🔴",
        "city": "Druskininkų",
        "address": "Druskininkai, M. K. Čiurlionio g. 113, 66161",
        "lat": 54.01023448,
        "lng": 23.99336858,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 2.199,
            "LPG": 0.829
        },
        "id": 188
    },
    {
        "name": "Circle K",
        "logo": "🔴",
        "city": "Panevėžio",
        "address": "Panevėžys, Klaipėdos g. 92A, 37383",
        "lat": 55.72866229,
        "lng": 24.33914094,
        "prices": {
            "A95": 1.779,
            "A98": null,
            "Diesel": 2.069,
            "LPG": null
        },
        "id": 189
    },
    {
        "name": "Circle K",
        "logo": "🔴",
        "city": "Utenos",
        "address": "Utena, J. Basanavičiaus g. 108A, 28214",
        "lat": 55.50503319,
        "lng": 25.62092751,
        "prices": {
            "A95": 1.829,
            "A98": null,
            "Diesel": 2.109,
            "LPG": 0.799
        },
        "id": 190
    },
    {
        "name": "Circle K",
        "logo": "🔴",
        "city": "Elektrėnų",
        "address": "Elektrėnai, Sabališkių g. 1F, 26128",
        "lat": 54.78934176,
        "lng": 24.67618278,
        "prices": {
            "A95": 1.879,
            "A98": null,
            "Diesel": 2.169,
            "LPG": 0.799
        },
        "id": 191
    },
    {
        "name": "Circle K",
        "logo": "🔴",
        "city": "Kaunas",
        "address": "Kaunas, R. Kalantos g. 68, 52365",
        "lat": 54.89308333,
        "lng": 23.99581271,
        "prices": {
            "A95": 1.829,
            "A98": null,
            "Diesel": 2.074,
            "LPG": null
        },
        "id": 192
    },
    {
        "name": "Circle K",
        "logo": "🔴",
        "city": "Klaipėda",
        "address": "Klaipėda, Taikos pr. 61B, 91182",
        "lat": 55.69235463,
        "lng": 21.1535706,
        "prices": {
            "A95": 1.859,
            "A98": null,
            "Diesel": 2.139,
            "LPG": null
        },
        "id": 193
    },
    {
        "name": "Circle K",
        "logo": "🔴",
        "city": "Šiaulių",
        "address": "Šiauliai, Dubijos g. 20A, 77207",
        "lat": 55.92893154,
        "lng": 23.29765257,
        "prices": {
            "A95": 1.829,
            "A98": null,
            "Diesel": 2.119,
            "LPG": 0.779
        },
        "id": 194
    },
    {
        "name": "Circle K",
        "logo": "🔴",
        "city": "Vilnius",
        "address": "Vilnius, Sporto g. 16A, 09200",
        "lat": 54.69503638,
        "lng": 25.29800144,
        "prices": {
            "A95": 1.859,
            "A98": null,
            "Diesel": 2.159,
            "LPG": null
        },
        "id": 195
    },
    {
        "name": "Circle K",
        "logo": "🔴",
        "city": "Vilnius",
        "address": "Didžiosios Riešės k., Molėtų g. 15, 14262",
        "lat": 54.78077707,
        "lng": 25.27390302,
        "prices": {
            "A95": 1.769,
            "A98": null,
            "Diesel": 2.059,
            "LPG": null
        },
        "id": 196
    },
    {
        "name": "Circle K",
        "logo": "🔴",
        "city": "Vilnius",
        "address": "Avižienių k., Sudervės g. 2G, 14198",
        "lat": 54.76041443,
        "lng": 25.20170754,
        "prices": {
            "A95": 1.824,
            "A98": null,
            "Diesel": 2.084,
            "LPG": 0.76
        },
        "id": 197
    },
    {
        "name": "Circle K",
        "logo": "🔴",
        "city": "Kaunas",
        "address": "Kaunas, Jonavos g. 38, 44263",
        "lat": 54.90163899,
        "lng": 23.89479004,
        "prices": {
            "A95": 1.869,
            "A98": null,
            "Diesel": 2.099,
            "LPG": 0.75
        },
        "id": 198
    },
    {
        "name": "Circle K",
        "logo": "🔴",
        "city": "Kaunas",
        "address": "Kaunas, K. Baršausko g. 57, 51423",
        "lat": 54.89907183,
        "lng": 23.96010615,
        "prices": {
            "A95": 1.849,
            "A98": null,
            "Diesel": 2.134,
            "LPG": 0.899
        },
        "id": 199
    },
    {
        "name": "Circle K",
        "logo": "🔴",
        "city": "Lazdijų",
        "address": "Nekrūnų k. 1, 67171",
        "lat": 54.22686034,
        "lng": 23.5253042,
        "prices": {
            "A95": 1.819,
            "A98": null,
            "Diesel": 2.059,
            "LPG": 0.759
        },
        "id": 200
    },
    {
        "name": "Circle K",
        "logo": "🔴",
        "city": "Panevėžio",
        "address": "Panevėžys, J. Basanavičiaus g. 63, 36204",
        "lat": 55.71753068,
        "lng": 24.37105326,
        "prices": {
            "A95": 1.809,
            "A98": null,
            "Diesel": 2.099,
            "LPG": 0.769
        },
        "id": 201
    },
    {
        "name": "Circle K",
        "logo": "🔴",
        "city": "Radviliškio",
        "address": "Radviliškis, Gedimino g. 42B, 82174",
        "lat": 55.81158205,
        "lng": 23.54996243,
        "prices": {
            "A95": 1.849,
            "A98": null,
            "Diesel": 2.119,
            "LPG": 0.76
        },
        "id": 202
    },
    {
        "name": "Circle K",
        "logo": "🔴",
        "city": "Vilnius",
        "address": "Vilnius, Talino g. 2B, 05200",
        "lat": 54.71334267,
        "lng": 25.20934162,
        "prices": {
            "A95": 1.839,
            "A98": null,
            "Diesel": 2.119,
            "LPG": 0.859
        },
        "id": 203
    },
    {
        "name": "Circle K",
        "logo": "🔴",
        "city": "Alytaus",
        "address": "Alytus, Rūtų g. 2B, 62119",
        "lat": 54.3951041,
        "lng": 24.03815158,
        "prices": {
            "A95": 1.829,
            "A98": null,
            "Diesel": 2.139,
            "LPG": 0.769
        },
        "id": 204
    },
    {
        "name": "Circle K",
        "logo": "🔴",
        "city": "Kaunas",
        "address": "Kaunas, Taikos pr. 52A, 51305",
        "lat": 54.91204449,
        "lng": 23.95674089,
        "prices": {
            "A95": 1.859,
            "A98": null,
            "Diesel": 2.129,
            "LPG": null
        },
        "id": 205
    },
    {
        "name": "Circle K",
        "logo": "🔴",
        "city": "Klaipėda",
        "address": "Jakų k., Vilniaus pl. 21, 92498",
        "lat": 55.71155505,
        "lng": 21.26296138,
        "prices": {
            "A95": 1.819,
            "A98": null,
            "Diesel": 2.089,
            "LPG": 0.76
        },
        "id": 206
    },
    {
        "name": "Circle K",
        "logo": "🔴",
        "city": "Šiaulių",
        "address": "Šiauliai, Vilniaus g. 62, 76251",
        "lat": 55.9248021,
        "lng": 23.33407078,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 2.089,
            "LPG": null
        },
        "id": 207
    },
    {
        "name": "Circle K",
        "logo": "🔴",
        "city": "Vilnius",
        "address": "Vilnius, Geležinio Vilko g. 24, 08412",
        "lat": 54.75150886,
        "lng": 25.26651788,
        "prices": {
            "A95": 1.809,
            "A98": null,
            "Diesel": 2.099,
            "LPG": null
        },
        "id": 208
    },
    {
        "name": "Circle K",
        "logo": "🔴",
        "city": "Kaunas",
        "address": "Kaunas, Varnių g. 46, 48403",
        "lat": 54.9144988,
        "lng": 23.90022639,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 2.069,
            "LPG": null
        },
        "id": 209
    },
    {
        "name": "Circle K",
        "logo": "🔴",
        "city": "Klaipėda",
        "address": "Klaipėda, Taikos pr. 112A, 93150",
        "lat": 55.66651754,
        "lng": 21.17281151,
        "prices": {
            "A95": 1.819,
            "A98": null,
            "Diesel": 2.119,
            "LPG": 0.75
        },
        "id": 210
    },
    {
        "name": "Circle K",
        "logo": "🔴",
        "city": "Telšių",
        "address": "Telšiai, Luokės g. 70, 87128",
        "lat": 55.97702506,
        "lng": 22.26547843,
        "prices": {
            "A95": 1.869,
            "A98": null,
            "Diesel": 2.169,
            "LPG": 0.769
        },
        "id": 211
    },
    {
        "name": "Circle K",
        "logo": "🔴",
        "city": "Vilnius",
        "address": "Vilnius, Prūsų g. 26A, 02154",
        "lat": 54.65847138,
        "lng": 25.26642906,
        "prices": {
            "A95": 1.849,
            "A98": null,
            "Diesel": 2.149,
            "LPG": 0.859
        },
        "id": 212
    },
    {
        "name": "Circle K",
        "logo": "🔴",
        "city": "Joniškio",
        "address": "Satkūnų k., Sidabros g. 2A, 84101",
        "lat": 56.25859901,
        "lng": 23.62191463,
        "prices": {
            "A95": 1.809,
            "A98": null,
            "Diesel": 2.099,
            "LPG": 0.769
        },
        "id": 213
    },
    {
        "name": "Circle K",
        "logo": "🔴",
        "city": "Kaunas",
        "address": "Kaunas, Savanorių pr. 321, 50120",
        "lat": 54.92007497,
        "lng": 23.95300019,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 2.139,
            "LPG": null
        },
        "id": 214
    },
    {
        "name": "Circle K",
        "logo": "🔴",
        "city": "Vilnius",
        "address": "Vilnius, Eišiškių pl. 11, 02184",
        "lat": 54.65185815,
        "lng": 25.26988571,
        "prices": {
            "A95": 1.849,
            "A98": null,
            "Diesel": 2.149,
            "LPG": 0.859
        },
        "id": 215
    },
    {
        "name": "Circle K",
        "logo": "🔴",
        "city": "Vilnius",
        "address": "Vilnius, Geležinio Vilko g. 2A, 03150",
        "lat": 54.67116497,
        "lng": 25.23673355,
        "prices": {
            "A95": 1.879,
            "A98": null,
            "Diesel": 2.189,
            "LPG": 0.859
        },
        "id": 216
    },
    {
        "name": "Circle K",
        "logo": "🔴",
        "city": "Vilkaviškio",
        "address": "Serdokų k., Vilkaviškio g. 10, 70201",
        "lat": 54.63658215,
        "lng": 23.07499396,
        "prices": {
            "A95": 1.859,
            "A98": null,
            "Diesel": 2.159,
            "LPG": 0.799
        },
        "id": 217
    },
    {
        "name": "Circle K",
        "logo": "🔴",
        "city": "Varėnos",
        "address": "Varėna, Savanorių g. 5, 65186",
        "lat": 54.21062556,
        "lng": 24.57792031,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 2.159,
            "LPG": 0.769
        },
        "id": 218
    },
    {
        "name": "Circle K",
        "logo": "🔴",
        "city": "Šilalės",
        "address": "Košių II k., Dvaro g. 3, 75226",
        "lat": 55.48407464,
        "lng": 22.58779611,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 2.199,
            "LPG": 0.789
        },
        "id": 219
    },
    {
        "name": "Circle K",
        "logo": "🔴",
        "city": "Raseinių",
        "address": "Pikelių k. 1, 60376",
        "lat": 55.46144348,
        "lng": 22.69334421,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 2.199,
            "LPG": 0.789
        },
        "id": 220
    },
    {
        "name": "Circle K",
        "logo": "🔴",
        "city": "Palangos",
        "address": "Palanga, Kretingos g. 56, 00111",
        "lat": 55.91476723,
        "lng": 21.07795118,
        "prices": {
            "A95": 1.849,
            "A98": null,
            "Diesel": 2.149,
            "LPG": 0.789
        },
        "id": 221
    },
    {
        "name": "Circle K",
        "logo": "🔴",
        "city": "Kaunas",
        "address": "Kaunas, Tvirtovės al. 33A, 50157",
        "lat": 54.9131575,
        "lng": 23.92634443,
        "prices": {
            "A95": 1.839,
            "A98": null,
            "Diesel": 2.109,
            "LPG": null
        },
        "id": 222
    },
    {
        "name": "Circle K",
        "logo": "🔴",
        "city": "Biržų",
        "address": "Biržai, Kilučių g. 93, 41154",
        "lat": 56.19477634,
        "lng": 24.77189894,
        "prices": {
            "A95": 1.804,
            "A98": null,
            "Diesel": 2.064,
            "LPG": 0.8
        },
        "id": 223
    },
    {
        "name": "Circle K",
        "logo": "🔴",
        "city": "Trakų",
        "address": "Dėdeliškių k., Didžiulio g. 5, 21401",
        "lat": 54.68632267,
        "lng": 25.05384057,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 2.199,
            "LPG": 0.879
        },
        "id": 224
    },
    {
        "name": "Circle K",
        "logo": "🔴",
        "city": "Ukmergės",
        "address": "Kurėnų k., Ežero g. 7, 20102",
        "lat": 55.31198459,
        "lng": 24.78647188,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 2.199,
            "LPG": 0.879
        },
        "id": 225
    },
    {
        "name": "Circle K",
        "logo": "🔴",
        "city": "Kaunas",
        "address": "Mastaičių k., Baltijos g. 1, 53289",
        "lat": 54.81873562,
        "lng": 23.85781915,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 2.199,
            "LPG": 0.879
        },
        "id": 226
    },
    {
        "name": "Circle K",
        "logo": "🔴",
        "city": "Rokiškio",
        "address": "Rokiškis, Respublikos g. 111A, 42135",
        "lat": 55.95234124,
        "lng": 25.58961411,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 2.059,
            "LPG": 0.839
        },
        "id": 227
    },
    {
        "name": "Circle K",
        "logo": "🔴",
        "city": "Kalvarijos",
        "address": "Salaperaugio k., Europos g. 13a, 69286",
        "lat": 54.32286029,
        "lng": 23.14119228,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 2.199,
            "LPG": null
        },
        "id": 228
    },
    {
        "name": "Circle K",
        "logo": "🔴",
        "city": "Kalvarijos",
        "address": "Brazavo k., Muitinės g. 5B, 69231",
        "lat": 54.36818412,
        "lng": 23.18345708,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 2.199,
            "LPG": null
        },
        "id": 229
    },
    {
        "name": "Circle K",
        "logo": "🔴",
        "city": "Šiaulių",
        "address": "Kuršėnai, Plento g. 1, 81115",
        "lat": 55.9993472,
        "lng": 22.98980683,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 2.199,
            "LPG": 0.869
        },
        "id": 230
    },
    {
        "name": "Circle K",
        "logo": "🔴",
        "city": "Kaunas",
        "address": "Kaunas, Briedžių takas 6B, 49106",
        "lat": 54.93496769,
        "lng": 23.96616712,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 2.199,
            "LPG": 0.899
        },
        "id": 231
    },
    {
        "name": "Circle K",
        "logo": "🔴",
        "city": "Kaunas",
        "address": "Kaunas, Islandijos pl. 61C, 49117",
        "lat": 54.93361004,
        "lng": 23.96547073,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 2.199,
            "LPG": null
        },
        "id": 232
    },
    {
        "name": "Circle K",
        "logo": "🔴",
        "city": "Kretingos",
        "address": "Kretinga, Klaipėdos g. 155, 97156",
        "lat": 55.86361906,
        "lng": 21.21741287,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 2.059,
            "LPG": 0.899
        },
        "id": 233
    },
    {
        "name": "Degta",
        "logo": "⛽",
        "city": "Anykščių",
        "address": "Anykščiai, Vienuolio g. 34A, 29148",
        "lat": 55.5225227,
        "lng": 25.08828077,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.959,
            "LPG": 0.669
        },
        "id": 234
    },
    {
        "name": "Degta",
        "logo": "⛽",
        "city": "Rokiškio",
        "address": "Rokiškis, Respublikos g. 113B, 42150",
        "lat": 55.94673213,
        "lng": 25.59081483,
        "prices": {
            "A95": 1.839,
            "A98": null,
            "Diesel": 2.073,
            "LPG": 0.839
        },
        "id": 235
    },
    {
        "name": "Degta",
        "logo": "⛽",
        "city": "Elektrėnų",
        "address": "Vievis, Kauno g. 55A, 21371",
        "lat": 54.77508393,
        "lng": 24.81039813,
        "prices": {
            "A95": 1.929,
            "A98": null,
            "Diesel": 2.199,
            "LPG": 0.879
        },
        "id": 236
    },
    {
        "name": "Deguva",
        "logo": "⛽",
        "city": "Kaunas",
        "address": "Kaunas, Raudondvario pl. 234, 47158",
        "lat": 54.92113248,
        "lng": 23.82592563,
        "prices": {
            "A95": null,
            "A98": null,
            "Diesel": null,
            "LPG": 0.75
        },
        "id": 237
    },
    {
        "name": "Deliuvis",
        "logo": "⛽",
        "city": "Panevėžio",
        "address": "Panevėžys, G. Petkevičaitės-Bitės g. 35C, 37138",
        "lat": 55.72246287,
        "lng": 24.34226901,
        "prices": {
            "A95": 1.719,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.709
        },
        "id": 238
    },
    {
        "name": "Deliuvis",
        "logo": "⛽",
        "city": "Panevėžio",
        "address": "Panevėžys, Pušaloto g. 140, 35100",
        "lat": 55.74649742,
        "lng": 24.32992906,
        "prices": {
            "A95": 1.719,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.709
        },
        "id": 239
    },
    {
        "name": "Deliuvis",
        "logo": "⛽",
        "city": "Panevėžio",
        "address": "Panevėžys, S. Kerbedžio g. 2, 35135",
        "lat": 55.7432389,
        "lng": 24.34220048,
        "prices": {
            "A95": 1.719,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.709
        },
        "id": 240
    },
    {
        "name": "DVS Topolis",
        "logo": "⛽",
        "city": "Rokiškio",
        "address": "Rokiškis, Panevėžio g. 7C, 42163",
        "lat": 55.94317643,
        "lng": 25.58559008,
        "prices": {
            "A95": null,
            "A98": null,
            "Diesel": null,
            "LPG": 0.899
        },
        "id": 241
    },
    {
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Marijampolės",
        "address": "Marijampolė, Stoties g. 6B, 68110",
        "lat": 54.5651634,
        "lng": 23.3685594,
        "prices": {
            "A95": 1.729,
            "A98": null,
            "Diesel": 1.989,
            "LPG": 0.69
        },
        "id": 242
    },
    {
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Vilnius",
        "address": "Vilnius, Kareivių g. 4, 09109",
        "lat": 54.71780979,
        "lng": 25.29570785,
        "prices": {
            "A95": 1.729,
            "A98": null,
            "Diesel": 1.989,
            "LPG": 0.699
        },
        "id": 243
    },
    {
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Kaunas",
        "address": "Kaunas, Draugystės g. 8B, 51262",
        "lat": 54.90806211,
        "lng": 23.99208918,
        "prices": {
            "A95": 1.729,
            "A98": null,
            "Diesel": 1.989,
            "LPG": 0.699
        },
        "id": 244
    },
    {
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Marijampolės",
        "address": "Pietarių k., Kauno g. 165, 68100",
        "lat": 54.59288028,
        "lng": 23.3895944,
        "prices": {
            "A95": 1.729,
            "A98": null,
            "Diesel": 1.989,
            "LPG": 0.699
        },
        "id": 245
    },
    {
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Alytaus",
        "address": "Alytus, Ūdrijos g. 2, 62402",
        "lat": 54.40818386,
        "lng": 24.01664565,
        "prices": {
            "A95": 1.72,
            "A98": null,
            "Diesel": 1.98,
            "LPG": 0.69
        },
        "id": 246
    },
    {
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Kaišiadorių",
        "address": "Kaišiadorys, Paukštininkų g. 4a, 56160",
        "lat": 54.86429653,
        "lng": 24.4365125,
        "prices": {
            "A95": 1.729,
            "A98": null,
            "Diesel": 1.989,
            "LPG": 0.69
        },
        "id": 247
    },
    {
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Marijampolės",
        "address": "Skaisčiūnų k., Europos g. 11, 69338",
        "lat": 54.55838998,
        "lng": 23.27509219,
        "prices": {
            "A95": 1.729,
            "A98": null,
            "Diesel": 1.989,
            "LPG": 0.699
        },
        "id": 248
    },
    {
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Radviliškio",
        "address": "Radviliškis, Miško g. 62, 77158",
        "lat": 55.80188334,
        "lng": 23.56395801,
        "prices": {
            "A95": 1.729,
            "A98": null,
            "Diesel": 1.989,
            "LPG": 0.69
        },
        "id": 249
    },
    {
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Trakų",
        "address": "Sausių k., Sausių g. 2, 21401",
        "lat": 54.70748538,
        "lng": 24.99602824,
        "prices": {
            "A95": 1.72,
            "A98": null,
            "Diesel": 1.98,
            "LPG": 0.69
        },
        "id": 250
    },
    {
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Trakų",
        "address": "Lentvaris, Sodų g. 3, 25117",
        "lat": 54.64344711,
        "lng": 25.05337226,
        "prices": {
            "A95": 1.72,
            "A98": null,
            "Diesel": 1.98,
            "LPG": 0.699
        },
        "id": 251
    },
    {
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Vilnius",
        "address": "Bukiškis, Ukmergės g. 437, 14183",
        "lat": 54.75348736,
        "lng": 25.21176142,
        "prices": {
            "A95": 1.729,
            "A98": null,
            "Diesel": 1.989,
            "LPG": 0.69
        },
        "id": 252
    },
    {
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Vilnius",
        "address": "Maišiagala, Mokyklos g. 26, 14243",
        "lat": 54.87343023,
        "lng": 25.07348259,
        "prices": {
            "A95": 1.749,
            "A98": null,
            "Diesel": 2.009,
            "LPG": 0.719
        },
        "id": 253
    },
    {
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Vilnius",
        "address": "Kreivalaužių k., Taikos g. 1, 15166",
        "lat": 54.83569632,
        "lng": 25.46029697,
        "prices": {
            "A95": 1.72,
            "A98": null,
            "Diesel": 1.98,
            "LPG": 0.69
        },
        "id": 254
    },
    {
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Vilnius",
        "address": "Vilnius, Gunkliškių g. 2F, 02231",
        "lat": 54.62279493,
        "lng": 25.10535095,
        "prices": {
            "A95": 1.729,
            "A98": null,
            "Diesel": 1.989,
            "LPG": 0.699
        },
        "id": 255
    },
    {
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Vilnius",
        "address": "Vilnius, Kirtimų g. 33, 02300",
        "lat": 54.62720828,
        "lng": 25.14897108,
        "prices": {
            "A95": 1.729,
            "A98": null,
            "Diesel": 1.989,
            "LPG": 0.699
        },
        "id": 256
    },
    {
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Vilnius",
        "address": "Vilnius, Pajautos g. 31, 06200",
        "lat": 54.7104024,
        "lng": 25.16198676,
        "prices": {
            "A95": 1.729,
            "A98": null,
            "Diesel": 1.989,
            "LPG": 0.69
        },
        "id": 257
    },
    {
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Vilnius",
        "address": "Vilnius, Liepkalnio g. 112A, 02121",
        "lat": 54.65275983,
        "lng": 25.30571446,
        "prices": {
            "A95": 1.729,
            "A98": null,
            "Diesel": 1.989,
            "LPG": 0.69
        },
        "id": 258
    },
    {
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Vilnius",
        "address": "Vilnius, Savanorių pr. 225, 02300",
        "lat": 54.64104106,
        "lng": 25.18403844,
        "prices": {
            "A95": 1.729,
            "A98": null,
            "Diesel": 1.989,
            "LPG": 0.699
        },
        "id": 259
    },
    {
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Vilnius",
        "address": "Vilnius, Spyglių g. 2, 27101",
        "lat": 54.66843137,
        "lng": 25.11165178,
        "prices": {
            "A95": 1.729,
            "A98": null,
            "Diesel": 1.989,
            "LPG": 0.699
        },
        "id": 260
    },
    {
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Vilnius",
        "address": "Vilnius, Jeruzalės g. 2, 08414",
        "lat": 54.73986548,
        "lng": 25.27610011,
        "prices": {
            "A95": 1.729,
            "A98": null,
            "Diesel": 1.989,
            "LPG": 0.699
        },
        "id": 261
    },
    {
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Vilnius",
        "address": "Vilnius, Laisvės pr. 80B, 06125",
        "lat": 54.72347679,
        "lng": 25.23316721,
        "prices": {
            "A95": 1.729,
            "A98": null,
            "Diesel": 1.989,
            "LPG": 0.699
        },
        "id": 262
    },
    {
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Vilkaviškio",
        "address": "Vilkaviškis, S. Nėries g. 38, 70165",
        "lat": 54.65794056,
        "lng": 23.03319489,
        "prices": {
            "A95": 1.729,
            "A98": null,
            "Diesel": 1.989,
            "LPG": 0.69
        },
        "id": 263
    },
    {
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Šilutės",
        "address": "Šilutė, Gluosnių g. 4A, 99116",
        "lat": 55.34875031,
        "lng": 21.46922756,
        "prices": {
            "A95": 1.72,
            "A98": null,
            "Diesel": 1.98,
            "LPG": 0.69
        },
        "id": 264
    },
    {
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Šiaulių",
        "address": "Šiauliai, Sembos g. 5, 78347",
        "lat": 55.89892732,
        "lng": 23.27165395,
        "prices": {
            "A95": 1.729,
            "A98": null,
            "Diesel": 1.989,
            "LPG": 0.69
        },
        "id": 265
    },
    {
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Raseinių",
        "address": "Ariogala, Žemaičių g. 30, 60255",
        "lat": 55.2587905,
        "lng": 23.49594104,
        "prices": {
            "A95": 1.779,
            "A98": null,
            "Diesel": 2.079,
            "LPG": 0.739
        },
        "id": 266
    },
    {
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Raseinių",
        "address": "Raščių k. 1A, 60298",
        "lat": 55.27820222,
        "lng": 23.34160651,
        "prices": {
            "A95": 1.729,
            "A98": null,
            "Diesel": 1.989,
            "LPG": 0.699
        },
        "id": 267
    },
    {
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Pasvalio",
        "address": "Pasvalys, Taikos g. 24, 39132",
        "lat": 56.06369768,
        "lng": 24.42631703,
        "prices": {
            "A95": 1.729,
            "A98": null,
            "Diesel": 1.989,
            "LPG": 0.69
        },
        "id": 268
    },
    {
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Pasvalio",
        "address": "Sereikonių k., Baltijos kelio g. 2, 39236",
        "lat": 55.90641342,
        "lng": 24.33865077,
        "prices": {
            "A95": 1.739,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.709
        },
        "id": 269
    },
    {
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Panevėžio",
        "address": "Šilagalio k., Panevėžio aplinkl. 12, 38242",
        "lat": 55.66976948,
        "lng": 24.34633601,
        "prices": {
            "A95": 1.729,
            "A98": null,
            "Diesel": 1.989,
            "LPG": 0.699
        },
        "id": 270
    },
    {
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Panevėžio",
        "address": "Panevėžys, Ramygalos g. 186A, 36224",
        "lat": 55.71017122,
        "lng": 24.37247296,
        "prices": {
            "A95": 1.729,
            "A98": null,
            "Diesel": 1.989,
            "LPG": 0.699
        },
        "id": 271
    },
    {
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Panevėžio",
        "address": "Panevėžys, Nemuno g. 79A, 35189",
        "lat": 55.73193471,
        "lng": 24.34074924,
        "prices": {
            "A95": 1.729,
            "A98": null,
            "Diesel": 1.989,
            "LPG": 0.699
        },
        "id": 272
    },
    {
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Lazdijų",
        "address": "Lazdijų sen., Janaslavo k. 11, 67170",
        "lat": 54.17576376,
        "lng": 23.48093878,
        "prices": {
            "A95": 1.729,
            "A98": null,
            "Diesel": 1.989,
            "LPG": null
        },
        "id": 273
    },
    {
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Klaipėda",
        "address": "Jonušų k., Durpyno g. 63, 96173",
        "lat": 55.7116895,
        "lng": 21.26507038,
        "prices": {
            "A95": 1.729,
            "A98": null,
            "Diesel": 1.989,
            "LPG": 0.69
        },
        "id": 274
    },
    {
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Klaipėda",
        "address": "Kalotės k., Medelyno g. 126, 96332",
        "lat": 55.79029011,
        "lng": 21.14171224,
        "prices": {
            "A95": 1.72,
            "A98": null,
            "Diesel": 1.98,
            "LPG": 0.69
        },
        "id": 275
    },
    {
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Klaipėda",
        "address": "Klaipėda, Minijos g. 154A, 93263",
        "lat": 55.66860732,
        "lng": 21.15908678,
        "prices": {
            "A95": 1.69,
            "A98": null,
            "Diesel": 1.98,
            "LPG": 0.69
        },
        "id": 276
    },
    {
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Klaipėda",
        "address": "Klaipėda, Taikos pr. 124, 94286",
        "lat": 55.66121606,
        "lng": 21.17621496,
        "prices": {
            "A95": 1.69,
            "A98": null,
            "Diesel": 1.98,
            "LPG": 0.69
        },
        "id": 277
    },
    {
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Kėdainių",
        "address": "Juodgirio k. 1, 58212",
        "lat": 55.19737936,
        "lng": 23.62609323,
        "prices": {
            "A95": 1.779,
            "A98": null,
            "Diesel": 2.079,
            "LPG": 0.759
        },
        "id": 278
    },
    {
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Kaunas",
        "address": "Kaunas, Vandžiogalos pl. 86A, 47478",
        "lat": 54.95162513,
        "lng": 23.89359938,
        "prices": {
            "A95": 1.72,
            "A98": null,
            "Diesel": 1.98,
            "LPG": 0.69
        },
        "id": 279
    },
    {
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Kaunas",
        "address": "Ilgakiemio k., Kauno g. 25, 53288",
        "lat": 54.78374136,
        "lng": 23.87666965,
        "prices": {
            "A95": 1.729,
            "A98": null,
            "Diesel": 1.989,
            "LPG": 0.69
        },
        "id": 280
    },
    {
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Kaunas",
        "address": "Mastaičių k., Marijampolės g. 58, 53285",
        "lat": 54.8095364,
        "lng": 23.8537512,
        "prices": {
            "A95": 1.729,
            "A98": null,
            "Diesel": 1.989,
            "LPG": 0.69
        },
        "id": 281
    },
    {
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Kaunas",
        "address": "Žemaitkiemis, S. Krasausko g. 21, 54340",
        "lat": 54.9719611,
        "lng": 23.85907355,
        "prices": {
            "A95": 1.729,
            "A98": null,
            "Diesel": 1.989,
            "LPG": 0.699
        },
        "id": 282
    },
    {
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Kaunas",
        "address": "Kaunas, Jonavos g. 292B, 44131",
        "lat": 54.9323864,
        "lng": 23.91794337,
        "prices": {
            "A95": 1.729,
            "A98": null,
            "Diesel": 1.989,
            "LPG": 0.69
        },
        "id": 283
    },
    {
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Kaunas",
        "address": "Kaunas, T. Masiulio g. 16A, 52375",
        "lat": 54.88508067,
        "lng": 24.00607542,
        "prices": {
            "A95": 1.729,
            "A98": null,
            "Diesel": 1.989,
            "LPG": 0.699
        },
        "id": 284
    },
    {
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Kaunas",
        "address": "Kaunas, Armoniškių g. 31, 46401",
        "lat": 54.85928939,
        "lng": 23.83691046,
        "prices": {
            "A95": 1.729,
            "A98": null,
            "Diesel": 1.989,
            "LPG": 0.699
        },
        "id": 285
    },
    {
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Kaunas",
        "address": "Kaunas, Palemono g. 3A, 52159",
        "lat": 54.90102166,
        "lng": 24.03125527,
        "prices": {
            "A95": 1.72,
            "A98": null,
            "Diesel": 1.98,
            "LPG": null
        },
        "id": 286
    },
    {
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Kaunas",
        "address": "Kaunas, Ateities pl. 40B, 52112",
        "lat": 54.92181644,
        "lng": 24.04739708,
        "prices": {
            "A95": 1.729,
            "A98": null,
            "Diesel": 1.989,
            "LPG": null
        },
        "id": 287
    },
    {
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Jonavos",
        "address": "Jonava, Vasario 16-osios g. 70, 55165",
        "lat": 55.07088633,
        "lng": 24.25883229,
        "prices": {
            "A95": 1.729,
            "A98": null,
            "Diesel": 1.989,
            "LPG": null
        },
        "id": 288
    },
    {
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Biržų",
        "address": "Biržai, Jaunimo g. 2a, 41168",
        "lat": 56.20767348,
        "lng": 24.7707614,
        "prices": {
            "A95": 1.729,
            "A98": null,
            "Diesel": 1.989,
            "LPG": 0.69
        },
        "id": 289
    },
    {
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Vilnius",
        "address": "Medininkų k., Pasieniečių g.10, 13192",
        "lat": 54.54956282,
        "lng": 25.67990653,
        "prices": {
            "A95": 1.829,
            "A98": null,
            "Diesel": 2.089,
            "LPG": null
        },
        "id": 290
    },
    {
        "name": "Milda",
        "logo": "⛽",
        "city": "Telšių",
        "address": "Telšiai, Mažeikių g. 1, 87101",
        "lat": 55.99974214,
        "lng": 22.24134565,
        "prices": {
            "A95": 1.84,
            "A98": null,
            "Diesel": 2.14,
            "LPG": 0.79
        },
        "id": 291
    },
    {
        "name": "Milda",
        "logo": "⛽",
        "city": "Telšių",
        "address": "Rainių k., Telšių g. 2B, 88401",
        "lat": 55.95661542,
        "lng": 22.30115967,
        "prices": {
            "A95": 1.84,
            "A98": null,
            "Diesel": 2.14,
            "LPG": 0.79
        },
        "id": 292
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
            "Diesel": 2.03,
            "LPG": 0.71
        },
        "id": 293
    },
    {
        "name": "Kvistija",
        "logo": "⛽",
        "city": "Mažeikių",
        "address": "Mažeikiai, Laižuvos g. 82d, 89213",
        "lat": 56.31360111,
        "lng": 22.36826858,
        "prices": {
            "A95": 1.719,
            "A98": null,
            "Diesel": 2.039,
            "LPG": 0.739
        },
        "id": 294
    },
    {
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Kelmės",
        "address": "Kelmė, Putvinskio g. 29, 86113",
        "lat": 55.64120559,
        "lng": 22.92737617,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 2.039,
            "LPG": 0.749
        },
        "id": 295
    },
    {
        "name": "Kvistija",
        "logo": "⛽",
        "city": "Kėdainių",
        "address": "Ruoščių k. 1, 57109",
        "lat": 55.33618253,
        "lng": 23.91491716,
        "prices": {
            "A95": 1.773,
            "A98": null,
            "Diesel": 2.064,
            "LPG": 0.79
        },
        "id": 296
    },
    {
        "name": "Kvistija",
        "logo": "⛽",
        "city": "Kaišiadorių",
        "address": "Bačkonių k., Pastrėvio g. 1A, 56240",
        "lat": 54.80250729,
        "lng": 24.50215726,
        "prices": {
            "A95": 1.789,
            "A98": null,
            "Diesel": 2.089,
            "LPG": 0.76
        },
        "id": 297
    },
    {
        "name": "Milda",
        "logo": "⛽",
        "city": "Prienų",
        "address": "Mardosų k., Alytaus pl. 2, 59240",
        "lat": 54.50894152,
        "lng": 23.90953504,
        "prices": {
            "A95": 1.73,
            "A98": null,
            "Diesel": 2.04,
            "LPG": 0.76
        },
        "id": 298
    },
    {
        "name": "Milda",
        "logo": "⛽",
        "city": "Kretingos",
        "address": "Kretinga, Tiekėjų g. 34a, 97187",
        "lat": 55.88446681,
        "lng": 21.22162825,
        "prices": {
            "A95": 1.85,
            "A98": null,
            "Diesel": 2.13,
            "LPG": 0.89
        },
        "id": 299
    },
    {
        "name": "Kvistija",
        "logo": "⛽",
        "city": "Lazdijų",
        "address": "Alytaus g. 59, Krosnos k., 67443",
        "lat": 54.37908395,
        "lng": 23.5285495,
        "prices": {
            "A95": 1.749,
            "A98": null,
            "Diesel": 2.029,
            "LPG": 0.749
        },
        "id": 300
    },
    {
        "name": "Milda",
        "logo": "⛽",
        "city": "Šilalės",
        "address": "Šilalė, Rytinio Kelio g. 2a, 75122",
        "lat": 55.48590577,
        "lng": 22.19940808,
        "prices": {
            "A95": 1.8,
            "A98": null,
            "Diesel": 2.03,
            "LPG": 0.73
        },
        "id": 301
    },
    {
        "name": "Kvistija",
        "logo": "⛽",
        "city": "Vilnius",
        "address": "Kalnuotės 1 k. 15130",
        "lat": 54.94469576,
        "lng": 25.34424273,
        "prices": {
            "A95": 1.729,
            "A98": null,
            "Diesel": 2.019,
            "LPG": 0.789
        },
        "id": 302
    },
    {
        "name": "Kvistija",
        "logo": "⛽",
        "city": "Telšių",
        "address": "Tryškiai, Beržų g. 24/Drąsiųjų g. 7, 88155",
        "lat": 56.06254871,
        "lng": 22.58247782,
        "prices": {
            "A95": 1.85,
            "A98": null,
            "Diesel": 2.14,
            "LPG": 0.86
        },
        "id": 303
    },
    {
        "name": "Kvistija",
        "logo": "⛽",
        "city": "Kelmės",
        "address": "Užventis, Žemaitės g. 52, 86343",
        "lat": 55.78626896,
        "lng": 22.67103988,
        "prices": {
            "A95": 1.82,
            "A98": null,
            "Diesel": 2.05,
            "LPG": 0.84
        },
        "id": 304
    },
    {
        "name": "Milda",
        "logo": "⛽",
        "city": "Kretingos",
        "address": "Laivių k., Platelių g. 1a, 97317",
        "lat": 56.06316548,
        "lng": 21.58209235,
        "prices": {
            "A95": 1.86,
            "A98": null,
            "Diesel": 2.14,
            "LPG": 0.89
        },
        "id": 305
    },
    {
        "name": "Milda",
        "logo": "⛽",
        "city": "Pagėgių",
        "address": "Pagėgiai, Klaipėdos g. 6b, 99290",
        "lat": 55.14044207,
        "lng": 21.90325589,
        "prices": {
            "A95": 1.88,
            "A98": null,
            "Diesel": 2.11,
            "LPG": 0.79
        },
        "id": 306
    },
    {
        "name": "Milda",
        "logo": "⛽",
        "city": "Šilutės",
        "address": "Žemaičių Naumiestis, Klaipėdos g. 76, 99206",
        "lat": 55.35530481,
        "lng": 21.68003241,
        "prices": {
            "A95": 1.88,
            "A98": null,
            "Diesel": 2.11,
            "LPG": 0.85
        },
        "id": 307
    },
    {
        "name": "Kvistija",
        "logo": "⛽",
        "city": "Skuodo",
        "address": "Stripinių k., Skuodo g. 7, 98347",
        "lat": 56.28388299,
        "lng": 21.83305372,
        "prices": {
            "A95": 1.86,
            "A98": null,
            "Diesel": 2.14,
            "LPG": 0.85
        },
        "id": 308
    },
    {
        "name": "Milda",
        "logo": "⛽",
        "city": "Tauragės",
        "address": "Skaudvilė, Adakavo g. 1, 73435",
        "lat": 55.40159838,
        "lng": 22.5977644,
        "prices": {
            "A95": 1.85,
            "A98": null,
            "Diesel": 2.12,
            "LPG": 0.87
        },
        "id": 309
    },
    {
        "name": "Milda",
        "logo": "⛽",
        "city": "Jurbarko",
        "address": "Rimšų k., Tauragės g. 29, 74280",
        "lat": 55.26204357,
        "lng": 22.69181995,
        "prices": {
            "A95": 1.85,
            "A98": null,
            "Diesel": 2.12,
            "LPG": 0.87
        },
        "id": 310
    },
    {
        "name": "Milda",
        "logo": "⛽",
        "city": "Plungės",
        "address": "Minijos g. 1, Aleksandravo k., 90390",
        "lat": 55.92923165,
        "lng": 21.6199133,
        "prices": {
            "A95": 1.81,
            "A98": null,
            "Diesel": 2.07,
            "LPG": 0.87
        },
        "id": 311
    },
    {
        "name": "Milda",
        "logo": "⛽",
        "city": "Šilalės",
        "address": "Vabalų k., Paršežerio g. 1, 75406",
        "lat": 55.61976015,
        "lng": 22.24641341,
        "prices": {
            "A95": 1.81,
            "A98": null,
            "Diesel": 2.08,
            "LPG": 0.79
        },
        "id": 312
    },
    {
        "name": "Kvistija",
        "logo": "⛽",
        "city": "Akmenės",
        "address": "Venta, Plento g. 2, 85302",
        "lat": 56.1943071,
        "lng": 22.6779004,
        "prices": {
            "A95": 1.759,
            "A98": null,
            "Diesel": 2.029,
            "LPG": 0.729
        },
        "id": 313
    },
    {
        "name": "Milda",
        "logo": "⛽",
        "city": "Plungės",
        "address": "Plungė, Dariaus ir Girėno g. 31, 90118",
        "lat": 55.91994008,
        "lng": 21.85709942,
        "prices": {
            "A95": 1.74,
            "A98": null,
            "Diesel": 2.04,
            "LPG": 0.74
        },
        "id": 314
    },
    {
        "name": "Kvistija",
        "logo": "⛽",
        "city": "Akmenės",
        "address": "Skabeikių k. 4, 85233",
        "lat": 56.16014254,
        "lng": 22.76073507,
        "prices": {
            "A95": 1.759,
            "A98": null,
            "Diesel": 2.029,
            "LPG": 0.729
        },
        "id": 315
    },
    {
        "name": "EU Verslas",
        "logo": "⛽",
        "city": "Mažeikių",
        "address": "Mažeikiai, Viekšnių g. 24, 89235",
        "lat": 56.30424052,
        "lng": 22.36034828,
        "prices": {
            "A95": 1.689,
            "A98": null,
            "Diesel": 1.989,
            "LPG": 0.699
        },
        "id": 316
    },
    {
        "name": "EU Verslas",
        "logo": "⛽",
        "city": "Plungės",
        "address": "Jovaišiškės k., Telšių g. 127, 90107",
        "lat": 55.90807594,
        "lng": 21.87150917,
        "prices": {
            "A95": 1.689,
            "A98": null,
            "Diesel": 1.989,
            "LPG": 0.699
        },
        "id": 317
    },
    {
        "name": "EU Verslas",
        "logo": "⛽",
        "city": "Plungės",
        "address": "Plungė, Stoties g. 7C, 90115",
        "lat": 55.92037282,
        "lng": 21.83227625,
        "prices": {
            "A95": 1.69,
            "A98": null,
            "Diesel": 1.99,
            "LPG": 0.7
        },
        "id": 318
    },
    {
        "name": "EU Verslas",
        "logo": "⛽",
        "city": "Plungės",
        "address": "Plungė, Rietavo g. 109, 90106",
        "lat": 55.8956274,
        "lng": 21.86206183,
        "prices": {
            "A95": 1.694,
            "A98": null,
            "Diesel": 2.049,
            "LPG": null
        },
        "id": 319
    },
    {
        "name": "Gazimpeksas",
        "logo": "⛽",
        "city": "Telšių",
        "address": "Telšiai, Mažeikių g. 7A, 87101",
        "lat": 56.00052967,
        "lng": 22.24738508,
        "prices": {
            "A95": null,
            "A98": null,
            "Diesel": null,
            "LPG": 0.72
        },
        "id": 320
    },
    {
        "name": "Gelvybė",
        "logo": "⛽",
        "city": "Vilkaviškio",
        "address": "Rūdos k., Marijampolės g. 8, 70313",
        "lat": 54.60190628,
        "lng": 23.19493466,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.71
        },
        "id": 321
    },
    {
        "name": "Gelvybė",
        "logo": "⛽",
        "city": "Kėdainių",
        "address": "Aristava, Aristavos g. 4, 58111",
        "lat": 55.29715858,
        "lng": 24.07702013,
        "prices": {
            "A95": 1.81,
            "A98": null,
            "Diesel": 2.11,
            "LPG": 0.76
        },
        "id": 322
    },
    {
        "name": "Gelvybė",
        "logo": "⛽",
        "city": "Šakių",
        "address": "Girėnai, Kauno g. 50, 71129",
        "lat": 54.9528389,
        "lng": 23.08023645,
        "prices": {
            "A95": 1.819,
            "A98": null,
            "Diesel": 2.119,
            "LPG": 0.73
        },
        "id": 323
    },
    {
        "name": "Gelvybė",
        "logo": "⛽",
        "city": "Šakių",
        "address": "Šakiai, V. Kudirkos g. 11D, 71124",
        "lat": 54.95418698,
        "lng": 23.02456981,
        "prices": {
            "A95": 1.819,
            "A98": null,
            "Diesel": 2.119,
            "LPG": 0.73
        },
        "id": 324
    },
    {
        "name": "Gelvybė",
        "logo": "⛽",
        "city": "Jurbarko",
        "address": "Jurbarkas, Knygnešių g. 9, 74212",
        "lat": 55.08548938,
        "lng": 22.74549699,
        "prices": {
            "A95": 1.819,
            "A98": null,
            "Diesel": 2.119,
            "LPG": 0.72
        },
        "id": 325
    },
    {
        "name": "Gelvybė",
        "logo": "⛽",
        "city": "Jurbarko",
        "address": "Jurbarkas, Muitinės g. 32, 74111",
        "lat": 55.07714633,
        "lng": 22.7510279,
        "prices": {
            "A95": 1.819,
            "A98": null,
            "Diesel": 2.119,
            "LPG": 0.72
        },
        "id": 326
    },
    {
        "name": "Gelvybė",
        "logo": "⛽",
        "city": "Jurbarko",
        "address": "Jurbarkas, S. Daukanto g. 66, 74170",
        "lat": 55.08252673,
        "lng": 22.78879208,
        "prices": {
            "A95": 1.819,
            "A98": null,
            "Diesel": 2.119,
            "LPG": 0.72
        },
        "id": 327
    },
    {
        "name": "Gelvybė",
        "logo": "⛽",
        "city": "Šakių",
        "address": "Kiduliai, Sūduvos g. 3, 71400",
        "lat": 55.06387545,
        "lng": 22.7807238,
        "prices": {
            "A95": 1.819,
            "A98": null,
            "Diesel": 2.119,
            "LPG": 0.72
        },
        "id": 328
    },
    {
        "name": "Gelvybė",
        "logo": "⛽",
        "city": "Jurbarko",
        "address": "Seredžius, S. Šimkaus g. 69, 74425",
        "lat": 55.07883072,
        "lng": 23.39670955,
        "prices": {
            "A95": 1.779,
            "A98": null,
            "Diesel": 2.119,
            "LPG": null
        },
        "id": 329
    },
    {
        "name": "Gelvybė",
        "logo": "⛽",
        "city": "Šakių",
        "address": "Mozūriškiai, Mozūriškių 10, 71382",
        "lat": 55.02160289,
        "lng": 22.96955865,
        "prices": {
            "A95": 1.81,
            "A98": null,
            "Diesel": 2.11,
            "LPG": null
        },
        "id": 330
    },
    {
        "name": "Circle K",
        "logo": "🔴",
        "city": "Šakių",
        "address": "Girėnų k., Kauno g. 68, 71129",
        "lat": 54.95270984,
        "lng": 23.08327244,
        "prices": {
            "A95": 1.897,
            "A98": null,
            "Diesel": 2.157,
            "LPG": 0.877
        },
        "id": 331
    },
    {
        "name": "Circle K",
        "logo": "🔴",
        "city": "Jurbarko",
        "address": "Jurbarkas, Muitinės g. 34A, 74106",
        "lat": 55.07687545,
        "lng": 22.75185569,
        "prices": {
            "A95": 1.897,
            "A98": null,
            "Diesel": 2.157,
            "LPG": null
        },
        "id": 332
    },
    {
        "name": "Jozita",
        "logo": "🟡",
        "city": "Vilnius",
        "address": "Vilnius, Ukmergės g. 130, 08100",
        "lat": 54.70315163,
        "lng": 25.25767359,
        "prices": {
            "A95": 1.79,
            "A98": null,
            "Diesel": 2.02,
            "LPG": 0.68
        },
        "id": 333
    },
    {
        "name": "Jozita",
        "logo": "🟡",
        "city": "Vilnius",
        "address": "Vilnius, Parko g. 64, 11225",
        "lat": 54.6858009,
        "lng": 25.43066254,
        "prices": {
            "A95": 1.79,
            "A98": null,
            "Diesel": 2.02,
            "LPG": 0.68
        },
        "id": 334
    },
    {
        "name": "Jozita",
        "logo": "🟡",
        "city": "Šiaulių",
        "address": "Šiauliai, Architektų g. 80, 78171",
        "lat": 55.92468487,
        "lng": 23.27950691,
        "prices": {
            "A95": 1.79,
            "A98": null,
            "Diesel": 2.02,
            "LPG": 0.68
        },
        "id": 335
    },
    {
        "name": "Jozita",
        "logo": "🟡",
        "city": "Šiaulių",
        "address": "Šiauliai, Girulių g. 1, 78132",
        "lat": 55.92217758,
        "lng": 23.29711011,
        "prices": {
            "A95": 1.79,
            "A98": null,
            "Diesel": 2.02,
            "LPG": 0.68
        },
        "id": 336
    },
    {
        "name": "Jozita",
        "logo": "🟡",
        "city": "Panevėžio",
        "address": "Panevėžys, S. Kerbedžio g. 7F, 35104",
        "lat": 55.74485479,
        "lng": 24.34624311,
        "prices": {
            "A95": 1.79,
            "A98": null,
            "Diesel": 2.02,
            "LPG": 0.68
        },
        "id": 337
    },
    {
        "name": "Jozita",
        "logo": "🟡",
        "city": "Pakruojo",
        "address": "Kuosiškių k. 4, 83169",
        "lat": 55.96574878,
        "lng": 23.87950201,
        "prices": {
            "A95": 1.79,
            "A98": null,
            "Diesel": 2.02,
            "LPG": 0.68
        },
        "id": 338
    },
    {
        "name": "Jozita",
        "logo": "🟡",
        "city": "Klaipėda",
        "address": "Gargždai, Gamyklos g. 1, 96155",
        "lat": 55.70637751,
        "lng": 21.36341966,
        "prices": {
            "A95": 1.79,
            "A98": null,
            "Diesel": 2.02,
            "LPG": 0.68
        },
        "id": 339
    },
    {
        "name": "Jozita",
        "logo": "🟡",
        "city": "Kelmės",
        "address": "Kelmė, V. Putvinskio g. 37, 86113",
        "lat": 55.64324953,
        "lng": 22.92529473,
        "prices": {
            "A95": 1.79,
            "A98": null,
            "Diesel": 2.02,
            "LPG": 0.68
        },
        "id": 340
    },
    {
        "name": "Jozita",
        "logo": "🟡",
        "city": "Raseinių",
        "address": "Raseiniai, Maironio g. 78b, 60120",
        "lat": 55.38981847,
        "lng": 23.13070213,
        "prices": {
            "A95": 1.79,
            "A98": null,
            "Diesel": 2.02,
            "LPG": 0.68
        },
        "id": 341
    },
    {
        "name": "Jozita",
        "logo": "🟡",
        "city": "Šiaulių",
        "address": "Toliočiai, Plento g. 2B, 76322",
        "lat": 55.95420807,
        "lng": 23.25587789,
        "prices": {
            "A95": 1.79,
            "A98": null,
            "Diesel": 2.02,
            "LPG": 0.68
        },
        "id": 342
    },
    {
        "name": "Jozita",
        "logo": "🟡",
        "city": "Vilnius",
        "address": "Vilnius, Pramonės g. 18, 11115",
        "lat": 54.69581905,
        "lng": 25.4321327,
        "prices": {
            "A95": 1.79,
            "A98": null,
            "Diesel": 2.02,
            "LPG": 0.68
        },
        "id": 343
    },
    {
        "name": "Jozita",
        "logo": "🟡",
        "city": "Kaunas",
        "address": "Kaunas, Partizanų g. 87G, 50312",
        "lat": 54.92715408,
        "lng": 23.99908832,
        "prices": {
            "A95": 1.79,
            "A98": null,
            "Diesel": 2.02,
            "LPG": 0.68
        },
        "id": 344
    },
    {
        "name": "Jozita",
        "logo": "🟡",
        "city": "Klaipėda",
        "address": "Klaipėda, Taikos pr. 157, 94285",
        "lat": 55.66114992,
        "lng": 21.17803218,
        "prices": {
            "A95": 1.79,
            "A98": null,
            "Diesel": 2.02,
            "LPG": 0.68
        },
        "id": 345
    },
    {
        "name": "Jozita",
        "logo": "🟡",
        "city": "Šilalės",
        "address": "Šolių k., Pietinio Kelio g. 9, 75126",
        "lat": 55.48544344,
        "lng": 22.17070703,
        "prices": {
            "A95": 1.79,
            "A98": null,
            "Diesel": 2.02,
            "LPG": 0.68
        },
        "id": 346
    },
    {
        "name": "Jozita",
        "logo": "🟡",
        "city": "Šilutės",
        "address": "Traksėdžių k., Klaipėdos. 60, 99104",
        "lat": 55.3768551,
        "lng": 21.47025918,
        "prices": {
            "A95": 1.79,
            "A98": null,
            "Diesel": 2.02,
            "LPG": 0.68
        },
        "id": 347
    },
    {
        "name": "Jozita",
        "logo": "🟡",
        "city": "Kaunas",
        "address": "Kaunas, Baltų pr. 141A, 47126",
        "lat": 54.92273614,
        "lng": 23.86997257,
        "prices": {
            "A95": 1.79,
            "A98": null,
            "Diesel": 2.02,
            "LPG": 0.68
        },
        "id": 348
    },
    {
        "name": "Jozita",
        "logo": "🟡",
        "city": "Kaunas",
        "address": "Kaunas, Betygalos g. 8, 47183",
        "lat": 54.90426633,
        "lng": 23.87980101,
        "prices": {
            "A95": 1.79,
            "A98": null,
            "Diesel": 2.02,
            "LPG": 0.68
        },
        "id": 349
    },
    {
        "name": "Jozita",
        "logo": "🟡",
        "city": "Kaunas",
        "address": "Kaunas, Jonavos g. 51, 44131",
        "lat": 54.93397974,
        "lng": 23.91781149,
        "prices": {
            "A95": 1.79,
            "A98": null,
            "Diesel": 2.02,
            "LPG": 0.68
        },
        "id": 350
    },
    {
        "name": "Jozita",
        "logo": "🟡",
        "city": "Kaunas",
        "address": "Garliava, Vytauto g. 111A, 53253",
        "lat": 54.82814917,
        "lng": 23.87336136,
        "prices": {
            "A95": 1.79,
            "A98": null,
            "Diesel": 2.02,
            "LPG": 0.68
        },
        "id": 351
    },
    {
        "name": "Jozita",
        "logo": "🟡",
        "city": "Kaunas",
        "address": "Ramučiai, K. Bielinio g. 2A, 54465",
        "lat": 54.94394603,
        "lng": 24.03606816,
        "prices": {
            "A95": 1.79,
            "A98": null,
            "Diesel": 2.02,
            "LPG": 0.68
        },
        "id": 352
    },
    {
        "name": "Jozita",
        "logo": "🟡",
        "city": "Plungės",
        "address": "Varkaliai, Žemaičių g. 2A, 90105",
        "lat": 55.8970141,
        "lng": 21.82134466,
        "prices": {
            "A95": 1.79,
            "A98": null,
            "Diesel": 2.02,
            "LPG": 0.68
        },
        "id": 353
    },
    {
        "name": "Jozita",
        "logo": "🟡",
        "city": "Vilnius",
        "address": "Rudamina, Jašiūnų g. 2, 13255",
        "lat": 54.59727647,
        "lng": 25.31505057,
        "prices": {
            "A95": 1.79,
            "A98": null,
            "Diesel": 2.02,
            "LPG": 0.68
        },
        "id": 354
    },
    {
        "name": "Jozita",
        "logo": "🟡",
        "city": "Kaunas",
        "address": "Kaunas, Kuršių g. 13A, 48109",
        "lat": 54.93606993,
        "lng": 23.89589698,
        "prices": {
            "A95": 1.79,
            "A98": null,
            "Diesel": 2.02,
            "LPG": 0.68
        },
        "id": 355
    },
    {
        "name": "Jozita",
        "logo": "🟡",
        "city": "Klaipėda",
        "address": "Slengių k., Šilelių g. 1, 92338",
        "lat": 55.75139882,
        "lng": 21.17309858,
        "prices": {
            "A95": 1.79,
            "A98": null,
            "Diesel": 2.02,
            "LPG": 0.68
        },
        "id": 356
    },
    {
        "name": "Jozita",
        "logo": "🟡",
        "city": "Klaipėda",
        "address": "Trepkalnių k., Mokyklos g. 2, 96278",
        "lat": 55.60850758,
        "lng": 21.5940438,
        "prices": {
            "A95": 1.79,
            "A98": null,
            "Diesel": 2.02,
            "LPG": 0.68
        },
        "id": 357
    },
    {
        "name": "Jozita",
        "logo": "🟡",
        "city": "Klaipėda",
        "address": "Klaipėda, Priestočio g. 26, 92228",
        "lat": 55.71931201,
        "lng": 21.14014973,
        "prices": {
            "A95": null,
            "A98": null,
            "Diesel": null,
            "LPG": 0.68
        },
        "id": 358
    },
    {
        "name": "Jozita",
        "logo": "🟡",
        "city": "Raseinių",
        "address": "Raseiniai, Liepų g. 10E, 60119",
        "lat": 55.39156323,
        "lng": 23.12748593,
        "prices": {
            "A95": null,
            "A98": null,
            "Diesel": null,
            "LPG": 0.68
        },
        "id": 359
    },
    {
        "name": "Jozita",
        "logo": "🟡",
        "city": "Vilnius",
        "address": "Vilnius, Baltosios Vokės g. 35, 02243",
        "lat": 54.6135577,
        "lng": 25.18343704,
        "prices": {
            "A95": null,
            "A98": null,
            "Diesel": null,
            "LPG": 0.68
        },
        "id": 360
    },
    {
        "name": "Jozita",
        "logo": "🟡",
        "city": "Šilutės",
        "address": "Šilutė, Šiaurės g. 1, 99116",
        "lat": 55.35611678,
        "lng": 21.4689682,
        "prices": {
            "A95": null,
            "A98": null,
            "Diesel": null,
            "LPG": 0.68
        },
        "id": 361
    },
    {
        "name": "Junasa",
        "logo": "⛽",
        "city": "Šiaulių",
        "address": "Šiauliai, Bačiūnų g. 12a, 77109",
        "lat": 55.89789464,
        "lng": 23.35174183,
        "prices": {
            "A95": 1.729,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.69
        },
        "id": 362
    },
    {
        "name": "Junasa",
        "logo": "⛽",
        "city": "Šiaulių",
        "address": "Šiauliai, Žemaitės g. 131c, 76175",
        "lat": 55.94801517,
        "lng": 23.32052749,
        "prices": {
            "A95": 1.729,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.69
        },
        "id": 363
    },
    {
        "name": "Junasa",
        "logo": "⛽",
        "city": "Šiaulių",
        "address": "Gruzdžiai, M. Katiliškio g. 50, 81428",
        "lat": 56.09973108,
        "lng": 23.26565865,
        "prices": {
            "A95": 1.729,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.69
        },
        "id": 364
    },
    {
        "name": "Kenaoil",
        "logo": "⛽",
        "city": "Vilnius",
        "address": "Kena, Miško g. 6, 13146",
        "lat": 54.64612066,
        "lng": 25.62504638,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 2.199,
            "LPG": 0.859
        },
        "id": 365
    },
    {
        "name": "Kriketas",
        "logo": "⛽",
        "city": "Trakų",
        "address": "Trakai, Senkelio g. 13, 21107",
        "lat": 54.63073536,
        "lng": 24.92213754,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 2.199,
            "LPG": 0.889
        },
        "id": 366
    },
    {
        "name": "Leosta",
        "logo": "⛽",
        "city": "Telšių",
        "address": "Luokė, Telšių g. 66, 88236",
        "lat": 55.90135275,
        "lng": 22.50630756,
        "prices": {
            "A95": 1.86,
            "A98": null,
            "Diesel": 2.15,
            "LPG": 0.8
        },
        "id": 367
    },
    {
        "name": "Littaura",
        "logo": "⛽",
        "city": "Tauragės",
        "address": "Tauragė, Pramonės g. 6, 72324",
        "lat": 55.23830084,
        "lng": 22.29774041,
        "prices": {
            "A95": 1.73,
            "A98": null,
            "Diesel": 2.02,
            "LPG": null
        },
        "id": 368
    },
    {
        "name": "Madalva",
        "logo": "⛽",
        "city": "Tauragės",
        "address": "Žygaičių k., Žygaičių g. 2, 73282",
        "lat": 55.3039813,
        "lng": 22.04142297,
        "prices": {
            "A95": 1.77,
            "A98": null,
            "Diesel": 1.99,
            "LPG": 0.67
        },
        "id": 369
    },
    {
        "name": "Madalva",
        "logo": "⛽",
        "city": "Plungės",
        "address": "Plungė, Lentpjūvės g. 10A, 90118",
        "lat": 55.92139497,
        "lng": 21.85263657,
        "prices": {
            "A95": null,
            "A98": null,
            "Diesel": null,
            "LPG": 0.67
        },
        "id": 370
    },
    {
        "name": "Madalva",
        "logo": "⛽",
        "city": "Šilalės",
        "address": "Gineikių k., 75445",
        "lat": 55.54188502,
        "lng": 22.49162063,
        "prices": {
            "A95": null,
            "A98": null,
            "Diesel": null,
            "LPG": 0.75
        },
        "id": 371
    },
    {
        "name": "Madalva",
        "logo": "⛽",
        "city": "Tauragės",
        "address": "Tauragė, Dariaus ir Girėno g. 49, 72221",
        "lat": 55.2582747,
        "lng": 22.29462552,
        "prices": {
            "A95": null,
            "A98": null,
            "Diesel": null,
            "LPG": 0.67
        },
        "id": 372
    },
    {
        "name": "Madalva",
        "logo": "⛽",
        "city": "Tauragės",
        "address": "Tauragė, Pramonės g. 10A, 72359",
        "lat": 55.23631436,
        "lng": 22.2969472,
        "prices": {
            "A95": null,
            "A98": null,
            "Diesel": null,
            "LPG": 0.67
        },
        "id": 373
    },
    {
        "name": "Medelsta",
        "logo": "⛽",
        "city": "Vilnius",
        "address": "Pagirių k., Durpių g. 45, 14118",
        "lat": 54.56927739,
        "lng": 25.1881691,
        "prices": {
            "A95": 1.81,
            "A98": null,
            "Diesel": 2.11,
            "LPG": 0.81
        },
        "id": 374
    },
    {
        "name": "Melkasta",
        "logo": "⛽",
        "city": "Vilkaviškio",
        "address": "Gulbiniškių k. 7, 70481",
        "lat": 54.71202557,
        "lng": 23.20795419,
        "prices": {
            "A95": 1.77,
            "A98": null,
            "Diesel": 2.03,
            "LPG": 0.75
        },
        "id": 375
    },
    {
        "name": "Melkasta",
        "logo": "⛽",
        "city": "Lazdijų",
        "address": "Kalvelių k., Lazdijų pl. 29, 67333",
        "lat": 54.10611625,
        "lng": 23.67379451,
        "prices": {
            "A95": 1.76,
            "A98": null,
            "Diesel": 2.06,
            "LPG": 0.75
        },
        "id": 376
    },
    {
        "name": "Melkasta",
        "logo": "⛽",
        "city": "Lazdijų",
        "address": "Seirijai, Algirdo g. 35A, 67227",
        "lat": 54.23947414,
        "lng": 23.82318032,
        "prices": {
            "A95": 1.76,
            "A98": null,
            "Diesel": 2.06,
            "LPG": 0.75
        },
        "id": 377
    },
    {
        "name": "Mindega",
        "logo": "⛽",
        "city": "Kėdainių",
        "address": "Šėta, Ramygalos g. 55, 58129",
        "lat": 55.29043244,
        "lng": 24.25254785,
        "prices": {
            "A95": 1.78,
            "A98": null,
            "Diesel": 2.08,
            "LPG": null
        },
        "id": 378
    },
    {
        "name": "RV",
        "logo": "⛽",
        "city": "Mažeikių",
        "address": "Mažeikiai, Daukšos g. 29 / Žemaitijos g. 69, 89132",
        "lat": 56.31888105,
        "lng": 22.31891853,
        "prices": {
            "A95": null,
            "A98": null,
            "Diesel": null,
            "LPG": 0.73
        },
        "id": 379
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
            "LPG": 0.71
        },
        "id": 380
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
            "LPG": 0.85
        },
        "id": 381
    },
    {
        "name": "Circle K",
        "logo": "🔴",
        "city": "Anykščių",
        "address": "Pumpučiai, Pumpučių g. 25, 29253",
        "lat": 55.42441012,
        "lng": 24.92009398,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 2.099,
            "LPG": 0.789
        },
        "id": 382
    },
    {
        "name": "Narjanta",
        "logo": "⛽",
        "city": "Anykščių",
        "address": "Sausalaukės k. 2, 29345",
        "lat": 55.67583971,
        "lng": 25.35866829,
        "prices": {
            "A95": 1.769,
            "A98": null,
            "Diesel": 2.089,
            "LPG": 0.749
        },
        "id": 383
    },
    {
        "name": "Narjanta",
        "logo": "⛽",
        "city": "Biržų",
        "address": "Vabalninkas, S. Nėries g. 35, 41341",
        "lat": 55.97494629,
        "lng": 24.74019418,
        "prices": {
            "A95": 1.779,
            "A98": null,
            "Diesel": 2.089,
            "LPG": 0.74
        },
        "id": 384
    },
    {
        "name": "Narjanta",
        "logo": "⛽",
        "city": "Anykščių",
        "address": "Troškūnai, Vilniaus g. 32, 29306",
        "lat": 55.58490114,
        "lng": 24.878353,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 2.089,
            "LPG": 0.719
        },
        "id": 385
    },
    {
        "name": "Narjanta",
        "logo": "⛽",
        "city": "Kupiškio",
        "address": "Dvariškių vs. 2, 40402",
        "lat": 55.77341402,
        "lng": 24.75432742,
        "prices": {
            "A95": 1.769,
            "A98": null,
            "Diesel": 2.079,
            "LPG": 0.719
        },
        "id": 386
    },
    {
        "name": "Circle K",
        "logo": "🔴",
        "city": "Kupiškio",
        "address": "Aleksandrijos k., Kikonių g. 10, 40335",
        "lat": 55.83425341,
        "lng": 25.00932459,
        "prices": {
            "A95": 1.829,
            "A98": null,
            "Diesel": 2.119,
            "LPG": 0.799
        },
        "id": 387
    },
    {
        "name": "Neste Europos",
        "logo": "🟢",
        "city": "Kaunas",
        "address": "Kaunas, Europos pr. 43, 46329",
        "lat": 54.87533761,
        "lng": 23.91149586,
        "prices": {
            "A95": 1.839,
            "A98": null,
            "Diesel": 2.104,
            "LPG": null
        },
        "id": 388
    },
    {
        "name": "Neste Volvo",
        "logo": "🟢",
        "city": "Kaunas",
        "address": "Kaunas, Vakarinis aplinkkelis 18, 48182",
        "lat": 54.93380582,
        "lng": 23.86774429,
        "prices": {
            "A95": 1.829,
            "A98": null,
            "Diesel": 2.099,
            "LPG": null
        },
        "id": 389
    },
    {
        "name": "Neste Kalantos",
        "logo": "🟢",
        "city": "Kaunas",
        "address": "Kaunas, R. Kalantos g. 27, 52303",
        "lat": 54.89507456,
        "lng": 23.9859429,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 2.049,
            "LPG": null
        },
        "id": 390
    },
    {
        "name": "Neste Žemaičių",
        "logo": "🟢",
        "city": "Kaunas",
        "address": "Kaunas, Žemaičių pl. 26, 48256",
        "lat": 54.92551059,
        "lng": 23.89179378,
        "prices": {
            "A95": 1.789,
            "A98": null,
            "Diesel": 2.054,
            "LPG": null
        },
        "id": 391
    },
    {
        "name": "Neste Gariūnų",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Vilnius, Gariūnų g. 55, 02300",
        "lat": 54.65831512,
        "lng": 25.15884432,
        "prices": {
            "A95": 1.769,
            "A98": null,
            "Diesel": 2.069,
            "LPG": null
        },
        "id": 392
    },
    {
        "name": "Neste Veiverių",
        "logo": "🟢",
        "city": "Kaunas",
        "address": "Kaunas, Veiverių g. 132D, 46337",
        "lat": 54.87574128,
        "lng": 23.8909283,
        "prices": {
            "A95": 1.844,
            "A98": null,
            "Diesel": 2.109,
            "LPG": null
        },
        "id": 393
    },
    {
        "name": "Neste Stanevičiaus",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Vilnius, S. Stanevičiaus g. 3, 07131",
        "lat": 54.7215145,
        "lng": 25.25609519,
        "prices": {
            "A95": 1.769,
            "A98": null,
            "Diesel": 2.059,
            "LPG": null
        },
        "id": 394
    },
    {
        "name": "Neste Savanorių 1",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Vilnius, Savanorių pr. 220A, 02301",
        "lat": 54.64420273,
        "lng": 25.20700105,
        "prices": {
            "A95": 1.759,
            "A98": null,
            "Diesel": 2.049,
            "LPG": null
        },
        "id": 395
    },
    {
        "name": "Neste Ateities",
        "logo": "🟢",
        "city": "Kaunas",
        "address": "Kaunas, Ateities pl. 50B, 52106",
        "lat": 54.92621497,
        "lng": 24.06032415,
        "prices": {
            "A95": 1.779,
            "A98": null,
            "Diesel": 2.049,
            "LPG": null
        },
        "id": 396
    },
    {
        "name": "Neste Raudondvario",
        "logo": "🟢",
        "city": "Kaunas",
        "address": "Kaunas, Raudondvario pl. 103, 47185",
        "lat": 54.90684397,
        "lng": 23.87286134,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 2.059,
            "LPG": null
        },
        "id": 397
    },
    {
        "name": "Neste Ramučių",
        "logo": "🟢",
        "city": "Kaunas",
        "address": "Ramučių k., Vijoklių g. 1C, 54467",
        "lat": 54.94834483,
        "lng": 24.01782278,
        "prices": {
            "A95": 1.789,
            "A98": null,
            "Diesel": 2.079,
            "LPG": null
        },
        "id": 398
    },
    {
        "name": "Neste Sendvario",
        "logo": "🟢",
        "city": "Klaipėda",
        "address": "Klaipėda, Šilutės pl. 5C, 91109",
        "lat": 55.70317515,
        "lng": 21.16478469,
        "prices": {
            "A95": 1.769,
            "A98": null,
            "Diesel": 2.059,
            "LPG": null
        },
        "id": 399
    },
    {
        "name": "Neste Sudmantų",
        "logo": "🟢",
        "city": "Klaipėda",
        "address": "Sudmantų k., Sendvario g. 2, 96327",
        "lat": 55.70607105,
        "lng": 21.20258886,
        "prices": {
            "A95": 1.819,
            "A98": null,
            "Diesel": 2.099,
            "LPG": null
        },
        "id": 400
    },
    {
        "name": "Neste Jakų",
        "logo": "🟢",
        "city": "Klaipėda",
        "address": "Jakų k., Vilniaus pl. 9, 96322",
        "lat": 55.70660388,
        "lng": 21.23857198,
        "prices": {
            "A95": 1.819,
            "A98": null,
            "Diesel": 2.109,
            "LPG": null
        },
        "id": 401
    },
    {
        "name": "Neste Tarpučių",
        "logo": "🟢",
        "city": "Marijampolės",
        "address": "Marijampolė, Vilkaviškio g. 61D, 68153",
        "lat": 54.56257376,
        "lng": 23.33242248,
        "prices": {
            "A95": 1.774,
            "A98": null,
            "Diesel": 2.064,
            "LPG": null
        },
        "id": 402
    },
    {
        "name": "Neste Tilžės",
        "logo": "🟢",
        "city": "Šiaulių",
        "address": "Šiauliai, Tilžės g. 72, 78140",
        "lat": 55.92028679,
        "lng": 23.29299782,
        "prices": {
            "A95": 1.789,
            "A98": null,
            "Diesel": 2.079,
            "LPG": null
        },
        "id": 403
    },
    {
        "name": "Neste Architektų",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Vilnius, Architektų g. 130, 04216",
        "lat": 54.68085604,
        "lng": 25.2076123,
        "prices": {
            "A95": 1.794,
            "A98": null,
            "Diesel": 2.084,
            "LPG": null
        },
        "id": 404
    },
    {
        "name": "Neste Ozo",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Vilnius, Geležinio Vilko g. 63, 08104",
        "lat": 54.71194857,
        "lng": 25.27062107,
        "prices": {
            "A95": 1.779,
            "A98": null,
            "Diesel": 2.059,
            "LPG": null
        },
        "id": 405
    },
    {
        "name": "Neste Plento",
        "logo": "🟢",
        "city": "Jonavos",
        "address": "Gudžionių k., Šilų sen., Plento g. 7, 55462",
        "lat": 55.09548702,
        "lng": 24.312631,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 2.099,
            "LPG": null
        },
        "id": 406
    },
    {
        "name": "Neste Birželio",
        "logo": "🟢",
        "city": "Kaunas",
        "address": "Kaunas, Birželio 23-iosios g. 23A, 50220",
        "lat": 54.91624068,
        "lng": 23.95403333,
        "prices": {
            "A95": 1.819,
            "A98": null,
            "Diesel": 2.089,
            "LPG": null
        },
        "id": 407
    },
    {
        "name": "Neste Pramonės",
        "logo": "🟢",
        "city": "Kaunas",
        "address": "Kaunas, Pramonės pr. 6A, 51267",
        "lat": 54.90996075,
        "lng": 23.98372534,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 2.079,
            "LPG": null
        },
        "id": 408
    },
    {
        "name": "Neste Trakų Vokės",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Vilnius, J. Tiškevičiaus g. 19, 02231",
        "lat": 54.62430171,
        "lng": 25.11168144,
        "prices": {
            "A95": 1.814,
            "A98": null,
            "Diesel": 2.104,
            "LPG": null
        },
        "id": 409
    },
    {
        "name": "Neste Lukšio",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Vilnius, P. Lukšio g. 22, 09108",
        "lat": 54.71195348,
        "lng": 25.2930421,
        "prices": {
            "A95": 1.779,
            "A98": null,
            "Diesel": 2.059,
            "LPG": null
        },
        "id": 410
    },
    {
        "name": "Neste Savanorių 2",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Vilnius, Savanorių pr. 187, 02300",
        "lat": 54.6481153,
        "lng": 25.21246187,
        "prices": {
            "A95": 1.769,
            "A98": null,
            "Diesel": 2.059,
            "LPG": null
        },
        "id": 411
    },
    {
        "name": "Neste Minties",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Vilnius, Žirmūnų g. 54C, 08233",
        "lat": 54.70674499,
        "lng": 25.30416264,
        "prices": {
            "A95": 1.789,
            "A98": null,
            "Diesel": 2.064,
            "LPG": null
        },
        "id": 412
    },
    {
        "name": "Neste Taikos žiedo",
        "logo": "🟢",
        "city": "Kaunas",
        "address": "Kaunas, Taikos pr. 80A, 50441",
        "lat": 54.91210539,
        "lng": 23.97261751,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 2.079,
            "LPG": null
        },
        "id": 413
    },
    {
        "name": "Neste Šilutės",
        "logo": "🟢",
        "city": "Klaipėda",
        "address": "Klaipėda, Plieno g. 1, 95112",
        "lat": 55.67296055,
        "lng": 21.20099933,
        "prices": {
            "A95": 1.779,
            "A98": null,
            "Diesel": 2.069,
            "LPG": null
        },
        "id": 414
    },
    {
        "name": "Neste Molėtų",
        "logo": "🟢",
        "city": "Molėtų",
        "address": "Molėtai, Aplinkkelio g. 165, 33134",
        "lat": 55.22158553,
        "lng": 25.43648772,
        "prices": {
            "A95": 1.779,
            "A98": null,
            "Diesel": 2.069,
            "LPG": null
        },
        "id": 415
    },
    {
        "name": "Neste Klaipėdos",
        "logo": "🟢",
        "city": "Panevėžio",
        "address": "Panevėžys, Klaipėdos g. 66,  35193",
        "lat": 55.72778019,
        "lng": 24.34883948,
        "prices": {
            "A95": 1.749,
            "A98": null,
            "Diesel": 2.049,
            "LPG": null
        },
        "id": 416
    },
    {
        "name": "Neste Šilagalio žiedo",
        "logo": "🟢",
        "city": "Panevėžio",
        "address": "Šilagalio k., Panevėžio aplinkl. 22, 36258",
        "lat": 55.6730312,
        "lng": 24.33425114,
        "prices": {
            "A95": 1.759,
            "A98": null,
            "Diesel": 2.049,
            "LPG": null
        },
        "id": 417
    },
    {
        "name": "Neste Autoturgaus",
        "logo": "🟢",
        "city": "Utenos",
        "address": "Utena, Kupiškio g. 12, 28135",
        "lat": 55.48153495,
        "lng": 25.57886011,
        "prices": {
            "A95": 1.784,
            "A98": null,
            "Diesel": 2.064,
            "LPG": null
        },
        "id": 418
    },
    {
        "name": "Neste Santariškių",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Vilnius, Molėtų pl. 8, 08426",
        "lat": 54.75488718,
        "lng": 25.27125497,
        "prices": {
            "A95": 1.769,
            "A98": null,
            "Diesel": 2.049,
            "LPG": null
        },
        "id": 419
    },
    {
        "name": "Neste Litexpo",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Vilnius, Parodų g. 1A, 04133",
        "lat": 54.67343871,
        "lng": 25.22405147,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 2.089,
            "LPG": null
        },
        "id": 420
    },
    {
        "name": "Neste Ūdrijos",
        "logo": "🟢",
        "city": "Alytaus",
        "address": "Alytus, Ūdrijos g. 31, 62411",
        "lat": 54.40896245,
        "lng": 24.00518818,
        "prices": {
            "A95": 1.789,
            "A98": null,
            "Diesel": 2.049,
            "LPG": null
        },
        "id": 421
    },
    {
        "name": "Neste Kėdainiai",
        "logo": "🟢",
        "city": "Kėdainių",
        "address": "Kėdainiai, J. Basanavičiaus g. 91E, 57356",
        "lat": 55.27812915,
        "lng": 23.95995689,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 2.099,
            "LPG": null
        },
        "id": 422
    },
    {
        "name": "Neste Smiltelės",
        "logo": "🟢",
        "city": "Klaipėda",
        "address": "Klaipėda, Smiltelės g. 17, 95188",
        "lat": 55.67008471,
        "lng": 21.19290936,
        "prices": {
            "A95": 1.779,
            "A98": null,
            "Diesel": 2.069,
            "LPG": null
        },
        "id": 423
    },
    {
        "name": "Neste Baltijos",
        "logo": "🟢",
        "city": "Klaipėda",
        "address": "Klaipėda, Šilutės pl. 30, 91177",
        "lat": 55.69313682,
        "lng": 21.17500963,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 2.059,
            "LPG": null
        },
        "id": 424
    },
    {
        "name": "Neste Dubijos",
        "logo": "🟢",
        "city": "Šiaulių",
        "address": "Šiauliai, Dubijos g. 18A, 77172",
        "lat": 55.92929146,
        "lng": 23.29432274,
        "prices": {
            "A95": 1.789,
            "A98": null,
            "Diesel": 2.079,
            "LPG": null
        },
        "id": 425
    },
    {
        "name": "Neste Telšių",
        "logo": "🟢",
        "city": "Telšių",
        "address": "Gaudikaičių k., Šiaulių pl. 1A, 87100",
        "lat": 56.00499642,
        "lng": 22.24023016,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 2.099,
            "LPG": null
        },
        "id": 426
    },
    {
        "name": "Neste Žirmūnų",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Vilnius, Žirmūnų g. 68B, 09113",
        "lat": 54.7175698,
        "lng": 25.30451201,
        "prices": {
            "A95": 1.789,
            "A98": null,
            "Diesel": 2.064,
            "LPG": null
        },
        "id": 427
    },
    {
        "name": "Neste Žirnių",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Vilnius, Žirnių g. 17, 02118",
        "lat": 54.65654975,
        "lng": 25.29212601,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 2.069,
            "LPG": null
        },
        "id": 428
    },
    {
        "name": "Neste Santaikos",
        "logo": "🟢",
        "city": "Alytaus",
        "address": "Alytus, Santaikos g. 34A, 62123",
        "lat": 54.3871462,
        "lng": 24.02632757,
        "prices": {
            "A95": 1.789,
            "A98": null,
            "Diesel": 2.049,
            "LPG": null
        },
        "id": 429
    },
    {
        "name": "Neste Kalvarijos 1",
        "logo": "🟢",
        "city": "Kalvarijos",
        "address": "Salaperaugio k., Europos g. 1, 69286",
        "lat": 54.32982918,
        "lng": 23.15021843,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 2.099,
            "LPG": null
        },
        "id": 430
    },
    {
        "name": "Neste Islandijos",
        "logo": "🟢",
        "city": "Kaunas",
        "address": "Kaunas, Islandijos pl. 191E, 49168",
        "lat": 54.93142643,
        "lng": 23.9508213,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 2.079,
            "LPG": null
        },
        "id": 431
    },
    {
        "name": "Neste Tunelio",
        "logo": "🟢",
        "city": "Kaunas",
        "address": "Kaunas, Tunelio g. 26, 44391",
        "lat": 54.89482331,
        "lng": 23.94423536,
        "prices": {
            "A95": 1.819,
            "A98": null,
            "Diesel": 2.079,
            "LPG": null
        },
        "id": 432
    },
    {
        "name": "Neste Minijos",
        "logo": "🟢",
        "city": "Klaipėda",
        "address": "Klaipėda, Minijos g. 119, 93231",
        "lat": 55.6844148,
        "lng": 21.14962984,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 2.089,
            "LPG": null
        },
        "id": 433
    },
    {
        "name": "Neste Taikos",
        "logo": "🟢",
        "city": "Klaipėda",
        "address": "Klaipėda, Taikos pr. 60, 93225",
        "lat": 55.68892678,
        "lng": 21.15516377,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 2.089,
            "LPG": null
        },
        "id": 434
    },
    {
        "name": "Neste Stoties",
        "logo": "🟢",
        "city": "Marijampolės",
        "address": "Marijampolė, Stoties g. 4C, 68112",
        "lat": 54.5603953,
        "lng": 23.36592312,
        "prices": {
            "A95": 1.779,
            "A98": null,
            "Diesel": 2.069,
            "LPG": null
        },
        "id": 435
    },
    {
        "name": "Neste Mažeikių",
        "logo": "🟢",
        "city": "Mažeikių",
        "address": "Mažeikiai, M. Daukšos g. 29, 89132",
        "lat": 56.30125177,
        "lng": 22.34984919,
        "prices": {
            "A95": 1.729,
            "A98": null,
            "Diesel": 2.059,
            "LPG": null
        },
        "id": 436
    },
    {
        "name": "Neste IKI",
        "logo": "🟢",
        "city": "Panevėžio",
        "address": "Panevėžys, Klaipėdos g. 81, 37106",
        "lat": 55.72842472,
        "lng": 24.33235879,
        "prices": {
            "A95": 1.749,
            "A98": null,
            "Diesel": 2.059,
            "LPG": null
        },
        "id": 437
    },
    {
        "name": "Neste Šilagalio k.",
        "logo": "🟢",
        "city": "Panevėžio",
        "address": "Šilagalio k., Panevėžio aplinkl. 7, 36224",
        "lat": 55.67039884,
        "lng": 24.34842719,
        "prices": {
            "A95": 1.769,
            "A98": null,
            "Diesel": 2.059,
            "LPG": null
        },
        "id": 438
    },
    {
        "name": "Neste Pasvalio r.",
        "logo": "🟢",
        "city": "Pasvalio",
        "address": "Raubonių k., Ąžuolpamūšio g. 1A, 39447",
        "lat": 56.11515934,
        "lng": 24.47056855,
        "prices": {
            "A95": 1.779,
            "A98": null,
            "Diesel": 2.064,
            "LPG": null
        },
        "id": 439
    },
    {
        "name": "Neste Basanavičiaus",
        "logo": "🟢",
        "city": "Utenos",
        "address": "Utena, J. Basanavičiaus g. 129, 28216",
        "lat": 55.50509587,
        "lng": 25.62460582,
        "prices": {
            "A95": 1.789,
            "A98": null,
            "Diesel": 2.069,
            "LPG": null
        },
        "id": 440
    },
    {
        "name": "Neste Lazdynų",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Vilnius, Erfurto g. 41, 04226",
        "lat": 54.67261311,
        "lng": 25.19828086,
        "prices": {
            "A95": 1.789,
            "A98": null,
            "Diesel": 2.079,
            "LPG": null
        },
        "id": 441
    },
    {
        "name": "Neste Žalgirio",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Vilnius, Geležinio Vilko g. 41, 09300",
        "lat": 54.70411134,
        "lng": 25.26689437,
        "prices": {
            "A95": 1.689,
            "A98": null,
            "Diesel": 1.949,
            "LPG": null
        },
        "id": 442
    },
    {
        "name": "Neste Subačiaus",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Vilnius, Subačiaus g. 64, 11342",
        "lat": 54.6767547,
        "lng": 25.30961868,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 2.079,
            "LPG": null
        },
        "id": 443
    },
    {
        "name": "Neste Elektrėnų",
        "logo": "🟢",
        "city": "Elektrėnų",
        "address": "Elektrėnai, Sabališkių g. 1U, 26141",
        "lat": 54.78951932,
        "lng": 24.6727424,
        "prices": {
            "A95": 1.819,
            "A98": null,
            "Diesel": 2.099,
            "LPG": null
        },
        "id": 444
    },
    {
        "name": "Neste Jonavos",
        "logo": "🟢",
        "city": "Kaunas",
        "address": "Kaunas, Jonavos g. 110, 44136",
        "lat": 54.91330579,
        "lng": 23.91162096,
        "prices": {
            "A95": 1.789,
            "A98": null,
            "Diesel": 2.059,
            "LPG": null
        },
        "id": 445
    },
    {
        "name": "Neste Muravos",
        "logo": "🟢",
        "city": "Kaunas",
        "address": "Kaunas, Savanorių pr. 441C, 49185",
        "lat": 54.92937829,
        "lng": 23.97344608,
        "prices": {
            "A95": 1.789,
            "A98": null,
            "Diesel": 2.069,
            "LPG": null
        },
        "id": 446
    },
    {
        "name": "Neste Nikola",
        "logo": "🟢",
        "city": "Raseinių",
        "address": "Ylių k., Pušyno g. 11, 60389",
        "lat": 55.41180526,
        "lng": 22.83067426,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 2.079,
            "LPG": null
        },
        "id": 447
    },
    {
        "name": "Neste Gegužių",
        "logo": "🟢",
        "city": "Šiaulių",
        "address": "Šiauliai, Gegužių g. 28, 78348",
        "lat": 55.90607227,
        "lng": 23.25950627,
        "prices": {
            "A95": 1.779,
            "A98": null,
            "Diesel": 2.069,
            "LPG": null
        },
        "id": 448
    },
    {
        "name": "Neste Šilalės r.",
        "logo": "🟢",
        "city": "Šilalės",
        "address": "Katyčių k., 75493",
        "lat": 55.52118315,
        "lng": 22.36597948,
        "prices": {
            "A95": 1.789,
            "A98": null,
            "Diesel": 2.069,
            "LPG": null
        },
        "id": 449
    },
    {
        "name": "Neste Tauragės",
        "logo": "🟢",
        "city": "Tauragės",
        "address": "Tauragė, Dariaus ir Girėno g. 130A, 72194",
        "lat": 55.26530031,
        "lng": 22.30879847,
        "prices": {
            "A95": 1.769,
            "A98": null,
            "Diesel": 2.049,
            "LPG": null
        },
        "id": 450
    },
    {
        "name": "Neste Saltoniškių",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Vilnius, Geležinio Vilko g. 37A, 08104",
        "lat": 54.70159069,
        "lng": 25.2637035,
        "prices": {
            "A95": 1.689,
            "A98": null,
            "Diesel": 1.949,
            "LPG": null
        },
        "id": 451
    },
    {
        "name": "Neste Talino",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Vilnius, Talino g. 2C, 05200",
        "lat": 54.71389839,
        "lng": 25.20897449,
        "prices": {
            "A95": 1.789,
            "A98": null,
            "Diesel": 2.069,
            "LPG": null
        },
        "id": 452
    },
    {
        "name": "Neste Pabradės",
        "logo": "🟢",
        "city": "Švenčionių",
        "address": "Pabradė, Vilniaus g. 94, 18177",
        "lat": 54.97878559,
        "lng": 25.75627752,
        "prices": {
            "A95": 1.819,
            "A98": null,
            "Diesel": 2.109,
            "LPG": null
        },
        "id": 453
    },
    {
        "name": "Neste Eišiškių",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Vilnius, Eišiškių pl. 82, 02200",
        "lat": 54.6213243,
        "lng": 25.24291719,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 2.079,
            "LPG": null
        },
        "id": 454
    },
    {
        "name": "Neste Kauno",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Vilnius, Kauno g. 26, 03212",
        "lat": 54.67162,
        "lng": 25.27010479,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 2.079,
            "LPG": null
        },
        "id": 455
    },
    {
        "name": "Neste RIMI",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Vilnius, Kedrų g. 2, 03159",
        "lat": 54.67723152,
        "lng": 25.25564009,
        "prices": {
            "A95": 1.819,
            "A98": null,
            "Diesel": 2.099,
            "LPG": null
        },
        "id": 456
    },
    {
        "name": "Neste Panerių",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Vilnius, Panerių g. 42, 03202",
        "lat": 54.66800392,
        "lng": 25.264745,
        "prices": {
            "A95": 1.789,
            "A98": null,
            "Diesel": 2.059,
            "LPG": null
        },
        "id": 457
    },
    {
        "name": "Neste Pilaitės",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Vilnius, Pilaitės pr. 27, 06269",
        "lat": 54.70886335,
        "lng": 25.18973269,
        "prices": {
            "A95": 1.769,
            "A98": null,
            "Diesel": 2.029,
            "LPG": null
        },
        "id": 458
    },
    {
        "name": "Neste Domeikavos",
        "logo": "🟢",
        "city": "Kaunas",
        "address": "Kumpių k., Vakarų g. 14, 47425",
        "lat": 54.94988175,
        "lng": 23.87381207,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 2.069,
            "LPG": null
        },
        "id": 459
    },
    {
        "name": "Neste Babilonas",
        "logo": "🟢",
        "city": "Panevėžio",
        "address": "Panevežys, Klaipėdos g. 144B, 37376",
        "lat": 55.73066174,
        "lng": 24.31609133,
        "prices": {
            "A95": 1.714,
            "A98": null,
            "Diesel": 1.994,
            "LPG": null
        },
        "id": 460
    },
    {
        "name": "Neste Nemuno",
        "logo": "🟢",
        "city": "Panevėžio",
        "address": "Panevėžys, Margirio g. 1B, 36248",
        "lat": 55.7194182,
        "lng": 24.34887409,
        "prices": {
            "A95": 1.749,
            "A98": null,
            "Diesel": 2.049,
            "LPG": null
        },
        "id": 461
    },
    {
        "name": "Neste Ramygalos",
        "logo": "🟢",
        "city": "Panevėžio",
        "address": "Panevėžys, Ramygalos g. 145B, 36225",
        "lat": 55.7095446,
        "lng": 24.37474543,
        "prices": {
            "A95": 1.759,
            "A98": null,
            "Diesel": 2.044,
            "LPG": null
        },
        "id": 462
    },
    {
        "name": "Neste Radviliškio",
        "logo": "🟢",
        "city": "Radviliškio",
        "address": "Radviliškis, Versmės g. 2, 82197",
        "lat": 55.81393383,
        "lng": 23.54574116,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 2.069,
            "LPG": null
        },
        "id": 463
    },
    {
        "name": "Neste Viršuliškių",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Vilnius, Justiniškių g. 14B, 05131",
        "lat": 54.70514157,
        "lng": 25.21498724,
        "prices": {
            "A95": 1.779,
            "A98": null,
            "Diesel": 2.059,
            "LPG": null
        },
        "id": 464
    },
    {
        "name": "Neste Liepkalnio",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Vilnius, Servečės g. 2, 02121",
        "lat": 54.63377618,
        "lng": 25.30449719,
        "prices": {
            "A95": 1.789,
            "A98": null,
            "Diesel": 2.049,
            "LPG": null
        },
        "id": 465
    },
    {
        "name": "Neste Gabijos",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Vilnius, Ukmergės g. 296, 12105",
        "lat": 54.7361926,
        "lng": 25.23107129,
        "prices": {
            "A95": 1.789,
            "A98": null,
            "Diesel": 2.059,
            "LPG": null
        },
        "id": 466
    },
    {
        "name": "Neste Kirtimų",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Vilnius, Dariaus ir Girėno g. 17, 02169",
        "lat": 54.65506269,
        "lng": 25.2707125,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 2.089,
            "LPG": null
        },
        "id": 467
    },
    {
        "name": "Neste Justiniškių",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Vilnius, Rygos g. 2, 05259",
        "lat": 54.71560308,
        "lng": 25.22894257,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 2.069,
            "LPG": null
        },
        "id": 468
    },
    {
        "name": "Neste Ukmergės",
        "logo": "🟢",
        "city": "Ukmergės",
        "address": "Ukmergė, Kauno g. 45B, 20119",
        "lat": 55.24205427,
        "lng": 24.74290832,
        "prices": {
            "A95": 1.789,
            "A98": null,
            "Diesel": 2.049,
            "LPG": null
        },
        "id": 469
    },
    {
        "name": "Neste Artojo",
        "logo": "🟢",
        "city": "Klaipėda",
        "address": "Klaipėda, Artojo g. 2, 92105",
        "lat": 55.71767746,
        "lng": 21.15173274,
        "prices": {
            "A95": 1.789,
            "A98": null,
            "Diesel": 2.059,
            "LPG": null
        },
        "id": 470
    },
    {
        "name": "Neste Kuršių",
        "logo": "🟢",
        "city": "Kaunas",
        "address": "Kaunas, Kuršių g. 1, 48106",
        "lat": 54.93617743,
        "lng": 23.88528448,
        "prices": {
            "A95": 1.789,
            "A98": null,
            "Diesel": 2.059,
            "LPG": null
        },
        "id": 471
    },
    {
        "name": "Neste Kalvarijos 2",
        "logo": "🟢",
        "city": "Kalvarijos",
        "address": "N. Valios k., Europos g. 6, 69270",
        "lat": 54.32824715,
        "lng": 23.15056195,
        "prices": {
            "A95": null,
            "A98": null,
            "Diesel": 2.099,
            "LPG": null
        },
        "id": 472
    },
    {
        "name": "RV Transport",
        "logo": "⛽",
        "city": "Kalvarijos",
        "address": "Kazlavo k. 4, 69285",
        "lat": 54.32896988,
        "lng": 23.1484464,
        "prices": {
            "A95": 1.8,
            "A98": null,
            "Diesel": 2.08,
            "LPG": null
        },
        "id": 473
    },
    {
        "name": "Osijos dujos",
        "logo": "⛽",
        "city": "Vilkaviškio",
        "address": "Osijos k., Pamiškės g. 1, 70205",
        "lat": 54.63650296,
        "lng": 23.00654875,
        "prices": {
            "A95": null,
            "A98": null,
            "Diesel": null,
            "LPG": 0.8
        },
        "id": 474
    },
    {
        "name": "Pakelės namai",
        "logo": "⛽",
        "city": "Pasvalio",
        "address": "Škilinpamūšio k., Liepų g. 4, 39421",
        "lat": 56.26753355,
        "lng": 24.37097378,
        "prices": {
            "A95": 1.81,
            "A98": null,
            "Diesel": 2.05,
            "LPG": 0.85
        },
        "id": 475
    },
    {
        "name": "Pakelės namai",
        "logo": "⛽",
        "city": "Pasvalio",
        "address": "Škilinpamūšio k., Pasienio g. 10, 39421",
        "lat": 56.27250031,
        "lng": 24.36796682,
        "prices": {
            "A95": 1.81,
            "A98": null,
            "Diesel": 2.05,
            "LPG": 0.85
        },
        "id": 476
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
            "LPG": 0.729
        },
        "id": 477
    },
    {
        "name": "Plungės lagūna",
        "logo": "⛽",
        "city": "Rietavo",
        "address": "Rietavas, Plungės g. 32, 90313",
        "lat": 55.73496531,
        "lng": 21.92401379,
        "prices": {
            "A95": 1.82,
            "A98": null,
            "Diesel": 2.16,
            "LPG": 0.812
        },
        "id": 478
    },
    {
        "name": "Prie Luksto",
        "logo": "⛽",
        "city": "Telšių",
        "address": "Telšiai, Masčio g. 21, 87139",
        "lat": 55.97576248,
        "lng": 22.26366425,
        "prices": {
            "A95": 1.865,
            "A98": null,
            "Diesel": 2.165,
            "LPG": 0.729
        },
        "id": 479
    },
    {
        "name": "Propano ir butano dujų centras",
        "logo": "⛽",
        "city": "Ignalinos",
        "address": "Ignalina, Švenčionių g. 35, 30132",
        "lat": 55.32950374,
        "lng": 26.16385539,
        "prices": {
            "A95": 1.769,
            "A98": null,
            "Diesel": 2.029,
            "LPG": 0.71
        },
        "id": 480
    },
    {
        "name": "Propano ir butano dujų centras",
        "logo": "⛽",
        "city": "Švenčionių",
        "address": "Cirkliškio k., Aukštaičių g. 2A, 18122",
        "lat": 55.12005773,
        "lng": 26.13142971,
        "prices": {
            "A95": 1.77,
            "A98": null,
            "Diesel": 2.03,
            "LPG": 0.71
        },
        "id": 481
    },
    {
        "name": "Regusa",
        "logo": "⛽",
        "city": "Kaunas",
        "address": "Kaunas, Marijampolės pl. 20, 46147",
        "lat": 54.8502039,
        "lng": 23.9657416,
        "prices": {
            "A95": 1.76,
            "A98": null,
            "Diesel": 2.04,
            "LPG": 0.74
        },
        "id": 482
    },
    {
        "name": "Regusa",
        "logo": "⛽",
        "city": "Kazlų Rūdos",
        "address": "Jūrės k., Medelyno g. 4A, 69446",
        "lat": 54.8500758,
        "lng": 23.96587232,
        "prices": {
            "A95": 1.86,
            "A98": null,
            "Diesel": 2.09,
            "LPG": 0.76
        },
        "id": 483
    },
    {
        "name": "Regusa",
        "logo": "⛽",
        "city": "Kazlų Rūdos",
        "address": "Kazlų Rūda, S. Daukanto g. 19D, 69430",
        "lat": 54.73959117,
        "lng": 23.49568398,
        "prices": {
            "A95": 1.86,
            "A98": null,
            "Diesel": 2.09,
            "LPG": 0.76
        },
        "id": 484
    },
    {
        "name": "Regusa",
        "logo": "⛽",
        "city": "Marijampolės",
        "address": "Gavaltuvos k., Sodo g. 11, 69370",
        "lat": 54.67677045,
        "lng": 23.41801347,
        "prices": {
            "A95": 1.79,
            "A98": null,
            "Diesel": 2.04,
            "LPG": 0.75
        },
        "id": 485
    },
    {
        "name": "Regusa",
        "logo": "⛽",
        "city": "Vilkaviškio",
        "address": "Kybartai, J. Basanavičiaus g. 45A, 70417",
        "lat": 54.63850721,
        "lng": 22.76327716,
        "prices": {
            "A95": 1.86,
            "A98": null,
            "Diesel": 2.11,
            "LPG": 0.79
        },
        "id": 486
    },
    {
        "name": "Saurida",
        "logo": "🔥",
        "city": "Alytaus",
        "address": "Alytus, Pramonės g. 5, 62323",
        "lat": 54.4231173,
        "lng": 24.01804635,
        "prices": {
            "A95": 1.72,
            "A98": null,
            "Diesel": 2.02,
            "LPG": 0.71
        },
        "id": 487
    },
    {
        "name": "Saurida",
        "logo": "🔥",
        "city": "Ukmergės",
        "address": "Ukmergė, Kareivinių g. 64, 20184",
        "lat": 55.25902962,
        "lng": 24.79054882,
        "prices": {
            "A95": 1.78,
            "A98": null,
            "Diesel": 2.04,
            "LPG": 0.72
        },
        "id": 488
    },
    {
        "name": "Saurida",
        "logo": "🔥",
        "city": "Ukmergės",
        "address": "Ukmergė, Vilniaus g. 122, 20168",
        "lat": 55.23353894,
        "lng": 24.78125386,
        "prices": {
            "A95": 1.74,
            "A98": null,
            "Diesel": 2.0,
            "LPG": 0.72
        },
        "id": 489
    },
    {
        "name": "Saurida",
        "logo": "🔥",
        "city": "Kaišiadorių",
        "address": "Rumšiškės, Lekavičiaus g. 71, 56337",
        "lat": 54.87186337,
        "lng": 24.21316962,
        "prices": {
            "A95": 1.74,
            "A98": null,
            "Diesel": 2.06,
            "LPG": 0.71
        },
        "id": 490
    },
    {
        "name": "Saurida",
        "logo": "🔥",
        "city": "Ukmergės",
        "address": "Pageležių k, 20278",
        "lat": 55.16500146,
        "lng": 24.51567585,
        "prices": {
            "A95": 1.78,
            "A98": null,
            "Diesel": 2.04,
            "LPG": 0.72
        },
        "id": 491
    },
    {
        "name": "Saurida",
        "logo": "🔥",
        "city": "Radviliškio",
        "address": "Radviliškis, Gedimino g. 50C, 82482",
        "lat": 55.81466839,
        "lng": 23.55310618,
        "prices": {
            "A95": 1.75,
            "A98": null,
            "Diesel": 2.02,
            "LPG": 0.71
        },
        "id": 492
    },
    {
        "name": "Saurida",
        "logo": "🔥",
        "city": "Šiaulių",
        "address": "Šiauliai, Vilniaus g. 373A, 76326",
        "lat": 55.94285655,
        "lng": 23.28159232,
        "prices": {
            "A95": 1.74,
            "A98": null,
            "Diesel": 2.04,
            "LPG": 0.71
        },
        "id": 493
    },
    {
        "name": "Saurida",
        "logo": "🔥",
        "city": "Šilalės",
        "address": "Šilalė, Rytinio kelio g. 19, 75133",
        "lat": 55.49188005,
        "lng": 22.19923862,
        "prices": {
            "A95": 1.79,
            "A98": null,
            "Diesel": 2.03,
            "LPG": 0.7
        },
        "id": 494
    },
    {
        "name": "Saurida",
        "logo": "🔥",
        "city": "Vilnius",
        "address": "Vilnius, Jankiškių g. 43a, 02300",
        "lat": 54.6518904,
        "lng": 25.1856677,
        "prices": {
            "A95": 1.74,
            "A98": null,
            "Diesel": 2.0,
            "LPG": 0.72
        },
        "id": 495
    },
    {
        "name": "Saurida",
        "logo": "🔥",
        "city": "Visagino",
        "address": "Visaginas, Kosmoso g. 1, 31142",
        "lat": 55.5974245,
        "lng": 26.403381,
        "prices": {
            "A95": 1.77,
            "A98": null,
            "Diesel": 2.04,
            "LPG": 0.72
        },
        "id": 496
    },
    {
        "name": "Saurida",
        "logo": "🔥",
        "city": "Kaunas",
        "address": "Babtai, Vandžiogalos g. 3, 54328",
        "lat": 55.0969665,
        "lng": 23.8062494,
        "prices": {
            "A95": 1.72,
            "A98": null,
            "Diesel": 2.03,
            "LPG": 0.74
        },
        "id": 497
    },
    {
        "name": "Saurida",
        "logo": "🔥",
        "city": "Klaipėda",
        "address": "Klaipėda, Jūrininkų pr. 29, 95225",
        "lat": 55.6568391,
        "lng": 21.1838207,
        "prices": {
            "A95": 1.74,
            "A98": null,
            "Diesel": 2.02,
            "LPG": 0.69
        },
        "id": 498
    },
    {
        "name": "Saurida",
        "logo": "🔥",
        "city": "Prienų",
        "address": "Ignacavos k., Kauno pl. 18, 59149",
        "lat": 54.64665695,
        "lng": 23.93049151,
        "prices": {
            "A95": 1.74,
            "A98": null,
            "Diesel": 2.04,
            "LPG": 0.71
        },
        "id": 499
    },
    {
        "name": "Saurida",
        "logo": "🔥",
        "city": "Prienų",
        "address": "Mauručiai, Liepų g. 20, 59290",
        "lat": 54.771033,
        "lng": 23.7654659,
        "prices": {
            "A95": 1.72,
            "A98": null,
            "Diesel": 2.01,
            "LPG": null
        },
        "id": 500
    },
    {
        "name": "Saurida",
        "logo": "🔥",
        "city": "Radviliškio",
        "address": "Velžių k., Radviliškio plentas 2, 82218",
        "lat": 55.81474228,
        "lng": 23.55307458,
        "prices": {
            "A95": 1.74,
            "A98": null,
            "Diesel": 2.0,
            "LPG": 0.7
        },
        "id": 501
    },
    {
        "name": "Saurida",
        "logo": "🔥",
        "city": "Šiaulių",
        "address": "Šiauliai, Pramonės g. 7C, 78140",
        "lat": 55.91643206,
        "lng": 23.30171072,
        "prices": {
            "A95": 1.74,
            "A98": null,
            "Diesel": 2.04,
            "LPG": 0.71
        },
        "id": 502
    },
    {
        "name": "Saurida",
        "logo": "🔥",
        "city": "Vilnius",
        "address": "Zujūnai, Buivydiškių g. 1A, 14160",
        "lat": 54.7237502,
        "lng": 25.19128421,
        "prices": {
            "A95": 1.72,
            "A98": null,
            "Diesel": 2.05,
            "LPG": 0.72
        },
        "id": 503
    },
    {
        "name": "Saurida",
        "logo": "🔥",
        "city": "Akmenės",
        "address": "Naujoji Akmenė,  V. Kudirkos g. 18A, 85171",
        "lat": 56.31719142,
        "lng": 22.88494412,
        "prices": {
            "A95": 1.75,
            "A98": null,
            "Diesel": 2.03,
            "LPG": 0.71
        },
        "id": 504
    },
    {
        "name": "Saurida",
        "logo": "🔥",
        "city": "Akmenės",
        "address": "Pašakarnių k. Pašakarnių g. 1, 85271",
        "lat": 56.29814833,
        "lng": 22.88503939,
        "prices": {
            "A95": 1.75,
            "A98": null,
            "Diesel": 2.04,
            "LPG": 0.71
        },
        "id": 505
    },
    {
        "name": "Saurida",
        "logo": "🔥",
        "city": "Alytaus",
        "address": "Alytus, Miškininkų g. 7, 62201",
        "lat": 54.41146029,
        "lng": 24.06778707,
        "prices": {
            "A95": 1.72,
            "A98": null,
            "Diesel": 2.0,
            "LPG": null
        },
        "id": 506
    },
    {
        "name": "Saurida",
        "logo": "🔥",
        "city": "Kalvarijos",
        "address": "Kušliškių k. Suvalkijos g. 15, 69200",
        "lat": 54.43620168,
        "lng": 23.20482315,
        "prices": {
            "A95": 1.74,
            "A98": null,
            "Diesel": 1.99,
            "LPG": 0.73
        },
        "id": 507
    },
    {
        "name": "Saurida",
        "logo": "🔥",
        "city": "Kaunas",
        "address": "Kaunas, Garažų g. 20, 50314",
        "lat": 54.92355136,
        "lng": 24.00080623,
        "prices": {
            "A95": 1.75,
            "A98": null,
            "Diesel": 2.0,
            "LPG": 0.72
        },
        "id": 508
    },
    {
        "name": "Saurida",
        "logo": "🔥",
        "city": "Marijampolės",
        "address": "Marijampolė, Statybininkų g. 8, 68108",
        "lat": 54.57805775,
        "lng": 23.37781586,
        "prices": {
            "A95": 1.72,
            "A98": null,
            "Diesel": 2.0,
            "LPG": null
        },
        "id": 509
    },
    {
        "name": "Saurida",
        "logo": "🔥",
        "city": "Akmenės",
        "address": "Akmenės I k., Plento g. 1, 85380",
        "lat": 56.2384613,
        "lng": 22.75082341,
        "prices": {
            "A95": 1.75,
            "A98": null,
            "Diesel": 2.04,
            "LPG": 0.71
        },
        "id": 510
    },
    {
        "name": "Saurida",
        "logo": "🔥",
        "city": "Lazdijų",
        "address": "Panarvės k., 67168",
        "lat": 54.23326851,
        "lng": 23.53994591,
        "prices": {
            "A95": 1.72,
            "A98": null,
            "Diesel": 1.99,
            "LPG": 0.73
        },
        "id": 511
    },
    {
        "name": "Saurida",
        "logo": "🔥",
        "city": "Šakių",
        "address": "Lėkėčių k., Šakių g. 3, 71229",
        "lat": 54.97730671,
        "lng": 23.48357232,
        "prices": {
            "A95": 1.77,
            "A98": null,
            "Diesel": 2.01,
            "LPG": 0.69
        },
        "id": 512
    },
    {
        "name": "Saurida",
        "logo": "🔥",
        "city": "Kaunas",
        "address": "Domeikava, Muitinės g. 2, 54359",
        "lat": 54.95635825,
        "lng": 23.90473892,
        "prices": {
            "A95": 1.74,
            "A98": null,
            "Diesel": 2.04,
            "LPG": 0.73
        },
        "id": 513
    },
    {
        "name": "Saurida",
        "logo": "🔥",
        "city": "Vilnius",
        "address": "Čekoniškių k., 14207",
        "lat": 54.73739562,
        "lng": 25.07998794,
        "prices": {
            "A95": 1.73,
            "A98": null,
            "Diesel": 2.02,
            "LPG": null
        },
        "id": 514
    },
    {
        "name": "Saurida",
        "logo": "🔥",
        "city": "Jurbarko",
        "address": "Pašvenčio k., 74218",
        "lat": 55.08231765,
        "lng": 22.61092267,
        "prices": {
            "A95": 1.77,
            "A98": null,
            "Diesel": 2.05,
            "LPG": 0.7
        },
        "id": 515
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
            "LPG": 0.73
        },
        "id": 516
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
            "LPG": 0.72
        },
        "id": 517
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
            "LPG": 0.72
        },
        "id": 518
    },
    {
        "name": "Skulas",
        "logo": "⛽",
        "city": "Alytaus",
        "address": "Likiškėlių k., Kalninės g. 5, 62442",
        "lat": 54.38189577,
        "lng": 23.99318568,
        "prices": {
            "A95": 1.71,
            "A98": null,
            "Diesel": 1.98,
            "LPG": 0.67
        },
        "id": 519
    },
    {
        "name": "Skulas",
        "logo": "⛽",
        "city": "Vilnius",
        "address": "Vilnius, J.Kazlausko g. 33, 08314",
        "lat": 54.72243057,
        "lng": 25.27101438,
        "prices": {
            "A95": 1.789,
            "A98": null,
            "Diesel": 2.059,
            "LPG": 0.699
        },
        "id": 520
    },
    {
        "name": "Skulas",
        "logo": "⛽",
        "city": "Alytaus",
        "address": "Simnas, Alytaus g. 48, 64313",
        "lat": 54.38382653,
        "lng": 23.65935022,
        "prices": {
            "A95": 1.74,
            "A98": null,
            "Diesel": 2.04,
            "LPG": 0.73
        },
        "id": 521
    },
    {
        "name": "Skulas",
        "logo": "⛽",
        "city": "Kaunas",
        "address": "Kaunas, Ašigalio g. 1A, 49161",
        "lat": 54.93337469,
        "lng": 23.94344665,
        "prices": {
            "A95": 1.789,
            "A98": null,
            "Diesel": 2.049,
            "LPG": 0.689
        },
        "id": 522
    },
    {
        "name": "Skulas",
        "logo": "⛽",
        "city": "Kaunas",
        "address": "Virbališkių k., Verslo g. 2, 53458",
        "lat": 54.90252737,
        "lng": 23.76271587,
        "prices": {
            "A95": 1.79,
            "A98": null,
            "Diesel": 2.05,
            "LPG": 0.7
        },
        "id": 523
    },
    {
        "name": "Skulas",
        "logo": "⛽",
        "city": "Kaunas",
        "address": "Kaunas, Marvelės g. 106D, 46205",
        "lat": 54.90130657,
        "lng": 23.85441412,
        "prices": {
            "A95": 1.789,
            "A98": null,
            "Diesel": 2.059,
            "LPG": 0.679
        },
        "id": 524
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
            "Diesel": 1.959,
            "LPG": 0.737
        },
        "id": 525
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
            "Diesel": 1.959,
            "LPG": 0.737
        },
        "id": 526
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
            "Diesel": 1.959,
            "LPG": 0.737
        },
        "id": 527
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
            "Diesel": 1.959,
            "LPG": 0.737
        },
        "id": 528
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
            "Diesel": 1.959,
            "LPG": 0.737
        },
        "id": 529
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
            "Diesel": 1.959,
            "LPG": 0.737
        },
        "id": 530
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
            "Diesel": 1.959,
            "LPG": 0.737
        },
        "id": 531
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
            "Diesel": 1.959,
            "LPG": 0.737
        },
        "id": 532
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
            "Diesel": 1.959,
            "LPG": 0.737
        },
        "id": 533
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
            "Diesel": 1.959,
            "LPG": 0.737
        },
        "id": 534
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
            "Diesel": 1.959,
            "LPG": 0.737
        },
        "id": 535
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
            "Diesel": 1.959,
            "LPG": 0.737
        },
        "id": 536
    },
    {
        "name": "Šventosios investicijos",
        "logo": "⛽",
        "city": "Palangos",
        "address": "Palanga (Šventoji), Elijos g. 26, 00319",
        "lat": 56.01299671,
        "lng": 21.10379214,
        "prices": {
            "A95": 1.869,
            "A98": null,
            "Diesel": 2.169,
            "LPG": 0.899
        },
        "id": 537
    },
    {
        "name": "Tomega",
        "logo": "⛽",
        "city": "Šalčininkų",
        "address": "Tartoko k., 17127",
        "lat": 54.30592204,
        "lng": 25.36089318,
        "prices": {
            "A95": 1.879,
            "A98": null,
            "Diesel": 2.149,
            "LPG": null
        },
        "id": 538
    },
    {
        "name": "Tomega",
        "logo": "⛽",
        "city": "Druskininkų",
        "address": "Druskininkai, Gardino g. 98, 66225",
        "lat": 53.99029291,
        "lng": 24.00567101,
        "prices": {
            "A95": 1.83,
            "A98": null,
            "Diesel": 2.1,
            "LPG": 0.82
        },
        "id": 539
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
            "LPG": 0.73
        },
        "id": 540
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
            "LPG": 0.71
        },
        "id": 541
    },
    {
        "name": "Trevena",
        "logo": "⛽",
        "city": "Šilutės",
        "address": "Žemaitkiemio k., Liepų g. 4, 99317",
        "lat": 55.22753566,
        "lng": 21.70188358,
        "prices": {
            "A95": 1.77,
            "A98": null,
            "Diesel": 2.06,
            "LPG": 0.72
        },
        "id": 542
    },
    {
        "name": "Trevena",
        "logo": "⛽",
        "city": "Rietavo",
        "address": "Vatušių k., Kvėdarnos g. 2, 90307",
        "lat": 55.71844617,
        "lng": 21.93221161,
        "prices": {
            "A95": 1.77,
            "A98": null,
            "Diesel": 2.06,
            "LPG": 0.74
        },
        "id": 543
    },
    {
        "name": "Trevena",
        "logo": "⛽",
        "city": "Rietavo",
        "address": "Rietavas, Lėgų k. 1, 90305",
        "lat": 55.6269372,
        "lng": 21.97178201,
        "prices": {
            "A95": 1.78,
            "A98": null,
            "Diesel": 2.08,
            "LPG": 0.74
        },
        "id": 544
    },
    {
        "name": "Trevena",
        "logo": "⛽",
        "city": "Klaipėda",
        "address": "Dituvos k., Šv. Kristoforo g. 4, 96357",
        "lat": 55.58208249,
        "lng": 21.28526307,
        "prices": {
            "A95": 1.78,
            "A98": null,
            "Diesel": 2.08,
            "LPG": 0.74
        },
        "id": 545
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
            "Diesel": 2.09,
            "LPG": 0.76
        },
        "id": 546
    },
    {
        "name": "Trevena",
        "logo": "⛽",
        "city": "Klaipėda",
        "address": "Pyktiškės k., Veiviržėnų g. 29, 96303",
        "lat": 55.68724108,
        "lng": 21.69352503,
        "prices": {
            "A95": 1.78,
            "A98": null,
            "Diesel": 2.08,
            "LPG": 0.74
        },
        "id": 547
    },
    {
        "name": "Trevena",
        "logo": "⛽",
        "city": "Klaipėda",
        "address": "Gargždai, Klaipėdos g. 39, 96157",
        "lat": 55.7122819,
        "lng": 21.3816268,
        "prices": {
            "A95": 1.77,
            "A98": null,
            "Diesel": 2.06,
            "LPG": 0.73
        },
        "id": 548
    },
    {
        "name": "Trevena",
        "logo": "⛽",
        "city": "Klaipėda",
        "address": "Klaipėda, Kretingos g. 28A, 92211",
        "lat": 55.7283977,
        "lng": 21.1325842,
        "prices": {
            "A95": 1.78,
            "A98": null,
            "Diesel": 2.08,
            "LPG": 0.74
        },
        "id": 549
    },
    {
        "name": "Trevena",
        "logo": "⛽",
        "city": "Klaipėda",
        "address": "Klaipėda, Minijos g. 152A, 93263",
        "lat": 55.6696562,
        "lng": 21.1586131,
        "prices": {
            "A95": 1.78,
            "A98": null,
            "Diesel": 2.08,
            "LPG": 0.73
        },
        "id": 550
    },
    {
        "name": "Trevena",
        "logo": "⛽",
        "city": "Šilutės",
        "address": "Saugų k., Tilžės g. 21, 99409",
        "lat": 55.46435252,
        "lng": 21.4702782,
        "prices": {
            "A95": 1.77,
            "A98": null,
            "Diesel": 2.06,
            "LPG": 0.72
        },
        "id": 551
    },
    {
        "name": "Trevena",
        "logo": "⛽",
        "city": "Kretingos",
        "address": "Kretinga, Vilniaus g. 29B, 97101",
        "lat": 55.8969624,
        "lng": 21.24431594,
        "prices": {
            "A95": 1.85,
            "A98": null,
            "Diesel": 2.13,
            "LPG": 0.89
        },
        "id": 552
    },
    {
        "name": "Trevena",
        "logo": "⛽",
        "city": "Kretingos",
        "address": "Darbėnai, Laisvės g. 15, 97264",
        "lat": 56.02481425,
        "lng": 21.26498187,
        "prices": {
            "A95": 1.85,
            "A98": null,
            "Diesel": 2.13,
            "LPG": 0.89
        },
        "id": 553
    },
    {
        "name": "Tripletas",
        "logo": "⛽",
        "city": "Mažeikių",
        "address": "Mažeikiai, Sedos g. 16, 89233",
        "lat": 56.30530435,
        "lng": 22.34252813,
        "prices": {
            "A95": 1.7,
            "A98": null,
            "Diesel": 1.98,
            "LPG": 0.75
        },
        "id": 554
    },
    {
        "name": "Tumasa",
        "logo": "⛽",
        "city": "Mažeikių",
        "address": "Židikai, Mažeikių g. 10, 89442",
        "lat": 56.31799412,
        "lng": 22.01862611,
        "prices": {
            "A95": 1.85,
            "A98": null,
            "Diesel": 2.15,
            "LPG": 0.94
        },
        "id": 555
    },
    {
        "name": "Valdegra",
        "logo": "⛽",
        "city": "Marijampolės",
        "address": "Igliauka, Prienų g. 7, 69117",
        "lat": 54.55813612,
        "lng": 23.65639337,
        "prices": {
            "A95": 1.789,
            "A98": null,
            "Diesel": 2.099,
            "LPG": 0.749
        },
        "id": 556
    },
    {
        "name": "Velseka",
        "logo": "⛽",
        "city": "Kupiškio",
        "address": "Kupiškis, Panevėžio g. 5, 40134",
        "lat": 55.82748974,
        "lng": 24.98569522,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.959,
            "LPG": 0.669
        },
        "id": 557
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Mažeikių",
        "address": "Mažeikiai, Montuotojų g. 2A, 89101",
        "lat": 56.31592712,
        "lng": 22.30241721,
        "prices": {
            "A95": 1.819,
            "A98": null,
            "Diesel": 2.099,
            "LPG": 0.799
        },
        "id": 558
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Mažeikių",
        "address": "Mažeikiai, Žemaitijos g. 75, 89132",
        "lat": 56.30031398,
        "lng": 22.36061772,
        "prices": {
            "A95": 1.819,
            "A98": null,
            "Diesel": 2.099,
            "LPG": 0.799
        },
        "id": 559
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Panevėžio",
        "address": "Šilagalio k., Panevėžio aplinkl. 5, 36258",
        "lat": 55.66996252,
        "lng": 24.3496479,
        "prices": {
            "A95": 1.819,
            "A98": null,
            "Diesel": 2.119,
            "LPG": null
        },
        "id": 560
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Kaunas",
        "address": "Kaunas, Ateities pl. 37A, 52119",
        "lat": 54.91818977,
        "lng": 24.04000039,
        "prices": {
            "A95": 1.869,
            "A98": null,
            "Diesel": 2.159,
            "LPG": 0.779
        },
        "id": 561
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Tauragės",
        "address": "Tauragė, Dariaus ir Girėno g. 138, 72194",
        "lat": 55.26654918,
        "lng": 22.31121604,
        "prices": {
            "A95": 1.839,
            "A98": null,
            "Diesel": 2.169,
            "LPG": 0.769
        },
        "id": 562
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Tauragės",
        "address": "Tauragė, Pramonės g. 1, 72338",
        "lat": 55.2408227,
        "lng": 22.30519788,
        "prices": {
            "A95": 1.809,
            "A98": null,
            "Diesel": 2.169,
            "LPG": 0.769
        },
        "id": 563
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Alytaus",
        "address": "Alytus, Ulonų g. 33B, 62136",
        "lat": 54.38466569,
        "lng": 24.05025809,
        "prices": {
            "A95": 1.829,
            "A98": null,
            "Diesel": 2.139,
            "LPG": 0.769
        },
        "id": 564
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Kaunas",
        "address": "Kaunas, Pramonės pr. 44, 50302",
        "lat": 54.92714317,
        "lng": 23.97463204,
        "prices": {
            "A95": 1.829,
            "A98": null,
            "Diesel": 2.109,
            "LPG": 0.769
        },
        "id": 565
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Šiaulių",
        "address": "Šiauliai, Gegužių g. 26, 78348",
        "lat": 55.90540765,
        "lng": 23.26014027,
        "prices": {
            "A95": 1.849,
            "A98": null,
            "Diesel": 2.139,
            "LPG": 0.779
        },
        "id": 566
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Vilnius",
        "address": "Vilnius, Ateities g. 17B, 06326",
        "lat": 54.73567421,
        "lng": 25.25857449,
        "prices": {
            "A95": 1.819,
            "A98": null,
            "Diesel": 2.119,
            "LPG": 0.769
        },
        "id": 567
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Alytaus",
        "address": "Alytus, Naujoji g. 27, 62175",
        "lat": 54.41401437,
        "lng": 24.00998629,
        "prices": {
            "A95": 1.829,
            "A98": null,
            "Diesel": 2.139,
            "LPG": 0.769
        },
        "id": 568
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Kaunas",
        "address": "Kaunas, Baltijos g. 90B, 47130",
        "lat": 54.917916,
        "lng": 23.8737463,
        "prices": {
            "A95": 1.819,
            "A98": null,
            "Diesel": 2.099,
            "LPG": 0.809
        },
        "id": 569
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Kaunas",
        "address": "Kaunas, Raudondvario pl. 288, 47164",
        "lat": 54.92128056,
        "lng": 23.81050537,
        "prices": {
            "A95": 1.839,
            "A98": null,
            "Diesel": 2.129,
            "LPG": 0.799
        },
        "id": 570
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Šiaulių",
        "address": "Šiauliai, Dubijos g. 1C,",
        "lat": 55.92639672,
        "lng": 23.30730547,
        "prices": {
            "A95": 1.849,
            "A98": null,
            "Diesel": 2.139,
            "LPG": 0.779
        },
        "id": 571
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Šiaulių",
        "address": "Šiauliai, Tilžės g. 274, 76201",
        "lat": 55.94410481,
        "lng": 23.33116287,
        "prices": {
            "A95": 1.849,
            "A98": null,
            "Diesel": 2.139,
            "LPG": 0.779
        },
        "id": 572
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Vilnius",
        "address": "Avižienių k., Ožiarūčių g. 1A, 14185",
        "lat": 54.764005,
        "lng": 25.19639378,
        "prices": {
            "A95": 1.839,
            "A98": null,
            "Diesel": 2.129,
            "LPG": 0.769
        },
        "id": 573
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Vilnius",
        "address": "Vilnius, Saltoniškių g. 12, 08105",
        "lat": 54.69921472,
        "lng": 25.26010058,
        "prices": {
            "A95": 1.849,
            "A98": null,
            "Diesel": 2.159,
            "LPG": 0.859
        },
        "id": 574
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Vilnius",
        "address": "Vilnius, Gariūnų g. 16A, 21401",
        "lat": 54.66730354,
        "lng": 25.1739621,
        "prices": {
            "A95": 1.859,
            "A98": null,
            "Diesel": 2.159,
            "LPG": 0.859
        },
        "id": 575
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Vilnius",
        "address": "Vilnius, Verkių g. 52, 09109",
        "lat": 54.72156097,
        "lng": 25.29507991,
        "prices": {
            "A95": 1.819,
            "A98": null,
            "Diesel": 2.119,
            "LPG": null
        },
        "id": 576
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Vilnius",
        "address": "Vilnius, Vilkpėdės g. 2, 03151",
        "lat": 54.66503289,
        "lng": 25.24635191,
        "prices": {
            "A95": 1.809,
            "A98": null,
            "Diesel": 2.109,
            "LPG": null
        },
        "id": 577
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Vilnius",
        "address": "Vilnius, Ozo g. 12, 08311",
        "lat": 54.71367128,
        "lng": 25.2771334,
        "prices": {
            "A95": 1.849,
            "A98": null,
            "Diesel": 2.159,
            "LPG": 0.859
        },
        "id": 578
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Vilnius",
        "address": "Vilnius, Pilaitės pr. 13, 06264",
        "lat": 54.70294629,
        "lng": 25.20400003,
        "prices": {
            "A95": 1.879,
            "A98": null,
            "Diesel": 2.179,
            "LPG": 0.859
        },
        "id": 579
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Vilnius",
        "address": "Vilnius, Pilaitės pr. 28, 06264",
        "lat": 54.70128351,
        "lng": 25.20381482,
        "prices": {
            "A95": 1.879,
            "A98": null,
            "Diesel": 2.179,
            "LPG": 0.859
        },
        "id": 580
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Vilnius",
        "address": "Vilnius, Dariaus ir Girėno g. 30A, 02169",
        "lat": 54.6528659,
        "lng": 25.27210989,
        "prices": {
            "A95": 1.879,
            "A98": null,
            "Diesel": 2.189,
            "LPG": 0.859
        },
        "id": 581
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Vilnius",
        "address": "Vilnius, Kirtimų g. 29, 02244",
        "lat": 54.63326422,
        "lng": 25.15091012,
        "prices": {
            "A95": 1.879,
            "A98": null,
            "Diesel": 2.179,
            "LPG": 0.799
        },
        "id": 582
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Vilnius",
        "address": "Vilnius, Grigiškės, Kovo 11-osios g. 75, 27119",
        "lat": 54.66923701,
        "lng": 25.10473327,
        "prices": {
            "A95": 1.879,
            "A98": null,
            "Diesel": 2.189,
            "LPG": 0.859
        },
        "id": 583
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Vilnius",
        "address": "Vilnius, Justiniškių g. 12, 05131",
        "lat": 54.70259614,
        "lng": 25.21901843,
        "prices": {
            "A95": 1.819,
            "A98": null,
            "Diesel": 2.099,
            "LPG": null
        },
        "id": 584
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Vilnius",
        "address": "Vilnius, Liepkalnio g. 128A, 02121",
        "lat": 54.64748991,
        "lng": 25.30386172,
        "prices": {
            "A95": 1.879,
            "A98": null,
            "Diesel": 2.189,
            "LPG": 0.859
        },
        "id": 585
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Vilnius",
        "address": "Vilnius, Naugarduko g. 74, 03203",
        "lat": 54.67110042,
        "lng": 25.2621559,
        "prices": {
            "A95": 1.879,
            "A98": null,
            "Diesel": 2.189,
            "LPG": 0.859
        },
        "id": 586
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Vilnius",
        "address": "Vilnius, Olandų g. 57, 01205",
        "lat": 54.68207171,
        "lng": 25.31387086,
        "prices": {
            "A95": 1.879,
            "A98": null,
            "Diesel": 2.179,
            "LPG": 0.859
        },
        "id": 587
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Utenos",
        "address": "Gediminas, Vyturio g. 2, 28126",
        "lat": 55.47781665,
        "lng": 25.58151852,
        "prices": {
            "A95": 1.839,
            "A98": null,
            "Diesel": 2.129,
            "LPG": 0.799
        },
        "id": 588
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Utenos",
        "address": "Utena, Metalo g. 8, 28216",
        "lat": 55.497098,
        "lng": 25.6306254,
        "prices": {
            "A95": 1.839,
            "A98": null,
            "Diesel": 2.129,
            "LPG": 0.799
        },
        "id": 589
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Utenos",
        "address": "Utena, Pramonės g. 23, 28124",
        "lat": 55.49008709,
        "lng": 25.65090623,
        "prices": {
            "A95": 1.839,
            "A98": null,
            "Diesel": 2.129,
            "LPG": 0.799
        },
        "id": 590
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Ukmergės",
        "address": "Ukmergė, Žiedo g. 15, 20127",
        "lat": 55.24604062,
        "lng": 24.74317472,
        "prices": {
            "A95": 1.859,
            "A98": null,
            "Diesel": 2.159,
            "LPG": 0.769
        },
        "id": 591
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Telšių",
        "address": "Telšiai, Pramonės g. 2A, 87101",
        "lat": 55.99322344,
        "lng": 22.24030097,
        "prices": {
            "A95": 1.869,
            "A98": null,
            "Diesel": 2.169,
            "LPG": 0.769
        },
        "id": 592
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Širvintų",
        "address": "Širvintos, Plento g. 4, 19117",
        "lat": 55.04576542,
        "lng": 24.94260357,
        "prices": {
            "A95": 1.859,
            "A98": null,
            "Diesel": 2.159,
            "LPG": 0.769
        },
        "id": 593
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Šilutės",
        "address": "Šilutė, Tilžės g. 59, 99168",
        "lat": 55.34290765,
        "lng": 21.49667801,
        "prices": {
            "A95": 1.809,
            "A98": null,
            "Diesel": 2.109,
            "LPG": 0.769
        },
        "id": 594
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Šiaulių",
        "address": "Šiauliai, J. Basanavičiaus g. 122A, 76161",
        "lat": 55.95468059,
        "lng": 23.31615536,
        "prices": {
            "A95": 1.849,
            "A98": null,
            "Diesel": 2.139,
            "LPG": 0.779
        },
        "id": 595
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Šiaulių",
        "address": "Šiauliai, Užmiesčio g. 2, 76273",
        "lat": 55.92271147,
        "lng": 23.35789907,
        "prices": {
            "A95": 1.859,
            "A98": null,
            "Diesel": 2.159,
            "LPG": 0.779
        },
        "id": 596
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Skuodo",
        "address": "Skuodas, Vilniaus g. 50, 98119",
        "lat": 56.26997931,
        "lng": 21.54722164,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 2.199,
            "LPG": 0.789
        },
        "id": 597
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Plungės",
        "address": "Plungė, J. Tumo-Vaižganto g. 102, 90160",
        "lat": 55.90302589,
        "lng": 21.83031772,
        "prices": {
            "A95": 1.859,
            "A98": null,
            "Diesel": 2.199,
            "LPG": 0.859
        },
        "id": 598
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Plungės",
        "address": "Plungė, Žaltakalnio g. 10, 90158",
        "lat": 55.89838026,
        "lng": 21.8400709,
        "prices": {
            "A95": 1.859,
            "A98": null,
            "Diesel": 2.199,
            "LPG": 0.859
        },
        "id": 599
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Pasvalio",
        "address": "Pasvalys, Vilniaus g. 50, 39177",
        "lat": 56.05600758,
        "lng": 24.40740435,
        "prices": {
            "A95": 1.859,
            "A98": null,
            "Diesel": 2.159,
            "LPG": 0.799
        },
        "id": 600
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Panevėžio",
        "address": "Tičkūnų k., Tičkūnų g. 31, 38410",
        "lat": 55.7788432,
        "lng": 24.36455877,
        "prices": {
            "A95": 1.829,
            "A98": null,
            "Diesel": 2.119,
            "LPG": 0.769
        },
        "id": 601
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Panevėžio",
        "address": "Panevėžys, Navadolio g. 31, 36252",
        "lat": 55.71446003,
        "lng": 24.33526571,
        "prices": {
            "A95": 1.809,
            "A98": null,
            "Diesel": 2.099,
            "LPG": 0.769
        },
        "id": 602
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Panevėžio",
        "address": "Panevėžys, Ramygalos g. 155, 36224",
        "lat": 55.70403668,
        "lng": 24.38094886,
        "prices": {
            "A95": 1.809,
            "A98": null,
            "Diesel": 2.099,
            "LPG": 0.769
        },
        "id": 603
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Panevėžio",
        "address": "Panevėžys, Ramygalos g. 186G, 36224",
        "lat": 55.7091917,
        "lng": 24.37348296,
        "prices": {
            "A95": 1.809,
            "A98": null,
            "Diesel": 2.099,
            "LPG": 0.769
        },
        "id": 604
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Panevėžio",
        "address": "Panevėžys, J. Janonio g. 28A, 35101",
        "lat": 55.73877397,
        "lng": 24.31032094,
        "prices": {
            "A95": 1.829,
            "A98": null,
            "Diesel": 2.119,
            "LPG": 0.769
        },
        "id": 605
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Panevėžio",
        "address": "Panevėžys, Pušaloto g. 193A, 191A",
        "lat": 55.75324014,
        "lng": 24.31220219,
        "prices": {
            "A95": 1.829,
            "A98": null,
            "Diesel": 2.119,
            "LPG": 0.769
        },
        "id": 606
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Panevėžio",
        "address": "Panevėžys, Venslaviškio g. 16, 35116",
        "lat": 55.7368525,
        "lng": 24.38712468,
        "prices": {
            "A95": 1.829,
            "A98": null,
            "Diesel": 2.119,
            "LPG": 0.769
        },
        "id": 607
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Panevėžio",
        "address": "Panevėžys, Senamiesčio g. 116A, 35115",
        "lat": 55.74862561,
        "lng": 24.39317728,
        "prices": {
            "A95": 1.829,
            "A98": null,
            "Diesel": 2.119,
            "LPG": 0.769
        },
        "id": 608
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Pakruojo",
        "address": "Pakruojis, Vytauto Didžiojo g. 98, 83162",
        "lat": 55.98038194,
        "lng": 23.85781168,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 2.199,
            "LPG": 0.799
        },
        "id": 609
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Molėtų",
        "address": "Molėtai, Vilniaus g. 101, 33112",
        "lat": 55.22398062,
        "lng": 25.40553384,
        "prices": {
            "A95": 1.849,
            "A98": null,
            "Diesel": 2.149,
            "LPG": 0.799
        },
        "id": 610
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Molėtų",
        "address": "Gojaus k., Utenos g. 16, 33165",
        "lat": 55.21469191,
        "lng": 25.43772491,
        "prices": {
            "A95": 1.849,
            "A98": null,
            "Diesel": 2.149,
            "LPG": 0.799
        },
        "id": 611
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Lazdijų",
        "address": "Lazdijai, Turistų g. 32, 67102",
        "lat": 54.22879793,
        "lng": 23.52839268,
        "prices": {
            "A95": 1.819,
            "A98": null,
            "Diesel": 2.059,
            "LPG": 0.769
        },
        "id": 612
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Klaipėda",
        "address": "Gargždai, Vilniaus pl. 65, 96173",
        "lat": 55.73220757,
        "lng": 21.37610037,
        "prices": {
            "A95": 1.859,
            "A98": null,
            "Diesel": 2.159,
            "LPG": 0.799
        },
        "id": 613
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Klaipėda",
        "address": "Sudmantų k., Vilniaus pl. 6",
        "lat": 55.70441507,
        "lng": 21.2218188,
        "prices": {
            "A95": 1.859,
            "A98": null,
            "Diesel": 2.159,
            "LPG": 0.799
        },
        "id": 614
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Klaipėda",
        "address": "Klaipėda, Šilutės pl. 52, 94181",
        "lat": 55.6817225,
        "lng": 21.18517084,
        "prices": {
            "A95": 1.879,
            "A98": null,
            "Diesel": 2.169,
            "LPG": 0.799
        },
        "id": 615
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Klaipėda",
        "address": "Klaipėda, Taikos pr. 70A-1, 93202",
        "lat": 55.68328895,
        "lng": 21.16064018,
        "prices": {
            "A95": 1.859,
            "A98": null,
            "Diesel": 2.139,
            "LPG": 0.779
        },
        "id": 616
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Klaipėda",
        "address": "Klaipėda, Liepojos g. 242, 92330",
        "lat": 55.75379958,
        "lng": 21.13137128,
        "prices": {
            "A95": 1.879,
            "A98": null,
            "Diesel": 2.169,
            "LPG": 0.799
        },
        "id": 617
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Klaipėda",
        "address": "Klaipėda, Nemuno g. 139, 93185",
        "lat": 55.67522902,
        "lng": 21.15300867,
        "prices": {
            "A95": 1.859,
            "A98": null,
            "Diesel": 2.139,
            "LPG": 0.779
        },
        "id": 618
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Klaipėda",
        "address": "Klaipėda, Priestočio g. 28, 92191",
        "lat": 55.71926789,
        "lng": 21.14116101,
        "prices": {
            "A95": 1.859,
            "A98": null,
            "Diesel": 2.139,
            "LPG": 0.789
        },
        "id": 619
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Kaunas",
        "address": "Margavos k., 54471",
        "lat": 54.95951291,
        "lng": 24.03932068,
        "prices": {
            "A95": 1.889,
            "A98": null,
            "Diesel": 2.179,
            "LPG": 0.899
        },
        "id": 620
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Kaunas",
        "address": "Zapyškis, Vytauto g. 20A, 53419",
        "lat": 54.92697248,
        "lng": 23.66191968,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 2.199,
            "LPG": 0.869
        },
        "id": 621
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Kaunas",
        "address": "Kaunas, Miežėnų g. 18, 47115",
        "lat": 54.91762212,
        "lng": 23.86321562,
        "prices": {
            "A95": 1.819,
            "A98": null,
            "Diesel": 2.099,
            "LPG": 0.809
        },
        "id": 622
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Kaunas",
        "address": "Kaunas, P. Lukšio g. 66A, 49404",
        "lat": 54.92493135,
        "lng": 23.94262165,
        "prices": {
            "A95": 1.869,
            "A98": null,
            "Diesel": 2.139,
            "LPG": 0.769
        },
        "id": 623
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Kaunas",
        "address": "Kaunas, K. Baršausko g. 64, 44405",
        "lat": 54.89766099,
        "lng": 23.95810171,
        "prices": {
            "A95": 1.869,
            "A98": null,
            "Diesel": 2.159,
            "LPG": 0.899
        },
        "id": 624
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Kaunas",
        "address": "Kaunas, Statybininkų g. 3A, 50124",
        "lat": 54.92015901,
        "lng": 23.94881165,
        "prices": {
            "A95": 1.869,
            "A98": null,
            "Diesel": 2.159,
            "LPG": 0.769
        },
        "id": 625
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Kaunas",
        "address": "Kaunas, Veiverių g. 117, 46354",
        "lat": 54.86650016,
        "lng": 23.88923669,
        "prices": {
            "A95": 1.869,
            "A98": null,
            "Diesel": 2.159,
            "LPG": 0.819
        },
        "id": 626
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Kaunas",
        "address": "Kaunas, T. Masiulio g. 22B, 52447",
        "lat": 54.88094413,
        "lng": 24.00986864,
        "prices": {
            "A95": 1.869,
            "A98": null,
            "Diesel": 2.159,
            "LPG": 0.779
        },
        "id": 627
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Kaunas",
        "address": "Kaunas, Veiverių g. 124B, 46282",
        "lat": 54.88323777,
        "lng": 23.89383662,
        "prices": {
            "A95": 1.869,
            "A98": null,
            "Diesel": 2.159,
            "LPG": 0.819
        },
        "id": 628
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Kaunas",
        "address": "Kaunas, A. Juozapavičiaus pr. 90, 45267",
        "lat": 54.87854855,
        "lng": 23.93433785,
        "prices": {
            "A95": 1.869,
            "A98": null,
            "Diesel": 2.159,
            "LPG": 0.859
        },
        "id": 629
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Kaunas",
        "address": "Kaunas, Biruliškių g. 18A, 51205",
        "lat": 54.91139079,
        "lng": 24.02089433,
        "prices": {
            "A95": 1.869,
            "A98": null,
            "Diesel": 2.159,
            "LPG": null
        },
        "id": 630
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Kaunas",
        "address": "Kaunas, Karaliaus Mindaugo pr. 54, 44351",
        "lat": 54.88738104,
        "lng": 23.92132782,
        "prices": {
            "A95": 1.869,
            "A98": null,
            "Diesel": 2.159,
            "LPG": 0.859
        },
        "id": 631
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Kaunas",
        "address": "Kaunas, Didžioji g. 84, 45462",
        "lat": 54.85517369,
        "lng": 24.01325891,
        "prices": {
            "A95": 1.869,
            "A98": null,
            "Diesel": 2.159,
            "LPG": 0.799
        },
        "id": 632
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Kaišiadorių",
        "address": "Kaišiadorys, Gedimino g. 135, 56173",
        "lat": 54.85563298,
        "lng": 24.4419732,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 2.159,
            "LPG": 0.799
        },
        "id": 633
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Joniškio",
        "address": "Joniškis, Vilniaus g. 51, 84166",
        "lat": 56.22465151,
        "lng": 23.60098823,
        "prices": {
            "A95": 1.839,
            "A98": null,
            "Diesel": 2.099,
            "LPG": 0.769
        },
        "id": 634
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Jonavos",
        "address": "Jonava, Darbininkų g. 4D, 55101",
        "lat": 55.09375262,
        "lng": 24.28261211,
        "prices": {
            "A95": 1.889,
            "A98": null,
            "Diesel": 2.179,
            "LPG": 0.799
        },
        "id": 635
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Elektrėnų",
        "address": "Elektrėnai, Elektrinės g. 6, 26109",
        "lat": 54.78456679,
        "lng": 24.65429765,
        "prices": {
            "A95": 1.879,
            "A98": null,
            "Diesel": 2.169,
            "LPG": 0.799
        },
        "id": 636
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Biržų",
        "address": "Biržai, Parodos g. 2, 41136",
        "lat": 56.20128359,
        "lng": 24.74879753,
        "prices": {
            "A95": 1.819,
            "A98": null,
            "Diesel": 2.099,
            "LPG": 0.799
        },
        "id": 637
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Biržų",
        "address": "Biržai, Pasvalio g. 1B, 41132",
        "lat": 56.20202722,
        "lng": 24.73770358,
        "prices": {
            "A95": 1.819,
            "A98": null,
            "Diesel": 2.099,
            "LPG": 0.799
        },
        "id": 638
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Alytaus",
        "address": "Daugų k., Neveiglo g. 25, 64144",
        "lat": 54.36678813,
        "lng": 24.33760801,
        "prices": {
            "A95": 1.839,
            "A98": null,
            "Diesel": 2.159,
            "LPG": 0.779
        },
        "id": 639
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Švenčionių",
        "address": "Pabradė, Vilniaus g. 116B, 18177",
        "lat": 54.97512409,
        "lng": 25.74487885,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 2.199,
            "LPG": 0.829
        },
        "id": 640
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Vilnius",
        "address": "Vilnius, Nemenčinės pl. 5, 10222",
        "lat": 54.72645045,
        "lng": 25.32642805,
        "prices": {
            "A95": 1.879,
            "A98": null,
            "Diesel": 2.189,
            "LPG": 0.799
        },
        "id": 641
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Anykščių",
        "address": "Anykščiai, A. Vienuolio g. 34, 29148",
        "lat": 55.52195398,
        "lng": 25.0866871,
        "prices": {
            "A95": 1.859,
            "A98": null,
            "Diesel": 2.159,
            "LPG": 0.769
        },
        "id": 642
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Anykščių",
        "address": "Anykščiai, Piliakalnio g. 9, 29109",
        "lat": 55.54126944,
        "lng": 25.1347699,
        "prices": {
            "A95": 1.859,
            "A98": null,
            "Diesel": 2.159,
            "LPG": 0.769
        },
        "id": 643
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Kaunas",
        "address": "Kaunas, Marijampolės pl. 29, 45438",
        "lat": 54.84942013,
        "lng": 23.96691132,
        "prices": {
            "A95": 1.869,
            "A98": null,
            "Diesel": 2.159,
            "LPG": 0.799
        },
        "id": 644
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Kupiškio",
        "address": "Kerelių k. 1A, 40473",
        "lat": 55.85646985,
        "lng": 25.17345447,
        "prices": {
            "A95": 1.829,
            "A98": null,
            "Diesel": 2.119,
            "LPG": 0.799
        },
        "id": 645
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Pasvalio",
        "address": "Brazdigalos k. 1, 39198",
        "lat": 56.04215704,
        "lng": 24.37831384,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 2.199,
            "LPG": 0.799
        },
        "id": 646
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Vilnius",
        "address": "Vilnius, Laisvės pr. 8, 04133",
        "lat": 54.67423957,
        "lng": 25.22267656,
        "prices": {
            "A95": 1.879,
            "A98": null,
            "Diesel": 2.189,
            "LPG": 0.859
        },
        "id": 647
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Vilnius",
        "address": "Vilnius, Sodų g. 22, 03211",
        "lat": 54.66955543,
        "lng": 25.27909209,
        "prices": {
            "A95": 1.839,
            "A98": null,
            "Diesel": 2.139,
            "LPG": 0.799
        },
        "id": 648
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Kupiškio",
        "address": "Kupiškis, Pergalės g. 15, 40109",
        "lat": 55.84453064,
        "lng": 24.97901461,
        "prices": {
            "A95": 1.829,
            "A98": null,
            "Diesel": 2.119,
            "LPG": 0.799
        },
        "id": 649
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Šiaulių",
        "address": "Aukštelkės k., Ilgoji g. 1, 80184",
        "lat": 55.88186336,
        "lng": 23.20532631,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 2.199,
            "LPG": 0.859
        },
        "id": 650
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Visagino",
        "address": "Visaginas, Statybininkų g. 1, 31138",
        "lat": 55.59446719,
        "lng": 26.43857382,
        "prices": {
            "A95": 1.859,
            "A98": null,
            "Diesel": 2.159,
            "LPG": 0.799
        },
        "id": 651
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Visagino",
        "address": "Visaginas, Taikos pr. 23B, 31107",
        "lat": 55.59483562,
        "lng": 26.45649167,
        "prices": {
            "A95": 1.859,
            "A98": null,
            "Diesel": 2.159,
            "LPG": 0.799
        },
        "id": 652
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Zarasų",
        "address": "Juodalaukių k. 2, 32104",
        "lat": 55.71771767,
        "lng": 26.21382465,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 2.199,
            "LPG": 0.799
        },
        "id": 653
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Kaunas",
        "address": "Ilgakiemio k., Prienų g. 22,",
        "lat": 54.77409737,
        "lng": 23.88975019,
        "prices": {
            "A95": 1.859,
            "A98": null,
            "Diesel": 2.159,
            "LPG": 0.769
        },
        "id": 654
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Kazlų Rūdos",
        "address": "Ąžuolų Būdos k.",
        "lat": 54.69817654,
        "lng": 23.51761317,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 2.199,
            "LPG": 0.859
        },
        "id": 655
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Kėdainių",
        "address": "Dotnuva, Tilto g. 2A, 58352",
        "lat": 55.37474903,
        "lng": 23.88082341,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 2.199,
            "LPG": 0.899
        },
        "id": 656
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Kėdainių",
        "address": "Gudžiūnų k., Baisogalos g. 5, 58267",
        "lat": 55.51867815,
        "lng": 23.77364883,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 2.199,
            "LPG": 0.899
        },
        "id": 657
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Prienų",
        "address": "Mačiūnų k., Kauno pl. 40, 59157",
        "lat": 54.65896706,
        "lng": 23.94713467,
        "prices": {
            "A95": 1.859,
            "A98": null,
            "Diesel": 2.159,
            "LPG": 0.769
        },
        "id": 658
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Rokiškio",
        "address": "Rokiškis, Panevėžio g. 5, 42163",
        "lat": 55.94453714,
        "lng": 25.58523075,
        "prices": {
            "A95": 1.839,
            "A98": null,
            "Diesel": 2.139,
            "LPG": 0.899
        },
        "id": 659
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Vilkaviškio",
        "address": "Vilkaviškis, Vytauto g. 105, 70118",
        "lat": 54.64768504,
        "lng": 23.02910944,
        "prices": {
            "A95": 1.859,
            "A98": null,
            "Diesel": 2.159,
            "LPG": 0.799
        },
        "id": 660
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Panevėžio",
        "address": "Krekenava, Tilto g. 35, 38305",
        "lat": 55.54155278,
        "lng": 24.10785329,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 2.199,
            "LPG": 0.899
        },
        "id": 661
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Rokiškio",
        "address": "Rokiškis, Žemaitės g. 2C, 42164",
        "lat": 55.93428888,
        "lng": 25.58561018,
        "prices": {
            "A95": 1.839,
            "A98": null,
            "Diesel": 2.139,
            "LPG": 0.899
        },
        "id": 662
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Šalčininkų",
        "address": "Jašiūnai, Lydos g. 13, 17247",
        "lat": 54.43976872,
        "lng": 25.32731524,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 2.199,
            "LPG": 0.859
        },
        "id": 663
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Šiaulių",
        "address": "Kužiai, Draugystės g. 2, 80260",
        "lat": 55.97918705,
        "lng": 23.13626254,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 2.199,
            "LPG": 0.869
        },
        "id": 664
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Elektrėnų",
        "address": "Vievis, Kauno g. 26A, 21376",
        "lat": 54.77121356,
        "lng": 24.82077684,
        "prices": {
            "A95": 1.929,
            "A98": null,
            "Diesel": 2.199,
            "LPG": 0.879
        },
        "id": 665
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Ignalinos",
        "address": "Ignalina, Turistų g. 28A, 30138",
        "lat": 55.33898149,
        "lng": 26.14560793,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 2.199,
            "LPG": 0.799
        },
        "id": 666
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Panevėžio",
        "address": "Ramygala, Vienkiemio g. 1B, 38262",
        "lat": 55.52118374,
        "lng": 24.31279248,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 2.199,
            "LPG": 0.899
        },
        "id": 667
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Prienų",
        "address": "Grigaliūnų k. 11, 59281",
        "lat": 54.71394907,
        "lng": 23.64977437,
        "prices": {
            "A95": 1.929,
            "A98": null,
            "Diesel": 2.199,
            "LPG": 0.89
        },
        "id": 668
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Šiaulių",
        "address": "Kuršėnai, Vilniaus g. 38A, 81136",
        "lat": 55.99995113,
        "lng": 22.94763082,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 2.199,
            "LPG": 0.869
        },
        "id": 669
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Kaunas",
        "address": "Kaunas, Ateities pl. 105, 52119",
        "lat": 54.92736828,
        "lng": 24.04304214,
        "prices": {
            "A95": 1.929,
            "A98": null,
            "Diesel": 2.199,
            "LPG": 0.879
        },
        "id": 670
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Kaunas",
        "address": "Giraitės k., Automagistralės g. 4, 54310",
        "lat": 54.9591869,
        "lng": 23.86431975,
        "prices": {
            "A95": 1.929,
            "A98": null,
            "Diesel": 2.199,
            "LPG": 0.879
        },
        "id": 671
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Kaunas",
        "address": "Kumpių k., Verslo g. 13A, 54311",
        "lat": 54.95894115,
        "lng": 23.8668101,
        "prices": {
            "A95": 1.929,
            "A98": null,
            "Diesel": 2.199,
            "LPG": 0.879
        },
        "id": 672
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Šilalės",
        "address": "Kuodaičių k., 75101",
        "lat": 55.5687,
        "lng": 22.17763305,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 2.199,
            "LPG": 0.799
        },
        "id": 673
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Švenčionių",
        "address": "Švenčionėliai, Žemutinė g. 51A, 18212",
        "lat": 55.1685514,
        "lng": 26.01497592,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 2.199,
            "LPG": 0.899
        },
        "id": 674
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Švenčionių",
        "address": "Švenčionys, Vilniaus g. 50A, 18123",
        "lat": 55.12551527,
        "lng": 26.14525942,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 2.199,
            "LPG": 0.899
        },
        "id": 675
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Trakų",
        "address": "Aukštųjų Semeniukų k., Logistikos g. 9, 21401",
        "lat": 54.70160335,
        "lng": 25.00966088,
        "prices": {
            "A95": 1.929,
            "A98": null,
            "Diesel": 2.199,
            "LPG": 0.879
        },
        "id": 676
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Kalvarijos",
        "address": "Kalvarija, Dariaus ir Girėno g. 81, 69206",
        "lat": 54.4244166,
        "lng": 23.23203331,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 2.199,
            "LPG": 0.899
        },
        "id": 677
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Kaunas",
        "address": "Kaunas, Islandijos pl. 61A, 49117",
        "lat": 54.93354237,
        "lng": 23.96850604,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 2.199,
            "LPG": 0.899
        },
        "id": 678
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Kaunas",
        "address": "Kampiškių k., Baltijos g. 41, 09300",
        "lat": 54.84248502,
        "lng": 23.84942127,
        "prices": {
            "A95": 1.929,
            "A98": null,
            "Diesel": 2.199,
            "LPG": 0.879
        },
        "id": 679
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Klaipėda",
        "address": "Kretingalė, Klaipėdos g. 1A, 96332",
        "lat": 55.82750436,
        "lng": 21.18507776,
        "prices": {
            "A95": 1.869,
            "A98": null,
            "Diesel": 2.139,
            "LPG": 0.899
        },
        "id": 680
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Kretingos",
        "address": "Kretinga, Vytauto g. 163, 97133",
        "lat": 55.89058152,
        "lng": 21.27847374,
        "prices": {
            "A95": 1.869,
            "A98": null,
            "Diesel": 2.139,
            "LPG": 0.899
        },
        "id": 681
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Kretingos",
        "address": "Kretingsodžio k., 97100",
        "lat": 55.89597614,
        "lng": 21.22109589,
        "prices": {
            "A95": 1.869,
            "A98": null,
            "Diesel": 2.139,
            "LPG": 0.899
        },
        "id": 682
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Raseinių",
        "address": "Vejukų k. 5, 60345",
        "lat": 55.38656732,
        "lng": 22.90130867,
        "prices": {
            "A95": 1.929,
            "A98": null,
            "Diesel": 2.199,
            "LPG": 0.879
        },
        "id": 683
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Švenčionių",
        "address": "Kaltanėnai, Utenos g. 1, 18239",
        "lat": 55.25517576,
        "lng": 25.99073547,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 2.199,
            "LPG": null
        },
        "id": 684
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Ukmergės",
        "address": "Dukstynos k., Vytauto g. 131, 20186",
        "lat": 55.26921777,
        "lng": 24.81044038,
        "prices": {
            "A95": 1.929,
            "A98": null,
            "Diesel": 2.199,
            "LPG": 0.879
        },
        "id": 685
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Ukmergės",
        "address": "Šventupės k., Beržų g. 13, 20360",
        "lat": 55.32021345,
        "lng": 24.87484604,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 2.199,
            "LPG": 0.879
        },
        "id": 686
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Varėnos",
        "address": "Valkininkai, Vilniaus g. 6, 65438",
        "lat": 54.36482746,
        "lng": 24.837357,
        "prices": {
            "A95": 1.929,
            "A98": null,
            "Diesel": 2.199,
            "LPG": 0.899
        },
        "id": 687
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Kalvarijos",
        "address": "Pelucmurgių k., Muitinės g. 35, 69270",
        "lat": 54.33980186,
        "lng": 23.16305666,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 2.199,
            "LPG": null
        },
        "id": 688
    },
    {
        "name": "Vildega",
        "logo": "⛽",
        "city": "Vilkaviškio",
        "address": "Vilkaviškis, Vytauto g. 2D, 70137",
        "lat": 54.64346113,
        "lng": 23.05291997,
        "prices": {
            "A95": 1.729,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.71
        },
        "id": 689
    },
    {
        "name": "Vimijula",
        "logo": "⛽",
        "city": "Jonavos",
        "address": "Ručiūnų k., Kauno g. 2A, 55355",
        "lat": 55.13794926,
        "lng": 24.1932708,
        "prices": {
            "A95": 1.82,
            "A98": null,
            "Diesel": 2.09,
            "LPG": 0.83
        },
        "id": 690
    },
    {
        "name": "VIRŠI Lietuva",
        "logo": "⛽",
        "city": "Marijampolės",
        "address": "Pasūduonės k., L.Taunio g. 3, 69331",
        "lat": 54.47583948,
        "lng": 23.22134553,
        "prices": {
            "A95": 1.824,
            "A98": null,
            "Diesel": 2.124,
            "LPG": 0.784
        },
        "id": 691
    },
    {
        "name": "Visvilas",
        "logo": "⛽",
        "city": "Mažeikių",
        "address": "Tirkšlių k., Laukų g. 2C, 89330",
        "lat": 56.25843863,
        "lng": 22.30945015,
        "prices": {
            "A95": 1.79,
            "A98": null,
            "Diesel": 2.09,
            "LPG": 0.73
        },
        "id": 692
    },
    {
        "name": "Vlantana",
        "logo": "⛽",
        "city": "Klaipėda",
        "address": "Gobergiškės k., Dvaro g. 1, 92498",
        "lat": 55.71917037,
        "lng": 21.29335463,
        "prices": {
            "A95": 1.72,
            "A98": null,
            "Diesel": 2.02,
            "LPG": null
        },
        "id": 693
    },
    {
        "name": "Circle K",
        "logo": "🔴",
        "city": "Plungės",
        "address": "Truikių k., Pramogų g. 4, 90110",
        "lat": 55.93901908,
        "lng": 21.88009127,
        "prices": {
            "A95": 1.826,
            "A98": null,
            "Diesel": 2.176,
            "LPG": 0.826
        },
        "id": 694
    },
    {
        "name": "Žibalas",
        "logo": "⛽",
        "city": "Jonavos",
        "address": "Jonava, Taurostos g. 16A, 55195",
        "lat": 55.07211501,
        "lng": 24.29494647,
        "prices": {
            "A95": 1.83,
            "A98": null,
            "Diesel": 2.1,
            "LPG": 0.82
        },
        "id": 695
    },
    {
        "name": "Tomega",
        "logo": "⛽",
        "city": "Šalčininkų",
        "address": "Dumblės k., 17178",
        "lat": 54.16015419,
        "lng": 25.00989858,
        "prices": {
            "A95": 1.889,
            "A98": null,
            "Diesel": 2.159,
            "LPG": null
        },
        "id": 696
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
            "Diesel": 2.02,
            "LPG": null
        },
        "id": 697
    },
    {
        "name": "Emsi",
        "logo": "🛢️",
        "city": "Kaunas",
        "address": "Kaunas, Savanorių pr. 402A, 49281",
        "lat": 54.92750478,
        "lng": 23.97218798,
        "prices": {
            "A95": 1.729,
            "A98": null,
            "Diesel": 1.989,
            "LPG": 0.699
        },
        "id": 698
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Marijampolės",
        "address": "Marijampolė, Geležinkelio g. 5, 68305",
        "lat": 54.55419458,
        "lng": 23.36226549,
        "prices": {
            "A95": 1.829,
            "A98": null,
            "Diesel": 2.129,
            "LPG": 0.789
        },
        "id": 699
    },
    {
        "name": "VIADA LT",
        "logo": "🦌",
        "city": "Marijampolės",
        "address": "Marijampolė, J. Ambrazevičiaus-Brazaičio g. 2, 68161",
        "lat": 54.56770974,
        "lng": 23.3395483,
        "prices": {
            "A95": 1.829,
            "A98": null,
            "Diesel": 2.129,
            "LPG": 0.789
        },
        "id": 700
    },
    {
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Klaipėda",
        "address": "Klaipėda, Šilutės pl. 1, 91109",
        "lat": 55.70493952,
        "lng": 21.16332052,
        "prices": {
            "A95": 1.749,
            "A98": null,
            "Diesel": 2.039,
            "LPG": 0.719
        },
        "id": 701
    },
    {
        "name": "Circle K",
        "logo": "🔴",
        "city": "Kėdainių",
        "address": "Kėdainiai, J.Basanavičiaus g. 103, 57350",
        "lat": 55.29744038,
        "lng": 24.00122406,
        "prices": {
            "A95": 1.819,
            "A98": null,
            "Diesel": 2.129,
            "LPG": 0.819
        },
        "id": 702
    },
    {
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Panevėžio",
        "address": "Panevėžys, Smėlynės g. 169, 37454",
        "lat": 55.75770557,
        "lng": 24.36792164,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.989,
            "LPG": 0.709
        },
        "id": 703
    },
    {
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Vilnius",
        "address": "Vilnius, Rinktinės g. 59, 09318",
        "lat": 54.70286414,
        "lng": 25.2881622,
        "prices": {
            "A95": 1.739,
            "A98": null,
            "Diesel": 2.029,
            "LPG": 0.739
        },
        "id": 704
    },
    {
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Marijampolės",
        "address": "Marijampolė, Vasaros g. 15, 68266",
        "lat": 54.55574872,
        "lng": 23.37530293,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.699
        },
        "id": 705
    },
    {
        "name": "Skulas",
        "logo": "⛽",
        "city": "Pasvalio",
        "address": "Pasvalys, Mūšos g. 2E, 39105",
        "lat": 56.06952157,
        "lng": 24.3877815,
        "prices": {
            "A95": 1.72,
            "A98": null,
            "Diesel": 2.02,
            "LPG": 0.73
        },
        "id": 706
    },
    {
        "name": "Alauša",
        "logo": "⛽",
        "city": "Utenos",
        "address": "Utena, J. Basanavičiaus g. 1C, 28134",
        "lat": 55.49561569,
        "lng": 25.58161546,
        "prices": {
            "A95": 1.694,
            "A98": null,
            "Diesel": 1.989,
            "LPG": 0.694
        },
        "id": 707
    },
    {
        "name": "Alauša",
        "logo": "⛽",
        "city": "Alytaus",
        "address": "Santaikos k., Santaikos g. 2A, 64283",
        "lat": 54.38847533,
        "lng": 23.82019239,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.979,
            "LPG": 0.669
        },
        "id": 708
    },
    {
        "name": "Alauša",
        "logo": "⛽",
        "city": "Vilnius",
        "address": "Vilnius, Kirtimų g. 23A, 02300",
        "lat": 54.65123469,
        "lng": 25.15020378,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.959,
            "LPG": 0.669
        },
        "id": 709
    },
    {
        "name": "Alauša",
        "logo": "⛽",
        "city": "Širvintų",
        "address": "Paširvinčio k., Paširvio g. 1, 19128",
        "lat": 55.02465267,
        "lng": 24.9854701,
        "prices": {
            "A95": 1.694,
            "A98": null,
            "Diesel": 1.959,
            "LPG": 0.669
        },
        "id": 710
    },
    {
        "name": "Alauša",
        "logo": "⛽",
        "city": "Utenos",
        "address": "Daugailių k., Plento g. 17, 28414",
        "lat": 55.59407798,
        "lng": 25.83355324,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.699
        },
        "id": 711
    },
    {
        "name": "Alauša",
        "logo": "⛽",
        "city": "Vilnius",
        "address": "Vilnius, Pelesos g. 1, 02161",
        "lat": 54.66583297,
        "lng": 25.27406135,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.699
        },
        "id": 712
    },
    {
        "name": "Alauša",
        "logo": "⛽",
        "city": "Vilnius",
        "address": "Vilnius, Šiaurės g. 39, 11110",
        "lat": 54.70341173,
        "lng": 25.41584686,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.979,
            "LPG": 0.669
        },
        "id": 713
    },
    {
        "name": "Circle K",
        "logo": "🔴",
        "city": "Vilnius",
        "address": "Vilnius, Baltupio g. 10, 08303",
        "lat": 54.73577456,
        "lng": 25.26560169,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 2.089,
            "LPG": 0.769
        },
        "id": 714
    },
    {
        "name": "Circle K",
        "logo": "🔴",
        "city": "Vilnius",
        "address": "Vilnius, A. P. Kavoliuko g. 32A, 04329",
        "lat": 54.695327,
        "lng": 25.21864382,
        "prices": {
            "A95": 1.839,
            "A98": null,
            "Diesel": 2.109,
            "LPG": 0.859
        },
        "id": 715
    },
    {
        "name": "Circle K",
        "logo": "🔴",
        "city": "Vilnius",
        "address": "Vilnius, Ukmergės g. 231, 07156",
        "lat": 54.72021725,
        "lng": 25.24624009,
        "prices": {
            "A95": 1.809,
            "A98": null,
            "Diesel": 2.109,
            "LPG": null
        },
        "id": 716
    },
    {
        "name": "Circle K",
        "logo": "🔴",
        "city": "Vilnius",
        "address": "Vilnius, A. Goštauto g. 13, 01108",
        "lat": 54.69431295,
        "lng": 25.26328729,
        "prices": {
            "A95": 1.819,
            "A98": null,
            "Diesel": 2.119,
            "LPG": null
        },
        "id": 717
    },
    {
        "name": "Circle K",
        "logo": "🔴",
        "city": "Vilnius",
        "address": "Vilnius, Laisvės pr. 43C, 05112",
        "lat": 54.70911636,
        "lng": 25.22821654,
        "prices": {
            "A95": 1.819,
            "A98": null,
            "Diesel": 2.119,
            "LPG": 0.809
        },
        "id": 718
    },
    {
        "name": "Circle K",
        "logo": "🔴",
        "city": "Vilnius",
        "address": "Vilnius, J. Tiškevičiaus g. 24, 02231",
        "lat": 54.62315768,
        "lng": 25.11012657,
        "prices": {
            "A95": 1.859,
            "A98": null,
            "Diesel": 2.134,
            "LPG": 0.749
        },
        "id": 719
    },
    {
        "name": "Circle K",
        "logo": "🔴",
        "city": "Kaunas",
        "address": "Kaunas, Veiverių g. 49A, 46336",
        "lat": 54.88089673,
        "lng": 23.89404259,
        "prices": {
            "A95": 1.869,
            "A98": null,
            "Diesel": 2.159,
            "LPG": null
        },
        "id": 720
    },
    {
        "name": "Circle K",
        "logo": "🔴",
        "city": "Šiaulių",
        "address": "Šiauliai, Pramonės g. 17, 78136",
        "lat": 55.90925299,
        "lng": 23.31949087,
        "prices": {
            "A95": 1.839,
            "A98": null,
            "Diesel": 2.129,
            "LPG": 0.779
        },
        "id": 721
    },
    {
        "name": "Circle K",
        "logo": "🔴",
        "city": "Klaipėda",
        "address": "Klaipėda, Minijos g. 90, 93234",
        "lat": 55.68767149,
        "lng": 21.14504939,
        "prices": {
            "A95": 1.859,
            "A98": null,
            "Diesel": 2.139,
            "LPG": 0.807
        },
        "id": 722
    },
    {
        "name": "Circle K",
        "logo": "🔴",
        "city": "Klaipėda",
        "address": "Klaipėda, H. Manto g. 96, 92295",
        "lat": 55.73043078,
        "lng": 21.12468141,
        "prices": {
            "A95": 1.879,
            "A98": null,
            "Diesel": 2.169,
            "LPG": null
        },
        "id": 723
    },
    {
        "name": "Circle K",
        "logo": "🔴",
        "city": "Panevėžio",
        "address": "Panevėžys, Parko g. 7A, 35189",
        "lat": 55.73178377,
        "lng": 24.34228381,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 2.089,
            "LPG": 0.759
        },
        "id": 724
    },
    {
        "name": "Circle K",
        "logo": "🔴",
        "city": "Kėdainių",
        "address": "Kėdainiai, J. Basanavičiaus g. 40A, 57290",
        "lat": 55.28658448,
        "lng": 23.97237575,
        "prices": {
            "A95": 1.819,
            "A98": null,
            "Diesel": 2.129,
            "LPG": null
        },
        "id": 725
    },
    {
        "name": "Alauša",
        "logo": "⛽",
        "city": "Kalvarijos",
        "address": "Salaperaugio k., Europos g. 17, 69286",
        "lat": 54.32025959,
        "lng": 23.14009812,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 2.089,
            "LPG": 0.799
        },
        "id": 726
    },
    {
        "name": "Apsaga",
        "logo": "⛽",
        "city": "Šiaulių",
        "address": "Šiauliai, Nuklono g. 4, 78349",
        "lat": 55.91627595,
        "lng": 23.24697259,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 2.059,
            "LPG": 0.759
        },
        "id": 727
    },
    {
        "name": "Apsaga",
        "logo": "⛽",
        "city": "Šiaulių",
        "address": "Šiauliai, V. Bielskio g. 47A, 76159",
        "lat": 55.9564535,
        "lng": 23.308507,
        "prices": {
            "A95": 1.79,
            "A98": null,
            "Diesel": 2.05,
            "LPG": 0.76
        },
        "id": 728
    },
    {
        "name": "Apsaga",
        "logo": "⛽",
        "city": "Šiaulių",
        "address": "Šiauliai, Tilžės g. 223, 76200",
        "lat": 55.94055743,
        "lng": 23.32614696,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 2.059,
            "LPG": 0.759
        },
        "id": 729
    },
    {
        "name": "Circle K",
        "logo": "🔴",
        "city": "Mažeikių",
        "address": "Mažeikiai, Žemaitijos g. 57, 89128",
        "lat": 56.30250843,
        "lng": 22.34544242,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 2.089,
            "LPG": 0.799
        },
        "id": 730
    },
    {
        "name": "Circle K",
        "logo": "🔴",
        "city": "Jonavos",
        "address": "Jonava, Vasario 16-osios g. 33, 55164",
        "lat": 55.07057559,
        "lng": 24.26355329,
        "prices": {
            "A95": 1.829,
            "A98": null,
            "Diesel": 2.129,
            "LPG": 0.799
        },
        "id": 731
    },
    {
        "name": "Circle K",
        "logo": "🔴",
        "city": "Vilnius",
        "address": "Vilnius, Geležinio Vilko g. 39, 08104",
        "lat": 54.70241442,
        "lng": 25.26480764,
        "prices": {
            "A95": 1.819,
            "A98": null,
            "Diesel": 2.119,
            "LPG": 0.859
        },
        "id": 732
    },
    {
        "name": "Circle K",
        "logo": "🔴",
        "city": "Tauragės",
        "address": "Tauragė, Gedimino g. 47, 72294",
        "lat": 55.24822761,
        "lng": 22.30278409,
        "prices": {
            "A95": 1.809,
            "A98": null,
            "Diesel": 2.099,
            "LPG": 0.769
        },
        "id": 733
    },
    {
        "name": "Circle K",
        "logo": "🔴",
        "city": "Kaunas",
        "address": "Kaunas, Karaliaus Mindaugo pr. 34A, 44306",
        "lat": 54.8940661,
        "lng": 23.9140971,
        "prices": {
            "A95": 1.869,
            "A98": null,
            "Diesel": 2.159,
            "LPG": null
        },
        "id": 734
    },
    {
        "name": "Circle K",
        "logo": "🔴",
        "city": "Klaipėda",
        "address": "Klaipėda, Vilniaus pl. 1A, 94105",
        "lat": 55.69283578,
        "lng": 21.17969077,
        "prices": {
            "A95": 1.849,
            "A98": null,
            "Diesel": 2.129,
            "LPG": 0.799
        },
        "id": 735
    },
    {
        "name": "Circle K",
        "logo": "🔴",
        "city": "Vilnius",
        "address": "Vilnius, P. Žadeikos g. 1A, 06319",
        "lat": 54.7306881,
        "lng": 25.23903248,
        "prices": {
            "A95": 1.819,
            "A98": null,
            "Diesel": 2.099,
            "LPG": 0.819
        },
        "id": 736
    },
    {
        "name": "Circle K",
        "logo": "🔴",
        "city": "Vilnius",
        "address": "Vilnius, Geležinio Vilko g. 4, 08104",
        "lat": 54.70282838,
        "lng": 25.26396366,
        "prices": {
            "A95": 1.819,
            "A98": null,
            "Diesel": 2.119,
            "LPG": 0.859
        },
        "id": 737
    },
    {
        "name": "Circle K",
        "logo": "🔴",
        "city": "Vilnius",
        "address": "Vilnius, Gariūnų g. 45, 02300",
        "lat": 54.65894829,
        "lng": 25.16073386,
        "prices": {
            "A95": 1.809,
            "A98": null,
            "Diesel": 2.109,
            "LPG": null
        },
        "id": 738
    },
    {
        "name": "Circle K",
        "logo": "🔴",
        "city": "Kaunas",
        "address": "Kaunas, Savanorių pr. 404B, 50301",
        "lat": 54.92831117,
        "lng": 23.97383767,
        "prices": {
            "A95": 1.809,
            "A98": null,
            "Diesel": 2.069,
            "LPG": 0.759
        },
        "id": 739
    },
    {
        "name": "Circle K",
        "logo": "🔴",
        "city": "Kaunas",
        "address": "Kaunas, Sukilėlių pr. 120, 49237",
        "lat": 54.92855064,
        "lng": 23.92859572,
        "prices": {
            "A95": 1.839,
            "A98": null,
            "Diesel": 2.119,
            "LPG": 0.759
        },
        "id": 740
    },
    {
        "name": "Circle K",
        "logo": "🔴",
        "city": "Šiaulių",
        "address": "Šiauliai, Tilžės g. 25, 78229",
        "lat": 55.91263541,
        "lng": 23.27389212,
        "prices": {
            "A95": 1.829,
            "A98": null,
            "Diesel": 2.119,
            "LPG": 0.759
        },
        "id": 741
    },
    {
        "name": "Circle K",
        "logo": "🔴",
        "city": "Klaipėda",
        "address": "Klaipėda, Jūrininkų pr. 31, 95225",
        "lat": 55.65678867,
        "lng": 21.18241406,
        "prices": {
            "A95": 1.829,
            "A98": null,
            "Diesel": 2.129,
            "LPG": null
        },
        "id": 742
    },
    {
        "name": "Circle K",
        "logo": "🔴",
        "city": "Marijampolės",
        "address": "Marijampolė, J. Dailidės g. 10, 68307",
        "lat": 54.55712164,
        "lng": 23.35397892,
        "prices": {
            "A95": 1.779,
            "A98": null,
            "Diesel": 2.079,
            "LPG": null
        },
        "id": 743
    },
    {
        "name": "Circle K",
        "logo": "🔴",
        "city": "Vilnius",
        "address": "Vilnius, Oslo g. 12, 04123",
        "lat": 54.67102496,
        "lng": 25.19212333,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 2.099,
            "LPG": null
        },
        "id": 744
    },
    {
        "name": "Circle K",
        "logo": "🔴",
        "city": "Tauragės",
        "address": "Tauragė, Dariaus ir Girėno g. 83A, 72192",
        "lat": 55.26699181,
        "lng": 22.30978561,
        "prices": {
            "A95": 1.779,
            "A98": null,
            "Diesel": 2.069,
            "LPG": null
        },
        "id": 745
    },
    {
        "name": "Circle K",
        "logo": "🔴",
        "city": "Kaunas",
        "address": "Kaunas, Islandijos pl. 32, 47446",
        "lat": 54.93837079,
        "lng": 23.89835415,
        "prices": {
            "A95": 1.829,
            "A98": null,
            "Diesel": 2.094,
            "LPG": null
        },
        "id": 746
    },
    {
        "name": "Saurida",
        "logo": "🔥",
        "city": "Skuodo",
        "address": "Skuodas, Vytauto g. 20, 98123",
        "lat": 56.26078641,
        "lng": 21.53007634,
        "prices": {
            "A95": 1.77,
            "A98": null,
            "Diesel": 2.01,
            "LPG": 0.7
        },
        "id": 747
    },
    {
        "name": "Circle K",
        "logo": "🔴",
        "city": "Vilnius",
        "address": "Vilnius, Kareivių g. 13, 09109",
        "lat": 54.71872049,
        "lng": 25.3006737,
        "prices": {
            "A95": 1.809,
            "A98": null,
            "Diesel": 2.094,
            "LPG": 0.759
        },
        "id": 748
    },
    {
        "name": "Circle K",
        "logo": "🔴",
        "city": "Kaunas",
        "address": "Kaunas, R. Kalantos g. 159, 52314",
        "lat": 54.89414785,
        "lng": 24.00673101,
        "prices": {
            "A95": 1.859,
            "A98": null,
            "Diesel": 2.104,
            "LPG": 0.789
        },
        "id": 749
    },
    {
        "name": "Jozita",
        "logo": "🟡",
        "city": "Tauragės",
        "address": "Papušynės k., Šilalės g. 105, 72175",
        "lat": 55.2716812,
        "lng": 22.28652444,
        "prices": {
            "A95": 1.79,
            "A98": null,
            "Diesel": 2.02,
            "LPG": 0.68
        },
        "id": 750
    },
    {
        "name": "Osijos dujos",
        "logo": "⛽",
        "city": "Marijampolės",
        "address": "Marijampolė, Gėlių g. 25,",
        "lat": 54.5517352,
        "lng": 23.3590452,
        "prices": {
            "A95": null,
            "A98": null,
            "Diesel": null,
            "LPG": 0.76
        },
        "id": 751
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
            "Diesel": 1.959,
            "LPG": null
        },
        "id": 752
    },
    {
        "name": "Saurida",
        "logo": "🔥",
        "city": "Kaunas",
        "address": "Neveronių k., Martinavos g. 1, 54475",
        "lat": 54.9245727,
        "lng": 24.07912738,
        "prices": {
            "A95": 1.73,
            "A98": null,
            "Diesel": 2.0,
            "LPG": 0.72
        },
        "id": 753
    },
    {
        "name": "Baltic Petroleum",
        "logo": "🔵",
        "city": "Kalvarijos",
        "address": "Salaperaugio k., Europos g. 9, 69286",
        "lat": 54.32426372,
        "lng": 23.14466022,
        "prices": {
            "A95": 1.819,
            "A98": null,
            "Diesel": 2.119,
            "LPG": 0.799
        },
        "id": 754
    }
];