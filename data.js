// Automatiškai sugeneruoti duomenys iš LEA Excel
const lastUpdated = '2026-07-24';
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
        "name": "UAB Medelsta",
        "logo": "⛽",
        "city": "Vilnius",
        "address": "Pagirių k., Durpių g. 45, 14118",
        "lat": 54.569190603015,
        "lng": 25.188073425176,
        "prices": {
            "A95": 1.85,
            "A98": null,
            "Diesel": 1.86,
            "LPG": 0.82
        },
        "id": 1
    },
    {
        "name": "UAB Junasa, Degalinė",
        "logo": "⛽",
        "city": "Šiaulių",
        "address": "Gruzdžiai, M. Katiliškio g. 50, 81428",
        "lat": 56.099315074319,
        "lng": 23.265858191655,
        "prices": {
            "A95": 1.749,
            "A98": null,
            "Diesel": 1.949,
            "LPG": 0.69
        },
        "id": 2
    },
    {
        "name": "UAB Trevena",
        "logo": "⛽",
        "city": "Rietavo",
        "address": "Rietavas, Lėgų k. 1, 90305",
        "lat": 55.626265101,
        "lng": 21.969529539,
        "prices": {
            "A95": 1.83,
            "A98": null,
            "Diesel": 1.96,
            "LPG": 0.74
        },
        "id": 3
    },
    {
        "name": "UAB Stateta",
        "logo": "⛽",
        "city": "Kalvarijos",
        "address": "Kreivukė, Turgaus g. 4, 69232",
        "lat": 54.410870282171,
        "lng": 23.20685126968,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.897,
            "LPG": 0.737
        },
        "id": 4
    },
    {
        "name": "UAB Trevena",
        "logo": "⛽",
        "city": "Rietavo",
        "address": "Vatušių k., Kvėdarnos g. 2, 90307",
        "lat": 55.718465282451,
        "lng": 21.932260432249,
        "prices": {
            "A95": 1.83,
            "A98": null,
            "Diesel": 1.96,
            "LPG": 0.74
        },
        "id": 5
    },
    {
        "name": "UAB Trevena",
        "logo": "⛽",
        "city": "Klaipėda",
        "address": "Pyktiškės k., Veiviržėnų g. 29, 96303",
        "lat": 55.687086454447,
        "lng": 21.693217354684,
        "prices": {
            "A95": 1.83,
            "A98": null,
            "Diesel": 1.96,
            "LPG": 0.74
        },
        "id": 6
    },
    {
        "name": "UAB Trevena",
        "logo": "⛽",
        "city": "Kretingos",
        "address": "Kretinga, Vilniaus g. 29B, 97101",
        "lat": 55.896886119571,
        "lng": 21.244494096024,
        "prices": {
            "A95": 1.89,
            "A98": null,
            "Diesel": 2.03,
            "LPG": 0.89
        },
        "id": 7
    },
    {
        "name": "UAB Trevena",
        "logo": "⛽",
        "city": "Šilutės",
        "address": "Saugų k., Tilžės g. 21, 99409",
        "lat": 55.464590888221,
        "lng": 21.470355289742,
        "prices": {
            "A95": 1.83,
            "A98": null,
            "Diesel": 1.96,
            "LPG": 0.72
        },
        "id": 8
    },
    {
        "name": "UAB Stateta",
        "logo": "⛽",
        "city": "Alytaus",
        "address": "Miklusėnai, Kauno g. 1, 62461",
        "lat": 54.428066804273,
        "lng": 24.001371620224,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.897,
            "LPG": 0.737
        },
        "id": 9
    },
    {
        "name": "UAB Vimijula",
        "logo": "⛽",
        "city": "Jonavos",
        "address": "Ručiūnų k., Kauno g. 2A, 55355",
        "lat": 55.137903823116,
        "lng": 24.193454833791,
        "prices": {
            "A95": 1.87,
            "A98": null,
            "Diesel": 1.99,
            "LPG": 0.87
        },
        "id": 10
    },
    {
        "name": "UAB Tripletas",
        "logo": "⛽",
        "city": "Mažeikių",
        "address": "Mažeikiai, Sedos g. 16, 89233",
        "lat": 56.305861345635,
        "lng": 22.342528608787,
        "prices": {
            "A95": 1.66,
            "A98": null,
            "Diesel": 1.85,
            "LPG": 0.7
        },
        "id": 11
    },
    {
        "name": "UAB VIRŠI Lietuva",
        "logo": "⛽",
        "city": "Marijampolės",
        "address": "Pasūduonės k., L.Taunio g. 3, 69331",
        "lat": 54.461345681695,
        "lng": 23.238083413196,
        "prices": {
            "A95": 1.769,
            "A98": null,
            "Diesel": 1.969,
            "LPG": 0.714
        },
        "id": 12
    },
    {
        "name": "UAB Trevena",
        "logo": "⛽",
        "city": "Šilutės",
        "address": "Žemaitkiemio k., Liepų g. 4, 99317",
        "lat": 55.227443922883,
        "lng": 21.701851385507,
        "prices": {
            "A95": 1.83,
            "A98": null,
            "Diesel": 1.96,
            "LPG": 0.72
        },
        "id": 13
    },
    {
        "name": "UAB Trevena",
        "logo": "⛽",
        "city": "Klaipėda",
        "address": "Dituvos k., Šv. Kristoforo g. 4, 96357",
        "lat": 55.581641400038,
        "lng": 21.285338607284,
        "prices": {
            "A95": 1.83,
            "A98": null,
            "Diesel": 1.96,
            "LPG": 0.73
        },
        "id": 14
    },
    {
        "name": "UAB Stateta",
        "logo": "⛽",
        "city": "Alytaus",
        "address": "Kaniūkų k., 64104",
        "lat": 54.369165714,
        "lng": 24.109499034,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.897,
            "LPG": 0.737
        },
        "id": 15
    },
    {
        "name": "UAB Trevena",
        "logo": "⛽",
        "city": "Klaipėda",
        "address": "Klaipėda, Kretingos g. 28A, 92211",
        "lat": 55.728361083068,
        "lng": 21.132430062225,
        "prices": {
            "A95": 1.83,
            "A98": null,
            "Diesel": 1.96,
            "LPG": 0.73
        },
        "id": 16
    },
    {
        "name": "UAB Trevena",
        "logo": "⛽",
        "city": "Klaipėda",
        "address": "Gargždai, Kretingos pl. 1, 96105",
        "lat": 55.722688797732,
        "lng": 21.129693035562,
        "prices": {
            "A95": 1.84,
            "A98": null,
            "Diesel": 1.98,
            "LPG": 0.74
        },
        "id": 17
    },
    {
        "name": "UAB Trevena",
        "logo": "⛽",
        "city": "Klaipėda",
        "address": "Gargždai, Klaipėdos g. 39, 96157",
        "lat": 55.712279102631,
        "lng": 21.381632509353,
        "prices": {
            "A95": 1.8,
            "A98": null,
            "Diesel": 1.94,
            "LPG": 0.71
        },
        "id": 18
    },
    {
        "name": "UAB Stateta",
        "logo": "⛽",
        "city": "Alytaus",
        "address": "Alytaus k., 64464",
        "lat": 54.39870652,
        "lng": 24.100921259,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.897,
            "LPG": 0.737
        },
        "id": 19
    },
    {
        "name": "UAB Trevena",
        "logo": "⛽",
        "city": "Kretingos",
        "address": "Darbėnai, Laisvės g. 15, 97264",
        "lat": 56.026785166947,
        "lng": 21.262637563638,
        "prices": {
            "A95": 1.89,
            "A98": null,
            "Diesel": 2.03,
            "LPG": 0.89
        },
        "id": 20
    },
    {
        "name": "UAB Topgas",
        "logo": "⛽",
        "city": "Kaišiadorių",
        "address": "Kaišiadorys, Paukštininkų g. 13, 56161",
        "lat": 54.865092530318,
        "lng": 24.434110673347,
        "prices": {
            "A95": null,
            "A98": null,
            "Diesel": null,
            "LPG": 0.73
        },
        "id": 21
    },
    {
        "name": "UAB Topgas",
        "logo": "⛽",
        "city": "Kupiškio",
        "address": "Slavinčiškis, Slavinčiškio g. 18, 40333",
        "lat": 55.832444245849,
        "lng": 25.020037305085,
        "prices": {
            "A95": null,
            "A98": null,
            "Diesel": null,
            "LPG": 0.71
        },
        "id": 22
    },
    {
        "name": "UAB Trevena",
        "logo": "⛽",
        "city": "Klaipėda",
        "address": "Klaipėda, Minijos g. 152A, 93263",
        "lat": 55.669549040342,
        "lng": 21.158840433303,
        "prices": {
            "A95": 1.83,
            "A98": null,
            "Diesel": 1.96,
            "LPG": 0.72
        },
        "id": 23
    },
    {
        "name": "UAB Stateta",
        "logo": "⛽",
        "city": "Alytaus",
        "address": "Alytus, Santaikos g. 28 B, 62123",
        "lat": 54.387475049304,
        "lng": 24.031946539894,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.869,
            "LPG": null
        },
        "id": 24
    },
    {
        "name": "UAB Žibalas",
        "logo": "⛽",
        "city": "Jonavos",
        "address": "Jonava, Taurostos g. 16A, 55195",
        "lat": 55.067041453471,
        "lng": 24.289473809437,
        "prices": {
            "A95": 1.92,
            "A98": null,
            "Diesel": 2.06,
            "LPG": 0.88
        },
        "id": 25
    },
    {
        "name": "UAB Bemija",
        "logo": "⛽",
        "city": "Ukmergės",
        "address": "Ukmergė, Dariaus ir Girėno g. 31, 20154",
        "lat": 55.240724461731,
        "lng": 24.787348380679,
        "prices": {
            "A95": 1.78,
            "A98": null,
            "Diesel": 1.97,
            "LPG": 0.76
        },
        "id": 26
    },
    {
        "name": "UAB Gazimpeksas",
        "logo": "⛽",
        "city": "Telšių",
        "address": "Telšiai, Mažeikių g. 7A, 87101",
        "lat": 56.000531160273,
        "lng": 22.247236847061,
        "prices": {
            "A95": null,
            "A98": null,
            "Diesel": null,
            "LPG": 0.72
        },
        "id": 27
    },
    {
        "name": "UAB Junasa, Degalinė",
        "logo": "⛽",
        "city": "Šiaulių",
        "address": "Šiauliai, Bačiūnų g. 12a, 77109",
        "lat": 55.897986328182,
        "lng": 23.352088277858,
        "prices": {
            "A95": 1.749,
            "A98": null,
            "Diesel": 1.949,
            "LPG": 0.69
        },
        "id": 28
    },
    {
        "name": "UAB Junasa, Degalinė",
        "logo": "⛽",
        "city": "Šiaulių",
        "address": "Šiauliai, Žemaitės g. 131c, 76175",
        "lat": 55.948087603761,
        "lng": 23.320481378269,
        "prices": {
            "A95": 1.749,
            "A98": null,
            "Diesel": 1.949,
            "LPG": 0.69
        },
        "id": 29
    },
    {
        "name": "UAB Plovimo sistemos",
        "logo": "⛽",
        "city": "Šiaulių",
        "address": "Šiauliai, Gegužių g. 28, 78322",
        "lat": 55.905942849771,
        "lng": 23.259168175635,
        "prices": {
            "A95": null,
            "A98": null,
            "Diesel": null,
            "LPG": 0.729
        },
        "id": 30
    },
    {
        "name": "UAB Stateta",
        "logo": "⛽",
        "city": "Prienų",
        "address": "Gustaičių k., 59296",
        "lat": 54.747519444157,
        "lng": 23.704328759931,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.897,
            "LPG": 0.737
        },
        "id": 31
    },
    {
        "name": "UAB Stateta",
        "logo": "⛽",
        "city": "Vilnius",
        "address": "Vilnius, Ukmergės g. 246, 06120",
        "lat": 54.723213312553,
        "lng": 25.241257690471,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.897,
            "LPG": 0.737
        },
        "id": 32
    },
    {
        "name": "UAB Stateta",
        "logo": "⛽",
        "city": "Utenos",
        "address": "Utena, Palangos g. 66, 28140",
        "lat": 55.497925549512,
        "lng": 25.58392145931,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.897,
            "LPG": 0.737
        },
        "id": 33
    },
    {
        "name": "UAB Stateta",
        "logo": "⛽",
        "city": "Panevėžio",
        "address": "Paliūniškio k., Žemdirbių g. 15, 38440",
        "lat": 55.787745777419,
        "lng": 24.439259173553,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.897,
            "LPG": 0.737
        },
        "id": 34
    },
    {
        "name": "UAB Stateta",
        "logo": "⛽",
        "city": "Marijampolės",
        "address": "Kantališkių k., 69841",
        "lat": 54.636976614,
        "lng": 23.421718999,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.897,
            "LPG": 0.737
        },
        "id": 35
    },
    {
        "name": "UAB Stateta",
        "logo": "⛽",
        "city": "Kupiškio",
        "address": "Kupiškis, Panevėžio g. 9, 40134",
        "lat": 55.825909797952,
        "lng": 24.97951960423,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.897,
            "LPG": 0.737
        },
        "id": 36
    },
    {
        "name": "UAB Stateta",
        "logo": "⛽",
        "city": "Klaipėda",
        "address": "Klaipėda, Minijos g. 90, 93239",
        "lat": 55.68767050546,
        "lng": 21.145004593369,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.897,
            "LPG": 0.737
        },
        "id": 37
    },
    {
        "name": "UAB Stateta",
        "logo": "⛽",
        "city": "Kaunas",
        "address": "Ramučių k., Erdvės g. 78, 54463",
        "lat": 54.929349780159,
        "lng": 24.038095795416,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.897,
            "LPG": 0.737
        },
        "id": 38
    },
    {
        "name": "Agroserviso kooperatyvas Pynauja",
        "logo": "⛽",
        "city": "Šilalės",
        "address": "Kvėdarna, Papynaujo k., Dvaro g. 1, 75342",
        "lat": 55.565895282461,
        "lng": 21.996070268562,
        "prices": {
            "A95": 1.79,
            "A98": null,
            "Diesel": 1.94,
            "LPG": 0.8
        },
        "id": 39
    },
    {
        "name": "IĮ Raimondo Balsio",
        "logo": "⛽",
        "city": "Kelmės",
        "address": "Ramučių k., Luokės g. 2, 86377",
        "lat": 55.830035747881,
        "lng": 22.853368978413,
        "prices": {
            "A95": 1.71,
            "A98": null,
            "Diesel": 1.82,
            "LPG": 0.83
        },
        "id": 40
    },
    {
        "name": "UAB Vlantana",
        "logo": "⛽",
        "city": "Klaipėda",
        "address": "Gobergiškės k., Dvaro g. 1, 92498",
        "lat": 55.719633887391,
        "lng": 21.293935590095,
        "prices": {
            "A95": 1.76,
            "A98": null,
            "Diesel": 1.96,
            "LPG": null
        },
        "id": 41
    },
    {
        "name": "UAB Kenaoil",
        "logo": "⛽",
        "city": "Vilnius",
        "address": "Kena, Miško g. 6, 13146",
        "lat": 54.646056510809,
        "lng": 25.625135696319,
        "prices": {
            "A95": 1.919,
            "A98": null,
            "Diesel": 2.059,
            "LPG": 0.899
        },
        "id": 42
    },
    {
        "name": "UAB Leosta",
        "logo": "⛽",
        "city": "Telšių",
        "address": "Luokė, Telšių g. 66, 88236",
        "lat": 55.90133150383,
        "lng": 22.50631233794,
        "prices": {
            "A95": 1.85,
            "A98": null,
            "Diesel": 2.0,
            "LPG": 0.8
        },
        "id": 43
    },
    {
        "name": "MB Tormenta",
        "logo": "⛽",
        "city": "Kaunas",
        "address": "Kaunas, Linkuvos g. 77, 48314",
        "lat": 54.914334325546,
        "lng": 23.887784259342,
        "prices": {
            "A95": 1.82,
            "A98": null,
            "Diesel": 2.02,
            "LPG": null
        },
        "id": 44
    },
    {
        "name": "UAB Baltic Petroleum",
        "logo": "🔵",
        "city": "Prienų",
        "address": "Veiverių k., Kauno g. 85, 59285",
        "lat": 54.649831133266,
        "lng": 23.948061039647,
        "prices": {
            "A95": 1.869,
            "A98": null,
            "Diesel": 2.009,
            "LPG": 0.78
        },
        "id": 45
    },
    {
        "name": "UAB Baltic Petroleum",
        "logo": "🔵",
        "city": "Marijampolės",
        "address": "Marijampolė, P. Armino g. 69, 68127",
        "lat": 54.533820899452,
        "lng": 23.35318840265,
        "prices": {
            "A95": 1.669,
            "A98": null,
            "Diesel": 1.869,
            "LPG": 0.669
        },
        "id": 46
    },
    {
        "name": "UAB Baltic Petroleum",
        "logo": "🔵",
        "city": "Radviliškio",
        "address": "Radviliškis, Šiaulių g. 1A, 82142",
        "lat": 55.825678499334,
        "lng": 23.523272389324,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.899,
            "LPG": 0.71
        },
        "id": 47
    },
    {
        "name": "UAB Baltic Petroleum",
        "logo": "🔵",
        "city": "Druskininkų",
        "address": "Leipalingis, Merkinės g. 37, 67280",
        "lat": 54.094484031244,
        "lng": 23.871556727156,
        "prices": {
            "A95": 1.879,
            "A98": null,
            "Diesel": 2.079,
            "LPG": 0.819
        },
        "id": 48
    },
    {
        "name": "UAB Baltic Petroleum",
        "logo": "🔵",
        "city": "Palangos",
        "address": "Palanga, Ganyklų g. 28C, 00126",
        "lat": 55.923397744039,
        "lng": 21.075793374831,
        "prices": {
            "A95": 1.759,
            "A98": null,
            "Diesel": 1.919,
            "LPG": 0.719
        },
        "id": 49
    },
    {
        "name": "UAB Baltic Petroleum",
        "logo": "🔵",
        "city": "Pasvalio",
        "address": "Pasvalys, Mūšos g. 18, 39104",
        "lat": 56.070422400856,
        "lng": 24.413583609727,
        "prices": {
            "A95": 1.719,
            "A98": null,
            "Diesel": 1.919,
            "LPG": null
        },
        "id": 50
    },
    {
        "name": "UAB Baltic Petroleum",
        "logo": "🔵",
        "city": "Anykščių",
        "address": "Anykščiai, Mindaugo g. 23, 29141",
        "lat": 55.509000264811,
        "lng": 25.100598626351,
        "prices": {
            "A95": 1.669,
            "A98": null,
            "Diesel": 1.869,
            "LPG": 0.669
        },
        "id": 51
    },
    {
        "name": "UAB Baltic Petroleum",
        "logo": "🔵",
        "city": "Klaipėda",
        "address": "Gargždai, Dariaus ir Girėno g. 10, 96144",
        "lat": 55.707424681497,
        "lng": 21.380302049862,
        "prices": {
            "A95": 1.769,
            "A98": null,
            "Diesel": 1.939,
            "LPG": 0.719
        },
        "id": 52
    },
    {
        "name": "UAB Baltic Petroleum",
        "logo": "🔵",
        "city": "Druskininkų",
        "address": "Druskininkai, Leipalingio g. 26, 66371",
        "lat": 54.030274420059,
        "lng": 23.983576336868,
        "prices": {
            "A95": 1.889,
            "A98": null,
            "Diesel": 2.079,
            "LPG": 0.839
        },
        "id": 53
    },
    {
        "name": "UAB Baltic Petroleum",
        "logo": "🔵",
        "city": "Varėnos",
        "address": "Merkinė, Vilniaus g. 87, 65333",
        "lat": 54.169037204315,
        "lng": 24.20789710442,
        "prices": {
            "A95": 1.879,
            "A98": null,
            "Diesel": 2.079,
            "LPG": 0.839
        },
        "id": 54
    },
    {
        "name": "UAB Baltic Petroleum",
        "logo": "🔵",
        "city": "Rietavo",
        "address": "Rietavas, Dariaus ir Girėno g. 19, 90316",
        "lat": 55.719466877971,
        "lng": 21.92824357279,
        "prices": {
            "A95": 1.819,
            "A98": null,
            "Diesel": 1.959,
            "LPG": 0.71
        },
        "id": 55
    },
    {
        "name": "UAB Baltic Petroleum",
        "logo": "🔵",
        "city": "Jonavos",
        "address": "Jonava, Žemaitės g. 1, 55134",
        "lat": 55.082285788414,
        "lng": 24.271009147293,
        "prices": {
            "A95": 1.769,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.779
        },
        "id": 56
    },
    {
        "name": "UAB Baltic Petroleum",
        "logo": "🔵",
        "city": "Varėnos",
        "address": "Senosios Varėnos k., Vilniaus g. 6A, 65486",
        "lat": 54.256575579874,
        "lng": 24.547035109506,
        "prices": {
            "A95": 1.879,
            "A98": null,
            "Diesel": 2.059,
            "LPG": 0.809
        },
        "id": 57
    },
    {
        "name": "UAB Baltic Petroleum",
        "logo": "🔵",
        "city": "Šakių",
        "address": "Griškabūdis, A. Skelčio g., 71296",
        "lat": 54.855430063854,
        "lng": 23.183797990969,
        "prices": {
            "A95": 1.779,
            "A98": null,
            "Diesel": 1.969,
            "LPG": null
        },
        "id": 58
    },
    {
        "name": "UAB Baltic Petroleum",
        "logo": "🔵",
        "city": "Vilnius",
        "address": "Vilnius, B. Brazdžionio g. 2, 47266",
        "lat": 54.614528820205,
        "lng": 25.308765538646,
        "prices": {
            "A95": 1.729,
            "A98": null,
            "Diesel": 1.939,
            "LPG": null
        },
        "id": 59
    },
    {
        "name": "UAB Baltic Petroleum",
        "logo": "🔵",
        "city": "Alytaus",
        "address": "Likiškėliai, Pabalių g. 11, 64381",
        "lat": 54.528396299355,
        "lng": 24.181601816873,
        "prices": {
            "A95": 1.759,
            "A98": null,
            "Diesel": 1.959,
            "LPG": 0.689
        },
        "id": 60
    },
    {
        "name": "UAB Baltic Petroleum",
        "logo": "🔵",
        "city": "Šiaulių",
        "address": "Šiauliai, Kupiškio g. 4, 76146",
        "lat": 55.957701646703,
        "lng": 23.31592522716,
        "prices": {
            "A95": 1.769,
            "A98": null,
            "Diesel": 1.949,
            "LPG": 0.7
        },
        "id": 61
    },
    {
        "name": "UAB Baltic Petroleum",
        "logo": "🔵",
        "city": "Vilnius",
        "address": "Grigaičiai, Pavilnės g. 1, 11236",
        "lat": 54.680997438115,
        "lng": 25.412032178329,
        "prices": {
            "A95": 1.789,
            "A98": null,
            "Diesel": 1.949,
            "LPG": 0.719
        },
        "id": 62
    },
    {
        "name": "UAB Baltic Petroleum",
        "logo": "🔵",
        "city": "Kaunas",
        "address": "Ringaudų k., Gėlių g. 1A, 53335",
        "lat": 54.889395229933,
        "lng": 23.804682802318,
        "prices": {
            "A95": 1.789,
            "A98": null,
            "Diesel": 1.949,
            "LPG": 0.699
        },
        "id": 63
    },
    {
        "name": "UAB Baltic Petroleum",
        "logo": "🔵",
        "city": "Vilnius",
        "address": "Vilnius, Visalaukio g. 2, 08401",
        "lat": 54.779062771601,
        "lng": 25.342210338145,
        "prices": {
            "A95": 1.789,
            "A98": null,
            "Diesel": 1.949,
            "LPG": 0.709
        },
        "id": 64
    },
    {
        "name": "UAB Baltic Petroleum",
        "logo": "🔵",
        "city": "Zarasų",
        "address": "Sarakiškių k., Vytauto g. 61, 32139",
        "lat": 55.737161662307,
        "lng": 26.272832679689,
        "prices": {
            "A95": 1.819,
            "A98": null,
            "Diesel": 1.939,
            "LPG": 0.729
        },
        "id": 65
    },
    {
        "name": "UAB Baltic Petroleum",
        "logo": "🔵",
        "city": "Kupiškio",
        "address": "Noriūnų k., Parko g. 3A, 40395",
        "lat": 55.796476283947,
        "lng": 24.888755411324,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.899,
            "LPG": 0.749
        },
        "id": 66
    },
    {
        "name": "UAB Baltic Petroleum",
        "logo": "🔵",
        "city": "Jurbarko",
        "address": "Klišių k., Pievų g. 2, 74211",
        "lat": 55.098428747197,
        "lng": 22.772948808397,
        "prices": {
            "A95": 1.819,
            "A98": null,
            "Diesel": 1.969,
            "LPG": 0.73
        },
        "id": 67
    },
    {
        "name": "UAB Baltic Petroleum",
        "logo": "🔵",
        "city": "Zarasų",
        "address": "Padustėlio k., V. Striogos g. 4A, 32306",
        "lat": 55.739566178871,
        "lng": 25.852484510211,
        "prices": {
            "A95": 1.819,
            "A98": null,
            "Diesel": 1.939,
            "LPG": null
        },
        "id": 68
    },
    {
        "name": "UAB Baltic Petroleum",
        "logo": "🔵",
        "city": "Šilalės",
        "address": "Bučių k., 75381",
        "lat": 55.573911107,
        "lng": 22.176612711,
        "prices": {
            "A95": 1.789,
            "A98": null,
            "Diesel": 1.949,
            "LPG": 0.71
        },
        "id": 69
    },
    {
        "name": "UAB Baltic Petroleum",
        "logo": "🔵",
        "city": "Tauragės",
        "address": "Taurų k., Tilžės pl. 362, 72142",
        "lat": 55.23639129368,
        "lng": 22.229955188869,
        "prices": {
            "A95": 1.719,
            "A98": null,
            "Diesel": 1.929,
            "LPG": 0.71
        },
        "id": 70
    },
    {
        "name": "UAB Baltic Petroleum",
        "logo": "🔵",
        "city": "Raseinių",
        "address": "Girkalnio k., Žemaičių g. 39, 60311",
        "lat": 55.318311590384,
        "lng": 23.210783891012,
        "prices": {
            "A95": 1.819,
            "A98": null,
            "Diesel": 1.979,
            "LPG": 0.71
        },
        "id": 71
    },
    {
        "name": "UAB Baltic Petroleum",
        "logo": "🔵",
        "city": "Vilnius",
        "address": "Vilnius, Zujūnų g. 2A, 06200",
        "lat": 54.710938350629,
        "lng": 25.161516873707,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.899,
            "LPG": 0.7
        },
        "id": 72
    },
    {
        "name": "UAB Baltic Petroleum",
        "logo": "🔵",
        "city": "Mažeikių",
        "address": "Tirkšliai, Laukų g. 10, 89330",
        "lat": 56.262555153231,
        "lng": 22.310452909353,
        "prices": {
            "A95": 1.779,
            "A98": null,
            "Diesel": 1.949,
            "LPG": null
        },
        "id": 73
    },
    {
        "name": "UAB Baltic Petroleum",
        "logo": "🔵",
        "city": "Plungės",
        "address": "Plateliai,  Žemaičių Kalvarijos g. 1A, 90421",
        "lat": 56.043791755123,
        "lng": 21.815873012792,
        "prices": {
            "A95": 1.869,
            "A98": null,
            "Diesel": 2.019,
            "LPG": 0.789
        },
        "id": 74
    },
    {
        "name": "UAB Baltic Petroleum",
        "logo": "🔵",
        "city": "Kalvarijos",
        "address": "Pasiekų k., Europos g. 12, 69270",
        "lat": 54.322378926129,
        "lng": 23.145190804799,
        "prices": {
            "A95": 1.839,
            "A98": null,
            "Diesel": 1.979,
            "LPG": 0.829
        },
        "id": 75
    },
    {
        "name": "UAB Baltic Petroleum",
        "logo": "🔵",
        "city": "Kalvarijos",
        "address": "Salaperaugio k., Europos g. 9, 69286",
        "lat": 54.324145328404,
        "lng": 23.144646903102,
        "prices": {
            "A95": 1.839,
            "A98": null,
            "Diesel": 1.979,
            "LPG": 0.819
        },
        "id": 76
    },
    {
        "name": "UAB Baltic Petroleum",
        "logo": "🔵",
        "city": "Marijampolės",
        "address": "Pietarių k., Kauno g. 164, 68100",
        "lat": 54.586962291313,
        "lng": 23.384465306711,
        "prices": {
            "A95": 1.669,
            "A98": null,
            "Diesel": 1.869,
            "LPG": 0.669
        },
        "id": 77
    },
    {
        "name": "UAB Baltic Petroleum",
        "logo": "🔵",
        "city": "Vilnius",
        "address": "Vilnius, Molėtų pl. 27A, 08450",
        "lat": 54.767666275039,
        "lng": 25.272410374727,
        "prices": {
            "A95": 1.709,
            "A98": null,
            "Diesel": 1.929,
            "LPG": 0.689
        },
        "id": 78
    },
    {
        "name": "UAB Baltic Petroleum",
        "logo": "🔵",
        "city": "Vilnius",
        "address": "Vilnius, S. Batoro g. 15, 11100",
        "lat": 54.692183926093,
        "lng": 25.346600946666,
        "prices": {
            "A95": 1.729,
            "A98": null,
            "Diesel": 1.939,
            "LPG": 0.699
        },
        "id": 79
    },
    {
        "name": "UAB Baltic Petroleum",
        "logo": "🔵",
        "city": "Vilnius",
        "address": "Užubalių k., Senasis Ukmergės kl. 4, 14013",
        "lat": 54.79288619932,
        "lng": 25.196656174581,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.899,
            "LPG": 0.699
        },
        "id": 80
    },
    {
        "name": "UAB Baltic Petroleum",
        "logo": "🔵",
        "city": "Vilnius",
        "address": "Vilnius, Rinktinės g. 59, 09318",
        "lat": 54.702819932579,
        "lng": 25.288207999099,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.919,
            "LPG": 0.719
        },
        "id": 81
    },
    {
        "name": "UAB Baltic Petroleum",
        "logo": "🔵",
        "city": "Marijampolės",
        "address": "Marijampolė, Vasaros g. 15, 68266",
        "lat": 54.555439797489,
        "lng": 23.375386196829,
        "prices": {
            "A95": 1.669,
            "A98": null,
            "Diesel": 1.869,
            "LPG": 0.669
        },
        "id": 82
    },
    {
        "name": "UAB Baltic Petroleum",
        "logo": "🔵",
        "city": "Telšių",
        "address": "Ožtakių k., Dariaus ir Girėno g. 76, 88321",
        "lat": 55.730733319039,
        "lng": 22.376358444966,
        "prices": {
            "A95": 1.829,
            "A98": null,
            "Diesel": 2.039,
            "LPG": 0.789
        },
        "id": 83
    },
    {
        "name": "UAB Baltic Petroleum",
        "logo": "🔵",
        "city": "Rokiškio",
        "address": "Pandėlio k., Elektrinės g. 1, 42370",
        "lat": 56.019176955344,
        "lng": 25.222147537964,
        "prices": {
            "A95": 1.869,
            "A98": null,
            "Diesel": 2.049,
            "LPG": 0.809
        },
        "id": 84
    },
    {
        "name": "UAB Baltic Petroleum",
        "logo": "🔵",
        "city": "Radviliškio",
        "address": "Užuovėjos k., 82215",
        "lat": 55.765111389119,
        "lng": 23.718871519531,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.889,
            "LPG": 0.71
        },
        "id": 85
    },
    {
        "name": "UAB Baltic Petroleum",
        "logo": "🔵",
        "city": "Kaunas",
        "address": "Kaunas, Vaidoto g. 153, 45392",
        "lat": 54.861260952829,
        "lng": 23.958583764713,
        "prices": {
            "A95": 1.839,
            "A98": null,
            "Diesel": 2.009,
            "LPG": 0.749
        },
        "id": 86
    },
    {
        "name": "UAB Baltic Petroleum",
        "logo": "🔵",
        "city": "Kaišiadorių",
        "address": "Triliškių k., Kauno pl. 5, 56179",
        "lat": 54.816941639789,
        "lng": 24.436768155748,
        "prices": {
            "A95": 1.789,
            "A98": null,
            "Diesel": 1.959,
            "LPG": 0.699
        },
        "id": 87
    },
    {
        "name": "UAB Baltic Petroleum",
        "logo": "🔵",
        "city": "Kaunas",
        "address": "Pagirių k., Marijampolės g. 1, 53282",
        "lat": 54.814578697465,
        "lng": 23.872580828086,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.899,
            "LPG": 0.689
        },
        "id": 88
    },
    {
        "name": "UAB Baltic Petroleum",
        "logo": "🔵",
        "city": "Jonavos",
        "address": "Spanėnų k., Plento g. 46, 55305",
        "lat": 55.058254492155,
        "lng": 24.263920165457,
        "prices": {
            "A95": 1.769,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.77
        },
        "id": 89
    },
    {
        "name": "UAB Baltic Petroleum",
        "logo": "🔵",
        "city": "Klaipėda",
        "address": "Priekulė, Klaipėdos g. 61, 96342",
        "lat": 55.562002726627,
        "lng": 21.308498979224,
        "prices": {
            "A95": 1.849,
            "A98": null,
            "Diesel": 2.039,
            "LPG": 0.71
        },
        "id": 90
    },
    {
        "name": "UAB Baltic Petroleum",
        "logo": "🔵",
        "city": "Mažeikių",
        "address": "Užežerės k., Gardenio g. 39, 89382",
        "lat": 56.163938374335,
        "lng": 22.101548138122,
        "prices": {
            "A95": 1.779,
            "A98": null,
            "Diesel": 1.949,
            "LPG": 0.709
        },
        "id": 91
    },
    {
        "name": "UAB Baltic Petroleum",
        "logo": "🔵",
        "city": "Kaunas",
        "address": "Kaunas, Taikos pr. 120, 52140",
        "lat": 54.917400006632,
        "lng": 24.034813653694,
        "prices": {
            "A95": 1.719,
            "A98": null,
            "Diesel": 1.919,
            "LPG": 0.719
        },
        "id": 92
    },
    {
        "name": "UAB Baltic Petroleum",
        "logo": "🔵",
        "city": "Raseinių",
        "address": "Kalnujų k. 1, 60191",
        "lat": 55.374138963117,
        "lng": 23.120973055773,
        "prices": {
            "A95": 1.859,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.709
        },
        "id": 93
    },
    {
        "name": "UAB Baltic Petroleum",
        "logo": "🔵",
        "city": "Klaipėda",
        "address": "Klaipėda, Liepų g. 79A, 92195",
        "lat": 55.72061394142,
        "lng": 21.152902273998,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.919,
            "LPG": 0.699
        },
        "id": 94
    },
    {
        "name": "UAB Baltic Petroleum",
        "logo": "🔵",
        "city": "Mažeikių",
        "address": "Mažeikiai, M. Daukšos g. 17, 89234",
        "lat": 56.305096245513,
        "lng": 22.350496697403,
        "prices": {
            "A95": 1.679,
            "A98": null,
            "Diesel": 1.909,
            "LPG": 0.699
        },
        "id": 95
    },
    {
        "name": "UAB Baltic Petroleum",
        "logo": "🔵",
        "city": "Prienų",
        "address": "Prienai, Vilniaus g. 3A, 59115",
        "lat": 54.628495543557,
        "lng": 23.958851566519,
        "prices": {
            "A95": 1.729,
            "A98": null,
            "Diesel": 1.959,
            "LPG": 0.689
        },
        "id": 96
    },
    {
        "name": "UAB Baltic Petroleum",
        "logo": "🔵",
        "city": "Kėdainių",
        "address": "Kėdainiai, J. Basanavičiaus g. 95B, 57352",
        "lat": 55.276893002576,
        "lng": 23.95585453322,
        "prices": {
            "A95": 1.749,
            "A98": null,
            "Diesel": 2.019,
            "LPG": 0.779
        },
        "id": 97
    },
    {
        "name": "UAB Baltic Petroleum",
        "logo": "🔵",
        "city": "Ukmergės",
        "address": "Ukmergė, Kauno g. 49, 20115",
        "lat": 55.240905343201,
        "lng": 24.739769932227,
        "prices": {
            "A95": 1.679,
            "A98": null,
            "Diesel": 1.889,
            "LPG": 0.719
        },
        "id": 98
    },
    {
        "name": "UAB Baltic Petroleum",
        "logo": "🔵",
        "city": "Biržų",
        "address": "Valantiškio k., 41131",
        "lat": 56.196685938492,
        "lng": 24.703067191156,
        "prices": {
            "A95": 1.759,
            "A98": null,
            "Diesel": 1.959,
            "LPG": 0.739
        },
        "id": 99
    },
    {
        "name": "UAB Baltic Petroleum",
        "logo": "🔵",
        "city": "Šakių",
        "address": "Šakiai, Sodų g. 1, 71136",
        "lat": 54.945583359779,
        "lng": 23.045778499472,
        "prices": {
            "A95": 1.779,
            "A98": null,
            "Diesel": 1.969,
            "LPG": 0.71
        },
        "id": 100
    },
    {
        "name": "UAB Baltic Petroleum",
        "logo": "🔵",
        "city": "Skuodo",
        "address": "Skuodas, Vytauto g. 22, 98122",
        "lat": 56.259137096935,
        "lng": 21.530235941303,
        "prices": {
            "A95": 1.739,
            "A98": null,
            "Diesel": 1.939,
            "LPG": 0.709
        },
        "id": 101
    },
    {
        "name": "UAB Baltic Petroleum",
        "logo": "🔵",
        "city": "Vilnius",
        "address": "Vilnius,  Kalvarijų g. 161A, 08311",
        "lat": 54.724007078784,
        "lng": 25.28240612954,
        "prices": {
            "A95": 1.669,
            "A98": null,
            "Diesel": 1.869,
            "LPG": 0.689
        },
        "id": 102
    },
    {
        "name": "UAB Baltic Petroleum",
        "logo": "🔵",
        "city": "Trakų",
        "address": "Trakai, Vilniaus g. 33, 21118",
        "lat": 54.627357281105,
        "lng": 24.948585100914,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.779
        },
        "id": 103
    },
    {
        "name": "UAB Baltic Petroleum",
        "logo": "🔵",
        "city": "Molėtų",
        "address": "Molėtai, Vilniaus g. 104, 33114",
        "lat": 55.216994288013,
        "lng": 25.403100589944,
        "prices": {
            "A95": 1.749,
            "A98": null,
            "Diesel": 1.989,
            "LPG": 0.799
        },
        "id": 104
    },
    {
        "name": "UAB Baltic Petroleum",
        "logo": "🔵",
        "city": "Varėnos",
        "address": "Varėna, M. K. Čiurlionio g. 63, 65219",
        "lat": 54.218344462206,
        "lng": 24.565665481875,
        "prices": {
            "A95": 1.879,
            "A98": null,
            "Diesel": 2.059,
            "LPG": 0.809
        },
        "id": 105
    },
    {
        "name": "UAB Baltic Petroleum",
        "logo": "🔵",
        "city": "Klaipėda",
        "address": "Klaipėda, Tilžės g. 90, 91101",
        "lat": 55.700412171753,
        "lng": 21.19909301456,
        "prices": {
            "A95": 1.709,
            "A98": null,
            "Diesel": 1.919,
            "LPG": 0.699
        },
        "id": 106
    },
    {
        "name": "UAB Baltic Petroleum",
        "logo": "🔵",
        "city": "Vilnius",
        "address": "Vilnius, Metalo g. 4B, 02189",
        "lat": 54.640480240174,
        "lng": 25.267366061577,
        "prices": {
            "A95": 1.759,
            "A98": null,
            "Diesel": 1.959,
            "LPG": 0.739
        },
        "id": 107
    },
    {
        "name": "UAB Baltic Petroleum",
        "logo": "🔵",
        "city": "Šalčininkų",
        "address": "Šalčininkai, Vilniaus g. 5A, 17102",
        "lat": 54.317936391718,
        "lng": 25.381615844267,
        "prices": {
            "A95": 1.869,
            "A98": null,
            "Diesel": 2.019,
            "LPG": 0.799
        },
        "id": 108
    },
    {
        "name": "UAB Baltic Petroleum",
        "logo": "🔵",
        "city": "Širvintų",
        "address": "Širvintos, Musninkų g. 21, 19126",
        "lat": 55.032285891954,
        "lng": 24.96716811553,
        "prices": {
            "A95": 1.669,
            "A98": null,
            "Diesel": 1.869,
            "LPG": 0.669
        },
        "id": 109
    },
    {
        "name": "UAB Baltic Petroleum",
        "logo": "🔵",
        "city": "Kaunas",
        "address": "Kaunas, Chemijos g. 6, 51344",
        "lat": 54.903234799813,
        "lng": 23.982786342494,
        "prices": {
            "A95": 1.789,
            "A98": null,
            "Diesel": 1.919,
            "LPG": 0.709
        },
        "id": 110
    },
    {
        "name": "UAB Baltic Petroleum",
        "logo": "🔵",
        "city": "Akmenės",
        "address": "Naujoji Akmenė, V. Kudirkos g. 21A, 85145",
        "lat": 56.318906269185,
        "lng": 22.885267065319,
        "prices": {
            "A95": 1.729,
            "A98": null,
            "Diesel": 1.939,
            "LPG": 0.71
        },
        "id": 111
    },
    {
        "name": "UAB Baltic Petroleum",
        "logo": "🔵",
        "city": "Vilnius",
        "address": "Vilkaraisčio k., 15173",
        "lat": 54.862211074,
        "lng": 25.491386254,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.899,
            "LPG": 0.69
        },
        "id": 112
    },
    {
        "name": "UAB Baltic Petroleum",
        "logo": "🔵",
        "city": "Panevėžio",
        "address": "Panevėžys, Smėlynės g. 169, 37454",
        "lat": 55.757761320918,
        "lng": 24.367231048815,
        "prices": {
            "A95": 1.679,
            "A98": null,
            "Diesel": 1.899,
            "LPG": 0.689
        },
        "id": 113
    },
    {
        "name": "UAB Baltic Petroleum",
        "logo": "🔵",
        "city": "Pakruojo",
        "address": "Pakruojis, Statybininkų g. 28, 83163",
        "lat": 55.974424465548,
        "lng": 23.868955319686,
        "prices": {
            "A95": 1.779,
            "A98": null,
            "Diesel": 1.949,
            "LPG": 0.72
        },
        "id": 114
    },
    {
        "name": "UAB Baltic Petroleum",
        "logo": "🔵",
        "city": "Šilalės",
        "address": "Šilalė, Rytinio kelio g. 2, 75122",
        "lat": 55.490070281313,
        "lng": 22.200059640314,
        "prices": {
            "A95": 1.819,
            "A98": null,
            "Diesel": 1.969,
            "LPG": 0.719
        },
        "id": 115
    },
    {
        "name": "UAB Baltic Petroleum",
        "logo": "🔵",
        "city": "Radviliškio",
        "address": "Radviliškis, Miško g. 64, 82128",
        "lat": 55.800637647417,
        "lng": 23.56593862342,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.899,
            "LPG": 0.7
        },
        "id": 116
    },
    {
        "name": "UAB Baltic Petroleum",
        "logo": "🔵",
        "city": "Panevėžio",
        "address": "Panevėžys, Velžio kl. 74, 36148",
        "lat": 55.711745549889,
        "lng": 24.410495738258,
        "prices": {
            "A95": 1.719,
            "A98": null,
            "Diesel": 1.919,
            "LPG": 0.689
        },
        "id": 117
    },
    {
        "name": "UAB Baltic Petroleum",
        "logo": "🔵",
        "city": "Utenos",
        "address": "Utena, Basanavičiaus g. 1B, 28138",
        "lat": 55.495274437356,
        "lng": 25.574904291693,
        "prices": {
            "A95": 1.679,
            "A98": null,
            "Diesel": 1.889,
            "LPG": 0.709
        },
        "id": 118
    },
    {
        "name": "UAB Baltic Petroleum",
        "logo": "🔵",
        "city": "Raseinių",
        "address": "Raseiniai, Vilniaus g. 30, 60183",
        "lat": 55.371043693913,
        "lng": 23.132905281676,
        "prices": {
            "A95": 1.819,
            "A98": null,
            "Diesel": 1.979,
            "LPG": 0.71
        },
        "id": 119
    },
    {
        "name": "UAB Baltic Petroleum",
        "logo": "🔵",
        "city": "Jurbarko",
        "address": "Jurbarkas, Muitinės g. 22A, 74111",
        "lat": 55.07812220374,
        "lng": 22.744738088336,
        "prices": {
            "A95": 1.839,
            "A98": null,
            "Diesel": 1.969,
            "LPG": 0.72
        },
        "id": 120
    },
    {
        "name": "UAB Baltic Petroleum",
        "logo": "🔵",
        "city": "Vilnius",
        "address": "Vilnius, Gerosios Vilties g. 33, 03202",
        "lat": 54.66672020716,
        "lng": 25.25082010089,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 2.019,
            "LPG": 0.799
        },
        "id": 121
    },
    {
        "name": "UAB Baltic Petroleum",
        "logo": "🔵",
        "city": "Vilnius",
        "address": "Vilnius, Savanorių pr. 121, 03150",
        "lat": 54.660842649015,
        "lng": 25.233372163602,
        "prices": {
            "A95": 1.719,
            "A98": null,
            "Diesel": 1.919,
            "LPG": 0.709
        },
        "id": 122
    },
    {
        "name": "UAB Baltic Petroleum",
        "logo": "🔵",
        "city": "Kaunas",
        "address": "Kaunas, Raudondvario pl. 82, 47179",
        "lat": 54.907708263447,
        "lng": 23.874251676665,
        "prices": {
            "A95": 1.749,
            "A98": null,
            "Diesel": 1.909,
            "LPG": 0.709
        },
        "id": 123
    },
    {
        "name": "UAB Baltic Petroleum",
        "logo": "🔵",
        "city": "Kaunas",
        "address": "Kaunas, Jonavos g. 60A, 44191",
        "lat": 54.905036406082,
        "lng": 23.899567035911,
        "prices": {
            "A95": 1.749,
            "A98": null,
            "Diesel": 1.909,
            "LPG": 0.699
        },
        "id": 124
    },
    {
        "name": "UAB Baltic Petroleum",
        "logo": "🔵",
        "city": "Kaunas",
        "address": "Jaučakių k., 54217",
        "lat": 55.030895908,
        "lng": 23.603913559,
        "prices": {
            "A95": 1.829,
            "A98": null,
            "Diesel": 2.019,
            "LPG": 0.759
        },
        "id": 125
    },
    {
        "name": "UAB Baltic Petroleum",
        "logo": "🔵",
        "city": "Klaipėda",
        "address": "Klaipėda, Šilutės pl. 1, 91109",
        "lat": 55.704919498276,
        "lng": 21.163292062079,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.919,
            "LPG": 0.719
        },
        "id": 126
    },
    {
        "name": "UAB Baltic Petroleum",
        "logo": "🔵",
        "city": "Palangos",
        "address": "Palanga, Klaipėdos pl. 44, 00111",
        "lat": 55.915435690393,
        "lng": 21.078105606641,
        "prices": {
            "A95": 1.759,
            "A98": null,
            "Diesel": 1.919,
            "LPG": 0.739
        },
        "id": 127
    },
    {
        "name": "UAB Baltic Petroleum",
        "logo": "🔵",
        "city": "Šilutės",
        "address": "Šilutė, Klaipėdos g. 4A, 99116",
        "lat": 55.35290881775,
        "lng": 21.463035625156,
        "prices": {
            "A95": 1.689,
            "A98": null,
            "Diesel": 1.919,
            "LPG": 0.699
        },
        "id": 128
    },
    {
        "name": "UAB Baltic Petroleum",
        "logo": "🔵",
        "city": "Neringos",
        "address": "Neringa, Nidos-Smiltynės pl. 6, 93125",
        "lat": 55.300700205984,
        "lng": 20.980073465491,
        "prices": {
            "A95": 1.839,
            "A98": null,
            "Diesel": 2.059,
            "LPG": null
        },
        "id": 129
    },
    {
        "name": "UAB Baltic Petroleum",
        "logo": "🔵",
        "city": "Alytaus",
        "address": "Alytus, Santaikos g. 33, 62100",
        "lat": 54.386612132372,
        "lng": 24.033146744609,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.879,
            "LPG": 0.679
        },
        "id": 130
    },
    {
        "name": "UAB Baltic Petroleum",
        "logo": "🔵",
        "city": "Druskininkų",
        "address": "Druskininkai, Gardino g. 79, 69191",
        "lat": 53.999919902533,
        "lng": 23.988011453295,
        "prices": {
            "A95": 1.889,
            "A98": null,
            "Diesel": 2.079,
            "LPG": 0.839
        },
        "id": 131
    },
    {
        "name": "UAB Baltic Petroleum",
        "logo": "🔵",
        "city": "Lazdijų",
        "address": "Lazdijai, Turistų g. 88, 67102",
        "lat": 54.220630416749,
        "lng": 23.508918463955,
        "prices": {
            "A95": 1.689,
            "A98": null,
            "Diesel": 1.879,
            "LPG": 0.699
        },
        "id": 132
    },
    {
        "name": "UAB Baltic Petroleum",
        "logo": "🔵",
        "city": "Telšių",
        "address": "Telšiai, Šiaulių pl. 12, 88101",
        "lat": 56.00402616244,
        "lng": 22.244705344664,
        "prices": {
            "A95": 1.809,
            "A98": null,
            "Diesel": 2.029,
            "LPG": 0.759
        },
        "id": 133
    },
    {
        "name": "UAB Baltic Petroleum",
        "logo": "🔵",
        "city": "Joniškio",
        "address": "Joniškis, Vilniaus g. 72, 84172",
        "lat": 56.223351650975,
        "lng": 23.597612745873,
        "prices": {
            "A95": 1.709,
            "A98": null,
            "Diesel": 1.949,
            "LPG": 0.689
        },
        "id": 134
    },
    {
        "name": "UAB Baltic Petroleum",
        "logo": "🔵",
        "city": "Vilnius",
        "address": "Vilnius, Antakalnio g. 128, 10200",
        "lat": 54.722231204958,
        "lng": 25.317294292765,
        "prices": {
            "A95": 1.739,
            "A98": null,
            "Diesel": 1.929,
            "LPG": 0.689
        },
        "id": 135
    },
    {
        "name": "UAB Baltic Petroleum",
        "logo": "🔵",
        "city": "Jonavos",
        "address": "Gudžionių k., Plento g. 24, 58244",
        "lat": 55.099158349959,
        "lng": 24.315934639571,
        "prices": {
            "A95": 1.739,
            "A98": null,
            "Diesel": 1.969,
            "LPG": 0.829
        },
        "id": 136
    },
    {
        "name": "UAB Šventosios investicijos",
        "logo": "⛽",
        "city": "Palangos",
        "address": "Palanga (Šventoji), Elijos g. 26, 00319",
        "lat": 56.012822886004,
        "lng": 21.10352984681,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 2.069,
            "LPG": 0.899
        },
        "id": 137
    },
    {
        "name": "UAB EU Verslas",
        "logo": "⛽",
        "city": "Mažeikių",
        "address": "Mažeikiai, Viekšnių g. 24, 89235",
        "lat": 56.304210529804,
        "lng": 22.360247281548,
        "prices": {
            "A95": 1.719,
            "A98": null,
            "Diesel": 1.919,
            "LPG": 0.719
        },
        "id": 138
    },
    {
        "name": "UAB EU Verslas",
        "logo": "⛽",
        "city": "Plungės",
        "address": "Jovaišiškės k., Telšių g. 127, 90107",
        "lat": 55.908228846224,
        "lng": 21.871460788823,
        "prices": {
            "A95": 1.789,
            "A98": null,
            "Diesel": 1.989,
            "LPG": 0.72
        },
        "id": 139
    },
    {
        "name": "UAB EU Verslas",
        "logo": "⛽",
        "city": "Plungės",
        "address": "Plungė, Stoties g. 7C, 90115",
        "lat": 55.920472627469,
        "lng": 21.832112698738,
        "prices": {
            "A95": 1.79,
            "A98": null,
            "Diesel": 1.99,
            "LPG": 0.72
        },
        "id": 140
    },
    {
        "name": "UAB EU Verslas",
        "logo": "⛽",
        "city": "Plungės",
        "address": "Plungė, Rietavo g. 109, 90106",
        "lat": 55.895769524339,
        "lng": 21.86234027234,
        "prices": {
            "A95": 1.789,
            "A98": null,
            "Diesel": 1.989,
            "LPG": null
        },
        "id": 141
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Vilnius",
        "address": "Vilnius, Nemenčinės pl. 5, 10222",
        "lat": 54.726327105764,
        "lng": 25.326509524754,
        "prices": {
            "A95": 1.819,
            "A98": null,
            "Diesel": 2.039,
            "LPG": 0.799
        },
        "id": 142
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Vilnius",
        "address": "Vilnius, Naugarduko g. 74, 03203",
        "lat": 54.671251883112,
        "lng": 25.261812380171,
        "prices": {
            "A95": 1.839,
            "A98": null,
            "Diesel": 2.039,
            "LPG": 0.859
        },
        "id": 143
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Vilnius",
        "address": "Vilnius, Olandų g. 57, 01205",
        "lat": 54.68191114938,
        "lng": 25.314034235344,
        "prices": {
            "A95": 1.839,
            "A98": null,
            "Diesel": 2.039,
            "LPG": 0.859
        },
        "id": 144
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Vilnius",
        "address": "Vilnius, Ozo g. 12, 08311",
        "lat": 54.713801315387,
        "lng": 25.277101893573,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 2.019,
            "LPG": 0.859
        },
        "id": 145
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Vilnius",
        "address": "Vilnius, Pilaitės pr. 13, 06264",
        "lat": 54.702859453253,
        "lng": 25.203955539132,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 2.039,
            "LPG": 0.859
        },
        "id": 146
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Vilnius",
        "address": "Vilnius, Pilaitės pr. 28, 06264",
        "lat": 54.70147291883,
        "lng": 25.203324884737,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 2.039,
            "LPG": 0.859
        },
        "id": 147
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Vilnius",
        "address": "Vilnius, Saltoniškių g. 12, 08105",
        "lat": 54.699353177426,
        "lng": 25.259829724794,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 2.019,
            "LPG": 0.859
        },
        "id": 148
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Vilnius",
        "address": "Vilnius, Sodų g. 22, 03211",
        "lat": 54.670655091605,
        "lng": 25.281856192873,
        "prices": {
            "A95": 1.839,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.799
        },
        "id": 149
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Vilnius",
        "address": "Vilnius, Verkių g. 52, 09109",
        "lat": 54.720352233723,
        "lng": 25.295702761643,
        "prices": {
            "A95": 1.779,
            "A98": null,
            "Diesel": 1.989,
            "LPG": null
        },
        "id": 150
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Vilnius",
        "address": "Vilnius, Vilkpėdės g. 2, 03151",
        "lat": 54.665005395499,
        "lng": 25.246318348332,
        "prices": {
            "A95": 1.749,
            "A98": null,
            "Diesel": 1.979,
            "LPG": null
        },
        "id": 151
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Visagino",
        "address": "Visaginas, Statybininkų g. 1, 31138",
        "lat": 55.594458838736,
        "lng": 26.438903159666,
        "prices": {
            "A95": 1.859,
            "A98": null,
            "Diesel": 2.039,
            "LPG": 0.799
        },
        "id": 152
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Visagino",
        "address": "Visaginas, Taikos pr. 23B, 31107",
        "lat": 55.594871018825,
        "lng": 26.456513119143,
        "prices": {
            "A95": 1.859,
            "A98": null,
            "Diesel": 2.039,
            "LPG": 0.799
        },
        "id": 153
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Zarasų",
        "address": "Juodalaukių k. 2, 32104",
        "lat": 55.718251410225,
        "lng": 26.212963075614,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 2.039,
            "LPG": 0.799
        },
        "id": 154
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Tauragės",
        "address": "Tauragė, Pramonės g. 1, 72338",
        "lat": 55.240858907458,
        "lng": 22.305239868492,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 1.989,
            "LPG": 0.749
        },
        "id": 155
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Telšių",
        "address": "Telšiai, Pramonės g. 2A, 87101",
        "lat": 55.993350341913,
        "lng": 22.240155647621,
        "prices": {
            "A95": 1.849,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.759
        },
        "id": 156
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Trakų",
        "address": "Aukštųjų Semeniukų k., Logistikos g. 9, 21401",
        "lat": 54.701967576846,
        "lng": 25.009346355223,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 2.089,
            "LPG": 0.859
        },
        "id": 157
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Ukmergės",
        "address": "Ukmergė, Žiedo g. 15, 20127",
        "lat": 55.246239251106,
        "lng": 24.74320299213,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.759
        },
        "id": 158
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Ukmergės",
        "address": "Dukstynos k., Vytauto g. 131, 20186",
        "lat": 55.269155374388,
        "lng": 24.810113629703,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 2.089,
            "LPG": 0.839
        },
        "id": 159
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Ukmergės",
        "address": "Šventupės k., Beržų g. 13, 20360",
        "lat": 55.322003483457,
        "lng": 24.875068266352,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 2.089,
            "LPG": 0.839
        },
        "id": 160
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Utenos",
        "address": "Utena, Metalo g. 8, 28216",
        "lat": 55.497023447182,
        "lng": 25.630736232563,
        "prices": {
            "A95": 1.769,
            "A98": null,
            "Diesel": 2.019,
            "LPG": 0.799
        },
        "id": 161
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Utenos",
        "address": "Utena, Pramonės g. 23, 28124",
        "lat": 55.490085829743,
        "lng": 25.650927482942,
        "prices": {
            "A95": 1.769,
            "A98": null,
            "Diesel": 2.019,
            "LPG": 0.799
        },
        "id": 162
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Utenos",
        "address": "Gediminas, Vyturio g. 2, 28126",
        "lat": 55.478130553606,
        "lng": 25.581893374017,
        "prices": {
            "A95": 1.769,
            "A98": null,
            "Diesel": 2.019,
            "LPG": 0.799
        },
        "id": 163
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Varėnos",
        "address": "Valkininkai, Vilniaus g. 6, 65438",
        "lat": 54.364672710358,
        "lng": 24.837283233571,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 2.089,
            "LPG": 0.899
        },
        "id": 164
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Elektrėnų",
        "address": "Vievis, Kauno g. 26A, 21376",
        "lat": 54.771166515896,
        "lng": 24.820912957574,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 2.089,
            "LPG": 0.839
        },
        "id": 165
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Vilkaviškio",
        "address": "Vilkaviškis, Vytauto g. 105, 70118",
        "lat": 54.647676606964,
        "lng": 23.029109576265,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.799
        },
        "id": 166
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Vilnius",
        "address": "Avižienių k., Ožiarūčių g. 1A, 14185",
        "lat": 54.763935573755,
        "lng": 25.196646184286,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.749
        },
        "id": 167
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Vilnius",
        "address": "Vilnius, Ateities g. 17B, 06326",
        "lat": 54.735369586728,
        "lng": 25.256226344619,
        "prices": {
            "A95": 1.779,
            "A98": null,
            "Diesel": 1.979,
            "LPG": 0.759
        },
        "id": 168
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Vilnius",
        "address": "Vilnius, Dariaus ir Girėno g. 30A, 02169",
        "lat": 54.652974807961,
        "lng": 25.27210971586,
        "prices": {
            "A95": 1.819,
            "A98": null,
            "Diesel": 2.039,
            "LPG": 0.869
        },
        "id": 169
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Vilnius",
        "address": "Vilnius, Gariūnų g. 16A, 21401",
        "lat": 54.667292733056,
        "lng": 25.173851263325,
        "prices": {
            "A95": 1.819,
            "A98": null,
            "Diesel": 2.039,
            "LPG": 0.859
        },
        "id": 170
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Vilnius",
        "address": "Vilnius, Grigiškės, Kovo 11-osios g. 75, 27119",
        "lat": 54.669217427573,
        "lng": 25.104870630943,
        "prices": {
            "A95": 1.819,
            "A98": null,
            "Diesel": 2.039,
            "LPG": 0.859
        },
        "id": 171
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Vilnius",
        "address": "Vilnius, Justiniškių g. 12, 05131",
        "lat": 54.703261616967,
        "lng": 25.219452839913,
        "prices": {
            "A95": 1.779,
            "A98": null,
            "Diesel": 1.999,
            "LPG": null
        },
        "id": 172
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Vilnius",
        "address": "Vilnius, Kirtimų g. 29, 02244",
        "lat": 54.633287938607,
        "lng": 25.150721401512,
        "prices": {
            "A95": 1.819,
            "A98": null,
            "Diesel": 2.019,
            "LPG": 0.799
        },
        "id": 173
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Vilnius",
        "address": "Vilnius, Laisvės pr. 8, 04133",
        "lat": 54.674321922788,
        "lng": 25.222678866807,
        "prices": {
            "A95": 1.839,
            "A98": null,
            "Diesel": 2.059,
            "LPG": 0.859
        },
        "id": 174
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Vilnius",
        "address": "Vilnius, Liepkalnio g. 128A, 02121",
        "lat": 54.647477285307,
        "lng": 25.304044264045,
        "prices": {
            "A95": 1.839,
            "A98": null,
            "Diesel": 2.039,
            "LPG": 0.859
        },
        "id": 175
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Raseinių",
        "address": "Vejukų k. 5, 60345",
        "lat": 55.372096901001,
        "lng": 22.94764866724,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 2.089,
            "LPG": 0.859
        },
        "id": 176
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Rokiškio",
        "address": "Rokiškis, Panevėžio g. 5, 42163",
        "lat": 55.944511716228,
        "lng": 25.585613514104,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 2.089,
            "LPG": 0.899
        },
        "id": 177
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Rokiškio",
        "address": "Rokiškis, Žemaitės g. 2C, 42164",
        "lat": 55.934098794094,
        "lng": 25.58560429401,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 2.089,
            "LPG": 0.899
        },
        "id": 178
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Skuodo",
        "address": "Skuodas, Vilniaus g. 50, 98119",
        "lat": 56.270201963498,
        "lng": 21.547109215309,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.789
        },
        "id": 179
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Šalčininkų",
        "address": "Jašiūnai, Lydos g. 13, 17247",
        "lat": 54.439646026324,
        "lng": 25.32729507672,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 2.039,
            "LPG": 0.859
        },
        "id": 180
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Šiaulių",
        "address": "Šiauliai, Dubijos g. 1C,",
        "lat": 55.92652448729,
        "lng": 23.307082067852,
        "prices": {
            "A95": 1.819,
            "A98": null,
            "Diesel": 2.019,
            "LPG": 0.779
        },
        "id": 181
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Šiaulių",
        "address": "Šiauliai, Gegužių g. 26, 78348",
        "lat": 55.905373844274,
        "lng": 23.260154558001,
        "prices": {
            "A95": 1.819,
            "A98": null,
            "Diesel": 2.019,
            "LPG": 0.779
        },
        "id": 182
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Šiaulių",
        "address": "Šiauliai, J. Basanavičiaus g. 122A, 76161",
        "lat": 55.954719323644,
        "lng": 23.315961856076,
        "prices": {
            "A95": 1.819,
            "A98": null,
            "Diesel": 2.019,
            "LPG": 0.779
        },
        "id": 183
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Šiaulių",
        "address": "Kužiai, Draugystės g. 2, 80260",
        "lat": 55.935885354847,
        "lng": 23.082959699949,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 2.089,
            "LPG": 0.899
        },
        "id": 184
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Šilalės",
        "address": "Kuodaičių k., 75101",
        "lat": 55.566892394,
        "lng": 22.171466133,
        "prices": {
            "A95": 1.839,
            "A98": null,
            "Diesel": 2.039,
            "LPG": 0.799
        },
        "id": 185
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Šilutės",
        "address": "Šilutė, Tilžės g. 59, 99168",
        "lat": 55.342872662164,
        "lng": 21.496699108508,
        "prices": {
            "A95": 1.789,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.729
        },
        "id": 186
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Širvintų",
        "address": "Širvintos, Plento g. 4, 19117",
        "lat": 55.045695805478,
        "lng": 24.942563876949,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.759
        },
        "id": 187
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Švenčionių",
        "address": "Švenčionys, Vilniaus g. 50A, 18123",
        "lat": 55.125471574778,
        "lng": 26.145308812217,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 2.089,
            "LPG": 0.899
        },
        "id": 188
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Švenčionių",
        "address": "Kaltanėnai, Utenos g. 1, 18239",
        "lat": 55.255235841151,
        "lng": 25.990543675605,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 2.089,
            "LPG": null
        },
        "id": 189
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Švenčionių",
        "address": "Pabradė, Vilniaus g. 116B, 18177",
        "lat": 54.975086359761,
        "lng": 25.744879565083,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 2.089,
            "LPG": 0.829
        },
        "id": 190
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Švenčionių",
        "address": "Švenčionėliai, Žemutinė g. 51A, 18212",
        "lat": 55.168512396127,
        "lng": 26.015010702431,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 2.089,
            "LPG": 0.899
        },
        "id": 191
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Tauragės",
        "address": "Tauragė, Dariaus ir Girėno g. 138, 72194",
        "lat": 55.266476895319,
        "lng": 22.311073170188,
        "prices": {
            "A95": 1.819,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.749
        },
        "id": 192
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Šiaulių",
        "address": "Šiauliai, Tilžės g. 274, 76201",
        "lat": 55.944238214728,
        "lng": 23.331162186028,
        "prices": {
            "A95": 1.819,
            "A98": null,
            "Diesel": 2.019,
            "LPG": 0.779
        },
        "id": 193
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Šiaulių",
        "address": "Šiauliai, Užmiesčio g. 2, 76273",
        "lat": 55.922685575635,
        "lng": 23.357931973114,
        "prices": {
            "A95": 1.819,
            "A98": null,
            "Diesel": 2.019,
            "LPG": 0.779
        },
        "id": 194
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Šiaulių",
        "address": "Aukštelkės k., Ilgoji g. 1, 80184",
        "lat": 55.889164710366,
        "lng": 23.184339824684,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 2.089,
            "LPG": 0.859
        },
        "id": 195
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Šiaulių",
        "address": "Kuršėnai, Vilniaus g. 38A, 81136",
        "lat": 55.999999538064,
        "lng": 22.947706460463,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 2.089,
            "LPG": 0.899
        },
        "id": 196
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Mažeikių",
        "address": "Mažeikiai, Montuotojų g. 2A, 89101",
        "lat": 56.315600404663,
        "lng": 22.302744156822,
        "prices": {
            "A95": 1.749,
            "A98": null,
            "Diesel": 1.979,
            "LPG": 0.789
        },
        "id": 197
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Mažeikių",
        "address": "Mažeikiai, Žemaitijos g. 75, 89132",
        "lat": 56.300318979798,
        "lng": 22.360817921516,
        "prices": {
            "A95": 1.749,
            "A98": null,
            "Diesel": 1.979,
            "LPG": 0.789
        },
        "id": 198
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Molėtų",
        "address": "Molėtai, Vilniaus g. 101, 33112",
        "lat": 55.222871049877,
        "lng": 25.404627772702,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 2.039,
            "LPG": 0.799
        },
        "id": 199
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Molėtų",
        "address": "Gojaus k., Utenos g. 16, 33165",
        "lat": 55.214639937139,
        "lng": 25.437842740416,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 2.039,
            "LPG": 0.799
        },
        "id": 200
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Pakruojo",
        "address": "Pakruojis, Vytauto Didžiojo g. 98, 83162",
        "lat": 55.980449000364,
        "lng": 23.857991538876,
        "prices": {
            "A95": 1.859,
            "A98": null,
            "Diesel": 1.979,
            "LPG": 0.799
        },
        "id": 201
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Panevėžio",
        "address": "Krekenava, Tilto g. 35, 38305",
        "lat": 55.541540615047,
        "lng": 24.107847858271,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 2.089,
            "LPG": 0.899
        },
        "id": 202
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Panevėžio",
        "address": "Ramygala, Vienkiemio g. 1B, 38262",
        "lat": 55.520984626152,
        "lng": 24.312591433671,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 2.089,
            "LPG": 0.899
        },
        "id": 203
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Panevėžio",
        "address": "Šilagalio k., Panevėžio aplinkl. 5, 36258",
        "lat": 55.670508726347,
        "lng": 24.349992994382,
        "prices": {
            "A95": 1.759,
            "A98": null,
            "Diesel": 1.999,
            "LPG": null
        },
        "id": 204
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Panevėžio",
        "address": "Tičkūnų k., Tičkūnų g. 31, 38410",
        "lat": 55.778861337238,
        "lng": 24.365006575531,
        "prices": {
            "A95": 1.769,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.749
        },
        "id": 205
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Panevėžio",
        "address": "Panevėžys, J. Janonio g. 28A, 35101",
        "lat": 55.738819518936,
        "lng": 24.310174092795,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.749
        },
        "id": 206
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Panevėžio",
        "address": "Panevėžys, Navadolio g. 31, 36252",
        "lat": 55.714597034135,
        "lng": 24.335141770698,
        "prices": {
            "A95": 1.769,
            "A98": null,
            "Diesel": 1.979,
            "LPG": 0.749
        },
        "id": 207
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Panevėžio",
        "address": "Panevėžys, Pušaloto g. 193A, 191A",
        "lat": 55.753179563094,
        "lng": 24.312024314102,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.749
        },
        "id": 208
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Panevėžio",
        "address": "Panevėžys, Ramygalos g. 155, 36224",
        "lat": 55.703809063744,
        "lng": 24.380900172694,
        "prices": {
            "A95": 1.769,
            "A98": null,
            "Diesel": 1.979,
            "LPG": 0.749
        },
        "id": 209
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Panevėžio",
        "address": "Panevėžys, Ramygalos g. 186G, 36224",
        "lat": 55.709266395173,
        "lng": 24.373665752063,
        "prices": {
            "A95": 1.769,
            "A98": null,
            "Diesel": 1.979,
            "LPG": 0.749
        },
        "id": 210
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Panevėžio",
        "address": "Panevėžys, Senamiesčio g. 116A, 35115",
        "lat": 55.748535360093,
        "lng": 24.393313352202,
        "prices": {
            "A95": 1.769,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.749
        },
        "id": 211
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Panevėžio",
        "address": "Panevėžys, Venslaviškio g. 16, 35116",
        "lat": 55.736930154141,
        "lng": 24.387145947845,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.749
        },
        "id": 212
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Pasvalio",
        "address": "Brazdigalos k. 1, 39198",
        "lat": 56.039839071221,
        "lng": 24.376511517073,
        "prices": {
            "A95": 1.829,
            "A98": null,
            "Diesel": 2.039,
            "LPG": 0.799
        },
        "id": 213
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Pasvalio",
        "address": "Pasvalys, Vilniaus g. 50, 39177",
        "lat": 56.056008337092,
        "lng": 24.407401822697,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.799
        },
        "id": 214
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Plungės",
        "address": "Plungė, J. Tumo-Vaižganto g. 102, 90160",
        "lat": 55.903039400421,
        "lng": 21.830014540735,
        "prices": {
            "A95": 1.859,
            "A98": null,
            "Diesel": 2.049,
            "LPG": 0.859
        },
        "id": 215
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Plungės",
        "address": "Plungė, Žaltakalnio g. 10, 90158",
        "lat": 55.898376212408,
        "lng": 21.840254544206,
        "prices": {
            "A95": 1.859,
            "A98": null,
            "Diesel": 2.049,
            "LPG": 0.859
        },
        "id": 216
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Prienų",
        "address": "Grigaliūnų k. 11, 59281",
        "lat": 54.714320684678,
        "lng": 23.648793993637,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 2.089,
            "LPG": 0.89
        },
        "id": 217
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Prienų",
        "address": "Mačiūnų k., Kauno pl. 40, 59157",
        "lat": 54.65897759174,
        "lng": 23.947103993943,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.759
        },
        "id": 218
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Kaunas",
        "address": "Zapyškis, Vytauto g. 20A, 53419",
        "lat": 54.926952819772,
        "lng": 23.661905128351,
        "prices": {
            "A95": 1.859,
            "A98": null,
            "Diesel": 2.029,
            "LPG": 0.869
        },
        "id": 219
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Kazlų Rūdos",
        "address": "Ąžuolų Būdos k.",
        "lat": 54.702999617,
        "lng": 23.520496122,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 2.039,
            "LPG": 0.859
        },
        "id": 220
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Kėdainių",
        "address": "Dotnuva, Tilto g. 2A, 58352",
        "lat": 55.374752057425,
        "lng": 23.880852509235,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 2.089,
            "LPG": 0.899
        },
        "id": 221
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Kėdainių",
        "address": "Gudžiūnų k., Baisogalos g. 5, 58267",
        "lat": 55.518550814837,
        "lng": 23.773519975959,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 2.089,
            "LPG": 0.899
        },
        "id": 222
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Klaipėda",
        "address": "Klaipėda, Liepojos g. 242, 92330",
        "lat": 55.753700163101,
        "lng": 21.131398585221,
        "prices": {
            "A95": 1.819,
            "A98": null,
            "Diesel": 2.059,
            "LPG": 0.799
        },
        "id": 223
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Klaipėda",
        "address": "Klaipėda, Nemuno g. 139, 93185",
        "lat": 55.673962992464,
        "lng": 21.148039429052,
        "prices": {
            "A95": 1.789,
            "A98": null,
            "Diesel": 2.019,
            "LPG": 0.779
        },
        "id": 224
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Klaipėda",
        "address": "Klaipėda, Priestočio g. 28, 92191",
        "lat": 55.71923583081,
        "lng": 21.141172051961,
        "prices": {
            "A95": 1.789,
            "A98": null,
            "Diesel": 2.019,
            "LPG": 0.779
        },
        "id": 225
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Klaipėda",
        "address": "Klaipėda, Šilutės pl. 52, 94181",
        "lat": 55.681965782159,
        "lng": 21.185173271776,
        "prices": {
            "A95": 1.819,
            "A98": null,
            "Diesel": 2.059,
            "LPG": 0.799
        },
        "id": 226
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Klaipėda",
        "address": "Klaipėda, Taikos pr. 70A-1, 93202",
        "lat": 55.683267407903,
        "lng": 21.160533661563,
        "prices": {
            "A95": 1.789,
            "A98": null,
            "Diesel": 2.019,
            "LPG": 0.779
        },
        "id": 227
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Klaipėda",
        "address": "Gargždai, Vilniaus pl. 65, 96173",
        "lat": 55.732203179846,
        "lng": 21.376157282561,
        "prices": {
            "A95": 1.839,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.799
        },
        "id": 228
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Klaipėda",
        "address": "Kretingalė, Klaipėdos g. 1A, 96332",
        "lat": 55.827554453084,
        "lng": 21.18479977417,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 2.089,
            "LPG": 0.899
        },
        "id": 229
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Klaipėda",
        "address": "Sudmantų k., Vilniaus pl. 6",
        "lat": 55.704455811393,
        "lng": 21.221595910015,
        "prices": {
            "A95": 1.839,
            "A98": null,
            "Diesel": 2.029,
            "LPG": 0.799
        },
        "id": 230
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Kretingos",
        "address": "Kretinga, Vytauto g. 163, 97133",
        "lat": 55.890542988614,
        "lng": 21.27849578917,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 2.089,
            "LPG": 0.899
        },
        "id": 231
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Kretingos",
        "address": "Kretingsodžio k., 97100",
        "lat": 55.902678317,
        "lng": 21.231238907,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 2.089,
            "LPG": 0.899
        },
        "id": 232
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Kupiškio",
        "address": "Kerelių k. 1A, 40473",
        "lat": 55.85691348018,
        "lng": 25.173915527885,
        "prices": {
            "A95": 1.859,
            "A98": null,
            "Diesel": 2.039,
            "LPG": 0.799
        },
        "id": 233
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Kupiškio",
        "address": "Kupiškis, Pergalės g. 15, 40109",
        "lat": 55.844528687114,
        "lng": 24.978981737503,
        "prices": {
            "A95": 1.859,
            "A98": null,
            "Diesel": 2.039,
            "LPG": 0.799
        },
        "id": 234
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Lazdijų",
        "address": "Lazdijai, Turistų g. 32, 67102",
        "lat": 54.228605629983,
        "lng": 23.528102293391,
        "prices": {
            "A95": 1.779,
            "A98": null,
            "Diesel": 1.989,
            "LPG": 0.719
        },
        "id": 235
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Marijampolės",
        "address": "Marijampolė, Geležinkelio g. 5, 68305",
        "lat": 54.554365530868,
        "lng": 23.362370693759,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 2.039,
            "LPG": 0.759
        },
        "id": 236
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Marijampolės",
        "address": "Marijampolė, J. Ambrazevičiaus-Brazaičio g. 2, 68161",
        "lat": 54.567684249285,
        "lng": 23.339337894385,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 2.039,
            "LPG": 0.759
        },
        "id": 237
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Kaunas",
        "address": "Kaunas, Ateities pl. 37A, 52119",
        "lat": 54.918225121181,
        "lng": 24.039649760369,
        "prices": {
            "A95": 1.759,
            "A98": null,
            "Diesel": 1.989,
            "LPG": 0.779
        },
        "id": 238
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Kaunas",
        "address": "Kaunas, Baltijos g. 90B, 47130",
        "lat": 54.918004216122,
        "lng": 23.873689250962,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.789
        },
        "id": 239
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Kaunas",
        "address": "Kaunas, Biruliškių g. 18A, 51205",
        "lat": 54.910628267057,
        "lng": 24.02320522071,
        "prices": {
            "A95": 1.859,
            "A98": null,
            "Diesel": 2.049,
            "LPG": null
        },
        "id": 240
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Kaunas",
        "address": "Kaunas, Didžioji g. 84, 45462",
        "lat": 54.855148617576,
        "lng": 24.013175183913,
        "prices": {
            "A95": 1.819,
            "A98": null,
            "Diesel": 2.049,
            "LPG": 0.799
        },
        "id": 241
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Kaunas",
        "address": "Kaunas, Islandijos pl. 61A, 49117",
        "lat": 54.933537475268,
        "lng": 23.968511542291,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 2.089,
            "LPG": 0.899
        },
        "id": 242
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Kaunas",
        "address": "Kaunas, K. Baršausko g. 64, 44405",
        "lat": 54.897649267175,
        "lng": 23.958109935726,
        "prices": {
            "A95": 1.839,
            "A98": null,
            "Diesel": 2.039,
            "LPG": 0.899
        },
        "id": 243
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Kaunas",
        "address": "Kaunas, Karaliaus Mindaugo pr. 54, 44351",
        "lat": 54.887370413582,
        "lng": 23.921353362464,
        "prices": {
            "A95": 1.829,
            "A98": null,
            "Diesel": 2.039,
            "LPG": 0.859
        },
        "id": 244
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Kaunas",
        "address": "Kaunas, Marijampolės pl. 29, 45438",
        "lat": 54.849556253687,
        "lng": 23.96678629516,
        "prices": {
            "A95": 1.819,
            "A98": null,
            "Diesel": 2.049,
            "LPG": 0.799
        },
        "id": 245
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Kaunas",
        "address": "Kaunas, Miežėnų g. 18, 47115",
        "lat": 54.917642453181,
        "lng": 23.863193180348,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.789
        },
        "id": 246
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Kaunas",
        "address": "Kaunas, P. Lukšio g. 66A, 49404",
        "lat": 54.9248666898,
        "lng": 23.942496880862,
        "prices": {
            "A95": 1.869,
            "A98": null,
            "Diesel": 2.049,
            "LPG": 0.779
        },
        "id": 247
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Kaunas",
        "address": "Kaunas, Pramonės pr. 44, 50302",
        "lat": 54.92711484196,
        "lng": 23.974663523945,
        "prices": {
            "A95": 1.789,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.789
        },
        "id": 248
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Kaunas",
        "address": "Kaunas, Raudondvario pl. 288, 47164",
        "lat": 54.921398970728,
        "lng": 23.810330696316,
        "prices": {
            "A95": 1.889,
            "A98": null,
            "Diesel": 2.049,
            "LPG": 0.739
        },
        "id": 249
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Kaunas",
        "address": "Kaunas, Statybininkų g. 3A, 50124",
        "lat": 54.920107612815,
        "lng": 23.948836617148,
        "prices": {
            "A95": 1.879,
            "A98": null,
            "Diesel": 2.049,
            "LPG": 0.779
        },
        "id": 250
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Kaunas",
        "address": "Kaunas, T. Masiulio g. 22B, 52447",
        "lat": 54.881007291787,
        "lng": 24.009786380459,
        "prices": {
            "A95": 1.819,
            "A98": null,
            "Diesel": 2.019,
            "LPG": 0.779
        },
        "id": 251
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Kaunas",
        "address": "Kaunas, Veiverių g. 117, 46354",
        "lat": 54.866563596235,
        "lng": 23.889334576153,
        "prices": {
            "A95": 1.829,
            "A98": null,
            "Diesel": 2.039,
            "LPG": 0.829
        },
        "id": 252
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Kaunas",
        "address": "Kaunas, Veiverių g. 124B, 46282",
        "lat": 54.88333310228,
        "lng": 23.893652262117,
        "prices": {
            "A95": 1.829,
            "A98": null,
            "Diesel": 2.039,
            "LPG": 0.829
        },
        "id": 253
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Kaunas",
        "address": "Giraitės k., Automagistralės g. 4, 54310",
        "lat": 54.959108231104,
        "lng": 23.864332616266,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 2.089,
            "LPG": 0.859
        },
        "id": 254
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Kaunas",
        "address": "Ilgakiemio k., Prienų g. 22,",
        "lat": 54.774118328827,
        "lng": 23.88969583618,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.759
        },
        "id": 255
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Kaunas",
        "address": "Kampiškių k., Baltijos g. 41, 09300",
        "lat": 54.842540265453,
        "lng": 23.849560098653,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 2.089,
            "LPG": 0.839
        },
        "id": 256
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Kaunas",
        "address": "Kumpių k., Verslo g. 13A, 54311",
        "lat": 54.959155924134,
        "lng": 23.866815084529,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 2.089,
            "LPG": 0.859
        },
        "id": 257
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Kaunas",
        "address": "Margavos k., 54471",
        "lat": 54.957747783,
        "lng": 24.029920094,
        "prices": {
            "A95": 1.829,
            "A98": null,
            "Diesel": 2.039,
            "LPG": 0.899
        },
        "id": 258
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Alytaus",
        "address": "Daugų k., Neveiglo g. 25, 64144",
        "lat": 54.366879665464,
        "lng": 24.337587190949,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 2.019,
            "LPG": 0.769
        },
        "id": 259
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Alytaus",
        "address": "Alytus, Naujoji g. 27, 62175",
        "lat": 54.413977202221,
        "lng": 24.009628633042,
        "prices": {
            "A95": 1.789,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.739
        },
        "id": 260
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Alytaus",
        "address": "Alytus, Ulonų g. 33B, 62136",
        "lat": 54.384755289361,
        "lng": 24.050002584257,
        "prices": {
            "A95": 1.789,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.719
        },
        "id": 261
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Anykščių",
        "address": "Anykščiai, A. Vienuolio g. 34, 29148",
        "lat": 55.521698261388,
        "lng": 25.0861773943,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.759
        },
        "id": 262
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Anykščių",
        "address": "Anykščiai, Piliakalnio g. 9, 29109",
        "lat": 55.54125730672,
        "lng": 25.134757396362,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.759
        },
        "id": 263
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Biržų",
        "address": "Biržai, Parodos g. 2, 41136",
        "lat": 56.201411055495,
        "lng": 24.748821884742,
        "prices": {
            "A95": 1.789,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.789
        },
        "id": 264
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Biržų",
        "address": "Biržai, Pasvalio g. 1B, 41132",
        "lat": 56.202025868093,
        "lng": 24.7376980934,
        "prices": {
            "A95": 1.789,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.789
        },
        "id": 265
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Elektrėnų",
        "address": "Elektrėnai, Elektrinės g. 6, 26109",
        "lat": 54.784552792453,
        "lng": 24.654164800725,
        "prices": {
            "A95": 1.849,
            "A98": null,
            "Diesel": 2.049,
            "LPG": 0.799
        },
        "id": 266
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Ignalinos",
        "address": "Ignalina, Turistų g. 28A, 30138",
        "lat": 55.338948590373,
        "lng": 26.14564006503,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 2.089,
            "LPG": 0.829
        },
        "id": 267
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Jonavos",
        "address": "Jonava, Darbininkų g. 4D, 55101",
        "lat": 55.093686978842,
        "lng": 24.282945564148,
        "prices": {
            "A95": 1.779,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.829
        },
        "id": 268
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Joniškio",
        "address": "Joniškis, Vilniaus g. 51, 84166",
        "lat": 56.224395323649,
        "lng": 23.600907336735,
        "prices": {
            "A95": 1.759,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.739
        },
        "id": 269
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Kaišiadorių",
        "address": "Kaišiadorys, Gedimino g. 135, 56173",
        "lat": 54.855280255366,
        "lng": 24.441792100874,
        "prices": {
            "A95": 1.839,
            "A98": null,
            "Diesel": 2.059,
            "LPG": 0.799
        },
        "id": 270
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Kalvarijos",
        "address": "Kalvarija, Dariaus ir Girėno g. 81, 69206",
        "lat": 54.424465938669,
        "lng": 23.231907795757,
        "prices": {
            "A95": 1.869,
            "A98": null,
            "Diesel": 2.089,
            "LPG": 0.899
        },
        "id": 271
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Kalvarijos",
        "address": "Pelucmurgių k., Muitinės g. 35, 69270",
        "lat": 54.339820367442,
        "lng": 23.163098824752,
        "prices": {
            "A95": 1.869,
            "A98": null,
            "Diesel": 2.089,
            "LPG": null
        },
        "id": 272
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Kaunas",
        "address": "Kaunas, A. Juozapavičiaus pr. 90, 45267",
        "lat": 54.878078738636,
        "lng": 23.934133417874,
        "prices": {
            "A95": 1.829,
            "A98": null,
            "Diesel": 2.039,
            "LPG": 0.859
        },
        "id": 273
    },
    {
        "name": "UAB Viada LT",
        "logo": "🦌",
        "city": "Kaunas",
        "address": "Kaunas, Ateities pl. 105, 52119",
        "lat": 54.927136551089,
        "lng": 24.04374608027,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 2.089,
            "LPG": 0.859
        },
        "id": 274
    },
    {
        "name": "UAB Eniris",
        "logo": "⛽",
        "city": "Vilnius",
        "address": "Kalnuotės 1 k. 15130",
        "lat": 54.939086569333,
        "lng": 25.341164513702,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 1.959,
            "LPG": 0.799
        },
        "id": 275
    },
    {
        "name": "UAB Eniris",
        "logo": "⛽",
        "city": "Telšių",
        "address": "Tryškiai, Beržų g. 24/Drąsiųjų g. 7, 88155",
        "lat": 56.062051312096,
        "lng": 22.58243493856,
        "prices": {
            "A95": 1.79,
            "A98": null,
            "Diesel": 1.99,
            "LPG": 0.86
        },
        "id": 276
    },
    {
        "name": "UAB Eniris",
        "logo": "⛽",
        "city": "Kretingos",
        "address": "Kretinga, Tiekėjų g. 34a, 97187",
        "lat": 55.88440399891,
        "lng": 21.221761955517,
        "prices": {
            "A95": 1.87,
            "A98": null,
            "Diesel": 2.01,
            "LPG": 0.87
        },
        "id": 277
    },
    {
        "name": "UAB Eniris",
        "logo": "⛽",
        "city": "Šilalės",
        "address": "Vabalų k., Paršežerio g. 1, 75406",
        "lat": 55.619490051465,
        "lng": 22.246164634007,
        "prices": {
            "A95": 1.84,
            "A98": null,
            "Diesel": 1.99,
            "LPG": 0.79
        },
        "id": 278
    },
    {
        "name": "UAB Eniris",
        "logo": "⛽",
        "city": "Pagėgių",
        "address": "Pagėgiai, Klaipėdos g. 6b, 99290",
        "lat": 55.140442114854,
        "lng": 21.903148657597,
        "prices": {
            "A95": 1.85,
            "A98": null,
            "Diesel": 1.99,
            "LPG": 0.84
        },
        "id": 279
    },
    {
        "name": "UAB Eniris",
        "logo": "⛽",
        "city": "Plungės",
        "address": "Plungė, Dariaus ir Girėno g. 31, 90118",
        "lat": 55.919865903407,
        "lng": 21.856997395799,
        "prices": {
            "A95": 1.73,
            "A98": null,
            "Diesel": 1.91,
            "LPG": 0.68
        },
        "id": 280
    },
    {
        "name": "UAB Eniris",
        "logo": "⛽",
        "city": "Telšių",
        "address": "Rainių k., Telšių g. 2B, 88401",
        "lat": 55.956567575204,
        "lng": 22.301034416212,
        "prices": {
            "A95": 1.79,
            "A98": null,
            "Diesel": 1.99,
            "LPG": 0.76
        },
        "id": 281
    },
    {
        "name": "UAB Eniris",
        "logo": "⛽",
        "city": "Raseinių",
        "address": "Raseiniai, Jurbarko g. 34, 60180",
        "lat": 55.370632896838,
        "lng": 23.119425840266,
        "prices": {
            "A95": 1.81,
            "A98": null,
            "Diesel": 1.97,
            "LPG": 0.71
        },
        "id": 282
    },
    {
        "name": "UAB Eniris",
        "logo": "⛽",
        "city": "Kretingos",
        "address": "Laivių k., Platelių g. 1a, 97317",
        "lat": 56.063034928433,
        "lng": 21.582002156219,
        "prices": {
            "A95": 1.88,
            "A98": null,
            "Diesel": 2.02,
            "LPG": 0.89
        },
        "id": 283
    },
    {
        "name": "UAB Eniris",
        "logo": "⛽",
        "city": "Tauragės",
        "address": "Skaudvilė, Adakavo g. 1, 73435",
        "lat": 55.401576284972,
        "lng": 22.597756303194,
        "prices": {
            "A95": 1.85,
            "A98": null,
            "Diesel": 1.99,
            "LPG": 0.87
        },
        "id": 284
    },
    {
        "name": "UAB Eniris",
        "logo": "⛽",
        "city": "Šilalės",
        "address": "Šilalė, Rytinio Kelio g. 2a, 75122",
        "lat": 55.485882766305,
        "lng": 22.199427728634,
        "prices": {
            "A95": 1.81,
            "A98": null,
            "Diesel": 1.96,
            "LPG": 0.71
        },
        "id": 285
    },
    {
        "name": "UAB Eniris",
        "logo": "⛽",
        "city": "Telšių",
        "address": "Telšiai, Mažeikių g. 1, 87101",
        "lat": 55.999795145355,
        "lng": 22.241610326917,
        "prices": {
            "A95": 1.79,
            "A98": null,
            "Diesel": 1.99,
            "LPG": 0.76
        },
        "id": 286
    },
    {
        "name": "UAB Eniris",
        "logo": "⛽",
        "city": "Šilutės",
        "address": "Žemaičių Naumiestis, Klaipėdos g. 76, 99206",
        "lat": 55.355478960721,
        "lng": 21.680035889931,
        "prices": {
            "A95": 1.78,
            "A98": null,
            "Diesel": 1.99,
            "LPG": 0.79
        },
        "id": 287
    },
    {
        "name": "UAB Eniris",
        "logo": "⛽",
        "city": "Plungės",
        "address": "Minijos g. 1, Aleksandravo k., 90390",
        "lat": 55.928882526201,
        "lng": 21.619915264482,
        "prices": {
            "A95": 1.79,
            "A98": null,
            "Diesel": 1.99,
            "LPG": 0.85
        },
        "id": 288
    },
    {
        "name": "UAB Eniris",
        "logo": "⛽",
        "city": "Akmenės",
        "address": "Venta, Plento g. 2, 85302",
        "lat": 56.194312631243,
        "lng": 22.678027945886,
        "prices": {
            "A95": 1.749,
            "A98": null,
            "Diesel": 1.949,
            "LPG": 0.759
        },
        "id": 289
    },
    {
        "name": "UAB Eniris",
        "logo": "⛽",
        "city": "Kaišiadorių",
        "address": "Bačkonių k., Pastrėvio g. 1A, 56240",
        "lat": 54.802429547907,
        "lng": 24.502153706039,
        "prices": {
            "A95": 1.769,
            "A98": null,
            "Diesel": 1.899,
            "LPG": 0.71
        },
        "id": 290
    },
    {
        "name": "UAB Eniris",
        "logo": "⛽",
        "city": "Mažeikių",
        "address": "Mažeikiai, Laižuvos g. 82d, 89213",
        "lat": 56.313737945777,
        "lng": 22.368050498128,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.889,
            "LPG": 0.789
        },
        "id": 291
    },
    {
        "name": "UAB Eniris",
        "logo": "⛽",
        "city": "Skuodo",
        "address": "Stripinių k., Skuodo g. 7, 98347",
        "lat": 56.283869872002,
        "lng": 21.833118275662,
        "prices": {
            "A95": 1.79,
            "A98": null,
            "Diesel": 1.95,
            "LPG": 0.88
        },
        "id": 292
    },
    {
        "name": "UAB Eniris",
        "logo": "⛽",
        "city": "Lazdijų",
        "address": "Alytaus g. 59, Krosnos k., 67443",
        "lat": 54.379110035663,
        "lng": 23.528594311107,
        "prices": {
            "A95": 1.759,
            "A98": null,
            "Diesel": 1.959,
            "LPG": 0.749
        },
        "id": 293
    },
    {
        "name": "UAB Eniris",
        "logo": "⛽",
        "city": "Kelmės",
        "address": "Užventis, Žemaitės g. 52, 86343",
        "lat": 55.786191353475,
        "lng": 22.671123939879,
        "prices": {
            "A95": 1.81,
            "A98": null,
            "Diesel": 1.97,
            "LPG": 0.84
        },
        "id": 294
    },
    {
        "name": "UAB Eniris",
        "logo": "⛽",
        "city": "Kėdainių",
        "address": "Ruoščių k. 1, 57109",
        "lat": 55.32247754184,
        "lng": 23.89447624169,
        "prices": {
            "A95": 1.763,
            "A98": null,
            "Diesel": 1.914,
            "LPG": 0.85
        },
        "id": 295
    },
    {
        "name": "UAB Eniris",
        "logo": "⛽",
        "city": "Akmenės",
        "address": "Skabeikių k. 4, 85233",
        "lat": 56.158917895467,
        "lng": 22.766008254752,
        "prices": {
            "A95": 1.749,
            "A98": null,
            "Diesel": 1.949,
            "LPG": 0.759
        },
        "id": 296
    },
    {
        "name": "UAB Eniris",
        "logo": "⛽",
        "city": "Prienų",
        "address": "Mardosų k., Alytaus pl. 2, 59240",
        "lat": 54.508713327585,
        "lng": 23.909914495381,
        "prices": {
            "A95": 1.72,
            "A98": null,
            "Diesel": 1.92,
            "LPG": 0.81
        },
        "id": 297
    },
    {
        "name": "UAB Eniris",
        "logo": "⛽",
        "city": "Jurbarko",
        "address": "Rimšų k., Tauragės g. 29, 74280",
        "lat": 55.261861777521,
        "lng": 22.691954980927,
        "prices": {
            "A95": 1.85,
            "A98": null,
            "Diesel": 1.99,
            "LPG": 0.87
        },
        "id": 298
    },
    {
        "name": "UAB Eniris",
        "logo": "⛽",
        "city": "Kelmės",
        "address": "Kelmė, Putvinskio g. 29, 86113",
        "lat": 55.641154421326,
        "lng": 22.927134839318,
        "prices": {
            "A95": 1.819,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.719
        },
        "id": 299
    },
    {
        "name": "UAB Naftos dujos",
        "logo": "⛽",
        "city": "Švenčionių",
        "address": "Švenčionys, Mokyklos g. 23, 18111",
        "lat": 55.137806048215,
        "lng": 26.155728020778,
        "prices": {
            "A95": null,
            "A98": null,
            "Diesel": null,
            "LPG": 0.85
        },
        "id": 300
    },
    {
        "name": "UAB Naftos dujos",
        "logo": "⛽",
        "city": "Mažeikių",
        "address": "Mažeikiai, Daukšos g. 29 / Žemaitijos g. 69, 89132",
        "lat": 56.301251466526,
        "lng": 22.349854392162,
        "prices": {
            "A95": null,
            "A98": null,
            "Diesel": null,
            "LPG": 0.72
        },
        "id": 301
    },
    {
        "name": "UAB Naftos dujos",
        "logo": "⛽",
        "city": "Mažeikių",
        "address": "Mažeikiai, Algirdo g. 42, 89101",
        "lat": 56.318513283654,
        "lng": 22.318037861175,
        "prices": {
            "A95": null,
            "A98": null,
            "Diesel": null,
            "LPG": 0.7
        },
        "id": 302
    },
    {
        "name": "UAB Neste Lietuva",
        "logo": "🟢",
        "city": "Tauragės",
        "address": "Tauragė, Dariaus ir Girėno g. 130A, 72194",
        "lat": 55.26519815217,
        "lng": 22.30892438549,
        "prices": {
            "A95": 1.739,
            "A98": null,
            "Diesel": 1.929,
            "LPG": null
        },
        "id": 303
    },
    {
        "name": "UAB Neste Lietuva",
        "logo": "🟢",
        "city": "Elektrėnų",
        "address": "Elektrėnai, Sabališkių g. 1U, 26141",
        "lat": 54.789248921345,
        "lng": 24.672805566654,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 1.999,
            "LPG": null
        },
        "id": 304
    },
    {
        "name": "UAB Neste Lietuva",
        "logo": "🟢",
        "city": "Telšių",
        "address": "Gaudikaičių k., Šiaulių pl. 1A, 87100",
        "lat": 56.004975873979,
        "lng": 22.240108206049,
        "prices": {
            "A95": 1.749,
            "A98": null,
            "Diesel": 1.979,
            "LPG": null
        },
        "id": 305
    },
    {
        "name": "UAB Neste Lietuva",
        "logo": "🟢",
        "city": "Šiaulių",
        "address": "Šiauliai, Tilžės g. 72, 78140",
        "lat": 55.920290237256,
        "lng": 23.292906928478,
        "prices": {
            "A95": 1.784,
            "A98": null,
            "Diesel": 1.974,
            "LPG": null
        },
        "id": 306
    },
    {
        "name": "UAB Neste Lietuva",
        "logo": "🟢",
        "city": "Šiaulių",
        "address": "Šiauliai, Dubijos g. 18A, 77172",
        "lat": 55.929388499786,
        "lng": 23.294117359116,
        "prices": {
            "A95": 1.769,
            "A98": null,
            "Diesel": 1.979,
            "LPG": null
        },
        "id": 307
    },
    {
        "name": "UAB Neste Lietuva",
        "logo": "🟢",
        "city": "Panevėžio",
        "address": "Panevėžys, Klaipėdos g. 81, 37106",
        "lat": 55.728367788591,
        "lng": 24.332250936112,
        "prices": {
            "A95": 1.729,
            "A98": null,
            "Diesel": 1.979,
            "LPG": null
        },
        "id": 308
    },
    {
        "name": "UAB Neste Lietuva",
        "logo": "🟢",
        "city": "Panevėžio",
        "address": "Panevėžys, Ramygalos g. 145B, 36225",
        "lat": 55.70964056333,
        "lng": 24.374703599315,
        "prices": {
            "A95": 1.729,
            "A98": null,
            "Diesel": 1.939,
            "LPG": null
        },
        "id": 309
    },
    {
        "name": "UAB Neste Lietuva",
        "logo": "🟢",
        "city": "Panevėžio",
        "address": "Panevėžys, Klaipėdos g. 66,  35193",
        "lat": 55.727693967394,
        "lng": 24.348482659249,
        "prices": {
            "A95": 1.729,
            "A98": null,
            "Diesel": 1.994,
            "LPG": null
        },
        "id": 310
    },
    {
        "name": "UAB Neste Lietuva",
        "logo": "🟢",
        "city": "Pasvalio",
        "address": "Raubonių k., Ąžuolpamūšio g. 1A, 39447",
        "lat": 56.115287419462,
        "lng": 24.47071913838,
        "prices": {
            "A95": 1.729,
            "A98": null,
            "Diesel": 1.974,
            "LPG": null
        },
        "id": 311
    },
    {
        "name": "UAB Neste Lietuva",
        "logo": "🟢",
        "city": "Panevėžio",
        "address": "Panevėžys, Margirio g. 1B, 36248",
        "lat": 55.719355859663,
        "lng": 24.348949531256,
        "prices": {
            "A95": 1.749,
            "A98": null,
            "Diesel": 1.979,
            "LPG": null
        },
        "id": 312
    },
    {
        "name": "UAB Neste Lietuva",
        "logo": "🟢",
        "city": "Panevėžio",
        "address": "Panevežys, Klaipėdos g. 144B, 37376",
        "lat": 55.730719750622,
        "lng": 24.315873032583,
        "prices": {
            "A95": 1.729,
            "A98": null,
            "Diesel": 1.989,
            "LPG": null
        },
        "id": 313
    },
    {
        "name": "UAB Neste Lietuva",
        "logo": "🟢",
        "city": "Panevėžio",
        "address": "Šilagalio k., Panevėžio aplinkl. 22, 36258",
        "lat": 55.672785418887,
        "lng": 24.332463333538,
        "prices": {
            "A95": 1.729,
            "A98": null,
            "Diesel": 1.969,
            "LPG": null
        },
        "id": 314
    },
    {
        "name": "UAB Neste Lietuva",
        "logo": "🟢",
        "city": "Alytaus",
        "address": "Alytus, Santaikos g. 34A, 62123",
        "lat": 54.387090068491,
        "lng": 24.026280540985,
        "prices": {
            "A95": 1.719,
            "A98": null,
            "Diesel": 1.959,
            "LPG": null
        },
        "id": 315
    },
    {
        "name": "UAB Neste Lietuva",
        "logo": "🟢",
        "city": "Alytaus",
        "address": "Alytus, Ūdrijos g. 31, 62411",
        "lat": 54.408900660653,
        "lng": 24.005283538255,
        "prices": {
            "A95": 1.749,
            "A98": null,
            "Diesel": 1.959,
            "LPG": null
        },
        "id": 316
    },
    {
        "name": "UAB Neste Lietuva",
        "logo": "🟢",
        "city": "Marijampolės",
        "address": "Marijampolė, Stoties g. 4C, 68112",
        "lat": 54.560305240825,
        "lng": 23.365849518853,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.929,
            "LPG": null
        },
        "id": 317
    },
    {
        "name": "UAB Neste Lietuva",
        "logo": "🟢",
        "city": "Marijampolės",
        "address": "Marijampolė, Vilkaviškio g. 61D, 68153",
        "lat": 54.562685827055,
        "lng": 23.332336993577,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.924,
            "LPG": null
        },
        "id": 318
    },
    {
        "name": "UAB Neste Lietuva",
        "logo": "🟢",
        "city": "Kalvarijos",
        "address": "Salaperaugio k., Europos g. 1, 69286",
        "lat": 54.330092204888,
        "lng": 23.149474208778,
        "prices": {
            "A95": 1.779,
            "A98": null,
            "Diesel": 1.999,
            "LPG": null
        },
        "id": 319
    },
    {
        "name": "UAB Neste Lietuva",
        "logo": "🟢",
        "city": "Kalvarijos",
        "address": "N. Valios k., Europos g. 6, 69270",
        "lat": 54.328292987462,
        "lng": 23.150464530639,
        "prices": {
            "A95": null,
            "A98": null,
            "Diesel": 1.999,
            "LPG": null
        },
        "id": 320
    },
    {
        "name": "UAB Neste Lietuva",
        "logo": "🟢",
        "city": "Mažeikių",
        "address": "Mažeikiai, M. Daukšos g. 29, 89132",
        "lat": 56.301251466526,
        "lng": 22.349854392162,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.929,
            "LPG": null
        },
        "id": 321
    },
    {
        "name": "UAB Neste Lietuva",
        "logo": "🟢",
        "city": "Šilalės",
        "address": "Katyčių k., 75493",
        "lat": 55.520775112036,
        "lng": 22.352717526775,
        "prices": {
            "A95": 1.789,
            "A98": null,
            "Diesel": 1.989,
            "LPG": null
        },
        "id": 322
    },
    {
        "name": "UAB Neste Lietuva",
        "logo": "🟢",
        "city": "Kėdainių",
        "address": "Kėdainiai, J. Basanavičiaus g. 91E, 57356",
        "lat": 55.27800846625,
        "lng": 23.959992594998,
        "prices": {
            "A95": 1.729,
            "A98": null,
            "Diesel": 1.969,
            "LPG": null
        },
        "id": 323
    },
    {
        "name": "UAB Neste Lietuva",
        "logo": "🟢",
        "city": "Ukmergės",
        "address": "Ukmergė, Kauno g. 45B, 20119",
        "lat": 55.242008778845,
        "lng": 24.742998306054,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.919,
            "LPG": null
        },
        "id": 324
    },
    {
        "name": "UAB Neste Lietuva",
        "logo": "🟢",
        "city": "Utenos",
        "address": "Utena, J. Basanavičiaus g. 129, 28216",
        "lat": 55.505178955153,
        "lng": 25.624883317214,
        "prices": {
            "A95": 1.714,
            "A98": null,
            "Diesel": 1.934,
            "LPG": null
        },
        "id": 325
    },
    {
        "name": "UAB Neste Lietuva",
        "logo": "🟢",
        "city": "Utenos",
        "address": "Utena, Kupiškio g. 12, 28135",
        "lat": 55.481095568035,
        "lng": 25.579116784771,
        "prices": {
            "A95": 1.729,
            "A98": null,
            "Diesel": 1.929,
            "LPG": null
        },
        "id": 326
    },
    {
        "name": "UAB Neste Lietuva",
        "logo": "🟢",
        "city": "Molėtų",
        "address": "Molėtai, Aplinkkelio g. 165, 33134",
        "lat": 55.221433637301,
        "lng": 25.436248753889,
        "prices": {
            "A95": 1.719,
            "A98": null,
            "Diesel": 1.969,
            "LPG": null
        },
        "id": 327
    },
    {
        "name": "UAB Neste Lietuva",
        "logo": "🟢",
        "city": "Švenčionių",
        "address": "Pabradė, Vilniaus g. 94, 18177",
        "lat": 54.978556886771,
        "lng": 25.756607272549,
        "prices": {
            "A95": 1.769,
            "A98": null,
            "Diesel": 1.999,
            "LPG": null
        },
        "id": 328
    },
    {
        "name": "UAB Neste Lietuva",
        "logo": "🟢",
        "city": "Jonavos",
        "address": "Gudžionių k., Šilų sen., Plento g. 7, 55462",
        "lat": 55.09509731787,
        "lng": 24.312455898296,
        "prices": {
            "A95": 1.719,
            "A98": null,
            "Diesel": 1.964,
            "LPG": null
        },
        "id": 329
    },
    {
        "name": "UAB Neste Lietuva",
        "logo": "🟢",
        "city": "Radviliškio",
        "address": "Radviliškis, Versmės g. 2, 82197",
        "lat": 55.814364145423,
        "lng": 23.545938480434,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.929,
            "LPG": null
        },
        "id": 330
    },
    {
        "name": "UAB Neste Lietuva",
        "logo": "🟢",
        "city": "Raseinių",
        "address": "Ylių k., Pušyno g. 11, 60389",
        "lat": 55.411603304284,
        "lng": 22.83110655976,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 1.999,
            "LPG": null
        },
        "id": 331
    },
    {
        "name": "UAB Neste Lietuva",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Vilnius, J. Tiškevičiaus g. 19, 02231",
        "lat": 54.624389081553,
        "lng": 25.11159979045,
        "prices": {
            "A95": 1.749,
            "A98": null,
            "Diesel": 1.959,
            "LPG": null
        },
        "id": 332
    },
    {
        "name": "UAB Neste Lietuva",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Vilnius, Eišiškių pl. 82, 02200",
        "lat": 54.621224494009,
        "lng": 25.242997605932,
        "prices": {
            "A95": 1.769,
            "A98": null,
            "Diesel": 1.989,
            "LPG": null
        },
        "id": 333
    },
    {
        "name": "UAB Neste Lietuva",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Vilnius, Gariūnų g. 55, 02300",
        "lat": 54.658324431935,
        "lng": 25.158976989407,
        "prices": {
            "A95": 1.774,
            "A98": null,
            "Diesel": 1.999,
            "LPG": null
        },
        "id": 334
    },
    {
        "name": "UAB Neste Lietuva",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Vilnius, Panerių g. 42, 03202",
        "lat": 54.668191021619,
        "lng": 25.264942182817,
        "prices": {
            "A95": 1.759,
            "A98": null,
            "Diesel": 1.979,
            "LPG": null
        },
        "id": 335
    },
    {
        "name": "UAB Neste Lietuva",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Vilnius, Geležinio Vilko g. 41, 09300",
        "lat": 54.704175286323,
        "lng": 25.267039334991,
        "prices": {
            "A95": 1.744,
            "A98": null,
            "Diesel": 1.994,
            "LPG": null
        },
        "id": 336
    },
    {
        "name": "UAB Neste Lietuva",
        "logo": "🟢",
        "city": "Kaunas",
        "address": "Kaunas, Pramonės pr. 6A, 51267",
        "lat": 54.909865723415,
        "lng": 23.984015548594,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.949,
            "LPG": null
        },
        "id": 337
    },
    {
        "name": "UAB Neste Lietuva",
        "logo": "🟢",
        "city": "Kaunas",
        "address": "Kaunas, Jonavos g. 110, 44136",
        "lat": 54.91360853655,
        "lng": 23.91202254403,
        "prices": {
            "A95": 1.729,
            "A98": null,
            "Diesel": 1.939,
            "LPG": null
        },
        "id": 338
    },
    {
        "name": "UAB Neste Lietuva",
        "logo": "🟢",
        "city": "Kaunas",
        "address": "Kaunas, Veiverių g. 132D, 46337",
        "lat": 54.875495855173,
        "lng": 23.890852622637,
        "prices": {
            "A95": 1.789,
            "A98": null,
            "Diesel": 1.989,
            "LPG": null
        },
        "id": 339
    },
    {
        "name": "UAB Neste Lietuva",
        "logo": "🟢",
        "city": "Kaunas",
        "address": "Kaunas, Žemaičių pl. 26, 48256",
        "lat": 54.925470144919,
        "lng": 23.891903042743,
        "prices": {
            "A95": 1.744,
            "A98": null,
            "Diesel": 1.984,
            "LPG": null
        },
        "id": 340
    },
    {
        "name": "UAB Neste Lietuva",
        "logo": "🟢",
        "city": "Kaunas",
        "address": "Kaunas, R. Kalantos g. 27, 52303",
        "lat": 54.895068060092,
        "lng": 23.985969956958,
        "prices": {
            "A95": 1.739,
            "A98": null,
            "Diesel": 1.939,
            "LPG": null
        },
        "id": 341
    },
    {
        "name": "UAB Neste Lietuva",
        "logo": "🟢",
        "city": "Kaunas",
        "address": "Kaunas, Ateities pl. 50B, 52106",
        "lat": 54.926168105996,
        "lng": 24.060313163353,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.929,
            "LPG": null
        },
        "id": 342
    },
    {
        "name": "UAB Neste Lietuva",
        "logo": "🟢",
        "city": "Kaunas",
        "address": "Kaunas, Taikos pr. 80A, 50441",
        "lat": 54.912056040444,
        "lng": 23.972848255175,
        "prices": {
            "A95": 1.749,
            "A98": null,
            "Diesel": 1.989,
            "LPG": null
        },
        "id": 343
    },
    {
        "name": "UAB Neste Lietuva",
        "logo": "🟢",
        "city": "Kaunas",
        "address": "Kaunas, Birželio 23-iosios g. 23A, 50220",
        "lat": 54.916084425019,
        "lng": 23.953801637494,
        "prices": {
            "A95": 1.779,
            "A98": null,
            "Diesel": 1.979,
            "LPG": null
        },
        "id": 344
    },
    {
        "name": "UAB Neste Lietuva",
        "logo": "🟢",
        "city": "Kaunas",
        "address": "Kaunas, Islandijos pl. 191E, 49168",
        "lat": 54.931465259256,
        "lng": 23.951131498418,
        "prices": {
            "A95": 1.769,
            "A98": null,
            "Diesel": 1.969,
            "LPG": null
        },
        "id": 345
    },
    {
        "name": "UAB Neste Lietuva",
        "logo": "🟢",
        "city": "Kaunas",
        "address": "Kaunas, Raudondvario pl. 103, 47185",
        "lat": 54.906871162777,
        "lng": 23.872788531647,
        "prices": {
            "A95": 1.719,
            "A98": null,
            "Diesel": 1.929,
            "LPG": null
        },
        "id": 346
    },
    {
        "name": "UAB Neste Lietuva",
        "logo": "🟢",
        "city": "Kaunas",
        "address": "Kaunas, Kuršių g. 1, 48106",
        "lat": 54.93628242283,
        "lng": 23.886037805996,
        "prices": {
            "A95": 1.759,
            "A98": null,
            "Diesel": 1.979,
            "LPG": null
        },
        "id": 347
    },
    {
        "name": "UAB Neste Lietuva",
        "logo": "🟢",
        "city": "Kaunas",
        "address": "Ramučių k., Vijoklių g. 1C, 54467",
        "lat": 54.948400936531,
        "lng": 24.018075831243,
        "prices": {
            "A95": 1.749,
            "A98": null,
            "Diesel": 1.969,
            "LPG": null
        },
        "id": 348
    },
    {
        "name": "UAB Neste Lietuva",
        "logo": "🟢",
        "city": "Kaunas",
        "address": "Kaunas, Tunelio g. 26, 44391",
        "lat": 54.894768574692,
        "lng": 23.944270072479,
        "prices": {
            "A95": 1.759,
            "A98": null,
            "Diesel": 1.949,
            "LPG": null
        },
        "id": 349
    },
    {
        "name": "UAB Neste Lietuva",
        "logo": "🟢",
        "city": "Kaunas",
        "address": "Kumpių k., Vakarų g. 14, 47425",
        "lat": 54.949855322461,
        "lng": 23.873901564569,
        "prices": {
            "A95": 1.744,
            "A98": null,
            "Diesel": 1.944,
            "LPG": null
        },
        "id": 350
    },
    {
        "name": "UAB Neste Lietuva",
        "logo": "🟢",
        "city": "Kaunas",
        "address": "Kaunas, Savanorių pr. 441C, 49185",
        "lat": 54.929360772916,
        "lng": 23.973382685321,
        "prices": {
            "A95": 1.759,
            "A98": null,
            "Diesel": 1.964,
            "LPG": null
        },
        "id": 351
    },
    {
        "name": "UAB Neste Lietuva",
        "logo": "🟢",
        "city": "Kaunas",
        "address": "Kaunas, Vakarinis aplinkkelis 18, 48182",
        "lat": 54.934519750501,
        "lng": 23.866740485591,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 2.029,
            "LPG": null
        },
        "id": 352
    },
    {
        "name": "UAB Neste Lietuva",
        "logo": "🟢",
        "city": "Kaunas",
        "address": "Kaunas, Europos pr. 43, 46329",
        "lat": 54.875764872355,
        "lng": 23.912369890098,
        "prices": {
            "A95": 1.779,
            "A98": null,
            "Diesel": 1.999,
            "LPG": null
        },
        "id": 353
    },
    {
        "name": "UAB Neste Lietuva",
        "logo": "🟢",
        "city": "Klaipėda",
        "address": "Klaipėda, Plieno g. 1, 95112",
        "lat": 55.672962696139,
        "lng": 21.200992270001,
        "prices": {
            "A95": 1.729,
            "A98": null,
            "Diesel": 1.949,
            "LPG": null
        },
        "id": 354
    },
    {
        "name": "UAB Neste Lietuva",
        "logo": "🟢",
        "city": "Klaipėda",
        "address": "Klaipėda, Šilutės pl. 30, 91177",
        "lat": 55.693091585158,
        "lng": 21.174969310488,
        "prices": {
            "A95": 1.719,
            "A98": null,
            "Diesel": 1.949,
            "LPG": null
        },
        "id": 355
    },
    {
        "name": "UAB Neste Lietuva",
        "logo": "🟢",
        "city": "Klaipėda",
        "address": "Klaipėda, Taikos pr. 60, 93225",
        "lat": 55.688946692128,
        "lng": 21.155062374265,
        "prices": {
            "A95": 1.729,
            "A98": null,
            "Diesel": 1.979,
            "LPG": null
        },
        "id": 356
    },
    {
        "name": "UAB Neste Lietuva",
        "logo": "🟢",
        "city": "Klaipėda",
        "address": "Klaipėda, Minijos g. 119, 93231",
        "lat": 55.684758548478,
        "lng": 21.150419051363,
        "prices": {
            "A95": 1.729,
            "A98": null,
            "Diesel": 1.979,
            "LPG": null
        },
        "id": 357
    },
    {
        "name": "UAB Neste Lietuva",
        "logo": "🟢",
        "city": "Klaipėda",
        "address": "Klaipėda, Artojo g. 2, 92105",
        "lat": 55.717239303383,
        "lng": 21.151555805072,
        "prices": {
            "A95": 1.719,
            "A98": null,
            "Diesel": 1.929,
            "LPG": null
        },
        "id": 358
    },
    {
        "name": "UAB Neste Lietuva",
        "logo": "🟢",
        "city": "Klaipėda",
        "address": "Klaipėda, Smiltelės g. 17, 95188",
        "lat": 55.669848190467,
        "lng": 21.192913707901,
        "prices": {
            "A95": 1.729,
            "A98": null,
            "Diesel": 1.949,
            "LPG": null
        },
        "id": 359
    },
    {
        "name": "UAB Neste Lietuva",
        "logo": "🟢",
        "city": "Klaipėda",
        "address": "Klaipėda, Šilutės pl. 5C, 91109",
        "lat": 55.70317744543,
        "lng": 21.164914463258,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.929,
            "LPG": null
        },
        "id": 360
    },
    {
        "name": "UAB Neste Lietuva",
        "logo": "🟢",
        "city": "Klaipėda",
        "address": "Jakų k., Vilniaus pl. 9, 96322",
        "lat": 55.706032950294,
        "lng": 21.238912921976,
        "prices": {
            "A95": 1.764,
            "A98": null,
            "Diesel": 1.989,
            "LPG": null
        },
        "id": 361
    },
    {
        "name": "UAB Neste Lietuva",
        "logo": "🟢",
        "city": "Klaipėda",
        "address": "Sudmantų k., Sendvario g. 2, 96327",
        "lat": 55.706091455978,
        "lng": 21.202602098325,
        "prices": {
            "A95": 1.749,
            "A98": null,
            "Diesel": null,
            "LPG": null
        },
        "id": 362
    },
    {
        "name": "UAB Neste Lietuva",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Vilnius, Servečės g. 2, 02121",
        "lat": 54.63369710121,
        "lng": 25.30448615798,
        "prices": {
            "A95": 1.719,
            "A98": null,
            "Diesel": 1.949,
            "LPG": null
        },
        "id": 363
    },
    {
        "name": "UAB Neste Lietuva",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Vilnius, Ukmergės g. 296, 12105",
        "lat": 54.73616586753,
        "lng": 25.231155988402,
        "prices": {
            "A95": 1.729,
            "A98": null,
            "Diesel": 1.949,
            "LPG": null
        },
        "id": 364
    },
    {
        "name": "UAB Neste Lietuva",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Vilnius, Talino g. 2C, 05200",
        "lat": 54.71377076335,
        "lng": 25.209105715719,
        "prices": {
            "A95": 1.759,
            "A98": null,
            "Diesel": 1.979,
            "LPG": null
        },
        "id": 365
    },
    {
        "name": "UAB Neste Lietuva",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Vilnius, Erfurto g. 41, 04226",
        "lat": 54.672643740043,
        "lng": 25.198177474178,
        "prices": {
            "A95": 1.779,
            "A98": null,
            "Diesel": 1.979,
            "LPG": null
        },
        "id": 366
    },
    {
        "name": "UAB Neste Lietuva",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Vilnius, Geležinio Vilko g. 63, 08104",
        "lat": 54.712098028842,
        "lng": 25.270731814797,
        "prices": {
            "A95": 1.719,
            "A98": null,
            "Diesel": 1.959,
            "LPG": null
        },
        "id": 367
    },
    {
        "name": "UAB Neste Lietuva",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Vilnius, S. Stanevičiaus g. 3, 07131",
        "lat": 54.721423650496,
        "lng": 25.25622969738,
        "prices": {
            "A95": 1.729,
            "A98": null,
            "Diesel": 1.959,
            "LPG": null
        },
        "id": 368
    },
    {
        "name": "UAB Neste Lietuva",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Vilnius, Žirmūnų g. 68B, 09113",
        "lat": 54.717499369158,
        "lng": 25.304490348932,
        "prices": {
            "A95": 1.719,
            "A98": null,
            "Diesel": 1.954,
            "LPG": null
        },
        "id": 369
    },
    {
        "name": "UAB Neste Lietuva",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Vilnius, Rygos g. 2, 05259",
        "lat": 54.715574884189,
        "lng": 25.228964372179,
        "prices": {
            "A95": 1.759,
            "A98": null,
            "Diesel": 1.989,
            "LPG": null
        },
        "id": 370
    },
    {
        "name": "UAB Neste Lietuva",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Vilnius, Savanorių pr. 220A, 02301",
        "lat": 54.644301172646,
        "lng": 25.207368231009,
        "prices": {
            "A95": 1.719,
            "A98": null,
            "Diesel": 1.959,
            "LPG": null
        },
        "id": 371
    },
    {
        "name": "UAB Neste Lietuva",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Vilnius, Parodų g. 1A, 04133",
        "lat": 54.673427322262,
        "lng": 25.224062970478,
        "prices": {
            "A95": 1.789,
            "A98": null,
            "Diesel": 1.989,
            "LPG": null
        },
        "id": 372
    },
    {
        "name": "UAB Neste Lietuva",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Vilnius, Kauno g. 26, 03212",
        "lat": 54.671722820341,
        "lng": 25.270059921439,
        "prices": {
            "A95": 1.769,
            "A98": null,
            "Diesel": 1.999,
            "LPG": null
        },
        "id": 373
    },
    {
        "name": "UAB Neste Lietuva",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Vilnius, Savanorių pr. 187, 02300",
        "lat": 54.646983465481,
        "lng": 25.21051580329,
        "prices": {
            "A95": 1.729,
            "A98": null,
            "Diesel": 1.959,
            "LPG": null
        },
        "id": 374
    },
    {
        "name": "UAB Neste Lietuva",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Vilnius, Kedrų g. 2, 03159",
        "lat": 54.677162591683,
        "lng": 25.255948149253,
        "prices": {
            "A95": 1.779,
            "A98": null,
            "Diesel": 1.999,
            "LPG": null
        },
        "id": 375
    },
    {
        "name": "UAB Neste Lietuva",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Vilnius, Molėtų pl. 8, 08426",
        "lat": 54.75482645666,
        "lng": 25.271479396742,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.949,
            "LPG": null
        },
        "id": 376
    },
    {
        "name": "UAB Neste Lietuva",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Vilnius, P. Lukšio g. 22, 09108",
        "lat": 54.711934120726,
        "lng": 25.293028683072,
        "prices": {
            "A95": 1.719,
            "A98": null,
            "Diesel": 1.949,
            "LPG": null
        },
        "id": 377
    },
    {
        "name": "UAB Neste Lietuva",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Vilnius, Žirmūnų g. 54C, 08233",
        "lat": 54.706728916944,
        "lng": 25.304160185766,
        "prices": {
            "A95": 1.729,
            "A98": null,
            "Diesel": 1.954,
            "LPG": null
        },
        "id": 378
    },
    {
        "name": "UAB Neste Lietuva",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Vilnius, Subačiaus g. 64, 11342",
        "lat": 54.676838128211,
        "lng": 25.309513036771,
        "prices": {
            "A95": 1.739,
            "A98": null,
            "Diesel": 1.979,
            "LPG": null
        },
        "id": 379
    },
    {
        "name": "UAB Neste Lietuva",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Vilnius, Dariaus ir Girėno g. 17, 02169",
        "lat": 54.655191737532,
        "lng": 25.270644643004,
        "prices": {
            "A95": 1.779,
            "A98": null,
            "Diesel": 1.999,
            "LPG": null
        },
        "id": 380
    },
    {
        "name": "UAB Neste Lietuva",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Vilnius, Architektų g. 130, 04216",
        "lat": 54.680743382629,
        "lng": 25.207782716121,
        "prices": {
            "A95": 1.779,
            "A98": null,
            "Diesel": 1.999,
            "LPG": null
        },
        "id": 381
    },
    {
        "name": "UAB Neste Lietuva",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Vilnius, Justiniškių g. 14B, 05131",
        "lat": 54.704996251829,
        "lng": 25.21494287309,
        "prices": {
            "A95": 1.764,
            "A98": null,
            "Diesel": 1.979,
            "LPG": null
        },
        "id": 382
    },
    {
        "name": "UAB Neste Lietuva",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Vilnius, Geležinio Vilko g. 37A, 08104",
        "lat": 54.701397020696,
        "lng": 25.263756478794,
        "prices": {
            "A95": 1.744,
            "A98": null,
            "Diesel": 1.994,
            "LPG": null
        },
        "id": 383
    },
    {
        "name": "UAB Neste Lietuva",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Vilnius, Pilaitės pr. 27, 06269",
        "lat": 54.709162937807,
        "lng": 25.189849634278,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.929,
            "LPG": null
        },
        "id": 384
    },
    {
        "name": "UAB Neste Lietuva",
        "logo": "🟢",
        "city": "Vilnius",
        "address": "Vilnius, Žirnių g. 17, 02118",
        "lat": 54.656627054632,
        "lng": 25.29210868538,
        "prices": {
            "A95": 1.759,
            "A98": null,
            "Diesel": 1.999,
            "LPG": null
        },
        "id": 385
    },
    {
        "name": "Lašų žemės ūkio bendrovė",
        "logo": "⛽",
        "city": "Rokiškio",
        "address": "Vytėnai, Vytėnų vs 9, 42255",
        "lat": 55.858657615186,
        "lng": 25.734471666782,
        "prices": {
            "A95": 1.87,
            "A98": null,
            "Diesel": 2.01,
            "LPG": null
        },
        "id": 386
    },
    {
        "name": "UAB Circle K Lietuva",
        "logo": "🔴",
        "city": "Vilnius",
        "address": "Vilnius, P. Žadeikos g. 1A, 06319",
        "lat": 54.730460473676,
        "lng": 25.239041515272,
        "prices": {
            "A95": 1.789,
            "A98": null,
            "Diesel": 2.004,
            "LPG": 0.789
        },
        "id": 387
    },
    {
        "name": "UAB Circle K Lietuva",
        "logo": "🔴",
        "city": "Vilnius",
        "address": "Vilnius, Savanorių pr. 119A, 03150",
        "lat": 54.662804098177,
        "lng": 25.234888701343,
        "prices": {
            "A95": 1.739,
            "A98": null,
            "Diesel": 1.979,
            "LPG": 0.759
        },
        "id": 388
    },
    {
        "name": "UAB Circle K Lietuva",
        "logo": "🔴",
        "city": "Vilnius",
        "address": "Vilnius, Kareivių g. 3, 08221",
        "lat": 54.715540895572,
        "lng": 25.291017110129,
        "prices": {
            "A95": 1.769,
            "A98": null,
            "Diesel": 1.984,
            "LPG": 0.769
        },
        "id": 389
    },
    {
        "name": "UAB Circle K Lietuva",
        "logo": "🔴",
        "city": "Vilnius",
        "address": "Vilnius, Geležinio Vilko g. 4, 08104",
        "lat": 54.702841809347,
        "lng": 25.263941048302,
        "prices": {
            "A95": 1.794,
            "A98": null,
            "Diesel": 2.014,
            "LPG": 0.859
        },
        "id": 390
    },
    {
        "name": "UAB Circle K Lietuva",
        "logo": "🔴",
        "city": "Vilnius",
        "address": "Vilnius, Gariūnų g. 45, 02300",
        "lat": 54.658968706922,
        "lng": 25.161134239827,
        "prices": {
            "A95": 1.794,
            "A98": null,
            "Diesel": 2.019,
            "LPG": null
        },
        "id": 391
    },
    {
        "name": "UAB Circle K Lietuva",
        "logo": "🔴",
        "city": "Kaunas",
        "address": "Kaunas, Savanorių pr. 404B, 50301",
        "lat": 54.928282692529,
        "lng": 23.973882665846,
        "prices": {
            "A95": 1.789,
            "A98": null,
            "Diesel": 1.989,
            "LPG": 0.759
        },
        "id": 392
    },
    {
        "name": "UAB Circle K Lietuva",
        "logo": "🔴",
        "city": "Kaunas",
        "address": "Kaunas, Tvirtovės al. 33A, 50157",
        "lat": 54.913105831907,
        "lng": 23.926215955953,
        "prices": {
            "A95": 1.849,
            "A98": null,
            "Diesel": 2.019,
            "LPG": null
        },
        "id": 393
    },
    {
        "name": "UAB Circle K Lietuva",
        "logo": "🔴",
        "city": "Kaunas",
        "address": "Kaunas, Sukilėlių pr. 120, 49237",
        "lat": 54.928588087172,
        "lng": 23.928793055904,
        "prices": {
            "A95": 1.829,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.74
        },
        "id": 394
    },
    {
        "name": "UAB Circle K Lietuva",
        "logo": "🔴",
        "city": "Kaunas",
        "address": "Kaunas, K. Baršausko g. 57, 51423",
        "lat": 54.899051475757,
        "lng": 23.959916990232,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 1.989,
            "LPG": 0.899
        },
        "id": 395
    },
    {
        "name": "UAB Circle K Lietuva",
        "logo": "🔴",
        "city": "Kaunas",
        "address": "Kaunas, Jonavos g. 38, 44263",
        "lat": 54.901519485238,
        "lng": 23.894976351361,
        "prices": {
            "A95": 1.859,
            "A98": null,
            "Diesel": 2.029,
            "LPG": 0.74
        },
        "id": 396
    },
    {
        "name": "UAB Circle K Lietuva",
        "logo": "🔴",
        "city": "Šiaulių",
        "address": "Šiauliai, Tilžės g. 25, 78229",
        "lat": 55.912642127794,
        "lng": 23.273835919459,
        "prices": {
            "A95": 1.809,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.759
        },
        "id": 397
    },
    {
        "name": "UAB Circle K Lietuva",
        "logo": "🔴",
        "city": "Klaipėda",
        "address": "Klaipėda, Tilžės g. 56A, 91110",
        "lat": 55.704277821679,
        "lng": 21.160807833616,
        "prices": {
            "A95": 1.719,
            "A98": null,
            "Diesel": 1.949,
            "LPG": 0.789
        },
        "id": 398
    },
    {
        "name": "UAB Circle K Lietuva",
        "logo": "🔴",
        "city": "Klaipėda",
        "address": "Klaipėda, Jūrininkų pr. 31, 95225",
        "lat": 55.656684285801,
        "lng": 21.182458205699,
        "prices": {
            "A95": 1.76,
            "A98": null,
            "Diesel": 2.01,
            "LPG": null
        },
        "id": 399
    },
    {
        "name": "UAB Circle K Lietuva",
        "logo": "🔴",
        "city": "Klaipėda",
        "address": "Klaipėda, Sausio 15-osios g. 2, 91200",
        "lat": 55.702076356719,
        "lng": 21.13800117799,
        "prices": {
            "A95": 1.719,
            "A98": null,
            "Diesel": 1.949,
            "LPG": null
        },
        "id": 400
    },
    {
        "name": "UAB Circle K Lietuva",
        "logo": "🔴",
        "city": "Marijampolės",
        "address": "Marijampolė, J. Dailidės g. 10, 68307",
        "lat": 54.557178665212,
        "lng": 23.354024748948,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.979,
            "LPG": null
        },
        "id": 401
    },
    {
        "name": "UAB Circle K Lietuva",
        "logo": "🔴",
        "city": "Šiaulių",
        "address": "Šiauliai, Vilniaus g. 62, 76251",
        "lat": 55.924822667579,
        "lng": 23.334056624833,
        "prices": {
            "A95": 1.779,
            "A98": null,
            "Diesel": 1.979,
            "LPG": null
        },
        "id": 402
    },
    {
        "name": "UAB Circle K Lietuva",
        "logo": "🔴",
        "city": "Kaunas",
        "address": "Kaunas, R. Kalantos g. 68, 52365",
        "lat": 54.893119099966,
        "lng": 23.995837971566,
        "prices": {
            "A95": 1.819,
            "A98": null,
            "Diesel": 1.994,
            "LPG": null
        },
        "id": 403
    },
    {
        "name": "UAB Circle K Lietuva",
        "logo": "🔴",
        "city": "Kaunas",
        "address": "Kaunas, Varnių g. 46, 48403",
        "lat": 54.914408295841,
        "lng": 23.900526260911,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 1.999,
            "LPG": null
        },
        "id": 404
    },
    {
        "name": "UAB Circle K Lietuva",
        "logo": "🔴",
        "city": "Vilnius",
        "address": "Vilnius, Oslo g. 12, 04123",
        "lat": 54.670809323209,
        "lng": 25.191382899841,
        "prices": {
            "A95": 1.784,
            "A98": null,
            "Diesel": 2.009,
            "LPG": null
        },
        "id": 405
    },
    {
        "name": "UAB Circle K Lietuva",
        "logo": "🔴",
        "city": "Tauragės",
        "address": "Tauragė, Dariaus ir Girėno g. 83A, 72192",
        "lat": 55.267041248859,
        "lng": 22.309648665744,
        "prices": {
            "A95": 1.769,
            "A98": null,
            "Diesel": 1.959,
            "LPG": null
        },
        "id": 406
    },
    {
        "name": "UAB Circle K Lietuva",
        "logo": "🔴",
        "city": "Kaunas",
        "address": "Kaunas, Islandijos pl. 32, 47446",
        "lat": 54.939640464699,
        "lng": 23.893488060633,
        "prices": {
            "A95": 1.774,
            "A98": null,
            "Diesel": 2.014,
            "LPG": null
        },
        "id": 407
    },
    {
        "name": "UAB Circle K Lietuva",
        "logo": "🔴",
        "city": "Panevėžio",
        "address": "Panevėžys, Klaipėdos g. 92A, 37383",
        "lat": 55.728708764412,
        "lng": 24.338971881354,
        "prices": {
            "A95": 1.759,
            "A98": null,
            "Diesel": 1.994,
            "LPG": null
        },
        "id": 408
    },
    {
        "name": "UAB Circle K Lietuva",
        "logo": "🔴",
        "city": "Vilnius",
        "address": "Didžiosios Riešės k., Molėtų g. 15, 14262",
        "lat": 54.780662374003,
        "lng": 25.273859941062,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.949,
            "LPG": null
        },
        "id": 409
    },
    {
        "name": "UAB Circle K Lietuva",
        "logo": "🔴",
        "city": "Tauragės",
        "address": "Tauragė, Gedimino g. 47, 72294",
        "lat": 55.24833124841,
        "lng": 22.303034422129,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 1.989,
            "LPG": 0.749
        },
        "id": 410
    },
    {
        "name": "UAB Circle K Lietuva",
        "logo": "🔴",
        "city": "Panevėžio",
        "address": "Šilagalio k., Panevėžio aplinkl. 20, 36258",
        "lat": 55.672298262675,
        "lng": 24.3365127986,
        "prices": {
            "A95": 1.759,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.779
        },
        "id": 411
    },
    {
        "name": "UAB Circle K Lietuva",
        "logo": "🔴",
        "city": "Kaunas",
        "address": "Kaunas, Vakarinio aplinkkelio 10, 48182",
        "lat": 54.93560193802,
        "lng": 23.870450735032,
        "prices": {
            "A95": 1.819,
            "A98": null,
            "Diesel": 2.049,
            "LPG": 0.829
        },
        "id": 412
    },
    {
        "name": "UAB Circle K Lietuva",
        "logo": "🔴",
        "city": "Kaunas",
        "address": "Kaunas, Žemaičių pl. 19, 48255",
        "lat": 54.925271326176,
        "lng": 23.890608709255,
        "prices": {
            "A95": 1.764,
            "A98": null,
            "Diesel": 2.004,
            "LPG": 0.809
        },
        "id": 413
    },
    {
        "name": "UAB Circle K Lietuva",
        "logo": "🔴",
        "city": "Šilalės",
        "address": "Košių II k., Dvaro g. 3, 75226",
        "lat": 55.484175749814,
        "lng": 22.588463370962,
        "prices": {
            "A95": 1.889,
            "A98": null,
            "Diesel": 2.079,
            "LPG": 0.889
        },
        "id": 414
    },
    {
        "name": "UAB Circle K Lietuva",
        "logo": "🔴",
        "city": "Klaipėda",
        "address": "Jakų k., Vilniaus pl. 21, 92498",
        "lat": 55.711540866509,
        "lng": 21.262928164221,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.77
        },
        "id": 415
    },
    {
        "name": "UAB Circle K Lietuva",
        "logo": "🔴",
        "city": "Vilnius",
        "address": "Vilnius, Geležinio Vilko g. 24, 08412",
        "lat": 54.7514191292,
        "lng": 25.266494678923,
        "prices": {
            "A95": 1.739,
            "A98": null,
            "Diesel": 1.989,
            "LPG": null
        },
        "id": 416
    },
    {
        "name": "UAB Circle K Lietuva",
        "logo": "🔴",
        "city": "Kaunas",
        "address": "Kaunas, Taikos pr. 52A, 51305",
        "lat": 54.912015430123,
        "lng": 23.956753827611,
        "prices": {
            "A95": 1.839,
            "A98": null,
            "Diesel": 2.029,
            "LPG": null
        },
        "id": 417
    },
    {
        "name": "UAB Circle K Lietuva",
        "logo": "🔴",
        "city": "Biržų",
        "address": "Biržai, Kilučių g. 93, 41154",
        "lat": 56.195071403028,
        "lng": 24.771803638326,
        "prices": {
            "A95": 1.774,
            "A98": null,
            "Diesel": 1.974,
            "LPG": 0.78
        },
        "id": 418
    },
    {
        "name": "UAB Circle K Lietuva",
        "logo": "🔴",
        "city": "Kaunas",
        "address": "Kaunas, Briedžių takas 6B, 49106",
        "lat": 54.935630185034,
        "lng": 23.965701090156,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 2.089,
            "LPG": 0.899
        },
        "id": 419
    },
    {
        "name": "UAB Circle K Lietuva",
        "logo": "🔴",
        "city": "Kaunas",
        "address": "Kaunas, Islandijos pl. 61C, 49117",
        "lat": 54.933770324538,
        "lng": 23.965671502038,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 2.089,
            "LPG": null
        },
        "id": 420
    },
    {
        "name": "UAB Circle K Lietuva",
        "logo": "🔴",
        "city": "Kaunas",
        "address": "Kaunas, Karaliaus Mindaugo pr. 34A, 44306",
        "lat": 54.89414890059,
        "lng": 23.913935629611,
        "prices": {
            "A95": 1.829,
            "A98": null,
            "Diesel": 2.039,
            "LPG": null
        },
        "id": 421
    },
    {
        "name": "UAB Circle K Lietuva",
        "logo": "🔴",
        "city": "Trakų",
        "address": "Dėdeliškių k., Didžiulio g. 5, 21401",
        "lat": 54.686401460639,
        "lng": 25.054046625762,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 2.089,
            "LPG": 0.859
        },
        "id": 422
    },
    {
        "name": "UAB Circle K Lietuva",
        "logo": "🔴",
        "city": "Utenos",
        "address": "Utena, J. Basanavičiaus g. 3, 28134",
        "lat": 55.495602882232,
        "lng": 25.583575035251,
        "prices": {
            "A95": 1.744,
            "A98": null,
            "Diesel": 1.959,
            "LPG": 0.739
        },
        "id": 423
    },
    {
        "name": "UAB Circle K Lietuva",
        "logo": "🔴",
        "city": "Lazdijų",
        "address": "Nekrūnų k. 1, 67171",
        "lat": 54.224905230753,
        "lng": 23.529451946688,
        "prices": {
            "A95": 1.769,
            "A98": null,
            "Diesel": 1.979,
            "LPG": 0.739
        },
        "id": 424
    },
    {
        "name": "UAB Circle K Lietuva",
        "logo": "🔴",
        "city": "Vilkaviškio",
        "address": "Serdokų k., Vilkaviškio g. 10, 70201",
        "lat": 54.636415897234,
        "lng": 23.074796061532,
        "prices": {
            "A95": 1.759,
            "A98": null,
            "Diesel": 1.979,
            "LPG": 0.78
        },
        "id": 425
    },
    {
        "name": "UAB Circle K Lietuva",
        "logo": "🔴",
        "city": "Klaipėda",
        "address": "Klaipėda, Taikos pr. 112A, 93150",
        "lat": 55.666464960979,
        "lng": 21.17278674672,
        "prices": {
            "A95": 1.775,
            "A98": null,
            "Diesel": 1.985,
            "LPG": 0.78
        },
        "id": 426
    },
    {
        "name": "UAB Circle K Lietuva",
        "logo": "🔴",
        "city": "Klaipėda",
        "address": "Klaipėda, Vilniaus pl. 1A, 94105",
        "lat": 55.692750735065,
        "lng": 21.179687902881,
        "prices": {
            "A95": 1.769,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.799
        },
        "id": 427
    },
    {
        "name": "UAB Circle K Lietuva",
        "logo": "🔴",
        "city": "Raseinių",
        "address": "Pikelių k. 1, 60376",
        "lat": 55.459363344488,
        "lng": 22.691527797079,
        "prices": {
            "A95": 1.889,
            "A98": null,
            "Diesel": 2.079,
            "LPG": 0.889
        },
        "id": 428
    },
    {
        "name": "UAB Circle K Lietuva",
        "logo": "🔴",
        "city": "Kalvarijos",
        "address": "Salaperaugio k., Europos g. 13a, 69286",
        "lat": 54.322808456757,
        "lng": 23.141138992804,
        "prices": {
            "A95": 1.869,
            "A98": null,
            "Diesel": 2.099,
            "LPG": null
        },
        "id": 429
    },
    {
        "name": "UAB Circle K Lietuva",
        "logo": "🔴",
        "city": "Kalvarijos",
        "address": "Brazavo k., Muitinės g. 5B, 69231",
        "lat": 54.368078612894,
        "lng": 23.183745966844,
        "prices": {
            "A95": 1.869,
            "A98": null,
            "Diesel": 2.099,
            "LPG": null
        },
        "id": 430
    },
    {
        "name": "UAB Circle K Lietuva",
        "logo": "🔴",
        "city": "Vilnius",
        "address": "Vilnius, Savanorių pr. 118, 03153",
        "lat": 54.661845879006,
        "lng": 25.235448696295,
        "prices": {
            "A95": 1.739,
            "A98": null,
            "Diesel": 1.979,
            "LPG": 0.759
        },
        "id": 431
    },
    {
        "name": "UAB Circle K Lietuva",
        "logo": "🔴",
        "city": "Klaipėda",
        "address": "Klaipėda, Minijos g. 90, 93234",
        "lat": 55.68767050546,
        "lng": 21.145004593369,
        "prices": {
            "A95": 1.784,
            "A98": null,
            "Diesel": 2.019,
            "LPG": 0.787
        },
        "id": 432
    },
    {
        "name": "UAB Circle K Lietuva",
        "logo": "🔴",
        "city": "Klaipėda",
        "address": "Klaipėda, Taikos pr. 61B, 91182",
        "lat": 55.692374932436,
        "lng": 21.153683467374,
        "prices": {
            "A95": 1.784,
            "A98": null,
            "Diesel": 2.019,
            "LPG": null
        },
        "id": 433
    },
    {
        "name": "UAB Circle K Lietuva",
        "logo": "🔴",
        "city": "Klaipėda",
        "address": "Klaipėda, H. Manto g. 96, 92295",
        "lat": 55.730400567749,
        "lng": 21.124714939447,
        "prices": {
            "A95": 1.824,
            "A98": null,
            "Diesel": 2.039,
            "LPG": null
        },
        "id": 434
    },
    {
        "name": "UAB Circle K Lietuva",
        "logo": "🔴",
        "city": "Marijampolės",
        "address": "Marijampolė, Kauno g. 130, 68230",
        "lat": 54.576373726398,
        "lng": 23.37149313808,
        "prices": {
            "A95": 1.729,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.77
        },
        "id": 435
    },
    {
        "name": "UAB Circle K Lietuva",
        "logo": "🔴",
        "city": "Alytaus",
        "address": "Alytus, Rūtų g. 2B, 62119",
        "lat": 54.395039046367,
        "lng": 24.038235062751,
        "prices": {
            "A95": 1.789,
            "A98": null,
            "Diesel": 2.009,
            "LPG": 0.719
        },
        "id": 436
    },
    {
        "name": "UAB Circle K Lietuva",
        "logo": "🔴",
        "city": "Druskininkų",
        "address": "Druskininkai, M. K. Čiurlionio g. 113, 66161",
        "lat": 54.010236390871,
        "lng": 23.993363466111,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 2.089,
            "LPG": 0.849
        },
        "id": 437
    },
    {
        "name": "UAB Circle K Lietuva",
        "logo": "🔴",
        "city": "Panevėžio",
        "address": "Panevėžys, J. Basanavičiaus g. 63, 36204",
        "lat": 55.717691548969,
        "lng": 24.371199796149,
        "prices": {
            "A95": 1.769,
            "A98": null,
            "Diesel": 1.979,
            "LPG": 0.749
        },
        "id": 438
    },
    {
        "name": "UAB Circle K Lietuva",
        "logo": "🔴",
        "city": "Panevėžio",
        "address": "Panevėžys, Parko g. 7A, 35189",
        "lat": 55.73172671056,
        "lng": 24.342405025075,
        "prices": {
            "A95": 1.779,
            "A98": null,
            "Diesel": 2.014,
            "LPG": 0.769
        },
        "id": 439
    },
    {
        "name": "UAB Circle K Lietuva",
        "logo": "🔴",
        "city": "Kėdainių",
        "address": "Kėdainiai, J. Basanavičiaus g. 40A, 57290",
        "lat": 55.286600755195,
        "lng": 23.972262695419,
        "prices": {
            "A95": 1.749,
            "A98": null,
            "Diesel": 1.989,
            "LPG": null
        },
        "id": 440
    },
    {
        "name": "UAB Circle K Lietuva",
        "logo": "🔴",
        "city": "Ukmergės",
        "address": "Kurėnų k., Ežero g. 7, 20102",
        "lat": 55.311756690644,
        "lng": 24.787242852518,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 2.089,
            "LPG": 0.839
        },
        "id": 441
    },
    {
        "name": "UAB Circle K Lietuva",
        "logo": "🔴",
        "city": "Telšių",
        "address": "Telšiai, Luokės g. 70, 87128",
        "lat": 55.977122013446,
        "lng": 22.265377464828,
        "prices": {
            "A95": 1.849,
            "A98": null,
            "Diesel": 2.009,
            "LPG": 0.759
        },
        "id": 442
    },
    {
        "name": "UAB Circle K Lietuva",
        "logo": "🔴",
        "city": "Šilutės",
        "address": "Šilutė, Cintjoniškių g. 15, 99116",
        "lat": 55.350441269274,
        "lng": 21.474502487795,
        "prices": {
            "A95": 1.789,
            "A98": null,
            "Diesel": 1.994,
            "LPG": 0.729
        },
        "id": 443
    },
    {
        "name": "UAB Circle K Lietuva",
        "logo": "🔴",
        "city": "Varėnos",
        "address": "Varėna, Savanorių g. 5, 65186",
        "lat": 54.210204837942,
        "lng": 24.576699335397,
        "prices": {
            "A95": 1.829,
            "A98": null,
            "Diesel": 2.009,
            "LPG": 0.799
        },
        "id": 444
    },
    {
        "name": "UAB Circle K Lietuva",
        "logo": "🔴",
        "city": "Mažeikių",
        "address": "Mažeikiai, Žemaitijos g. 57, 89128",
        "lat": 56.302358171112,
        "lng": 22.345265886907,
        "prices": {
            "A95": 1.749,
            "A98": null,
            "Diesel": 1.979,
            "LPG": 0.789
        },
        "id": 445
    },
    {
        "name": "UAB Circle K Lietuva",
        "logo": "🔴",
        "city": "Joniškio",
        "address": "Satkūnų k., Sidabros g. 2A, 84101",
        "lat": 56.2584164209,
        "lng": 23.621872572052,
        "prices": {
            "A95": 1.759,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.735
        },
        "id": 446
    },
    {
        "name": "UAB Circle K Lietuva",
        "logo": "🔴",
        "city": "Rokiškio",
        "address": "Rokiškis, Respublikos g. 111A, 42135",
        "lat": 55.952248925321,
        "lng": 25.589676893125,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 2.039,
            "LPG": 0.899
        },
        "id": 447
    },
    {
        "name": "UAB Circle K Lietuva",
        "logo": "🔴",
        "city": "Jonavos",
        "address": "Jonava, Vasario 16-osios g. 33, 55164",
        "lat": 55.070560092605,
        "lng": 24.263210959855,
        "prices": {
            "A95": 1.749,
            "A98": null,
            "Diesel": 2.007,
            "LPG": 0.789
        },
        "id": 448
    },
    {
        "name": "UAB Circle K Lietuva",
        "logo": "🔴",
        "city": "Vilnius",
        "address": "Vilnius, Geležinio Vilko g. 39, 08104",
        "lat": 54.702363998956,
        "lng": 25.264950229444,
        "prices": {
            "A95": 1.794,
            "A98": null,
            "Diesel": 2.014,
            "LPG": 0.859
        },
        "id": 449
    },
    {
        "name": "UAB Circle K Lietuva",
        "logo": "🔴",
        "city": "Kretingos",
        "address": "Kretinga, Klaipėdos g. 155, 97156",
        "lat": 55.863618513506,
        "lng": 21.217477378071,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 2.089,
            "LPG": 0.899
        },
        "id": 450
    },
    {
        "name": "UAB Circle K Lietuva",
        "logo": "🔴",
        "city": "Vilnius",
        "address": "Vilnius, Prūsų g. 26A, 02154",
        "lat": 54.658561639794,
        "lng": 25.266332405278,
        "prices": {
            "A95": 1.819,
            "A98": null,
            "Diesel": 2.039,
            "LPG": 0.859
        },
        "id": 451
    },
    {
        "name": "UAB Circle K Lietuva",
        "logo": "🔴",
        "city": "Radviliškio",
        "address": "Radviliškis, Gedimino g. 42B, 82174",
        "lat": 55.811805611389,
        "lng": 23.54641490781,
        "prices": {
            "A95": 1.769,
            "A98": null,
            "Diesel": 1.974,
            "LPG": 0.77
        },
        "id": 452
    },
    {
        "name": "UAB Circle K Lietuva",
        "logo": "🔴",
        "city": "Vilnius",
        "address": "Vilnius, A. Goštauto g. 13, 01108",
        "lat": 54.694355551477,
        "lng": 25.263428997837,
        "prices": {
            "A95": 1.794,
            "A98": null,
            "Diesel": 2.014,
            "LPG": null
        },
        "id": 453
    },
    {
        "name": "UAB Circle K Lietuva",
        "logo": "🔴",
        "city": "Vilnius",
        "address": "Vilnius, Laisvės pr. 43C, 05112",
        "lat": 54.709211762393,
        "lng": 25.228197763315,
        "prices": {
            "A95": 1.779,
            "A98": null,
            "Diesel": 1.989,
            "LPG": 0.809
        },
        "id": 454
    },
    {
        "name": "UAB Circle K Lietuva",
        "logo": "🔴",
        "city": "Vilnius",
        "address": "Vilnius, J. Tiškevičiaus g. 24, 02231",
        "lat": 54.623161845199,
        "lng": 25.110203616838,
        "prices": {
            "A95": 1.784,
            "A98": null,
            "Diesel": 1.989,
            "LPG": 0.769
        },
        "id": 455
    },
    {
        "name": "UAB Circle K Lietuva",
        "logo": "🔴",
        "city": "Vilnius",
        "address": "Vilnius, Eišiškių pl. 11, 02184",
        "lat": 54.651547998493,
        "lng": 25.269353159363,
        "prices": {
            "A95": 1.819,
            "A98": null,
            "Diesel": 2.039,
            "LPG": 0.859
        },
        "id": 456
    },
    {
        "name": "UAB Circle K Lietuva",
        "logo": "🔴",
        "city": "Kaunas",
        "address": "Kaunas, Pramonės pr. 18, 51183",
        "lat": 54.916191294285,
        "lng": 23.986586529755,
        "prices": {
            "A95": 1.759,
            "A98": null,
            "Diesel": 1.959,
            "LPG": 0.769
        },
        "id": 457
    },
    {
        "name": "UAB Circle K Lietuva",
        "logo": "🔴",
        "city": "Kaunas",
        "address": "Mastaičių k., Baltijos g. 1, 53289",
        "lat": 54.818866460034,
        "lng": 23.858143586599,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 2.089,
            "LPG": 0.839
        },
        "id": 458
    },
    {
        "name": "UAB Circle K Lietuva",
        "logo": "🔴",
        "city": "Kaunas",
        "address": "Kaunas, Raudondvario pl. 107A, 47186",
        "lat": 54.908183433538,
        "lng": 23.864909375024,
        "prices": {
            "A95": 1.849,
            "A98": null,
            "Diesel": 2.019,
            "LPG": 0.739
        },
        "id": 459
    },
    {
        "name": "UAB Circle K Lietuva",
        "logo": "🔴",
        "city": "Vilnius",
        "address": "Avižienių k., Sudervės g. 2G, 14198",
        "lat": 54.760318782535,
        "lng": 25.201651605406,
        "prices": {
            "A95": 1.779,
            "A98": null,
            "Diesel": 1.949,
            "LPG": 0.749
        },
        "id": 460
    },
    {
        "name": "UAB Circle K Lietuva",
        "logo": "🔴",
        "city": "Kaunas",
        "address": "Kaunas, R. Kalantos g. 159, 52314",
        "lat": 54.894161221988,
        "lng": 24.006781049076,
        "prices": {
            "A95": 1.849,
            "A98": null,
            "Diesel": 2.024,
            "LPG": 0.739
        },
        "id": 461
    },
    {
        "name": "UAB Circle K Lietuva",
        "logo": "🔴",
        "city": "Alytaus",
        "address": "Alytus, Naujoji g. 120, 62175",
        "lat": 54.424589404103,
        "lng": 24.003451840954,
        "prices": {
            "A95": 1.789,
            "A98": null,
            "Diesel": 1.987,
            "LPG": 0.739
        },
        "id": 462
    },
    {
        "name": "UAB Circle K Lietuva",
        "logo": "🔴",
        "city": "Kaunas",
        "address": "Kaunas, Savanorių pr. 321, 50120",
        "lat": 54.919677327815,
        "lng": 23.951192518673,
        "prices": {
            "A95": 1.849,
            "A98": null,
            "Diesel": 2.019,
            "LPG": null
        },
        "id": 463
    },
    {
        "name": "UAB Circle K Lietuva",
        "logo": "🔴",
        "city": "Kaunas",
        "address": "Kaunas, Veiverių g. 49A, 46336",
        "lat": 54.880898578503,
        "lng": 23.894048223223,
        "prices": {
            "A95": 1.829,
            "A98": null,
            "Diesel": 2.039,
            "LPG": null
        },
        "id": 464
    },
    {
        "name": "UAB Circle K Lietuva",
        "logo": "🔴",
        "city": "Šiaulių",
        "address": "Šiauliai, Dubijos g. 20A, 77207",
        "lat": 55.928815596704,
        "lng": 23.297616216958,
        "prices": {
            "A95": 1.809,
            "A98": null,
            "Diesel": 2.009,
            "LPG": 0.779
        },
        "id": 465
    },
    {
        "name": "UAB Circle K Lietuva",
        "logo": "🔴",
        "city": "Vilnius",
        "address": "Vilnius, Talino g. 2B, 05200",
        "lat": 54.713429242705,
        "lng": 25.209111080137,
        "prices": {
            "A95": 1.789,
            "A98": null,
            "Diesel": 2.009,
            "LPG": 0.839
        },
        "id": 466
    },
    {
        "name": "UAB Circle K Lietuva",
        "logo": "🔴",
        "city": "Šiaulių",
        "address": "Šiauliai, Pramonės g. 17, 78136",
        "lat": 55.909309273543,
        "lng": 23.319464318137,
        "prices": {
            "A95": 1.819,
            "A98": null,
            "Diesel": 2.009,
            "LPG": 0.779
        },
        "id": 467
    },
    {
        "name": "UAB Circle K Lietuva",
        "logo": "🔴",
        "city": "Elektrėnų",
        "address": "Elektrėnai, Sabališkių g. 1F, 26128",
        "lat": 54.789087569708,
        "lng": 24.675974764245,
        "prices": {
            "A95": 1.849,
            "A98": null,
            "Diesel": 2.049,
            "LPG": 0.809
        },
        "id": 468
    },
    {
        "name": "UAB Circle K Lietuva",
        "logo": "🔴",
        "city": "Utenos",
        "address": "Utena, J. Basanavičiaus g. 108A, 28214",
        "lat": 55.505150121406,
        "lng": 25.620955892662,
        "prices": {
            "A95": 1.754,
            "A98": null,
            "Diesel": 1.974,
            "LPG": 0.799
        },
        "id": 469
    },
    {
        "name": "UAB Circle K Lietuva",
        "logo": "🔴",
        "city": "Panevėžio",
        "address": "Ūtos k., Baltijos Kelio g. 33, 35189",
        "lat": 55.810596899041,
        "lng": 24.369100297042,
        "prices": {
            "A95": 1.759,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.849
        },
        "id": 470
    },
    {
        "name": "UAB Circle K Lietuva",
        "logo": "🔴",
        "city": "Palangos",
        "address": "Palanga, Kretingos g. 56, 00111",
        "lat": 55.914658059326,
        "lng": 21.077908045183,
        "prices": {
            "A95": 1.869,
            "A98": null,
            "Diesel": 2.029,
            "LPG": 0.809
        },
        "id": 471
    },
    {
        "name": "UAB Circle K Lietuva",
        "logo": "🔴",
        "city": "Šiaulių",
        "address": "Kuršėnai, Plento g. 1, 81115",
        "lat": 55.999263271689,
        "lng": 22.989648498124,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 2.089,
            "LPG": 0.899
        },
        "id": 472
    },
    {
        "name": "UAB Circle K Lietuva",
        "logo": "🔴",
        "city": "Vilnius",
        "address": "Vilnius, Geležinio Vilko g. 2A, 03150",
        "lat": 54.670981105729,
        "lng": 25.236656277085,
        "prices": {
            "A95": 1.839,
            "A98": null,
            "Diesel": 2.059,
            "LPG": 0.859
        },
        "id": 473
    },
    {
        "name": "UAB Circle K Lietuva",
        "logo": "🔴",
        "city": "Vilnius",
        "address": "Vilnius, Baltupio g. 10, 08303",
        "lat": 54.735965540044,
        "lng": 25.265453478911,
        "prices": {
            "A95": 1.739,
            "A98": null,
            "Diesel": 1.979,
            "LPG": 0.749
        },
        "id": 474
    },
    {
        "name": "UAB Circle K Lietuva",
        "logo": "🔴",
        "city": "Vilnius",
        "address": "Vilnius, A. P. Kavoliuko g. 32A, 04329",
        "lat": 54.695313100096,
        "lng": 25.218175102593,
        "prices": {
            "A95": 1.804,
            "A98": null,
            "Diesel": 2.019,
            "LPG": 0.859
        },
        "id": 475
    },
    {
        "name": "UAB Circle K Lietuva",
        "logo": "🔴",
        "city": "Vilnius",
        "address": "Vilnius, Sporto g. 16A, 09200",
        "lat": 54.69507635324,
        "lng": 25.298108451673,
        "prices": {
            "A95": 1.789,
            "A98": null,
            "Diesel": 2.009,
            "LPG": null
        },
        "id": 476
    },
    {
        "name": "UAB Circle K Lietuva",
        "logo": "🔴",
        "city": "Vilnius",
        "address": "Vilnius, Ukmergės g. 231, 07156",
        "lat": 54.72032390289,
        "lng": 25.24612120597,
        "prices": {
            "A95": 1.789,
            "A98": null,
            "Diesel": 1.999,
            "LPG": null
        },
        "id": 477
    },
    {
        "name": "UAB Circle K Lietuva",
        "logo": "🔴",
        "city": "Vilnius",
        "address": "Vilnius, Kareivių g. 13, 09109",
        "lat": 54.7185389347,
        "lng": 25.30056552277,
        "prices": {
            "A95": 1.809,
            "A98": null,
            "Diesel": 2.009,
            "LPG": 0.789
        },
        "id": 478
    },
    {
        "name": "UAB Skulas",
        "logo": "⛽",
        "city": "Alytaus",
        "address": "Simnas, Alytaus g. 48, 64313",
        "lat": 54.383872213952,
        "lng": 23.659486949285,
        "prices": {
            "A95": 1.78,
            "A98": null,
            "Diesel": 1.98,
            "LPG": 0.72
        },
        "id": 479
    },
    {
        "name": "UAB Skulas",
        "logo": "⛽",
        "city": "Alytaus",
        "address": "Likiškėlių k., Kalninės g. 5, 62442",
        "lat": 54.381917051217,
        "lng": 23.993118965995,
        "prices": {
            "A95": 1.75,
            "A98": null,
            "Diesel": 1.96,
            "LPG": 0.69
        },
        "id": 480
    },
    {
        "name": "UAB Skulas",
        "logo": "⛽",
        "city": "Kaunas",
        "address": "Kaunas, Ašigalio g. 1A, 49161",
        "lat": 54.933420631538,
        "lng": 23.943545708407,
        "prices": {
            "A95": 1.769,
            "A98": null,
            "Diesel": 1.949,
            "LPG": 0.679
        },
        "id": 481
    },
    {
        "name": "UAB Skulas",
        "logo": "⛽",
        "city": "Kaunas",
        "address": "Kaunas, Marvelės g. 106D, 46205",
        "lat": 54.900277832011,
        "lng": 23.857904367083,
        "prices": {
            "A95": 1.769,
            "A98": null,
            "Diesel": 1.949,
            "LPG": 0.679
        },
        "id": 482
    },
    {
        "name": "UAB Skulas",
        "logo": "⛽",
        "city": "Kaunas",
        "address": "Virbališkių k., Verslo g. 2, 53458",
        "lat": 54.90258231056,
        "lng": 23.762832797953,
        "prices": {
            "A95": 1.77,
            "A98": null,
            "Diesel": 1.95,
            "LPG": 0.69
        },
        "id": 483
    },
    {
        "name": "UAB Skulas",
        "logo": "⛽",
        "city": "Pasvalio",
        "address": "Pasvalys, Mūšos g. 2E, 39105",
        "lat": 56.069592049378,
        "lng": 24.387502597825,
        "prices": {
            "A95": 1.71,
            "A98": null,
            "Diesel": 1.96,
            "LPG": 0.7
        },
        "id": 484
    },
    {
        "name": "UAB Skulas",
        "logo": "⛽",
        "city": "Vilnius",
        "address": "Vilnius, J.Kazlausko g. 33, 08314",
        "lat": 54.722391886042,
        "lng": 25.27110036708,
        "prices": {
            "A95": 1.739,
            "A98": null,
            "Diesel": 1.939,
            "LPG": 0.689
        },
        "id": 485
    },
    {
        "name": "UAB Deliuvis",
        "logo": "⛽",
        "city": "Panevėžio",
        "address": "Panevėžys, G. Petkevičaitės-Bitės g. 35C, 37138",
        "lat": 55.722554854919,
        "lng": 24.342261107798,
        "prices": {
            "A95": 1.739,
            "A98": null,
            "Diesel": 1.969,
            "LPG": 0.699
        },
        "id": 486
    },
    {
        "name": "UAB Deliuvis",
        "logo": "⛽",
        "city": "Panevėžio",
        "address": "Panevėžys, Pušaloto g. 140, 35100",
        "lat": 55.746585855142,
        "lng": 24.329156672735,
        "prices": {
            "A95": 1.739,
            "A98": null,
            "Diesel": 1.969,
            "LPG": 0.699
        },
        "id": 487
    },
    {
        "name": "UAB Deliuvis",
        "logo": "⛽",
        "city": "Panevėžio",
        "address": "Panevėžys, S. Kerbedžio g. 2, 35135",
        "lat": 55.743153507702,
        "lng": 24.342521030615,
        "prices": {
            "A95": 1.739,
            "A98": null,
            "Diesel": 1.969,
            "LPG": 0.699
        },
        "id": 488
    },
    {
        "name": "UAB Narjanta",
        "logo": "⛽",
        "city": "Anykščių",
        "address": "Sausalaukės k. 2, 29345",
        "lat": 55.672029048599,
        "lng": 25.36597309671,
        "prices": {
            "A95": 1.779,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.819
        },
        "id": 489
    },
    {
        "name": "UAB Narjanta",
        "logo": "⛽",
        "city": "Biržų",
        "address": "Vabalninkas, S. Nėries g. 35, 41341",
        "lat": 55.974921805772,
        "lng": 24.740243090661,
        "prices": {
            "A95": 1.779,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.74
        },
        "id": 490
    },
    {
        "name": "UAB Narjanta",
        "logo": "⛽",
        "city": "Anykščių",
        "address": "Troškūnai, Vilniaus g. 32, 29306",
        "lat": 55.584934021153,
        "lng": 24.878243415094,
        "prices": {
            "A95": 1.779,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.739
        },
        "id": 491
    },
    {
        "name": "UAB Narjanta",
        "logo": "⛽",
        "city": "Kupiškio",
        "address": "Dvariškių vs. 2, 40402",
        "lat": 55.773387076169,
        "lng": 24.754009233221,
        "prices": {
            "A95": 1.779,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.739
        },
        "id": 492
    },
    {
        "name": "UAB Narjanta",
        "logo": "⛽",
        "city": "Kupiškio",
        "address": "Aleksandrijos k., Kikonių g. 10, 40335",
        "lat": 55.824341585778,
        "lng": 25.001344403718,
        "prices": {
            "A95": 1.919,
            "A98": null,
            "Diesel": 2.039,
            "LPG": 0.799
        },
        "id": 493
    },
    {
        "name": "UAB Narjanta",
        "logo": "⛽",
        "city": "Anykščių",
        "address": "Pumpučiai, Pumpučių g. 25, 29253",
        "lat": 55.424320034415,
        "lng": 24.920140274298,
        "prices": {
            "A95": 1.819,
            "A98": null,
            "Diesel": 2.029,
            "LPG": 0.789
        },
        "id": 494
    },
    {
        "name": "UAB Jozita",
        "logo": "🟡",
        "city": "Klaipėda",
        "address": "Klaipėda, Taikos pr. 157, 94285",
        "lat": 55.661157288431,
        "lng": 21.178034740117,
        "prices": {
            "A95": 1.68,
            "A98": null,
            "Diesel": 1.9,
            "LPG": 0.71
        },
        "id": 495
    },
    {
        "name": "UAB Jozita",
        "logo": "🟡",
        "city": "Šilalės",
        "address": "Šolių k., Pietinio Kelio g. 9, 75126",
        "lat": 55.485378050006,
        "lng": 22.171442314131,
        "prices": {
            "A95": 1.67,
            "A98": null,
            "Diesel": 1.89,
            "LPG": 0.67
        },
        "id": 496
    },
    {
        "name": "UAB Jozita",
        "logo": "🟡",
        "city": "Šilutės",
        "address": "Traksėdžių k., Klaipėdos. 60, 99104",
        "lat": 55.376161536,
        "lng": 21.460126895,
        "prices": {
            "A95": 1.81,
            "A98": null,
            "Diesel": 1.99,
            "LPG": 0.71
        },
        "id": 497
    },
    {
        "name": "UAB Jozita",
        "logo": "🟡",
        "city": "Kaunas",
        "address": "Kaunas, Baltų pr. 141A, 47126",
        "lat": 54.922806920913,
        "lng": 23.869743134766,
        "prices": {
            "A95": 1.81,
            "A98": null,
            "Diesel": 1.99,
            "LPG": 0.71
        },
        "id": 498
    },
    {
        "name": "UAB Jozita",
        "logo": "🟡",
        "city": "Kaunas",
        "address": "Kaunas, Betygalos g. 8, 47183",
        "lat": 54.904524229888,
        "lng": 23.879734614808,
        "prices": {
            "A95": 1.81,
            "A98": null,
            "Diesel": 1.99,
            "LPG": 0.71
        },
        "id": 499
    },
    {
        "name": "UAB Jozita",
        "logo": "🟡",
        "city": "Kaunas",
        "address": "Kaunas, Jonavos g. 51, 44131",
        "lat": 54.934034941222,
        "lng": 23.91787629757,
        "prices": {
            "A95": 1.81,
            "A98": null,
            "Diesel": 1.99,
            "LPG": 0.71
        },
        "id": 500
    },
    {
        "name": "UAB Jozita",
        "logo": "🟡",
        "city": "Kaunas",
        "address": "Garliava, Vytauto g. 111A, 53253",
        "lat": 54.828119368678,
        "lng": 23.873020626545,
        "prices": {
            "A95": 1.81,
            "A98": null,
            "Diesel": 1.99,
            "LPG": 0.71
        },
        "id": 501
    },
    {
        "name": "UAB Jozita",
        "logo": "🟡",
        "city": "Kaunas",
        "address": "Ramučiai, K. Bielinio g. 2A, 54465",
        "lat": 54.944066319123,
        "lng": 24.036069765704,
        "prices": {
            "A95": 1.81,
            "A98": null,
            "Diesel": 1.99,
            "LPG": 0.71
        },
        "id": 502
    },
    {
        "name": "UAB Jozita",
        "logo": "🟡",
        "city": "Plungės",
        "address": "Varkaliai, Žemaičių g. 2A, 90105",
        "lat": 55.897047010202,
        "lng": 21.821425353094,
        "prices": {
            "A95": 1.81,
            "A98": null,
            "Diesel": 1.99,
            "LPG": 0.71
        },
        "id": 503
    },
    {
        "name": "UAB Jozita",
        "logo": "🟡",
        "city": "Vilnius",
        "address": "Rudamina, Jašiūnų g. 2, 13255",
        "lat": 54.597262518759,
        "lng": 25.314959345998,
        "prices": {
            "A95": 1.81,
            "A98": null,
            "Diesel": 1.99,
            "LPG": 0.71
        },
        "id": 504
    },
    {
        "name": "UAB Jozita",
        "logo": "🟡",
        "city": "Kaunas",
        "address": "Kaunas, Kuršių g. 13A, 48109",
        "lat": 54.936165285733,
        "lng": 23.89569753031,
        "prices": {
            "A95": 1.81,
            "A98": null,
            "Diesel": 1.99,
            "LPG": 0.71
        },
        "id": 505
    },
    {
        "name": "UAB Jozita",
        "logo": "🟡",
        "city": "Klaipėda",
        "address": "Slengių k., Šilelių g. 1, 92338",
        "lat": 55.751443042304,
        "lng": 21.173204752232,
        "prices": {
            "A95": 1.81,
            "A98": null,
            "Diesel": 1.99,
            "LPG": 0.71
        },
        "id": 506
    },
    {
        "name": "UAB Jozita",
        "logo": "🟡",
        "city": "Klaipėda",
        "address": "Trepkalnių k., Mokyklos g. 2, 96278",
        "lat": 55.608507411372,
        "lng": 21.59396061748,
        "prices": {
            "A95": 1.81,
            "A98": null,
            "Diesel": 1.99,
            "LPG": 0.71
        },
        "id": 507
    },
    {
        "name": "UAB Jozita",
        "logo": "🟡",
        "city": "Klaipėda",
        "address": "Klaipėda, Priestočio g. 26, 92228",
        "lat": 55.720006063767,
        "lng": 21.137465533389,
        "prices": {
            "A95": null,
            "A98": null,
            "Diesel": null,
            "LPG": 0.71
        },
        "id": 508
    },
    {
        "name": "UAB Jozita",
        "logo": "🟡",
        "city": "Raseinių",
        "address": "Raseiniai, Liepų g. 10E, 60119",
        "lat": 55.391360924296,
        "lng": 23.127078350227,
        "prices": {
            "A95": null,
            "A98": null,
            "Diesel": null,
            "LPG": 0.71
        },
        "id": 509
    },
    {
        "name": "UAB Jozita",
        "logo": "🟡",
        "city": "Vilnius",
        "address": "Vilnius, Baltosios Vokės g. 35, 02243",
        "lat": 54.613233858074,
        "lng": 25.184045753062,
        "prices": {
            "A95": null,
            "A98": null,
            "Diesel": null,
            "LPG": 0.71
        },
        "id": 510
    },
    {
        "name": "UAB Jozita",
        "logo": "🟡",
        "city": "Šilutės",
        "address": "Šilutė, Šiaurės g. 1, 99116",
        "lat": 55.356546563728,
        "lng": 21.469002534388,
        "prices": {
            "A95": null,
            "A98": null,
            "Diesel": null,
            "LPG": 0.71
        },
        "id": 511
    },
    {
        "name": "UAB Jozita",
        "logo": "🟡",
        "city": "Tauragės",
        "address": "Papušynės k., Šilalės g. 105, 72175",
        "lat": 55.271722206507,
        "lng": 22.286408581904,
        "prices": {
            "A95": 1.81,
            "A98": null,
            "Diesel": 1.98,
            "LPG": 0.71
        },
        "id": 512
    },
    {
        "name": "UAB Jozita",
        "logo": "🟡",
        "city": "Vilnius",
        "address": "Vilnius, Ukmergės g. 130, 08100",
        "lat": 54.703151143483,
        "lng": 25.257526880716,
        "prices": {
            "A95": 1.81,
            "A98": null,
            "Diesel": 1.99,
            "LPG": 0.71
        },
        "id": 513
    },
    {
        "name": "UAB Jozita",
        "logo": "🟡",
        "city": "Vilnius",
        "address": "Vilnius, Parko g. 64, 11225",
        "lat": 54.685892679117,
        "lng": 25.430597255673,
        "prices": {
            "A95": 1.81,
            "A98": null,
            "Diesel": 1.99,
            "LPG": 0.71
        },
        "id": 514
    },
    {
        "name": "UAB Jozita",
        "logo": "🟡",
        "city": "Šiaulių",
        "address": "Šiauliai, Architektų g. 80, 78171",
        "lat": 55.924587806652,
        "lng": 23.279548605568,
        "prices": {
            "A95": 1.81,
            "A98": null,
            "Diesel": 1.99,
            "LPG": 0.71
        },
        "id": 515
    },
    {
        "name": "UAB Jozita",
        "logo": "🟡",
        "city": "Šiaulių",
        "address": "Šiauliai, Girulių g. 1, 78132",
        "lat": 55.922226959803,
        "lng": 23.296967373834,
        "prices": {
            "A95": 1.81,
            "A98": null,
            "Diesel": 1.99,
            "LPG": 0.71
        },
        "id": 516
    },
    {
        "name": "UAB Jozita",
        "logo": "🟡",
        "city": "Panevėžio",
        "address": "Panevėžys, S. Kerbedžio g. 7F, 35104",
        "lat": 55.744787056812,
        "lng": 24.346261957822,
        "prices": {
            "A95": 1.81,
            "A98": null,
            "Diesel": 1.99,
            "LPG": 0.71
        },
        "id": 517
    },
    {
        "name": "UAB Jozita",
        "logo": "🟡",
        "city": "Pakruojo",
        "address": "Kuosiškių k. 4, 83169",
        "lat": 55.966310767778,
        "lng": 23.863570515066,
        "prices": {
            "A95": 1.66,
            "A98": null,
            "Diesel": 1.89,
            "LPG": 0.66
        },
        "id": 518
    },
    {
        "name": "UAB Jozita",
        "logo": "🟡",
        "city": "Klaipėda",
        "address": "Gargždai, Gamyklos g. 1, 96155",
        "lat": 55.706519268316,
        "lng": 21.363618542144,
        "prices": {
            "A95": 1.66,
            "A98": null,
            "Diesel": 1.89,
            "LPG": 0.67
        },
        "id": 519
    },
    {
        "name": "UAB Jozita",
        "logo": "🟡",
        "city": "Kelmės",
        "address": "Kelmė, V. Putvinskio g. 37, 86113",
        "lat": 55.643414224332,
        "lng": 22.925627437851,
        "prices": {
            "A95": 1.81,
            "A98": null,
            "Diesel": 1.99,
            "LPG": 0.71
        },
        "id": 520
    },
    {
        "name": "UAB Jozita",
        "logo": "🟡",
        "city": "Raseinių",
        "address": "Raseiniai, Maironio g. 78b, 60120",
        "lat": 55.389994422621,
        "lng": 23.130738643525,
        "prices": {
            "A95": 1.81,
            "A98": null,
            "Diesel": 1.99,
            "LPG": 0.71
        },
        "id": 521
    },
    {
        "name": "UAB Jozita",
        "logo": "🟡",
        "city": "Šiaulių",
        "address": "Toliočiai, Plento g. 2B, 76322",
        "lat": 55.954344736391,
        "lng": 23.25595438632,
        "prices": {
            "A95": 1.81,
            "A98": null,
            "Diesel": 1.99,
            "LPG": 0.71
        },
        "id": 522
    },
    {
        "name": "UAB Jozita",
        "logo": "🟡",
        "city": "Vilnius",
        "address": "Vilnius, Pramonės g. 18, 11115",
        "lat": 54.695850002903,
        "lng": 25.432049085122,
        "prices": {
            "A95": 1.81,
            "A98": null,
            "Diesel": 1.99,
            "LPG": 0.71
        },
        "id": 523
    },
    {
        "name": "UAB Jozita",
        "logo": "🟡",
        "city": "Kaunas",
        "address": "Kaunas, Partizanų g. 87G, 50312",
        "lat": 54.927297190264,
        "lng": 23.9991575405,
        "prices": {
            "A95": 1.81,
            "A98": null,
            "Diesel": 1.99,
            "LPG": 0.71
        },
        "id": 524
    },
    {
        "name": "UAB Apsaga",
        "logo": "⛽",
        "city": "Radviliškio",
        "address": "Baisogalos k., Beržų g. 19, 82323",
        "lat": 55.63478358818,
        "lng": 23.733496136839,
        "prices": {
            "A95": 1.749,
            "A98": null,
            "Diesel": 1.979,
            "LPG": 0.749
        },
        "id": 525
    },
    {
        "name": "UAB Apsaga",
        "logo": "⛽",
        "city": "Šiaulių",
        "address": "Šiauliai, Pramonės g. 3A, 78140",
        "lat": 55.917981693483,
        "lng": 23.297652091504,
        "prices": {
            "A95": 1.829,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.76
        },
        "id": 526
    },
    {
        "name": "UAB Apsaga",
        "logo": "⛽",
        "city": "Joniškio",
        "address": "Radikių k., 13, 84164",
        "lat": 56.215363885842,
        "lng": 23.579978604605,
        "prices": {
            "A95": 1.759,
            "A98": null,
            "Diesel": 1.969,
            "LPG": 0.735
        },
        "id": 527
    },
    {
        "name": "UAB Apsaga",
        "logo": "⛽",
        "city": "Šiaulių",
        "address": "Šiauliai, Tilžės g. 223, 76200",
        "lat": 55.940609269748,
        "lng": 23.326278637781,
        "prices": {
            "A95": 1.829,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.76
        },
        "id": 528
    },
    {
        "name": "UAB Apsaga",
        "logo": "⛽",
        "city": "Šiaulių",
        "address": "Šiauliai, V. Bielskio g. 47A, 76159",
        "lat": 55.95629428325,
        "lng": 23.308423926732,
        "prices": {
            "A95": 1.769,
            "A98": null,
            "Diesel": 1.969,
            "LPG": 0.74
        },
        "id": 529
    },
    {
        "name": "UAB Apsaga",
        "logo": "⛽",
        "city": "Šiaulių",
        "address": "Šiauliai, Nuklono g. 4, 78349",
        "lat": 55.916729604787,
        "lng": 23.246900925062,
        "prices": {
            "A95": 1.829,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.76
        },
        "id": 530
    },
    {
        "name": "UAB Apsaga",
        "logo": "⛽",
        "city": "Šiaulių",
        "address": "Šiauliai, Pramonės g. 28, 77116",
        "lat": 55.904981403567,
        "lng": 23.328047806084,
        "prices": {
            "A95": 1.829,
            "A98": null,
            "Diesel": 1.999,
            "LPG": null
        },
        "id": 531
    },
    {
        "name": "UAB Apsaga",
        "logo": "⛽",
        "city": "Šiaulių",
        "address": "Šiauliai, Vilniaus g. 16, 76265",
        "lat": 55.923471379058,
        "lng": 23.350175276096,
        "prices": {
            "A95": 1.769,
            "A98": null,
            "Diesel": 1.969,
            "LPG": 0.76
        },
        "id": 532
    },
    {
        "name": "UAB Apsaga",
        "logo": "⛽",
        "city": "Radviliškio",
        "address": "Radviliškis, Šiaulių g. 12, 82142",
        "lat": 55.815451236356,
        "lng": 23.543532538946,
        "prices": {
            "A95": 1.739,
            "A98": null,
            "Diesel": 1.989,
            "LPG": 0.739
        },
        "id": 533
    },
    {
        "name": "UAB Saurida",
        "logo": "🔥",
        "city": "Klaipėda",
        "address": "Klaipėda, Jūrininkų pr. 29, 95225",
        "lat": 55.656822587204,
        "lng": 21.183783636048,
        "prices": {
            "A95": 1.72,
            "A98": null,
            "Diesel": 1.95,
            "LPG": 0.67
        },
        "id": 534
    },
    {
        "name": "UAB Saurida",
        "logo": "🔥",
        "city": "Prienų",
        "address": "Ignacavos k., Kauno pl. 18, 59149",
        "lat": 54.646668305922,
        "lng": 23.930061405492,
        "prices": {
            "A95": 1.74,
            "A98": null,
            "Diesel": 1.96,
            "LPG": 0.72
        },
        "id": 535
    },
    {
        "name": "UAB Saurida",
        "logo": "🔥",
        "city": "Prienų",
        "address": "Mauručiai, Liepų g. 20, 59290",
        "lat": 54.771066645519,
        "lng": 23.765498662258,
        "prices": {
            "A95": 1.74,
            "A98": null,
            "Diesel": 1.92,
            "LPG": null
        },
        "id": 536
    },
    {
        "name": "UAB Saurida",
        "logo": "🔥",
        "city": "Radviliškio",
        "address": "Velžių k., Radviliškio plentas 2, 82218",
        "lat": 55.773190770193,
        "lng": 23.656115999285,
        "prices": {
            "A95": 1.72,
            "A98": null,
            "Diesel": 1.94,
            "LPG": 0.7
        },
        "id": 537
    },
    {
        "name": "UAB Saurida",
        "logo": "🔥",
        "city": "Šiaulių",
        "address": "Šiauliai, Pramonės g. 7C, 78140",
        "lat": 55.916460503785,
        "lng": 23.301870703372,
        "prices": {
            "A95": 1.77,
            "A98": null,
            "Diesel": 1.97,
            "LPG": 0.71
        },
        "id": 538
    },
    {
        "name": "UAB Saurida",
        "logo": "🔥",
        "city": "Vilnius",
        "address": "Zujūnai, Buivydiškių g. 1A, 14160",
        "lat": 54.723597874271,
        "lng": 25.191281514797,
        "prices": {
            "A95": 1.75,
            "A98": null,
            "Diesel": 1.98,
            "LPG": 0.72
        },
        "id": 539
    },
    {
        "name": "UAB Saurida",
        "logo": "🔥",
        "city": "Akmenės",
        "address": "Naujoji Akmenė,  V. Kudirkos g. 18A, 85171",
        "lat": 56.317196235208,
        "lng": 22.884912762272,
        "prices": {
            "A95": 1.73,
            "A98": null,
            "Diesel": 1.96,
            "LPG": 0.72
        },
        "id": 540
    },
    {
        "name": "UAB Saurida",
        "logo": "🔥",
        "city": "Akmenės",
        "address": "Pašakarnių k. Pašakarnių g. 1, 85271",
        "lat": 56.298082520393,
        "lng": 22.88522716746,
        "prices": {
            "A95": 1.73,
            "A98": null,
            "Diesel": 1.95,
            "LPG": 0.72
        },
        "id": 541
    },
    {
        "name": "UAB Saurida",
        "logo": "🔥",
        "city": "Alytaus",
        "address": "Alytus, Miškininkų g. 7, 62201",
        "lat": 54.411694265162,
        "lng": 24.067674066903,
        "prices": {
            "A95": 1.72,
            "A98": null,
            "Diesel": 1.95,
            "LPG": null
        },
        "id": 542
    },
    {
        "name": "UAB Saurida",
        "logo": "🔥",
        "city": "Kalvarijos",
        "address": "Kušliškių k. Suvalkijos g. 15, 69200",
        "lat": 54.436224868724,
        "lng": 23.204989648985,
        "prices": {
            "A95": 1.69,
            "A98": null,
            "Diesel": 1.93,
            "LPG": 0.72
        },
        "id": 543
    },
    {
        "name": "UAB Saurida",
        "logo": "🔥",
        "city": "Kaunas",
        "address": "Kaunas, Garažų g. 20, 50314",
        "lat": 54.923694313003,
        "lng": 24.000811206177,
        "prices": {
            "A95": 1.69,
            "A98": null,
            "Diesel": 1.96,
            "LPG": 0.72
        },
        "id": 544
    },
    {
        "name": "UAB Saurida",
        "logo": "🔥",
        "city": "Marijampolės",
        "address": "Marijampolė, Statybininkų g. 8, 68108",
        "lat": 54.577893323534,
        "lng": 23.376914469235,
        "prices": {
            "A95": 1.71,
            "A98": null,
            "Diesel": 1.93,
            "LPG": null
        },
        "id": 545
    },
    {
        "name": "UAB Saurida",
        "logo": "🔥",
        "city": "Akmenės",
        "address": "Akmenės I k., Plento g. 1, 85380",
        "lat": 56.238514346182,
        "lng": 22.750824439689,
        "prices": {
            "A95": 1.73,
            "A98": null,
            "Diesel": 1.95,
            "LPG": 0.72
        },
        "id": 546
    },
    {
        "name": "UAB Saurida",
        "logo": "🔥",
        "city": "Lazdijų",
        "address": "Panarvės k., 67168",
        "lat": 54.242560993,
        "lng": 23.543537586,
        "prices": {
            "A95": 1.74,
            "A98": null,
            "Diesel": 1.98,
            "LPG": 0.72
        },
        "id": 547
    },
    {
        "name": "UAB Saurida",
        "logo": "🔥",
        "city": "Šakių",
        "address": "Lėkėčių k., Šakių g. 3, 71229",
        "lat": 54.981780889581,
        "lng": 23.449412477915,
        "prices": {
            "A95": 1.75,
            "A98": null,
            "Diesel": 1.96,
            "LPG": 0.72
        },
        "id": 548
    },
    {
        "name": "UAB Saurida",
        "logo": "🔥",
        "city": "Kaunas",
        "address": "Domeikava, Muitinės g. 2, 54359",
        "lat": 54.956352387069,
        "lng": 23.90474738735,
        "prices": {
            "A95": 1.75,
            "A98": null,
            "Diesel": 1.97,
            "LPG": 0.72
        },
        "id": 549
    },
    {
        "name": "UAB Saurida",
        "logo": "🔥",
        "city": "Vilnius",
        "address": "Čekoniškių k., 14207",
        "lat": 54.736723465,
        "lng": 25.085725471,
        "prices": {
            "A95": 1.75,
            "A98": null,
            "Diesel": 1.95,
            "LPG": null
        },
        "id": 550
    },
    {
        "name": "UAB Saurida",
        "logo": "🔥",
        "city": "Jurbarko",
        "address": "Pašvenčio k., 74218",
        "lat": 55.085850192,
        "lng": 22.607011446,
        "prices": {
            "A95": 1.8,
            "A98": null,
            "Diesel": 1.93,
            "LPG": 0.69
        },
        "id": 551
    },
    {
        "name": "UAB Saurida",
        "logo": "🔥",
        "city": "Kalvarijos",
        "address": "Kreivukės k., 69232",
        "lat": 54.404472739,
        "lng": 23.19410617,
        "prices": {
            "A95": null,
            "A98": null,
            "Diesel": null,
            "LPG": 0.72
        },
        "id": 552
    },
    {
        "name": "UAB Saurida",
        "logo": "🔥",
        "city": "Vilnius",
        "address": "Vilnius, Stanevičiaus g. 3A, 07131",
        "lat": 54.721696355716,
        "lng": 25.25592761359,
        "prices": {
            "A95": null,
            "A98": null,
            "Diesel": null,
            "LPG": 0.72
        },
        "id": 553
    },
    {
        "name": "UAB Saurida",
        "logo": "🔥",
        "city": "Vilnius",
        "address": "Vilnius, Rygos g. 2, 05264",
        "lat": 54.715574884189,
        "lng": 25.228964372179,
        "prices": {
            "A95": null,
            "A98": null,
            "Diesel": null,
            "LPG": 0.72
        },
        "id": 554
    },
    {
        "name": "UAB Saurida",
        "logo": "🔥",
        "city": "Kaunas",
        "address": "Martinavos g. 1, Neveronių k., 54475",
        "lat": 54.924576256855,
        "lng": 24.078719152174,
        "prices": {
            "A95": 1.75,
            "A98": null,
            "Diesel": 1.96,
            "LPG": 0.72
        },
        "id": 555
    },
    {
        "name": "UAB Saurida",
        "logo": "🔥",
        "city": "Skuodo",
        "address": "Skuodas, Vytauto g. 20, 98123",
        "lat": 56.261448658193,
        "lng": 21.529893289101,
        "prices": {
            "A95": 1.74,
            "A98": null,
            "Diesel": 1.96,
            "LPG": 0.68
        },
        "id": 556
    },
    {
        "name": "UAB Saurida",
        "logo": "🔥",
        "city": "Alytaus",
        "address": "Alytus, Pramonės g. 5, 62323",
        "lat": 54.423491500515,
        "lng": 24.020355792726,
        "prices": {
            "A95": 1.72,
            "A98": null,
            "Diesel": 1.95,
            "LPG": 0.72
        },
        "id": 557
    },
    {
        "name": "UAB Saurida",
        "logo": "🔥",
        "city": "Ukmergės",
        "address": "Ukmergė, Kareivinių g. 64, 20184",
        "lat": 55.258987706741,
        "lng": 24.790493941303,
        "prices": {
            "A95": 1.75,
            "A98": null,
            "Diesel": 1.99,
            "LPG": 0.72
        },
        "id": 558
    },
    {
        "name": "UAB Saurida",
        "logo": "🔥",
        "city": "Ukmergės",
        "address": "Ukmergė, Vilniaus g. 122, 20168",
        "lat": 55.233433379435,
        "lng": 24.78107301741,
        "prices": {
            "A95": 1.75,
            "A98": null,
            "Diesel": 1.99,
            "LPG": 0.72
        },
        "id": 559
    },
    {
        "name": "UAB Saurida",
        "logo": "🔥",
        "city": "Kaišiadorių",
        "address": "Rumšiškės, Lekavičiaus g. 71, 56337",
        "lat": 54.871853666786,
        "lng": 24.213242830808,
        "prices": {
            "A95": 1.75,
            "A98": null,
            "Diesel": 1.99,
            "LPG": 0.72
        },
        "id": 560
    },
    {
        "name": "UAB Saurida",
        "logo": "🔥",
        "city": "Ukmergės",
        "address": "Pageležių k, 20278",
        "lat": 55.165134437,
        "lng": 24.514938944,
        "prices": {
            "A95": 1.75,
            "A98": null,
            "Diesel": 1.95,
            "LPG": 0.72
        },
        "id": 561
    },
    {
        "name": "UAB Saurida",
        "logo": "🔥",
        "city": "Radviliškio",
        "address": "Radviliškis, Gedimino g. 50C, 82482",
        "lat": 55.814962670503,
        "lng": 23.553123070273,
        "prices": {
            "A95": 1.72,
            "A98": null,
            "Diesel": 1.94,
            "LPG": 0.7
        },
        "id": 562
    },
    {
        "name": "UAB Saurida",
        "logo": "🔥",
        "city": "Šiaulių",
        "address": "Šiauliai, Vilniaus g. 373A, 76326",
        "lat": 55.94272829869,
        "lng": 23.281565040015,
        "prices": {
            "A95": 1.78,
            "A98": null,
            "Diesel": 1.97,
            "LPG": 0.71
        },
        "id": 563
    },
    {
        "name": "UAB Saurida",
        "logo": "🔥",
        "city": "Šilalės",
        "address": "Šilalė, Rytinio kelio g. 19, 75133",
        "lat": 55.491828301685,
        "lng": 22.199235615413,
        "prices": {
            "A95": 1.8,
            "A98": null,
            "Diesel": 1.97,
            "LPG": 0.7
        },
        "id": 564
    },
    {
        "name": "UAB Saurida",
        "logo": "🔥",
        "city": "Vilnius",
        "address": "Vilnius, Jankiškių g. 43a, 02300",
        "lat": 54.651911647363,
        "lng": 25.185588442341,
        "prices": {
            "A95": 1.75,
            "A98": null,
            "Diesel": 1.99,
            "LPG": 0.72
        },
        "id": 565
    },
    {
        "name": "UAB Saurida",
        "logo": "🔥",
        "city": "Visagino",
        "address": "Visaginas, Kosmoso g. 1, 31142",
        "lat": 55.59740696363,
        "lng": 26.403391634302,
        "prices": {
            "A95": 1.77,
            "A98": null,
            "Diesel": 1.99,
            "LPG": 0.72
        },
        "id": 566
    },
    {
        "name": "UAB Saurida",
        "logo": "🔥",
        "city": "Kaunas",
        "address": "Babtai, Vandžiogalos g. 3, 54328",
        "lat": 55.096970128406,
        "lng": 23.806257175191,
        "prices": {
            "A95": 1.75,
            "A98": null,
            "Diesel": 1.99,
            "LPG": 0.72
        },
        "id": 567
    },
    {
        "name": "UAB Mindega",
        "logo": "⛽",
        "city": "Kėdainių",
        "address": "Šėta, Ramygalos g. 55, 58129",
        "lat": 55.290357817565,
        "lng": 24.252997610836,
        "prices": {
            "A95": 1.76,
            "A98": null,
            "Diesel": 1.99,
            "LPG": null
        },
        "id": 568
    },
    {
        "name": "UAB Velseka",
        "logo": "⛽",
        "city": "Kupiškio",
        "address": "Kupiškis, Panevėžio g. 5, 40134",
        "lat": 55.827131208883,
        "lng": 24.986317495343,
        "prices": {
            "A95": 1.749,
            "A98": null,
            "Diesel": 1.929,
            "LPG": 0.719
        },
        "id": 569
    },
    {
        "name": "UAB Pakelės namai",
        "logo": "⛽",
        "city": "Pasvalio",
        "address": "Škilinpamūšio k., Liepų g. 4, 39421",
        "lat": 56.267591629302,
        "lng": 24.370953787291,
        "prices": {
            "A95": 1.81,
            "A98": null,
            "Diesel": 1.99,
            "LPG": 0.85
        },
        "id": 570
    },
    {
        "name": "UAB Pakelės namai",
        "logo": "⛽",
        "city": "Pasvalio",
        "address": "Škilinpamūšio k., Pasienio g. 10, 39421",
        "lat": 56.272326063492,
        "lng": 24.367786768995,
        "prices": {
            "A95": 1.81,
            "A98": null,
            "Diesel": 1.99,
            "LPG": 0.85
        },
        "id": 571
    },
    {
        "name": "UAB Nostrada",
        "logo": "⛽",
        "city": "Kalvarijos",
        "address": "Kazlavo k. 4, 69285",
        "lat": 54.333891879221,
        "lng": 23.153394218875,
        "prices": {
            "A95": 1.82,
            "A98": null,
            "Diesel": 1.99,
            "LPG": null
        },
        "id": 572
    },
    {
        "name": "UAB Tomega",
        "logo": "⛽",
        "city": "Šalčininkų",
        "address": "Dumblės k., 17178",
        "lat": 54.142735346385,
        "lng": 25.028760624272,
        "prices": {
            "A95": 1.879,
            "A98": null,
            "Diesel": 2.029,
            "LPG": null
        },
        "id": 573
    },
    {
        "name": "UAB Tomega",
        "logo": "⛽",
        "city": "Šalčininkų",
        "address": "Tartoko k., 17127",
        "lat": 54.301675876,
        "lng": 25.36083838,
        "prices": {
            "A95": 1.869,
            "A98": null,
            "Diesel": 2.019,
            "LPG": null
        },
        "id": 574
    },
    {
        "name": "UAB Tomega",
        "logo": "⛽",
        "city": "Druskininkų",
        "address": "Druskininkai, Gardino g. 98, 66225",
        "lat": 53.990179418582,
        "lng": 24.005703136328,
        "prices": {
            "A95": 1.81,
            "A98": null,
            "Diesel": 1.98,
            "LPG": 0.82
        },
        "id": 575
    },
    {
        "name": "UAB Gindana",
        "logo": "⛽",
        "city": "Klaipėda",
        "address": "Klaipėda, Priešpilio g. 5, 91240",
        "lat": 55.704145136152,
        "lng": 21.129605025579,
        "prices": {
            "A95": 1.85,
            "A98": null,
            "Diesel": 1.95,
            "LPG": null
        },
        "id": 576
    },
    {
        "name": "UAB Utentra",
        "logo": "⛽",
        "city": "Utenos",
        "address": "Utena, Pramonės g. 16, 28119",
        "lat": 55.494736444901,
        "lng": 25.645867411814,
        "prices": {
            "A95": null,
            "A98": null,
            "Diesel": 1.929,
            "LPG": null
        },
        "id": 577
    },
    {
        "name": "UAB Regusa",
        "logo": "⛽",
        "city": "Vilkaviškio",
        "address": "Kybartai, J. Basanavičiaus g. 45A, 70417",
        "lat": 54.638530860952,
        "lng": 22.763105017488,
        "prices": {
            "A95": 1.85,
            "A98": null,
            "Diesel": 1.99,
            "LPG": 0.75
        },
        "id": 578
    },
    {
        "name": "UAB Regusa",
        "logo": "⛽",
        "city": "Marijampolės",
        "address": "Gavaltuvos k., Sodo g. 11, 69370",
        "lat": 54.676728409099,
        "lng": 23.417700810087,
        "prices": {
            "A95": 1.8,
            "A98": null,
            "Diesel": 1.96,
            "LPG": 0.75
        },
        "id": 579
    },
    {
        "name": "UAB Regusa",
        "logo": "⛽",
        "city": "Kazlų Rūdos",
        "address": "Kazlų Rūda, S. Daukanto g. 19D, 69430",
        "lat": 54.739257993521,
        "lng": 23.496298586715,
        "prices": {
            "A95": 1.84,
            "A98": null,
            "Diesel": 1.99,
            "LPG": 0.75
        },
        "id": 580
    },
    {
        "name": "UAB Regusa",
        "logo": "⛽",
        "city": "Kazlų Rūdos",
        "address": "Jūrės k., Medelyno g. 4A, 69446",
        "lat": 54.769137634323,
        "lng": 23.486572058632,
        "prices": {
            "A95": 1.84,
            "A98": null,
            "Diesel": 1.99,
            "LPG": 0.75
        },
        "id": 581
    },
    {
        "name": "UAB Regusa",
        "logo": "⛽",
        "city": "Kaunas",
        "address": "Kaunas, Marijampolės pl. 20, 46147",
        "lat": 54.850220812881,
        "lng": 23.965742496758,
        "prices": {
            "A95": 1.75,
            "A98": null,
            "Diesel": 1.95,
            "LPG": 0.72
        },
        "id": 582
    },
    {
        "name": "AB Orlen Baltics Retail",
        "logo": "🦅",
        "city": "Panevėžio",
        "address": "Panevėžys, Klaipėdos g. 162 D, 37372",
        "lat": 55.731739409143,
        "lng": 24.303399419553,
        "prices": {
            "A95": 1.739,
            "A98": null,
            "Diesel": 1.989,
            "LPG": 0.729
        },
        "id": 583
    },
    {
        "name": "AB Orlen Baltics Retail",
        "logo": "🦅",
        "city": "Panevėžio",
        "address": "Panevėžys, Senamiesčio g. 115, 35114",
        "lat": 55.748174309613,
        "lng": 24.391032133434,
        "prices": {
            "A95": 1.719,
            "A98": null,
            "Diesel": 1.959,
            "LPG": 0.719
        },
        "id": 584
    },
    {
        "name": "AB Orlen Baltics Retail",
        "logo": "🦅",
        "city": "Marijampolės",
        "address": "Aleksandravo k., 68100",
        "lat": 54.584837642,
        "lng": 23.374203461,
        "prices": {
            "A95": 1.719,
            "A98": null,
            "Diesel": 1.959,
            "LPG": 0.719
        },
        "id": 585
    },
    {
        "name": "AB Orlen Baltics Retail",
        "logo": "🦅",
        "city": "Kretingos",
        "address": "Vilimiškės k., 97220",
        "lat": 55.897758043,
        "lng": 21.111059747,
        "prices": {
            "A95": 1.819,
            "A98": null,
            "Diesel": 1.989,
            "LPG": 0.739
        },
        "id": 586
    },
    {
        "name": "AB Orlen Baltics Retail",
        "logo": "🦅",
        "city": "Klaipėda",
        "address": "Jakų k., Vilniaus pl. 13, 92498",
        "lat": 55.70783216772,
        "lng": 21.245789770617,
        "prices": {
            "A95": 1.769,
            "A98": null,
            "Diesel": 1.989,
            "LPG": 0.739
        },
        "id": 587
    },
    {
        "name": "AB Orlen Baltics Retail",
        "logo": "🦅",
        "city": "Klaipėda",
        "address": "Klaipėda, Šilutės pl. 94, 95264",
        "lat": 55.668149136784,
        "lng": 21.208650898751,
        "prices": {
            "A95": 1.749,
            "A98": null,
            "Diesel": 1.989,
            "LPG": 0.719
        },
        "id": 588
    },
    {
        "name": "AB Orlen Baltics Retail",
        "logo": "🦅",
        "city": "Klaipėda",
        "address": "Klaipėda, Šilutės pl. 26A, 91177",
        "lat": 55.698616307088,
        "lng": 21.167059057004,
        "prices": {
            "A95": 1.719,
            "A98": null,
            "Diesel": 1.959,
            "LPG": 0.719
        },
        "id": 589
    },
    {
        "name": "AB Orlen Baltics Retail",
        "logo": "🦅",
        "city": "Kaunas",
        "address": "Ringaudų k., Beržų g. 2N, 53335",
        "lat": 54.888635075134,
        "lng": 23.818573962813,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.739
        },
        "id": 590
    },
    {
        "name": "AB Orlen Baltics Retail",
        "logo": "🦅",
        "city": "Kaunas",
        "address": "Biruliškių k., 54469",
        "lat": 54.93622576,
        "lng": 23.997593029,
        "prices": {
            "A95": 1.719,
            "A98": null,
            "Diesel": 1.959,
            "LPG": 0.729
        },
        "id": 591
    },
    {
        "name": "AB Orlen Baltics Retail",
        "logo": "🦅",
        "city": "Kaunas",
        "address": "Kaunas, Veiverių g. 148B, 46392",
        "lat": 54.867244793506,
        "lng": 23.887541184149,
        "prices": {
            "A95": 1.779,
            "A98": null,
            "Diesel": 1.989,
            "LPG": 0.729
        },
        "id": 592
    },
    {
        "name": "AB Orlen Baltics Retail",
        "logo": "🦅",
        "city": "Kaunas",
        "address": "Kaunas, Kalvarijos g. 138, 46403",
        "lat": 54.85134625102,
        "lng": 23.843111649083,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.739
        },
        "id": 593
    },
    {
        "name": "AB Orlen Baltics Retail",
        "logo": "🦅",
        "city": "Kaišiadorių",
        "address": "Žiežmarių k., Kauno pl. 6, 56232",
        "lat": 54.816074322358,
        "lng": 24.433086991512,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.749
        },
        "id": 594
    },
    {
        "name": "AB Orlen Baltics Retail",
        "logo": "🦅",
        "city": "Elektrėnų",
        "address": "Kakliniškių k., Žilvičių g. 1A, 26138",
        "lat": 54.790815792415,
        "lng": 24.670561395898,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.749
        },
        "id": 595
    },
    {
        "name": "AB Orlen Baltics Retail",
        "logo": "🦅",
        "city": "Alytaus",
        "address": "Alytus, Kauno g. 73, 62107",
        "lat": 54.403324054742,
        "lng": 24.037087664025,
        "prices": {
            "A95": 1.719,
            "A98": null,
            "Diesel": 1.959,
            "LPG": 0.729
        },
        "id": 596
    },
    {
        "name": "AB Orlen Baltics Retail",
        "logo": "🦅",
        "city": "Klaipėda",
        "address": "Klaipėda, Minijos g. 44, 91197",
        "lat": 55.693860666684,
        "lng": 21.14027267375,
        "prices": {
            "A95": 1.749,
            "A98": null,
            "Diesel": 1.979,
            "LPG": 0.719
        },
        "id": 597
    },
    {
        "name": "AB Orlen Baltics Retail",
        "logo": "🦅",
        "city": "Kaunas",
        "address": "Kaunas, Pramonės pr. 37, 51271",
        "lat": 54.915921480821,
        "lng": 23.98421587608,
        "prices": {
            "A95": 1.719,
            "A98": null,
            "Diesel": 1.979,
            "LPG": 0.719
        },
        "id": 598
    },
    {
        "name": "AB Orlen Baltics Retail",
        "logo": "🦅",
        "city": "Mažeikių",
        "address": "Mažeikiai, Skuodo g. 14, 89100",
        "lat": 56.314427524951,
        "lng": 22.310927073616,
        "prices": {
            "A95": 1.719,
            "A98": null,
            "Diesel": 1.959,
            "LPG": 0.719
        },
        "id": 599
    },
    {
        "name": "AB Orlen Baltics Retail",
        "logo": "🦅",
        "city": "Kaunas",
        "address": "Kaunas, Varnių g. 50, 48401",
        "lat": 54.913838368335,
        "lng": 23.906968926968,
        "prices": {
            "A95": 1.729,
            "A98": null,
            "Diesel": 1.979,
            "LPG": 0.719
        },
        "id": 600
    },
    {
        "name": "AB Orlen Baltics Retail",
        "logo": "🦅",
        "city": "Mažeikių",
        "address": "Mažeikiai, Žemaitijos g. 42, 89239",
        "lat": 56.302177792556,
        "lng": 22.342526513311,
        "prices": {
            "A95": 1.719,
            "A98": null,
            "Diesel": 1.959,
            "LPG": 0.729
        },
        "id": 601
    },
    {
        "name": "AB Orlen Baltics Retail",
        "logo": "🦅",
        "city": "Tauragės",
        "address": "Tauragė, Gedimino g. 46, 72336",
        "lat": 55.244121647088,
        "lng": 22.304015859172,
        "prices": {
            "A95": 1.759,
            "A98": null,
            "Diesel": 1.959,
            "LPG": 0.719
        },
        "id": 602
    },
    {
        "name": "AB Orlen Baltics Retail",
        "logo": "🦅",
        "city": "Vilnius",
        "address": "Vilnius, Juodasis kl. 32, 11307",
        "lat": 54.657566330702,
        "lng": 25.381317113238,
        "prices": {
            "A95": 1.789,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.749
        },
        "id": 603
    },
    {
        "name": "AB Orlen Baltics Retail",
        "logo": "🦅",
        "city": "Vilnius",
        "address": "Vilnius, O. Milašiaus g. 31, 10102",
        "lat": 54.728138351221,
        "lng": 25.326863660164,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.739
        },
        "id": 604
    },
    {
        "name": "AB Orlen Baltics Retail",
        "logo": "🦅",
        "city": "Vilnius",
        "address": "Vilnius, Ukmergės g. 319, 06305",
        "lat": 54.736894925468,
        "lng": 25.231923519276,
        "prices": {
            "A95": 1.739,
            "A98": null,
            "Diesel": 1.989,
            "LPG": 0.729
        },
        "id": 605
    },
    {
        "name": "AB Orlen Baltics Retail",
        "logo": "🦅",
        "city": "Vilnius",
        "address": "Vilnius, Žirmūnų g. 1T, 09239",
        "lat": 54.695882985692,
        "lng": 25.29998029829,
        "prices": {
            "A95": 1.739,
            "A98": null,
            "Diesel": 1.989,
            "LPG": 0.729
        },
        "id": 606
    },
    {
        "name": "AB Orlen Baltics Retail",
        "logo": "🦅",
        "city": "Telšių",
        "address": "Telšiai, Plungės g. 33 D, 87329",
        "lat": 55.979230355462,
        "lng": 22.226647037187,
        "prices": {
            "A95": 1.779,
            "A98": null,
            "Diesel": 1.969,
            "LPG": 0.719
        },
        "id": 607
    },
    {
        "name": "AB Orlen Baltics Retail",
        "logo": "🦅",
        "city": "Šiaulių",
        "address": "Šiauliai, Serbentų g. 82, 77126",
        "lat": 55.913663756062,
        "lng": 23.337127083604,
        "prices": {
            "A95": 1.759,
            "A98": null,
            "Diesel": 1.969,
            "LPG": 0.719
        },
        "id": 608
    },
    {
        "name": "AB Orlen Baltics Retail",
        "logo": "🦅",
        "city": "Raseinių",
        "address": "Nemakščių apyl., Pikelių k. 6, 60375",
        "lat": 55.459363344488,
        "lng": 22.691527797079,
        "prices": {
            "A95": 1.849,
            "A98": null,
            "Diesel": 2.039,
            "LPG": 0.839
        },
        "id": 609
    },
    {
        "name": "AB Orlen Baltics Retail",
        "logo": "🦅",
        "city": "Raseinių",
        "address": "Pikelių k. 8, 60375",
        "lat": 55.459363344488,
        "lng": 22.691527797079,
        "prices": {
            "A95": 1.849,
            "A98": null,
            "Diesel": 2.039,
            "LPG": 0.839
        },
        "id": 610
    },
    {
        "name": "AB Orlen Baltics Retail",
        "logo": "🦅",
        "city": "Prienų",
        "address": "Verbyliškių k., Alytaus g. 2, 59431",
        "lat": 54.578846932658,
        "lng": 24.170503506516,
        "prices": {
            "A95": 1.769,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.739
        },
        "id": 611
    },
    {
        "name": "AB Orlen Baltics Retail",
        "logo": "🦅",
        "city": "Panevėžio",
        "address": "Nausodė, Šiaulių g. 50, 38366",
        "lat": 55.733870717573,
        "lng": 24.263500638429,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 2.019,
            "LPG": 0.739
        },
        "id": 612
    },
    {
        "name": "UAB Boost Petrol",
        "logo": "⛽",
        "city": "Molėtų",
        "address": "Smėlinkos vs. 1, 33171",
        "lat": 55.265755418135,
        "lng": 25.482754225472,
        "prices": {
            "A95": 1.85,
            "A98": null,
            "Diesel": 2.049,
            "LPG": 0.76
        },
        "id": 613
    },
    {
        "name": "UAB Boost Petrol",
        "logo": "⛽",
        "city": "Kelmės",
        "address": "Kelmė, Kęstučio g. 1B, 86139",
        "lat": 55.634763806888,
        "lng": 22.94546287644,
        "prices": {
            "A95": 1.859,
            "A98": null,
            "Diesel": 2.089,
            "LPG": 0.799
        },
        "id": 614
    },
    {
        "name": "UAB Boost Petrol",
        "logo": "⛽",
        "city": "Kelmės",
        "address": "Maironių k., Kuršių g. 2, 86203",
        "lat": 55.600505208411,
        "lng": 23.042750285493,
        "prices": {
            "A95": 1.85,
            "A98": null,
            "Diesel": 2.02,
            "LPG": 0.75
        },
        "id": 615
    },
    {
        "name": "UAB Boost Petrol",
        "logo": "⛽",
        "city": "Kelmės",
        "address": "Kuršukų k., Plento g. 1, 86120",
        "lat": 55.618127656923,
        "lng": 22.901743791486,
        "prices": {
            "A95": 1.889,
            "A98": null,
            "Diesel": 2.089,
            "LPG": 0.829
        },
        "id": 616
    },
    {
        "name": "UAB Boost Petrol",
        "logo": "⛽",
        "city": "Kaunas",
        "address": "Kaunas, Marvelės g. 132, 46230",
        "lat": 54.903978190806,
        "lng": 23.835469532681,
        "prices": {
            "A95": 1.879,
            "A98": null,
            "Diesel": 2.089,
            "LPG": 0.83
        },
        "id": 617
    },
    {
        "name": "UAB Boost Petrol",
        "logo": "⛽",
        "city": "Elektrėnų",
        "address": "Elektrėnai, Dubijos g. 36, 26130",
        "lat": 54.786266571285,
        "lng": 24.714645054597,
        "prices": {
            "A95": 1.889,
            "A98": null,
            "Diesel": 2.089,
            "LPG": 0.829
        },
        "id": 618
    },
    {
        "name": "UAB Boost Petrol",
        "logo": "⛽",
        "city": "Šiaulių",
        "address": "Ginkūnų k., Aušros g. 26, 81492",
        "lat": 55.956221654059,
        "lng": 23.342757124148,
        "prices": {
            "A95": 1.879,
            "A98": null,
            "Diesel": 2.089,
            "LPG": 0.799
        },
        "id": 619
    },
    {
        "name": "UAB Boost Petrol",
        "logo": "⛽",
        "city": "Utenos",
        "address": "Utena, Zarasų g. 9, 28216",
        "lat": 55.512401054386,
        "lng": 25.643881152218,
        "prices": {
            "A95": 1.839,
            "A98": null,
            "Diesel": 2.019,
            "LPG": 0.769
        },
        "id": 620
    },
    {
        "name": "UAB Antivis",
        "logo": "⛽",
        "city": "Kelmės",
        "address": "Tytuvėnai, Žemaitės g. 14, 86490",
        "lat": 55.594184121859,
        "lng": 23.179617711892,
        "prices": {
            "A95": 1.88,
            "A98": null,
            "Diesel": 2.06,
            "LPG": 0.79
        },
        "id": 621
    },
    {
        "name": "IĮ A. Praškevičiaus",
        "logo": "⛽",
        "city": "Kaišiadorių",
        "address": "Migonių k., Kalvių g. 4, 56292",
        "lat": 54.726075061935,
        "lng": 24.23633723717,
        "prices": {
            "A95": 1.75,
            "A98": null,
            "Diesel": 1.92,
            "LPG": 0.72
        },
        "id": 622
    },
    {
        "name": "UAB Melkasta",
        "logo": "⛽",
        "city": "Vilkaviškio",
        "address": "Gulbiniškių k. 7, 70481",
        "lat": 54.709194726588,
        "lng": 23.197102435947,
        "prices": {
            "A95": 1.75,
            "A98": null,
            "Diesel": 1.93,
            "LPG": 0.75
        },
        "id": 623
    },
    {
        "name": "UAB Melkasta",
        "logo": "⛽",
        "city": "Lazdijų",
        "address": "Kalvelių k., Lazdijų pl. 29, 67333",
        "lat": 54.106043765371,
        "lng": 23.673755882156,
        "prices": {
            "A95": 1.75,
            "A98": null,
            "Diesel": 1.96,
            "LPG": 0.75
        },
        "id": 624
    },
    {
        "name": "UAB Melkasta",
        "logo": "⛽",
        "city": "Lazdijų",
        "address": "Seirijai, Algirdo g. 35A, 67227",
        "lat": 54.23949958954,
        "lng": 23.823059370659,
        "prices": {
            "A95": 1.75,
            "A98": null,
            "Diesel": 1.96,
            "LPG": 0.75
        },
        "id": 625
    },
    {
        "name": "UAB Visvilas",
        "logo": "⛽",
        "city": "Mažeikių",
        "address": "Tirkšlių k., Laukų g. 2C, 89330",
        "lat": 56.258202263274,
        "lng": 22.309466443169,
        "prices": {
            "A95": 1.78,
            "A98": null,
            "Diesel": 1.95,
            "LPG": 0.69
        },
        "id": 626
    },
    {
        "name": "UAB Madalva",
        "logo": "⛽",
        "city": "Tauragės",
        "address": "Žygaičių k., Žygaičių g. 2, 73282",
        "lat": 55.303914246757,
        "lng": 22.041169266236,
        "prices": {
            "A95": 1.76,
            "A98": null,
            "Diesel": 1.92,
            "LPG": 0.66
        },
        "id": 627
    },
    {
        "name": "UAB Madalva",
        "logo": "⛽",
        "city": "Plungės",
        "address": "Plungė, Lentpjūvės g. 10A, 90118",
        "lat": 55.921497147494,
        "lng": 21.852634699015,
        "prices": {
            "A95": null,
            "A98": null,
            "Diesel": null,
            "LPG": 0.66
        },
        "id": 628
    },
    {
        "name": "UAB Madalva",
        "logo": "⛽",
        "city": "Šilalės",
        "address": "Gineikių k., 75445",
        "lat": 55.534530616,
        "lng": 22.496876234,
        "prices": {
            "A95": null,
            "A98": null,
            "Diesel": null,
            "LPG": 0.75
        },
        "id": 629
    },
    {
        "name": "UAB Madalva",
        "logo": "⛽",
        "city": "Tauragės",
        "address": "Tauragė, Dariaus ir Girėno g. 49, 72221",
        "lat": 55.258161334907,
        "lng": 22.294638688813,
        "prices": {
            "A95": null,
            "A98": null,
            "Diesel": null,
            "LPG": 0.66
        },
        "id": 630
    },
    {
        "name": "UAB Madalva",
        "logo": "⛽",
        "city": "Tauragės",
        "address": "Tauragė, Pramonės g. 10A, 72359",
        "lat": 55.236472657526,
        "lng": 22.296762243983,
        "prices": {
            "A95": null,
            "A98": null,
            "Diesel": null,
            "LPG": 0.66
        },
        "id": 631
    },
    {
        "name": "UAB Vildega",
        "logo": "⛽",
        "city": "Vilkaviškio",
        "address": "Vilkaviškis, Vytauto g. 2D, 70137",
        "lat": 54.643311144152,
        "lng": 23.053135044432,
        "prices": {
            "A95": 1.719,
            "A98": null,
            "Diesel": 1.929,
            "LPG": 0.71
        },
        "id": 632
    },
    {
        "name": "UAB Degta",
        "logo": "⛽",
        "city": "Anykščių",
        "address": "Anykščiai, Vienuolio g. 34A, 29148",
        "lat": 55.522518137248,
        "lng": 25.087942036375,
        "prices": {
            "A95": 1.669,
            "A98": null,
            "Diesel": 1.869,
            "LPG": 0.699
        },
        "id": 633
    },
    {
        "name": "UAB Degta",
        "logo": "⛽",
        "city": "Rokiškio",
        "address": "Rokiškis, Respublikos g. 113B, 42150",
        "lat": 55.947087642712,
        "lng": 25.590698311846,
        "prices": {
            "A95": 1.839,
            "A98": null,
            "Diesel": 1.973,
            "LPG": 0.839
        },
        "id": 634
    },
    {
        "name": "UAB Degta",
        "logo": "⛽",
        "city": "Elektrėnų",
        "address": "Vievis, Kauno g. 55A, 21371",
        "lat": 54.775244018424,
        "lng": 24.810488300775,
        "prices": {
            "A95": 1.899,
            "A98": null,
            "Diesel": 2.089,
            "LPG": 0.839
        },
        "id": 635
    },
    {
        "name": "UAB Littaura",
        "logo": "⛽",
        "city": "Tauragės",
        "address": "Tauragė, Pramonės g. 6, 72324",
        "lat": 55.238328788075,
        "lng": 22.297767904726,
        "prices": {
            "A95": 1.75,
            "A98": null,
            "Diesel": 1.94,
            "LPG": null
        },
        "id": 636
    },
    {
        "name": "UAB Deguva",
        "logo": "⛽",
        "city": "Kaunas",
        "address": "Kaunas, Raudondvario pl. 234, 47158",
        "lat": 54.920739775952,
        "lng": 23.826135445305,
        "prices": {
            "A95": null,
            "A98": null,
            "Diesel": null,
            "LPG": 0.75
        },
        "id": 637
    },
    {
        "name": "UAB Emsi",
        "logo": "🛢️",
        "city": "Šilutės",
        "address": "Šilutė, Gluosnių g. 4A, 99116",
        "lat": 55.34891542762,
        "lng": 21.468953248797,
        "prices": {
            "A95": 1.7,
            "A98": null,
            "Diesel": 1.9,
            "LPG": 0.7
        },
        "id": 638
    },
    {
        "name": "UAB Emsi",
        "logo": "🛢️",
        "city": "Marijampolės",
        "address": "Skaisčiūnų k., Europos g. 11, 69338",
        "lat": 54.558142458349,
        "lng": 23.27513008531,
        "prices": {
            "A95": 1.669,
            "A98": null,
            "Diesel": 1.819,
            "LPG": 0.689
        },
        "id": 639
    },
    {
        "name": "UAB Emsi",
        "logo": "🛢️",
        "city": "Klaipėda",
        "address": "Klaipėda, Taikos pr. 124, 94286",
        "lat": 55.661136878497,
        "lng": 21.176366825205,
        "prices": {
            "A95": 1.7,
            "A98": null,
            "Diesel": 1.9,
            "LPG": 0.7
        },
        "id": 640
    },
    {
        "name": "UAB Emsi",
        "logo": "🛢️",
        "city": "Vilnius",
        "address": "Vilnius, Gunkliškių g. 2F, 02231",
        "lat": 54.622819779731,
        "lng": 25.105362732478,
        "prices": {
            "A95": 1.709,
            "A98": null,
            "Diesel": 1.909,
            "LPG": 0.709
        },
        "id": 641
    },
    {
        "name": "UAB Emsi",
        "logo": "🛢️",
        "city": "Kaunas",
        "address": "Kaunas, Vandžiogalos pl. 86A, 47478",
        "lat": 54.951536313142,
        "lng": 23.893612699534,
        "prices": {
            "A95": 1.7,
            "A98": null,
            "Diesel": 1.9,
            "LPG": 0.7
        },
        "id": 642
    },
    {
        "name": "UAB Emsi",
        "logo": "🛢️",
        "city": "Vilkaviškio",
        "address": "Vilkaviškis, S. Nėries g. 38, 70165",
        "lat": 54.65812309862,
        "lng": 23.033138170388,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.899,
            "LPG": 0.71
        },
        "id": 643
    },
    {
        "name": "UAB Emsi",
        "logo": "🛢️",
        "city": "Kaunas",
        "address": "Žemaitkiemis, S. Krasausko g. 21, 54340",
        "lat": 54.97185144805,
        "lng": 23.859010610664,
        "prices": {
            "A95": 1.709,
            "A98": null,
            "Diesel": 1.909,
            "LPG": 0.709
        },
        "id": 644
    },
    {
        "name": "UAB Emsi",
        "logo": "🛢️",
        "city": "Kaišiadorių",
        "address": "Kaišiadorys, Paukštininkų g. 4a, 56160",
        "lat": 54.864365148761,
        "lng": 24.436501695046,
        "prices": {
            "A95": 1.719,
            "A98": null,
            "Diesel": 1.939,
            "LPG": 0.73
        },
        "id": 645
    },
    {
        "name": "UAB Emsi",
        "logo": "🛢️",
        "city": "Marijampolės",
        "address": "Pietarių k., Kauno g. 165, 68100",
        "lat": 54.592864073158,
        "lng": 23.389467123612,
        "prices": {
            "A95": 1.669,
            "A98": null,
            "Diesel": 1.819,
            "LPG": 0.689
        },
        "id": 646
    },
    {
        "name": "UAB Emsi",
        "logo": "🛢️",
        "city": "Vilnius",
        "address": "Vilnius, Pajautos g. 31, 06200",
        "lat": 54.710142614651,
        "lng": 25.162037306075,
        "prices": {
            "A95": 1.709,
            "A98": null,
            "Diesel": 1.909,
            "LPG": 0.7
        },
        "id": 647
    },
    {
        "name": "UAB Emsi",
        "logo": "🛢️",
        "city": "Radviliškio",
        "address": "Radviliškis, Miško g. 62, 77158",
        "lat": 55.801870751102,
        "lng": 23.564058813995,
        "prices": {
            "A95": 1.709,
            "A98": null,
            "Diesel": 1.909,
            "LPG": 0.7
        },
        "id": 648
    },
    {
        "name": "UAB Emsi",
        "logo": "🛢️",
        "city": "Panevėžio",
        "address": "Panevėžys, Ramygalos g. 186A, 36224",
        "lat": 55.710096748411,
        "lng": 24.372400755236,
        "prices": {
            "A95": 1.709,
            "A98": null,
            "Diesel": 1.909,
            "LPG": 0.7
        },
        "id": 649
    },
    {
        "name": "UAB Emsi",
        "logo": "🛢️",
        "city": "Raseinių",
        "address": "Raščių k. 1A, 60298",
        "lat": 55.278231175166,
        "lng": 23.340148864947,
        "prices": {
            "A95": 1.709,
            "A98": null,
            "Diesel": 1.909,
            "LPG": 0.709
        },
        "id": 650
    },
    {
        "name": "UAB Emsi",
        "logo": "🛢️",
        "city": "Trakų",
        "address": "Sausių k., Sausių g. 2, 21401",
        "lat": 54.707450808355,
        "lng": 24.996059697585,
        "prices": {
            "A95": 1.69,
            "A98": null,
            "Diesel": 1.89,
            "LPG": 0.69
        },
        "id": 651
    },
    {
        "name": "UAB Emsi",
        "logo": "🛢️",
        "city": "Vilnius",
        "address": "Vilnius, Savanorių pr. 225, 02300",
        "lat": 54.641043420248,
        "lng": 25.184203081384,
        "prices": {
            "A95": 1.709,
            "A98": null,
            "Diesel": 1.909,
            "LPG": 0.709
        },
        "id": 652
    },
    {
        "name": "UAB Emsi",
        "logo": "🛢️",
        "city": "Pasvalio",
        "address": "Sereikonių k., Baltijos kelio g. 2, 39236",
        "lat": 55.906393712343,
        "lng": 24.33866485224,
        "prices": {
            "A95": 1.719,
            "A98": null,
            "Diesel": 1.919,
            "LPG": 0.699
        },
        "id": 653
    },
    {
        "name": "UAB Emsi",
        "logo": "🛢️",
        "city": "Šiaulių",
        "address": "Šiauliai, Sembos g. 5, 78347",
        "lat": 55.898858632845,
        "lng": 23.271854940463,
        "prices": {
            "A95": 1.709,
            "A98": null,
            "Diesel": 1.909,
            "LPG": 0.7
        },
        "id": 654
    },
    {
        "name": "UAB Emsi",
        "logo": "🛢️",
        "city": "Panevėžio",
        "address": "Šilagalio k., Panevėžio aplinkl. 12, 38242",
        "lat": 55.669935990903,
        "lng": 24.346045788539,
        "prices": {
            "A95": 1.689,
            "A98": null,
            "Diesel": 1.839,
            "LPG": 0.709
        },
        "id": 655
    },
    {
        "name": "UAB Emsi",
        "logo": "🛢️",
        "city": "Vilnius",
        "address": "Vilnius, Laisvės pr. 80B, 06125",
        "lat": 54.723450394684,
        "lng": 25.23299053555,
        "prices": {
            "A95": 1.709,
            "A98": null,
            "Diesel": 1.909,
            "LPG": 0.709
        },
        "id": 656
    },
    {
        "name": "UAB Emsi",
        "logo": "🛢️",
        "city": "Lazdijų",
        "address": "Lazdijų sen., Janaslavo k. 11, 67170",
        "lat": 54.177757666024,
        "lng": 23.480960992091,
        "prices": {
            "A95": 1.649,
            "A98": null,
            "Diesel": 1.809,
            "LPG": null
        },
        "id": 657
    },
    {
        "name": "UAB Emsi",
        "logo": "🛢️",
        "city": "Trakų",
        "address": "Lentvaris, Sodų g. 3, 25117",
        "lat": 54.643385114448,
        "lng": 25.053258726864,
        "prices": {
            "A95": 1.7,
            "A98": null,
            "Diesel": 1.9,
            "LPG": 0.709
        },
        "id": 658
    },
    {
        "name": "UAB Emsi",
        "logo": "🛢️",
        "city": "Vilnius",
        "address": "Vilnius, Liepkalnio g. 112A, 02121",
        "lat": 54.652663965082,
        "lng": 25.30554311597,
        "prices": {
            "A95": 1.709,
            "A98": null,
            "Diesel": 1.909,
            "LPG": 0.7
        },
        "id": 659
    },
    {
        "name": "UAB Emsi",
        "logo": "🛢️",
        "city": "Kaunas",
        "address": "Kaunas, Armoniškių g. 31, 46401",
        "lat": 54.859333527017,
        "lng": 23.844984781785,
        "prices": {
            "A95": 1.689,
            "A98": null,
            "Diesel": 1.889,
            "LPG": 0.689
        },
        "id": 660
    },
    {
        "name": "UAB Emsi",
        "logo": "🛢️",
        "city": "Vilnius",
        "address": "Maišiagala, Mokyklos g. 26, 14243",
        "lat": 54.873246278089,
        "lng": 25.073407229536,
        "prices": {
            "A95": 1.729,
            "A98": null,
            "Diesel": 1.929,
            "LPG": 0.729
        },
        "id": 661
    },
    {
        "name": "UAB Emsi",
        "logo": "🛢️",
        "city": "Marijampolės",
        "address": "Marijampolė, Stoties g. 6B, 68110",
        "lat": 54.56495526925,
        "lng": 23.368437012363,
        "prices": {
            "A95": 1.709,
            "A98": null,
            "Diesel": 1.909,
            "LPG": 0.7
        },
        "id": 662
    },
    {
        "name": "UAB Emsi",
        "logo": "🛢️",
        "city": "Kaunas",
        "address": "Kaunas, T. Masiulio g. 16A, 52375",
        "lat": 54.885041753242,
        "lng": 24.004504105078,
        "prices": {
            "A95": 1.709,
            "A98": null,
            "Diesel": 1.909,
            "LPG": 0.709
        },
        "id": 663
    },
    {
        "name": "UAB Emsi",
        "logo": "🛢️",
        "city": "Kaunas",
        "address": "Mastaičių k., Marijampolės g. 58, 53285",
        "lat": 54.809435938862,
        "lng": 23.85366538719,
        "prices": {
            "A95": 1.709,
            "A98": null,
            "Diesel": 1.909,
            "LPG": 0.7
        },
        "id": 664
    },
    {
        "name": "UAB Emsi",
        "logo": "🛢️",
        "city": "Vilnius",
        "address": "Medininkų k., Pasieniečių g.10, 13192",
        "lat": 54.549583571288,
        "lng": 25.68001101058,
        "prices": {
            "A95": 1.809,
            "A98": null,
            "Diesel": 2.009,
            "LPG": null
        },
        "id": 665
    },
    {
        "name": "UAB Emsi",
        "logo": "🛢️",
        "city": "Klaipėda",
        "address": "Klaipėda, Minijos g. 154A, 93263",
        "lat": 55.668493926371,
        "lng": 21.159075964782,
        "prices": {
            "A95": 1.7,
            "A98": null,
            "Diesel": 1.9,
            "LPG": 0.7
        },
        "id": 666
    },
    {
        "name": "UAB Emsi",
        "logo": "🛢️",
        "city": "Kaunas",
        "address": "Kaunas, Savanorių pr. 402A, 49281",
        "lat": 54.92758146251,
        "lng": 23.972026577206,
        "prices": {
            "A95": 1.709,
            "A98": null,
            "Diesel": 1.909,
            "LPG": 0.709
        },
        "id": 667
    },
    {
        "name": "UAB Emsi",
        "logo": "🛢️",
        "city": "Vilnius",
        "address": "Kreivalaužių k., Taikos g. 1, 15166",
        "lat": 54.835693633573,
        "lng": 25.460300960327,
        "prices": {
            "A95": 1.7,
            "A98": null,
            "Diesel": 1.9,
            "LPG": 0.7
        },
        "id": 668
    },
    {
        "name": "UAB Emsi",
        "logo": "🛢️",
        "city": "Panevėžio",
        "address": "Panevėžys, Nemuno g. 79A, 35189",
        "lat": 55.731910986701,
        "lng": 24.340750856484,
        "prices": {
            "A95": 1.709,
            "A98": null,
            "Diesel": 1.909,
            "LPG": 0.709
        },
        "id": 669
    },
    {
        "name": "UAB Emsi",
        "logo": "🛢️",
        "city": "Kaunas",
        "address": "Kaunas, Palemono g. 3A, 52159",
        "lat": 54.901003788645,
        "lng": 24.031197952121,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.899,
            "LPG": null
        },
        "id": 670
    },
    {
        "name": "UAB Emsi",
        "logo": "🛢️",
        "city": "Pasvalio",
        "address": "Pasvalys, Taikos g. 24, 39132",
        "lat": 56.063680837892,
        "lng": 24.425772020792,
        "prices": {
            "A95": 1.709,
            "A98": null,
            "Diesel": 1.909,
            "LPG": 0.7
        },
        "id": 671
    },
    {
        "name": "UAB Emsi",
        "logo": "🛢️",
        "city": "Biržų",
        "address": "Biržai, Jaunimo g. 2a, 41168",
        "lat": 56.207636420712,
        "lng": 24.770750536011,
        "prices": {
            "A95": 1.709,
            "A98": null,
            "Diesel": 1.909,
            "LPG": 0.7
        },
        "id": 672
    },
    {
        "name": "UAB Emsi",
        "logo": "🛢️",
        "city": "Vilnius",
        "address": "Bukiškis, Ukmergės g. 437, 14183",
        "lat": 54.753604836182,
        "lng": 25.211752888379,
        "prices": {
            "A95": 1.709,
            "A98": null,
            "Diesel": 1.909,
            "LPG": 0.7
        },
        "id": 673
    },
    {
        "name": "UAB Emsi",
        "logo": "🛢️",
        "city": "Kaunas",
        "address": "Kaunas, Draugystės g. 8B, 51262",
        "lat": 54.908069565384,
        "lng": 23.992093859237,
        "prices": {
            "A95": 1.709,
            "A98": null,
            "Diesel": 1.909,
            "LPG": 0.709
        },
        "id": 674
    },
    {
        "name": "UAB Emsi",
        "logo": "🛢️",
        "city": "Vilnius",
        "address": "Vilnius, Spyglių g. 2, 27101",
        "lat": 54.670286831601,
        "lng": 25.121320386193,
        "prices": {
            "A95": 1.709,
            "A98": null,
            "Diesel": 1.909,
            "LPG": 0.709
        },
        "id": 675
    },
    {
        "name": "UAB Emsi",
        "logo": "🛢️",
        "city": "Kaunas",
        "address": "Ilgakiemio k., Kauno g. 25, 53288",
        "lat": 54.783719421729,
        "lng": 23.876424433606,
        "prices": {
            "A95": 1.709,
            "A98": null,
            "Diesel": 1.909,
            "LPG": 0.7
        },
        "id": 676
    },
    {
        "name": "UAB Emsi",
        "logo": "🛢️",
        "city": "Vilnius",
        "address": "Vilnius, Jeruzalės g. 2, 08414",
        "lat": 54.739869872453,
        "lng": 25.276166976092,
        "prices": {
            "A95": 1.709,
            "A98": null,
            "Diesel": 1.909,
            "LPG": 0.709
        },
        "id": 677
    },
    {
        "name": "UAB Emsi",
        "logo": "🛢️",
        "city": "Jonavos",
        "address": "Jonava, Vasario 16-osios g. 70, 55165",
        "lat": 55.07089293798,
        "lng": 24.258829068513,
        "prices": {
            "A95": 1.709,
            "A98": null,
            "Diesel": 1.909,
            "LPG": null
        },
        "id": 678
    },
    {
        "name": "UAB Emsi",
        "logo": "🛢️",
        "city": "Klaipėda",
        "address": "Jonušų k., Durpyno g. 63, 96173",
        "lat": 55.711660476267,
        "lng": 21.265068902292,
        "prices": {
            "A95": 1.709,
            "A98": null,
            "Diesel": 1.909,
            "LPG": 0.7
        },
        "id": 679
    },
    {
        "name": "UAB Emsi",
        "logo": "🛢️",
        "city": "Kėdainių",
        "address": "Juodgirio k. 1, 58212",
        "lat": 55.198990356,
        "lng": 23.625762619,
        "prices": {
            "A95": 1.819,
            "A98": null,
            "Diesel": 1.959,
            "LPG": 0.759
        },
        "id": 680
    },
    {
        "name": "UAB Emsi",
        "logo": "🛢️",
        "city": "Klaipėda",
        "address": "Kalotės k., Medelyno g. 126, 96332",
        "lat": 55.790221707798,
        "lng": 21.141633978645,
        "prices": {
            "A95": 1.7,
            "A98": null,
            "Diesel": 1.9,
            "LPG": 0.7
        },
        "id": 681
    },
    {
        "name": "UAB Emsi",
        "logo": "🛢️",
        "city": "Vilnius",
        "address": "Vilnius, Kareivių g. 4, 09109",
        "lat": 54.717899269759,
        "lng": 25.295686584569,
        "prices": {
            "A95": 1.709,
            "A98": null,
            "Diesel": 1.909,
            "LPG": 0.709
        },
        "id": 682
    },
    {
        "name": "UAB Emsi",
        "logo": "🛢️",
        "city": "Kaunas",
        "address": "Kaunas, Jonavos g. 292B, 44131",
        "lat": 54.932309903639,
        "lng": 23.917895408309,
        "prices": {
            "A95": 1.709,
            "A98": null,
            "Diesel": 1.909,
            "LPG": 0.7
        },
        "id": 683
    },
    {
        "name": "UAB Emsi",
        "logo": "🛢️",
        "city": "Vilnius",
        "address": "Vilnius, Kirtimų g. 33, 02300",
        "lat": 54.627379660787,
        "lng": 25.14931567253,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.899,
            "LPG": 0.699
        },
        "id": 684
    },
    {
        "name": "UAB Emsi",
        "logo": "🛢️",
        "city": "Alytaus",
        "address": "Alytus, Ūdrijos g. 2, 62402",
        "lat": 54.408333582994,
        "lng": 24.016312530272,
        "prices": {
            "A95": 1.7,
            "A98": null,
            "Diesel": 1.9,
            "LPG": 0.7
        },
        "id": 685
    },
    {
        "name": "UAB Emsi",
        "logo": "🛢️",
        "city": "Raseinių",
        "address": "Ariogala, Žemaičių g. 30, 60255",
        "lat": 55.260890482581,
        "lng": 23.488918656245,
        "prices": {
            "A95": 1.819,
            "A98": null,
            "Diesel": 1.959,
            "LPG": 0.739
        },
        "id": 686
    },
    {
        "name": "UAB Emsi",
        "logo": "🛢️",
        "city": "Kaunas",
        "address": "Kaunas, Ateities pl. 40B, 52112",
        "lat": 54.921870159415,
        "lng": 24.047374941431,
        "prices": {
            "A95": 1.709,
            "A98": null,
            "Diesel": 1.909,
            "LPG": null
        },
        "id": 687
    },
    {
        "name": "UAB Dujovita",
        "logo": "⛽",
        "city": "Kėdainių",
        "address": "Kėdainiai, Basanavičiaus g. 91E, 57356",
        "lat": 55.27800846625,
        "lng": 23.959992594998,
        "prices": {
            "A95": null,
            "A98": null,
            "Diesel": null,
            "LPG": 0.75
        },
        "id": 688
    },
    {
        "name": "UAB Autograndas",
        "logo": "⛽",
        "city": "Visagino",
        "address": "Visaginas, Taikos pr. 47, 31217",
        "lat": 55.590458407807,
        "lng": 26.463235405489,
        "prices": {
            "A95": 1.786,
            "A98": null,
            "Diesel": 1.943,
            "LPG": null
        },
        "id": 689
    },
    {
        "name": "UAB Dujovita",
        "logo": "⛽",
        "city": "Kaunas",
        "address": "Kaunas, Jonavos g. 110, 44136",
        "lat": 54.91360853655,
        "lng": 23.91202254403,
        "prices": {
            "A95": null,
            "A98": null,
            "Diesel": null,
            "LPG": 0.69
        },
        "id": 690
    },
    {
        "name": "UAB Dujovita",
        "logo": "⛽",
        "city": "Kaunas",
        "address": "Kaunas, Islandijos pl. 191D, 49170",
        "lat": 54.931511694999,
        "lng": 23.955047775039,
        "prices": {
            "A95": null,
            "A98": null,
            "Diesel": null,
            "LPG": 0.69
        },
        "id": 691
    },
    {
        "name": "UAB VVARFF",
        "logo": "⛽",
        "city": "Plungės",
        "address": "Truikių k., Pramogų g. 4, 90110",
        "lat": 55.938947054529,
        "lng": 21.880118121337,
        "prices": {
            "A95": 1.856,
            "A98": null,
            "Diesel": 2.046,
            "LPG": 0.826
        },
        "id": 692
    },
    {
        "name": "UAB Propano ir butano dujų centras",
        "logo": "⛽",
        "city": "Ignalinos",
        "address": "Ignalina, Švenčionių g. 35, 30132",
        "lat": 55.327196910664,
        "lng": 26.174464088946,
        "prices": {
            "A95": 1.889,
            "A98": null,
            "Diesel": 1.929,
            "LPG": 0.74
        },
        "id": 693
    },
    {
        "name": "UAB Propano ir butano dujų centras",
        "logo": "⛽",
        "city": "Švenčionių",
        "address": "Cirkliškio k., Aukštaičių g. 2A, 18122",
        "lat": 55.119948529229,
        "lng": 26.131276835749,
        "prices": {
            "A95": 1.86,
            "A98": null,
            "Diesel": 2.05,
            "LPG": 0.85
        },
        "id": 694
    },
    {
        "name": "UAB Alauša",
        "logo": "⛽",
        "city": "Vilnius",
        "address": "Vilnius, Šiaurės g. 39, 11110",
        "lat": 54.703463453196,
        "lng": 25.41579179718,
        "prices": {
            "A95": 1.669,
            "A98": null,
            "Diesel": 1.869,
            "LPG": 0.669
        },
        "id": 695
    },
    {
        "name": "UAB Alauša",
        "logo": "⛽",
        "city": "Vilnius",
        "address": "Grigiškės, Vilniaus g. 8, 27101",
        "lat": 54.677411492298,
        "lng": 25.07904246686,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.899,
            "LPG": 0.699
        },
        "id": 696
    },
    {
        "name": "UAB Alauša",
        "logo": "⛽",
        "city": "Utenos",
        "address": "Utena, Palijoniškio g. 1, 28183",
        "lat": 55.511886028346,
        "lng": 25.599999374524,
        "prices": {
            "A95": 1.669,
            "A98": null,
            "Diesel": 1.869,
            "LPG": 0.669
        },
        "id": 697
    },
    {
        "name": "UAB Alauša",
        "logo": "⛽",
        "city": "Ignalinos",
        "address": "Ignalina, Švenčionių g. 29A, 30132",
        "lat": 55.332132887716,
        "lng": 26.16724659976,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 1.899,
            "LPG": 0.729
        },
        "id": 698
    },
    {
        "name": "UAB Alauša",
        "logo": "⛽",
        "city": "Marijampolės",
        "address": "Marijampolė, Sporto g. 50A, 68110",
        "lat": 54.565969940539,
        "lng": 23.380467306534,
        "prices": {
            "A95": 1.669,
            "A98": null,
            "Diesel": 1.869,
            "LPG": null
        },
        "id": 699
    },
    {
        "name": "UAB Alauša",
        "logo": "⛽",
        "city": "Visagino",
        "address": "Visaginas, Kosmoso g. 3, 31142",
        "lat": 55.599254418909,
        "lng": 26.420027365172,
        "prices": {
            "A95": 1.759,
            "A98": null,
            "Diesel": 1.939,
            "LPG": 0.699
        },
        "id": 700
    },
    {
        "name": "UAB Alauša",
        "logo": "⛽",
        "city": "Vilnius",
        "address": "Vilnius, Buivydiškių g. 5, 07171",
        "lat": 54.710865092795,
        "lng": 25.240554532614,
        "prices": {
            "A95": 1.669,
            "A98": null,
            "Diesel": 1.869,
            "LPG": null
        },
        "id": 701
    },
    {
        "name": "UAB Alauša",
        "logo": "⛽",
        "city": "Šalčininkų",
        "address": "Skraičionys, Skraičionių g. 1, 17140",
        "lat": 54.20413051462,
        "lng": 25.621030659238,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.799
        },
        "id": 702
    },
    {
        "name": "UAB Alauša",
        "logo": "⛽",
        "city": "Kalvarijos",
        "address": "Salaperaugio k., Europos g. 17, 69286",
        "lat": 54.320436755344,
        "lng": 23.139958653199,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 1.999,
            "LPG": 0.799
        },
        "id": 703
    },
    {
        "name": "UAB Alauša",
        "logo": "⛽",
        "city": "Anykščių",
        "address": "Bajorų k., Šimonių g. 36, 29352",
        "lat": 55.684886665868,
        "lng": 25.353221057613,
        "prices": {
            "A95": 1.739,
            "A98": null,
            "Diesel": 1.949,
            "LPG": 0.779
        },
        "id": 704
    },
    {
        "name": "UAB Alauša",
        "logo": "⛽",
        "city": "Vilnius",
        "address": "Vilnius, Laisvės pr. 125A, 06118",
        "lat": 54.727835596878,
        "lng": 25.235623291338,
        "prices": {
            "A95": 1.669,
            "A98": null,
            "Diesel": 1.869,
            "LPG": null
        },
        "id": 705
    },
    {
        "name": "UAB Alauša",
        "logo": "⛽",
        "city": "Vilnius",
        "address": "Vilnius, Šv. Stepono g. 44, 01312",
        "lat": 54.669124011262,
        "lng": 25.278784812092,
        "prices": {
            "A95": 1.739,
            "A98": null,
            "Diesel": 1.899,
            "LPG": null
        },
        "id": 706
    },
    {
        "name": "UAB Alauša",
        "logo": "⛽",
        "city": "Šiaulių",
        "address": "Kairiai, Plento g. 2B, 80114",
        "lat": 55.920182320252,
        "lng": 23.425901245058,
        "prices": {
            "A95": 1.799,
            "A98": null,
            "Diesel": 1.989,
            "LPG": 0.699
        },
        "id": 707
    },
    {
        "name": "UAB Alauša",
        "logo": "⛽",
        "city": "Kaunas",
        "address": "Kaunas, Palemono g. 171, 52107",
        "lat": 54.923692678531,
        "lng": 24.068998659062,
        "prices": {
            "A95": null,
            "A98": null,
            "Diesel": 1.949,
            "LPG": null
        },
        "id": 708
    },
    {
        "name": "UAB Alauša",
        "logo": "⛽",
        "city": "Anykščių",
        "address": "Anykščiai, A. Vienuolio g. 32A, 29149",
        "lat": 55.522445801423,
        "lng": 25.090014713393,
        "prices": {
            "A95": 1.669,
            "A98": null,
            "Diesel": 1.869,
            "LPG": 0.669
        },
        "id": 709
    },
    {
        "name": "UAB Alauša",
        "logo": "⛽",
        "city": "Ukmergės",
        "address": "Ukmergė, Kauno g. 37, 20120",
        "lat": 55.244490450828,
        "lng": 24.750026783324,
        "prices": {
            "A95": 1.669,
            "A98": null,
            "Diesel": 1.869,
            "LPG": 0.669
        },
        "id": 710
    },
    {
        "name": "UAB Alauša",
        "logo": "⛽",
        "city": "Vilnius",
        "address": "Vilnius, Kalvarijų g. 204G, 08247",
        "lat": 54.72086327836,
        "lng": 25.284837216737,
        "prices": {
            "A95": 1.669,
            "A98": null,
            "Diesel": 1.869,
            "LPG": 0.669
        },
        "id": 711
    },
    {
        "name": "UAB Alauša",
        "logo": "⛽",
        "city": "Marijampolės",
        "address": "Marijampolė, Stoties g. 49, 68261",
        "lat": 54.562824715191,
        "lng": 23.366521663669,
        "prices": {
            "A95": 1.669,
            "A98": null,
            "Diesel": 1.869,
            "LPG": 0.669
        },
        "id": 712
    },
    {
        "name": "UAB Alauša",
        "logo": "⛽",
        "city": "Alytaus",
        "address": "Santaikos k., Santaikos g. 2A, 64283",
        "lat": 54.388342911558,
        "lng": 23.820264257407,
        "prices": {
            "A95": 1.669,
            "A98": null,
            "Diesel": 1.869,
            "LPG": 0.669
        },
        "id": 713
    },
    {
        "name": "UAB Alauša",
        "logo": "⛽",
        "city": "Utenos",
        "address": "Utena, J. Basanavičiaus g. 1C, 28134",
        "lat": 55.495520027119,
        "lng": 25.581640743456,
        "prices": {
            "A95": 1.669,
            "A98": null,
            "Diesel": 1.869,
            "LPG": 0.669
        },
        "id": 714
    },
    {
        "name": "UAB Alauša",
        "logo": "⛽",
        "city": "Vilnius",
        "address": "Vilnius, Kirtimų g. 23A, 02300",
        "lat": 54.651210291614,
        "lng": 25.150220498978,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.899,
            "LPG": 0.699
        },
        "id": 715
    },
    {
        "name": "UAB Alauša",
        "logo": "⛽",
        "city": "Širvintų",
        "address": "Paširvinčio k., Paširvio g. 1, 19128",
        "lat": 55.024590257101,
        "lng": 24.985641243395,
        "prices": {
            "A95": 1.669,
            "A98": null,
            "Diesel": 1.869,
            "LPG": 0.669
        },
        "id": 716
    },
    {
        "name": "UAB Alauša",
        "logo": "⛽",
        "city": "Utenos",
        "address": "Daugailių k., Plento g. 17, 28414",
        "lat": 55.594037899558,
        "lng": 25.833465888087,
        "prices": {
            "A95": 1.669,
            "A98": null,
            "Diesel": 1.869,
            "LPG": 0.669
        },
        "id": 717
    },
    {
        "name": "UAB Alauša",
        "logo": "⛽",
        "city": "Vilnius",
        "address": "Vilnius, Pelesos g. 1, 02161",
        "lat": 54.665560738493,
        "lng": 25.274983367545,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.899,
            "LPG": 0.699
        },
        "id": 718
    },
    {
        "name": "UAB Borusta",
        "logo": "⛽",
        "city": "Birštono",
        "address": "Birštonas, Prienų g. 14, 59219",
        "lat": 54.595451985763,
        "lng": 24.026724027482,
        "prices": {
            "A95": 1.749,
            "A98": null,
            "Diesel": 1.979,
            "LPG": 0.749
        },
        "id": 719
    },
    {
        "name": "UAB Borusta",
        "logo": "⛽",
        "city": "Trakų",
        "address": "Aukštadvaris, Vilniaus g. 2a, 21253",
        "lat": 54.577977938847,
        "lng": 24.521586561818,
        "prices": {
            "A95": 1.75,
            "A98": null,
            "Diesel": 1.98,
            "LPG": 0.7
        },
        "id": 720
    },
    {
        "name": "UAB Borusta",
        "logo": "⛽",
        "city": "Prienų",
        "address": "Stakliškės, Piliakalnio g. 3, 59370",
        "lat": 54.582242986458,
        "lng": 24.317723505347,
        "prices": {
            "A95": 1.729,
            "A98": null,
            "Diesel": 1.969,
            "LPG": 0.749
        },
        "id": 721
    },
    {
        "name": "Sigito Rimkevičiaus komercinė įmonė",
        "logo": "⛽",
        "city": "Kėdainių",
        "address": "Pelėdnagiai, Miškininkų g. 14, 58163",
        "lat": 55.25253154582,
        "lng": 23.96805539912,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.929,
            "LPG": 0.699
        },
        "id": 722
    },
    {
        "name": "Sigito Rimkevičiaus komercinė įmonė",
        "logo": "⛽",
        "city": "Joniškio",
        "address": "Joniškis, Turgaus g. 3, 84172",
        "lat": 56.228952145311,
        "lng": 23.610132627008,
        "prices": {
            "A95": 1.699,
            "A98": null,
            "Diesel": 1.929,
            "LPG": 0.709
        },
        "id": 723
    },
    {
        "name": "UAB Atsiauta",
        "logo": "⛽",
        "city": "Šiaulių",
        "address": "Kuršėnai, Vytauto g. 80, 81146",
        "lat": 56.014834584675,
        "lng": 22.951216382417,
        "prices": {
            "A95": 1.81,
            "A98": null,
            "Diesel": 1.98,
            "LPG": 0.79
        },
        "id": 724
    },
    {
        "name": "UAB Prie Luksto",
        "logo": "⛽",
        "city": "Telšių",
        "address": "Telšiai, Masčio g. 21, 87139",
        "lat": 55.975694659155,
        "lng": 22.263550629031,
        "prices": {
            "A95": 1.875,
            "A98": null,
            "Diesel": 2.065,
            "LPG": 0.759
        },
        "id": 725
    },
    {
        "name": "UAB Bonsa",
        "logo": "⛽",
        "city": "Tauragės",
        "address": "Taurai, Tilžės pl. 46, 72142",
        "lat": 55.24243164586,
        "lng": 22.249876811285,
        "prices": {
            "A95": 1.719,
            "A98": null,
            "Diesel": 1.959,
            "LPG": 0.66
        },
        "id": 726
    },
    {
        "name": "UAB Bonsa",
        "logo": "⛽",
        "city": "Tauragės",
        "address": "Vaidatonių k. 1, 73406",
        "lat": 55.469221296573,
        "lng": 22.678345606502,
        "prices": {
            "A95": 1.82,
            "A98": null,
            "Diesel": 1.95,
            "LPG": 0.69
        },
        "id": 727
    },
    {
        "name": "UAB Plungės lagūna",
        "logo": "⛽",
        "city": "Rietavo",
        "address": "Rietavas, Plungės g. 32, 90313",
        "lat": 55.735023690264,
        "lng": 21.924138619529,
        "prices": {
            "A95": 1.864,
            "A98": null,
            "Diesel": 2.085,
            "LPG": 0.812
        },
        "id": 728
    },
    {
        "name": "UAB Andopas",
        "logo": "⛽",
        "city": "Šilutės",
        "address": "Šilutė, Ramučių g. 43, 99150",
        "lat": 55.358862525485,
        "lng": 21.503372528359,
        "prices": {
            "A95": 1.731,
            "A98": null,
            "Diesel": 1.921,
            "LPG": 0.721
        },
        "id": 729
    },
    {
        "name": "UAB Tumasa",
        "logo": "⛽",
        "city": "Mažeikių",
        "address": "Židikai, Mažeikių g. 10, 89442",
        "lat": 56.317634441106,
        "lng": 22.013592553331,
        "prices": {
            "A95": 1.8,
            "A98": null,
            "Diesel": 1.95,
            "LPG": 0.89
        },
        "id": 730
    },
    {
        "name": "UAB GM Manufacturing Lithuania",
        "logo": "⛽",
        "city": "Šakių",
        "address": "Girėnų k., Kauno g. 68, 71129",
        "lat": 54.952746576142,
        "lng": 23.083420872261,
        "prices": {
            "A95": 1.897,
            "A98": null,
            "Diesel": 2.047,
            "LPG": 0.877
        },
        "id": 731
    },
    {
        "name": "UAB GM Manufacturing Lithuania",
        "logo": "⛽",
        "city": "Jurbarko",
        "address": "Jurbarkas, Muitinės g. 34A, 74106",
        "lat": 55.076804400923,
        "lng": 22.752030344099,
        "prices": {
            "A95": 1.897,
            "A98": null,
            "Diesel": 2.047,
            "LPG": null
        },
        "id": 732
    },
    {
        "name": "IĮ M.Augustinaičio",
        "logo": "⛽",
        "city": "Kėdainių",
        "address": "Šingalių k., Kėdainių g. 44, 58185",
        "lat": 55.249597837799,
        "lng": 23.851864116197,
        "prices": {
            "A95": 1.88,
            "A98": null,
            "Diesel": 2.02,
            "LPG": 0.83
        },
        "id": 733
    }
];