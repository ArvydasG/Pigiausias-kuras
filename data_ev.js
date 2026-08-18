const evStationsData = [
    {
        "name": "🔌 L3 | Inbalance grid",
        "address": "Laisvės pr. 3",
        "city": "Vilnius",
        "lat": 54.674557,
        "lng": 25.224355,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.29
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 ParkInn 2 | Inbalance grid",
        "address": "Oreivių g. 32",
        "city": "Vilnius",
        "lat": 54.647383,
        "lng": 25.276497,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.23
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.23€/kWh"
    },
    {
        "name": "🔌 ParkInn 1 | Inbalance grid",
        "address": "Oreivių g. 32",
        "city": "Vilnius",
        "lat": 54.647383,
        "lng": 25.276497,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.23
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.23€/kWh"
    },
    {
        "name": "🔌 IKI, Kuršėnai - Vilniaus | Inbalance grid",
        "address": "Vilniaus g. 40",
        "city": "Kuršėnai",
        "lat": 56.000003,
        "lng": 22.949172,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.23
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.23€/kWh"
    },
    {
        "name": "🔌 IKI, Karaliaučius | Inbalance grid",
        "address": "Karaliaučiaus g. 9D",
        "city": "Vilnius",
        "lat": 54.708034,
        "lng": 25.173332,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.23
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.23€/kWh"
    },
    {
        "name": "🔌 Saulės miestas | Inbalance grid",
        "address": "Tilžės str. 109",
        "city": "Šiauliai",
        "lat": 55.928224,
        "lng": 23.30767,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.32
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.32€/kWh"
    },
    {
        "name": "🔌 Live Square | Inbalance grid",
        "address": "Gedimino av. 44a",
        "city": "Vilnius",
        "lat": 54.688587,
        "lng": 25.26777,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.29
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 Domus Pro | Inbalance grid",
        "address": "Ukmergės g. 308-1",
        "city": "Vilnius",
        "lat": 54.739521,
        "lng": 25.225258,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.23
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.23€/kWh"
    },
    {
        "name": "🔌 IKI, Palanga - Žvejų | Inbalance grid",
        "address": "Žvejų g. 35",
        "city": "Palanga",
        "lat": 55.925045,
        "lng": 21.07178,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.23
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.23€/kWh"
    },
    {
        "name": "🔌 Maxima, Moravai | Inbalance grid",
        "address": "Moravų g. 7",
        "city": "Vilnius",
        "lat": 54.650601,
        "lng": 25.323812,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.23
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.23€/kWh"
    },
    {
        "name": "🔌 Impuls Asanavičiūtė | Inbalance grid",
        "address": "L. Asanavičiūtės str. 15",
        "city": "Vilnius",
        "lat": 54.689301,
        "lng": 25.209903,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.29
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 RYO Panevėžys 1 | Inbalance grid",
        "address": "Vakarinė str. 61",
        "city": "Panevėžys",
        "lat": 55.728167,
        "lng": 24.315097,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.23
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.23€/kWh"
    },
    {
        "name": "🔌 Intero GYM | Inbalance grid",
        "address": "Respublikos str. 47a",
        "city": "Panevėžys",
        "lat": 55.734447,
        "lng": 24.356161,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.23
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.23€/kWh"
    },
    {
        "name": "🔌 IKI, Baltija | Inbalance grid",
        "address": "Baltijos str. 59",
        "city": "Kaunas",
        "lat": 54.919757,
        "lng": 23.879346,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.23
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.23€/kWh"
    },
    {
        "name": "🔌 Pervaža Hotel | Inbalance grid",
        "address": "Smėlynės str. 112",
        "city": "Panevėžys",
        "lat": 55.745173,
        "lng": 24.371571,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.23
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.23€/kWh"
    },
    {
        "name": "🔌 Maxima, V. Grybo g. | Inbalance grid",
        "address": "V. Grybo str. 21",
        "city": "Vilnius",
        "lat": 54.703967,
        "lng": 25.316411,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.23
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.23€/kWh"
    },
    {
        "name": "🔌 Maxima, Taikos g. | Inbalance grid",
        "address": "Taikos g. 162A",
        "city": "Vilnius",
        "lat": 54.712411,
        "lng": 25.215461,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.23
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.23€/kWh"
    },
    {
        "name": "🔌 IKI, Romainiai 2 | Inbalance grid",
        "address": "Vieškeliuko str. 8",
        "city": "Kauno raj.",
        "lat": 54.933029,
        "lng": 23.817051,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.23
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.23€/kWh"
    },
    {
        "name": "🔌 North Star | Inbalance grid",
        "address": "Ulonų str. 2",
        "city": "Vilnius",
        "lat": 54.708529,
        "lng": 25.29028,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.23
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.23€/kWh"
    },
    {
        "name": "🔌 IKI, Kėdainiai | Inbalance grid",
        "address": "Rasos str. 1",
        "city": "Kėdainiai",
        "lat": 55.280213,
        "lng": 23.95494,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.23
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.23€/kWh"
    },
    {
        "name": "🔌 Green hall",
        "address": "Studentų g. 47, Vilnius, Lithuania",
        "city": "Vilnius",
        "lat": 54.695675,
        "lng": 25.257707,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (43.0kW), CHADEMO (45.0kW) - 0.27€/kWh, IEC_62196_T2_COMBO (45.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 Decathlon Klaipėda",
        "address": "Baltijos pr. 26a, Klaipėda, Lithuania",
        "city": "Klaipėda",
        "lat": 55.685762,
        "lng": 21.154105,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.32
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (150.0kW) - 0.32€/kWh"
    },
    {
        "name": "🔌 Hesburger Elektrėnai",
        "address": "Sabališkių g. 1G, Elektrėnai, Lithuania",
        "city": "Elektrėnai",
        "lat": 54.789133,
        "lng": 24.676967,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "CHADEMO (50.0kW) - 0.29€/kWh, IEC_62196_T2 (22.0kW) - 0.24€/kWh, IEC_62196_T2_COMBO (150.0kW) - 0.39€/kWh"
    },
    {
        "name": "🔌 Hesburger Ramučiai",
        "address": "Vijoklių g. 1C, 54468 Ramučiai, Lithuania",
        "city": "Ramučiai",
        "lat": 54.94807,
        "lng": 24.017943,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.31
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW), IEC_62196_T2_COMBO (165.0kW) - 0.31€/kWh"
    },
    {
        "name": "🔌 Hesburger Veiveriai",
        "address": "Veiverių g. 142E, Kaunas, Lithuania",
        "city": "Kaunas",
        "lat": 54.871432,
        "lng": 23.888986,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.21
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (150.0kW) - 0.31€/kWh, CHADEMO (50.0kW) - 0.25€/kWh, IEC_62196_T2 (22.0kW) - 0.21€/kWh"
    },
    {
        "name": "🔌 Opera",
        "address": "J. Lelevelio g. 6, Vilnius, Lithuania",
        "city": "Vilnius",
        "lat": 54.68852,
        "lng": 25.278455,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.29
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (60.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 Ozo parkas",
        "address": "Ozo g. 14, Vilnius, Lithuania",
        "city": "Vilnius",
        "lat": 54.717045,
        "lng": 25.282209,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (60.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 Rimi Molėtų pl. (out of order)",
        "address": "Molėtų pl. 49, Vilnius, Lithuania",
        "city": "Vilnius",
        "lat": 54.773609,
        "lng": 25.272413,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (43.0kW), CHADEMO (45.0kW) - 0.27€/kWh, IEC_62196_T2_COMBO (45.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 Baltupių turgus",
        "address": "Didlaukio g. 80, 08321 Vilnius, Lithuania",
        "city": "Vilnius",
        "lat": 54.729457,
        "lng": 25.270717,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (43.0kW), CHADEMO (45.0kW) - 0.27€/kWh, IEC_62196_T2_COMBO (45.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 Rimi Jeruzalė",
        "address": "Jeruzalės g. 2, Vilnius, Lithuania",
        "city": "Vilnius",
        "lat": 54.740739,
        "lng": 25.275899,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (60.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 IKI Saulėtekis",
        "address": "Saulėtekio al. 43, Vilnius, Lithuania",
        "city": "Vilnius",
        "lat": 54.724843,
        "lng": 25.342029,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (43.0kW), CHADEMO (45.0kW) - 0.27€/kWh, IEC_62196_T2_COMBO (45.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 IKI Pavilnys",
        "address": "Juodasis kl. 35A, Vilnius, Lithuania",
        "city": "Vilnius",
        "lat": 54.662336,
        "lng": 25.342797,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (43.0kW), CHADEMO (45.0kW) - 0.27€/kWh, IEC_62196_T2_COMBO (45.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 IKI Grigiškės",
        "address": "Kovo 11-osios g. 39b, Grigiškės, Lithuania",
        "city": "Grigiškės",
        "lat": 54.669595,
        "lng": 25.095702,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (43.0kW), CHADEMO (45.0kW) - 0.27€/kWh, IEC_62196_T2_COMBO (45.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 Litexpo",
        "address": "Parodų g. 1, Vilnius, Lithuania",
        "city": "Vilnius",
        "lat": 54.677911,
        "lng": 25.225464,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.21
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (43.0kW) - 0.21€/kWh, IEC_62196_T2_COMBO (45.0kW) - 0.25€/kWh, CHADEMO (45.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 Maxima Vydūno g.",
        "address": "Vydūno g. 27, 06208 Vilnius, Lithuania",
        "city": "Vilnius",
        "lat": 54.707169,
        "lng": 25.175433,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.21
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (43.0kW) - 0.21€/kWh, IEC_62196_T2_COMBO (45.0kW) - 0.25€/kWh, CHADEMO (45.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 Rimi Karoliniškės",
        "address": "L. Asanavičiūtės g. 20/2, Vilnius, Lithuania",
        "city": "Vilnius",
        "lat": 54.685284,
        "lng": 25.205705,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (43.0kW), CHADEMO (45.0kW) - 0.27€/kWh, IEC_62196_T2_COMBO (45.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 Šeškinės g. 59",
        "address": "Šeškinės g. 59A, Vilnius, Lithuania",
        "city": "Vilnius",
        "lat": 54.71679,
        "lng": 25.245092,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (43.0kW), CHADEMO (45.0kW) - 0.27€/kWh, IEC_62196_T2_COMBO (45.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 Helios City (coming soon)",
        "address": "Savanorių pr. 1, Vilnius, Lithuania",
        "city": "Vilnius",
        "lat": 54.679763,
        "lng": 25.258412,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.29
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2_COMBO (60.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 Antakalnio klinikos",
        "address": "Klinikų g. 3, 10326 Vilnius, Lithuania",
        "city": "Vilnius",
        "lat": 54.708627,
        "lng": 25.314418,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (60.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 Bernardinų sodas (out of order)",
        "address": "Maironio g. 2, Vilnius, Lithuania",
        "city": "Vilnius",
        "lat": 54.684983,
        "lng": 25.293418,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "CHADEMO (45.0kW) - 0.29€/kWh, IEC_62196_T2_COMBO (45.0kW) - 0.29€/kWh, IEC_62196_T2 (43.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Halės turgus",
        "address": "Pylimo g. 58, Vilnius, Lithuania",
        "city": "Vilnius",
        "lat": 54.673985,
        "lng": 25.285425,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (60.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 Maxima Nemenčinės pl.",
        "address": "Nemenčinės pl. 33, Vilnius, Lithuania",
        "city": "Vilnius",
        "lat": 54.734441,
        "lng": 25.338063,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.29
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (60.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 Vilniaus oro uostas",
        "address": "F. Vaitkaus g. 1, Vilnius, Lithuania",
        "city": "Vilnius",
        "lat": 54.643,
        "lng": 25.27473,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (43.0kW), CHADEMO (45.0kW) - 0.27€/kWh, IEC_62196_T2_COMBO (45.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 Rimi Žirmūnai",
        "address": "Žirmūnų g. 64, Vilnius, Lithuania",
        "city": "Vilnius",
        "lat": 54.711443,
        "lng": 25.304257,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (60.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 Maxima Savanorių pr.",
        "address": "Savanorių pr. 46, Vilnius, Lithuania",
        "city": "Vilnius",
        "lat": 54.673299,
        "lng": 25.248064,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (43.0kW), CHADEMO (45.0kW) - 0.27€/kWh, IEC_62196_T2_COMBO (45.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 Karoliniškių poliklinika",
        "address": "L. Asanavičiūtės g. 27a, Vilnius, Lithuania",
        "city": "Vilnius",
        "lat": 54.692091,
        "lng": 25.215671,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (43.0kW), CHADEMO (45.0kW) - 0.27€/kWh, IEC_62196_T2_COMBO (45.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 Norfa Fabijoniškės",
        "address": "Ateities g. 91, Vilnius, Lithuania",
        "city": "Vilnius",
        "lat": 54.730837,
        "lng": 25.247003,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (43.0kW), CHADEMO (45.0kW) - 0.27€/kWh, IEC_62196_T2_COMBO (45.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 Maxima Gabijos g.",
        "address": "Gabijos g. 30, Vilnius, Lithuania",
        "city": "Vilnius",
        "lat": 54.73482,
        "lng": 25.221149,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (43.0kW), CHADEMO (45.0kW) - 0.27€/kWh, IEC_62196_T2_COMBO (45.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 Norfa Justiniškės",
        "address": "Justiniškių g. 91A, Vilnius, Lithuania",
        "city": "Vilnius",
        "lat": 54.717007,
        "lng": 25.223126,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (43.0kW), CHADEMO (45.0kW) - 0.27€/kWh, IEC_62196_T2_COMBO (45.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 KUBAS",
        "address": "Žemynos g. 18, Vilnius, Lithuania",
        "city": "Vilnius",
        "lat": 54.727296,
        "lng": 25.233539,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (60.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 Santaros klinikos",
        "address": "P. Baublio g. 3B, Vilnius, Lithuania",
        "city": "Vilnius",
        "lat": 54.753079,
        "lng": 25.283143,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.29
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (60.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 IKI Vilnius",
        "address": "Žirmūnų g. 2A, Vilnius, Lithuania",
        "city": "Vilnius",
        "lat": 54.697691,
        "lng": 25.299954,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (43.0kW), CHADEMO (45.0kW) - 0.27€/kWh, IEC_62196_T2_COMBO (45.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 Skraja",
        "address": "Naugarduko g. 55A, Vilnius, Lithuania",
        "city": "Vilnius",
        "lat": 54.67073,
        "lng": 25.259723,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (60.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 Verslo trikampis",
        "address": "J. Jasinskio g. 16B, Vilnius, Lithuania",
        "city": "Vilnius",
        "lat": 54.686201,
        "lng": 25.259266,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.21
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (43.0kW) - 0.21€/kWh, IEC_62196_T2_COMBO (45.0kW) - 0.25€/kWh, CHADEMO (45.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 Verslo centras BH-92",
        "address": "Žalgirio g. 92, 09300 Vilnius, Lithuania",
        "city": "Vilnius",
        "lat": 54.704065,
        "lng": 25.276658,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (43.0kW), CHADEMO (45.0kW) - 0.27€/kWh, IEC_62196_T2_COMBO (45.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 Lazdynų ligoninė",
        "address": "Šiltnamių g. 29, Vilnius, Lithuania",
        "city": "Vilnius",
        "lat": 54.669338,
        "lng": 25.210091,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (60.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 Rūdininkų skveras",
        "address": "Rudininkų g. 18, Vilnius, Lithuania",
        "city": "Vilnius",
        "lat": 54.676315,
        "lng": 25.284128,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (60.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 Verslo centras Quadrum",
        "address": "Konstitucijos pr. 23, Vilnius, Lithuania",
        "city": "Vilnius",
        "lat": 54.698074,
        "lng": 25.269643,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (60.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 Santuokų rūmai",
        "address": "J. Basanavičiaus g. 27, Vilnius, Lithuania",
        "city": "Vilnius",
        "lat": 54.682287,
        "lng": 25.268939,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.29
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (100.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 ERGO",
        "address": "Geležinio Vilko g. 6A, Vilnius, Lithuania",
        "city": "Vilnius",
        "lat": 54.671264,
        "lng": 25.237688,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (43.0kW), CHADEMO (45.0kW) - 0.27€/kWh, IEC_62196_T2_COMBO (45.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 Tymo turgus",
        "address": "O. Šimaitės g. 1, Vilnius, Lithuania",
        "city": "Vilnius",
        "lat": 54.678535,
        "lng": 25.293155,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2_COMBO (60.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 Užupio skveras",
        "address": "Užupio g. 30, Vilnius, Lithuania",
        "city": "Vilnius",
        "lat": 54.681055,
        "lng": 25.298629,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (60.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 Vynoteka Balsiai",
        "address": "Žaliųjų Ežerų g. 138, Vilnius, Lithuania",
        "city": "Vilnius",
        "lat": 54.776811,
        "lng": 25.336447,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (43.0kW), CHADEMO (45.0kW) - 0.27€/kWh, IEC_62196_T2_COMBO (45.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 Autocentras \"Žibintas\"",
        "address": "Savanorių pr. 217, Vilnius, Lithuania",
        "city": "Vilnius",
        "lat": 54.643896,
        "lng": 25.20017,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (43.0kW), CHADEMO (45.0kW) - 0.27€/kWh, IEC_62196_T2_COMBO (45.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 Maxima Naujoji Vilnia",
        "address": "S. Batoro g. 43, Vilnius, Lithuania",
        "city": "Vilnius",
        "lat": 54.692641,
        "lng": 25.409646,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (43.0kW), CHADEMO (45.0kW) - 0.27€/kWh, IEC_62196_T2_COMBO (45.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 Spaudos rūmai",
        "address": "Laisvės pr. 60, Vilnius, Lithuania",
        "city": "Vilnius",
        "lat": 54.703397,
        "lng": 25.222999,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (43.0kW), CHADEMO (45.0kW) - 0.27€/kWh, IEC_62196_T2_COMBO (45.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 Panorama",
        "address": "Saltoniškių g. 12, Vilnius, Lithuania",
        "city": "Vilnius",
        "lat": 54.698989,
        "lng": 25.259298,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.29
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (60.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 Forum Palace",
        "address": "Konstitucijos pr. 26A, Vilnius, Lithuania",
        "city": "Vilnius",
        "lat": 54.698125,
        "lng": 25.265701,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (43.0kW), CHADEMO (45.0kW) - 0.27€/kWh, IEC_62196_T2_COMBO (45.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 CUP",
        "address": "Upės g. 9, Vilnius, Lithuania",
        "city": "Vilnius",
        "lat": 54.693937,
        "lng": 25.274845,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (60.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 Akropolis",
        "address": "Ozo gatvė 25, Vilnius, Lithuania",
        "city": "Vilnius",
        "lat": 54.709983,
        "lng": 25.263963,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Business stadium",
        "address": "Rinktinės g. 5, Vilnius, Lithuania",
        "city": "Vilnius",
        "lat": 54.69348,
        "lng": 25.28931,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.21
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.21€/kWh"
    },
    {
        "name": "🔌 Business Garden",
        "address": "Laisvės prospektas 10, Vilnius, Lithuania",
        "city": "Vilnius",
        "lat": 54.67268,
        "lng": 25.221588,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.29
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (11.0kW) - 0.29€/kWh, IEC_62196_T2 (22.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 Kirtimų logistikos centras | Partneris",
        "address": "Kirtimų g. 47, Vilnius, Lithuania",
        "city": "Vilnius",
        "lat": 54.626448,
        "lng": 25.148601,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.21
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.21€/kWh"
    },
    {
        "name": "🔌 Savanorių pr. 180B | Partneris",
        "address": "Savanorių pr. 180B, Vilnius, Lithuania",
        "city": "Vilnius",
        "lat": 54.648798,
        "lng": 25.216219,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.25
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 Narbutas | Partneris",
        "address": "Žiedo g. 14, Ukmergė, Lithuania",
        "city": "Ukmergė",
        "lat": 55.251926,
        "lng": 24.741014,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.29
        },
        "ev_status": "Laisva",
        "ev_connectors": "CHADEMO (45.0kW) - 0.37€/kWh, IEC_62196_T2 (43.0kW) - 0.29€/kWh, IEC_62196_T2_COMBO (45.0kW) - 0.37€/kWh, IEC_62196_T2 (22.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 Kevigus | Partneris",
        "address": "Vilniaus g. 61A, Pasvalys Lithuania",
        "city": "Pasvalys",
        "lat": 56.056279,
        "lng": 24.408532,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.0
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW)"
    },
    {
        "name": "🔌 Kaltanėnų dvaras | Partneris",
        "address": "Geležinkelio 1, Kaltanėnai, Lithuania",
        "city": "Kaltanėnai",
        "lat": 55.252508,
        "lng": 25.984492,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.0
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (11.0kW)"
    },
    {
        "name": "🔌 Lazdijų raj. savivaldybė",
        "address": "Vilniaus g. 1, Lazdijai, Lithuania",
        "city": "Lazdijai",
        "lat": 54.234961,
        "lng": 23.516836,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.0
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW)"
    },
    {
        "name": "🔌 Hesburger Kantališkiai",
        "address": "Naujoji g. 14, Kantališkių k., Sasnavos sen.,",
        "city": "Kantališkių k.",
        "lat": 54.634313,
        "lng": 23.435676,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (150.0kW) - 0.31€/kWh, IEC_62196_T2 (22.0kW), CHADEMO (50.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 Hesburger Islandijos pl.",
        "address": "Islandijos pl. 63, Kaunas, Lithuania",
        "city": "Kaunas",
        "lat": 54.933476,
        "lng": 23.964654,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "CHADEMO (50.0kW) - 0.29€/kWh, IEC_62196_T2 (22.0kW) - 0.24€/kWh, IEC_62196_T2_COMBO (150.0kW) - 0.39€/kWh"
    },
    {
        "name": "🔌 Nordika",
        "address": "Vikingų g. 3, Vilnius, Lithuania",
        "city": "Vilnius",
        "lat": 54.653257,
        "lng": 25.278897,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (150.0kW) - 0.32€/kWh, CHADEMO (50.0kW) - 0.29€/kWh, IEC_62196_T2 (22.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 IONITY GmbH IONITY Garliava",
        "address": "Baltijos g. 1",
        "city": "Mastaičiai",
        "lat": 54.819096,
        "lng": 23.857515,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.44
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (350.0kW) - 0.44€/kWh, IEC_62196_T2_COMBO (250.0kW) - 0.44€/kWh"
    },
    {
        "name": "🔌 IONITY GmbH IONITY Kryzkalnis",
        "address": "Dvaro g. 3",
        "city": "Bijotų",
        "lat": 55.48423,
        "lng": 22.58733,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.44
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (350.0kW) - 0.44€/kWh"
    },
    {
        "name": "🔌 IONITY GmbH IONITY Aplinkkelis",
        "address": "Circle K Aplinkkelis 2",
        "city": "Aplinkkelis",
        "lat": 55.67309,
        "lng": 24.33591,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.44
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (350.0kW) - 0.44€/kWh"
    },
    {
        "name": "🔌 HBH Palanga",
        "address": "Liepų gatvė, Žibininkai 97231, Lithuania",
        "city": "Žibininkai",
        "lat": 55.959649,
        "lng": 21.145219,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.29
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 Europa Royale Druskininkai",
        "address": "Vilniaus Ave 7, Druskininkai 66119, Lithuania",
        "city": "Druskininkai",
        "lat": 54.021702,
        "lng": 23.976271,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.29
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 Medical SPA \"Eglės sanatorjia\" Druskininkai",
        "address": "Eglės st. 1, 66251 Druskininkai, Lithuania",
        "city": "Druskininkai",
        "lat": 54.020457,
        "lng": 24.011829,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.08
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.08€/kWh"
    },
    {
        "name": "🔌 IKI, Aleksotas | Inbalance grid",
        "address": "Veiverių str. 150a",
        "city": "Kaunas",
        "lat": 54.862625,
        "lng": 23.886146,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.23
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.23€/kWh"
    },
    {
        "name": "🔌 IKI, Antakalnis | Inbalance grid",
        "address": "Nemenčinės pl. 2",
        "city": "Vilnius",
        "lat": 54.724469,
        "lng": 25.319892,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.23
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.23€/kWh"
    },
    {
        "name": "🔌 IKI, Jovaras | Inbalance grid",
        "address": "S. Stanevičiaus str. 23",
        "city": "Vilnius",
        "lat": 54.724124,
        "lng": 25.254698,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.23
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.23€/kWh"
    },
    {
        "name": "🔌 IKI, Kretinga - Akmenos | Inbalance grid",
        "address": "Šventosios str. 54A",
        "city": "Kretinga",
        "lat": 55.895632,
        "lng": 21.237244,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.23
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.23€/kWh"
    },
    {
        "name": "🔌 IKI Mindaugo | Inbalance grid",
        "address": "Mindaugo str. 25",
        "city": "Vilnius",
        "lat": 54.673479,
        "lng": 25.274997,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.23
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.23€/kWh"
    },
    {
        "name": "🔌 IKI, Palanga | Inbalance grid",
        "address": "Taikos str. 68a",
        "city": "Palanga",
        "lat": 55.919826,
        "lng": 21.080537,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.23
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.23€/kWh"
    },
    {
        "name": "🔌 IKI, Pašilaičiai | Inbalance grid",
        "address": "Gabijos str. 36",
        "city": "Vilnius",
        "lat": 54.736402,
        "lng": 25.223762,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.23
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.23€/kWh"
    },
    {
        "name": "🔌 IKI, Pavilnys | Inbalance grid",
        "address": "Juodasis kl  35a",
        "city": "Vilnius",
        "lat": 54.66196,
        "lng": 25.341908,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.23
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.23€/kWh"
    },
    {
        "name": "🔌 IKI, Pilaitė 2 | Inbalance grid",
        "address": "Pilaitės av. 42",
        "city": "Vilnius",
        "lat": 54.708925,
        "lng": 25.185525,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.23
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.23€/kWh"
    },
    {
        "name": "🔌 Rokana | Inbalance grid",
        "address": "Jaunystės str. 1",
        "city": "Rokiškis",
        "lat": 55.949439,
        "lng": 25.589054,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.23
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.23€/kWh"
    },
    {
        "name": "🔌 IKI, Vėtrungė | Inbalance grid",
        "address": "Taikos av. 28",
        "city": "Klaipėda",
        "lat": 55.698239,
        "lng": 21.14728,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.23
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.23€/kWh"
    },
    {
        "name": "🔌 IKI, Visoriai | Inbalance grid",
        "address": "Bajorų kl. 4",
        "city": "Vilnius",
        "lat": 54.754353,
        "lng": 25.261888,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.23
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.23€/kWh"
    },
    {
        "name": "🔌 IKI, Zujūnai | Inbalance grid",
        "address": "Žalioji str. 22a",
        "city": "Vilnius",
        "lat": 54.730699,
        "lng": 25.183814,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.23
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.23€/kWh"
    },
    {
        "name": "🔌 Klaipėdos Akropolis 2 | Inbalance grid",
        "address": "Taikos av. 61",
        "city": "Klaipėda",
        "lat": 55.692983,
        "lng": 21.153567,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.23
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.23€/kWh"
    },
    {
        "name": "🔌 KMZ Kačerginė | Inbalance grid",
        "address": "J.Janonio g. 31",
        "city": "Kačerginė",
        "lat": 54.932492,
        "lng": 23.712308,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.43
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (21.0kW) - 0.43€/kWh"
    },
    {
        "name": "🔌 KMZ Mastaičiai | Inbalance grid",
        "address": "Mokslo g. 2a",
        "city": "Mastaičiai",
        "lat": 54.825422,
        "lng": 23.840087,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.43
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.43€/kWh"
    },
    {
        "name": "🔌 KMZ Zapiškis | Inbalance grid",
        "address": "Bažnyčios gatvė 4",
        "city": "Kluoniškiai",
        "lat": 54.926196,
        "lng": 23.648714,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.43
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.43€/kWh"
    },
    {
        "name": "🔌 MAXIMA, Naugarduko g. | Inbalance grid",
        "address": "Naugarduko g. 84",
        "city": "Vilnius",
        "lat": 54.66979,
        "lng": 25.259845,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.23
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.23€/kWh"
    },
    {
        "name": "🔌 PC Ozas | Inbalance grid",
        "address": "Ozo g. 18",
        "city": "Vilnius",
        "lat": 54.7146,
        "lng": 25.275903,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.33
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.33€/kWh"
    },
    {
        "name": "🔌 Peugeot Vilnius",
        "address": "Ukmergės g. 300, Vilnius 06146, Lithuania",
        "city": "Vilnius",
        "lat": 54.738308,
        "lng": 25.227683,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.314
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.31€/kWh"
    },
    {
        "name": "🔌 Opel | Peugeot Kaunas",
        "address": "Savanorių pr. 404G, Kaunas 50301, Lithuania",
        "city": "Kaunas",
        "lat": 54.929417,
        "lng": 23.97631,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.314
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.31€/kWh"
    },
    {
        "name": "🔌 Verslo Centras Z3",
        "address": "L. Zamenhofo g. 3, Vilnius, Lithuania",
        "city": "Vilnius",
        "lat": 54.738757,
        "lng": 25.231877,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2066
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.21€/kWh"
    },
    {
        "name": "🔌 Guest house \"Dvi Nidos\"",
        "address": "Taikos str. 16, Nida 93127, Lithuania",
        "city": "Nida",
        "lat": 55.304432,
        "lng": 21.002383,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.37
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.37€/kWh"
    },
    {
        "name": "🔌 IKI, Dembava 6 | Inbalance grid",
        "address": "Vilniaus st. 60",
        "city": "Panevėžys",
        "lat": 55.727709,
        "lng": 24.379881,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.23
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.23€/kWh"
    },
    {
        "name": "🔌 CITY Business Center Parking Lot",
        "address": "Žalgirio g. 90, Vilnius 09300, Lithuania",
        "city": "Vilnius",
        "lat": 54.703683,
        "lng": 25.27815,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.21
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.21€/kWh"
    },
    {
        "name": "🔌 Vitransa",
        "address": "Vilniaus pl. 8, 94105 Klaipėda, Lithuania",
        "city": "Klaipėda",
        "lat": 55.694578,
        "lng": 21.18912,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.1653
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.17€/kWh"
    },
    {
        "name": "🔌 Kontininkų g. 3C, Palanga",
        "address": "Kontininkų g. 3, 00171 Palanga, Lithuania",
        "city": "Palanga",
        "lat": 55.947996,
        "lng": 21.077768,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2893
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 Naujapilis",
        "address": "Žeimenos g. 147, 49329 Kaunas, Lithuania",
        "city": "Kaunas",
        "lat": 54.923524,
        "lng": 23.919218,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.36
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.36€/kWh"
    },
    {
        "name": "🔌 Siesta Restoranas | Inbalance grid",
        "address": "Pakrantės g. 4",
        "city": "Vareikonių k., Kauno r.",
        "lat": 55.106162,
        "lng": 23.780163,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.32
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (300.0kW) - 0.32€/kWh"
    },
    {
        "name": "🔌 Porsche Vilnius | Inbalance grid",
        "address": "Dariaus ir Girėno str. 15",
        "city": "Vilnius",
        "lat": 54.656483,
        "lng": 25.269363,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.32
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (320.0kW) - 0.32€/kWh"
    },
    {
        "name": "🔌 Light House | Inbalance grid",
        "address": "Liepų str. 83",
        "city": "Klaipėda",
        "lat": 55.725006,
        "lng": 21.15713,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.23
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.23€/kWh"
    },
    {
        "name": "🔌 IKI, Kuršiai | Inbalance grid",
        "address": "Kuršių str. 44",
        "city": "Kaunas",
        "lat": 54.935376,
        "lng": 23.897449,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.23
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.23€/kWh"
    },
    {
        "name": "🔌 IKI, Pavasaris | Inbalance grid",
        "address": "Jonažolių str. 1",
        "city": "Vilnius",
        "lat": 54.667514,
        "lng": 25.214618,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.23
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.23€/kWh"
    },
    {
        "name": "🔌 IKI, Breslaujos | Inbalance grid",
        "address": "Breslaujos str. 3A",
        "city": "Kaunas",
        "lat": 54.893998,
        "lng": 23.954225,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.23
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.23€/kWh"
    },
    {
        "name": "🔌 IKI, Venta | Inbalance grid",
        "address": "Ventos str. 10b",
        "city": "Mažeikiai",
        "lat": 56.308802,
        "lng": 22.324359,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.23
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.23€/kWh"
    },
    {
        "name": "🔌 Hesburger Panevėžio apl.",
        "address": "Panevėžio aplinkelis 7, Šilagalio km., Panevė",
        "city": "Šilagalio km.",
        "lat": 55.670733,
        "lng": 24.348588,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (150.0kW) - 0.32€/kWh, CHADEMO (50.0kW) - 0.29€/kWh, IEC_62196_T2 (22.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Hesburger Baltų pr.",
        "address": "Baltų pr. 12, Kaunas, Lithuania",
        "city": "Kaunas",
        "lat": 54.930534,
        "lng": 23.884813,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (150.0kW) - 0.32€/kWh, IEC_62196_T2 (22.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Hesburger Murava",
        "address": "Savanorių 441, Kaunas, Lithuania",
        "city": "Kaunas",
        "lat": 54.928865,
        "lng": 23.971852,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.32
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (150.0kW) - 0.32€/kWh"
    },
    {
        "name": "🔌 EIKA | Inbalance grid",
        "address": "A. Goštauto g. 40A",
        "city": "Vilnius",
        "lat": 54.686014,
        "lng": 25.259348,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.23
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.23€/kWh"
    },
    {
        "name": "🔌 IKI, Taikos | Inbalance grid",
        "address": "Taikos av. 81",
        "city": "Kaunas",
        "lat": 54.912718,
        "lng": 23.969877,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.23
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.23€/kWh"
    },
    {
        "name": "🔌 IKI, Topolis | Inbalance grid",
        "address": "Sukilėlių pr. 84",
        "city": "Kaunas",
        "lat": 54.92533,
        "lng": 23.929597,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.23
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.23€/kWh"
    },
    {
        "name": "🔌 Inovatorių slėnis",
        "address": "M. Reinio g. 2, Antalieptė, Zarasų raj., Lith",
        "city": "Antalieptė",
        "lat": 55.660268,
        "lng": 25.86663,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (11.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Rimi Minijos g.",
        "address": "Minijos g. 153, 93185 Klaipėda, Lithuania",
        "city": "Klaipėda",
        "lat": 55.676199,
        "lng": 21.157431,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.25
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (120.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 Maxima Rūdės g.",
        "address": "Rūdės g. 14, Šiauliai, Lithuania",
        "city": "Šiauliai",
        "lat": 55.927594,
        "lng": 23.317494,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (150.0kW) - 0.32€/kWh, IEC_62196_T2 (22.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Lidl Palanga Klaipėdos",
        "address": "Klaipėdos plentas 59",
        "city": "Palanga",
        "lat": 55.919007,
        "lng": 21.078606,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.3
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (50.0kW) - 0.36€/kWh, IEC_62196_T2 (22.0kW) - 0.30€/kWh, CHADEMO (50.0kW) - 0.36€/kWh"
    },
    {
        "name": "🔌 Lidl Vilnius Gariūnai",
        "address": "Gariūnų gatvė 66",
        "city": "Vilnius",
        "lat": 54.65875,
        "lng": 25.157398,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.3
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (50.0kW) - 0.36€/kWh, CHADEMO (50.0kW) - 0.36€/kWh, IEC_62196_T2 (22.0kW) - 0.30€/kWh"
    },
    {
        "name": "🔌 Lidl Rokiskis Respublikos",
        "address": "Respublikos gatvė 113",
        "city": "Rokiškis",
        "lat": 55.949368,
        "lng": 25.590141,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.3
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (50.0kW) - 0.36€/kWh, IEC_62196_T2 (22.0kW) - 0.30€/kWh, CHADEMO (50.0kW) - 0.36€/kWh"
    },
    {
        "name": "🔌 Lidl Nemenčinė",
        "address": "Vilniaus g. 42",
        "city": "Nemenčinė",
        "lat": 54.8409,
        "lng": 25.4681,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.3
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2_COMBO (50.0kW) - 0.36€/kWh, IEC_62196_T2 (22.0kW) - 0.30€/kWh, CHADEMO (50.0kW) - 0.36€/kWh"
    },
    {
        "name": "🔌 Lidl Vilnius Salininkai",
        "address": "Barčių g. 1",
        "city": null,
        "lat": 54.60488,
        "lng": 25.260642,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.3
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (50.0kW) - 0.36€/kWh, CHADEMO (50.0kW) - 0.36€/kWh, IEC_62196_T2 (22.0kW) - 0.30€/kWh"
    },
    {
        "name": "🔌 Lidl Alytus Likiškėliai",
        "address": "Likiškėlių gatvė 31",
        "city": "Alytus",
        "lat": 54.388736,
        "lng": 24.026934,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.3
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (50.0kW) - 0.36€/kWh, CHADEMO (50.0kW) - 0.36€/kWh, IEC_62196_T2 (22.0kW) - 0.30€/kWh"
    },
    {
        "name": "🔌 Lidl Kaunas Vijukai",
        "address": "B. Brazdžionio gatvė 23",
        "city": "Kaunas",
        "lat": 54.934638,
        "lng": 23.862863,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.3
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2_COMBO (50.0kW) - 0.36€/kWh, IEC_62196_T2 (22.0kW) - 0.30€/kWh, CHADEMO (50.0kW) - 0.36€/kWh"
    },
    {
        "name": "🔌 Lidl Vilnius Karoliniškės II",
        "address": "L. Asanavičiūtės gatvė 1",
        "city": "Vilnius",
        "lat": 54.682143,
        "lng": 25.196194,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.3
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (50.0kW) - 0.36€/kWh, IEC_62196_T2 (22.0kW) - 0.30€/kWh, CHADEMO (50.0kW) - 0.36€/kWh"
    },
    {
        "name": "🔌 PLTZARDBU1_EDLT-106",
        "address": "D. Bukonto gatvė 1",
        "city": "Zarasai",
        "lat": 55.730655,
        "lng": 26.243786,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.44
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (150.0kW) - 0.44€/kWh, CHADEMO (100.0kW) - 0.44€/kWh"
    },
    {
        "name": "🔌 Kaunas Ringaudai",
        "address": "Obelynės gatvė 1",
        "city": "Kaunas",
        "lat": 54.890693,
        "lng": 23.805844,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.3
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (50.0kW) - 0.36€/kWh, IEC_62196_T2 (22.0kW) - 0.30€/kWh, CHADEMO (50.0kW) - 0.36€/kWh"
    },
    {
        "name": "🔌 Medical SPA \"Eglės sanatorija\" Birštonas",
        "address": "Algirdo g. 22, 59204 Birštonas, Lithuania",
        "city": "Birštonas",
        "lat": 54.610331,
        "lng": 24.031907,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.08
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.08€/kWh"
    },
    {
        "name": "🔌 Šviesos g. 2A, Palanga",
        "address": "Šviesos g. 2, 00324 Palanga, Lithuania",
        "city": "Palanga",
        "lat": 56.003356,
        "lng": 21.078336,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2893
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 EV charger | Traidenio g. 6",
        "address": "Traidenio g. 6, 19172 Kernavė, Lithuania",
        "city": "Kernavė",
        "lat": 54.887724,
        "lng": 24.851376,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.0
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW)"
    },
    {
        "name": "🔌 Žirmūnai Business Center",
        "address": "Žirmūnų g. 139A, 09120 Vilnius, Lithuania",
        "city": "Vilnius",
        "lat": 54.724561,
        "lng": 25.296688,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.37
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.37€/kWh"
    },
    {
        "name": "🔌 PLTKLASR15_EDLT-11",
        "address": "Šiaurės prospektas 15",
        "city": "Klaipėda",
        "lat": 55.727512,
        "lng": 21.141586,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.44
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (100.0kW) - 0.51€/kWh, IEC_62196_T2_COMBO (50.0kW) - 0.44€/kWh, CHADEMO (50.0kW) - 0.44€/kWh, CHADEMO (75.0kW) - 0.51€/kWh"
    },
    {
        "name": "🔌 Hesburger Gariūnai",
        "address": "Gariūnų akligatvis 4, Vilnius, Lithuania",
        "city": "Vilnius",
        "lat": 54.659222,
        "lng": 25.161694,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.32
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (400.0kW) - 0.32€/kWh"
    },
    {
        "name": "🔌 Hesburger Užubaliai",
        "address": "Senasis Ukmergės kl. 8, Avizieniai, Lithuania",
        "city": "Avižieniai",
        "lat": 54.769683,
        "lng": 25.194346,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.29
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (150.0kW) - 0.32€/kWh, CHADEMO (50.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 PLTSILUOS9_EDLT-14",
        "address": "Uosto gatvė 9",
        "city": "Šilutė",
        "lat": 55.339825,
        "lng": 21.452299,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.51
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.51€/kWh"
    },
    {
        "name": "🔌 PLTKINTV10_EDLT-13",
        "address": "Tvenkinių gatvė 10",
        "city": "Povilai",
        "lat": 55.399963,
        "lng": 21.286281,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.51
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.51€/kWh"
    },
    {
        "name": "🔌 IKI, Minijos | Inbalance grid",
        "address": "Minijos g. 100",
        "city": "Klaipėda",
        "lat": 55.68294,
        "lng": 21.149131,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.23
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.23€/kWh"
    },
    {
        "name": "🔌 Nidos prieplauka | Inbalance grid",
        "address": "Taikos g. 1",
        "city": "Nida",
        "lat": 55.302749,
        "lng": 21.008735,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.23
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.23€/kWh"
    },
    {
        "name": "🔌 Kempingas \"Zarasai\"",
        "address": "Kauno g. 67, Zarasai, Lithuania",
        "city": "Zarasai",
        "lat": 55.719146,
        "lng": 26.222606,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.21
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.21€/kWh"
    },
    {
        "name": "🔌 P. Širvio g. 6",
        "address": "P. Širvio g. 6, Zarasai, Lithuania",
        "city": "Zarasai",
        "lat": 55.737849,
        "lng": 26.265278,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.0
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW)"
    },
    {
        "name": "🔌 P. Lukšio g. 18, Vilnius",
        "address": "P. Lukšio g. 18, Vilnius",
        "city": "Vilnius",
        "lat": 54.7126889,
        "lng": 25.2906789,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.3775
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.38€/kWh"
    },
    {
        "name": "🔌 Karalienės Barboros al. 2, Birštonas",
        "address": "Karalienės Barboros al. 2, Birštonas",
        "city": "Birštonas",
        "lat": 54.6106404,
        "lng": 24.0198316,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.35
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.35€/kWh"
    },
    {
        "name": "🔌 Jovarų g. 2, Kaunas",
        "address": "Jovarų g. 2, Kaunas",
        "city": "Kaunas",
        "lat": 54.9100323,
        "lng": 23.841871,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.39
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.39€/kWh"
    },
    {
        "name": "🔌 Liepų g. 38, Klaipėda",
        "address": "Liepų g. 38, Klaipėda",
        "city": "Klaipėda",
        "lat": 55.714005,
        "lng": 21.1400816,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.29
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 Liepų g. 38, Klaipėda",
        "address": "Liepų g. 38, Klaipėda",
        "city": "Klaipėda",
        "lat": 55.7140037,
        "lng": 21.1400739,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.29
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 Vyskupo skv. 1, Anykščiai",
        "address": "Vyskupo skv. 1, Anykščiai",
        "city": "Anykščiai",
        "lat": 55.5249916,
        "lng": 25.1029085,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.35
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.35€/kWh"
    },
    {
        "name": "🔌 Dvarioniu  1, Dvarioniu km",
        "address": "Dvarioniu  1, Dvarioniu km",
        "city": "Dvarioniu km",
        "lat": 55.4850053,
        "lng": 25.0588163,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.35
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.35€/kWh"
    },
    {
        "name": "🔌 J. Biliūno g. 23, Anykščiai",
        "address": "J. Biliūno g. 23, Anykščiai",
        "city": "Anykščiai",
        "lat": 55.5258583,
        "lng": 25.1120385,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.35
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.35€/kWh"
    },
    {
        "name": "🔌 J. Jasinskio g. 14, Vilnius",
        "address": "J. Jasinskio g. 14, Vilnius",
        "city": "Vilnius",
        "lat": 54.6870629,
        "lng": 25.2625597,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.0
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW)"
    },
    {
        "name": "🔌 J. Jasinskio g. 14, Vilnius",
        "address": "J. Jasinskio g. 14, Vilnius",
        "city": "Vilnius",
        "lat": 54.6870164,
        "lng": 25.2625221,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.0
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW)"
    },
    {
        "name": "🔌 J. Jasinskio g. 14, Vilnius",
        "address": "J. Jasinskio g. 14, Vilnius",
        "city": "Vilnius",
        "lat": 54.6869916,
        "lng": 25.2625329,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.0
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW)"
    },
    {
        "name": "🔌 J. Jasinskio g. 14, Vilnius",
        "address": "J. Jasinskio g. 14, Vilnius",
        "city": "Vilnius",
        "lat": 54.6870226,
        "lng": 25.2625114,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.0
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (22.0kW)"
    },
    {
        "name": "🔌 P. Širvio g. 32",
        "address": "P. Širvio g. 32, Zarasai, Lithuania",
        "city": "Zarasai",
        "lat": 55.739498,
        "lng": 26.264375,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.0
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW)"
    },
    {
        "name": "🔌 Vaikų darželis \"Lakštingala\"",
        "address": "Dariaus ir Girėno g. 30A, Zarasai, Lithuania",
        "city": "Zarasai",
        "lat": 55.734415,
        "lng": 26.247278,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.0
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW)"
    },
    {
        "name": "🔌 Zarasų savivaldybės administracija",
        "address": "Sėlių a. 22-24, Zarasai, Lithuania",
        "city": "Zarasai",
        "lat": 55.732245,
        "lng": 26.246853,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.0
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW)"
    },
    {
        "name": "🔌 Antazavės dvaras",
        "address": "Dvaro g. 4, Antazavės k., Zarasų r., Lithuani",
        "city": "Antazavės k.",
        "lat": 55.810072,
        "lng": 25.925889,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 PLTKINKU35_EDLT-12",
        "address": "Kuršių gatvė 35",
        "city": "Kintai",
        "lat": 55.412706,
        "lng": 21.259689,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.51
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.51€/kWh"
    },
    {
        "name": "🔌 Dvarionių 1, Dvarionių km.",
        "address": "Dvarionių 1, Dvarionių km.",
        "city": "Dvarionių km.",
        "lat": 55.4850387,
        "lng": 25.058827,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.35
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.35€/kWh"
    },
    {
        "name": "🔌 Vilniaus g. 8",
        "address": "Vilniaus g. 8, Zarasai, Lithuania",
        "city": "Zarasai",
        "lat": 55.732493,
        "lng": 26.254532,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.0
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW)"
    },
    {
        "name": "🔌 Maxima Veiverių g.",
        "address": "Veiverių pr. 150B, Kaunas, Lithuania",
        "city": "Kaunas",
        "lat": 54.865655,
        "lng": 23.887512,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (150.0kW) - 0.31€/kWh, IEC_62196_T2 (22.0kW), CHADEMO (50.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 P. Širvio g. 24",
        "address": "P. Širvio g. 24, Zarasai, Lithuania",
        "city": "Zarasai",
        "lat": 55.738415,
        "lng": 26.264754,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.0
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW)"
    },
    {
        "name": "🔌 Zarasų autobusų stotis",
        "address": "Vilniaus g. 28, Zarasai, Lithuania",
        "city": "Zarasai",
        "lat": 55.735471,
        "lng": 26.250275,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.0
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW)"
    },
    {
        "name": "🔌 PLTKELDV54_EDLT-18",
        "address": "Dvaro gatvė 54",
        "city": "Pakėvis",
        "lat": 55.682077,
        "lng": 22.824157,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.51
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.51€/kWh"
    },
    {
        "name": "🔌 Rimi Ketvergiai",
        "address": "Klaipėdos g. 48, Klaipėdos r. sav., Dovilų se",
        "city": "Klaipėdos r. sav.",
        "lat": 55.644801,
        "lng": 21.283409,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW), IEC_62196_T2_COMBO (120.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 „Lūna“ pramogų centras",
        "address": "Mokyklos g. 1, Mokolai, 68461 Marijampolės sa",
        "city": "Mokolai",
        "lat": 54.569608,
        "lng": 23.338727,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.0
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (22.0kW)"
    },
    {
        "name": "🔌 Lentvario g. 1. DC | Inbalance grid",
        "address": "Lentvario str. 1",
        "city": "Vilnius",
        "lat": 54.641514,
        "lng": 25.175734,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.16
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (63.0kW) - 0.16€/kWh"
    },
    {
        "name": "🔌 IKI, Stumbras | Inbalance grid",
        "address": "Aukštaičių str. 4",
        "city": "Panevėžys",
        "lat": 55.721738,
        "lng": 24.366259,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.23
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.23€/kWh"
    },
    {
        "name": "🔌 Dusetų dailės galerija",
        "address": "Vytauto g. 54, Dusetos, Lithuania",
        "city": "Dusetos",
        "lat": 55.750687,
        "lng": 25.842419,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Vytauto g. 46A",
        "address": "Vytauto g. 46A, Zarasai, Lithuania",
        "city": "Zarasai",
        "lat": 55.736136,
        "lng": 26.262361,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.0
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW)"
    },
    {
        "name": "🔌 Rimi Ragaudžiai",
        "address": "Ragaudžių g. 2, Panevėžys, Lithuania",
        "city": "Panevėžys",
        "lat": 55.717128,
        "lng": 24.338381,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.31
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW), IEC_62196_T2_COMBO (150.0kW) - 0.31€/kWh"
    },
    {
        "name": "🔌 IKI - S. Kerbedžio",
        "address": "S. Kerbedžio 12A, Panevėžys, Lithuania",
        "city": "Panevėžys",
        "lat": 55.744039,
        "lng": 24.351845,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.31
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW), IEC_62196_T2_COMBO (150.0kW) - 0.31€/kWh"
    },
    {
        "name": "🔌 Triušiukų slėnis",
        "address": "Girios g. 2, 28331 Antalamėstės k., Lithuania",
        "city": "Antalamėstės kaimas",
        "lat": 55.365003,
        "lng": 25.82154,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.0
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (22.0kW)"
    },
    {
        "name": "🔌 Maxima Anykščiai",
        "address": "Kalno g. 6, Anykščiai, Lithuania",
        "city": "Anykščiai",
        "lat": 55.525782,
        "lng": 25.117938,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.21
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (150.0kW) - 0.31€/kWh, CHADEMO (50.0kW) - 0.25€/kWh, IEC_62196_T2 (11.0kW) - 0.21€/kWh"
    },
    {
        "name": "🔌 Zaraso ežero apžvalgos aikštelė",
        "address": "D. Bukonto g. 11, Zarasai, Lithuania",
        "city": "Zarasai",
        "lat": 55.727258,
        "lng": 26.245072,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.0
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW)"
    },
    {
        "name": "🔌 Sodyba „Girelė“",
        "address": "Mokyklos g. 2, Domantų k., Meškuičių sen., Ši",
        "city": "Domantų k.",
        "lat": 55.998921,
        "lng": 23.38397,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.31
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (180.0kW) - 0.31€/kWh, IEC_62196_T2 (22.0kW)"
    },
    {
        "name": "🔌 Norfa Radviliškis",
        "address": "Vasario 16-osios g. 11, Radviliškis, Lithuani",
        "city": "Radviliškis",
        "lat": 55.80713,
        "lng": 23.541904,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.31
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (180.0kW) - 0.31€/kWh"
    },
    {
        "name": "🔌 Vytauto g. 54",
        "address": "Vytauto g. 54 , Zarasai, Lithuania",
        "city": "Zarasai",
        "lat": 55.73645,
        "lng": 26.265312,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (120.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 Kavinė \"Riba\"",
        "address": "Paplentės g. 158A, Mankūnų k., Alytaus r.sav.",
        "city": "Mankūnų k.",
        "lat": 54.287462,
        "lng": 23.890194,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.21
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (180.0kW) - 0.21€/kWh"
    },
    {
        "name": "🔌 IKI Jonava",
        "address": "Parko g. 12, Jonava, Lithuania",
        "city": "Jonava",
        "lat": 55.073573,
        "lng": 24.282054,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (150.0kW) - 0.31€/kWh, IEC_62196_T2_COMBO (50.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 Kavinė \"Vilkasalė\"",
        "address": "Labanoro g. 9, Molėtų raj., Lithuania",
        "city": "Molėtų raj.",
        "lat": 55.231587,
        "lng": 25.572916,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW), IEC_62196_T2_COMBO (50.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 NordSpace (Servečės g. 2) | Inbalance grid",
        "address": "Servečės g. 2",
        "city": "Vilnius",
        "lat": 54.634011,
        "lng": 25.30478,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.23
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.23€/kWh"
    },
    {
        "name": "🔌 PLTKAUCHE8_EDLT-23",
        "address": "Chemijos gatvė 8",
        "city": "Kaunas",
        "lat": 54.902504,
        "lng": 23.986025,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.55
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (11.0kW) - 0.55€/kWh, IEC_62196_T2_COMBO (25.0kW) - 0.66€/kWh"
    },
    {
        "name": "🔌 Balsių malūnas",
        "address": "Balsių k. 3, Pasvalio raj., Lithuania",
        "city": "Pasvalio raj.",
        "lat": 56.034692,
        "lng": 24.352747,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW), IEC_62196_T2_COMBO (50.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 Sigutės koldūninė",
        "address": "Vytauto g. 50, 39307 Joniškėlis, Lithuania",
        "city": "Joniškėlis",
        "lat": 56.019725,
        "lng": 24.167481,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.21
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (43.0kW) - 0.21€/kWh"
    },
    {
        "name": "🔌 Chemijos g. 19A",
        "address": "Chemijos g. 19A, Kaunas",
        "city": "Kaunas",
        "lat": 54.902948,
        "lng": 23.987953,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.25
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (50.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 Kirkilų pramogų parkas",
        "address": "Mokyklos g. 13, Kirkilai, 41183 Biržų r. sav.",
        "city": "Kirkilai",
        "lat": 56.241763,
        "lng": 24.686709,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (45.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 Šiaurinė ranča",
        "address": "Veterinarijos g. 16, Biržai, Lithuania",
        "city": "Biržai",
        "lat": 56.180694,
        "lng": 24.760309,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (45.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 Perspektyvos g. 24",
        "address": "Perspektyvos g. 24, Kaunas",
        "city": "Kaunas",
        "lat": 54.919173,
        "lng": 24.040414,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.25
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (50.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 Parduotuvė „Gija“",
        "address": "Žvejų gatvė 2, 59302 Išlaužas, Lithuania",
        "city": "Išlaužas",
        "lat": 54.741041,
        "lng": 23.929413,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (60.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 Norfa XL Raseiniai",
        "address": "Dominikonų, 12",
        "city": "Raseiniai",
        "lat": 55.3797339,
        "lng": 23.1189114,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2479
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 Airport business park",
        "address": "Dariaus ir Girėno g. 81",
        "city": "Vilnius",
        "lat": 54.6448227,
        "lng": 25.2726433,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2479
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (47.0kW) - 0.29€/kWh, IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 De Lita",
        "address": "Vytauto g. 43",
        "city": "Druskininkai",
        "lat": 54.0108753,
        "lng": 23.9833384,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2479
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (47.0kW) - 0.29€/kWh, IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 Vita",
        "address": "Maironio g. 3",
        "city": "Druskininkai",
        "lat": 54.0231231,
        "lng": 23.9666046,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2479
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (47.0kW) - 0.29€/kWh, IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 Viliošiai",
        "address": "Viliošių k. 14",
        "city": "Viliošiai",
        "lat": 56.2197769,
        "lng": 22.6345186,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2479
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 Venckai",
        "address": "Kintų g.6 Venckų k.",
        "city": "Priekulės sen",
        "lat": 55.512659,
        "lng": 21.321142,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2479
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 Simbiocity Penta",
        "address": "Ozo g. 12A",
        "city": "Vilnius",
        "lat": 54.715413,
        "lng": 25.2780314,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2893
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (47.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 Norfa XXL Vidžių g. 8 Švenčionys",
        "address": "Vidžių g. 8",
        "city": "Švenčionys",
        "lat": 55.136433,
        "lng": 26.168062,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2479
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (47.0kW) - 0.29€/kWh, IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 Verslo centras \"Stiklinis\" Alytaus",
        "address": "Naujoji g. 3",
        "city": "Alytus",
        "lat": 54.3949735,
        "lng": 24.0373009,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2479
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (47.0kW) - 0.29€/kWh, IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 Herkaus galerija",
        "address": "H. Manto g. 22",
        "city": "Klaipėda",
        "lat": 55.7152596,
        "lng": 21.1299603,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2893
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (47.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 Norfa XL Zujūnų g. 1, Vilnius",
        "address": "Zujūnų g. 1",
        "city": "Vilnius",
        "lat": 54.7113096,
        "lng": 25.1601275,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2479
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (47.0kW) - 0.29€/kWh, IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 Norfa XXL, Plungė Dariaus ir Girėno",
        "address": "Dariaus ir Girėno g. 54",
        "city": "Plungė",
        "lat": 55.9218892,
        "lng": 21.8627717,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2479
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 Hyper Norfa Klaipėda Gedminų g. 7A",
        "address": "Gedminų 7a",
        "city": "Klaipėda",
        "lat": 55.6757669,
        "lng": 21.1792905,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2479
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 E 47",
        "address": "Eišiškių pl. 47",
        "city": "Vilnius",
        "lat": 54.6426499,
        "lng": 25.261723,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2479
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 Norfa XL Klaipėda Tilžės g. 58",
        "address": "Tilžės g. 58",
        "city": "Klaipėda",
        "lat": 55.7048656,
        "lng": 21.1645327,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2893
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (47.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 Kavinė \"Sauda\"",
        "address": "J. Lukšos g. 77, Garliava",
        "city": "Garliava",
        "lat": 54.82511,
        "lng": 23.856658,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.31
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (180.0kW) - 0.31€/kWh"
    },
    {
        "name": "🔌 PLTVILLV21_EDLT-250",
        "address": "Lvivo gatvė 21A",
        "city": "Vilnius",
        "lat": 54.695898,
        "lng": 25.280096,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.33
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.33€/kWh, IEC_62196_T2 (22.0kW) - 0.40€/kWh"
    },
    {
        "name": "🔌 Birutės g. 5",
        "address": "Birutės g. 5, 35185 Panevėžys, Lithuania",
        "city": "Panevėžys",
        "lat": 55.729239,
        "lng": 24.357764,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.31
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (180.0kW) - 0.31€/kWh"
    },
    {
        "name": "🔌 Akmenių Dvaras",
        "address": "Akmenių k. 8, Juciūnai, Kėdainių r.",
        "city": "Juciūnai",
        "lat": 55.21265,
        "lng": 24.127452,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW), IEC_62196_T2_COMBO (60.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 PLTGINARI3_EDLT-33",
        "address": "Arimų gatvė 3",
        "city": "Ginduliai",
        "lat": 55.736341,
        "lng": 21.198801,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.44
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (50.0kW) - 0.44€/kWh, CHADEMO (50.0kW) - 0.44€/kWh"
    },
    {
        "name": "🔌 Green street Cafe",
        "address": "Gardino g. 1, Paluknys, 21168 Trakų r. sav., ",
        "city": "Paluknys",
        "lat": 54.502242,
        "lng": 24.989058,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.31
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (180.0kW) - 0.31€/kWh"
    },
    {
        "name": "🔌 Norfa XL, Kovo 11-osios g. 71, Grigiškės",
        "address": "Kovo 11-osios g. 71",
        "city": "Grigiškės",
        "lat": 54.6686212,
        "lng": 25.1043706,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2479
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (320.0kW) - 0.41€/kWh, IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 NORFA Kazlų rūda",
        "address": "Skvero g. 11",
        "city": "Kazlų rūda",
        "lat": 54.7504666,
        "lng": 23.503864,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2479
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 Senukai Ignalina",
        "address": "Švenčionių g. 37, 30132 Ignalina, Lithuania",
        "city": "Ignalina",
        "lat": 55.33056,
        "lng": 26.168361,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (60.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 Vievis A1, 38,14km | Via Lietuva | Inbalance grid",
        "address": "A1",
        "city": "Vievis",
        "lat": 54.772891,
        "lng": 24.817518,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.38
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (43.0kW) - 0.38€/kWh, IEC_62196_T2_COMBO (50.0kW) - 0.38€/kWh, CHADEMO (50.0kW) - 0.38€/kWh"
    },
    {
        "name": "🔌 Žiežmariai A1, 62,19km | Via Lietuva | Inbalance grid",
        "address": "A1",
        "city": "Žiežmariai",
        "lat": 54.812698,
        "lng": 24.45263,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.38
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (43.0kW) - 0.38€/kWh, IEC_62196_T2_COMBO (50.0kW) - 0.38€/kWh, CHADEMO (50.0kW) - 0.38€/kWh"
    },
    {
        "name": "🔌 Šaltinėlis (Elektrėnai) A1, 45,78km | Via Lietuva | Inbalance grid",
        "address": "A1",
        "city": "Elektrėnai",
        "lat": 54.790106,
        "lng": 24.702229,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.38
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (43.0kW) - 0.38€/kWh, IEC_62196_T2_COMBO (50.0kW) - 0.38€/kWh, CHADEMO (50.0kW) - 0.38€/kWh"
    },
    {
        "name": "🔌 Pas Lado A1, 93,43km | Via Lietuva | Inbalance grid",
        "address": "A1",
        "city": "Kaunas",
        "lat": 54.929648,
        "lng": 24.021106,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.38
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (43.0kW) - 0.38€/kWh, IEC_62196_T2_COMBO (50.0kW) - 0.38€/kWh, CHADEMO (50.0kW) - 0.38€/kWh"
    },
    {
        "name": "🔌 Šalia kelio A1, 96,62km | Via Lietuva | Inbalance grid",
        "address": "A1",
        "city": "Kaunas",
        "lat": 54.93421,
        "lng": 23.965663,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.38
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (43.0kW) - 0.38€/kWh, IEC_62196_T2_COMBO (50.0kW) - 0.38€/kWh, CHADEMO (50.0kW) - 0.38€/kWh"
    },
    {
        "name": "🔌 Švyturys A1, 141,67km | Via Lietuva | Inbalance grid",
        "address": "A1",
        "city": "Raseinių r.",
        "lat": 55.22302,
        "lng": 23.557478,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.38
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (43.0kW) - 0.38€/kWh, IEC_62196_T2_COMBO (50.0kW) - 0.38€/kWh, CHADEMO (50.0kW) - 0.38€/kWh"
    },
    {
        "name": "🔌 Pastogė A1, 142,45km | Via Lietuva | Inbalance grid",
        "address": "A1",
        "city": "Raseinių r.",
        "lat": 55.227455,
        "lng": 23.546525,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.38
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (43.0kW) - 0.38€/kWh, IEC_62196_T2_COMBO (50.0kW) - 0.38€/kWh, CHADEMO (50.0kW) - 0.38€/kWh"
    },
    {
        "name": "🔌 Levi. Tano A1, 185,24km | Via Lietuva | Inbalance grid",
        "address": "A1",
        "city": "Raseinių r.",
        "lat": 55.377837,
        "lng": 22.930917,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.38
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (43.0kW) - 0.38€/kWh, IEC_62196_T2_COMBO (50.0kW) - 0.38€/kWh, CHADEMO (50.0kW) - 0.38€/kWh"
    },
    {
        "name": "🔌 Nikola A1, 192,8km | Via Lietuva | Inbalance grid",
        "address": "A1",
        "city": "Raseinių r.",
        "lat": 55.411962,
        "lng": 22.829622,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.38
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (43.0kW) - 0.38€/kWh, IEC_62196_T2_COMBO (50.0kW) - 0.38€/kWh, CHADEMO (50.0kW) - 0.38€/kWh"
    },
    {
        "name": "🔌 Gargždai / Kilena A1, 292,92km | Via Lietuva | Inbalance grid",
        "address": "A1",
        "city": "Gargždai",
        "lat": 55.73344,
        "lng": 21.382775,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.38
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (43.0kW) - 0.38€/kWh, IEC_62196_T2_COMBO (50.0kW) - 0.38€/kWh, CHADEMO (50.0kW) - 0.38€/kWh"
    },
    {
        "name": "🔌 Kurėnai A2, 80,1km | Via Lietuva | Inbalance grid",
        "address": "A2",
        "city": "Kurėnai",
        "lat": 55.314559,
        "lng": 24.779959,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.38
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (43.0kW) - 0.38€/kWh, IEC_62196_T2_COMBO (50.0kW) - 0.38€/kWh, CHADEMO (50.0kW) - 0.38€/kWh"
    },
    {
        "name": "🔌 \"Jerevan\" Druskininkai A4, 125,69km | Via Lietuva | Inbalance grid",
        "address": "A4",
        "city": "Druskininkai",
        "lat": 54.009586,
        "lng": 24.028526,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.38
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (43.0kW) - 0.38€/kWh, IEC_62196_T2_COMBO (50.0kW) - 0.38€/kWh, CHADEMO (50.0kW) - 0.38€/kWh"
    },
    {
        "name": "🔌 Telšiai, 7 kilometras A11, 75,37km | Via Lietuva | Inbalance grid",
        "address": "A11",
        "city": "Telšiai",
        "lat": 56.001184,
        "lng": 22.143514,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.38
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (43.0kW) - 0.38€/kWh, IEC_62196_T2_COMBO (50.0kW) - 0.38€/kWh, CHADEMO (50.0kW) - 0.38€/kWh"
    },
    {
        "name": "🔌 Laukinukė A12, 91,42km | Via Lietuva | Inbalance grid",
        "address": "A12",
        "city": "Palšiai",
        "lat": 55.675082,
        "lng": 22.937353,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.38
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (43.0kW) - 0.38€/kWh, IEC_62196_T2_COMBO (50.0kW) - 0.38€/kWh, CHADEMO (50.0kW) - 0.38€/kWh"
    },
    {
        "name": "🔌 Circle K Tauragė A12, 152km | Via Lietuva | Inbalance grid",
        "address": "A12",
        "city": "Tauragė",
        "lat": 55.266858,
        "lng": 22.310119,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.38
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (43.0kW) - 0.38€/kWh, IEC_62196_T2_COMBO (50.0kW) - 0.38€/kWh, CHADEMO (50.0kW) - 0.38€/kWh"
    },
    {
        "name": "🔌 Viešbutis „Greta“",
        "address": "Šlaito g. 13, Druskininkai",
        "city": "Druskininkai",
        "lat": 54.024254,
        "lng": 23.981971,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (60.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 Šeduvos malūnas",
        "address": "Vytauto g. 89, Šeduva",
        "city": "Šeduva",
        "lat": 55.761816,
        "lng": 23.744004,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.31
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (180.0kW) - 0.31€/kWh, IEC_62196_T2 (22.0kW)"
    },
    {
        "name": "🔌 Tarandės g. 34",
        "address": "Tarandės g 34",
        "city": "Vilnius",
        "lat": 54.7491074,
        "lng": 25.2072306,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2479
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (47.0kW) - 0.29€/kWh, IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 A. Sabaliausko g. 2",
        "address": "A. Sabaliausko g. 2, Kaunas, 46499 Kauno m. s",
        "city": "Kaunas",
        "lat": 54.846793,
        "lng": 23.879978,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (60.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 Kavinė \"Sandy\"",
        "address": "P. Norkūno g. 1, Marijampolio k.",
        "city": "Marijampolio k.",
        "lat": 54.518234,
        "lng": 25.316534,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.29
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (45.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 Parduotuvė „Giris“",
        "address": "Bažnyčios g. 31, Naujosios Kietaviškės",
        "city": "Naujosios Kietaviškės",
        "lat": 54.759145,
        "lng": 24.608007,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (45.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 Pilaitės žirgynas",
        "address": "A. Mickevičiaus g. 172, Bagdoniškės",
        "city": "Bagdoniškės",
        "lat": 54.727032,
        "lng": 25.08786,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (60.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 Naujoji g. 122",
        "address": "Naujoji g. 122, Alytus",
        "city": "Alytus",
        "lat": 54.42672,
        "lng": 24.002522,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.31
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (180.0kW) - 0.31€/kWh"
    },
    {
        "name": "🔌 Vilniaus g. 6",
        "address": "Vilniaus g. 6, Senoji Varėna, 65487 Varėnos r",
        "city": "Senoji Varėna",
        "lat": 54.256915,
        "lng": 24.547905,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (40.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 Baltijos g. 57",
        "address": "Baltijos g. 57, Kampiškių k.",
        "city": "Kampiškių k.",
        "lat": 54.844502,
        "lng": 23.847792,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.31
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (180.0kW) - 0.31€/kWh"
    },
    {
        "name": "🔌 PLTVILPIL1_EDLT-56",
        "address": "Senosios Pilaitės kelias 1",
        "city": "Vilnius",
        "lat": 54.704266,
        "lng": 25.199837,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.44
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (150.0kW) - 0.55€/kWh, CHADEMO (100.0kW) - 0.44€/kWh"
    },
    {
        "name": "🔌 Dino parkas",
        "address": "Pušyno g. 7, Radailių k.",
        "city": "Radailių k.",
        "lat": 55.786948,
        "lng": 21.218463,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW), IEC_62196_T2_COMBO (50.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 Bistrampolio dvaras",
        "address": "Bistrampolio g. 1, 38240 Kučių k., Lithuania",
        "city": "Kučių kaimas",
        "lat": 55.597878,
        "lng": 24.354973,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW), IEC_62196_T2_COMBO (60.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 Sostinės med centras Račių g. 1",
        "address": "Račių Gatvė 1",
        "city": "Vilnius",
        "lat": 54.6532648,
        "lng": 25.2241128,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2479
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 Sodyba „Pušelė“",
        "address": "Vyturių g. 20, Šiauliai, Lithuania",
        "city": "Šiauliai",
        "lat": 55.887217,
        "lng": 23.376852,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW), IEC_62196_T2_COMBO (50.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 Koops Piliuona",
        "address": "Taikos pl. 38, Piliuonos k.",
        "city": "Piliuonos k.",
        "lat": 54.780703,
        "lng": 24.119317,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2_COMBO (45.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 Maxima Priekulė",
        "address": "Pasagos g. 1A, Priekulės II k.",
        "city": "Priekulės II k.",
        "lat": 55.561288,
        "lng": 21.311176,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.31
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (180.0kW) - 0.31€/kWh"
    },
    {
        "name": "🔌 Europos parkas",
        "address": "Europos Parko g. 300A, Joneikiškių k.",
        "city": "Joneikiškių k.",
        "lat": 54.825233,
        "lng": 25.353335,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.24€/kWh, IEC_62196_T2 (11.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Sodeliškių dvaras",
        "address": "Sodeliškių g. 1A, Sodeliškių k., Lithuania",
        "city": "Sodeliškių k.",
        "lat": 56.290751,
        "lng": 24.637763,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW), IEC_62196_T2_COMBO (60.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 Sodyba „Pelėdų pakalnė“",
        "address": "Pakrantės g. 24, Pelėdnagiai",
        "city": "Pelėdnagiai",
        "lat": 55.253842,
        "lng": 23.954862,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.24€/kWh, IEC_62196_T2_COMBO (60.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 Radviliškio mašinų gamykla",
        "address": "Vytauto g. 3, Radviliškis",
        "city": "Radviliškis",
        "lat": 55.815117,
        "lng": 23.537793,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.31
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2_COMBO (180.0kW) - 0.31€/kWh, IEC_62196_T2 (22.0kW)"
    },
    {
        "name": "🔌 Sostinės med centras Račių g. 1",
        "address": "Račių Gatvė 1",
        "city": "Vilnius",
        "lat": 54.6530895,
        "lng": 25.2247029,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2479
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 Sostinės med centras Račių g. 1",
        "address": "Račių Gatvė 1",
        "city": "Vilnius",
        "lat": 54.6532835,
        "lng": 25.2250731,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2479
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 Zarasų salos aikštelė",
        "address": "Vilniaus g. 73, Zarasai, Lithuania",
        "city": "Zarasai",
        "lat": 55.736027,
        "lng": 26.239879,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (180.0kW) - 0.31€/kWh, IEC_62196_T2_COMBO (120.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 Sostinės med centras Račių g. 1",
        "address": "Račių Gatvė 1",
        "city": "Vilnius",
        "lat": 54.6537055,
        "lng": 25.2241986,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2479
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 Restoranas \"Smilgos\"",
        "address": "Vilniaus g. 13, 18123 Švenčionys, Lithuania",
        "city": "Švenčionys",
        "lat": 55.13275,
        "lng": 26.15507,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (45.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 Dembavos g. 32",
        "address": "Dembavos g. 32, Dembava, Panevėžio raj.",
        "city": "Dembava",
        "lat": 55.737315,
        "lng": 24.405831,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.25
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (50.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 Šiaulių krašto medžiotojų užeiga",
        "address": "Dubijos g. 20, Šiauliai",
        "city": "Šiauliai",
        "lat": 55.928352,
        "lng": 23.296787,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW), IEC_62196_T2_COMBO (50.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 Mokslo g. 11",
        "address": "Mokslo g. 11, Mastaičių k.",
        "city": "Mastaičių k.",
        "lat": 54.823041,
        "lng": 23.840921,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.31
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (180.0kW) - 0.31€/kWh"
    },
    {
        "name": "🔌 Kavinė „Delfai“",
        "address": "Palangos pl. 15, 97221 Vydmantai, Lithuania",
        "city": "Vydmantai",
        "lat": 55.899638,
        "lng": 21.137413,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.31
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (150.0kW) - 0.31€/kWh"
    },
    {
        "name": "🔌 Vasaros g. 5, Vilnius",
        "address": "Vasaros g. 5, Vilnius",
        "city": "Vilnius",
        "lat": 54.691078,
        "lng": 25.308659,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.0
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (11.0kW)"
    },
    {
        "name": "🔌 Jono Dailidės g. 6",
        "address": "Jono Dailidės g. 6, Marijampolė",
        "city": "Marijampolė",
        "lat": 54.557182,
        "lng": 23.35206,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.31
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (150.0kW) - 0.31€/kWh"
    },
    {
        "name": "🔌 EkoInn automobilių savitarnos plovykla",
        "address": "Boruvkos g. 1, Ukmergė",
        "city": "Ukmergė",
        "lat": 55.239921,
        "lng": 24.786287,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.31
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (180.0kW) - 0.31€/kWh"
    },
    {
        "name": "🔌 Burbiškio dvaras",
        "address": "Parko g. 1B, Burbiškio k.",
        "city": "Burbiškio k.",
        "lat": 55.500291,
        "lng": 25.216948,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW), IEC_62196_T2_COMBO (60.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 Taikos g. 2",
        "address": "Taikos g. 2, Palanga",
        "city": "Palanga",
        "lat": 55.919368,
        "lng": 21.07981,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.29
        },
        "ev_status": "Laisva",
        "ev_connectors": "CHADEMO (50.0kW) - 0.29€/kWh, IEC_62196_T2_COMBO (200.0kW) - 0.39€/kWh"
    },
    {
        "name": "🔌 Ronžės g. 5A",
        "address": "Ronžės g. 5A, Palanga",
        "city": "Palanga",
        "lat": 55.914799,
        "lng": 21.067077,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (60.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 Restoranas \"Romnesa\"",
        "address": "Vienkiemių g. 5, Jaskonių k.",
        "city": "Jaskonių k.",
        "lat": 53.98804,
        "lng": 24.045954,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.21
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (60.0kW) - 0.21€/kWh, IEC_62196_T2 (11.0kW) - 0.21€/kWh"
    },
    {
        "name": "🔌 Norfa Tauralaukio",
        "address": "Tauralaukio g. 1, Klaipėda",
        "city": "Klaipėda",
        "lat": 55.753707,
        "lng": 21.143405,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.25
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (50.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 Išdagėlių g. 15C",
        "address": "Išdagėlių g. 15C, Marijampolė",
        "city": "Marijampolė",
        "lat": 54.551976,
        "lng": 23.385976,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (60.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 Žemaitkiemio dvaras",
        "address": "Žemaitkiemio g. 10, Žemaitkiemio k.",
        "city": "Žemaitkiemio k.",
        "lat": 55.065504,
        "lng": 23.791098,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.0
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW)"
    },
    {
        "name": "🔌 Verkių g. 29 Vilnius",
        "address": "Verkių g. 29",
        "city": "Vilnius",
        "lat": 54.7136304,
        "lng": 25.293431,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.405
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (320.0kW) - 0.41€/kWh"
    },
    {
        "name": "🔌 Birutės g. 16, Kėdainiai",
        "address": "Birutės g. 16, Kėdainiai",
        "city": "Kėdainiai",
        "lat": 55.299825,
        "lng": 23.968847,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.21
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (45.0kW) - 0.21€/kWh"
    },
    {
        "name": "🔌 PC \"Link Molėtų\"",
        "address": "Molėtų g. 13, Didžioji Riešė",
        "city": "Didžioji Riešė",
        "lat": 54.781128,
        "lng": 25.27309,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.32
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (150.0kW) - 0.32€/kWh"
    },
    {
        "name": "🔌 Gudelių sodyba",
        "address": "Marijampolės g. 5, Gudelių k.",
        "city": "Gudelių k.",
        "lat": 54.723799,
        "lng": 23.600576,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW), IEC_62196_T2_COMBO (60.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 Naujosios Vilnios Šv. Kazimiero bažnyčia",
        "address": "Palydovo g. 13, Vilnius",
        "city": "Vilnius",
        "lat": 54.6967,
        "lng": 25.410802,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.29
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (45.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 Vilko Pastogė",
        "address": "Plento g. 2, Skirptiškių k.",
        "city": "Skirptiškių k.",
        "lat": 54.566498,
        "lng": 23.745249,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.21
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (180.0kW) - 0.21€/kWh"
    },
    {
        "name": "🔌 IKI Jurbarkas",
        "address": "Dariaus ir Girėno g. 25, Jurbarkas",
        "city": "Jurbarkas",
        "lat": 55.077512,
        "lng": 22.764749,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.31
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (150.0kW) - 0.31€/kWh"
    },
    {
        "name": "🔌 Rietavo g. 5",
        "address": "Rietavo g. 5, Plungė",
        "city": "Plungė",
        "lat": 55.91174,
        "lng": 21.847539,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.31
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (180.0kW) - 0.31€/kWh"
    },
    {
        "name": "🔌 IKI Varėna",
        "address": "Vytauto g. 18, Varėna, 65184 Varėnos r. sav.,",
        "city": "Varėna",
        "lat": 54.211287,
        "lng": 24.568949,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.31
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (150.0kW) - 0.31€/kWh"
    },
    {
        "name": "🔌 PC Garnys",
        "address": "Gedimino g. 96, Marijampolė",
        "city": "Marijampolė",
        "lat": 54.553764,
        "lng": 23.372871,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.31
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (150.0kW) - 0.31€/kWh"
    },
    {
        "name": "🔌 Vilniaus paukštynas",
        "address": "Gamyklos g. 27, Rudamina, Vilniaus r.",
        "city": "Rudamina",
        "lat": 54.593979,
        "lng": 25.330515,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.24€/kWh, IEC_62196_T2_COMBO (180.0kW) - 0.32€/kWh"
    },
    {
        "name": "🔌 PLC Mega",
        "address": "Islandijos pl. 32, Kaunas",
        "city": "Kaunas",
        "lat": 54.939316,
        "lng": 23.888189,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "CHADEMO (50.0kW) - 0.29€/kWh, IEC_62196_T2_COMBO (240.0kW) - 0.39€/kWh, IEC_62196_T2 (22.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Maxima Šilutės pl.",
        "address": "Šilutės pl. 68, Klaipėda",
        "city": "Klaipėda",
        "lat": 55.676596,
        "lng": 21.189904,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.21
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (150.0kW) - 0.31€/kWh, IEC_62196_T2 (22.0kW) - 0.21€/kWh"
    },
    {
        "name": "🔌 Pajiesio g. 2",
        "address": "Pajiesio g. 2, Ilgakiemio k.",
        "city": "Ilgakiemio k.",
        "lat": 54.776694,
        "lng": 23.878466,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.31
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (150.0kW) - 0.31€/kWh"
    },
    {
        "name": "🔌 Švč. M. Marijos vardo bažnyčia",
        "address": "Laisvės g. 17, Kalvarija",
        "city": "Kalvarija",
        "lat": 54.413208,
        "lng": 23.231621,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (60.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 Army shop",
        "address": "Mokyklos g. 3, Staškūniškis",
        "city": "Staškūniškis",
        "lat": 55.378506,
        "lng": 25.028072,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.21
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (180.0kW) - 0.21€/kWh, IEC_62196_T2 (22.0kW) - 0.21€/kWh"
    },
    {
        "name": "🔌 Elmega Luokės g. 46, Telšiai",
        "address": "Luokės g. 46",
        "city": "Telšiai",
        "lat": 55.9794374,
        "lng": 22.2617187,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2893
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2_COMBO (47.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 Norfa XL Klevų al. 4, Lentvaris",
        "address": "Klevų al. 4",
        "city": "Lentvaris",
        "lat": 54.6461029,
        "lng": 25.0519602,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2479
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 Panerio futbolo stadionas Bukčių g. 8A",
        "address": "Bukčių g. 8A",
        "city": "Vilnius",
        "lat": 54.6643364,
        "lng": 25.2135865,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2479
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (120.0kW) - 0.41€/kWh, IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 Taikos g. 39",
        "address": "Taikos g. 39, Pasvalys",
        "city": "Pasvalys",
        "lat": 56.064497,
        "lng": 24.42124,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (60.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 Valčiūnai",
        "address": "Geležinkeliečių g. 1, Valčiūnai",
        "city": "Valčiūnai",
        "lat": 54.563674,
        "lng": 25.263407,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (60.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 PC Kubas, Marijampolė",
        "address": "Uosupio g. 18, Marijampolė",
        "city": "Marijampolė",
        "lat": 54.564197,
        "lng": 23.333628,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (60.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 Marijampolės autobusų stotis",
        "address": "Stoties g. 2, Marijampolė",
        "city": "Marijampolė",
        "lat": 54.556386,
        "lng": 23.363173,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (60.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 Vytauto gatvė 38, Marijampolė",
        "address": "Vytauto g. 38, Marijampolė",
        "city": "Marijampolė",
        "lat": 54.550333,
        "lng": 23.347799,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.0
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW)"
    },
    {
        "name": "🔌 Restoranas Romnesa",
        "address": "Centro g. 1, 30200 Strigailiškis, Lithuania",
        "city": "Strigailiškis",
        "lat": 55.340455,
        "lng": 26.134135,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.31
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (180.0kW) - 0.31€/kWh"
    },
    {
        "name": "🔌 IKI Jonavos g. 3",
        "address": "Jonavos g. 3, Kaunas",
        "city": "Kaunas",
        "lat": 54.900437,
        "lng": 23.89139,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.32
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (150.0kW) - 0.32€/kWh"
    },
    {
        "name": "🔌 IKI Šermutas",
        "address": "Kniaudiškių g. 6, Panevėžys",
        "city": "Panevėžys",
        "lat": 55.727361,
        "lng": 24.333056,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.31
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (150.0kW) - 0.31€/kWh, IEC_62196_T2 (22.0kW)"
    },
    {
        "name": "🔌 Rokiškio turgus",
        "address": "Respublikos g. 122, Rokiškis",
        "city": "Rokiškis",
        "lat": 55.946514,
        "lng": 25.589584,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.31
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (150.0kW) - 0.31€/kWh"
    },
    {
        "name": "🔌 Drevernos mažųjų laivų uostas",
        "address": "Pamario g. 10, Dreverna",
        "city": "Drevernos k., Priekulės sen., Klaipėdos r.",
        "lat": 55.517222,
        "lng": 21.237073,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (180.0kW) - 0.31€/kWh, IEC_62196_T2_COMBO (60.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 Vila Romnesa",
        "address": "Pagavio g. 1, Strigailiškis, Ignalinos r.",
        "city": "Strigailiškis, Ignalinos r.",
        "lat": 55.336568,
        "lng": 26.131871,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (45.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 Kauno gatvė 51",
        "address": "Kauno g. 51, Vilkija",
        "city": "Vilkija, Kauno r.",
        "lat": 55.040481,
        "lng": 23.591552,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.31
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (180.0kW) - 0.31€/kWh"
    },
    {
        "name": "🔌 Sushi DO",
        "address": "Ragaudžių g. 1, Panevėžys",
        "city": "Panevėžys",
        "lat": 55.716934,
        "lng": 24.337983,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.31
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (180.0kW) - 0.31€/kWh"
    },
    {
        "name": "🔌 IKI Aušra",
        "address": "Vytauto g. 48A, Marijampolė",
        "city": "Marijampolė",
        "lat": 54.54642,
        "lng": 23.346928,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.31
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (150.0kW) - 0.31€/kWh"
    },
    {
        "name": "🔌 PC Livonija",
        "address": "Livonijos g. 21, Joniškis",
        "city": "Joniškis",
        "lat": 56.245738,
        "lng": 23.618141,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.31
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (180.0kW) - 0.31€/kWh, IEC_62196_T2 (22.0kW)"
    },
    {
        "name": "🔌 Viešbutis \"Pas Rimą\"",
        "address": "P. Avižonio g. 3, Pasvalys",
        "city": "Pasvalys, Pasvalio r.",
        "lat": 56.060972,
        "lng": 24.399554,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.31
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (180.0kW) - 0.31€/kWh, IEC_62196_T2 (22.0kW)"
    },
    {
        "name": "🔌 Norfa XL, Baltų pr. 195, Kaunas",
        "address": "Baltų pr. 195",
        "city": "Kaunas",
        "lat": 54.9163396,
        "lng": 23.8632364,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2893
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (47.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 Norfa XXL, Juozapavičiaus pr. 84a, Kaunas",
        "address": "Juozapavičiaus pr. 84a",
        "city": "Kaunas",
        "lat": 54.875738,
        "lng": 23.9370296,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2893
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (45.0kW) - 0.29€/kWh, IEC_62196_T2_COMBO (47.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 Norfa XL, S. Šilingo g. 5, Kelmė",
        "address": "S. Šilingo g. 5",
        "city": "Kelmė",
        "lat": 55.6320871,
        "lng": 22.92826,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2479
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (47.0kW) - 0.29€/kWh, IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 Norfa XL, J. Janonio g. 23, Kelmė",
        "address": "J. Janonio g. 23",
        "city": "Kelmė",
        "lat": 55.6316161,
        "lng": 22.9223038,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2479
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (47.0kW) - 0.29€/kWh, IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 Norfa XL, Rygos g. 49, Vilnius",
        "address": "Rygos g. 49",
        "city": "Vilnius",
        "lat": 54.7190834,
        "lng": 25.2131823,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2479
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (47.0kW) - 0.29€/kWh, IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 Norfa XXL, Chemikų g. 2,  Jonava",
        "address": "Chemikų g. 2",
        "city": "Jonava",
        "lat": 55.0727377,
        "lng": 24.2583169,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2893
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (47.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 Norfa XXL, Ąžuolyno g. 2a, Janušavos k., Kėdainiai",
        "address": "Ąžuolyno g. 2a,",
        "city": "Janušavos k., Kėdainiai",
        "lat": 55.2824385,
        "lng": 23.9481256,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2479
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (47.0kW) - 0.29€/kWh, IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 Norfa XL, Revuonos g. 66A, Prienai",
        "address": "Revuonos g. 66A",
        "city": "Prienai",
        "lat": 54.643131,
        "lng": 23.9446801,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2479
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (47.0kW) - 0.29€/kWh, IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 Norfa XL, Bernotiškės g. 3, Tauragė",
        "address": "Bernotiškės g. 3",
        "city": "Tauragė",
        "lat": 55.2601588,
        "lng": 22.2995371,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2479
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (47.0kW) - 0.29€/kWh, IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 Norfa XL, Šilalės g. 87C, Tauragė",
        "address": "Šilalės g. 87C",
        "city": "Tauragė",
        "lat": 55.2672477,
        "lng": 22.2874047,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2893
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (47.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 Švyturio Arena",
        "address": "Dubysos g. 10 Klaipėda",
        "city": "Klaipėda",
        "lat": 55.6865872,
        "lng": 21.1517679,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.405
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (320.0kW) - 0.41€/kWh"
    },
    {
        "name": "🔌 J. Basanavičiaus g. 51. Kėdainiai",
        "address": "J. Basanavičiaus g. 51, Kėdainiai",
        "city": "Kėdainiai",
        "lat": 55.287799,
        "lng": 23.974899,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.31
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (150.0kW) - 0.31€/kWh"
    },
    {
        "name": "🔌 Parduotuvė Aibė",
        "address": "Birutės a. 2, Krekenava",
        "city": "Krekenava, Panevėžio r.",
        "lat": 55.542755,
        "lng": 24.096198,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.0
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (40.0kW)"
    },
    {
        "name": "🔌 PLTRAUZIR2_EDLT-95",
        "address": "Žirgų gatvė 2",
        "city": "Raudondvaris",
        "lat": 54.826461,
        "lng": 25.276177,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.44
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (150.0kW) - 0.44€/kWh, CHADEMO (75.0kW) - 0.44€/kWh"
    },
    {
        "name": "🔌 Kavinė \"Prie užtvankos\"",
        "address": "Pakrantės g. 1, Droničėnai, Utenos r.",
        "city": "Droničėnų k., Utenos r.",
        "lat": 55.518022,
        "lng": 25.655862,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (120.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 Pajūrio sodyba",
        "address": "Mokyklos g. 50A, Palanga",
        "city": "Palanga",
        "lat": 56.017332,
        "lng": 21.083256,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.0
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (22.0kW)"
    },
    {
        "name": "🔌 Kalvarijų turgus",
        "address": "Rinktinės g. 42, Vilnius, Lithuania",
        "city": "Vilnius",
        "lat": 54.699329,
        "lng": 25.286441,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (60.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 LR Seimas",
        "address": "Gynėjų g. 2, Vilnius, Lithuania",
        "city": "Vilnius",
        "lat": 54.690064,
        "lng": 25.263783,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.29
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (100.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 Vilnius Tech Park",
        "address": "Antakalnio g. 26, 10305 Vilnius, Lithuania",
        "city": "Vilnius",
        "lat": 54.699051,
        "lng": 25.308536,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (43.0kW), CHADEMO (45.0kW) - 0.27€/kWh, IEC_62196_T2_COMBO (45.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 Impuls Žirmūnai",
        "address": "Kareivių g. 14, Vilnius, Lithuania",
        "city": "Vilnius",
        "lat": 54.719052,
        "lng": 25.299035,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (43.0kW), CHADEMO (45.0kW) - 0.27€/kWh, IEC_62196_T2_COMBO (45.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 R. Kalantos g. 49 | Partneris",
        "address": "R. Kalantos g. 49, Kaunas",
        "city": "Kaunas",
        "lat": 54.897724,
        "lng": 23.99197,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.0
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW)"
    },
    {
        "name": "🔌 Kalino padelis",
        "address": "Medikiškių g. 7, Kalino k.",
        "city": "Kalino k.",
        "lat": 54.807777,
        "lng": 25.280199,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.31
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (180.0kW) - 0.31€/kWh"
    },
    {
        "name": "🔌 Taujėnų dvaras",
        "address": "Dvaro g. 1, Taujėnai",
        "city": "Taujėnai, Ukmergės r.",
        "lat": 55.39607,
        "lng": 24.762355,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW), IEC_62196_T2_COMBO (60.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 Thomas Phillips",
        "address": "Beržų g. 16, Marijampolė",
        "city": "Marijampolė",
        "lat": 54.566722,
        "lng": 23.363529,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.31
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (180.0kW) - 0.31€/kWh, IEC_62196_T2 (22.0kW)"
    },
    {
        "name": "🔌 Stokker Šiauliai",
        "address": "Pramonės g. 24H, Šiauliai, 78151 Šiaulių m. s",
        "city": "Šiauliai",
        "lat": 55.908223,
        "lng": 23.319914,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.31
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (150.0kW) - 0.31€/kWh"
    },
    {
        "name": "🔌 Marijampolės poezijos parkas",
        "address": "J. Basanavičiaus 2., Marijampolė",
        "city": "Marijampolė",
        "lat": 54.55819,
        "lng": 23.348107,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (60.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 Bikuva",
        "address": "Vytauto g. 46, Rokiškis",
        "city": "Rokiškis",
        "lat": 55.972888,
        "lng": 25.585183,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2_COMBO (60.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 Vilniaus g. 3D. Raseiniai | Partneris",
        "address": "Vilniaus g. 3D, Raseiniai",
        "city": "Raseiniai",
        "lat": 55.370281,
        "lng": 23.132427,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (50.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 V. Grybo gatvė 49",
        "address": "V. Grybo g. 49, Jurbarkas",
        "city": "Jurbarkas",
        "lat": 55.087917,
        "lng": 22.748111,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (50.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 Palangos baseinas | Partneris",
        "address": "Kretingos g. 23, Palanga",
        "city": "Palanga",
        "lat": 55.916833,
        "lng": 21.075734,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.0
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (11.0kW)"
    },
    {
        "name": "🔌 KOOPs Lapės",
        "address": "Mokyklos g. 2C, Lapės",
        "city": "Lapės. Kauno r.",
        "lat": 54.974976,
        "lng": 24.008037,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.31
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (180.0kW) - 0.31€/kWh"
    },
    {
        "name": "🔌 Dariaus ir Girėno g. 11",
        "address": "Dariaus ir Girėno g. 11, Šilutė",
        "city": "Šilutė",
        "lat": 55.351163,
        "lng": 21.462446,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.31
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (150.0kW) - 0.31€/kWh"
    },
    {
        "name": "🔌 Vytauto gatvė 38, Ariogala | Partneris",
        "address": "Vytauto g. 38",
        "city": "Ariogala",
        "lat": 55.260319,
        "lng": 23.480173,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.0
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW)"
    },
    {
        "name": "🔌 PC Pasagėlė",
        "address": "Sodų g. 17A",
        "city": "Žiežmariai, Kaišiadorių r.",
        "lat": 54.809248,
        "lng": 24.438919,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (45.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 Norfa XL, Žiburio g. 12, Anykščiai",
        "address": "Žiburio g. 12",
        "city": "Anykščiai",
        "lat": 55.5251446,
        "lng": 25.1180323,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2479
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (47.0kW) - 0.29€/kWh, IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 Norfa XL, Nemuno g. 29b, Panevėžys",
        "address": "Nemuno g. 29b",
        "city": "Panevėžys",
        "lat": 55.719641,
        "lng": 24.3503183,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2893
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (45.0kW) - 0.29€/kWh, IEC_62196_T2_COMBO (47.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 Norfa XL, Zibalų g. 11,  Širvintos",
        "address": "Zibalų g. 11",
        "city": "Širvintos",
        "lat": 55.0462323,
        "lng": 24.9425377,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2479
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (47.0kW) - 0.29€/kWh, IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 Norfa XXL, Gedimino g. 140, Kaišiadorys",
        "address": "Gedimino g. 140",
        "city": "Kaišiadorys",
        "lat": 54.852694,
        "lng": 24.4321057,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2479
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (47.0kW) - 0.29€/kWh, IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 Norfa XXL, Vytauto g. 78,  Kuršėnai",
        "address": "Vytauto g. 78",
        "city": "Kuršėniai",
        "lat": 56.0143496,
        "lng": 22.9512323,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2479
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (47.0kW) - 0.29€/kWh, IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 Norfa XL, Šaulio g. 1, Molainių k., Panevėžys",
        "address": "Šaulio g. 1",
        "city": "Molainiai k",
        "lat": 55.7078796,
        "lng": 24.3131354,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2893
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (47.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 Norfa XL, Panevėžio g. 33, Šeduva",
        "address": "Panevėžio g. 33",
        "city": "Šeduva",
        "lat": 55.7562227,
        "lng": 23.7618176,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2479
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (47.0kW) - 0.29€/kWh, IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 Norfa L, Dariaus ir Girėno g. 105a, Radviliškis",
        "address": "Dariaus ir Girėno g. 105a",
        "city": "Radviliškis",
        "lat": 55.8177043,
        "lng": 23.524133,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2479
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (47.0kW) - 0.29€/kWh, IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 Norfa XL, Šviesos skg. 2,  Vievis",
        "address": "Šviesos skg. 2",
        "city": "Vievis",
        "lat": 54.7714057,
        "lng": 24.808592,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2893
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (47.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 Norfa XL, Turgaus sk. 6, Gruzdžiai",
        "address": "Turgaus sk. 6",
        "city": "Gruzdžiai",
        "lat": 56.0991453,
        "lng": 23.2493854,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2479
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (47.0kW) - 0.29€/kWh, IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 Norfa XXL, Vilties g. 1, Dainų k, Šiauliai",
        "address": "Vilties g. 1",
        "city": "Dainų k, Šiauliai",
        "lat": 55.9191433,
        "lng": 23.2557732,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2893
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (47.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 Norfa XXL, Jurgiškių g. 2, Alytus",
        "address": "Jurgiškių g. 2",
        "city": "Alytus",
        "lat": 54.3993896,
        "lng": 24.0128234,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2479
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (47.0kW) - 0.29€/kWh, IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 Norfa XL, Algirdo g. 20,  Jurbarkas",
        "address": "Algirdo g. 20",
        "city": "Jurbarkas",
        "lat": 55.089394,
        "lng": 22.7761642,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2479
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (47.0kW) - 0.29€/kWh, IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 Nordspace (Vėjo g. 143-145) 3 | Inbalance grid",
        "address": "Vėjo g. 143-145",
        "city": "Klaipėda",
        "lat": 55.751382,
        "lng": 21.169948,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.23
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.23€/kWh"
    },
    {
        "name": "🔌 IKI, Romainiai 1 | Inbalance grid",
        "address": "Vieškeliuko str. 8",
        "city": "Kauno raj.",
        "lat": 54.933029,
        "lng": 23.817051,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.23
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.23€/kWh"
    },
    {
        "name": "🔌 IKI, Bendoriai | Inbalance grid",
        "address": "Senasis Ukmergės kl. 8",
        "city": "Avižieniai",
        "lat": 54.769472,
        "lng": 25.19492,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.23
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.23€/kWh"
    },
    {
        "name": "🔌 IKI Domeikava | Inbalance grid",
        "address": "Įgulos str. 1",
        "city": "Šakių k.",
        "lat": 54.954206,
        "lng": 23.896379,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.23
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.23€/kWh"
    },
    {
        "name": "🔌 PC Ozas 1 | Inbalance grid",
        "address": "Ozo g. 18",
        "city": "Vilnius",
        "lat": 54.714481,
        "lng": 25.274156,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.33
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.33€/kWh"
    },
    {
        "name": "🔌 IKI, Dembava 7 | Inbalance grid",
        "address": "Vilniaus st. 60",
        "city": "Panevėžys",
        "lat": 55.727709,
        "lng": 24.379881,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.23
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.23€/kWh"
    },
    {
        "name": "🔌 Klaibuta | Inbalance grid",
        "address": "Svajonės st. 38",
        "city": "Klaipėda",
        "lat": 55.681433,
        "lng": 21.190402,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.23
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.23€/kWh"
    },
    {
        "name": "🔌 Flow 2 | Inbalance grid",
        "address": "Lvivo g. 21A",
        "city": "Vilnius",
        "lat": 54.69577,
        "lng": 25.280141,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.31
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.31€/kWh"
    },
    {
        "name": "🔌 AUG Rent | Inbalance grid",
        "address": "Tilžės st. 86",
        "city": "Klaipėda",
        "lat": 55.702453,
        "lng": 21.195445,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.26
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.26€/kWh"
    },
    {
        "name": "🔌 City Storage | Inbalance grid",
        "address": "Ukmergės g. 326",
        "city": "Vilnius",
        "lat": 54.742933,
        "lng": 25.221709,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.23
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.23€/kWh"
    },
    {
        "name": "🔌 ARMI servisas | Inbalance grid",
        "address": "Šilutės pl. 5B",
        "city": "Klaipėda",
        "lat": 55.703004,
        "lng": 21.165185,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.23
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.23€/kWh"
    },
    {
        "name": "🔌 Gedimino g. 35, Tauragė | Inbalance grid",
        "address": "Gedimino str. 35",
        "city": "Tauragė",
        "lat": 55.251702,
        "lng": 22.301251,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.23
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.23€/kWh"
    },
    {
        "name": "🔌 Nordspace (Vėjo g. 143-145) 4 | Inbalance grid",
        "address": "Vėjo g. 143-145",
        "city": "Klaipėda",
        "lat": 55.751382,
        "lng": 21.169948,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.23
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.23€/kWh"
    },
    {
        "name": "🔌 Nordspace (Vėjo g. 143-145) 2 | Inbalance grid",
        "address": "Vėjo g. 143-145",
        "city": "Klaipėda",
        "lat": 55.751382,
        "lng": 21.169948,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.23
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.23€/kWh"
    },
    {
        "name": "🔌 Nordspace (Vėjo g. 143-145) 1 | Inbalance grid",
        "address": "Vėjo g. 143-145",
        "city": "Klaipėda",
        "lat": 55.751382,
        "lng": 21.169948,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.23
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.23€/kWh"
    },
    {
        "name": "🔌 Dariaus ir Girėno g. 36 | Inbalance grid",
        "address": "Dariaus ir Girėno str. 36",
        "city": "Tauragė",
        "lat": 55.255553,
        "lng": 22.291774,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.23
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.23€/kWh"
    },
    {
        "name": "🔌 J. Tumo - Vaižganto g. 129, Tauragė | Inbalance grid",
        "address": "J. Tumo-Vaižganto str. 129",
        "city": "Tauragė",
        "lat": 55.258062,
        "lng": 22.308152,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.23
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.23€/kWh"
    },
    {
        "name": "🔌 Savanorių pr. 12/14 - Mylida | Inbalance grid",
        "address": "Savanorių pr. 12",
        "city": "Vilnius",
        "lat": 54.677689,
        "lng": 25.256104,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.23
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.23€/kWh"
    },
    {
        "name": "🔌 Nordspace 2 (Vanaginės Sodų 4-oji g) | Inbalance grid",
        "address": "Vanaginės Sodų 4-oji g. 2B",
        "city": "Vilnius",
        "lat": 54.776671,
        "lng": 25.271587,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.23
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.23€/kWh"
    },
    {
        "name": "🔌 West Garden | Inbalance grid",
        "address": "Vakarinė g. 2",
        "city": "Vilnius",
        "lat": 54.73445,
        "lng": 25.207244,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.23
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.23€/kWh"
    },
    {
        "name": "🔌 NordSpace 2 (Mozūriškių g. 21) | Inbalance grid",
        "address": "Mozūriškių g. 21",
        "city": "Vilnius",
        "lat": 54.707594,
        "lng": 25.207092,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.23
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.23€/kWh"
    },
    {
        "name": "🔌 Loop Hotel  - 2 | Inbalance grid",
        "address": "Dariaus ir Girėno Str. 21",
        "city": "Vilnius",
        "lat": 54.650668,
        "lng": 25.271091,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.23
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.23€/kWh"
    },
    {
        "name": "🔌 Loop Hotel  - 1 | Inbalance grid",
        "address": "Dariaus ir Girėno Str. 21",
        "city": "Vilnius",
        "lat": 54.650618,
        "lng": 25.270787,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.23
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.23€/kWh"
    },
    {
        "name": "🔌 ATLAS co-living - 1 | Inbalance grid",
        "address": "B. Karvelio str. 14",
        "city": "Vilnius",
        "lat": 54.650647,
        "lng": 25.2676,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.23
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.23€/kWh"
    },
    {
        "name": "🔌 ATLAS co-living - 2 | Inbalance grid",
        "address": "B. Karvelio str. 14",
        "city": "Vilnius",
        "lat": 54.650647,
        "lng": 25.2676,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.23
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.23€/kWh"
    },
    {
        "name": "🔌 Porsche Kaunas | Inbalance grid",
        "address": "Savanorių pr. 408",
        "city": "Kaunas",
        "lat": 54.929577,
        "lng": 23.978872,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (300.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Rumšos g. 37, Rumšiškių mstl. | Inbalance grid",
        "address": "Rumšos str. 37",
        "city": "Rumšiškių miestelis, Kaišiadorių sav.",
        "lat": 54.866353,
        "lng": 24.220893,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.33
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.33€/kWh"
    },
    {
        "name": "🔌 Beržyno g. 27, Kaišiadorys | Inbalance grid",
        "address": "Beržyno g. 27",
        "city": "Kaišiadorys",
        "lat": 54.854771,
        "lng": 24.426095,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.33
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.33€/kWh"
    },
    {
        "name": "🔌 Vytauto g. 13, Žiežmariai, Kaišiadorių sav. | Inbalance grid",
        "address": "Vytauto g. 13",
        "city": "Žiežmariai, Kaišiadorių sav.",
        "lat": 54.803363,
        "lng": 24.441031,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.33
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.33€/kWh"
    },
    {
        "name": "🔌 IKI, Šventoji | Inbalance grid",
        "address": "Šventosios g. 11",
        "city": "Palanga",
        "lat": 56.029917,
        "lng": 21.084426,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.23
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.23€/kWh"
    },
    {
        "name": "🔌 NordSpaces 1 (Marvelės g. 108) | Inbalance grid",
        "address": "Marvelės g. 108",
        "city": "Kaunas",
        "lat": 54.901492,
        "lng": 23.852871,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.23
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.23€/kWh"
    },
    {
        "name": "🔌 NordSpaces 2 (Marvelės g. 108) | Inbalance grid",
        "address": "Marvelės g. 108",
        "city": "Kaunas",
        "lat": 54.901657,
        "lng": 23.852954,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.23
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.23€/kWh"
    },
    {
        "name": "🔌 NordSpace 1 (Mozūriškių g. 21) | Inbalance grid",
        "address": "Mozūriškių g. 21",
        "city": "Vilnius",
        "lat": 54.707594,
        "lng": 25.207092,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.23
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.23€/kWh"
    },
    {
        "name": "🔌 IKI Vijūkai | Inbalance grid",
        "address": "Vijūkų g. 125",
        "city": "Kaunas",
        "lat": 54.939174,
        "lng": 23.860508,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.23
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.23€/kWh"
    },
    {
        "name": "🔌 NordSpace (Tarandės g. 2) | Inbalance grid",
        "address": "Tarandės g. 2",
        "city": "Vilnius",
        "lat": 54.74987,
        "lng": 25.212508,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.23
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.23€/kWh"
    },
    {
        "name": "🔌 NordSpace (Talino g. 10A) | Inbalance grid",
        "address": "Talino g. 10A",
        "city": "Vilnius",
        "lat": 54.722332,
        "lng": 25.209189,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.23
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.23€/kWh"
    },
    {
        "name": "🔌 Pusiaukelė A14, 46,18km | Via Lietuva | Inbalance grid",
        "address": "A14",
        "city": "Kovaičiai",
        "lat": 55.084314,
        "lng": 25.352167,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.38
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (59.0kW) - 0.38€/kWh, CHADEMO (59.0kW) - 0.38€/kWh, IEC_62196_T2 (22.0kW) - 0.38€/kWh"
    },
    {
        "name": "🔌 Porsche Klaipėda | Inbalance grid",
        "address": "Jubiliejaus g. 30",
        "city": "Jakų k.",
        "lat": 55.699877,
        "lng": 21.209702,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (300.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Gamybos inovacijų slėnis | Inbalance grid",
        "address": "Nalšios g. 11",
        "city": "Vilnius",
        "lat": 54.786233,
        "lng": 25.277838,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.17
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.17€/kWh"
    },
    {
        "name": "🔌 Esco medical technologies 5 | Inbalance grid",
        "address": "Gamybos g. 2",
        "city": "Ramučiai, Kauno r. sav.,",
        "lat": 54.93823,
        "lng": 24.01992,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.29
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 Esco medical technologies 1 | Inbalance grid",
        "address": "Gamybos g. 2",
        "city": "Ramučiai, Kauno r. sav.,",
        "lat": 54.93823,
        "lng": 24.01992,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.29
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 EIKA 2 | Inbalance grid",
        "address": "A. Goštauto g. 40A",
        "city": "Vilnius",
        "lat": 54.685628,
        "lng": 25.259796,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.25
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 Esco medical technologies 4 | Inbalance grid",
        "address": "Gamybos g. 2",
        "city": "Ramučiai, Kauno r. sav.,",
        "lat": 54.93823,
        "lng": 24.01992,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.29
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 Esco medical technologies 2 | Inbalance grid",
        "address": "Gamybos g. 2",
        "city": "Ramučiai, Kauno r. sav.,",
        "lat": 54.93823,
        "lng": 24.01992,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.29
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 Esco medical technologies 3 | Inbalance grid",
        "address": "Gamybos g. 2",
        "city": "Ramučiai, Kauno r. sav.,",
        "lat": 54.93823,
        "lng": 24.01992,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.29
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 SEB, Konstitucijos pr. 25 | Inbalance grid",
        "address": "Konstitucijos pr 24",
        "city": "Vilnius",
        "lat": 54.697345,
        "lng": 25.268137,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.0
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW)"
    },
    {
        "name": "🔌 VC ELEVEN | Inbalance grid",
        "address": "Kareivių str. 11B",
        "city": "Vilnius",
        "lat": 54.71752,
        "lng": 25.300523,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.29
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 Flow 1 | Inbalance grid",
        "address": "Lvivo g. 21A",
        "city": "Vilnius",
        "lat": 54.695843,
        "lng": 25.280089,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.31
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.31€/kWh"
    },
    {
        "name": "🔌 VC ELEVEN 2 | Inbalance grid",
        "address": "Kareivių str. 11B",
        "city": "Vilnius",
        "lat": 54.71752,
        "lng": 25.300523,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.29
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 BH Meraki | Inbalance grid",
        "address": "Eitminų g. 3",
        "city": "Vilnius",
        "lat": 54.74063,
        "lng": 25.223109,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.29
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 Duetto business home (A building) | Inbalance grid",
        "address": "Spaudos g. 8",
        "city": "Vilnius",
        "lat": 54.701833,
        "lng": 25.21206,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.25
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 Ž112 | Inbalance grid",
        "address": "Žalgirio g. 112",
        "city": "Vilnius",
        "lat": 54.704054,
        "lng": 25.273989,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.29
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 North Star (Underground) | Inbalance grid",
        "address": "Ulonų g. 2",
        "city": "Vilnius",
        "lat": 54.707933,
        "lng": 25.290311,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.25
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 BH Meraki (Outside) | Inbalance grid",
        "address": "Eitminų g. 3",
        "city": "Vilnius",
        "lat": 54.740898,
        "lng": 25.224147,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.26
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.26€/kWh"
    },
    {
        "name": "🔌 Kvistija A1, 238,62km | Via Lietuva | Inbalance grid",
        "address": "A1",
        "city": "Šilalės r.",
        "lat": 55.570088,
        "lng": 22.176164,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.38
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (43.0kW) - 0.38€/kWh, IEC_62196_T2_COMBO (50.0kW) - 0.38€/kWh, CHADEMO (50.0kW) - 0.38€/kWh"
    },
    {
        "name": "🔌 Kvistija A1, 238,03km | Via Lietuva | Inbalance grid",
        "address": "A1",
        "city": "Šilalės r.",
        "lat": 55.568661,
        "lng": 22.1778,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.38
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (43.0kW) - 0.38€/kWh, IEC_62196_T2_COMBO (50.0kW) - 0.38€/kWh, CHADEMO (50.0kW) - 0.38€/kWh"
    },
    {
        "name": "🔌 PLTNMKPIK2_EDLT-88",
        "address": "Pikeliu k. 2",
        "city": "Pikeliai",
        "lat": 55.461015,
        "lng": 22.693746,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.44
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (300.0kW) - 0.66€/kWh, CHADEMO (100.0kW) - 0.44€/kWh, IEC_62196_T2_COMBO (300.0kW) - 0.55€/kWh, IEC_62196_T2_COMBO (150.0kW) - 0.44€/kWh"
    },
    {
        "name": "🔌 Moonplay",
        "address": "Viršuliškių skg. 28, Vilnius, Lithuania",
        "city": "Vilnius",
        "lat": 54.702299,
        "lng": 25.213814,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (43.0kW), CHADEMO (45.0kW) - 0.27€/kWh, IEC_62196_T2_COMBO (45.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 IKEA",
        "address": "Vikingų gatvė 1, Vilnius, Lithuania",
        "city": "Vilnius",
        "lat": 54.651878,
        "lng": 25.282018,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (60.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 Senosios Marijampolės kapinės",
        "address": "Varpo g. 5, Marijampolė",
        "city": "Marijampolė",
        "lat": 54.548061,
        "lng": 23.345457,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.21
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (40.0kW) - 0.21€/kWh"
    },
    {
        "name": "🔌 Marijampolės sporto centras",
        "address": "Sporto g. 1, Marijampolė",
        "city": "Marijampolė",
        "lat": 54.568116,
        "lng": 23.36106,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.0
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW)"
    },
    {
        "name": "🔌 Mokykla „Varpelis\"",
        "address": "Jaunimo g. 6, Marijampolė",
        "city": "Marijampolė",
        "lat": 54.563645,
        "lng": 23.357981,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.0
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (11.0kW)"
    },
    {
        "name": "🔌 IKI Vytauto",
        "address": "Vytauto g. 101, Vilkaviškis",
        "city": "Vilkaviškis",
        "lat": 54.64865,
        "lng": 23.032736,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.31
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (150.0kW) - 0.31€/kWh"
    },
    {
        "name": "🔌 Nemuno baldai",
        "address": "Taikos pr. 125B, Kaunas",
        "city": "Kaunas",
        "lat": 54.918842,
        "lng": 23.988663,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.31
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (150.0kW) - 0.31€/kWh"
    },
    {
        "name": "🔌 IKI Vidzgiris",
        "address": "Jaunimo g. 24",
        "city": "Alytus",
        "lat": 54.391232,
        "lng": 24.021618,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.31
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (150.0kW) - 0.31€/kWh"
    },
    {
        "name": "🔌 Joniškėlio gatvė 4A",
        "address": "Joniškėlio g. 4A, Pasvalys",
        "city": "Pasvalys",
        "lat": 56.062477,
        "lng": 24.392985,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.21
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (60.0kW) - 0.21€/kWh"
    },
    {
        "name": "🔌 Vytauto Didžiojo g. 17, Pakruojis",
        "address": "Vytauto Didžiojo g. 17",
        "city": "Pakruojis",
        "lat": 55.97742,
        "lng": 23.84579,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.25
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (60.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 Restoranas 777",
        "address": "Nekrūnų kaim. 2",
        "city": "Bajoriškės, Lazdijų r.",
        "lat": 54.226236,
        "lng": 23.526305,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.31
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (150.0kW) - 0.31€/kWh"
    },
    {
        "name": "🔌 J. Basanavičiaus gatvė 87A",
        "address": "J. Basanavičiaus g. 87A",
        "city": "Kėdainiai",
        "lat": 55.279449,
        "lng": 23.964927,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.31
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (150.0kW) - 0.31€/kWh"
    },
    {
        "name": "🔌 Sanus",
        "address": "J. Tumo-Vaižganto g. 34",
        "city": "Plungė",
        "lat": 55.910273,
        "lng": 21.840772,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.31
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (180.0kW) - 0.31€/kWh"
    },
    {
        "name": "🔌 Mokyklos gatvė 2",
        "address": "Mokyklos g. 2, Agluonenai, Klaipėedos r.",
        "city": "Agluonėnai, Klaipėdos r.",
        "lat": 55.587028,
        "lng": 21.3957,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (60.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 Klaipėdos AS",
        "address": "Butkų Juzės g. 11, Klaipėda",
        "city": "Klaipėda",
        "lat": 55.719704,
        "lng": 21.139636,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.31
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (180.0kW) - 0.31€/kWh"
    },
    {
        "name": "🔌 Nidos kempingas",
        "address": "E. A. Jonušo g. 11, 93127 Nida, Lithuania",
        "city": "Nida",
        "lat": 55.298793,
        "lng": 20.983194,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.31
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (150.0kW) - 0.31€/kWh"
    },
    {
        "name": "🔌 Prie Žeimenos",
        "address": "Švenčionėlių g. 24, 18239 Kaltanėnai, Lithuan",
        "city": "Kaltanėnai",
        "lat": 55.250222,
        "lng": 25.99533,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.0
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW)"
    },
    {
        "name": "🔌 Molainių gatvė 11",
        "address": "Molainių g. 11",
        "city": "Panevėžys",
        "lat": 55.721766,
        "lng": 24.331631,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.31
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (180.0kW) - 0.31€/kWh"
    },
    {
        "name": "🔌 Azerbaidžiano Kaukazo patiekalai",
        "address": "Bernotiškių kaimas 2, Bernotiškiai, Ukmergės ",
        "city": "Bernotiškiai",
        "lat": 55.187936,
        "lng": 24.581224,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.31
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (150.0kW) - 0.31€/kWh, IEC_62196_T2 (22.0kW)"
    },
    {
        "name": "🔌 IKI Tauragė",
        "address": "Dariaus ir Girėno g. 9",
        "city": "Tauragė",
        "lat": 55.254098,
        "lng": 22.286641,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.31
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (180.0kW) - 0.31€/kWh"
    },
    {
        "name": "🔌 Vynoteka Jurbarkas",
        "address": "Dariaus ir Girėno g. 77",
        "city": "Jurbarkas",
        "lat": 55.079032,
        "lng": 22.774945,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.31
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (180.0kW) - 0.31€/kWh"
    },
    {
        "name": "🔌 Naftrus | Partneris",
        "address": "Topolių g. 1",
        "city": "Degučių k.",
        "lat": 55.97079,
        "lng": 23.586956,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (50.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 PLTKAUBRI1_EDLT-64",
        "address": "Briedžių takas 1",
        "city": "Kaunas",
        "lat": 54.934805,
        "lng": 23.96708,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.55
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (300.0kW) - 0.55€/kWh"
    },
    {
        "name": "🔌 PLTVILTI24_EDLT-70",
        "address": "J. Tiškevičiaus gatvė 24",
        "city": "Vilnius",
        "lat": 54.623189,
        "lng": 25.110648,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.44
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (150.0kW) - 0.44€/kWh"
    },
    {
        "name": "🔌 AUTOBAZĖ Serbentų g. 220 Šiauliai",
        "address": "Serbentų g. 220",
        "city": "Šiauliai",
        "lat": 55.9042013,
        "lng": 23.3239113,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2893
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (160.0kW) - 0.41€/kWh, IEC_62196_T2_COMBO (47.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 Hyper Norfa, Gedminų g. 7a, Klaipėda",
        "address": "Gedminų g. 7a",
        "city": "Klaipėda",
        "lat": 55.6756277,
        "lng": 21.1783141,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2893
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (47.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 Norfa XXL, Šventosios g. 25H, Kretinga",
        "address": "Šventosios g. 25H",
        "city": "Kretinga",
        "lat": 55.8918363,
        "lng": 21.2329129,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2893
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (45.0kW) - 0.29€/kWh, IEC_62196_T2_COMBO (47.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 Norfa XL, Topolių g. 1, Alytus",
        "address": "Topolių g. 1",
        "city": "Alytus",
        "lat": 54.3965165,
        "lng": 24.0280733,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2479
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (47.0kW) - 0.29€/kWh, IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 Norfa XL, Turgaus g. 6a, Ariogala",
        "address": "Turgaus g. 6a",
        "city": "Ariogala",
        "lat": 55.25893,
        "lng": 23.4780724,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2479
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (47.0kW) - 0.29€/kWh, IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 Norfa XL, Pergalės g. 8, Kupiškis",
        "address": "Pergalės g. 8",
        "city": "Kupiškis",
        "lat": 55.8444057,
        "lng": 24.9804514,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2479
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (47.0kW) - 0.29€/kWh, IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 Norfa XXL, Panevėžio g. 1D,  Rokiškis",
        "address": "Panevėžio g. 1D",
        "city": "Rokiškis",
        "lat": 55.9468761,
        "lng": 25.5882879,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2479
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (47.0kW) - 0.29€/kWh, IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 Norfa XXL, Kupiškio g. 54, Utena",
        "address": "Kupiškio g. 54",
        "city": "Utena",
        "lat": 55.5091804,
        "lng": 25.5761752,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2893
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (45.0kW) - 0.29€/kWh, IEC_62196_T2_COMBO (47.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 Norfa XL, Dariaus ir Girėno g. 15, Ukmergė",
        "address": "Dariaus ir Girėno g. 15",
        "city": "Ukmergė",
        "lat": 55.2389038,
        "lng": 24.7845436,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2479
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (47.0kW) - 0.29€/kWh, IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 Norfa XL, Dominikonų g. 12, Raseiniai",
        "address": "Dominikonų g. 12",
        "city": "Raseiniai",
        "lat": 55.3794507,
        "lng": 23.1194086,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2893
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (40.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 Norfa XXL, Dariaus ir Girėno g. 54, Plungė",
        "address": "Dariaus ir Girėno g. 54",
        "city": "Plungė",
        "lat": 55.9218081,
        "lng": 21.8625035,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2893
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (47.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 Norfa XXL, Klaipėdos g.1, Marijampolė",
        "address": "Klaipėdos g.1",
        "city": "Marijampolė",
        "lat": 54.5538433,
        "lng": 23.3712478,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2893
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (47.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 Norfa XL, Šaulių g. 49, Šakiai",
        "address": "Šaulių g. 49",
        "city": "Šakiai",
        "lat": 54.960279,
        "lng": 23.0311195,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2479
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (47.0kW) - 0.29€/kWh, IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 Norfa XL, Sedos g. 53, Mažeikiai",
        "address": "Sedos g. 53",
        "city": "Mažeikiai",
        "lat": 56.299272,
        "lng": 22.3401536,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2479
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (47.0kW) - 0.29€/kWh, IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 Eifelis, Žemaitijos g. 72, Mažeikiai",
        "address": "Žemaitijos g. 72",
        "city": "Mažeikiai",
        "lat": 56.2997606,
        "lng": 22.3526983,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2893
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (47.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 Norfa XL, Plento g. 2A, Venta",
        "address": "Plento g. 2A",
        "city": "Venta",
        "lat": 56.1935722,
        "lng": 22.6791796,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2479
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (47.0kW) - 0.29€/kWh, IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 Norfa XL, Atgimimo g. 1, Garliava, Kauno r.",
        "address": "Atgimimo g. 1",
        "city": "Garliava",
        "lat": 54.8292295,
        "lng": 23.8736113,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2479
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (47.0kW) - 0.29€/kWh, IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 Pakruojo dvaras",
        "address": "Žemdirbių g. 11",
        "city": "Pakruojis",
        "lat": 55.984683,
        "lng": 23.8760508,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2479
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (47.0kW) - 0.29€/kWh, IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 Pakruojo dvaro malūnas",
        "address": "Karčiamos g. 11",
        "city": "Pakruojis",
        "lat": 55.9910541,
        "lng": 23.8809241,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2479
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 Norfa XL, V. Kudirkos g. 91, Šakiai",
        "address": "V. Kudirkos g. 91",
        "city": "Šakiai",
        "lat": 54.9539499,
        "lng": 23.0577646,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2479
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (47.0kW) - 0.29€/kWh, IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 Banketų salės „Centriukas“",
        "address": "Respublikos g. 7A",
        "city": "Rokiškis",
        "lat": 55.9635,
        "lng": 25.587387,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.31
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (180.0kW) - 0.31€/kWh"
    },
    {
        "name": "🔌 J. Basanavičiaus g. 45, Kybartai",
        "address": "J. Basanavičiaus g. 45",
        "city": "Kybartai",
        "lat": 54.638751,
        "lng": 22.762557,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.31
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (150.0kW) - 0.31€/kWh"
    },
    {
        "name": "🔌 PC Avitela - Taikos pr.",
        "address": "Taikos pr. 15, Klaipeda",
        "city": "Klaipėda",
        "lat": 55.703452,
        "lng": 21.143861,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.31
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (150.0kW) - 0.31€/kWh"
    },
    {
        "name": "🔌 Kavinė \"Elara\"",
        "address": "Raudondvario pl. 288S",
        "city": "Kaunas",
        "lat": 54.921047,
        "lng": 23.809498,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.31
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (180.0kW) - 0.31€/kWh"
    },
    {
        "name": "🔌 Užeiga \"Ranča\"",
        "address": "Kulių g. 80, Varkaliai, Plungės r. sav.",
        "city": "Varkaliai",
        "lat": 55.887294,
        "lng": 21.793871,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.31
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (180.0kW) - 0.31€/kWh"
    },
    {
        "name": "🔌 Gamyklos gatvė 30",
        "address": "Gamyklos g. 30, Mažeikiai",
        "city": "Mažeikiai",
        "lat": 56.31323,
        "lng": 22.329028,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.21
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (180.0kW) - 0.21€/kWh"
    },
    {
        "name": "🔌 Ukmergės g. 6A",
        "address": "Ukmergės g. 6A, 35201 Panevėžys, Lithuania",
        "city": "Panevėžys",
        "lat": 55.728171,
        "lng": 24.364582,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.32
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (180.0kW) - 0.32€/kWh"
    },
    {
        "name": "🔌 Taikos pr. 80",
        "address": "Taikos pr. 80, 93162 Klaipėda, Lithuania",
        "city": "Klaipėda",
        "lat": 55.675459,
        "lng": 21.167432,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.31
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (150.0kW) - 0.31€/kWh"
    },
    {
        "name": "🔌 Prie Launedva",
        "address": "Birutės g. 67A, 90112 Plungė, Lithuania",
        "city": "Plungė",
        "lat": 55.916614,
        "lng": 21.806327,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.31
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (180.0kW) - 0.31€/kWh"
    },
    {
        "name": "🔌 V150C",
        "address": "Veiverių g. 150C, Kaunas",
        "city": "Kaunas",
        "lat": 54.862231,
        "lng": 23.885492,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.31
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (180.0kW) - 0.31€/kWh"
    },
    {
        "name": "🔌 Maisto prekių parduotuvė „Grizlis“",
        "address": "Mažosios Lietuvos g. 3, Saugų k.",
        "city": "Saugų k.",
        "lat": 55.464225,
        "lng": 21.463349,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.31
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (180.0kW) - 0.31€/kWh"
    },
    {
        "name": "🔌 PLTKAUATE4_EDLT-98",
        "address": "Ateities plentas 4a",
        "city": "Kaunas",
        "lat": 54.896164,
        "lng": 24.012323,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.44
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (50.0kW) - 0.44€/kWh, CHADEMO (50.0kW) - 0.44€/kWh"
    },
    {
        "name": "🔌 Norfa XL, Klaipėdos g. 41,  Gargždai",
        "address": "Klaipėdos g. 41",
        "city": "Gargždai",
        "lat": 55.7124714,
        "lng": 21.3811276,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.405
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (240.0kW) - 0.41€/kWh"
    },
    {
        "name": "🔌 Norfa XXL, Žeimių g. 26A,  Jonava",
        "address": "Žeimių g. 26A",
        "city": "Jonava",
        "lat": 55.0837242,
        "lng": 24.2737739,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2893
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (47.0kW) - 0.29€/kWh, IEC_62196_T2_COMBO (120.0kW) - 0.41€/kWh"
    },
    {
        "name": "🔌 Bikuva Jonava",
        "address": "Lietavos g. 10, 55124 Jonava, Lithuania",
        "city": "Jonava",
        "lat": 55.083664,
        "lng": 24.275174,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.31
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (150.0kW) - 0.31€/kWh"
    },
    {
        "name": "🔌 Norfa XL, Genių g. 10A,  Vilnius",
        "address": "Genių g. 10A",
        "city": "Vilnius",
        "lat": 54.6883931,
        "lng": 25.422445,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2893
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (47.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 Norfa XL, Dariaus ir Girėno g. 3A-1, Marijampolė",
        "address": "Dariaus ir Girėno g. 3A-1",
        "city": "Marijampolė",
        "lat": 54.5614751,
        "lng": 23.3541854,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2479
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (47.0kW) - 0.29€/kWh, IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 Norfa XL, Vilkaviškio g. 61C, Marijampolė",
        "address": "Vilkaviškio g. 61C",
        "city": "Marijampolė",
        "lat": 54.5627801,
        "lng": 23.3322204,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2893
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (47.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 Norfa XXL Sabališkių g. 1J, Elektrėnai",
        "address": "Sabališkių g. 1J, Elektrėnai",
        "city": "Elektrėnai",
        "lat": 54.7879392,
        "lng": 24.6812292,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.405
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (240.0kW) - 0.41€/kWh, IEC_62196_T2_COMBO (120.0kW) - 0.41€/kWh"
    },
    {
        "name": "🔌 Bikuva Kėdainiai",
        "address": "S. Dariaus ir S. Girėno g. 21A, 57148 Kėdaini",
        "city": "Kėdainiai",
        "lat": 55.311715,
        "lng": 23.978141,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.31
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (150.0kW) - 0.31€/kWh"
    },
    {
        "name": "🔌 Karališkių gatvė 1",
        "address": "Karališkių g. 1, Trušelių k.",
        "city": "Trušeliai, Klaipėdos r.",
        "lat": 55.748713,
        "lng": 21.193225,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (150.0kW) - 0.31€/kWh, IEC_62196_T2_COMBO (60.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 Giraites turgus",
        "address": "J. Basanavičiaus g. 80A, 57361 Kėdainiai, Lit",
        "city": "Kėdainiai",
        "lat": 55.280239,
        "lng": 23.964383,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW), IEC_62196_T2_COMBO (60.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 Hesburger Jakai",
        "address": "Vilniaus pl. 9, Jakai, Klaipėdos r.",
        "city": "Jakų k., Klaipėdos r.",
        "lat": 55.706052,
        "lng": 21.238266,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (150.0kW) - 0.31€/kWh, IEC_62196_T2_COMBO (50.0kW) - 0.27€/kWh, CHADEMO (50.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 Padėlio namai",
        "address": "Jungtinė g. 1, Aukštkiemių k., Klaipėda",
        "city": "Aukštkiemiai",
        "lat": 55.765455,
        "lng": 21.161339,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.29
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (60.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 M. K. Čiurlionio gatvė 103",
        "address": "M. K. Čiurlionio g. 103, Druskininkai",
        "city": "Druskininkai",
        "lat": 54.012007,
        "lng": 23.989139,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.31
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (180.0kW) - 0.31€/kWh"
    },
    {
        "name": "🔌 Boulingas Mažeikiai",
        "address": "Gamyklos g. 1, 89231 Mažeikiai, Lithuania",
        "city": "Mažeikiai",
        "lat": 56.309545,
        "lng": 22.339799,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.31
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW), IEC_62196_T2_COMBO (180.0kW) - 0.31€/kWh"
    },
    {
        "name": "🔌 Topolis",
        "address": "Vienybės g. 47, 70158 Vilkaviškis, Lithuania",
        "city": "Vilkaviškis",
        "lat": 54.656996,
        "lng": 23.034595,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.31
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (180.0kW) - 0.31€/kWh"
    },
    {
        "name": "🔌 Hyper Norfa, Kalvarijų g. 151, Vilnius",
        "address": "Kalvarijų g. 151",
        "city": "Vilnius",
        "lat": 54.7216748,
        "lng": 25.2876241,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2893
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (80.0kW) - 0.41€/kWh, IEC_62196_T2_COMBO (47.0kW) - 0.29€/kWh, IEC_62196_T2_COMBO (160.0kW) - 0.41€/kWh"
    },
    {
        "name": "🔌 Norfa XL, Maironio g. 1, Kaišiadorys",
        "address": "Maironio g. 1",
        "city": "Kaišiadorys",
        "lat": 54.8618399,
        "lng": 24.4531783,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2479
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (47.0kW) - 0.29€/kWh, IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 Norfa XL, Jonyno g. 10C Alytus",
        "address": "Jonyno g. 10C",
        "city": "Alytus",
        "lat": 54.4128368,
        "lng": 24.0219617,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2479
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (47.0kW) - 0.29€/kWh, IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 Prie Rūdiškių Norfos",
        "address": "Trakų g. 10A, 21177 Rūdiškės, Lithuania",
        "city": "Rūdiškės",
        "lat": 54.521161,
        "lng": 24.834831,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (45.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 Alyvų g. 8",
        "address": "Alyvų g. 8, 41133 Biržai, Lithuania",
        "city": "Biržai",
        "lat": 56.208206,
        "lng": 24.72299,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW), IEC_62196_T2_COMBO (50.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 K. Naruševičiaus g. 2",
        "address": "K. Naruševičiaus g. 2, 37124 Panevėžys, Lithu",
        "city": "Panevėžys",
        "lat": 55.727905,
        "lng": 24.29927,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (180.0kW) - 0.31€/kWh, IEC_62196_T2_COMBO (60.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 Kalniškės g. 2",
        "address": "Kalniškės g. 2, 62416 Alytus, Lithuania",
        "city": "Alytus",
        "lat": 54.411294,
        "lng": 24.00886,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.21
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (45.0kW) - 0.21€/kWh"
    },
    {
        "name": "🔌 Skvero g. 1D",
        "address": "Skvero g. 1d, 69420 Kazlų Rūda, Lithuania",
        "city": "Kazlų Rūda",
        "lat": 54.750998,
        "lng": 23.500838,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.31
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (180.0kW) - 0.31€/kWh"
    },
    {
        "name": "🔌 PLTDRUCI55_EDLT-86",
        "address": "M. K. Čiurlionio gatvė 55",
        "city": "Druskininkai",
        "lat": 54.017228,
        "lng": 23.971515,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.44
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (150.0kW) - 0.44€/kWh, CHADEMO (100.0kW) - 0.44€/kWh"
    },
    {
        "name": "🔌 Nevėžio g. 9",
        "address": "Nevėžio g. 9, 38357 Berčiūnai, Panevėžio r., ",
        "city": "Berčiūnai",
        "lat": 55.735761,
        "lng": 24.231679,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.31
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (150.0kW) - 0.31€/kWh"
    },
    {
        "name": "🔌 Senamiesčio turgus",
        "address": "Turgaus a. 5, 91246 Klaipėda, Lithuania",
        "city": "Klaipėda",
        "lat": 55.706581,
        "lng": 21.138146,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.32
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (200.0kW) - 0.32€/kWh"
    },
    {
        "name": "🔌 Naujasis Molėtų turgus",
        "address": "Sakalo g. 3, Molėtai",
        "city": "Molėtai",
        "lat": 55.221406,
        "lng": 25.433676,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.25
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (60.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 Alovės Karčiama",
        "address": "Vilniaus g. 40, 64104, Lithuania",
        "city": "Alytaus apskr.",
        "lat": 54.367231,
        "lng": 24.15835,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (120.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 Cafe Baltica",
        "address": "Rygos g. 2, Saločiai, Pasvalio r.",
        "city": "Saločiai, Pasvalio r.",
        "lat": 56.24111,
        "lng": 24.41328,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.31
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (180.0kW) - 0.31€/kWh"
    },
    {
        "name": "🔌 PLTVILSPA7_EDLT-75",
        "address": "Spaudos gatvė 7",
        "city": "Vilnius",
        "lat": 54.701201,
        "lng": 25.213685,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.51
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (150.0kW) - 0.51€/kWh"
    },
    {
        "name": "🔌 KOOPs Vandžiogala",
        "address": "Kėdainių g. 2, Vandžiogala, Lithuania",
        "city": "Vandžiogala",
        "lat": 55.11706,
        "lng": 23.96167,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (45.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 Techasas",
        "address": "J. Basanavičiaus g. 7, 57186 Kėdainiai, Lithu",
        "city": "Kėdainiai",
        "lat": 55.296432,
        "lng": 23.980916,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.31
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (180.0kW) - 0.31€/kWh"
    },
    {
        "name": "🔌 IKI Juodlė",
        "address": "Vytauto g. 257, 77180 Šiauliai, Lithuania",
        "city": "Šiauliai",
        "lat": 55.937839,
        "lng": 23.290403,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.31
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (180.0kW) - 0.31€/kWh, IEC_62196_T2 (22.0kW)"
    },
    {
        "name": "🔌 Smėlio Arena Justiniškių g. 12",
        "address": "Justiniškių g. 12",
        "city": "Vilnius",
        "lat": 54.7029759,
        "lng": 25.2186321,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2479
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 G76 UAB",
        "address": "Gedimino g., 76",
        "city": "Marijampolė",
        "lat": 54.5538295,
        "lng": 23.3692392,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2479
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 Norfa XL Geležinkelio g. 1A, Šilutė",
        "address": "Geležinkelio g. 1A",
        "city": "Šilutė",
        "lat": 55.3456246,
        "lng": 21.4841966,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2479
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (47.0kW) - 0.29€/kWh, IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 Norfa XL Luokės g. 91, Telšiai",
        "address": "Luokės g. 91",
        "city": "Telšiai",
        "lat": 55.9744758,
        "lng": 22.2718012,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2479
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (47.0kW) - 0.29€/kWh, IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 Norfa XL, Vytauto g. 28, Zarasai",
        "address": "Vytauto g. 28",
        "city": "Zarasai",
        "lat": 55.7347995,
        "lng": 26.2576608,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2479
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (47.0kW) - 0.29€/kWh, IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 Bikuva Elektrėnai",
        "address": "Pergalės g. 2, 26128 Elektrėnai, Lithuania",
        "city": "Elektrėnai",
        "lat": 54.786261,
        "lng": 24.682352,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (120.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 Bikuva Utena",
        "address": "Užpalių g. 81, 28198 Utena, Lithuania",
        "city": "Utena",
        "lat": 55.509312,
        "lng": 25.611079,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.31
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (150.0kW) - 0.31€/kWh"
    },
    {
        "name": "🔌 Celsis Panevėžys",
        "address": "J. Janonio g. 1, 35101 Panevėžys, Lithuania",
        "city": "Panevėžys",
        "lat": 55.74223,
        "lng": 24.331412,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.31
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (180.0kW) - 0.31€/kWh"
    },
    {
        "name": "🔌 Autoservisas Automagija",
        "address": "Dubijos g. 16, 77172 Šiauliai, Lithuania",
        "city": "Šiauliai",
        "lat": 55.929935,
        "lng": 23.294601,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (50.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 IKI Žaliakalnis",
        "address": "Savanorių pr. 115, 44182 Kaunas, Lithuania",
        "city": "Kaunas",
        "lat": 54.904799,
        "lng": 23.915827,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.29
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (150.0kW) - 0.32€/kWh, CHADEMO (50.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 Kavinė \"Šeimos užkandinė\"",
        "address": "Klaipėdos g. 95, 74236 Viešvilė, Lithuania",
        "city": "Viešvilė",
        "lat": 55.072399,
        "lng": 22.386986,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.21
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (150.0kW) - 0.21€/kWh"
    },
    {
        "name": "🔌 Bikuva Kuršėnai",
        "address": "Vytauto g. 76A, 81189 Kuršėnai, Lithuania",
        "city": "Kuršėnai",
        "lat": 56.013779,
        "lng": 22.951637,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (120.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 Šilutės Halė",
        "address": "H. Šojaus g. 2D, 99123 Šilutė, Lithuania",
        "city": "Šilutė",
        "lat": 55.343888,
        "lng": 21.470425,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.31
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (150.0kW) - 0.31€/kWh"
    },
    {
        "name": "🔌 Norfa XL, Statybininkų g. 9, Joniškis",
        "address": "Statybininkų g. 9",
        "city": "Joniškis",
        "lat": 56.2422874,
        "lng": 23.6250298,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2479
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (47.0kW) - 0.29€/kWh, IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 Norfa XL, Gumbinės g. 145a, Šiauliai",
        "address": "Gumbinės g. 145a",
        "city": "Šiauliai",
        "lat": 55.9414179,
        "lng": 23.2822848,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2893
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (47.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 Norfa XXL, Draugystės g. 9, Visaginas",
        "address": "Draugystės g. 9",
        "city": "Visaginas",
        "lat": 55.5947298,
        "lng": 26.4448548,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2479
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (47.0kW) - 0.29€/kWh, IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 Norfa XL, Tilžės g. 13a, Šiauliai",
        "address": "Tilžės g. 13a",
        "city": "Šiauliai",
        "lat": 55.911783,
        "lng": 23.2681411,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2479
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (47.0kW) - 0.29€/kWh, IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 Norfa XL, Statybininkų g. 2a, Pakruojis",
        "address": "Statybininkų g. 2a",
        "city": "Pakruojis",
        "lat": 55.9796732,
        "lng": 23.8569358,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2479
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (47.0kW) - 0.29€/kWh, IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 Norfa XL, Santaikos g. 28a, Alytus",
        "address": "Santaikos g. 28a",
        "city": "Alytus",
        "lat": 54.3878708,
        "lng": 24.0312071,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2479
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (47.0kW) - 0.29€/kWh, IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 Norfa XL Lazdijai, Vilniaus 48",
        "address": "Vilniaus 48",
        "city": "Lazdijai",
        "lat": 54.2313789,
        "lng": 23.5256745,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2479
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 Norfa XL, Respublikos g. 30a, Naujoji Akmenė",
        "address": "Respublikos g. 30a",
        "city": "Naujoji Akmenė",
        "lat": 56.3197474,
        "lng": 22.8732719,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2479
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (47.0kW) - 0.29€/kWh, IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 Norfa XXL Šiauliai, Tilžės 59",
        "address": "59 Tilžės",
        "city": "Šiauliai",
        "lat": 55.9169903,
        "lng": 23.2829709,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2479
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (40.0kW) - 0.29€/kWh, IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 Karpynė",
        "address": "Karpynės g. 2, 60192 Gabšiai, Lithuania",
        "city": "Gabšiai",
        "lat": 55.339963,
        "lng": 23.098531,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.29
        },
        "ev_status": "Laisva",
        "ev_connectors": "CHADEMO (50.0kW) - 0.29€/kWh, IEC_62196_T2_COMBO (300.0kW) - 0.39€/kWh, IEC_62196_T2_COMBO (50.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 IKI Marijampolė",
        "address": "Vilkaviškio g. 72a, 68171 Marijampolė, Lithua",
        "city": "Marijampolė",
        "lat": 54.563458,
        "lng": 23.331849,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.31
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (150.0kW) - 0.31€/kWh"
    },
    {
        "name": "🔌 PLTSKIPAS6_EDLT-144",
        "address": "Pasienio g. 6",
        "city": "Škilinpamūšis",
        "lat": 56.272722,
        "lng": 24.367615,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.51
        },
        "ev_status": "Laisva",
        "ev_connectors": "CHADEMO (75.0kW) - 0.51€/kWh, IEC_62196_T2_COMBO (150.0kW) - 0.51€/kWh"
    },
    {
        "name": "🔌 PLTVILZAD1_EDLT-63",
        "address": "P. Žadeikos gatvė 1A",
        "city": "Vilnius",
        "lat": 54.730233,
        "lng": 25.239461,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.51
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (150.0kW) - 0.51€/kWh"
    },
    {
        "name": "🔌 Bikuva Mažeikiai",
        "address": "Skuodo g. 7, 89145 Mažeikiai, Lithuania",
        "city": "Mažeikiai",
        "lat": 56.310382,
        "lng": 22.320097,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (120.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 Užeiga \"Klėtis\"",
        "address": "Klėties g. 4, Jundeliškės, 59450 Birštono sav",
        "city": "Jundeliškės",
        "lat": 54.57723,
        "lng": 24.108925,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.31
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (150.0kW) - 0.31€/kWh"
    },
    {
        "name": "🔌 IKI Šeškinė",
        "address": "Šeškinės g. 32, 07157 Vilnius, Lithuania",
        "city": "Vilnius",
        "lat": 54.715235,
        "lng": 25.246704,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.32
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (150.0kW) - 0.32€/kWh"
    },
    {
        "name": "🔌 IKI Prienai",
        "address": "Vilniaus g. 1, 59116 Prienai, Lietuva",
        "city": "Prienai",
        "lat": 54.629083,
        "lng": 23.957147,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW), IEC_62196_T2_COMBO (60.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 Savanorių a. 22",
        "address": "Savanorių a. 22, 35201 Panevėžys, Lithuania",
        "city": "Panevėžys",
        "lat": 55.726611,
        "lng": 24.365667,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.29
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (150.0kW) - 0.32€/kWh, CHADEMO (50.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 Moon Play | Inbalance grid",
        "address": "Viršuliškių Skg. 28",
        "city": "Vilnius",
        "lat": 54.702152,
        "lng": 25.213302,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.23
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.23€/kWh"
    },
    {
        "name": "🔌 Valkininkai, Vilnius g.",
        "address": "Vilniaus g. 2",
        "city": "Valkininkai",
        "lat": 54.364948,
        "lng": 24.837124,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.28
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (240.0kW) - 0.28€/kWh"
    },
    {
        "name": "🔌 Lidl Vilnius Liepkalnio",
        "address": "Liepkalnio gatvė 102",
        "city": "Vilnius",
        "lat": 54.654775,
        "lng": 25.303493,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.3
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (50.0kW) - 0.36€/kWh, IEC_62196_T2 (22.0kW) - 0.30€/kWh, CHADEMO (50.0kW) - 0.36€/kWh"
    },
    {
        "name": "🔌 Lidl Ginduliai",
        "address": "Piligrimų g 2",
        "city": "Slengiai",
        "lat": 55.734009,
        "lng": 21.188362,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.3
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (43.0kW) - 0.30€/kWh, IEC_62196_T2_COMBO (50.0kW) - 0.36€/kWh, IEC_62196_T2 (22.0kW) - 0.30€/kWh, CHADEMO (50.0kW) - 0.36€/kWh"
    },
    {
        "name": "🔌 Lidl Avižieniai",
        "address": "Draugystės gatvė 2M",
        "city": "Avižieniai",
        "lat": 54.762119,
        "lng": 25.202295,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.3
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (43.0kW) - 0.30€/kWh, IEC_62196_T2_COMBO (50.0kW) - 0.36€/kWh, IEC_62196_T2 (22.0kW) - 0.30€/kWh, CHADEMO (50.0kW) - 0.36€/kWh"
    },
    {
        "name": "🔌 Lager Vilnius",
        "address": "Jogėliškių g 1",
        "city": "Vilnius",
        "lat": 54.625755,
        "lng": 25.069132,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.3
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.30€/kWh"
    },
    {
        "name": "🔌 Lidl Molėtai",
        "address": "Aplinkkelio gatvė 163",
        "city": "Paluokesa",
        "lat": 55.221231,
        "lng": 25.437472,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.3
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (43.0kW) - 0.30€/kWh, IEC_62196_T2_COMBO (50.0kW) - 0.36€/kWh, CHADEMO (50.0kW) - 0.36€/kWh"
    },
    {
        "name": "🔌 Lidl Vilnius Dangeručio gatvė",
        "address": "Dangeručio gatvė 2",
        "city": "Vilnius",
        "lat": 54.780225,
        "lng": 25.275646,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.3
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (43.0kW) - 0.30€/kWh, IEC_62196_T2_COMBO (50.0kW) - 0.36€/kWh, CHADEMO (50.0kW) - 0.36€/kWh, IEC_62196_T2 (22.0kW) - 0.30€/kWh"
    },
    {
        "name": "🔌 Lild Galgiai",
        "address": "Taikos g. 1A",
        "city": "Galgiai",
        "lat": 54.712555,
        "lng": 25.414215,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.3
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (43.0kW) - 0.30€/kWh, IEC_62196_T2_COMBO (50.0kW) - 0.36€/kWh, CHADEMO (50.0kW) - 0.36€/kWh"
    },
    {
        "name": "🔌 LLT0219EVCP05",
        "address": "Dariaus ir Girėno gatvė 83",
        "city": "Jurbarkas",
        "lat": 55.079074,
        "lng": 22.776734,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.3
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (43.0kW) - 0.30€/kWh, IEC_62196_T2_COMBO (50.0kW) - 0.36€/kWh, IEC_62196_T2 (22.0kW) - 0.30€/kWh, CHADEMO (50.0kW) - 0.36€/kWh"
    },
    {
        "name": "🔌 Lidl Kaunas Savanoriai",
        "address": "Savanorių prospektas 315",
        "city": "Kaunas",
        "lat": 54.9198,
        "lng": 23.9493,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.3
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (50.0kW) - 0.36€/kWh, CHADEMO (50.0kW) - 0.36€/kWh, IEC_62196_T2 (22.0kW) - 0.30€/kWh"
    },
    {
        "name": "🔌 Lidl Šiauliai Aukštoji",
        "address": "Tilžės gatvė 217",
        "city": "Šiauliai",
        "lat": 55.9398,
        "lng": 23.3256,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.3
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (50.0kW) - 0.36€/kWh, IEC_62196_T2 (22.0kW) - 0.30€/kWh, CHADEMO (50.0kW) - 0.36€/kWh"
    },
    {
        "name": "🔌 Lidl Klaipėda Gedminai",
        "address": "Statybininkų prospektas 18",
        "city": "Klaipėda",
        "lat": 55.6743,
        "lng": 21.1746,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.3
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (50.0kW) - 0.36€/kWh, IEC_62196_T2 (22.0kW) - 0.30€/kWh, CHADEMO (50.0kW) - 0.36€/kWh"
    },
    {
        "name": "🔌 Lidl Kaisiadorys",
        "address": "Gedimino gatvė 135a",
        "city": "Kaišiadorys",
        "lat": 54.854731,
        "lng": 24.440375,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.3
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (50.0kW) - 0.36€/kWh, CHADEMO (50.0kW) - 0.36€/kWh, IEC_62196_T2 (22.0kW) - 0.30€/kWh"
    },
    {
        "name": "🔌 Lidl Vilnius Valakampiai",
        "address": "Nemenčinės pl. 15",
        "city": "Vilnius",
        "lat": 54.730565,
        "lng": 25.3323,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.3
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (43.0kW) - 0.30€/kWh, IEC_62196_T2_COMBO (50.0kW) - 0.36€/kWh, CHADEMO (50.0kW) - 0.36€/kWh"
    },
    {
        "name": "🔌 Lidl Elektrėnai",
        "address": "Sabališkių gatvė 1",
        "city": "Elektrėnai",
        "lat": 54.789357,
        "lng": 24.675137,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.3
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (50.0kW) - 0.36€/kWh, IEC_62196_T2 (22.0kW) - 0.30€/kWh, CHADEMO (50.0kW) - 0.36€/kWh"
    },
    {
        "name": "🔌 Lidl Gargždai",
        "address": "Dariaus ir Girėno gatvė 2",
        "city": "Gargždai",
        "lat": 55.711664,
        "lng": 21.383505,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.3
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.30€/kWh"
    },
    {
        "name": "🔌 Lidl Gargždai",
        "address": "Dariaus ir Girėno gatvė 2",
        "city": "Gargždai",
        "lat": 55.711526,
        "lng": 21.383602,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.3
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (50.0kW) - 0.36€/kWh, CHADEMO (50.0kW) - 0.36€/kWh, IEC_62196_T2 (22.0kW) - 0.30€/kWh"
    },
    {
        "name": "🔌 PLTVILEST1_EDLT-131",
        "address": "Estu gatvė 1",
        "city": "Vilnius",
        "lat": 54.652474,
        "lng": 25.343031,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.44
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (60.0kW) - 0.44€/kWh"
    },
    {
        "name": "🔌 PC BIG",
        "address": "Taikos pr. 141, 94284 Klaipėda, Lithuania",
        "city": "Klaipėda",
        "lat": 55.664357,
        "lng": 21.17833,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.29
        },
        "ev_status": "Laisva",
        "ev_connectors": "CHADEMO (50.0kW) - 0.29€/kWh, IEC_62196_T2_COMBO (150.0kW) - 0.39€/kWh"
    },
    {
        "name": "🔌 Gabera Aibė",
        "address": "Bičių gatvė 37, 96325 Jakai, Lietuva",
        "city": "Jakai",
        "lat": 55.693475,
        "lng": 21.227821,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.31
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (180.0kW) - 0.31€/kWh"
    },
    {
        "name": "🔌 Rimi Kretinga",
        "address": "Šventosios g. 27B, Kretinga, 97124 Kretingos ",
        "city": "Kretinga",
        "lat": 55.894476,
        "lng": 21.234822,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (150.0kW) - 0.31€/kWh, IEC_62196_T2 (22.0kW), CHADEMO (50.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 JYSK Klaipėdos g. 168A, Panevėžys",
        "address": "Klaipėdos g. 168A",
        "city": "Panevėžys",
        "lat": 55.7317584,
        "lng": 24.3010693,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2893
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (40.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 Norfa XL, Dariaus ir Girėno g. 46, Skuodas",
        "address": "Dariaus ir Girėno g. 46",
        "city": "Skuodas",
        "lat": 56.2692564,
        "lng": 21.5407994,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2479
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (47.0kW) - 0.29€/kWh, IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 Norfa XL, Mokyklos g. 2C Egliškių k., Mickūnų sen.",
        "address": "Mokyklos g. 2C Egliškių k., Mickūnų sen., Vil",
        "city": "Naujoji Vilnia",
        "lat": 54.7122062,
        "lng": 25.413979,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2479
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (47.0kW) - 0.29€/kWh, IEC_62196_T2 (11.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 Eifelis Vytauto g. 113-1, Dukstynos k., Ukmergė",
        "address": "Vytauto g. 113-1, Dukstynos k., Ukmergės r.",
        "city": "Ukmergės",
        "lat": 55.2603149,
        "lng": 24.793345,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.405
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (240.0kW) - 0.41€/kWh"
    },
    {
        "name": "🔌 Norfa XL, Dzūkų g. 3, Lazdijai",
        "address": "Dzūkų g. 3",
        "city": "Lazdijai",
        "lat": 54.2390364,
        "lng": 23.5121991,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2479
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (47.0kW) - 0.29€/kWh, IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 Norfa XL, J. Basanavičiaus g. 39, Varėna",
        "address": "J. Basanavičiaus g. 39",
        "city": "Varėna",
        "lat": 54.2182036,
        "lng": 24.5789283,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2479
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (47.0kW) - 0.29€/kWh, IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 Restoranas - Villa Audruvis",
        "address": "Sodų g. 1,",
        "city": "Ziniūnai, Joniškio sen.",
        "lat": 56.2321741,
        "lng": 23.5856206,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2479
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (240.0kW) - 0.41€/kWh, IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 Norfa XXL, Vilniaus g. 99, Molėtai",
        "address": "Vilniaus g. 99",
        "city": "Molėtai",
        "lat": 55.2245378,
        "lng": 25.4053453,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2893
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (47.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 PC Tilžė, Tilžės g. 225, Šiauliai",
        "address": "Tilžės g. 225",
        "city": "Šiauliai",
        "lat": 55.9415395,
        "lng": 23.3271408,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2893
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (47.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 PC Tilžė, Tilžės g. 225 Šiauliai",
        "address": "Tilžės g. 225",
        "city": "Šiauliai",
        "lat": 55.9413383,
        "lng": 23.3269315,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.405
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (200.0kW) - 0.41€/kWh, IEC_62196_T2_COMBO (120.0kW) - 0.41€/kWh"
    },
    {
        "name": "🔌 PLTKURVY80_EDLT-135",
        "address": "Vytauto gatvė 80",
        "city": "Kuršėnai",
        "lat": 56.014905,
        "lng": 22.950854,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.44
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (180.0kW) - 0.44€/kWh"
    },
    {
        "name": "🔌 PLTKUPKI10_EDLT-139",
        "address": "Kikonių g. 10B",
        "city": "Pyragiai",
        "lat": 55.823995,
        "lng": 25.002368,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.51
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (300.0kW) - 0.55€/kWh, IEC_62196_T2_COMBO (150.0kW) - 0.51€/kWh"
    },
    {
        "name": "🔌 PLTANYPU25_EDLT-84",
        "address": "Pumpučių gatvė 25",
        "city": "Pumpučiai",
        "lat": 55.424212,
        "lng": 24.920372,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.44
        },
        "ev_status": "Laisva",
        "ev_connectors": "CHADEMO (50.0kW) - 0.44€/kWh, IEC_62196_T2_COMBO (150.0kW) - 0.44€/kWh"
    },
    {
        "name": "🔌 Norfa XL, Parko g. 1a, Marijampolė",
        "address": "Parko g. 1a",
        "city": "Marijampolė",
        "lat": 54.5702209,
        "lng": 23.3614072,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2893
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (47.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 Norfa XL Žemutinė g. 26, Švenčionėliai",
        "address": "Žemutinė g. 26",
        "city": "Švenčionėliai",
        "lat": 55.1695284,
        "lng": 26.0043292,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2479
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (47.0kW) - 0.29€/kWh, IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 Norfa XL Vilniaus g. 19, Eišiškės",
        "address": "Vilniaus g. 19",
        "city": "Eišiškės",
        "lat": 54.1713696,
        "lng": 24.9978117,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2479
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (47.0kW) - 0.29€/kWh, IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 Norfa XL Molėtų g. 4A, Pabradė",
        "address": "Molėtų g. 4A",
        "city": "Pabradė",
        "lat": 54.9796823,
        "lng": 25.7563965,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2479
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (47.0kW) - 0.29€/kWh, IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 Norfa XXL, Vilniaus g. 22, Anykščiai",
        "address": "Vilniaus g. 22",
        "city": "Anykščiai",
        "lat": 55.5225969,
        "lng": 25.0992865,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2479
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (47.0kW) - 0.29€/kWh, IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 Telšių g. 3",
        "address": "Telšių g. 3, 90162 Plungė, Lithuania",
        "city": "Plungė",
        "lat": 55.912735,
        "lng": 21.848331,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.31
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (150.0kW) - 0.31€/kWh"
    },
    {
        "name": "🔌 Restoranas Cordo.22",
        "address": "Pamarliškių g. 22, 38417 Maksvytiškiai, Lithu",
        "city": "Maksvytiškiai",
        "lat": 55.780538,
        "lng": 24.369658,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (60.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 Maxima V. Krėvės pr.",
        "address": "V. Krėvės pr. 14B, Kaunas, 50416 Kauno m. sav",
        "city": "Kaunas",
        "lat": 54.915434,
        "lng": 23.962518,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.31
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (150.0kW) - 0.31€/kWh"
    },
    {
        "name": "🔌 Maxima Liepojos",
        "address": "Liepojos g. 10",
        "city": "Klaipėda",
        "lat": 55.732262,
        "lng": 21.127174,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.29
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (150.0kW) - 0.32€/kWh, CHADEMO (50.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 Autoservisas Alavina",
        "address": "F. Martišiaus g. 9, 59125 Prienai, Lithuania",
        "city": "Prienai",
        "lat": 54.632333,
        "lng": 23.946014,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.31
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (180.0kW) - 0.31€/kWh"
    },
    {
        "name": "🔌 Žemaitės al. 37",
        "address": "Žemaitės al. 37, 97106 Kretinga, Lithuania",
        "city": "Kretinga",
        "lat": 55.893037,
        "lng": 21.266913,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.31
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (150.0kW) - 0.31€/kWh"
    },
    {
        "name": "🔌 Kavinė \"Makdonė\"",
        "address": "Vilniaus g. 16, 17140 Dieveniškės, Lithuania",
        "city": "Dieveniškės",
        "lat": 54.197737,
        "lng": 25.62472,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.25
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (45.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 IKI Plungė-turgus",
        "address": "Laisvės g. 5, 90164 Plungė, Lithuania",
        "city": "Plungė",
        "lat": 55.90873,
        "lng": 21.856601,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (150.0kW) - 0.31€/kWh, CHADEMO (50.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 Vilniaus intermodalinis terminalas",
        "address": "Terminalo g. 8, 13279 Vilnius, Lithuania",
        "city": "Vilnius",
        "lat": 54.579477,
        "lng": 25.234831,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.31
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (360.0kW) - 0.31€/kWh"
    },
    {
        "name": "🔌 IKI Lentvaris",
        "address": "Geležinkelio gatvė 38",
        "city": "Lentvaris",
        "lat": 54.643978,
        "lng": 25.047042,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.0
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW)"
    },
    {
        "name": "🔌 Maxima Raudondvario pl.",
        "address": "Raudondvario pl. 284, 47158 Kaunas, Lithuania",
        "city": "Kaunas",
        "lat": 54.920729,
        "lng": 23.820341,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (150.0kW) - 0.31€/kWh, IEC_62196_T2_COMBO (50.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 Kovo 11-osios g. 31A",
        "address": "Kovo 11-osios g. 31A, 51295 Kaunas, Lithuania",
        "city": "Kaunas",
        "lat": 54.909521,
        "lng": 23.97342,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.31
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (200.0kW) - 0.31€/kWh"
    },
    {
        "name": "🔌 Kavinė Ąžuolvila",
        "address": "Ąžuolų g. 2, 39199 Talačkoniai, Lithuania",
        "city": "Talačkoniai",
        "lat": 56.020053,
        "lng": 24.360856,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.31
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (150.0kW) - 0.31€/kWh"
    },
    {
        "name": "🔌 Kaslita",
        "address": "Vytauto Didžiojo g. 15, 86143 Kelmė, Lithuani",
        "city": "Kelmė",
        "lat": 55.626709,
        "lng": 22.925127,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.31
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (180.0kW) - 0.31€/kWh"
    },
    {
        "name": "🔌 Parduotuvė \"Transdirektas\"",
        "address": "Kauno g. 26A, Alytus, 62107 Alytaus m. sav., ",
        "city": "Alytus",
        "lat": 54.401476,
        "lng": 24.04523,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (120.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 Telšių g. 5",
        "address": "Telšių g. 5, 90162 Plungė, Lithuania",
        "city": "Plungė",
        "lat": 55.912815,
        "lng": 21.848864,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.31
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (180.0kW) - 0.31€/kWh"
    },
    {
        "name": "🔌 Viešbutis \"Tomas\"",
        "address": "Tilžės g. 63A, Šiauliai, 78166 Šiaulių m. sav",
        "city": "Šiauliai",
        "lat": 55.91752,
        "lng": 23.284808,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.31
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (180.0kW) - 0.31€/kWh"
    },
    {
        "name": "🔌 PLTDRUC105_EDLT-78",
        "address": "M. K. Čiurlionio gatvė 105",
        "city": "Druskininkai",
        "lat": 54.011765,
        "lng": 23.98984,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.44
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (150.0kW) - 0.44€/kWh"
    },
    {
        "name": "🔌 PLTKAUS346_EDLT-58",
        "address": "Savanorių Prospektas 346",
        "city": "Kaunas",
        "lat": 54.923677,
        "lng": 23.962445,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.51
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (150.0kW) - 0.51€/kWh"
    },
    {
        "name": "🔌 Lidl Vilnius Fabijoniskes",
        "address": "S. Nėries gatvė 16",
        "city": null,
        "lat": 54.7373,
        "lng": 25.2313,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.3
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (50.0kW) - 0.36€/kWh, IEC_62196_T2 (22.0kW) - 0.30€/kWh, CHADEMO (50.0kW) - 0.36€/kWh"
    },
    {
        "name": "🔌 PLTVILKA13_EDLT-80",
        "address": "Kareivių gatvė 13",
        "city": "Vilnius",
        "lat": 54.718729,
        "lng": 25.301055,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.51
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (150.0kW) - 0.51€/kWh"
    },
    {
        "name": "🔌 PLTVILKA22_EDLT-91",
        "address": "Kapsų gatvė 22",
        "city": "Vilnius",
        "lat": 54.660957,
        "lng": 25.278135,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.51
        },
        "ev_status": "Laisva",
        "ev_connectors": "CHADEMO (100.0kW) - 0.51€/kWh, IEC_62196_T2_COMBO (150.0kW) - 0.51€/kWh"
    },
    {
        "name": "🔌 Norfa XXL Ukmergės g. 298, Vilnius",
        "address": "Ukmergės g. 298",
        "city": "Vilnius",
        "lat": 54.7366889,
        "lng": 25.2293393,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.405
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (200.0kW) - 0.41€/kWh"
    },
    {
        "name": "🔌 Norfa XL A. P. Kavoliuko g. 6, Vilnius",
        "address": "A. P. Kavoliuko g. 6",
        "city": "Vilnius",
        "lat": 54.6974302,
        "lng": 25.2112216,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2893
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (45.0kW) - 0.29€/kWh, IEC_62196_T2_COMBO (47.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 Liepa, Priestočio g. 30, Klaipėda",
        "address": "Priestočio g. 30",
        "city": "Klaipėda",
        "lat": 55.7178798,
        "lng": 21.1453095,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.405
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (160.0kW) - 0.41€/kWh"
    },
    {
        "name": "🔌 Aibė Kudirkos g. 13",
        "address": "V. Kudirkos g. 13, 71124 Šakiai, Lithuania",
        "city": "Šakiai",
        "lat": 54.954139,
        "lng": 23.026583,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.31
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (180.0kW) - 0.31€/kWh"
    },
    {
        "name": "🔌 Lidl Kaunas",
        "address": "Savanorių Prospektas 219",
        "city": "Kaunas",
        "lat": 54.909235,
        "lng": 23.928351,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.3
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (43.0kW) - 0.30€/kWh, IEC_62196_T2_COMBO (50.0kW) - 0.36€/kWh, IEC_62196_T2 (22.0kW) - 0.30€/kWh, CHADEMO (50.0kW) - 0.36€/kWh"
    },
    {
        "name": "🔌 Lidl Kaunas",
        "address": "Brastos gatvė 3",
        "city": "Kaunas",
        "lat": 54.907074,
        "lng": 23.873615,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.3
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (43.0kW) - 0.30€/kWh, IEC_62196_T2_COMBO (50.0kW) - 0.36€/kWh, CHADEMO (50.0kW) - 0.36€/kWh"
    },
    {
        "name": "🔌 Norfa XL, A. Purėno g. 1, Kupiškis",
        "address": "A. Purėno g. 1",
        "city": "Kupiškis",
        "lat": 55.8364049,
        "lng": 24.9935112,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2479
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (40.0kW) - 0.29€/kWh, IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 Norfa XL, Kalniškių g. 18, Plungė",
        "address": "Kalniškių g. 18",
        "city": "Plungė",
        "lat": 55.9050334,
        "lng": 21.8444721,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2893
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2_COMBO (40.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 Optima 13 picerija, Kauno g. 43, Ukmergė",
        "address": "Kauno g. 43",
        "city": "Ukmergė",
        "lat": 55.2430263,
        "lng": 24.7453904,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.405
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (320.0kW) - 0.41€/kWh"
    },
    {
        "name": "🔌 K. Donelaičio g. 65, Kaunas",
        "address": "K. Donelaičio g. 65, Kaunas",
        "city": "Kaunas",
        "lat": 54.898435,
        "lng": 23.915537,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.3564
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.36€/kWh"
    },
    {
        "name": "🔌 Aukštaičių g. 45, Kaunas",
        "address": "Aukštaičių g. 45, Kaunas",
        "city": "Kaunas",
        "lat": 54.9026258,
        "lng": 23.9287917,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.3564
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.36€/kWh"
    },
    {
        "name": "🔌 Žemaičių g. 8A, Kaunas",
        "address": "Žemaičių g. 8A, Kaunas",
        "city": "Kaunas",
        "lat": 54.8998606,
        "lng": 23.9224607,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.3564
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.36€/kWh"
    },
    {
        "name": "🔌 K. Donelaičio g. 65, Kaunas",
        "address": "K. Donelaičio g. 65, Kaunas",
        "city": "Kaunas",
        "lat": 54.8984227,
        "lng": 23.9156443,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.3564
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.36€/kWh"
    },
    {
        "name": "🔌 Eivenių g. 23, Kaunas",
        "address": "Eivenių g. 23, Kaunas",
        "city": "Kaunas",
        "lat": 54.9171853,
        "lng": 23.9203268,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.3564
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.36€/kWh"
    },
    {
        "name": "🔌 T. Masiulio g. 21A, Kaunas",
        "address": "T. Masiulio g. 21A, Kaunas",
        "city": "Kaunas",
        "lat": 54.8770585,
        "lng": 24.0145818,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.3564
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.36€/kWh"
    },
    {
        "name": "🔌 Pramonės pr. 31, Kaunas",
        "address": "Pramonės pr. 31, Kaunas",
        "city": "Kaunas",
        "lat": 54.9127962,
        "lng": 23.9845781,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.3564
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.36€/kWh"
    },
    {
        "name": "🔌 Pramonės pr. 4E",
        "address": "Pramonės pr. 4e, 51326 Kaunas, Lithuania",
        "city": "Kaunas",
        "lat": 54.906678,
        "lng": 23.981134,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.31
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (180.0kW) - 0.31€/kWh"
    },
    {
        "name": "🔌 Parduotuvė \"Grizlis\"",
        "address": "Klaipėdos g. 25, Vilkyčiai, 99369 Šilutės r. ",
        "city": "Vilkyčiai",
        "lat": 55.51825,
        "lng": 21.39732,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.21
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (180.0kW) - 0.21€/kWh"
    },
    {
        "name": "🔌 Liepų g. 64",
        "address": "Liepų g. 64, 92101 Klaipėda, Lithuania",
        "city": "Klaipėda",
        "lat": 55.721442,
        "lng": 21.155034,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.31
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (180.0kW) - 0.31€/kWh"
    },
    {
        "name": "🔌 Ermitažas Mažeikiai",
        "address": "Žemaitijos g. 70, Mažeikiai, 89126 Mažeikių r",
        "city": "Mažeikiai",
        "lat": 56.300168,
        "lng": 22.351844,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.31
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (150.0kW) - 0.31€/kWh"
    },
    {
        "name": "🔌 Parduotuvė \"Anykštukas\"",
        "address": "Vilniaus g. 30, 29146 Anykščiai, Lithuania",
        "city": "Anykščiai",
        "lat": 55.522305,
        "lng": 25.098292,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.31
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (180.0kW) - 0.31€/kWh"
    },
    {
        "name": "🔌 Pamario vyturys",
        "address": "Laukininkų g. 19, 95177 Klaipėda, Lithuania",
        "city": "Klaipėda",
        "lat": 55.663257,
        "lng": 21.191589,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (150.0kW) - 0.31€/kWh, IEC_62196_T2_COMBO (50.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 Radvilėnų pl. 21, Kaunas",
        "address": "Radvilėnų pl. 21, Kaunas",
        "city": "Kaunas",
        "lat": 54.90389,
        "lng": 23.9496465,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.3564
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.36€/kWh"
    },
    {
        "name": "🔌 Karaliaus Mindaugo pr. 50, Kaunas",
        "address": "Karaliaus Mindaugo pr. 50, Kaunas",
        "city": "Kaunas",
        "lat": 54.8912282,
        "lng": 23.9150761,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.3564
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.36€/kWh"
    },
    {
        "name": "🔌 Karaliaus Mindaugo pr. 50, Kaunas",
        "address": "Karaliaus Mindaugo pr. 50, Kaunas",
        "city": "Kaunas",
        "lat": 54.8913023,
        "lng": 23.9150265,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.3564
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.36€/kWh"
    },
    {
        "name": "🔌 L. Sapiegos g. 3, Kaunas",
        "address": "L. Sapiegos g. 3, Kaunas",
        "city": "Kaunas",
        "lat": 54.898343,
        "lng": 23.90596,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.3564
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.36€/kWh"
    },
    {
        "name": "🔌 Taikos g. 39, Nida | Partner",
        "address": "Taikos g. 39, Nida, 93127 Neringos sav., Lith",
        "city": "Nida",
        "lat": 55.301059,
        "lng": 20.987255,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.0
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (43.0kW), IEC_62196_T2_COMBO (45.0kW), CHADEMO (45.0kW)"
    },
    {
        "name": "🔌 Juodkrantės prieplauka | Partner",
        "address": "L. Rėzos g. 1D, 93101 Neringos sav., Lithuani",
        "city": "Juodkrantė",
        "lat": 55.542101,
        "lng": 21.122311,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.0
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (43.0kW), IEC_62196_T2_COMBO (50.0kW), CHADEMO (50.0kW)"
    },
    {
        "name": "🔌 Raudondvario pl. 105, Kaunas",
        "address": "Raudondvario pl. 105, Kaunas",
        "city": "Kaunas",
        "lat": 54.9074474,
        "lng": 23.8695266,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.3564
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.36€/kWh"
    },
    {
        "name": "🔌 Kęstučio g. 74, Kaunas",
        "address": "Kęstučio g. 74, Kaunas",
        "city": "Kaunas",
        "lat": 54.8962072,
        "lng": 23.9069748,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.3564
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.36€/kWh"
    },
    {
        "name": "🔌 Baltų pr. 7, Kaunas",
        "address": "Baltų pr. 7, Kaunas",
        "city": "Kaunas",
        "lat": 54.930817,
        "lng": 23.8901097,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.3564
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.36€/kWh"
    },
    {
        "name": "🔌 Bažnyčios g. 3, Kaunas",
        "address": "Bažnyčios g. 3, Kaunas",
        "city": "Kaunas",
        "lat": 54.890437,
        "lng": 23.929536,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.3564
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.36€/kWh"
    },
    {
        "name": "🔌 Karaliaus Mindaugo pr. 49, Kaunas",
        "address": "Karaliaus Mindaugo pr. 49, Kaunas",
        "city": "Kaunas",
        "lat": 54.8894024,
        "lng": 23.9196454,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.3564
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.36€/kWh"
    },
    {
        "name": "🔌 Preilos g. 97B | Partner",
        "address": "Preilos g. 97B, Preila, 93129 Neringos sav., ",
        "city": "Preila",
        "lat": 55.36557,
        "lng": 21.053824,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.0
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW)"
    },
    {
        "name": "🔌 Vilniaus g. 29, Pagėgiai",
        "address": "Vilniaus g. 29, Pagėgiai",
        "city": "Pagėgiai",
        "lat": 55.130645,
        "lng": 21.9155729,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.35
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.35€/kWh"
    },
    {
        "name": "🔌 Vilniaus g. 29, Pagėgiai",
        "address": "Vilniaus g. 29, Pagėgiai",
        "city": "Pagėgiai",
        "lat": 55.1306097,
        "lng": 21.915605,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.45
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (90.0kW) - 0.45€/kWh"
    },
    {
        "name": "🔌 Karaliaus Mindaugo pr. 49, Kaunas",
        "address": "Karaliaus Mindaugo pr. 49, Kaunas",
        "city": "Kaunas",
        "lat": 54.8894125,
        "lng": 23.9196105,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.3564
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (50.0kW) - 0.36€/kWh, CHADEMO (50.0kW) - 0.36€/kWh, IEC_62196_T2 (22.0kW) - 0.36€/kWh"
    },
    {
        "name": "🔌 P. Lukšio g. 47, Kaunas",
        "address": "P. Lukšio g. 47, Kaunas",
        "city": "Kaunas",
        "lat": 54.9259041,
        "lng": 23.9505762,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.3564
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.36€/kWh"
    },
    {
        "name": "🔌 Panerių g. 51, Vilnius",
        "address": "Panerių g. 51, Vilnius",
        "city": "Vilnius",
        "lat": 54.6670165,
        "lng": 25.2557685,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.5627
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.56€/kWh"
    },
    {
        "name": "🔌 Panerių g. 51, Vilnius",
        "address": "Panerių g. 51, Vilnius",
        "city": "Vilnius",
        "lat": 54.6670173,
        "lng": 25.2557712,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.5627
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.56€/kWh"
    },
    {
        "name": "🔌 Butrimonių g. 9, Kaunas",
        "address": "Butrimonių g. 9, Kaunas",
        "city": "Kaunas",
        "lat": 54.9142475,
        "lng": 23.9516984,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.20€/kWh"
    },
    {
        "name": "🔌 Beržų g. 34, Panevėžys",
        "address": "Beržų g. 34, Panevėžys",
        "city": "Panevėžys",
        "lat": 55.7180743,
        "lng": 24.3742369,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.22
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.22€/kWh, IEC_62196_T2_COMBO (60.0kW) - 0.25€/kWh, CHADEMO (60.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 Naftrus Ylių k. | Partner",
        "address": "Šilo g. 1, Yliai, Raseinių r.",
        "city": "Yliai",
        "lat": 55.412965,
        "lng": 22.821865,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.31
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (150.0kW) - 0.31€/kWh"
    },
    {
        "name": "🔌 Butrimonių g. 9, Kaunas",
        "address": "Butrimonių g. 9, Kaunas",
        "city": "Kaunas",
        "lat": 54.9142798,
        "lng": 23.9516488,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.20€/kWh"
    },
    {
        "name": "🔌 P. Lukšio g. 18, Vilnius",
        "address": "P. Lukšio g. 18, Vilnius",
        "city": "Vilnius",
        "lat": 54.7124312,
        "lng": 25.2904258,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.3775
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.38€/kWh"
    },
    {
        "name": "🔌 Elektrinės 6, Visaginas",
        "address": "Elektrinės 6, Visaginas",
        "city": "Visaginas",
        "lat": 55.6017902,
        "lng": 26.5604165,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2548
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 Kauno g. 34, Vilnius",
        "address": "Kauno g. 34, Vilnius",
        "city": "Vilnius",
        "lat": 54.6697771,
        "lng": 25.2633532,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2149
        },
        "ev_status": "Laisva",
        "ev_connectors": "CHADEMO (60.0kW) - 0.26€/kWh, IEC_62196_T2_COMBO (60.0kW) - 0.26€/kWh, IEC_62196_T2 (22.0kW) - 0.21€/kWh"
    },
    {
        "name": "🔌 Jovarų g. 2, Kaunas",
        "address": "Jovarų g. 2, Kaunas",
        "city": "Kaunas",
        "lat": 54.9100293,
        "lng": 23.8418817,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.39
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.39€/kWh"
    },
    {
        "name": "🔌 Didžiosios Rinkos a. 5, Kėdainiai",
        "address": "Didžiosios Rinkos a. 5, Kėdainiai",
        "city": "Kėdainiai",
        "lat": 55.2844142,
        "lng": 23.9818145,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.3792
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.38€/kWh"
    },
    {
        "name": "🔌 Marijampolės R. Stankevičiaus progimnazija",
        "address": "Laisvės g., Marijampolė, Marijampolės sav., 6",
        "city": "Marijampolė",
        "lat": 54.555008,
        "lng": 23.351026,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.0
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW)"
    },
    {
        "name": "🔌 J. Basanavičiaus g. 51A, Kėdainiai",
        "address": "J. Basanavičiaus g. 51A, Kėdainiai",
        "city": "Kėdainiai",
        "lat": 55.2876432,
        "lng": 23.9741375,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.3792
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.38€/kWh, IEC_62196_T2_COMBO (50.0kW) - 0.38€/kWh, CHADEMO (50.0kW) - 0.38€/kWh"
    },
    {
        "name": "🔌 Žemaitijos gatvė 2, Naujoji Akmenė",
        "address": "Žemaitijos gatvė 2, Naujoji Akmenė",
        "city": "Naujoji Akmenė",
        "lat": 56.3199348,
        "lng": 22.8729622,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.20€/kWh"
    },
    {
        "name": "🔌 Taikos pr. 80, Visaginas",
        "address": "Taikos pr. 80, Visaginas",
        "city": "Visaginas",
        "lat": 55.5947406,
        "lng": 26.4525999,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.3439
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.34€/kWh"
    },
    {
        "name": "🔌 Parko g. 14, Visaginas",
        "address": "Parko g. 14, Visaginas",
        "city": "Visaginas",
        "lat": 55.5973113,
        "lng": 26.4219523,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.3439
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (50.0kW) - 0.34€/kWh, CHADEMO (50.0kW) - 0.34€/kWh, IEC_62196_T2 (22.0kW) - 0.34€/kWh"
    },
    {
        "name": "🔌 Kauno g. 34, Vilnius",
        "address": "Kauno g. 34, Vilnius",
        "city": "Vilnius",
        "lat": 54.669829,
        "lng": 25.2632497,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2749
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (240.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 Vilnų g. 6, Kaunas",
        "address": "Vilnų g. 6, Kaunas",
        "city": "Kaunas",
        "lat": 54.873134,
        "lng": 23.9370427,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.3564
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.36€/kWh"
    },
    {
        "name": "🔌 Mindaugo g. 23, Kėdainiai",
        "address": "Mindaugo g. 23, Kėdainiai",
        "city": "Kėdainiai",
        "lat": 55.2815884,
        "lng": 23.9588782,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.3792
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.38€/kWh"
    },
    {
        "name": "🔌 S. Dariaus ir S. Girėno g. 50A, Kėdainiai",
        "address": "S. Dariaus ir S. Girėno g. 50A, Kėdainiai",
        "city": "Kėdainiai",
        "lat": 55.3092945,
        "lng": 23.9794199,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.3792
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.38€/kWh"
    },
    {
        "name": "🔌 J. Basanavičiaus g. 93, Kėdainiai",
        "address": "J. Basanavičiaus g. 93, Kėdainiai",
        "city": "Kėdainiai",
        "lat": 55.2772582,
        "lng": 23.9571479,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.3792
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.38€/kWh"
    },
    {
        "name": "🔌 Sūduvių g. 74, Zujūnai",
        "address": "Sūduvių g. 74, Zujūnai",
        "city": "Zujūnai",
        "lat": 54.7310346,
        "lng": 25.1857245,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.35
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.35€/kWh"
    },
    {
        "name": "🔌 V. Kudirkos g. 61, Šakiai",
        "address": "V. Kudirkos g. 61, Šakiai",
        "city": "Šakiai",
        "lat": 54.9544223,
        "lng": 23.0450327,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.35
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.35€/kWh"
    },
    {
        "name": "🔌 Dariaus ir Girėno g. 42A",
        "address": "Dariaus ir Girėno g. 42A, Šilalė, 75135 Šilal",
        "city": "Šilalė",
        "lat": 55.48812,
        "lng": 22.1763,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.31
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (150.0kW) - 0.31€/kWh"
    },
    {
        "name": "🔌 Gedimino  54, Tauragė",
        "address": "Gedimino  54, Tauragė",
        "city": "Tauragė",
        "lat": 55.2423601,
        "lng": 22.3052938,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 Gedimino  54, Tauragė",
        "address": "Gedimino  54, Tauragė",
        "city": "Tauragė",
        "lat": 55.2423799,
        "lng": 22.3052858,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 Hesburger Tauragė",
        "address": "Dariaus ir Girėno g. 67A, 72201 Tauragė, Lith",
        "city": "Tauragė",
        "lat": 55.262606,
        "lng": 22.30192,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.31
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (200.0kW) - 0.31€/kWh"
    },
    {
        "name": "🔌 Laugalių g. 2b, Gargždai",
        "address": "Laugalių g. 2b, Gargždai",
        "city": "Gargždai",
        "lat": 55.7148527,
        "lng": 21.3787547,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.0
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW)"
    },
    {
        "name": "🔌 Šilutės pl. 49, Klaipėda",
        "address": "Šilutės pl. 49, Klaipėda",
        "city": "Klaipėda",
        "lat": 55.6852819,
        "lng": 21.1840203,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.0
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW)"
    },
    {
        "name": "🔌 PLTVILZ114_EDLT-127",
        "address": "Žalgirio gatvė 114",
        "city": "Vilnius",
        "lat": 54.704459,
        "lng": 25.271508,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.4
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (11.0kW) - 0.40€/kWh, IEC_62196_T2 (22.0kW) - 0.40€/kWh"
    },
    {
        "name": "🔌 PLTVILTAL2_EDLT-29",
        "address": "Talino gatvė 2b",
        "city": "Vilnius",
        "lat": 54.71351,
        "lng": 25.209302,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.51
        },
        "ev_status": "Laisva",
        "ev_connectors": "CHADEMO (100.0kW) - 0.51€/kWh, IEC_62196_T2_COMBO (150.0kW) - 0.51€/kWh"
    },
    {
        "name": "🔌 Rimi Lieporiai",
        "address": "Statybininkų g. 23, 78215 Šiauliai, Lithuania",
        "city": "Šiauliai",
        "lat": 55.90441,
        "lng": 23.285957,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.31
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (150.0kW) - 0.31€/kWh"
    },
    {
        "name": "🔌 Ventos g. 8G",
        "address": "Ventos g. 8G, Mažeikiai, 89103 Mažeikių r. sa",
        "city": "Mažeikiai",
        "lat": 56.312124,
        "lng": 22.328407,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.31
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (180.0kW) - 0.31€/kWh, IEC_62196_T2 (22.0kW)"
    },
    {
        "name": "🔌 Tauragės Dvaro g. 34A, Tauragė | Inbalance grid",
        "address": "Tauragės Dvaro g. 34A",
        "city": "Tauragė",
        "lat": 55.232122,
        "lng": 22.257282,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.23
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.23€/kWh"
    },
    {
        "name": "🔌 Dariaus ir Girėno g. 134, Tauragė | Inbalance grid",
        "address": "Dariaus ir Girėno g. 134",
        "city": "Tauragė",
        "lat": 55.265725,
        "lng": 22.309384,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.23
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.23€/kWh"
    },
    {
        "name": "🔌 Aerodromo g. 17, Tauragė | Inbalance grid",
        "address": "Aerodromo g. 17",
        "city": "Tauragė",
        "lat": 55.265116,
        "lng": 22.281844,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.23
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.23€/kWh"
    },
    {
        "name": "🔌 Impuls (Savanorių pr. 28) | Inbalance grid",
        "address": "Savanorių pr. 28",
        "city": "Vilnius",
        "lat": 54.674702,
        "lng": 25.252952,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.23
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.23€/kWh"
    },
    {
        "name": "🔌 Dainavos g. 8, Tauragė | Inbalance grid",
        "address": "Dainavos g. 8",
        "city": "Tauragė",
        "lat": 55.255139,
        "lng": 22.305161,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.23
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.23€/kWh"
    },
    {
        "name": "🔌 Bažnyčių g. 9, Tauragė | Inbalance grid",
        "address": "Bažnyčių g. 9",
        "city": "Tauragė",
        "lat": 55.250825,
        "lng": 22.287146,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.23
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.23€/kWh"
    },
    {
        "name": "🔌 Ateities tak. 14A, Tauragė | Inbalance grid",
        "address": "Ateities tak. 14A",
        "city": "Tauragė",
        "lat": 55.249815,
        "lng": 22.303626,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.23
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.23€/kWh"
    },
    {
        "name": "🔌 Autoverslas Vilnius | Inbalance grid",
        "address": "Ugniagesių g. 14",
        "city": "Vilnius",
        "lat": 54.630237,
        "lng": 25.142239,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.29
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 IKI Molupis | Inbalance grid",
        "address": "Šilalės g. 83a",
        "city": "Tauragė",
        "lat": 55.266685,
        "lng": 22.287447,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.23
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.23€/kWh"
    },
    {
        "name": "🔌 IKI Tauragė | Inbalance grid",
        "address": "Gedimino g. 21A",
        "city": "Tauragė",
        "lat": 55.253005,
        "lng": 22.298781,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.23
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.23€/kWh"
    },
    {
        "name": "🔌 Dainavos g. 4, Tauragė | Inbalance grid",
        "address": "Dainavos g. 4",
        "city": "Tauragė",
        "lat": 55.255539,
        "lng": 22.303924,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.23
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.23€/kWh"
    },
    {
        "name": "🔌 Kaišiadorių miesto aikštė | Inbalance grid",
        "address": "Gedimino g. 32",
        "city": "Kaišiadorys",
        "lat": 54.86212,
        "lng": 24.455836,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.25
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 RHR | Inbalance grid",
        "address": "Šilelio g 2",
        "city": "Balkasodžio km , Alytaus r. sav., Lietuva",
        "lat": 54.269812,
        "lng": 23.980551,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.31
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.31€/kWh"
    },
    {
        "name": "🔌 PLTBABPRA4_EDLT-102",
        "address": "Pramogų gatvė 4",
        "city": "Babrungas",
        "lat": 55.938947,
        "lng": 21.880118,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.55
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (300.0kW) - 0.55€/kWh"
    },
    {
        "name": "🔌 Motorų g. 4",
        "address": "Motorų g. 4, 02190 Vilnius, Lithuania",
        "city": "Vilnius",
        "lat": 54.635246,
        "lng": 25.257339,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (150.0kW) - 0.31€/kWh, CHADEMO (50.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 IKI Mažeikiai",
        "address": "Sedos g. 18, 89233 Mažeikiai, Lithuania",
        "city": "Mažeikiai",
        "lat": 56.303713,
        "lng": 22.341677,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (150.0kW) - 0.31€/kWh, CHADEMO (50.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 Vynoteka Alytus",
        "address": "Jurgiškių g. 43, Alytus, 63152 Alytaus m. sav",
        "city": "Alytus",
        "lat": 54.396933,
        "lng": 24.010886,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.31
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (180.0kW) - 0.31€/kWh"
    },
    {
        "name": "🔌 Norfa XL, Gamyklos g. 8, Mažeikiai",
        "address": "Gamyklos g. 8",
        "city": "Mažeikiai",
        "lat": 56.3125118,
        "lng": 22.3344116,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2479
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (47.0kW) - 0.29€/kWh, IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 Memo Europe Lentvario g. 33",
        "address": "33 Lentvario g.",
        "city": "Vilnius",
        "lat": 54.6484583,
        "lng": 25.121334,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2479
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (240.0kW) - 0.41€/kWh, IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 Norfa XXL Ateities g. 10, Vilnius",
        "address": "10 Ateities g.",
        "city": "Vilnius",
        "lat": 54.7377663,
        "lng": 25.2701118,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2479
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (47.0kW) - 0.29€/kWh, IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 Norfa XXL, Gedimino g. 8,  Telšiai",
        "address": "Gedimino g. 8",
        "city": "Telšiai",
        "lat": 55.981662,
        "lng": 22.2379904,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2479
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (47.0kW) - 0.29€/kWh, IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 Norfa Bazė, Savanorių pr. 176, Vilnius",
        "address": "Savanorių pr. 176",
        "city": "Vilnius",
        "lat": 54.6524789,
        "lng": 25.2270894,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2893
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (160.0kW) - 0.41€/kWh, IEC_62196_T2_COMBO (47.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 Jotvingis",
        "address": "Rūtų g. 2C, Alytus, 62119 Alytaus m. sav., Li",
        "city": "Alytus",
        "lat": 54.394848,
        "lng": 24.037316,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (115.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 Viešbutis Aurora",
        "address": "Nemuno g. 51",
        "city": "Klaipėda",
        "lat": 55.6890137,
        "lng": 21.1417852,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.405
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (240.0kW) - 0.41€/kWh"
    },
    {
        "name": "🔌 Norfa XL, Sodų kalno g. 28, Buivydiškių k. Zujūnų sen., Vilniaus r. sav.",
        "address": "Sodų kalno g. 28",
        "city": "Buivydiškių k",
        "lat": 54.7223662,
        "lng": 25.1907468,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2893
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (47.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 Norfa XL, Savanorių g. 11, Varėna",
        "address": "Savanorių g. 11",
        "city": "Varėna",
        "lat": 54.211452,
        "lng": 24.5808252,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2479
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (47.0kW) - 0.29€/kWh, IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 Norfa XL, S. Daukanto g. 7A, Akmenė",
        "address": "S. Daukanto g. 7A",
        "city": "Akmenė",
        "lat": 56.2431248,
        "lng": 22.7524846,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2479
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (47.0kW) - 0.29€/kWh, IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 NordSpace 4 (Chemijos g. 15E) | Inbalance grid",
        "address": "Chemijos g. 15E",
        "city": "Kaunas",
        "lat": 54.903057,
        "lng": 23.990114,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.23
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.23€/kWh"
    },
    {
        "name": "🔌 NordSpace 2 (Chemijos g. 15E) | Inbalance grid",
        "address": "Chemijos g. 15E",
        "city": "Kaunas",
        "lat": 54.903057,
        "lng": 23.990114,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.23
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.23€/kWh"
    },
    {
        "name": "🔌 IKI Rygos | Inbalance grid",
        "address": "Rygos St. 41",
        "city": "Vilnius",
        "lat": 54.718766,
        "lng": 25.215555,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.23
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.23€/kWh"
    },
    {
        "name": "🔌 IKI Vaduva | Inbalance grid",
        "address": "Vaduvos g. 4A",
        "city": "Vilnius",
        "lat": 54.6422,
        "lng": 25.204771,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.23
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.23€/kWh"
    },
    {
        "name": "🔌 Nordspace 1 (Vanaginės Sodų 4-oji g) | Inbalance grid",
        "address": "Vanaginės Sodų 4-oji g. 2B",
        "city": "Vilnius",
        "lat": 54.776671,
        "lng": 25.271587,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.23
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.23€/kWh"
    },
    {
        "name": "🔌 Inreal (Savanorių pr. 178B) | Inbalance grid",
        "address": "Savanorių 178B",
        "city": "Vilnius",
        "lat": 54.651058,
        "lng": 25.220253,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.23
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.23€/kWh"
    },
    {
        "name": "🔌 Autoverslas Klaipėda | Inbalance grid",
        "address": "Švepelių g. 3",
        "city": "Klaipėda",
        "lat": 55.67647,
        "lng": 21.220126,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.25
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 IKI Kupiškis | Inbalance grid",
        "address": "Gedimino g. 41",
        "city": "Kupiškis",
        "lat": 55.8361,
        "lng": 24.977246,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.23
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.23€/kWh"
    },
    {
        "name": "🔌 Inreal (Žalgirio g. 92) | Inbalance grid",
        "address": "Žalgirio g. 92",
        "city": "Vilnius",
        "lat": 54.703887,
        "lng": 25.276226,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.23
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.23€/kWh"
    },
    {
        "name": "🔌 IKI Kalvarija 1 | Inbalance grid",
        "address": "Dariaus ir Girėno g. 25",
        "city": "Kalvarija",
        "lat": 54.414762,
        "lng": 23.225792,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.23
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.23€/kWh"
    },
    {
        "name": "🔌 IKI Kalvarija 2 | Inbalance grid",
        "address": "Dariaus ir Girėno g. 25",
        "city": "Kalvarija",
        "lat": 54.414762,
        "lng": 23.225792,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.23
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.23€/kWh"
    },
    {
        "name": "🔌 IKI Brasta | Inbalance grid",
        "address": "Brastos g. 28",
        "city": "Kaunas",
        "lat": 54.90269,
        "lng": 23.881719,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.23
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.23€/kWh"
    },
    {
        "name": "🔌 NordSpace 1 (Chemijos g. 15E) | Inbalance grid",
        "address": "Chemijos g. 15E",
        "city": "Kaunas",
        "lat": 54.903057,
        "lng": 23.990114,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.23
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.23€/kWh"
    },
    {
        "name": "🔌 NordSpace 3 (Chemijos g. 15E) | Inbalance grid",
        "address": "Chemijos g. 15E",
        "city": "Kaunas",
        "lat": 54.903057,
        "lng": 23.990114,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.23
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.23€/kWh"
    },
    {
        "name": "🔌 NordSpace 6 (Chemijos g. 15E) | Inbalance grid",
        "address": "Chemijos g. 15E",
        "city": "Kaunas",
        "lat": 54.903057,
        "lng": 23.990114,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.23
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.23€/kWh"
    },
    {
        "name": "🔌 NordSpace 5 (Chemijos g. 15E) | Inbalance grid",
        "address": "Chemijos g. 15E",
        "city": "Kaunas",
        "lat": 54.903057,
        "lng": 23.990114,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.23
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.23€/kWh"
    },
    {
        "name": "🔌 IKI Aukštadvario | Inbalance grid",
        "address": "Aukštadvario g. 1",
        "city": "Trakai",
        "lat": 54.631042,
        "lng": 24.92445,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.23
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.23€/kWh"
    },
    {
        "name": "🔌 IKI Eiguliai | Inbalance grid",
        "address": "Šiaurės pr. 91",
        "city": "Kaunas",
        "lat": 54.930701,
        "lng": 23.93634,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.23
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.23€/kWh"
    },
    {
        "name": "🔌 IKI Mindaugo DC | Inbalance grid",
        "address": "Mindaugo str. 25",
        "city": "Vilnius",
        "lat": 54.672884,
        "lng": 25.274057,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (52.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Yellowstone - 1 | Inbalance grid",
        "address": "Jasinskio 14B",
        "city": "Vilnius",
        "lat": 54.687644,
        "lng": 25.262723,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.23
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.23€/kWh"
    },
    {
        "name": "🔌 Yellowstone - 2 | Inbalance grid",
        "address": "Jasinskio 14B",
        "city": "Vilnius",
        "lat": 54.687644,
        "lng": 25.262723,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.23
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.23€/kWh"
    },
    {
        "name": "🔌 IKI Vilijampolė | Inbalance grid",
        "address": "Varnių 38a",
        "city": "Kaunas",
        "lat": 54.914543,
        "lng": 23.896674,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.23
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.23€/kWh"
    },
    {
        "name": "🔌 IKI Kalniečiai | Inbalance grid",
        "address": "P. Lukšio g. 60",
        "city": "Kaunas",
        "lat": 54.926283,
        "lng": 23.949086,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.23
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.23€/kWh"
    },
    {
        "name": "🔌 Kornealita 1 | Inbalance grid",
        "address": "Jaunystės g. 21",
        "city": "Visaginas",
        "lat": 55.589331,
        "lng": 26.444109,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.25
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 Kornealita 2 | Inbalance grid",
        "address": "Jaunystės g. 21",
        "city": "Visaginas",
        "lat": 55.589331,
        "lng": 26.444109,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.25
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 Ievalaukis 2 | Inbalance grid",
        "address": "Jonalaukio k.",
        "city": "Ignalinos raj.",
        "lat": 55.357636,
        "lng": 26.126329,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.25
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 Ievalaukis | Inbalance grid",
        "address": "Jonalaukio k.",
        "city": "Ignalinos raj.",
        "lat": 55.357643,
        "lng": 26.126336,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.25
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 IKI Neveronys | Inbalance grid",
        "address": "Keramikų g. 30",
        "city": "Neveronys",
        "lat": 54.930046,
        "lng": 24.094553,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.23
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.23€/kWh"
    },
    {
        "name": "🔌 Aerottoria arena 1.1 | Inbalance grid",
        "address": "Dariaus ir Girėno g. 34F",
        "city": "Vilnius",
        "lat": 54.64988,
        "lng": 25.274068,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.23
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.23€/kWh"
    },
    {
        "name": "🔌 IKI Garliava",
        "address": "Vytauto g. 67, 53258 Garliava, Lithuania",
        "city": "Garliava",
        "lat": 54.8226,
        "lng": 23.87201,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.31
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (150.0kW) - 0.31€/kWh"
    },
    {
        "name": "🔌 Klaipėdos paslaugos 2-oji Melnragė | Partner",
        "address": "2-osios Melnragės st, 92280 Klaipėda, Lithuan",
        "city": "Klaipėda",
        "lat": 55.759167,
        "lng": 21.089126,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.29
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 Klaipėdos paslaugos H. Manto g. 43C | Partner",
        "address": "H. Manto g. 43C",
        "city": "Klaipeda",
        "lat": 55.719587,
        "lng": 21.126098,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.29
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 Klaipėdos paslaugos S. Nėries g. 16B | Partner",
        "address": "S. Nėries g. 16B",
        "city": "Klaipeda",
        "lat": 55.719428,
        "lng": 21.136702,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.29
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (50.0kW) - 0.33€/kWh, IEC_62196_T2 (43.0kW) - 0.29€/kWh, IEC_62196_T2 (22.0kW) - 0.29€/kWh, CHADEMO (50.0kW) - 0.33€/kWh"
    },
    {
        "name": "🔌 Klaipėdos paslaugos Pilies g. 2A | Partner",
        "address": "Pilies g. 2A",
        "city": "Klaipėda",
        "lat": 55.70536,
        "lng": 21.132342,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.29
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 Klaipėdos paslaugos Tilžės g. 56B | Partner",
        "address": "Tilžės g. 56B, Klaipėda",
        "city": "Klaipėda",
        "lat": 55.704153,
        "lng": 21.159119,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.29
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 Klaipėdos paslaugos P. Komunos g. 2 | Partner",
        "address": "P. Komunos g. 2",
        "city": "Klaipeda",
        "lat": 55.698747,
        "lng": 21.148532,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.29
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 Klaipėdos paslaugos Jūrininkų pr. 16 | Partner",
        "address": "Jūrininkų pr. 16",
        "city": "Klaipeda",
        "lat": 55.661447,
        "lng": 21.193549,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.29
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (50.0kW) - 0.33€/kWh, IEC_62196_T2 (43.0kW) - 0.29€/kWh, CHADEMO (50.0kW) - 0.33€/kWh"
    },
    {
        "name": "🔌 Eldrive Lithuania Urmas 1",
        "address": "Pramonės pr. 16",
        "city": "Kaunas",
        "lat": 54.91577,
        "lng": 23.98639,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.29
        },
        "ev_status": "Laisva",
        "ev_connectors": "CHADEMO (50.0kW) - 0.37€/kWh, IEC_62196_T2_COMBO (150.0kW) - 0.37€/kWh, IEC_62196_T2 (22.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 Eldrive Lithuania Business Stadium North",
        "address": "Rinktinės g. 3",
        "city": "Vilnius",
        "lat": 54.69476,
        "lng": 25.290624,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.29
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 Eldrive Lithuania Kauno Oro Uostas",
        "address": "Oro uosto g. 4",
        "city": "Karmėlava",
        "lat": 54.967026,
        "lng": 24.070911,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.29
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 Eldrive Lithuania Decathlon Vilnius",
        "address": "Vikingų g. 5",
        "city": "Vilnius",
        "lat": 54.64982,
        "lng": 25.279871,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.29
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.29€/kWh, IEC_62196_T2_COMBO (50.0kW) - 0.37€/kWh, IEC_62196_T2_COMBO (120.0kW) - 0.37€/kWh"
    },
    {
        "name": "🔌 Eldrive Lithuania PC Pašilaičiai - Ermitažas",
        "address": "Pavilnionių g. 55",
        "city": "Vilnius",
        "lat": 54.736112,
        "lng": 25.211542,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.29
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 Eldrive Lithuania Prime Biurai",
        "address": "Savanorių pr. 367",
        "city": "Kaunas",
        "lat": 54.922987,
        "lng": 23.957963,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.29
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 Eldrive Lithuania RIMI Bendorėliai",
        "address": "Senasis Ukmergės kl. 46A",
        "city": "Vilnius",
        "lat": 54.777497,
        "lng": 25.192243,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.37
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (24.0kW) - 0.37€/kWh"
    },
    {
        "name": "🔌 Eldrive Lithuania Terix",
        "address": "Raudondvario pl. 78",
        "city": "Kaunas",
        "lat": 54.907588,
        "lng": 23.876071,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.37
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (24.0kW) - 0.37€/kWh, IEC_62196_T2_COMBO (120.0kW) - 0.37€/kWh"
    },
    {
        "name": "🔌 Eldrive Lithuania Paupio Darboteka",
        "address": "Paupio g. 50",
        "city": "Vilnius",
        "lat": 54.678199,
        "lng": 25.307028,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.29
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 DK Investicijos ADC Parking VNO",
        "address": "Rodūnios kl. 3",
        "city": "Vilnius",
        "lat": 54.640854,
        "lng": 25.277118,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.29
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (7.0kW) - 0.29€/kWh, IEC_62196_T2_COMBO (24.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 Eldrive Lithuania Šiaurės pr. 8D PC Maxima",
        "address": "Šiaurės pr. 8D",
        "city": "Kaunas",
        "lat": 54.930918,
        "lng": 23.933036,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.37
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (120.0kW) - 0.37€/kWh"
    },
    {
        "name": "🔌 Eldrive Lithuania Europa",
        "address": "Konstitucijos pr. 7A",
        "city": "Vilnius",
        "lat": 54.696812,
        "lng": 25.277331,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.37
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (24.0kW) - 0.37€/kWh, IEC_62196_T2_COMBO (50.0kW) - 0.37€/kWh"
    },
    {
        "name": "🔌 Eldrive Lithuania Magnum -2 aukštas",
        "address": "Karaliaus Mindaugo Prospektas 38",
        "city": "Kaunas",
        "lat": 54.893777,
        "lng": 23.91573,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.29
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (150.0kW) - 0.37€/kWh, IEC_62196_T2 (22.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 Eldrive Lithuania Green Hall",
        "address": "Upės g. 23",
        "city": "Vilnius",
        "lat": 54.695706,
        "lng": 25.259585,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.29
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 Eldrive Lithuania Topo centras Kaunas",
        "address": "Savanorių pr. 206A",
        "city": "Kaunas",
        "lat": 54.912995,
        "lng": 23.939987,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.37
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (24.0kW) - 0.37€/kWh"
    },
    {
        "name": "🔌 Eldrive Lithuania Rotušės a. 10",
        "address": "Rotušės a. 10, 62141 Alytus, Lithuania",
        "city": "Alytus",
        "lat": 54.396429,
        "lng": 24.050491,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.37
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (50.0kW) - 0.37€/kWh"
    },
    {
        "name": "🔌 Eldrive Lithuania Jotvingių g. 3",
        "address": "Jotvingių g. 3, 62116 Alytus, Lithuania",
        "city": "Alytus",
        "lat": 54.395964,
        "lng": 24.04415,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.37
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (50.0kW) - 0.37€/kWh"
    },
    {
        "name": "🔌 Eldrive Lithuania Naujoji g. 52",
        "address": "Naujoji g. 52, Alytus, 62381 Alytaus m. sav.",
        "city": "Alytus",
        "lat": 54.404835,
        "lng": 24.022002,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.37
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (50.0kW) - 0.37€/kWh"
    },
    {
        "name": "🔌 Eldrive Lithuania Skulas Ašigalio",
        "address": "Ašigalio g. 1, 49160 Kaunas, Lithuania",
        "city": "Kaunas",
        "lat": 54.933591,
        "lng": 23.943351,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.37
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (150.0kW) - 0.37€/kWh"
    },
    {
        "name": "🔌 Eldrive Lithuania Dentavita",
        "address": "Taikos al. 24, LT-35149 Panevėžys",
        "city": "Panevėžys",
        "lat": 55.738866,
        "lng": 24.341205,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.29
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (45.0kW) - 0.37€/kWh, IEC_62196_T2 (22.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 Eldrive Lithuania Kalvarijų turgus",
        "address": "Kalvarijų g. 61",
        "city": "Vilnius",
        "lat": 54.70056,
        "lng": 25.285614,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.37
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (50.0kW) - 0.37€/kWh"
    },
    {
        "name": "🔌 Eldrive Lithuania Decathlon Kaunas",
        "address": "Islandijos pl. 30",
        "city": "Kaunas",
        "lat": 54.938284,
        "lng": 23.90233,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.37
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (24.0kW) - 0.37€/kWh"
    },
    {
        "name": "🔌 Eldrive Lithuania Forum Cinemas Vingis",
        "address": "Savanorių pr. 7",
        "city": "Vilnius",
        "lat": 54.678595,
        "lng": 25.255439,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.37
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (24.0kW) - 0.37€/kWh, IEC_62196_T2_COMBO (120.0kW) - 0.37€/kWh"
    },
    {
        "name": "🔌 Eldrive Lithuania Klaipėdos Holivudas",
        "address": "Kretingos g. 100",
        "city": "Klaipėda",
        "lat": 55.754483,
        "lng": 21.132544,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.37
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (24.0kW) - 0.37€/kWh"
    },
    {
        "name": "🔌 Eldrive Lithuania Business Stadium North East",
        "address": "Rinktinės g. 3",
        "city": "Vilnius",
        "lat": 54.694841,
        "lng": 25.291514,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.29
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 Eldrive Lithuania Urmas 2",
        "address": "Pramonės pr. 16",
        "city": "Kaunas",
        "lat": 54.915489,
        "lng": 23.986448,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.29
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 Eldrive Lithuania Urmas 3",
        "address": "Pramonės pr. 16",
        "city": "Kaunas",
        "lat": 54.915087,
        "lng": 23.986411,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.29
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 Eldrive Lithuania Hotel Pas Katina",
        "address": "Smėlynės g. 222. Tičkūnų k..",
        "city": "Panevėžio r",
        "lat": 55.779412,
        "lng": 24.364463,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.29
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (43.0kW) - 0.29€/kWh, IEC_62196_T2_COMBO (180.0kW) - 0.37€/kWh"
    },
    {
        "name": "🔌 Eldrive Lithuania Eika verslo centras",
        "address": "A. Goštauto g. 40B",
        "city": "Vilnius",
        "lat": 54.685337,
        "lng": 25.25892,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.37
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (120.0kW) - 0.37€/kWh"
    },
    {
        "name": "🔌 Eldrive Lithuania Taikos 122",
        "address": "Taikos pr. 122, Kaunas",
        "city": "Kaunas",
        "lat": 54.916998,
        "lng": 24.038253,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.37
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (120.0kW) - 0.37€/kWh"
    },
    {
        "name": "🔌 Eldrive Lithuania PC Mandarinas",
        "address": "Ateities g. 91",
        "city": "Vilnius",
        "lat": 54.731936,
        "lng": 25.246976,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.37
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (120.0kW) - 0.37€/kWh"
    },
    {
        "name": "🔌 Eldrive Lithuania L. Petravičiaus a. 4A | Partneris",
        "address": "L. Petravičiaus a. 4A, 85145 Naujoji Akmenė",
        "city": "Naujoji Akmenė",
        "lat": 56.322208,
        "lng": 22.882047,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.16
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.16€/kWh"
    },
    {
        "name": "🔌 Eldrive Lithuania Domus Pro",
        "address": "Ukmergės g. 308",
        "city": "Vilnius",
        "lat": 54.740094,
        "lng": 25.22583,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.37
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (180.0kW) - 0.37€/kWh"
    },
    {
        "name": "🔌 Eldrive Lithuania Urban HUB Kaunas 6",
        "address": "Lyderystės gatvė 9",
        "city": "Kaunas",
        "lat": 54.934877,
        "lng": 23.988147,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.37
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (50.0kW) - 0.37€/kWh"
    },
    {
        "name": "🔌 Eldrive Lithuania Rimi Rekyva",
        "address": "Piktmiškio g. 75",
        "city": "Šiauliai",
        "lat": 55.895713,
        "lng": 23.352078,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.37
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (24.0kW) - 0.37€/kWh"
    },
    {
        "name": "🔌 Eldrive Lithuania Rimi Bukiškis",
        "address": "Nesvyžiaus g. 20",
        "city": "Bukiškis",
        "lat": 54.758349,
        "lng": 25.219234,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.37
        },
        "ev_status": "Laisva",
        "ev_connectors": "CHADEMO (50.0kW) - 0.37€/kWh, IEC_62196_T2_COMBO (50.0kW) - 0.37€/kWh"
    },
    {
        "name": "🔌 Eldrive Lithuania Pupa",
        "address": "Priegliaus g. 1",
        "city": "Vilnius",
        "lat": 54.709611,
        "lng": 25.187858,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.29
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 Eldrive Lithuania PC Pašilaičiai - Maxima",
        "address": "Pavilnionių g. 55",
        "city": "Vilnius",
        "lat": 54.737339,
        "lng": 25.210962,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.29
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (11.0kW) - 0.29€/kWh, IEC_62196_T2 (22.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 Eldrive Lithuania LTLAB",
        "address": "Kauno g. 34",
        "city": "Vilnius",
        "lat": 54.670009,
        "lng": 25.263319,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.29
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 Eldrive Lithuania Urmas 4",
        "address": "Pramonės pr. 16",
        "city": "Kaunas",
        "lat": 54.915474,
        "lng": 23.987388,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.29
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 Eldrive Lithuania PC Kalniečiai 1",
        "address": "Savanorių pr. 375",
        "city": "Kaunas",
        "lat": 54.925058,
        "lng": 23.963955,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.37
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (150.0kW) - 0.37€/kWh, IEC_62196_T2_COMBO (50.0kW) - 0.37€/kWh"
    },
    {
        "name": "🔌 Eldrive Lithuania PC Kalniečiai 3",
        "address": "Savanorių pr. 375",
        "city": "Kaunas",
        "lat": 54.925221,
        "lng": 23.96336,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.29
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (11.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 Eldrive Lithuania Rimi Linksmoji",
        "address": "Linksmoji g. 66A",
        "city": "Vilnius",
        "lat": 54.686984,
        "lng": 25.431215,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.29
        },
        "ev_status": "Laisva",
        "ev_connectors": "CHADEMO (50.0kW) - 0.37€/kWh, IEC_62196_T2_COMBO (50.0kW) - 0.37€/kWh, IEC_62196_T2 (22.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 Eldrive Lithuania Rimi Čekoniškės",
        "address": "Pilaitės pr. 65",
        "city": "Vilnius",
        "lat": 54.711366,
        "lng": 25.16886,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.37
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (24.0kW) - 0.37€/kWh"
    },
    {
        "name": "🔌 Eldrive Lithuania Rimi Pavilnionys",
        "address": "Pavilnionių g. 22",
        "city": "Vilnius",
        "lat": 54.735158,
        "lng": 25.216928,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.37
        },
        "ev_status": "Laisva",
        "ev_connectors": "CHADEMO (50.0kW) - 0.37€/kWh, IEC_62196_T2_COMBO (50.0kW) - 0.37€/kWh"
    },
    {
        "name": "🔌 Eldrive Lithuania SMK Aukštoji mokykla",
        "address": "Liepų g. 83B",
        "city": "Klaipėda",
        "lat": 55.724241,
        "lng": 21.155486,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.37
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (24.0kW) - 0.37€/kWh"
    },
    {
        "name": "🔌 Eldrive Lithuania Urban HUB Vilnius 1",
        "address": "Ožiarūčių g. 3",
        "city": "Avižieniai. Vilniaus r. sav.",
        "lat": 54.765236,
        "lng": 25.196419,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.37
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (50.0kW) - 0.37€/kWh"
    },
    {
        "name": "🔌 Eldrive Lithuania Urban HUB Vilnius 2",
        "address": "Ožiarūčių g. 3",
        "city": "Avižieniai. Vilniaus r. sav.",
        "lat": 54.766462,
        "lng": 25.193979,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.37
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (50.0kW) - 0.37€/kWh"
    },
    {
        "name": "🔌 Eldrive Lithuania Vanduo marse",
        "address": "Žemaitkiemio gatvė",
        "city": "Žemaitkiemis",
        "lat": 54.991631,
        "lng": 23.861195,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.29
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (200.0kW) - 0.29€/kWh, IEC_62196_T2 (22.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 Klaipėdos paslaugos Liepojos g. 43A | Partner",
        "address": "Liepojos g. 43A",
        "city": "Klaipėda",
        "lat": 55.754477,
        "lng": 21.128635,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.29
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 Klaipėdos paslaugos Liepų g. 11 | Partner",
        "address": "Liepu g. 11, Klaipeda",
        "city": "Klaipėda",
        "lat": 55.712186,
        "lng": 21.133254,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.29
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 Klaipėdos paslaugos Molo g. 33 | Partner",
        "address": "Molo g. 33",
        "city": "Klaipeda",
        "lat": 55.737204,
        "lng": 21.092031,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.29
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 Klaipėdos paslaugos Bangų g. 3 | Partner",
        "address": "Bangų g. 3",
        "city": "Klaipeda",
        "lat": 55.707635,
        "lng": 21.140877,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.29
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 Klaipėdos paslaugos Taikos pr. 80 | Partner",
        "address": "Taikos pr. 80",
        "city": "Klaipeda",
        "lat": 55.676314,
        "lng": 21.165386,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.29
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (50.0kW) - 0.33€/kWh, IEC_62196_T2 (43.0kW) - 0.29€/kWh, IEC_62196_T2 (22.0kW) - 0.29€/kWh, CHADEMO (50.0kW) - 0.33€/kWh"
    },
    {
        "name": "🔌 Eldrive Lithuania KOOC Klinika | Partner",
        "address": "Taikos pr. 22A",
        "city": "Klaipėda",
        "lat": 55.700309,
        "lng": 21.14521,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.29
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 Eldrive Lithuania Karaliaus Mindaugo 3",
        "address": "Karaliaus Mindaugo g. 3, Gargzdai",
        "city": "Gargždai",
        "lat": 55.708004,
        "lng": 21.378091,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.29
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 Eldrive Lithuania Hesburger Taikos 122",
        "address": "Taikos pr. 122-1, Kaunas",
        "city": "Kaunas",
        "lat": 54.917444,
        "lng": 24.037126,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.29
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 Eldrive Lithuania Santaikos g. 30M",
        "address": "Santaikos g. 30M, Alytus",
        "city": "Alytus",
        "lat": 54.387854,
        "lng": 24.032872,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.37
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (120.0kW) - 0.37€/kWh"
    },
    {
        "name": "🔌 Eldrive Lithuania Vienybės a. 1",
        "address": "Vienybės a. 1",
        "city": "Kaunas",
        "lat": 54.899742,
        "lng": 23.913218,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.29
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (50.0kW) - 0.37€/kWh, IEC_62196_T2 (22.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 Eldrive Lithuania Helijo ratai",
        "address": "Eigulių g. 8, 44136 Kaunas, Lithuania",
        "city": "Kaunas",
        "lat": 54.911637,
        "lng": 23.910306,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.37
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (150.0kW) - 0.37€/kWh"
    },
    {
        "name": "🔌 Eldrive Lithuania Urban HUB Kaunas 10",
        "address": "Veterinarų gatvė 4",
        "city": "Biruliškės",
        "lat": 54.935971,
        "lng": 23.990593,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.37
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (50.0kW) - 0.37€/kWh"
    },
    {
        "name": "🔌 Eldrive Lithuania Odontologijos klinika Šypsnis",
        "address": "Žaliųjų Ežerų g. 25, 08406 Vilnius, Lithuania",
        "city": "Vilnius",
        "lat": 54.752004,
        "lng": 25.289253,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.29
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 Eldrive Lithuania Rimi Gargždai",
        "address": "Pasienio gatvė 1",
        "city": "Gargždai",
        "lat": 55.717543,
        "lng": 21.385557,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.29
        },
        "ev_status": "Laisva",
        "ev_connectors": "CHADEMO (50.0kW) - 0.37€/kWh, IEC_62196_T2_COMBO (200.0kW) - 0.37€/kWh, IEC_62196_T2 (43.0kW) - 0.29€/kWh, IEC_62196_T2_COMBO (50.0kW) - 0.37€/kWh"
    },
    {
        "name": "🔌 Eldrive Lithuania Urban HUB Kaunas 5",
        "address": "Lyderystės gatvė 1B",
        "city": "Biruliškės",
        "lat": 54.933901,
        "lng": 23.988051,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.37
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (50.0kW) - 0.37€/kWh"
    },
    {
        "name": "🔌 Eldrive Lithuania Eldrive įkrovimo parkas Panevėžys",
        "address": "Pušaloto g. 251, 35302 Bliūdžiai, Lithuania",
        "city": "Bliūdžiai",
        "lat": 55.768165,
        "lng": 24.297196,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.37
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (200.0kW) - 0.37€/kWh, IEC_62196_T2_COMBO (400.0kW) - 0.37€/kWh"
    },
    {
        "name": "🔌 Eldrive Lithuania Talkšos ežeras, Šiauliai",
        "address": "Talksos ezeras",
        "city": "Šiauliai",
        "lat": 55.930445,
        "lng": 23.327644,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.29
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 Eldrive Lithuania Pan Tenisas",
        "address": "Staniūnų g. 70A",
        "city": "Panevėžys",
        "lat": 55.717108,
        "lng": 24.380007,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.29
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 Eldrive Lithuania Architektų g. 24, Šiauliai",
        "address": "Architects st. 24, Siauliai",
        "city": "Šiauliai",
        "lat": 55.918227,
        "lng": 23.255827,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.29
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (50.0kW) - 0.37€/kWh, IEC_62196_T2 (22.0kW) - 0.29€/kWh, IEC_62196_T2_COMBO (120.0kW) - 0.37€/kWh"
    },
    {
        "name": "🔌 Eldrive Lithuania Maxx verslo centras",
        "address": "Raudondvario pl. 150 , Kaunas",
        "city": "Kaunas",
        "lat": 54.910832,
        "lng": 23.851109,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.29
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.29€/kWh, IEC_62196_T2_COMBO (300.0kW) - 0.37€/kWh"
    },
    {
        "name": "🔌 Eldrive Lithuania Gardino g. 6A, Šiauliai",
        "address": "Gardinog. 6A, Šiauliai",
        "city": "Šiauliai",
        "lat": 55.915121,
        "lng": 23.268848,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.29
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.29€/kWh, IEC_62196_T2_COMBO (120.0kW) - 0.37€/kWh"
    },
    {
        "name": "🔌 Eldrive Lithuania Eldrive | Porsche Charging Hub Raseiniai",
        "address": "Savanorių gatvė 28",
        "city": "Verėduva",
        "lat": 55.279819,
        "lng": 23.340906,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.37
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (200.0kW) - 0.37€/kWh, IEC_62196_T2_COMBO (400.0kW) - 0.37€/kWh, CHADEMO (75.0kW) - 0.37€/kWh"
    },
    {
        "name": "🔌 Eldrive Lithuania Kėdainių rajono vartotojų kooperatyvas",
        "address": "J. Basanavičiaus g. 89B, 57357 Kėdainiai, Lit",
        "city": "Kėdainiai",
        "lat": 55.278335,
        "lng": 23.96289,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.29
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 Eldrive Lithuania SMK Kaunas",
        "address": "Vilties g. 2, 46326 Kaunas, Lithuania",
        "city": "Kaunas",
        "lat": 54.874267,
        "lng": 23.913161,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.29
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (17.0kW) - 0.29€/kWh, IEC_62196_T2_COMBO (50.0kW) - 0.37€/kWh"
    },
    {
        "name": "🔌 Eldrive Lithuania Karališka kibininė",
        "address": "Logistikos g. 4, Sausių k, LT-21401 Trakų r.",
        "city": "Sausių kaimas",
        "lat": 54.702254,
        "lng": 25.005613,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.37
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (200.0kW) - 0.37€/kWh"
    },
    {
        "name": "🔌 Eldrive Lithuania Raseinių ligoninė | Partneris",
        "address": "Ligoninės g. 2, Raseiniai, 60127 Raseinių r.",
        "city": "Raseiniai",
        "lat": 55.384669,
        "lng": 23.120584,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.29
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 Eldrive Lithuania Verslo centras City",
        "address": "Žalgirio g. 90, 09300 Vilnius, Lithuania",
        "city": "Vilnius",
        "lat": 54.703704,
        "lng": 25.278663,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.37
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (50.0kW) - 0.37€/kWh"
    },
    {
        "name": "🔌 Eldrive Lithuania Dvaro g. 47, Šiauliai",
        "address": "Dvaro g. 47, 76345 Šiauliai, Lithuania",
        "city": "Šiauliai",
        "lat": 55.932089,
        "lng": 23.309399,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.29
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.29€/kWh, IEC_62196_T2_COMBO (50.0kW) - 0.37€/kWh, IEC_62196_T2_COMBO (120.0kW) - 0.37€/kWh"
    },
    {
        "name": "🔌 Eldrive Lithuania Jaunimo g. 8",
        "address": "Jaunimo g. 8, Vainotiškiai, Kėdainių rajono s",
        "city": "Vainotiškiai",
        "lat": 55.39736,
        "lng": 23.846436,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.29
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 Eldrive Lithuania Simbiocity",
        "address": "J. Balčikonio g. 3- 290, 08247 Vilnius, Lietu",
        "city": "Vilnius",
        "lat": 54.719978,
        "lng": 25.285111,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.37
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (50.0kW) - 0.37€/kWh"
    },
    {
        "name": "🔌 Maxima Molėtai",
        "address": "Sakalo g. 1, 33133 Molėtai, Lithuania",
        "city": "Molėtai",
        "lat": 55.22245,
        "lng": 25.434965,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (150.0kW) - 0.31€/kWh, IEC_62196_T2_COMBO (50.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 EMS Karmėlava | Inbalance grid",
        "address": "Vilniaus g. 52A",
        "city": "Karmėlava, Kauno r.",
        "lat": 54.969576,
        "lng": 24.064225,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.29
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2_COMBO (55.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 Impuls Klaipėda | Inbalance grid",
        "address": "Liepų g. 53A",
        "city": "Klaipėda",
        "lat": 55.717858,
        "lng": 21.146582,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.23
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.23€/kWh"
    },
    {
        "name": "🔌 Šakių Rajono Savivaldybės Administracija Šakių rajono savivaldybės administracija | PARTNERIS",
        "address": "Bažnyčios g. 7, 71122 Šakiai, Lietuva",
        "city": "Šakiai",
        "lat": 54.955858,
        "lng": 23.042538,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.29
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 Marijampolės futbolo arena",
        "address": "Kauno g. 125, Marijampolė, 68222 Marijampolės",
        "city": "Marijampolė",
        "lat": 54.574729,
        "lng": 23.366721,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.0
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW)"
    },
    {
        "name": "🔌 I. Šeiniaus g. 12",
        "address": "I. Šeiniaus g. 12, Širvintos, 19121 Širvintų ",
        "city": "Širvintos",
        "lat": 55.038403,
        "lng": 24.957038,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.31
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (180.0kW) - 0.31€/kWh"
    },
    {
        "name": "🔌 Stokker Vilnius",
        "address": "Savanorių pr. 119C, Vilnius, 03150 Vilniaus m",
        "city": "Vilnius",
        "lat": 54.662197,
        "lng": 25.234374,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.32
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (150.0kW) - 0.32€/kWh"
    },
    {
        "name": "🔌 PLTJONZE21_EDLT-92",
        "address": "Žeimių gatvė 21",
        "city": "Jonava",
        "lat": 55.081567,
        "lng": 24.272082,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.51
        },
        "ev_status": "Laisva",
        "ev_connectors": "CHADEMO (100.0kW) - 0.51€/kWh, IEC_62196_T2_COMBO (150.0kW) - 0.51€/kWh"
    },
    {
        "name": "🔌 Eldrive Lithuania Rimi Zujūnai",
        "address": "Žirgų g. 24",
        "city": "Antežeriai",
        "lat": 54.732186,
        "lng": 25.184053,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.37
        },
        "ev_status": "Laisva",
        "ev_connectors": "CHADEMO (50.0kW) - 0.37€/kWh, IEC_62196_T2_COMBO (50.0kW) - 0.37€/kWh"
    },
    {
        "name": "🔌 Techasas Rietavas",
        "address": "Laisvės g. 3, Rietavas, 90315 Rietavo sav., L",
        "city": "Rietavas",
        "lat": 55.723508,
        "lng": 21.93025,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.31
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (180.0kW) - 0.31€/kWh"
    },
    {
        "name": "🔌 Kavinė \"Lietuviški patiekalai\"",
        "address": "Ulonų g. 67, Alytus",
        "city": "Alytus",
        "lat": 54.380639,
        "lng": 24.061159,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.31
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (180.0kW) - 0.31€/kWh"
    },
    {
        "name": "🔌 Marijampolės ligoninė",
        "address": "Palangos g. 1, 68188 Marijampolė, Lithuania",
        "city": "Marijampolė",
        "lat": 54.565519,
        "lng": 23.346582,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (60.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 Bikuva Ukmergė",
        "address": "Deltuvos g. 33B, 20127 Ukmergė, Lithuania",
        "city": "Ukmergė",
        "lat": 55.245773,
        "lng": 24.741812,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (128.0kW) - 0.27€/kWh, CHADEMO (50.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 Islandijos pl. 30",
        "address": "Islandijos pl. 30, 49170 Kaunas, Lithuania",
        "city": "Kaunas",
        "lat": 54.937783,
        "lng": 23.903566,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (50.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 Eldrive Lithuania Eldrive įkrovimo parkas Senoji Varėna | NUOLAIDA",
        "address": "Vilniaus g. 25, Senoji Varėna, 65487 Varėnos",
        "city": "Senoji Varėna",
        "lat": 54.255298,
        "lng": 24.541787,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.25
        },
        "ev_status": "Laisva",
        "ev_connectors": "CHADEMO (100.0kW) - 0.25€/kWh, IEC_62196_T2_COMBO (400.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 PLTVILN110_EDLT-37",
        "address": "Naugarduko gatvė 110",
        "city": "Vilnius",
        "lat": 54.666032,
        "lng": 25.249742,
        "logo": "⚡",
        "prices": {
            "Elektra": 1.01
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (11.0kW) - 1.01€/kWh"
    },
    {
        "name": "🔌 Kelmės autobusų parkas Kelmės autobusų parkas | Partneris",
        "address": "Raseinių g. 66A, 86188 Kelmė, Lithuania",
        "city": "Kelmė",
        "lat": 55.620134,
        "lng": 22.957323,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.37
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (50.0kW) - 0.37€/kWh"
    },
    {
        "name": "🔌 Kelmės autobusų parkas Kelmės autobusų stotis | Partneris",
        "address": "V. Putvinskio g. 3, Kelmė, 86125 Kelmės r. sa",
        "city": "Kelmė",
        "lat": 55.634464,
        "lng": 22.929769,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.37
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (75.0kW) - 0.37€/kWh"
    },
    {
        "name": "🔌 Eldrive Lithuania Iris Šiauliai",
        "address": "Tilžės g. 9C, 78291 Šiauliai, Lithuania",
        "city": "Šiauliai",
        "lat": 55.909491,
        "lng": 23.267146,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.37
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (150.0kW) - 0.37€/kWh"
    },
    {
        "name": "🔌 PC Aidas",
        "address": "M. K. Čiurlionio g. 50, Druskininkai, 66142 D",
        "city": "Druskininkai",
        "lat": 54.015706,
        "lng": 23.977854,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (200.0kW) - 0.31€/kWh, CHADEMO (50.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 Eldrive Lithuania Rimi Vingis",
        "address": "Vingio g. 31, Klaipėda, 95215 Klaipėdos m. sa",
        "city": "Klaipėda",
        "lat": 55.666914,
        "lng": 21.195945,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.37
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (150.0kW) - 0.37€/kWh"
    },
    {
        "name": "🔌 Lidl Kaunas",
        "address": "Baltijos Gatvė 48a",
        "city": "Kaunas",
        "lat": 54.922187,
        "lng": 23.883246,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.3
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (43.0kW) - 0.30€/kWh, IEC_62196_T2_COMBO (50.0kW) - 0.36€/kWh, IEC_62196_T2 (22.0kW) - 0.30€/kWh, CHADEMO (50.0kW) - 0.36€/kWh"
    },
    {
        "name": "🔌 Hesburger Erdvės",
        "address": "Erdvės g. 78, 52114 Ramučiai, Lithuania",
        "city": "Ramučiai",
        "lat": 54.929223,
        "lng": 24.037641,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.31
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (200.0kW) - 0.31€/kWh"
    },
    {
        "name": "🔌 Klaipėdos Akropolis 1 | Inbalance grid",
        "address": "Taikos av. 61",
        "city": "Klaipėda",
        "lat": 55.692983,
        "lng": 21.153567,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.23
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.23€/kWh"
    },
    {
        "name": "🔌 Lidl Ginduliai",
        "address": "Piligrimų g 2",
        "city": "Slengiai",
        "lat": 55.734067,
        "lng": 21.188309,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.3
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.30€/kWh"
    },
    {
        "name": "🔌 KOOPs Rokai",
        "address": "Rokų g. 23, 46138 Kaunas, Lithuania",
        "city": "Kaunas",
        "lat": 54.83871,
        "lng": 23.948198,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2_COMBO (45.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 Eldrive Lithuania Maxima, Klaipėdos pl. 42",
        "address": "Klaipėdos pl. 42, Palanga, 55563 Palangos m.",
        "city": "Palanga",
        "lat": 55.912799,
        "lng": 21.077412,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.37
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (150.0kW) - 0.37€/kWh"
    },
    {
        "name": "🔌 Eldrive Lithuania Sveikatos parkas | Partneris",
        "address": "Anykščių skg. 2, Ukmergė",
        "city": "Ukmergė",
        "lat": 55.256239,
        "lng": 24.784968,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.29
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 Eldrive Lithuania Pakalnės prie parko | Partneris",
        "address": "Pakalnės g. 27, Ukmergė",
        "city": "Ukmergė",
        "lat": 55.24845,
        "lng": 24.763404,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.29
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 Šiaulių arena",
        "address": "J. Jablonskio g. 16",
        "city": "Šiauliai",
        "lat": 55.9198111,
        "lng": 23.2821451,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2479
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (160.0kW) - 0.41€/kWh, IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 Viešbutis „Nykščio namai\" & SPA",
        "address": "Liudiškių g., 18",
        "city": "Anykščiai",
        "lat": 55.5202589,
        "lng": 25.1148426,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2479
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (47.0kW) - 0.29€/kWh, IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 Norfa XL, Vilijos g. 2, Nemenčinė",
        "address": "Vilijos g. 2",
        "city": "Nemenčinė",
        "lat": 54.8444595,
        "lng": 25.4603722,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2479
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (47.0kW) - 0.29€/kWh, IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 Norfa XL Vilniaus g. 47B, Joniškis",
        "address": "Vilniaus g. 47B, Joniškis",
        "city": "Joniškis",
        "lat": 56.227959,
        "lng": 23.6046193,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.405
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (240.0kW) - 0.41€/kWh"
    },
    {
        "name": "🔌 Bruklinas, Pramonės g. 6, Šiauliai",
        "address": "Pramonės g. 6",
        "city": "Šiauliai",
        "lat": 55.9142288,
        "lng": 23.3055643,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2893
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (240.0kW) - 0.41€/kWh, IEC_62196_T2_COMBO (47.0kW) - 0.29€/kWh, IEC_62196_T2_COMBO (120.0kW) - 0.41€/kWh"
    },
    {
        "name": "🔌 Norfa XXL, Šiaurės pr. 44, Kaunas",
        "address": "Šiaurės pr. 44",
        "city": "Kaunas",
        "lat": 54.9295872,
        "lng": 23.9251678,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2479
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (160.0kW) - 0.41€/kWh, IEC_62196_T2_COMBO (47.0kW) - 0.29€/kWh, IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 Hesburger Jonučiai",
        "address": "J. Povilaičio g. 1, Jonučiai, 53303 Kauno r. ",
        "city": "Jonučiai",
        "lat": 54.82615,
        "lng": 23.847956,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.31
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (150.0kW) - 0.31€/kWh"
    },
    {
        "name": "🔌 Restoranas \"Sena skrynia\"",
        "address": "Smėlio g. 5, 45306 Kaunas, Lithuania",
        "city": "Kaunas",
        "lat": 54.863677,
        "lng": 23.963361,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (149.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 Vynoteka Radviliškis",
        "address": "Versmės g. 2, 82197 Radviliškis, Lithuania",
        "city": "Radviliškis",
        "lat": 55.813873,
        "lng": 23.546208,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (150.0kW) - 0.31€/kWh, CHADEMO (50.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 Žirmūnų g. 68A",
        "address": "Žirmūnų g. 68A, 09133 Vilnius, Lithuania",
        "city": "Vilnius",
        "lat": 54.718301,
        "lng": 25.30353,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.32
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (200.0kW) - 0.32€/kWh"
    },
    {
        "name": "🔌 Maxima Pramonės pr. (out of order)",
        "address": "Pramonės pr. 29, 51285 Kaunas, Lithuania",
        "city": "Kaunas",
        "lat": 54.912619,
        "lng": 23.984038,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2_COMBO (150.0kW) - 0.31€/kWh, IEC_62196_T2_COMBO (50.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 Laiko Marios - 2k1",
        "address": "Preilos gatvė 67B",
        "city": "Neringa",
        "lat": 55.371082,
        "lng": 21.06348,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2479
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 Moxy Kaunas Center",
        "address": "Maironio g. 19, 44250 Kaunas, Lithuania",
        "city": "Kaunas",
        "lat": 54.898256,
        "lng": 23.909548,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.29
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 Hill Garden Residence",
        "address": "Užkanavės g. 46, 00170 Palanga, Lithuania",
        "city": "Palanga",
        "lat": 55.958273,
        "lng": 21.072788,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (11.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Panevėžio butų ūkis",
        "address": "Beržų g. 48, 36144 Panevėžys, Lithuania",
        "city": "Panevėžio apskritis",
        "lat": 55.720237,
        "lng": 24.384104,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.41
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.41€/kWh"
    },
    {
        "name": "🔌 Fasadena",
        "address": "J. Žemgulio g. 25, 50247 Kaunas, Lithuania",
        "city": "Kauno apskritis",
        "lat": 54.909405,
        "lng": 23.943111,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2893
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 Portum Marijampolė",
        "address": "Gėlyno g. 6, 68100 Marijampolė, Lithuania",
        "city": "Marijampolės apskritis",
        "lat": 54.58189,
        "lng": 23.374958,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2645
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.26€/kWh"
    },
    {
        "name": "🔌 UAB Švara",
        "address": "Slucko str. 3, Vilnius 09312, Lithuania",
        "city": "Vilnius",
        "lat": 54.693749,
        "lng": 25.285005,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.25
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 IKI Jakai | Inbalance grid",
        "address": "Jubiliejaus g. 11",
        "city": "Sendvaris",
        "lat": 55.698431,
        "lng": 21.209592,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.23
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.23€/kWh"
    },
    {
        "name": "🔌 Aukštaičių g. 85",
        "address": "Aukštaičių g. 85, Panevėžys, 36109 Panevėžio ",
        "city": "Panevėžys",
        "lat": 55.725847,
        "lng": 24.38286,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (150.0kW) - 0.31€/kWh, CHADEMO (50.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 Eldrive Lithuania Domus galerija",
        "address": "P. Lukšio g. 32, Vilnius, 08222 Vilniaus m. s",
        "city": "Vilnius",
        "lat": 54.711204,
        "lng": 25.297521,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.37
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (150.0kW) - 0.37€/kWh"
    },
    {
        "name": "🔌 Kintų g. 13 (2) | Vilniaus apšvietimas | Inbalance grid",
        "address": "Kintų g. 13",
        "city": "Vilnius",
        "lat": 54.701895,
        "lng": 25.277332,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Kintų g. 13 | Vilniaus apšvietimas | Inbalance grid",
        "address": "Kintų g. 13",
        "city": "Vilnius",
        "lat": 54.702005,
        "lng": 25.277807,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Santariškių 73 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Santariškių 73",
        "city": "Vilnius",
        "lat": 54.764454,
        "lng": 25.285287,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Santariškiu 71, Vilnius | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Santariškiu 71",
        "city": "Vilnius",
        "lat": 54.764188,
        "lng": 25.284393,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Santariškių 57 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Santariškių g. 57 Vilnius",
        "city": "Vilnius",
        "lat": 54.763255,
        "lng": 25.284046,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Santariškiu 69, Vilnius | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Santariškiu 69, Vilnius",
        "city": "Vilnius",
        "lat": 54.764908,
        "lng": 25.284043,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Braškių 30, Vilnius | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Braškių g. 30",
        "city": "Vilnius",
        "lat": 54.744037,
        "lng": 25.271109,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Braškių 30, Vilnius (atrama 9) | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Braškių g. 30",
        "city": "Vilnius",
        "lat": 54.744098,
        "lng": 25.270552,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Braškių 30, Vilnius (atrama 7) | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Braškių g. 30",
        "city": "Vilnius",
        "lat": 54.744157,
        "lng": 25.27,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Braškių 2B, Vilnius | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Braškių g. 2B",
        "city": "Vilnius",
        "lat": 54.743294,
        "lng": 25.276471,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Vėtrungės 43, Vilnius | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Vėtrungės 43",
        "city": "Vilnius",
        "lat": 54.735958,
        "lng": 25.234039,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Minties g. 1, Vilnius | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Minties g. 1",
        "city": "Vilnius",
        "lat": 54.705521,
        "lng": 25.301483,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Minties 5, Vilnius | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Minties 5",
        "city": "Vilnius",
        "lat": 54.70501,
        "lng": 25.298274,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Minties 11 , Vilnius | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Minties g. 11",
        "city": "Vilnius",
        "lat": 54.704421,
        "lng": 25.29458,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Eldrive Lithuania Sodyba \"Vienkiemis\" | PARTNERIS",
        "address": "Vienkiemio gatvė 1A",
        "city": "Padvariai",
        "lat": 55.91106,
        "lng": 21.246924,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.29
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 Architektu 105, Vilnius | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Architektų 105, Vilnius",
        "city": "Vilnius",
        "lat": 54.680324,
        "lng": 25.214086,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Architektu 107, Vilnius | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Architektu 107",
        "city": "Vilnius",
        "lat": 54.680518,
        "lng": 25.215672,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Architektu 192, Vilnius | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Architektų g. 192",
        "city": "Vilnius",
        "lat": 54.680838,
        "lng": 25.217572,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Architektų 146, Vilnius | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Architektų 146",
        "city": "Vilnius",
        "lat": 54.683022,
        "lng": 25.211943,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Architektų 111, Vilnius | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Architektų g. 111",
        "city": "Vilnius",
        "lat": 54.68012,
        "lng": 25.215875,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Architektų 118, Vilnius | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Architektų g. 118",
        "city": "Vilnius",
        "lat": 54.678414,
        "lng": 25.202775,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 PLTVILJK23_EDLT-42",
        "address": "J. Kubiliaus gatvė 23",
        "city": "Vilnius",
        "lat": 54.71442,
        "lng": 25.300956,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.51
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (25.0kW) - 1.01€/kWh, IEC_62196_T2 (22.0kW) - 0.51€/kWh"
    },
    {
        "name": "🔌 PLTPANJB69_EDLT-46",
        "address": "J. Basanavičiaus gatvė 69B",
        "city": "Panevėžys",
        "lat": 55.715694,
        "lng": 24.375211,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.44
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (25.0kW) - 0.44€/kWh"
    },
    {
        "name": "🔌 PLTVILVAD3_EDLT-40",
        "address": "Vaduvos gatvė 3",
        "city": "Vilnius",
        "lat": 54.643081,
        "lng": 25.204548,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.51
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (50.0kW) - 0.66€/kWh, IEC_62196_T2 (22.0kW) - 0.51€/kWh"
    },
    {
        "name": "🔌 PLTVILU252_EDLT-109",
        "address": "Ukmergės Gatvė 252",
        "city": "Vilnius",
        "lat": 54.725702,
        "lng": 25.240276,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.51
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2_COMBO (50.0kW) - 0.66€/kWh, IEC_62196_T2 (22.0kW) - 0.51€/kWh"
    },
    {
        "name": "🔌 PLTDRUVI13_EDLT-15",
        "address": "Vilniaus alėja 13-1",
        "city": "Druskininkai",
        "lat": 54.02359,
        "lng": 23.972655,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.44
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.44€/kWh"
    },
    {
        "name": "🔌 PLTVILL127_EDLT-54",
        "address": "Laisvės prospektas 127",
        "city": "Vilnius",
        "lat": 54.73033,
        "lng": 25.237202,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.51
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (50.0kW) - 0.66€/kWh, IEC_62196_T2 (22.0kW) - 0.51€/kWh"
    },
    {
        "name": "🔌 PLTKLAMO45_EDLT-52",
        "address": "Mokyklos gatvė 45",
        "city": "Klaipėda",
        "lat": 55.707107,
        "lng": 21.159346,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.4
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (25.0kW) - 0.44€/kWh, IEC_62196_T2 (22.0kW) - 0.40€/kWh"
    },
    {
        "name": "🔌 PLTSAUPRA2_EDLT-48",
        "address": "Pramonės gatvė 2D",
        "city": "Šiauliai",
        "lat": 55.91667,
        "lng": 23.298426,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.44
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2_COMBO (25.0kW) - 0.44€/kWh"
    },
    {
        "name": "🔌 PLTSAUPRA2_EDLT-49",
        "address": "Pramonės gatvė 2D",
        "city": "Šiauliai",
        "lat": 55.91667,
        "lng": 23.298426,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.44
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.44€/kWh"
    },
    {
        "name": "🔌 PLTKAUJO60_EDLT-196",
        "address": "Jonavos gatvė 60",
        "city": "Kaunas",
        "lat": 54.90303,
        "lng": 23.898101,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.4
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.40€/kWh"
    },
    {
        "name": "🔌 PLTKAUCH17_EDLT-201",
        "address": "Chemijos gatvė 17D",
        "city": "Kaunas",
        "lat": 54.903385,
        "lng": 23.985307,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.4
        },
        "ev_status": "Laisva",
        "ev_connectors": "CHADEMO (50.0kW) - 0.40€/kWh, IEC_62196_T2_COMBO (50.0kW) - 0.40€/kWh"
    },
    {
        "name": "🔌 PLTVILN110_EDLT-36",
        "address": "Naugarduko gatvė 110",
        "city": "Vilnius",
        "lat": 54.666032,
        "lng": 25.249742,
        "logo": "⚡",
        "prices": {
            "Elektra": 1.01
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2_COMBO (25.0kW) - 1.01€/kWh"
    },
    {
        "name": "🔌 PLTKLASI50_EDLT-45",
        "address": "Šilutės plentas 50",
        "city": "Klaipėda",
        "lat": 55.682447,
        "lng": 21.184697,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.44
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (25.0kW) - 0.44€/kWh, IEC_62196_T2 (22.0kW) - 0.44€/kWh"
    },
    {
        "name": "🔌 PLTPANSM85_EDLT-206",
        "address": "Smėlynės gatvė 85",
        "city": "Panevėžys",
        "lat": 55.745037,
        "lng": 24.367753,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.44
        },
        "ev_status": "Laisva",
        "ev_connectors": "CHADEMO (58.0kW) - 0.44€/kWh, IEC_62196_T2_COMBO (60.0kW) - 0.44€/kWh"
    },
    {
        "name": "🔌 PLTKAUPR44_EDLT-180",
        "address": "Pramonės prospektas 44",
        "city": "Kaunas",
        "lat": 54.927162,
        "lng": 23.974738,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.33
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (150.0kW) - 0.33€/kWh"
    },
    {
        "name": "🔌 PLTGOBDVA1_EDLT-61",
        "address": "Dvaro Gatvė 1",
        "city": "Gobergiškės",
        "lat": 55.718601,
        "lng": 21.293563,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.51
        },
        "ev_status": "Laisva",
        "ev_connectors": "CHADEMO (75.0kW) - 0.51€/kWh, IEC_62196_T2_COMBO (150.0kW) - 0.51€/kWh"
    },
    {
        "name": "🔌 Taikos 259, Vilnius | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Taikos g. 259",
        "city": "Vilnius",
        "lat": 54.708722,
        "lng": 25.212698,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Taikos 259, Vilnius 1 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Taikos g. 259",
        "city": "Vilnius",
        "lat": 54.708865,
        "lng": 25.212889,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Taikos 257, Vilnius | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Taikos g. 257",
        "city": "Vilnius",
        "lat": 54.709887,
        "lng": 25.212638,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Taikos 253, Vilnius | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Taikos g. 253",
        "city": "Vilnius",
        "lat": 54.710272,
        "lng": 25.211982,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Juodkrantės g | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Juodkrantės g.",
        "city": "Vilnius",
        "lat": 54.711736,
        "lng": 25.178033,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Juodkrantes g. 7 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Juodkrantes g. 7",
        "city": "Vilnius",
        "lat": 54.712494,
        "lng": 25.178169,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Priegliaus g. 17 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Priegliaus g. 17",
        "city": "Vilnius",
        "lat": 54.713686,
        "lng": 25.186847,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Mažvydo g. 5  | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Mažvydo g. 5",
        "city": "Vilnius",
        "lat": 54.711625,
        "lng": 25.186035,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Mažvydo g. 7, | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Mažvydo g. 7",
        "city": "Vilnius",
        "lat": 54.71163,
        "lng": 25.185072,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Mažvydo g. 16, | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Mažvydo g. 16, | Vilniaus Apšvietimas",
        "city": "Vilnius",
        "lat": 54.711519,
        "lng": 25.18377,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Mažvydo g. 16 1 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Mažvydo g. 16",
        "city": "Vilnius",
        "lat": 54.71155,
        "lng": 25.182621,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Mažvydo g. 13 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Mažvydo g. 13",
        "city": "Vilnius",
        "lat": 54.711564,
        "lng": 25.181472,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Mažvydo g. 15 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Mažvydo g. 15",
        "city": "Vilnius",
        "lat": 54.711568,
        "lng": 25.180318,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Mažvydo g. 17, | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Mažvydo g. 17",
        "city": "Vilnius",
        "lat": 54.711582,
        "lng": 25.1792,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Mažvydo g. 17 1 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Mažvydo g. 17",
        "city": "Vilnius",
        "lat": 54.711589,
        "lng": 25.1788,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 M. Mažvydo g. 27 1 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "M. Mažvydo g. 27",
        "city": "Vilnius",
        "lat": 54.711721,
        "lng": 25.175938,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Nidos g. 5 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Nidos g. 5",
        "city": "Vilnius",
        "lat": 54.711201,
        "lng": 25.18443,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Smalines g. 3, Vilnius | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Smalines g. 3",
        "city": "Vilnius",
        "lat": 54.701587,
        "lng": 25.183821,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Smalines g. 1, Vilnius | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Smalines g. 1",
        "city": "Vilnius",
        "lat": 54.701201,
        "lng": 25.183023,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Smalinės g, 13 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Smalinės g, 13",
        "city": "Vilnius",
        "lat": 54.702006,
        "lng": 25.186072,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Įsrutes g. 4 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Įsrutes g. 4",
        "city": "Vilnius",
        "lat": 54.702474,
        "lng": 25.181841,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Įsruties g. 10 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Įsruties g. 10",
        "city": "Vilnius",
        "lat": 54.703712,
        "lng": 25.181884,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Įsruties g. 10 1 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Įsruties g. 10",
        "city": "Vilnius",
        "lat": 54.704086,
        "lng": 25.181905,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Įsruties g. 26 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Įsruties g. 26",
        "city": "Vilnius",
        "lat": 54.709333,
        "lng": 25.18191,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Įsruties g. 28 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Įsruties g. 28",
        "city": "Vilnius",
        "lat": 54.709594,
        "lng": 25.181885,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Įsruties g. 28 1 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Įsruties g. 28",
        "city": "Vilnius",
        "lat": 54.709842,
        "lng": 25.181907,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Įsruties g. 20  | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Įsruties g. 20",
        "city": "Vilnius",
        "lat": 54.708238,
        "lng": 25.181883,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Įsruties g. 20 1 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Įsruties g. 20",
        "city": "Vilnius",
        "lat": 54.707949,
        "lng": 25.181871,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Įsruties g. 20 2 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Įsruties g. 20",
        "city": "Vilnius",
        "lat": 54.70777,
        "lng": 25.181868,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Vydūno g. 19  | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Vydūno g. 19",
        "city": "Vilnius",
        "lat": 54.707254,
        "lng": 25.17897,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Pajautos g. 1  | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Pajautos g. 1",
        "city": "Vilnius",
        "lat": 54.709953,
        "lng": 25.179021,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Pajautos g. 13 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Pajautos g. 13",
        "city": "Vilnius",
        "lat": 54.709954,
        "lng": 25.175871,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Sausio 13-osios g. 5 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Sausio 13-osios g. 5",
        "city": "Vilnius",
        "lat": 54.692557,
        "lng": 25.21939,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Sausio 13-osios g. 21 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Sausio 13-osios g. 21",
        "city": "Vilnius",
        "lat": 54.68954,
        "lng": 25.21761,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Sausio 13-osios g. 29 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Sausio 13-osios g. 29",
        "city": "Vilnius",
        "lat": 54.689039,
        "lng": 25.216374,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Sausio 13-osios g. 37 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Sausio 13-osios g. 37",
        "city": "Vilnius",
        "lat": 54.688467,
        "lng": 25.213616,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Sausio 13-osios g. 5 1 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Sausio 13-osios g. 5",
        "city": "Vilnius",
        "lat": 54.692115,
        "lng": 25.219225,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 I. Šimulionio g. 3 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "I. Šimulionio g. 3",
        "city": "Vilnius",
        "lat": 54.694295,
        "lng": 25.224255,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 A. J. Povilaičio g. 1 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "A. J. Povilaičio g. 1",
        "city": "Vilnius",
        "lat": 54.697618,
        "lng": 25.224418,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 A. J. Povilaičio g. 16 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "A. J. Povilaičio g. 16",
        "city": "Vilnius",
        "lat": 54.697809,
        "lng": 25.222176,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 V. Vaitkaus g. 3 1 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "V. Vaitkaus g. 3",
        "city": "Vilnius",
        "lat": 54.698284,
        "lng": 25.224084,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 A. P. Kavoliuko g. 13 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "A. P. Kavoliuko g. 13",
        "city": "Vilnius",
        "lat": 54.696105,
        "lng": 25.21323,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 A. P. Kavoliuko g. 18 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "A. P. Kavoliuko g. 18",
        "city": "Vilnius",
        "lat": 54.696432,
        "lng": 25.212906,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 A. P. Kavoliuko g. 7 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "A. P. Kavoliuko g. 7",
        "city": "Vilnius",
        "lat": 54.697188,
        "lng": 25.211223,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 D. Gerbutavičiaus g. 2 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "D. Gerbutavičiaus g. 2",
        "city": "Vilnius",
        "lat": 54.692722,
        "lng": 25.212468,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 D. Gerbutavičiaus g. 2 1 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "D. Gerbutavičiaus g. 2",
        "city": "Vilnius",
        "lat": 54.693145,
        "lng": 25.211704,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 R. Jankausko g. 1 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "R. Jankausko g. 1",
        "city": "Vilnius",
        "lat": 54.690397,
        "lng": 25.209309,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 R. Jankausko g. 3 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "R. Jankausko g. 3",
        "city": "Vilnius",
        "lat": 54.690616,
        "lng": 25.209412,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 R.Jankauskas g. 13 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "R.Jankauskas g. 13",
        "city": "Vilnius",
        "lat": 54.690794,
        "lng": 25.208253,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 V. Maciulevičiaus g. 51 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "V. Maciulevičiaus g. 51",
        "city": "Vilnius",
        "lat": 54.68927,
        "lng": 25.203845,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 PLTVILU231_EDLT-66",
        "address": "Ukmergės Gatvė 231",
        "city": "Vilnius",
        "lat": 54.719945,
        "lng": 25.246468,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.51
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (150.0kW) - 0.51€/kWh"
    },
    {
        "name": "🔌 Žirmūnų g. 30 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Žirmūnų g. 30",
        "city": "Vilnius",
        "lat": 54.701592,
        "lng": 25.301105,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Žirmūnų g. 30A | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Žirmūnų g. 30A",
        "city": "Vilnius",
        "lat": 54.701614,
        "lng": 25.300078,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Žirmūnų g. 48A | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Žirmūnų g. 48A",
        "city": "Vilnius",
        "lat": 54.702229,
        "lng": 25.303557,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Žirmūnų g.1 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Žirmūnų g.1",
        "city": "Vilnius",
        "lat": 54.708678,
        "lng": 25.305019,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Žirmūnų g. 51 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Žirmūnų g. 51",
        "city": "Vilnius",
        "lat": 54.71618,
        "lng": 25.307001,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Žirmūnų g. 103 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Žirmūnų g. 103",
        "city": "Vilnius",
        "lat": 54.719948,
        "lng": 25.304738,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Žirmūnų g. 111 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Žirmūnų g. 111",
        "city": "Vilnius",
        "lat": 54.722409,
        "lng": 25.301352,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Žirmūnų g. 113 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Žirmūnų g. 113",
        "city": "Vilnius",
        "lat": 54.723095,
        "lng": 25.302013,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Žirmūnų g.117 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Žirmūnų g.117",
        "city": "Vilnius",
        "lat": 54.723984,
        "lng": 25.303035,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Žirmūnų g.102 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Žirmūnų g.102",
        "city": "Vilnius",
        "lat": 54.727626,
        "lng": 25.298319,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Žirmūnų g.132 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Žirmūnų g.132",
        "city": "Vilnius",
        "lat": 54.72392,
        "lng": 25.299545,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Žirmūnų g. 70C | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Žirmūnų g. 70C",
        "city": "Vilnius",
        "lat": 54.720971,
        "lng": 25.300512,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Žygio 97A | Vilniaus apšvietimas | Inbalance grid",
        "address": "Žygio 97A",
        "city": "Vilnius",
        "lat": 54.710683,
        "lng": 25.294642,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Žygio g. 97  | Vilniaus apšvietimas | Inbalance grid",
        "address": "Žygio g. 97",
        "city": "Vilnius",
        "lat": 54.709824,
        "lng": 25.294212,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 J.Kubiliaus g. 2 | Vilniaus apšvietimas | Inbalance grid",
        "address": "J.Kubiliaus g. 2",
        "city": "Vilnius",
        "lat": 54.708004,
        "lng": 25.296382,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 J.Kubiliaus g. 2 1 | Vilniaus apšvietimas | Inbalance grid",
        "address": "J.Kubiliaus g. 2",
        "city": "Vilnius",
        "lat": 54.708283,
        "lng": 25.29651,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 S. Žukausko g. 31 | Vilniaus apšvietimas | Inbalance grid",
        "address": "S. Žukausko g. 31",
        "city": "Vilnius",
        "lat": 54.707444,
        "lng": 25.300642,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 S. Žukausko g. 47 | Vilniaus apšvietimas | Inbalance grid",
        "address": "S. Žukausko g. 47",
        "city": "Vilnius",
        "lat": 54.709474,
        "lng": 25.302836,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 K.Ladygos g. 5 | Vilniaus apšvietimas | Inbalance grid",
        "address": "K.Ladygos g. 5",
        "city": "Vilnius",
        "lat": 54.708689,
        "lng": 25.301578,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Apkasų g. 6 | Vilniaus apšvietimas | Inbalance grid",
        "address": "Apkasų g. 6",
        "city": "Vilnius",
        "lat": 54.708458,
        "lng": 25.288661,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Verkiu g. 20  | Vilniaus apšvietimas | Inbalance grid",
        "address": "Verkiu g. 20",
        "city": "Vilnius",
        "lat": 54.706754,
        "lng": 25.286873,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Kalvariju g. 99 | Vilniaus apšvietimas | Inbalance grid",
        "address": "Kalvariju g. 99",
        "city": "Vilnius",
        "lat": 54.706913,
        "lng": 25.28603,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Apkasu g. 7  | Vilniaus apšvietimas | Inbalance grid",
        "address": "Apkasu g. 7",
        "city": "Vilnius",
        "lat": 54.707941,
        "lng": 25.288829,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Raitininku g. 4 | Vilniaus apšvietimas | Inbalance grid",
        "address": "Raitininkų g. 4",
        "city": "Vilnius",
        "lat": 54.69444,
        "lng": 25.294632,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Šeimyniškių g. 42 |  Vilniaus apšvietimas | Inbalance grid",
        "address": "Šeimyniškių g. 42",
        "city": "Vilnius",
        "lat": 54.695879,
        "lng": 25.296001,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Rinktinės g. 9  | Vilniaus apšvietimas | Inbalance grid",
        "address": "Rinktinės g. 9",
        "city": "Vilnius",
        "lat": 54.696726,
        "lng": 25.287686,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Orlen Kryžkalnis (Klaipėda - Vilnius) | Inbalance grid",
        "address": "Pikelių k. 6",
        "city": "Raseinių r.",
        "lat": 55.464387,
        "lng": 22.685331,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (186.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 IKI Alytus",
        "address": "Naujoji g. 2C, 62116 Alytus, Lithuania",
        "city": "Alytus",
        "lat": 54.396981,
        "lng": 24.035836,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (150.0kW) - 0.31€/kWh, CHADEMO (50.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 Gerulaičio g. 10 | Vilniaus apšvietimas | Inbalance grid",
        "address": "Gerulaičio g. 10",
        "city": "Vilnius",
        "lat": 54.716894,
        "lng": 25.278575,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Gerulaičio g. 10 1 | Vilniaus apšvietimas | Inbalance grid",
        "address": "Gerulaičio g. 10",
        "city": "Vilnius",
        "lat": 54.716894,
        "lng": 25.278575,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 K. Ulvydo g. 4 | Vilniaus apšvietimas | Inbalance grid",
        "address": "K. Ulvydo g. 4",
        "city": "Vilnius",
        "lat": 54.717803,
        "lng": 25.2766,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 K.Ulvydo g. 4B-3 | Vilniaus apšvietimas | Inbalance grid",
        "address": "Ulvydo g. 4B-3",
        "city": "Vilnius",
        "lat": 54.718597,
        "lng": 25.277397,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 K. Ulvydo 4C | Vilniaus apšvietimas | Inbalance grid",
        "address": "K. Ulvydo 4C",
        "city": "Vilnius",
        "lat": 54.719096,
        "lng": 25.278929,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 K. Ulvydo g. 7 | Vilniaus apšvietimas | Inbalance grid",
        "address": "K. Ulvydo g. 7",
        "city": "Vilnius",
        "lat": 54.719236,
        "lng": 25.280942,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 K. Ulvydo g. 7 1 | Vilniaus apšvietimas | Inbalance grid",
        "address": "K. Ulvydo g. 5",
        "city": "Vilnius",
        "lat": 54.719217,
        "lng": 25.28133,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 J. Lebedžio g. 1 | Vilniaus apšvietimas | Inbalance grid",
        "address": "J. Lebedžio g. 1",
        "city": "Vilnius",
        "lat": 54.720046,
        "lng": 25.280429,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 J, Pikčilingio g. | Vilniaus apšvietimas | Inbalance grid",
        "address": "J, Pikčilingio g.",
        "city": "Vilnius",
        "lat": 54.720247,
        "lng": 25.282453,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 J. Balčikonio g. 9 | Vilniaus apšvietimas | Inbalance grid",
        "address": "J. Balčikonio g. 9",
        "city": "Vilnius",
        "lat": 54.720811,
        "lng": 25.28121,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Sveikatos ratas",
        "address": "Tirkiliškių g. 51, Kaunas 46458, Lithuania",
        "city": "Kaunas",
        "lat": 54.861392,
        "lng": 23.869037,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.37
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.37€/kWh"
    },
    {
        "name": "🔌 Vila Ūla",
        "address": "Ežero gatvę 3, 65383, Lithuania",
        "city": "undefined",
        "lat": 54.201795,
        "lng": 24.346996,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.29
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (22.0kW), IEC_62196_T2 (22.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 Sveikatos ratas Kėdainiai",
        "address": "Rasos g. 6A, Kėdainiai 57445, Lithuania",
        "city": "Kėdainiai",
        "lat": 55.279865,
        "lng": 23.959096,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.37
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.37€/kWh"
    },
    {
        "name": "🔌 Opel Vilnius",
        "address": "Ukmergės g. 279a, Vilnius 06138, Lithuania",
        "city": "Vilnius",
        "lat": 54.73129,
        "lng": 25.238164,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.314
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.31€/kWh"
    },
    {
        "name": "🔌 Dentavita",
        "address": "Taikos al. 24, 35149 Panevėžys, Lietuva",
        "city": "Panevėžys",
        "lat": 55.73878,
        "lng": 24.341301,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 Ignalina NPP",
        "address": "31217, Lithuania",
        "city": "Utena County",
        "lat": 55.601826,
        "lng": 26.560436,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.1983
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.20€/kWh"
    },
    {
        "name": "🔌 Motorider UAB",
        "address": "Verslo g. 1, Jonučiai, 53317 Kauno r. sav., L",
        "city": "Jonučiai",
        "lat": 54.841277,
        "lng": 23.852336,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.0
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW)"
    },
    {
        "name": "🔌 Mėmelio taupomoji kasa",
        "address": "Minijos g. 127, 93213 Klaipėda, Lithuania",
        "city": "Klaipėda",
        "lat": 55.68209,
        "lng": 21.151294,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (150.0kW) - 0.31€/kWh, CHADEMO (50.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 Didlaukio g. 80 | Vilniaus apšvietimas | Inbalance grid",
        "address": "Didlaukio g. 80",
        "city": "Vilnius",
        "lat": 54.729196,
        "lng": 25.269132,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Didlaukio g. 60  | Vilniaus apšvietimas | Inbalance grid",
        "address": "Didlaukio g. 60",
        "city": "Vilnius",
        "lat": 54.729143,
        "lng": 25.272734,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Didlaukio g. 42 | Vilniaus apšvietimas | Inbalance grid",
        "address": "Didlaukio g. 42",
        "city": "Vilnius",
        "lat": 54.728899,
        "lng": 25.274328,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Didlaukio g. 28 | Vilniaus apšvietimas | Inbalance grid",
        "address": "Didlaukio g. 28",
        "city": "Vilnius",
        "lat": 54.728336,
        "lng": 25.275659,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Didlaukio g. 8  | Vilniaus apšvietimas | Inbalance grid",
        "address": "Didlaukio g. 8",
        "city": "Vilnius",
        "lat": 54.727789,
        "lng": 25.276516,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Didlaukio g. 4  | Vilniaus apšvietimas | Inbalance grid",
        "address": "Didlaukio g. 4",
        "city": "Vilnius",
        "lat": 54.727444,
        "lng": 25.278371,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Didlaukio g. 4 1  | Vilniaus apšvietimas | Inbalance grid",
        "address": "Didlaukio g. 4",
        "city": "Vilnius",
        "lat": 54.727469,
        "lng": 25.277953,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Vingrių skveras",
        "address": "Pylimo g. 17, 01141 Vilnius, Lithuania",
        "city": "Vilnius",
        "lat": 54.678379,
        "lng": 25.27704,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.29
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (60.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 IKI Žvėrynas",
        "address": "Sėlių g. 54, Vilnius, Lithuania",
        "city": "Vilnius",
        "lat": 54.698517,
        "lng": 25.247115,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (43.0kW), CHADEMO (45.0kW) - 0.27€/kWh, IEC_62196_T2_COMBO (45.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 IKI Lazdynai",
        "address": "Architektų g. 43, Vilnius, Lithuania",
        "city": "Vilnius",
        "lat": 54.674274,
        "lng": 25.20145,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (43.0kW), CHADEMO (45.0kW) - 0.27€/kWh, IEC_62196_T2_COMBO (45.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 Maxima Naujininkai",
        "address": "Dariaus ir Girėno g. 16, Vilnius, Lithuania",
        "city": "Vilnius",
        "lat": 54.661717,
        "lng": 25.272908,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (43.0kW), CHADEMO (45.0kW) - 0.27€/kWh, IEC_62196_T2_COMBO (45.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 Vingio parkas",
        "address": "Birutės g. 20, Vilnius, Lithuania",
        "city": "Vilnius",
        "lat": 54.692032,
        "lng": 25.245954,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (43.0kW), CHADEMO (45.0kW) - 0.27€/kWh, IEC_62196_T2_COMBO (45.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 Vokiečių g. (coming soon)",
        "address": "Vokiečių g. 1, Vilnius, Lithuania",
        "city": "Vilnius",
        "lat": 54.678474,
        "lng": 25.285938,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2_COMBO (320.0kW) - 0.31€/kWh, CHADEMO (50.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 Business Garden Parking | Uždara aikštelė",
        "address": "Laisvės prospektas 10, Vilnius, Lithuania",
        "city": "Vilnius",
        "lat": 54.67393,
        "lng": 25.221262,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.29
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (11.0kW) - 0.29€/kWh, IEC_62196_T2 (22.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 Maxima J.Tiškevičiaus g.",
        "address": "J. Tiškevičiaus g. 22, Vilnius, Lithuania",
        "city": "Vilnius",
        "lat": 54.624096,
        "lng": 25.110764,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (150.0kW) - 0.32€/kWh, CHADEMO (50.0kW) - 0.29€/kWh, IEC_62196_T2 (22.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 PC Žali",
        "address": "Visalaukio g. 1, Vilnius, Lithuania",
        "city": "Vilnius",
        "lat": 54.778715,
        "lng": 25.341387,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (43.0kW), IEC_62196_T2_COMBO (50.0kW) - 0.27€/kWh, CHADEMO (50.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 Didlaukio 51 | Vilniaus apšvietimas | Inbalance grid",
        "address": "Didlaukio 51",
        "city": "Vilnius",
        "lat": 54.731885,
        "lng": 25.263295,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Didlaukio 51 1 | Vilniaus apšvietimas | Inbalance grid",
        "address": "Didlaukio 51",
        "city": "Vilnius",
        "lat": 54.731888,
        "lng": 25.262915,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Mokyklos g. 38A  | Vilniaus apšvietimas | Inbalance grid",
        "address": "Mokyklos g. 38A",
        "city": "Vilnius",
        "lat": 54.74531,
        "lng": 25.270667,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Mokyklos g. 38 | Vilniaus apšvietimas | Inbalance grid",
        "address": "Mokyklos g. 38",
        "city": "Vilnius",
        "lat": 54.745285,
        "lng": 25.271056,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Mokyklos g. 28| Vilniaus apšvietimas | Inbalance grid",
        "address": "Mokyklos g. 28",
        "city": "Vilnius",
        "lat": 54.745239,
        "lng": 25.271423,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Kviečių g. 4 | Vilniaus apšvietimas | Inbalance grid",
        "address": "Kviečių g. 4",
        "city": "Vilnius",
        "lat": 54.74196,
        "lng": 25.270869,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Kviečių g. 4 1 | Vilniaus apšvietimas | Inbalance grid",
        "address": "Kviečių g. 4",
        "city": "Vilnius",
        "lat": 54.741746,
        "lng": 25.270805,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Jeruzalės g. 10 | Vilniaus apšvietimas | Inbalance grid",
        "address": "Jeruzalės g. 10",
        "city": "Vilnius",
        "lat": 54.742584,
        "lng": 25.276757,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Jeruzalės g. 10 1 | Vilniaus apšvietimas | Inbalance grid",
        "address": "Jeruzalės g. 10",
        "city": "Vilnius",
        "lat": 54.742278,
        "lng": 25.276628,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Žaliujų ežerų g. 1 | Vilniaus apšvietimas | Inbalance grid",
        "address": "Žaliujų ežerų g. 1",
        "city": "Vilnius",
        "lat": 54.749285,
        "lng": 25.280273,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Žaliujų ežerų g. 1 1| Vilniaus apšvietimas | Inbalance grid",
        "address": "Žaliujų ežerų g. 1",
        "city": "Vilnius",
        "lat": 54.749462,
        "lng": 25.28078,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Žaliujų ežerų g. 3 | Vilniaus apšvietimas | Inbalance grid",
        "address": "Žaliujų ežerų g. 3",
        "city": "Vilnius",
        "lat": 54.749226,
        "lng": 25.281264,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 žaliųjų ežerų g. 5, | Vilniaus apšvietimas | Inbalance grid",
        "address": "žaliųjų ežerų g. 5,",
        "city": "Vilnius",
        "lat": 54.749751,
        "lng": 25.282179,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Žaliujų ežerų g. 5 1 | Vilniaus apšvietimas | Inbalance grid",
        "address": "Žaliujų ežerų g. 5",
        "city": "Vilnius",
        "lat": 54.749509,
        "lng": 25.282371,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Žaliujų ežerų g. 5 2 | Vilniaus apšvietimas | Inbalance grid",
        "address": "Žaliujų ežerų g. 5",
        "city": "Vilnius",
        "lat": 54.749345,
        "lng": 25.282613,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Fiziku g. 4 | Vilniaus apšvietimas | Inbalance grid",
        "address": "Fiziku g. 4",
        "city": "Vilnius",
        "lat": 54.756623,
        "lng": 25.26629,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Parduotuvė \"Dubingiai\"",
        "address": "Savanorių pr. 366, 49362 Kaunas, Lithuania",
        "city": "Kaunas",
        "lat": 54.925627,
        "lng": 23.966585,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (150.0kW) - 0.31€/kWh, CHADEMO (50.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 Eldrive Lithuania Klaipėdos Holivudas 2",
        "address": "Kretingos gatvė 94",
        "city": "Klaipėda",
        "lat": 55.753567,
        "lng": 21.133379,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.37
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (24.0kW) - 0.37€/kWh"
    },
    {
        "name": "🔌 Šaltkalviu g. 2 (402 atrama) | Vilniaus apšvietimas | Inbalance grid",
        "address": "Šaltkalviu g. 2",
        "city": "Vilnius",
        "lat": 54.661219,
        "lng": 25.272074,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Šaltkalviu g. 2 (403 atrama) | Vilniaus apšvietimas | Inbalance grid",
        "address": "Šaltkalviu g. 2",
        "city": "Vilnius",
        "lat": 54.66095,
        "lng": 25.27208,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Šaltkalviu g. 48  | Vilniaus apšvietimas | Inbalance grid",
        "address": "Šaltkalviu g. 48",
        "city": "Vilnius",
        "lat": 54.661829,
        "lng": 25.270237,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Šaltkalviu g. 72 |  Vilniaus apšvietimas | Inbalance grid",
        "address": "Šaltkalviu g. 72",
        "city": "Vilnius",
        "lat": 54.662592,
        "lng": 25.264763,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Konduktoriu g. 4  | Vilniaus apšvietimas | Inbalance grid",
        "address": "Konduktoriu g. 4",
        "city": "Vilnius",
        "lat": 54.665562,
        "lng": 25.270836,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Paneriu g. 7  | Vilniaus apšvietimas | Inbalance grid",
        "address": "Paneriu g. 7",
        "city": "Vilnius",
        "lat": 54.670213,
        "lng": 25.276401,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Mindaugo g. 27 | Vilniaus apšvietimas | Inbalance grid",
        "address": "Mindaugo g. 27",
        "city": "Vilnius",
        "lat": 54.671099,
        "lng": 25.275885,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Kruopų g. 3 (905 atrama) | Vilniaus apšvietimas | Inbalance grid",
        "address": "Kruopų g. 3",
        "city": "Vilnius",
        "lat": 54.675212,
        "lng": 25.2801,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Kruopų g. 3 (904) | Vilniaus apšvietimas | Inbalance grid",
        "address": "Kruopų g. 3",
        "city": "Vilnius",
        "lat": 54.675373,
        "lng": 25.280352,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 M.K. Čiurlionio g. 21  | Vilniaus Apšvietimas | Inbalance grid",
        "address": "M.K. Čiurlionio g. 21",
        "city": "Vilnius",
        "lat": 54.682347,
        "lng": 25.258467,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 V. Mykolaičio-Putino g. 1  | Vilniaus Apšvietimas | Inbalance grid",
        "address": "V. Mykolaičio-Putino g. 1",
        "city": "Vilnius",
        "lat": 54.682665,
        "lng": 25.267802,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 V. Mykolaičio-Putino g. 8 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "V. Mykolaičio-Putino g. 8",
        "city": "Vilnius",
        "lat": 54.684243,
        "lng": 25.267922,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Kalinausko g. 2A | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Kalinausko g. 2A",
        "city": "Vilnius",
        "lat": 54.682765,
        "lng": 25.276507,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 K. Griniaus g. | Vilniaus Apšvietimas | Inbalance grid",
        "address": "K. Griniaus g.",
        "city": "Vilnius",
        "lat": 54.685977,
        "lng": 25.27567,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Šaltkalviu g. 48 1 | Vilniaus apšvietimas | Inbalance grid",
        "address": "Šaltkalviu g. 48",
        "city": "Vilnius",
        "lat": 54.662159,
        "lng": 25.268288,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Aludarių g. 1 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Aludarių g. 1",
        "city": "Vilnius",
        "lat": 54.687059,
        "lng": 25.265907,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Kražių g. 1 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Kražių g. 1",
        "city": "Vilnius",
        "lat": 54.690047,
        "lng": 25.265835,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Gynėju g. 4 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Gynėju g. 4",
        "city": "Vilnius",
        "lat": 54.690673,
        "lng": 25.264068,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Gynėju g. 6  | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Gynėju g. 6",
        "city": "Vilnius",
        "lat": 54.691284,
        "lng": 25.264365,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Gynėju g. 8 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Gynėju g. 8",
        "city": "Vilnius",
        "lat": 54.69205,
        "lng": 25.264768,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 PLTVILBIT1_EDLT-183",
        "address": "Bitėnų gatvė 1B",
        "city": "Vilnius",
        "lat": 54.702189,
        "lng": 25.176902,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.33
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (100.0kW) - 0.33€/kWh"
    },
    {
        "name": "🔌 Vytenio g. 61A | Vilniaus apšvietimas | Inbalance grid",
        "address": "Vytenio g. 61A",
        "city": "Vilnius",
        "lat": 54.66996,
        "lng": 25.266776,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Smolensko g. 11 | Vilniaus apšvietimas | Inbalance grid",
        "address": "Smolensko g. 11",
        "city": "Vilnius",
        "lat": 54.671214,
        "lng": 25.260001,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Smolensko g. 11 1 | Vilniaus apšvietimas | Inbalance grid",
        "address": "Smolensko g. 11",
        "city": "Vilnius",
        "lat": 54.671496,
        "lng": 25.259906,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Smolensko g. 15b  | Vilniaus apšvietimas | Inbalance grid",
        "address": "Smolensko g. 15b",
        "city": "Vilnius",
        "lat": 54.672847,
        "lng": 25.259426,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Z.Sierakausko g. 34 | Vilniaus apšvietimas | Inbalance grid",
        "address": "Z.Sierakausko g. 34",
        "city": "Vilnius",
        "lat": 54.682932,
        "lng": 25.261641,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 M. Valančiaus g. 4 | Vilniaus apšvietimas | Inbalance grid",
        "address": "M. Valančiaus g. 4",
        "city": "Vilnius",
        "lat": 54.684211,
        "lng": 25.265432,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 M. Valančiaus g. 4 1 | Vilniaus apšvietimas | Inbalance grid",
        "address": "M. Valančiaus g. 4",
        "city": "Vilnius",
        "lat": 54.684259,
        "lng": 25.266594,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Mečetės g. 4 | Vilniaus apšvietimas | Inbalance grid",
        "address": "Mečetės g. 4",
        "city": "Vilnius",
        "lat": 54.693333,
        "lng": 25.267589,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Mečetės g. 4 1 | Vilniaus apšvietimas | Inbalance grid",
        "address": "Mečetės g. 4",
        "city": "Vilnius",
        "lat": 54.693478,
        "lng": 25.267856,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 A. Vienuolio g. 12 | Vilniaus apšvietimas | Inbalance grid",
        "address": "A. Vienuolio g. 12",
        "city": "Vilnius",
        "lat": 54.689648,
        "lng": 25.277418,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 A. Vienuolio g. 6 | Vilniaus apšvietimas | Inbalance grid",
        "address": "A. Vienuolio g. 6",
        "city": "Vilnius",
        "lat": 54.688848,
        "lng": 25.277062,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Sluškų g. 3 | Vilniaus apšvietimas | Inbalance grid",
        "address": "Sluškų g. 3",
        "city": "Vilnius",
        "lat": 54.692031,
        "lng": 25.29893,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Sluškų g. 7 | Vilniaus apšvietimas | Inbalance grid",
        "address": "Sluškų g. 7",
        "city": "Vilnius",
        "lat": 54.692151,
        "lng": 25.299207,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Užupio g. 27 | Vilniaus apšvietimas | Inbalance grid",
        "address": "Užupio g. 27",
        "city": "Vilnius",
        "lat": 54.68117,
        "lng": 25.299554,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Rūdninkų g. 12 | Vilniaus apšvietimas | Inbalance grid",
        "address": "Rūdninkų g. 12",
        "city": "Vilnius",
        "lat": 54.676846,
        "lng": 25.284612,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Rūdninkų g. 16 | Vilniaus apšvietimas | Inbalance grid",
        "address": "Rūdninkų g. 16",
        "city": "Vilnius",
        "lat": 54.676558,
        "lng": 25.284423,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 VDU - Botanikos Sodas | Inbalance grid",
        "address": "Vilties g. 6",
        "city": "Kaunas",
        "lat": 54.87099,
        "lng": 23.912813,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.23
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.23€/kWh"
    },
    {
        "name": "🔌 Aguonų g. 14 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Aguonų g. 14",
        "city": "Vilnius",
        "lat": 54.675793,
        "lng": 25.277287,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Viršuliškių g. 85 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Viršuliškių g. 85",
        "city": "Vilnius",
        "lat": 54.706082,
        "lng": 25.229415,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Viršuliškių g. 83 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Viršuliškių g. 83",
        "city": "Vilnius",
        "lat": 54.706474,
        "lng": 25.228665,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Viršuliškių g. 87 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Viršuliškių g. 87",
        "city": "Vilnius",
        "lat": 54.704927,
        "lng": 25.229038,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 V. Žalakevičiaus g. 18  | Vilniaus apšvietimas | Inbalance grid",
        "address": "V. Žalakevičiaus g. 18",
        "city": "Vilnius",
        "lat": 54.726403,
        "lng": 25.32246,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Viršuliškių g. 53D | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Viršuliškių g. 53D",
        "city": "Vilnius",
        "lat": 54.705596,
        "lng": 25.22243,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Viršuliškiu g. 36 | Vilniaus apšvietimas | Inbalance grid",
        "address": "Viršuliškiu g. 36",
        "city": "Vilnius",
        "lat": 54.706061,
        "lng": 25.222484,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 V. Žalakevičiaus g. 4C | Vilniaus apšvietimas | Inbalance grid",
        "address": "V. Žalakevičiaus g. 4C",
        "city": "Vilnius",
        "lat": 54.726965,
        "lng": 25.321322,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Viršuliškių 53B  | Vilniaus apšvietimas | Inbalance grid",
        "address": "Viršuliškių 53B",
        "city": "Vilnius",
        "lat": 54.707005,
        "lng": 25.221117,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Švyturio g. 25  | Vilniaus apšvietimas | Inbalance grid",
        "address": "Švyturio g. 25",
        "city": "Vilnius",
        "lat": 54.712954,
        "lng": 25.321654,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Šešuolių g. 9A | Vilniaus apšvietimas | Inbalance grid",
        "address": "Šešuolių g. 9A",
        "city": "Vilnius",
        "lat": 54.707431,
        "lng": 25.219809,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Šešuoliu g. 3 | Vilniaus apšvietimas | Inbalance grid",
        "address": "Šešuoliu g. 3",
        "city": "Vilnius",
        "lat": 54.706398,
        "lng": 25.217553,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Klinikų g. 11 | Vilniaus apšvietimas | Inbalance grid",
        "address": "Klinikų g. 11",
        "city": "Vilnius",
        "lat": 54.708009,
        "lng": 25.316378,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Šešuoliu g. | Vilniaus apšvietimas | Inbalance grid",
        "address": "Šešuoliu g.",
        "city": "Vilnius",
        "lat": 54.708,
        "lng": 25.22089,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Viršuliškiu g. 73  | Vilniaus apšvietimas | Inbalance grid",
        "address": "Viršuliškiu g. 73",
        "city": "Vilnius",
        "lat": 54.707097,
        "lng": 25.225277,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Rygos g. 28 | Vilniaus apšvietimas | Inbalance grid",
        "address": "Rygos g. 28",
        "city": "Vilnius",
        "lat": 54.718536,
        "lng": 25.215593,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Šilo g. 4  | Vilniaus apšvietimas | Inbalance grid",
        "address": "Šilo g. 4",
        "city": "Vilnius",
        "lat": 54.705205,
        "lng": 25.312014,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Rygos g. 17 | Vilniaus apšvietimas | Inbalance grid",
        "address": "Rygos g. 17",
        "city": "Vilnius",
        "lat": 54.717968,
        "lng": 25.218358,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Švyturio g. 25 1  | Vilniaus apšvietimas | Inbalance grid",
        "address": "Švyturio g. 25",
        "city": "Vilnius",
        "lat": 54.713019,
        "lng": 25.321062,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Švyturio g. 21  | Vilniaus apšvietimas | Inbalance grid",
        "address": "Švyturio g. 21",
        "city": "Vilnius",
        "lat": 54.712596,
        "lng": 25.319019,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Antakalnio g. 74 | Vilniaus apšvietimas | Inbalance grid",
        "address": "Antakalnio g. 74",
        "city": "Vilnius",
        "lat": 54.71036,
        "lng": 25.312832,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Antakalnio g. 72 | Vilniaus apšvietimas | Inbalance grid",
        "address": "Antakalnio g. 72",
        "city": "Vilnius",
        "lat": 54.709876,
        "lng": 25.313326,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Laisvės pr. 76 | Vilniaus apšvietimas | Inbalance grid",
        "address": "Laisvės pr. 76",
        "city": "Vilnius",
        "lat": 54.719187,
        "lng": 25.231682,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Smėlio g. 23 2 | Vilniaus apšvietimas | Inbalance grid",
        "address": "Smėlio g. 23",
        "city": "Vilnius",
        "lat": 54.703828,
        "lng": 25.312206,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Virbeliškių g. 3  | Vilniaus apšvietimas | Inbalance grid",
        "address": "Virbeliškių g. 3",
        "city": "Vilnius",
        "lat": 54.729413,
        "lng": 25.217504,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Virbeliškių g. 5 | Vilniaus apšvietimas | Inbalance grid",
        "address": "Virbeliškių g. 5",
        "city": "Vilnius",
        "lat": 54.729427,
        "lng": 25.215564,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Virbeliškių g. 7 | Vilniaus apšvietimas | Inbalance grid",
        "address": "Virbeliškių g. 7",
        "city": "Vilnius",
        "lat": 54.729435,
        "lng": 25.214796,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Girgalaukio g. 34 | Vilniaus apšvietimas | Inbalance grid",
        "address": "Girgalaukio g. 34",
        "city": "Vilnius",
        "lat": 54.73033,
        "lng": 25.214123,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Budiniškių g. 3 | Vilniaus apšvietimas | Inbalance grid",
        "address": "Budiniškių g. 3",
        "city": "Vilnius",
        "lat": 54.730903,
        "lng": 25.21344,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Budiniškių g. 5 1 | Vilniaus apšvietimas | Inbalance grid",
        "address": "Budiniškių g. 5",
        "city": "Vilnius",
        "lat": 54.730944,
        "lng": 25.212459,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 G. Seserų g | Vilniaus apšvietimas | Inbalance grid",
        "address": "G. Seserų g",
        "city": "Vilnius",
        "lat": 54.698363,
        "lng": 25.317666,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Grigalaukio g. 22 | Vilniaus apšvietimas | Inbalance grid",
        "address": "Grigalaukio g. 22",
        "city": "Vilnius",
        "lat": 54.731656,
        "lng": 25.214602,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Grigalaukio g. | Vilniaus apšvietimas | Inbalance grid",
        "address": "Grigalaukio g.",
        "city": "Vilnius",
        "lat": 54.732123,
        "lng": 25.214997,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Grigalaukio g. 1 | Vilniaus apšvietimas | Inbalance grid",
        "address": "Grigalaukio g.",
        "city": "Vilnius",
        "lat": 54.732302,
        "lng": 25.21512,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Dociškių g. 15 | Vilniaus apšvietimas | Inbalance grid",
        "address": "Dociškių g. 15",
        "city": "Vilnius",
        "lat": 54.730569,
        "lng": 25.216202,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Žemynos g. 2  | Vilniaus apšvietimas | Inbalance grid",
        "address": "Žemynos g. 2",
        "city": "Vilnius",
        "lat": 54.725299,
        "lng": 25.226132,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Žemynos g. 37 | Vilniaus apšvietimas | Inbalance grid",
        "address": "Žemynos g. 37",
        "city": "Vilnius",
        "lat": 54.727348,
        "lng": 25.226927,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Žemynos g. 6  | Vilniaus apšvietimas | Inbalance grid",
        "address": "Žemynos g. 6",
        "city": "Vilnius",
        "lat": 54.728633,
        "lng": 25.228386,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Žemynos g. 6 1  | Vilniaus apšvietimas | Inbalance grid",
        "address": "Žemynos g. 6",
        "city": "Vilnius",
        "lat": 54.728826,
        "lng": 25.228315,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Žemynos g. 6 2  | Vilniaus apšvietimas | Inbalance grid",
        "address": "Žemynos g. 6",
        "city": "Vilnius",
        "lat": 54.72845,
        "lng": 25.228447,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Olandu g | Vilniaus apšvietimas | Inbalance grid",
        "address": "Olandu g",
        "city": "Vilnius",
        "lat": 54.687965,
        "lng": 25.306486,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Žemynos g. 6 3 | Vilniaus apšvietimas | Inbalance grid",
        "address": "Žemynos g. 6",
        "city": "Vilnius",
        "lat": 54.728315,
        "lng": 25.229074,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Žemynos g. 10 | Vilniaus apšvietimas | Inbalance grid",
        "address": "Žemynos g. 10",
        "city": "Vilnius",
        "lat": 54.728285,
        "lng": 25.230176,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Baltrušaičio g. | Vilniaus apšvietimas | Inbalance grid",
        "address": "Baltrušaičio g.",
        "city": "Vilnius",
        "lat": 54.726609,
        "lng": 25.239174,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Baltrušaičio g. 1 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Baltrušaičio g.",
        "city": "Vilnius",
        "lat": 54.727842,
        "lng": 25.237905,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 M.Mironaitės g. 22 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "M.Mironaitės g. 22",
        "city": "Vilnius",
        "lat": 54.680146,
        "lng": 25.189075,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 M.Mironaitės g. 20 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "M.Mironaitės g. 20",
        "city": "Vilnius",
        "lat": 54.679824,
        "lng": 25.188949,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Girulių g. 5 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Girulių g. 5",
        "city": "Vilnius",
        "lat": 54.738779,
        "lng": 25.215999,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Gabijos 1  | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Gabijos 1",
        "city": "Vilnius",
        "lat": 54.73183,
        "lng": 25.227416,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 M.Mironaitės g. 20 1 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "M.Mironaitės g. 20",
        "city": "Vilnius",
        "lat": 54.680003,
        "lng": 25.188741,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 M.Mironaitės g. 12 1 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "M.Mironaitės g. 12",
        "city": "Vilnius",
        "lat": 54.680678,
        "lng": 25.19051,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Pašilaičių g. 6A | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Pašilaičių g. 6A",
        "city": "Vilnius",
        "lat": 54.73115,
        "lng": 25.232584,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Pašilaičių g. 3 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Pašilaičių g. 3",
        "city": "Vilnius",
        "lat": 54.731413,
        "lng": 25.232168,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 M.Mironaitės g. 12 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "M.Mironaitės g. 12",
        "city": "Vilnius",
        "lat": 54.680522,
        "lng": 25.190844,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 L.B.Dzūko g. 106 (72 atrama) | Vilniaus Apšvietimas | Inbalance grid",
        "address": "L.B.Dzūko g. 106",
        "city": "Vilnius",
        "lat": 54.741257,
        "lng": 25.239106,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 L.B.Dzūko g. 94 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "L.B.Dzūko g. 94",
        "city": "Vilnius",
        "lat": 54.739982,
        "lng": 25.240519,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 P. Žadeikos g. 9 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "P. Žadeikos g. 9",
        "city": "Vilnius",
        "lat": 54.7343,
        "lng": 25.246343,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 M.Mironaitės g. 14 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "M.Mironaitės g. 14",
        "city": "Vilnius",
        "lat": 54.679805,
        "lng": 25.191283,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 L.Baliukeviciaus-Dzūko g. (15 atrama) | Inbalance grid",
        "address": "L.Baliukeviciaus-Dzūko g.",
        "city": "Vilnius",
        "lat": 54.734968,
        "lng": 25.25037,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Šeškinės g. 31 (atrama 25) | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Šeškinės g. 31",
        "city": "Vilnius",
        "lat": 54.717653,
        "lng": 25.250743,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Jonažolių g. 23 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Jonažolių g. 23",
        "city": "Vilnius",
        "lat": 54.668361,
        "lng": 25.214036,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Jonažolių g. 23 1 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Jonažolių g. 23",
        "city": "Vilnius",
        "lat": 54.668238,
        "lng": 25.214342,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Manufaktūrų g. 3 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Manufaktūrų g. 3",
        "city": "Vilnius",
        "lat": 54.678054,
        "lng": 25.314175,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Peteliškių g. 40 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Peteliškių g. 40",
        "city": "Vilnius",
        "lat": 54.685493,
        "lng": 25.315371,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Manufaktūrų g. 16 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Manufaktūrų g. 16",
        "city": "Vilnius",
        "lat": 54.677664,
        "lng": 25.316353,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Manufaktūrų g. 20 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Manufaktūrų g. 20",
        "city": "Vilnius",
        "lat": 54.677436,
        "lng": 25.317743,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Alauša / Kirtimu g. 23 | Inbalance grid",
        "address": "Kirtimu g. 23",
        "city": "Vilnius",
        "lat": 54.651044,
        "lng": 25.150121,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.21
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (79.0kW) - 0.21€/kWh"
    },
    {
        "name": "🔌 Smėlio g. 23 | Vilniaus apšvietimas | Inbalance grid",
        "address": "Smėlio g. 23",
        "city": "Vilnius",
        "lat": 54.704315,
        "lng": 25.312469,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Elnių g. 20 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Elnių g. 20",
        "city": "Vilnius",
        "lat": 54.700091,
        "lng": 25.250036,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Lokių g. 3 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Lokių g. 3",
        "city": "Vilnius",
        "lat": 54.698462,
        "lng": 25.2497,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Linksmoji g. 139 1 | Vilniaus apšvietimas | Inbalance grid",
        "address": "Linksmoji g. 139",
        "city": "Vilnius",
        "lat": 54.680013,
        "lng": 25.41974,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Linksmoji g. 139 2 | Vilniaus apšvietimas | Inbalance grid",
        "address": "Linksmoji g. 139",
        "city": "Vilnius",
        "lat": 54.680021,
        "lng": 25.420206,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Linksmoji g. | Vilniaus apšvietimas | Inbalance grid",
        "address": "Linksmoji g.",
        "city": "Vilnius",
        "lat": 54.686545,
        "lng": 25.430025,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Linksmoji g.  1 | Vilniaus apšvietimas | Inbalance grid",
        "address": "Linksmoji g.",
        "city": "Vilnius",
        "lat": 54.686296,
        "lng": 25.429843,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Hesburger Vasario",
        "address": "Vasario 16-osios g. 11, 55170 Jonava, Lithuan",
        "city": "Jonava",
        "lat": 55.072149,
        "lng": 24.273108,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.21
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (150.0kW) - 0.21€/kWh"
    },
    {
        "name": "🔌 IKI, Jeruzalė | Inbalance grid",
        "address": "Jeruzalės str. 17",
        "city": "Vilnius",
        "lat": 54.74349,
        "lng": 25.278731,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.23
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.23€/kWh"
    },
    {
        "name": "🔌 Norfa XL, Taikos g. 20, Ignalina",
        "address": "Taikos g. 20",
        "city": "Ignalina",
        "lat": 55.3428352,
        "lng": 26.1704225,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2893
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (47.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 Norfa XL B.Sruogos g. 25, Birštonas",
        "address": "B.Sruogos g. 25, Birštonas",
        "city": "Birštonas",
        "lat": 54.6048681,
        "lng": 24.0190475,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.405
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (240.0kW) - 0.41€/kWh"
    },
    {
        "name": "🔌 Restoranas - Šašlykinė",
        "address": "Ulonų 67",
        "city": "Alytus",
        "lat": 54.3803791,
        "lng": 24.0615669,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.405
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (240.0kW) - 0.41€/kWh"
    },
    {
        "name": "🔌 Linksmoji g.  2 | Vilniaus apšvietimas | Inbalance grid",
        "address": "Linksmoji g.",
        "city": "Vilnius",
        "lat": 54.686011,
        "lng": 25.429701,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Studentų g. 43 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Studentų g. 43",
        "city": "Vilnius",
        "lat": 54.69597,
        "lng": 25.259826,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Studentų g. 41 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Studentų g. 41",
        "city": "Vilnius",
        "lat": 54.696031,
        "lng": 25.260257,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Žvejų g. 14 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Žvejų g. 14",
        "city": "Vilnius",
        "lat": 54.691149,
        "lng": 25.285051,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Žvejų g. 14A | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Žvejų g. 14A",
        "city": "Vilnius",
        "lat": 54.690205,
        "lng": 25.286908,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Eldrive Lithuania Mažeikių seniunija",
        "address": "Laisvės gatvė 39",
        "city": "Mažeikiai",
        "lat": 56.314982,
        "lng": 22.3406,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.37
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (50.0kW) - 0.37€/kWh"
    },
    {
        "name": "🔌 PC Liepų | Inbalance grid",
        "address": "Liepų str. 81",
        "city": "Klaipėda",
        "lat": 55.722692,
        "lng": 21.154743,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.25
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 Kelyje žuvusiems atminti A1, 34km | Via Lietuva | Inbalance grid",
        "address": "A1",
        "city": "Elektrėnų r.",
        "lat": 54.757159,
        "lng": 24.871645,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.38
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (43.0kW) - 0.38€/kWh, IEC_62196_T2_COMBO (50.0kW) - 0.38€/kWh, CHADEMO (50.0kW) - 0.38€/kWh"
    },
    {
        "name": "🔌 IKI, Vaišvydava | Inbalance grid",
        "address": "Didžioji str. 98",
        "city": "Kaunas",
        "lat": 54.854382,
        "lng": 24.013755,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.23
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.23€/kWh"
    },
    {
        "name": "🔌 Liemonta - Titnago g. 12",
        "address": "Titnago gatvė 12",
        "city": "Vilnius",
        "lat": 54.648322,
        "lng": 25.187839,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2479
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 Mažvydo g. 28 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Mažvydo g. 28",
        "city": "Vilnius",
        "lat": 54.711599,
        "lng": 25.176444,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Šilo g. 3 | Vilniaus apšvietimas | Inbalance grid",
        "address": "Šilo g. 3",
        "city": "Vilnius",
        "lat": 54.704581,
        "lng": 25.312392,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Mildos g. 8 | Vilniaus apšvietimas | Inbalance grid",
        "address": "Mildos g. 8",
        "city": "Vilnius",
        "lat": 54.695961,
        "lng": 25.312266,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 P. Vileišio g. 6C | Vilniaus apšvietimas | Inbalance grid",
        "address": "P. Vileišio g. 6C",
        "city": "Vilnius",
        "lat": 54.696248,
        "lng": 25.304745,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Linksmoji g. 139 | Vilniaus apšvietimas | Inbalance grid",
        "address": "Linksmoji g. 139",
        "city": "Vilnius",
        "lat": 54.679995,
        "lng": 25.4188,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Linksmoji g. 73 | Vilniaus apšvietimas | Inbalance grid",
        "address": "Linksmoji g. 73",
        "city": "Vilnius",
        "lat": 54.682369,
        "lng": 25.427621,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Linksmoji g.  3 | Vilniaus apšvietimas | Inbalance grid",
        "address": "Linksmoji g.",
        "city": "Vilnius",
        "lat": 54.684902,
        "lng": 25.429547,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Linksmoji g.  4 | Vilniaus apšvietimas | Inbalance grid",
        "address": "Linksmoji g.",
        "city": "Vilnius",
        "lat": 54.684079,
        "lng": 25.429288,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Parko g. 63 1  | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Parko g. 63",
        "city": "Vilnius",
        "lat": 54.685421,
        "lng": 25.427501,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Parko g. 32 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Parko g. 32",
        "city": "Vilnius",
        "lat": 54.686935,
        "lng": 25.425291,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Parko g. 32 1  | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Parko g. 32",
        "city": "Vilnius",
        "lat": 54.686266,
        "lng": 25.425419,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Parko g. 38  | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Parko g. 38",
        "city": "Vilnius",
        "lat": 54.686513,
        "lng": 25.425429,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Parko g. 23C  | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Parko g. 23C",
        "city": "Vilnius",
        "lat": 54.685576,
        "lng": 25.421203,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Jonažolių g. 11 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Jonažolių g. 11",
        "city": "Vilnius",
        "lat": 54.666593,
        "lng": 25.209843,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Ateities g. 83 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Ateities g. 83",
        "city": "Vilnius",
        "lat": 54.732181,
        "lng": 25.247986,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Šeškinės g. 31 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Šeškinės g. 31",
        "city": "Vilnius",
        "lat": 54.717844,
        "lng": 25.250609,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Ozo g. 20  | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Ozo g. 20",
        "city": "Vilnius",
        "lat": 54.711201,
        "lng": 25.254735,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Jonažolių g. 23 2 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Jonažolių g. 23",
        "city": "Vilnius",
        "lat": 54.668117,
        "lng": 25.214644,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Liepkalnio 39 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Liepkalnio 39",
        "city": "Vilnius",
        "lat": 54.660841,
        "lng": 25.302957,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Liepkalnio 37 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Liepkalnio 37",
        "city": "Vilnius",
        "lat": 54.661175,
        "lng": 25.302577,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Lvivo g. 38A (atrama 33) | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Lvivo 38A g.",
        "city": "Vilnius",
        "lat": 54.69772,
        "lng": 25.275119,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Lvivo g. 38A | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Lvivo g. 38A",
        "city": "Vilnius",
        "lat": 54.697988,
        "lng": 25.274331,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Kalvarijų g. 174 (51 atrama) | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Kalvarijų g. 174",
        "city": "Vilnius",
        "lat": 54.711806,
        "lng": 25.284789,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Kalvarijų g. 174 (52 atrama) | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Kalvarijų g. 174",
        "city": "Vilnius",
        "lat": 54.712125,
        "lng": 25.284811,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Giedraičių g. 59  | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Giedraičių g. 59",
        "city": "Vilnius",
        "lat": 54.705634,
        "lng": 25.280416,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Utenos g. 17  | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Utenos g. 17",
        "city": "Vilnius",
        "lat": 54.706385,
        "lng": 25.279907,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Videniškių g. (505 atrama) | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Videniškių g.",
        "city": "Vilnius",
        "lat": 54.703843,
        "lng": 25.271808,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Videniškių g. (506 atrama) | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Videniškių g.",
        "city": "Vilnius",
        "lat": 54.703843,
        "lng": 25.271808,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Videniškių g. (507 atrama) | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Videniškių g.",
        "city": "Vilnius",
        "lat": 54.703848,
        "lng": 25.272478,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Daugėliškio 57 (1 atrama)  | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Daugėliškio 57",
        "city": "Vilnius",
        "lat": 54.700582,
        "lng": 25.271285,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Daugėliškio 57 (2 atrama)  | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Daugėliškio 57",
        "city": "Vilnius",
        "lat": 54.701064,
        "lng": 25.271115,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Daugėliškio 57 (4 atrama)  | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Daugėliškio g.57",
        "city": "Vilnius",
        "lat": 54.701428,
        "lng": 25.270523,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Oršos g. 6 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Oršos g. 6",
        "city": "Vilnius",
        "lat": 54.703144,
        "lng": 25.274472,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Laumėnų g.  (atrama 200) | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Laumėnų g.",
        "city": "Vilnius",
        "lat": 54.701735,
        "lng": 25.27451,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Žalgirio g. 90 (atrama 5) | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Žalgirio g. 90",
        "city": "Vilnius",
        "lat": 54.702993,
        "lng": 25.278493,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Piromonto g. 37 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Piromonto g. 37",
        "city": "Vilnius",
        "lat": 54.702395,
        "lng": 25.290647,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Erfurto 15 (atrama 27) | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Erfurto 15",
        "city": "Vilnius",
        "lat": 54.677535,
        "lng": 25.211315,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (7.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Erfurto 15 (atrama 29) | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Erfurto 15",
        "city": "Vilnius",
        "lat": 54.677469,
        "lng": 25.211042,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (7.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Erfurto 15 (atrama 39) | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Erfurto 15",
        "city": "Vilnius",
        "lat": 54.676914,
        "lng": 25.208853,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (7.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Erfurto 15 (atrama 391) | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Erfurto 15",
        "city": "Vilnius",
        "lat": 54.67702,
        "lng": 25.209211,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (7.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 L. Asanaviciutes g. 3 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "L. Asanaviciutes g. 3",
        "city": "Vilnius",
        "lat": 54.683198,
        "lng": 25.198493,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 L. Asanaviciutes g. 8 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "L. Asanaviciutes g. 8",
        "city": "Vilnius",
        "lat": 54.683201,
        "lng": 25.200891,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Gerosios Vilties g. 1 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Gerosios Vilties g. 1",
        "city": "Vilnius",
        "lat": 54.672381,
        "lng": 25.241488,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Gelezinio vilko 17 (302)| Vilniaus Apšvietimas | Inbalance grid",
        "address": "Gelezinio vilko 17",
        "city": "Vilnius",
        "lat": 54.673999,
        "lng": 25.242864,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Gelezinio vilko 17 (303) | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Gelezinio vilko 17",
        "city": "Vilnius",
        "lat": 54.674104,
        "lng": 25.24308,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Konarskio g. 28 A | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Konarskio g. 28 A",
        "city": "Vilnius",
        "lat": 54.675063,
        "lng": 25.247127,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Savanorių pr. 42 | Vilniaus apšvietimas | Inbalance grid",
        "address": "Savanorių pr. 42",
        "city": "Vilnius",
        "lat": 54.673844,
        "lng": 25.249529,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Žemaites g. 7 (atrama 111) | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Žemaites g. 7",
        "city": "Vilnius",
        "lat": 54.67365,
        "lng": 25.253242,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Skroblų g. 8 (atrama 2) | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Skroblų g. 8",
        "city": "Vilnius",
        "lat": 54.670554,
        "lng": 25.255657,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Skroblų g. 8 (atrama 3) | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Skroblų g. 8",
        "city": "Vilnius",
        "lat": 54.670488,
        "lng": 25.256043,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Skroblų g. 8 (atrama 4) | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Skroblų g. 8",
        "city": "Vilnius",
        "lat": 54.670386,
        "lng": 25.256423,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Gerosios Vilties g. (atrama 5) | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Gerosios Vilties g.",
        "city": "Vilnius",
        "lat": 54.667057,
        "lng": 25.251466,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Gerosios Vilties g. 29 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Gerosios Vilties g. 29",
        "city": "Vilnius",
        "lat": 54.66735,
        "lng": 25.251044,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Gerosios Vilties g. 44 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Gerosios Vilties g. 44",
        "city": "Vilnius",
        "lat": 54.667628,
        "lng": 25.250647,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Gerosios Vilties g. 40 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Gerosios Vilties g. 40",
        "city": "Vilnius",
        "lat": 54.668487,
        "lng": 25.249425,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Vilkpedės g. 3A | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Vilkpedės g. 3A",
        "city": "Vilnius",
        "lat": 54.664455,
        "lng": 25.241669,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Birželio 23-osios g. 12 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Birželio 23-osios g. 12",
        "city": "Vilnius",
        "lat": 54.675885,
        "lng": 25.261464,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Kapsų g. 22 (atrama 7) | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Kapsų g. 22",
        "city": "Vilnius",
        "lat": 54.661055,
        "lng": 25.277193,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Vaivorykštės g. 18 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Vaivorykštės g. 18",
        "city": "Vilnius",
        "lat": 54.66167,
        "lng": 25.283496,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 L. Asanaviciutes g. 14 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "L. Asanaviciutes g. 14",
        "city": "Vilnius",
        "lat": 54.683337,
        "lng": 25.203864,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Mėnulio g. | Vilniaus apšvietimas | Inbalance grid",
        "address": "Mėnulio g.",
        "city": "Vilnius",
        "lat": 54.699053,
        "lng": 25.218557,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Mėnulio g. 3 | Vilniaus apšvietimas | Inbalance grid",
        "address": "Mėnulio g. 3",
        "city": "Vilnius",
        "lat": 54.698663,
        "lng": 25.217278,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Mėnulio g. 7 | Vilniaus apšvietimas | Inbalance grid",
        "address": "Mėnulio g. 7",
        "city": "Vilnius",
        "lat": 54.698682,
        "lng": 25.216409,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Karaliaučiaus g. 2 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Karaliaučiaus g. 2",
        "city": "Vilnius",
        "lat": 54.704383,
        "lng": 25.174653,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Priegliaus g. (J. Bretkuno) | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Priegliaus g. (J. Bretkuno)",
        "city": "Vilnius",
        "lat": 54.714309,
        "lng": 25.187297,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Punsko g. 42 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Punsko g. 42",
        "city": "Vilnius",
        "lat": 54.671039,
        "lng": 25.276481,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Salininkų g. 131B | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Salininkų g. 131B",
        "city": "Vilnius",
        "lat": 54.60526,
        "lng": 25.260083,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Pavilnionių g. 35 | Vilniaus apšvietimas | Inbalance grid",
        "address": "Pavilnionių g. 35",
        "city": "Vilnius",
        "lat": 54.736012,
        "lng": 25.221139,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.25
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 Gabijos g. 25 | Vilniaus apšvietimas | Inbalance grid",
        "address": "Gabijos g. 25",
        "city": "Vilnius",
        "lat": 54.732648,
        "lng": 25.220926,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.25
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 Fabijoniškių g. 2 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Fabijoniškių g. 2",
        "city": "Vilnius",
        "lat": 54.72212,
        "lng": 25.245342,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.25
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 Viršuliškių g. 41 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Viršuliškių g. 41",
        "city": "Vilnius",
        "lat": 54.709925,
        "lng": 25.221395,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.25
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 Taikos g. 193 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Taikos g. 193",
        "city": "Vilnius",
        "lat": 54.71308,
        "lng": 25.214826,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.25
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 Taikos g. 176 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Taikos g. 176",
        "city": "Vilnius",
        "lat": 54.710171,
        "lng": 25.213827,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.25
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 M. Mažvydo g. 10 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "M. Mažvydo g. 10",
        "city": "Vilnius",
        "lat": 54.711596,
        "lng": 25.188095,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.25
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 Įsruties g. 25 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Įsruties g. 25",
        "city": "Vilnius",
        "lat": 54.713125,
        "lng": 25.18199,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.25
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 Čiobiškio g. 10  | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Čiobiškio g. 10",
        "city": "Vilnius",
        "lat": 54.718392,
        "lng": 25.237286,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.25
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 Ateities g. 9A | Vilniaus apšvietimas | Inbalance grid",
        "address": "Ateities g. 9A",
        "city": "Vilnius",
        "lat": 54.737624,
        "lng": 25.267722,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.25
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 Žalgirio g. 90 (atrama 7) | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Žalgirio g. 90",
        "city": "Vilnius",
        "lat": 54.703429,
        "lng": 25.278634,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Saulėtekio al. 5 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Saulėtekio al. 5",
        "city": "Vilnius",
        "lat": 54.725783,
        "lng": 25.328019,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.25
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (100.0kW) - 0.25€/kWh, IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 Molėtų pl. 8 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Molėtų pl. 8",
        "city": "Vilnius",
        "lat": 54.75562,
        "lng": 25.272223,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.25
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (100.0kW) - 0.25€/kWh, IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 Liepkalnio g. 116 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Liepkalnio g. 116",
        "city": "Vilnius",
        "lat": 54.652601,
        "lng": 25.303975,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.25
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (100.0kW) - 0.25€/kWh, IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 Gariūnų g. 70 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Gariūnų g. 70",
        "city": "Vilnius",
        "lat": 54.658531,
        "lng": 25.156136,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.25
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (100.0kW) - 0.25€/kWh, IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 Pilaitės g. 31 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Pilaitės g. 31",
        "city": "Vilnius",
        "lat": 54.709519,
        "lng": 25.189337,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.25
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (100.0kW) - 0.25€/kWh, IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 Žirmūnų g. 102 | Vilniaus apšvietimas | Inbalance grid",
        "address": "Žirmūnų g. 102",
        "city": "Vilnius",
        "lat": 54.72643,
        "lng": 25.298948,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.25
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 Trinapolio g. 9A | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Trinapolio g. 9A",
        "city": "Vilnius",
        "lat": 54.724113,
        "lng": 25.287686,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.25
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 Klaipėdos Akropolis 3 | Inbalance grid",
        "address": "Taikos av. 61",
        "city": "Klaipėda",
        "lat": 55.692983,
        "lng": 21.153567,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.23
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.23€/kWh"
    },
    {
        "name": "🔌 Žygio g. 93 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Žygio g. 93",
        "city": "Vilnius",
        "lat": 54.709067,
        "lng": 25.293924,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.25
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 Šaltiniu g. 17 | Vilniaus apšvietimas | Inbalance grid",
        "address": "Šaltiniu g. 17",
        "city": "Vilnius",
        "lat": 54.675399,
        "lng": 25.27919,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.25
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 Liepyno g. 17 | Vilniaus apšvietimas | Inbalance grid",
        "address": "Liepyno g. 17",
        "city": "Vilnius",
        "lat": 54.698762,
        "lng": 25.252977,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.25
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 Architektų g. 23 | Vilniaus apšvietimas | Inbalance grid",
        "address": "Architektų g. 23",
        "city": "Vilnius",
        "lat": 54.673043,
        "lng": 25.212582,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.25
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 PLTKAUTV33_EDLT-69",
        "address": "Tvirtovės alėja 33A",
        "city": "Kaunas",
        "lat": 54.913257,
        "lng": 23.926404,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.51
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (150.0kW) - 0.51€/kWh"
    },
    {
        "name": "🔌 Č. Sugiharos 9 | Vilniaus apšvietimas | Inbalance grid",
        "address": "Č. Sugiharos 9",
        "city": "Vilnius",
        "lat": 54.702881,
        "lng": 25.231612,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.25
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 Musninkų g. 7  | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Musninkų g. 7",
        "city": "Vilnius",
        "lat": 54.717265,
        "lng": 25.238047,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.25
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 Neste-charge Šilagalio žiedo EV",
        "address": "Panevėžio aplinkl. 22",
        "city": "Šilagalio",
        "lat": 55.6731985,
        "lng": 24.3353305,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.0
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (240.0kW)"
    },
    {
        "name": "🔌 Neste-charge Vilnius Justiniškių",
        "address": "Rygos g. 2",
        "city": "Vilnius",
        "lat": 54.7156405,
        "lng": 25.2288885,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.0
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (400.0kW)"
    },
    {
        "name": "🔌 Neste-charge Pasvalio r. EV ",
        "address": "Ąžuolpamūšio g. 1A, Raubonių k.",
        "city": "Saločių sen. , Pasvalio r.",
        "lat": 56.115542,
        "lng": 24.4701795,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.0
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (300.0kW)"
    },
    {
        "name": "🔌 Linkmenų 27 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Linkmenų 27",
        "city": "Vilnius",
        "lat": 54.708092,
        "lng": 25.271771,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Žemaites g. 7 (atrama 110) | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Žemaites g. 7",
        "city": "Vilnius",
        "lat": 54.673821,
        "lng": 25.253088,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Savanorių pr. 34 | Vilniaus apšvietimas | Inbalance grid",
        "address": "Savanorių pr. 34 | Vilniaus apšvietimas",
        "city": "Vilnius",
        "lat": 54.674216,
        "lng": 25.251201,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Savanorių pr. 32 | Vilniaus apšvietimas | Inbalance grid",
        "address": "Savanorių pr. 32",
        "city": "Vilnius",
        "lat": 54.674444,
        "lng": 25.250883,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Kapsų g. 22 (atrama 5) | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Kapsų g. 22",
        "city": "Vilnius",
        "lat": 54.661125,
        "lng": 25.276602,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Kapsų g. 24 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Kapsų g. 24",
        "city": "Vilnius",
        "lat": 54.660879,
        "lng": 25.278098,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 PLTVILKA24_EDLT-218",
        "address": "Kalvarijų gatvė 24",
        "city": "Vilnius",
        "lat": 54.696553,
        "lng": 25.281133,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.4
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.40€/kWh"
    },
    {
        "name": "🔌 Girulių g. 5 2 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Girulių g. 5",
        "city": "Vilnius",
        "lat": 54.738493,
        "lng": 25.216989,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Rugių g. 37 | Vilniaus apšvietimas | Inbalance grid",
        "address": "Rugių g. 37",
        "city": "Vilnius",
        "lat": 54.741738,
        "lng": 25.265595,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 M. Katkaus 2B  | Vilniaus apšvietimas | Inbalance grid",
        "address": "M. Katkaus 2B",
        "city": "Vilnius",
        "lat": 54.701321,
        "lng": 25.292021,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.25
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 Olandų g. 1 2  | Vilniaus apšvietimas | Inbalance grid",
        "address": "Olandų g. 1",
        "city": "Vilnius",
        "lat": 54.692866,
        "lng": 25.304591,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.25
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 Sporto g. 6 | Vilniaus apšvietimas | Inbalance grid",
        "address": "Sporto g. 6",
        "city": "Vilnius",
        "lat": 54.69496,
        "lng": 25.299812,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.25
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 Kavoliuko g. 26 | Vilniaus apšvietimas | Inbalance grid",
        "address": "Kavoliuko g. 26",
        "city": "Vilnius",
        "lat": 54.6952,
        "lng": 25.215886,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.25
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 Girulių g. 5 1 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Girulių g. 5",
        "city": "Vilnius",
        "lat": 54.738493,
        "lng": 25.216989,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Jonažolių g. 13 1 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Jonažolių g. 13",
        "city": "Vilnius",
        "lat": 54.667809,
        "lng": 25.210056,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Mažvydo g., Pilaitė | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Mažvydo g., Pilaitė",
        "city": "Vilnius",
        "lat": 54.711592,
        "lng": 25.17751,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Jonažolių g. 13 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Jonažolių g. 13",
        "city": "Vilnius",
        "lat": 54.668668,
        "lng": 25.21043,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Konarskio g. 20| Vilniaus apšvietimas | Inbalance grid",
        "address": "Konarskio g. 20",
        "city": "Vilnius",
        "lat": 54.677395,
        "lng": 25.250415,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 K. Ulvydo g. 7 2 | Vilniaus apšvietimas | Inbalance grid",
        "address": "K. Ulvydo g. 7",
        "city": "Vilnius",
        "lat": 54.719238,
        "lng": 25.280545,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Orlen Kalvarijos | Inbalance grid",
        "address": "Kalvarijos g. 138",
        "city": "Kaunas",
        "lat": 54.850921,
        "lng": 23.842744,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (193.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Orlen Kryžkalnis (Klaipėda - Vilnius) 2 | Inbalance grid",
        "address": "Pikelių k. 6",
        "city": "Raseinių r.",
        "lat": 55.464387,
        "lng": 22.685331,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (360.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Orlen Kryžkalnis (Klaipėda - Vilnius) 3 | Inbalance grid",
        "address": "Pikelių k. 6",
        "city": "Raseinių r.",
        "lat": 55.464387,
        "lng": 22.685331,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (360.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Orlen Kryžkalnis (Vilnius - Klaipėda) | Inbalance grid",
        "address": "Pikelių k. 8",
        "city": "Raseinių r.",
        "lat": 55.461505,
        "lng": 22.696121,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (320.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Orlen Kryžkalnis (Vilnius - Klaipėda) 2 | Inbalance grid",
        "address": "Pikelių k. 8",
        "city": "Raseinių r.",
        "lat": 55.461505,
        "lng": 22.696121,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (320.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Orlen Nausodės | Inbalance grid",
        "address": "Šiaulių g 50",
        "city": "Nausodė",
        "lat": 55.733845,
        "lng": 24.263273,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (320.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Orlen Nausodės (2) | Inbalance grid",
        "address": "Šiaulių g 50",
        "city": "Nausodė",
        "lat": 55.733845,
        "lng": 24.263273,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (320.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Orlen Marijampolės (2) | Inbalance grid",
        "address": "Aleksandravo km.",
        "city": "Marijampolė",
        "lat": 54.582947,
        "lng": 23.370355,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (320.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Orlen Marijampolės | Inbalance grid",
        "address": "Aleksandravo km.",
        "city": "Marijampolė",
        "lat": 54.582947,
        "lng": 23.370355,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (320.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Orlen Ukmergės g. | Inbalance grid",
        "address": "Ukmergės g. 319",
        "city": "Vilnius",
        "lat": 54.736886,
        "lng": 25.232279,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (320.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Orlen Ukmergės g. (2) | Inbalance grid",
        "address": "Ukmergės g. 319",
        "city": "Vilnius",
        "lat": 54.736886,
        "lng": 25.232279,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (320.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Orlen Žiežmariai | Inbalance grid",
        "address": "Žiežmariai",
        "city": "Žiežmariai",
        "lat": 54.816055,
        "lng": 24.434126,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (320.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Orlen Žiežmariai 2 | Inbalance grid",
        "address": "Žiežmariai",
        "city": "Žiežmariai",
        "lat": 54.816055,
        "lng": 24.434126,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (320.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Lietuvininkų g. 68",
        "address": "Lietuvininkų g. 68, 99175 Šilutė, Lithuania",
        "city": "Šilutė",
        "lat": 55.343675,
        "lng": 21.475828,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (150.0kW) - 0.31€/kWh, CHADEMO (50.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 Paryžiaus Komunos g. 4",
        "address": "Paryžiaus Komunos g. 4, 91151 Klaipėda, Lietu",
        "city": "Klaipėda",
        "lat": 55.699316,
        "lng": 21.150669,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (150.0kW) - 0.31€/kWh, CHADEMO (50.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 Priegliaus g. Pilaitė | Inbalance grid",
        "address": "Priegliaus g. Pilaitė",
        "city": "Vilnius",
        "lat": 54.713069,
        "lng": 25.18691,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Vilnius Outlet",
        "address": "Vytauto Pociūno g. 8",
        "city": "Vilnius",
        "lat": 54.7020484,
        "lng": 25.2072987,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.405
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (320.0kW) - 0.41€/kWh"
    },
    {
        "name": "🔌 Norfa XL, Leipalingio g. 1, Druskininkai",
        "address": "Leipalingio g. 1",
        "city": "Druskininkai",
        "lat": 54.0288705,
        "lng": 23.9866325,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2893
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (47.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 Eldrive Lithuania Urban HUB Kaunas 7",
        "address": "Lyderystės gatvė 8",
        "city": "Biruliškės",
        "lat": 54.935109,
        "lng": 23.988633,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.37
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (50.0kW) - 0.37€/kWh"
    },
    {
        "name": "🔌 Šiaulių Akropolis | Inbalance grid",
        "address": "Aido g. 8",
        "city": "Šiauliai",
        "lat": 55.907594,
        "lng": 23.261256,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.23
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.23€/kWh"
    },
    {
        "name": "🔌 Sausio 13-osios g. 37 1 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Sausio 13-osios g. 37",
        "city": "Vilnius",
        "lat": 54.688328,
        "lng": 25.213191,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Baltupio g. 47A | Vilniaus apšvietimas | Inbalance grid",
        "address": "Baltupio g. 47A",
        "city": "Vilnius",
        "lat": 54.728047,
        "lng": 25.268722,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Baltupio g. 43 | Vilniaus apšvietimas | Inbalance grid",
        "address": "Baltupio g. 43",
        "city": "Vilnius",
        "lat": 54.726872,
        "lng": 25.269026,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Baltupio g. 43 1 | Vilniaus apšvietimas | Inbalance grid",
        "address": "Baltupio g. 43",
        "city": "Vilnius",
        "lat": 54.726521,
        "lng": 25.269945,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Baltupio g. 43 2 | Vilniaus apšvietimas | Inbalance grid",
        "address": "Baltupio g. 43",
        "city": "Vilnius",
        "lat": 54.726476,
        "lng": 25.270571,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Baltupio g. 39  | Vilniaus apšvietimas | Inbalance grid",
        "address": "Baltupio g. 39",
        "city": "Vilnius",
        "lat": 54.726256,
        "lng": 25.270831,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Lidl Jonavos g.",
        "address": "Jonavos g. 40B, 44192 Kaunas, Lithuania",
        "city": "Kaunas",
        "lat": 54.902587,
        "lng": 23.896145,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.32
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (150.0kW) - 0.32€/kWh"
    },
    {
        "name": "🔌 Jonava - Ukmergė Pavėsinė A6, 42,15km | Via Lietuva | Inbalance grid",
        "address": "A6",
        "city": "Pūstelninkų k.",
        "lat": 55.127177,
        "lng": 24.403552,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.38
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (43.0kW) - 0.38€/kWh, IEC_62196_T2_COMBO (50.0kW) - 0.38€/kWh, CHADEMO (50.0kW) - 0.38€/kWh"
    },
    {
        "name": "🔌 Plūgo broliai A12, 20,31km | Via Lietuva | Inbalance grid",
        "address": "A12",
        "city": "Maironiai",
        "lat": 56.194326,
        "lng": 23.569582,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.38
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (43.0kW) - 0.38€/kWh, IEC_62196_T2_COMBO (50.0kW) - 0.38€/kWh, CHADEMO (50.0kW) - 0.38€/kWh"
    },
    {
        "name": "🔌 Aukštadvaris / Navos Smuklė A16, 54,61km | Via Lietuva | Inbalance grid",
        "address": "A16",
        "city": "Aukštadvaris",
        "lat": 54.580462,
        "lng": 24.548953,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.38
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (43.0kW) - 0.38€/kWh, IEC_62196_T2_COMBO (50.0kW) - 0.38€/kWh, CHADEMO (50.0kW) - 0.38€/kWh"
    },
    {
        "name": "🔌 Marijampolė A5, 65 km | Via Lietuva | Inbalance grid",
        "address": "A5",
        "city": "Marijampolė",
        "lat": 54.572345,
        "lng": 23.297293,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.38
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (43.0kW) - 0.38€/kWh, IEC_62196_T2_COMBO (50.0kW) - 0.38€/kWh, CHADEMO (50.0kW) - 0.38€/kWh"
    },
    {
        "name": "🔌 Degučiai A6, 165,72km | Via Lietuva | Inbalance grid",
        "address": "A6",
        "city": "Degučiai",
        "lat": 55.658295,
        "lng": 26.052591,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.38
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (43.0kW) - 0.38€/kWh, IEC_62196_T2_COMBO (50.0kW) - 0.38€/kWh, CHADEMO (50.0kW) - 0.38€/kWh"
    },
    {
        "name": "🔌 Žarija, Šeduva A9, 47,3km | Via Lietuva | Inbalance grid",
        "address": "A9",
        "city": "Šeduva",
        "lat": 55.77349,
        "lng": 23.665305,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.38
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (43.0kW) - 0.38€/kWh, IEC_62196_T2_COMBO (50.0kW) - 0.38€/kWh, CHADEMO (50.0kW) - 0.38€/kWh"
    },
    {
        "name": "🔌 Raubonys A10, 47,43km | Via Lietuva | Inbalance grid",
        "address": "A10",
        "city": "Pasvalio r.",
        "lat": 56.1228,
        "lng": 24.471,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.38
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (43.0kW) - 0.38€/kWh, IEC_62196_T2_COMBO (50.0kW) - 0.38€/kWh, CHADEMO (50.0kW) - 0.38€/kWh"
    },
    {
        "name": "🔌 Eldrive Lithuania Lietuvos etnografijos muziejus | PARTNERIS",
        "address": "L. Lekavičiaus gatvė 2",
        "city": "Rumšiškės",
        "lat": 54.866144,
        "lng": 24.201762,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.29
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 IKI Turgus",
        "address": "Vilniaus g. 220, 76302 Šiauliai, Lithuania",
        "city": "Šiauliai",
        "lat": 55.93843,
        "lng": 23.304867,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (150.0kW) - 0.31€/kWh, CHADEMO (50.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 Alauša / Kalvarijų 204G Vilnius | Inbalance grid",
        "address": "Kalvarijų g. 204G",
        "city": "Vilnius",
        "lat": 54.72093,
        "lng": 25.2845,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.21
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (160.0kW) - 0.21€/kWh"
    },
    {
        "name": "🔌 Alauša / Europos g. 17 | Inbalance grid",
        "address": "Europos g. 17",
        "city": "Salaperaugis",
        "lat": 54.319937,
        "lng": 23.139689,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.23
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (90.0kW) - 0.23€/kWh"
    },
    {
        "name": "🔌 Žirmūnų g. 98 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Žirmūnų g. 98",
        "city": "Vilnius",
        "lat": 54.728111,
        "lng": 25.300264,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Panevėžio ryšių statyba",
        "address": "Paliūniškio g. 9, 35114 Panevėžys, Lithuania",
        "city": "Panevėžys",
        "lat": 55.74759,
        "lng": 24.379854,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (50.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 Eldrive Lithuania Rimi Biržai | PARTNERIS",
        "address": "J. Janonio aikštė 5",
        "city": "Biržai",
        "lat": 56.204231,
        "lng": 24.761348,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.37
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (110.0kW) - 0.37€/kWh"
    },
    {
        "name": "🔌 Baltupio g. 117 | Vilniaus apšvietimas | Inbalance grid",
        "address": "Baltupio g. 117",
        "city": "Vilnius",
        "lat": 54.742564,
        "lng": 25.264038,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Mokyklos g. 86 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Mokyklos g. 86",
        "city": "Vilnius",
        "lat": 54.745404,
        "lng": 25.263549,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Goštauto g. 45 (atrama 45) | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Goštauto g. 45",
        "city": "Vilnius",
        "lat": 54.689955,
        "lng": 25.259987,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Franko g. 12 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Franko g. 12",
        "city": "Vilnius",
        "lat": 54.760588,
        "lng": 25.285631,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 PLTSAVVA29_EDLT-248",
        "address": "Vandžiogalos gatvė 29",
        "city": "Saviečių kaimas",
        "lat": 55.167168,
        "lng": 23.994491,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.35
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (300.0kW) - 0.35€/kWh"
    },
    {
        "name": "🔌 Laisves pr. 41 (112 atrama) | Vilniaus apšvietimas | Inbalance grid",
        "address": "Laisves pr. 41",
        "city": "Vilnius",
        "lat": 54.695095,
        "lng": 25.221348,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Vaitkaus g. 13 (atrama 106) | Vilniaus apšvietimas | Inbalance grid",
        "address": "Vaitkaus g. 13",
        "city": "Vilnius",
        "lat": 54.699337,
        "lng": 25.227219,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Vaitkaus g. 11 (atrama 108) | Vilniaus apšvietimas | Inbalance grid",
        "address": "Vaitkaus g. 11",
        "city": "Vilnius",
        "lat": 54.699185,
        "lng": 25.226016,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Laisves pr. 41 (113 atrama) | Vilniaus apšvietimas | Inbalance grid",
        "address": "Laisves pr. 41",
        "city": "Vilnius",
        "lat": 54.695153,
        "lng": 25.221018,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Vaitkaus g. 11 (atrama 214) | Vilniaus apšvietimas | Inbalance grid",
        "address": "Vaitkaus g. 11",
        "city": "Vilnius",
        "lat": 54.698943,
        "lng": 25.226649,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Vaitkaus g. 13 (atrama 104) | Vilniaus apšvietimas | Inbalance grid",
        "address": "Vaitkaus g. 13",
        "city": "Vilnius",
        "lat": 54.699465,
        "lng": 25.22843,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Šeškinės g. 51 (atrama 46) | Vilniaus apšvietimas | Inbalance grid",
        "address": "Šeškinės g. 51",
        "city": "Vilnius",
        "lat": 54.716869,
        "lng": 25.249044,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Šeškinės g. 29 (50 atrama) | Vilniaus apšvietimas | Inbalance grid",
        "address": "Šeškinės g. 29",
        "city": "Vilnius",
        "lat": 54.716591,
        "lng": 25.250346,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Čiobiškio g. 3 (10 atrama) | Vilniaus apšvietimas | Inbalance grid",
        "address": "Čiobiškio g. 3",
        "city": "Vilnius",
        "lat": 54.71782,
        "lng": 25.23774,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Šeškinės g. 20A (65 atrama) | Vilniaus apšvietimas | Inbalance grid",
        "address": "Šeškinės g. 20A",
        "city": "Vilnius",
        "lat": 54.713519,
        "lng": 25.2514,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Šeškinės g. 20A (63 atrama) | Vilniaus apšvietimas | Inbalance grid",
        "address": "Šeškinės g. 20A",
        "city": "Vilnius",
        "lat": 54.713889,
        "lng": 25.251485,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Gelvonų g. 3 (453 atrama) | Vilniaus apšvietimas | Inbalance grid",
        "address": "Gelvonų g. 3",
        "city": "Vilnius",
        "lat": 54.715924,
        "lng": 25.258205,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Gelvonų g. 68 (8 atrama) | Vilniaus apšvietimas | Inbalance grid",
        "address": "Gelvonų g. 68",
        "city": "Vilnius",
        "lat": 54.718147,
        "lng": 25.256874,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Čiobiškio g. 13 (12 atrama) | Vilniaus apšvietimas | Inbalance grid",
        "address": "Čiobiškio g. 13",
        "city": "Vilnius",
        "lat": 54.718541,
        "lng": 25.237951,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 A. Mickevičiaus g. 32 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "A. Mickevičiaus g. 32",
        "city": "Vilnius",
        "lat": 54.689717,
        "lng": 25.24888,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Stanevičiaus g. 82 (atrama 54) | Vilniaus apšvietimas | Inbalance grid",
        "address": "Stanevičiaus g. 82",
        "city": "Vilnius",
        "lat": 54.726834,
        "lng": 25.251265,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Stanevičiaus g. 80 (atrama 49) | Vilniaus apšvietimas | Inbalance grid",
        "address": "Stanevičiaus g. 80",
        "city": "Vilnius",
        "lat": 54.727731,
        "lng": 25.250249,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Stanevičiaus g. 80 (atrama 50) | Vilniaus apšvietimas | Inbalance grid",
        "address": "Stanevičiaus g. 80",
        "city": "Vilnius",
        "lat": 54.727363,
        "lng": 25.25016,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Didlaukio g. 65 (74 atrama)  | Vilniaus apšvietimas | Inbalance grid",
        "address": "Didlaukio g. 65",
        "city": "Vilnius",
        "lat": 54.732943,
        "lng": 25.260245,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Didlaukio g. 59 (68 atrama)  | Vilniaus apšvietimas | Inbalance grid",
        "address": "Didlaukio g. 59",
        "city": "Vilnius",
        "lat": 54.731458,
        "lng": 25.260889,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 L.Baliukeviciaus-Dzūko g. (17 atrama) | Vilniaus apšvietimas | Inbalance grid",
        "address": "L.Baliukeviciaus-Dzūko g.",
        "city": "Vilnius",
        "lat": 54.735008,
        "lng": 25.249832,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Fabijoniškių  g. 45 (2 atrama) | Vilniaus apšvietimas | Inbalance grid",
        "address": "Fabijoniškių  g. 45",
        "city": "Vilnius",
        "lat": 54.725098,
        "lng": 25.245922,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 L.Baliukeviciaus-Dzūko g. (19 atrama) | Vilniaus apšvietimas | Inbalance grid",
        "address": "L.Baliukeviciaus-Dzūko g.",
        "city": "Vilnius",
        "lat": 54.73506,
        "lng": 25.249197,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Fabijoniškių  g. 45 (3 atrama) | Vilniaus apšvietimas | Inbalance grid",
        "address": "Fabijoniškių  g. 45",
        "city": "Vilnius",
        "lat": 54.725098,
        "lng": 25.245922,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Fabijoniškių g. 65 (7 atrama) | Vilniaus apšvietimas | Inbalance grid",
        "address": "Fabijoniškių g. 65",
        "city": "Vilnius",
        "lat": 54.726252,
        "lng": 25.247477,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Fabijoniškių  g. 47 (4 atrama) | Vilniaus apšvietimas | Inbalance grid",
        "address": "Fabijoniškių  g. 47",
        "city": "Vilnius",
        "lat": 54.725087,
        "lng": 25.246982,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Didlaukio g. 61 (69 atrama) | Vilniaus apšvietimas | Inbalance grid",
        "address": "Didlaukio g. 61",
        "city": "Vilnius",
        "lat": 54.731731,
        "lng": 25.260842,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Dainavos g. 6 (55 atrama) | Vilniaus apšvietimas | Inbalance grid",
        "address": "Dainavos g. 6",
        "city": "Vilnius",
        "lat": 54.688068,
        "lng": 25.267232,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 A. Tumėno g. | Vilniaus apšvietimas | Inbalance grid",
        "address": "A. Tumėno g.",
        "city": "Vilnius",
        "lat": 54.692208,
        "lng": 25.261423,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 J. Lelevelio g. (107 atrama) | Vilniaus apšvietimas | Inbalance grid",
        "address": "J. Lelevelio g.",
        "city": "Vilnius",
        "lat": 54.688653,
        "lng": 25.278488,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 J. Lelevelio g. (108 atrama) | Vilniaus apšvietimas | Inbalance grid",
        "address": "J. Lelevelio g.",
        "city": "Vilnius",
        "lat": 54.688717,
        "lng": 25.278022,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 J. Lelevelio g. (109 atrama) | Vilniaus apšvietimas | Inbalance grid",
        "address": "J. Lelevelio g.",
        "city": "Vilnius",
        "lat": 54.678256,
        "lng": 25.252799,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Vytenio g. 54 (142) | Vilniaus apšvietimas | Inbalance grid",
        "address": "Vytenio g. 54",
        "city": "Vilnius",
        "lat": 54.66929,
        "lng": 25.267012,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Algirdo g. 59 | Vilniaus apšvietimas | Inbalance grid",
        "address": "Algirdo g. 59",
        "city": "Vilnius",
        "lat": 54.671811,
        "lng": 25.272926,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Algirdo g. 61 (53 atrama) | Vilniaus apšvietimas | Inbalance grid",
        "address": "Algirdo g. 61",
        "city": "Vilnius",
        "lat": 54.671537,
        "lng": 25.273016,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Algirdo g. 67 (55 atrama) | Vilniaus apšvietimas | Inbalance grid",
        "address": "Algirdo g. 67",
        "city": "Vilnius",
        "lat": 54.671014,
        "lng": 25.273217,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Dainavos g. 6 (56 atrama) | Vilniaus apšvietimas | Inbalance grid",
        "address": "Dainavos g. 6",
        "city": "Vilnius",
        "lat": 54.688367,
        "lng": 25.267479,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Tyzenhauzų 12 (23 atrama) | Vilniaus apšvietimas | Inbalance grid",
        "address": "Tyzenhauzų 12",
        "city": "Vilnius",
        "lat": 54.669421,
        "lng": 25.291487,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Tyzenhauzų 12 (24 atrama) | Vilniaus apšvietimas | Inbalance grid",
        "address": "Tyzenhauzų 12",
        "city": "Vilnius",
        "lat": 54.669687,
        "lng": 25.291491,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Stadiono g. 1 | Vilniaus apšvietimas | Inbalance grid",
        "address": "Stadiono g. 1",
        "city": "Vilnius",
        "lat": 54.669861,
        "lng": 25.293506,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Architektų g. 60A  | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Architektų g. 60A",
        "city": "Vilnius",
        "lat": 54.671357,
        "lng": 25.213036,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Čiobiškio g. 15 | Vilniaus apšvietimas | Inbalance grid",
        "address": "Čiobiškio g. 15",
        "city": "Vilnius",
        "lat": 54.718471,
        "lng": 25.240082,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Santariškių 29A | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Santariškių 29A",
        "city": "Vilnius",
        "lat": 54.762672,
        "lng": 25.284028,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Eldrive Lithuania Light Conversion",
        "address": "Keramikų gatvė 2D",
        "city": "Vilnius",
        "lat": 54.728743,
        "lng": 25.376548,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.29
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 Krivių g. 35 | Vilniaus apšvietimas | Inbalance grid",
        "address": "Krivių g. 35",
        "city": "Vilnius",
        "lat": 54.68569,
        "lng": 25.304541,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Varpu g. 5 | Vilniaus apšvietimas | Inbalance grid",
        "address": "Varpu g. 5",
        "city": "Vilnius",
        "lat": 54.685732,
        "lng": 25.307067,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Labanoro g. 88 (2 atrama) | Vilniaus apšvietimas | Inbalance grid",
        "address": "Labanoro g. 88",
        "city": "Vilnius",
        "lat": 54.712348,
        "lng": 25.274855,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Labanoro g. 88 (3 atrama) | Vilniaus apšvietimas | Inbalance grid",
        "address": "Labanoro g. 88",
        "city": "Vilnius",
        "lat": 54.712314,
        "lng": 25.275144,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Kalvarijų g. 148 (3 atrama) | Vilniaus apšvietimas | Inbalance grid",
        "address": "Kalvarijų g. 148",
        "city": "Vilnius",
        "lat": 54.708356,
        "lng": 25.284594,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Kalvariju g. 160 (33 atrama) | Vilniaus apšvietimas | Inbalance grid",
        "address": "Kalvariju g. 160",
        "city": "Vilnius",
        "lat": 54.709701,
        "lng": 25.283224,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Parko g. 63  Vilniaus apšvietimas | Inbalance grid",
        "address": "Parko g. 63",
        "city": "Vilnius",
        "lat": 54.684651,
        "lng": 25.427542,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Butrimonių g. 9, Kaunas",
        "address": "Butrimonių g. 9, Kaunas",
        "city": "Kaunas",
        "lat": 54.9141712,
        "lng": 23.9517534,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.20€/kWh"
    },
    {
        "name": "🔌 Smolensko g. 39 | Vilniaus apšvietimas | Inbalance grid",
        "address": "Smolensko g. 39",
        "city": "Vilnius",
        "lat": 54.675934,
        "lng": 25.258114,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Architektų 134A Vilnius  | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Architektų g. 134A",
        "city": "Vilnius",
        "lat": 54.683415,
        "lng": 25.208724,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 PLTVILEI11_EDLT-71",
        "address": "Eišiškių plentas 11",
        "city": "Vilnius",
        "lat": 54.651337,
        "lng": 25.269176,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.55
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (300.0kW) - 0.55€/kWh"
    },
    {
        "name": "🔌 IKI Butkų Juzės | Inbalance grid",
        "address": "Priestočio g. 24",
        "city": "Klaipėda",
        "lat": 55.719877,
        "lng": 21.139032,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.23
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.23€/kWh"
    },
    {
        "name": "🔌 IKI Gausa | Inbalance grid",
        "address": "Šaulių g. 11",
        "city": "Klaipėda",
        "lat": 55.714842,
        "lng": 21.131693,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.23
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.23€/kWh"
    },
    {
        "name": "🔌 K.Semenavičiaus g. 9 | Vilniaus apšvietimas | Inbalance grid",
        "address": "K.Semenavičiaus g. 9",
        "city": "Vilnius",
        "lat": 54.720199,
        "lng": 25.351814,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Business Garden daugiaaukštė aikštelė",
        "address": "Laisvės pr. 10, 04215 Vilnius, Lithuania",
        "city": "Vilnius",
        "lat": 54.675663,
        "lng": 25.221389,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.31
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW), IEC_62196_T2_COMBO (200.0kW) - 0.31€/kWh"
    },
    {
        "name": "🔌 Žirmūnų g. 44 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Žirmūnų g. 44",
        "city": "Vilnius",
        "lat": 54.700805,
        "lng": 25.302183,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Hesburger Taikos pr.",
        "address": "Taikos prospektas 47a",
        "city": "Kaunas",
        "lat": 54.912501,
        "lng": 23.961559,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.31
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (200.0kW) - 0.31€/kWh"
    },
    {
        "name": "🔌 Baltupio g. 73 | Vilniaus apšvietimas | Inbalance grid",
        "address": "Baltupio g. 73",
        "city": "Vilnius",
        "lat": 54.740483,
        "lng": 25.266186,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Baltupio g. 77 | Vilniaus apšvietimas | Inbalance grid",
        "address": "Baltupio g. 77",
        "city": "Vilnius",
        "lat": 54.74077,
        "lng": 25.266051,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Didlaukio 45 (53 atrama) | Vilniaus apšvietimas | Inbalance grid",
        "address": "Didlaukio 45",
        "city": "Vilnius",
        "lat": 54.728855,
        "lng": 25.265032,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Santariškių g. 59 (5 atrama) | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Santariškių g. 59",
        "city": "Vilnius",
        "lat": 54.76515,
        "lng": 25.283097,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Santariškių g. 43 (9 atrama) | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Santariškių g. 43",
        "city": "Vilnius",
        "lat": 54.763041,
        "lng": 25.285318,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Kalvariju g. 152 (30 atrama) | Vilniaus apšvietimas | Inbalance grid",
        "address": "Kalvariju g. 152",
        "city": "Vilnius",
        "lat": 54.709118,
        "lng": 25.283066,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Ateities g. 5 (3 atrama) | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Ateities g. 5",
        "city": "Vilnius",
        "lat": 54.738865,
        "lng": 25.269341,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 RAR Transportas",
        "address": "Tilžės g. 68, 78157 Šiauliai, Lithuania",
        "city": "Šiauliai",
        "lat": 55.919112,
        "lng": 23.290186,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (150.0kW) - 0.31€/kWh, CHADEMO (50.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 Rugiu g. 8A | Vilniaus apšvietimas | Inbalance grid",
        "address": "Rugiu g. 8A",
        "city": "Vilnius",
        "lat": 54.740983,
        "lng": 25.274234,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Rugiu g. 8B (atrama 13) | Vilniaus apšvietimas | Inbalance grid",
        "address": "Rugiu g. 8B",
        "city": "Vilnius",
        "lat": 54.740398,
        "lng": 25.274052,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Rugiu g. 8B (atrama 14) | Vilniaus apšvietimas | Inbalance grid",
        "address": "Rugiu g. 8B",
        "city": "Vilnius",
        "lat": 54.740142,
        "lng": 25.27397,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 J.Balčikonio g. 9 (44 atrama) | Vilniaus apšvietimas | Inbalance grid",
        "address": "J.Balčikonio g. 9",
        "city": "Vilnius",
        "lat": 54.720837,
        "lng": 25.280359,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 J.Balčikonio g. 19 (54 atrama) | Vilniaus apšvietimas | Inbalance grid",
        "address": "J.Balčikonio g. 19",
        "city": "Vilnius",
        "lat": 54.720671,
        "lng": 25.278514,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 V. Gerulaičio g. 10 (44 atrama) | Vilniaus apšvietimas | Inbalance grid",
        "address": "V. Gerulaičio g. 10",
        "city": "Vilnius",
        "lat": 54.717216,
        "lng": 25.276972,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 V. Gerulaičio g. 1 (66 atrama) | Vilniaus apšvietimas | Inbalance grid",
        "address": "V. Gerulaičio g. 1",
        "city": "Vilnius",
        "lat": 54.717359,
        "lng": 25.285018,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Bitininkų g. 1A (27 atrama) | Vilniaus apšvietimas | Inbalance grid",
        "address": "Bitininkų g. 1A",
        "city": "Vilnius",
        "lat": 54.739819,
        "lng": 25.271821,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Bitininkų g. 1B (29 atrama) | Vilniaus apšvietimas | Inbalance grid",
        "address": "Bitininkų g. 1B",
        "city": "Vilnius",
        "lat": 54.740352,
        "lng": 25.271944,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Bitininkų g. 1C (31 atrama) | Vilniaus apšvietimas | Inbalance grid",
        "address": "Bitininkų g. 1C",
        "city": "Vilnius",
        "lat": 54.740839,
        "lng": 25.272062,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Transekpedicija | Inbalance grid",
        "address": "Galinės g. 5",
        "city": "Galinės k., Vilniaus r.",
        "lat": 54.806952,
        "lng": 25.165377,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.19
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.19€/kWh"
    },
    {
        "name": "🔌 Šviesos g. 17, Grigiškės (44 atrama) | Vilniaus apšvietimas | Inbalance grid",
        "address": "Šviesos g. 17",
        "city": "Vilnius",
        "lat": 54.666214,
        "lng": 25.095501,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Šviesos g. 13, Grigiškės (42 atrama) | Vilniaus apšvietimas | Inbalance grid",
        "address": "Šviesos g. 13",
        "city": "Vilnius",
        "lat": 54.666773,
        "lng": 25.095541,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Šviesos g. 9B, Grigiškės (37 atrama)  | Vilniaus apšvietimas | Inbalance grid",
        "address": "Šviesos g. 9B",
        "city": "Vilnius",
        "lat": 54.666951,
        "lng": 25.094217,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Šviesos g. 3, Grigiškės (35 atrama)  | Vilniaus apšvietimas | Inbalance grid",
        "address": "Šviesos g. 3, Grigiškės",
        "city": "Vilnius",
        "lat": 54.668589,
        "lng": 25.09666,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Šviesos g. 19, Grigiškės (44 atrama) | Vilniaus apšvietimas | Inbalance grid",
        "address": "Šviesos g. 19",
        "city": "Vilnius",
        "lat": 54.666739,
        "lng": 25.094002,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Šviesos g. 15 (42 atrama) | Vilniaus apšvietimas | Inbalance grid",
        "address": "Šviesos g. 15",
        "city": "Vilnius",
        "lat": 54.667257,
        "lng": 25.093474,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 PLTKAUS192_EDLT-141",
        "address": "Savanorių pr. 192, 44151 Kaunas, Lithuania",
        "city": "Kaunas",
        "lat": 54.909564,
        "lng": 23.931352,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.44
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (120.0kW) - 0.44€/kWh"
    },
    {
        "name": "🔌 Kovo 11-osios g. 38B | Vilniaus apšvietimas | Inbalance grid",
        "address": "Kovo 11-osios g. 38B",
        "city": "Vilnius",
        "lat": 54.67029,
        "lng": 25.098133,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Kovo 11-osios g. 29 | Vilniaus apšvietimas | Inbalance grid",
        "address": "Kovo 11-osios g. 29",
        "city": "Vilnius",
        "lat": 54.670114,
        "lng": 25.093096,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Kovo 11-osios g. 38 (105 atrama) | Vilniaus apšvietimas | Inbalance grid",
        "address": "Kovo 11-osios g. 38",
        "city": "Vilnius",
        "lat": 54.669832,
        "lng": 25.097768,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Kovo 11-osios g. 38 (103 atrama) | Vilniaus apšvietimas | Inbalance grid",
        "address": "Kovo 11-osios g. 38",
        "city": "Vilnius",
        "lat": 54.669515,
        "lng": 25.097566,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Elektriniai matavimai, UAB - Jurbarko g. 35, Raseiniai | Inbalance grid",
        "address": "Jurbarko g. 35",
        "city": "Raseiniai",
        "lat": 55.37024,
        "lng": 23.120442,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.22
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (120.0kW) - 0.22€/kWh"
    },
    {
        "name": "🔌 Kauno geležinkelio stotis",
        "address": "M. K. Čiurlionio g. 14, 44360 Kaunas, Lithuan",
        "city": "Kaunas",
        "lat": 54.8859,
        "lng": 23.9298,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (149.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 Hesburger Baršausko",
        "address": "K. Baršausko g. 66D",
        "city": "Kaunas",
        "lat": 54.900776,
        "lng": 23.967438,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.29
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (149.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 Eldrive Lithuania Rimi Mylia",
        "address": "Smolensko gatvė 12b",
        "city": "Vilnius",
        "lat": 54.674766,
        "lng": 25.257645,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.29
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 Antakalnio g. 71",
        "address": "Antakalnio g. 71",
        "city": "Vilnius",
        "lat": 54.71403,
        "lng": 25.316043,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.31
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (150.0kW) - 0.31€/kWh"
    },
    {
        "name": "🔌 Simbiocity Nova",
        "address": "Gerulaičio, 10",
        "city": "Vilnius",
        "lat": 54.7170768,
        "lng": 25.2777396,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2893
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (47.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 Pramonės pr. 8H, Kaunas",
        "address": "Pramonės pr., 8H",
        "city": "Kaunas",
        "lat": 54.9126618,
        "lng": 23.9850031,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2893
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (47.0kW) - 0.29€/kWh, IEC_62196_T2_COMBO (120.0kW) - 0.41€/kWh"
    },
    {
        "name": "🔌 Norfa XL, Salininkų g. 129a, Vilnius",
        "address": "Salininkų g. 129a",
        "city": "Vilnius",
        "lat": 54.6053753,
        "lng": 25.2634942,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2479
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (47.0kW) - 0.29€/kWh, IEC_62196_T2 (22.0kW) - 0.25€/kWh"
    },
    {
        "name": "🔌 KFC Kaunas Savanorių pr.",
        "address": "Savanorių pr., 439A",
        "city": "Kaunas",
        "lat": 54.9282978,
        "lng": 23.9708422,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.405
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (120.0kW) - 0.41€/kWh"
    },
    {
        "name": "🔌 KIKA 1 | Inbalance grid",
        "address": "Ozo g. 6",
        "city": "Žemaitkiemio k., Kauno r.",
        "lat": 54.964578,
        "lng": 23.868029,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.29
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (242.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 RYO DC | Inbalance grid",
        "address": "Savitiškio g. 61",
        "city": "Panevėžys",
        "lat": 55.728233,
        "lng": 24.314228,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (320.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 RYO DC 2 | Inbalance grid",
        "address": "Savitiškio g. 61",
        "city": "Panevėžys",
        "lat": 55.728233,
        "lng": 24.314228,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2_COMBO (320.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Gelvonų g. 3 (452 atrama) | Vilniaus apšvietimas | Inbalance grid",
        "address": "Gelvonų g. 3",
        "city": "Vilnius",
        "lat": 54.715767,
        "lng": 25.258211,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Grybo g. 34 | Vilniaus apšvietimas | Inbalance grid",
        "address": "Grybo g. 34",
        "city": "Vilnius",
        "lat": 54.706845,
        "lng": 25.316828,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Volungės 18A (2 atrama) | Vilniaus apšvietimas | Inbalance grid",
        "address": "Volungės 18A",
        "city": "Vilnius",
        "lat": 54.703263,
        "lng": 25.321038,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Sauletekio al. 39 (106 atrama)  | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Sauletekio al. 39",
        "city": "Vilnius",
        "lat": 54.721206,
        "lng": 25.343809,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 P. Žadeikos g. 9 (2 atrama) | Vilniaus Apšvietimas | Inbalance grid",
        "address": "P. Žadeikos g. 9",
        "city": "Vilnius",
        "lat": 54.733807,
        "lng": 25.245827,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 P. Žadeikos g. 9 (1 atrama) | Vilniaus Apšvietimas | Inbalance grid",
        "address": "P. Žadeikos g. 9",
        "city": "Vilnius",
        "lat": 54.733595,
        "lng": 25.24558,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 P. Žadeikos g. 9 (8 atrama) | Vilniaus Apšvietimas | Inbalance grid",
        "address": "P. Žadeikos g. 9",
        "city": "Vilnius",
        "lat": 54.73381,
        "lng": 25.247338,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Didlaukio g. 47 (59 atrama) | Vilniaus apšvietimas | Inbalance grid",
        "address": "Didlaukio g. 47",
        "city": "Vilnius",
        "lat": 54.729397,
        "lng": 25.26253,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Didlaukio g. 55 (63 atrama) | Vilniaus apšvietimas | Inbalance grid",
        "address": "Didlaukio g. 55",
        "city": "Vilnius",
        "lat": 54.730161,
        "lng": 25.261285,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Santariškių  35, Vilnius | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Santariškiu 35",
        "city": "Vilnius",
        "lat": 54.761593,
        "lng": 25.283904,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Santariškių 39H, Vilnius | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Santariškių 39H",
        "city": "Vilnius",
        "lat": 54.76215,
        "lng": 25.286914,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Minties 7, Vilnius | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Minties 7",
        "city": "Vilnius",
        "lat": 54.704724,
        "lng": 25.296619,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Nidos g. 1 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Nidos g. 1",
        "city": "Vilnius",
        "lat": 54.71069,
        "lng": 25.184382,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Gelvonų g. 68 (atrama 9) | Vilniaus apšvietimas | Inbalance grid",
        "address": "Gelvonų g. 68",
        "city": "Vilnius",
        "lat": 54.718,
        "lng": 25.257218,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Gelvonų g. 68 (atrama 10) | Vilniaus apšvietimas | Inbalance grid",
        "address": "Gelvonų g. 68",
        "city": "Vilnius",
        "lat": 54.71805,
        "lng": 25.256591,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Ukmergės g. 232 (61) | Vilniaus apšvietimas | Inbalance grid",
        "address": "Ukmergės g. 232",
        "city": "Vilnius",
        "lat": 54.71876,
        "lng": 25.242358,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 PC Gričiupis",
        "address": "Kovo 11-osios g. 22",
        "city": "Kaunas",
        "lat": 54.906396,
        "lng": 23.974658,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.31
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (200.0kW) - 0.31€/kWh"
    },
    {
        "name": "🔌 Restoranas Juodasis kalnas",
        "address": "Ievos Kalno g. 22",
        "city": "Neringa",
        "lat": 55.538326,
        "lng": 21.1178,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.32
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (200.0kW) - 0.32€/kWh"
    },
    {
        "name": "🔌 Žirmūnų g. 30A 1 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Žirmūnų g. 30A",
        "city": "Vilnius",
        "lat": 54.701253,
        "lng": 25.299848,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 J.I.Kraševskio g. 12 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "J.I.Kraševskio g. 12",
        "city": "Vilnius",
        "lat": 54.687251,
        "lng": 25.250723,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Studentų g. 45 | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Studentų g. 45",
        "city": "Vilnius",
        "lat": 54.695895,
        "lng": 25.259211,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Fabijoniškių g. 2 (35 atrama) | Vilniaus apšvietimas | Inbalance grid",
        "address": "Fabijoniškių g. 2",
        "city": "Vilnius",
        "lat": 54.72494,
        "lng": 25.244685,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 S. Konarskio g. 8 (34 atrama) | Vilniaus apšvietimas | Inbalance grid",
        "address": "S. Konarskio g. 8",
        "city": "Vilnius",
        "lat": 54.678256,
        "lng": 25.252799,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 J.Franko g. 2B (12 atrama)  | Vilniaus Apšvietimas | Inbalance grid",
        "address": "J.Franko g. 2B",
        "city": "Vilnius",
        "lat": 54.76105,
        "lng": 25.283906,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 PLTPAKVD98_EDLT-203",
        "address": "Vytauto Didžiojo gatvė 98",
        "city": "Pakruojis",
        "lat": 55.980364,
        "lng": 23.857739,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.33
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (150.0kW) - 0.33€/kWh"
    },
    {
        "name": "🔌 PLTANYSAU2_EDLT-85",
        "address": "Sausalaukė 2",
        "city": "Sausalaukė",
        "lat": 55.675985,
        "lng": 25.358298,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.35
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (150.0kW) - 0.35€/kWh"
    },
    {
        "name": "🔌 PLTAUKILG1_EDLT-208",
        "address": "Ilgoji g. 1",
        "city": "Aukštelkė",
        "lat": 55.88179,
        "lng": 23.20537,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.35
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (300.0kW) - 0.35€/kWh"
    },
    {
        "name": "🔌 Kaunas Raseniai",
        "address": "Taikos prospektas 141",
        "city": "Kaunas",
        "lat": 54.919112,
        "lng": 24.000895,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.3
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (50.0kW) - 0.36€/kWh, CHADEMO (50.0kW) - 0.36€/kWh, IEC_62196_T2 (22.0kW) - 0.30€/kWh"
    },
    {
        "name": "🔌 Eldrive Lithuania Skulas Geležinis Vilkas",
        "address": "J. Kazlausko gatvė 33",
        "city": "Vilnius",
        "lat": 54.722594,
        "lng": 25.270668,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.37
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (150.0kW) - 0.37€/kWh"
    },
    {
        "name": "🔌 Orlen Palanga | Inbalance grid",
        "address": "PALANGOS PL. 59",
        "city": "VILIMIŠKĖS K",
        "lat": 55.903103,
        "lng": 21.105946,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (320.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Orlen Palanga (2) | Inbalance grid",
        "address": "Palangos Pl. 59",
        "city": "Vilmiškių K.",
        "lat": 55.903103,
        "lng": 21.105946,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2_COMBO (320.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Eldrive Lithuania Žirmūnų g. 141",
        "address": "Žirmūnų gatvė 139a",
        "city": "Vilnius",
        "lat": 54.724431,
        "lng": 25.297635,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.37
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (50.0kW) - 0.37€/kWh"
    },
    {
        "name": "🔌 PLTRADSIA1_EDLT-158",
        "address": "Šiaulių gatvė 1A",
        "city": "Radviliškis",
        "lat": 55.825593,
        "lng": 23.523306,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.33
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (150.0kW) - 0.33€/kWh"
    },
    {
        "name": "🔌 Orlen Elektrėnai | Inbalance grid",
        "address": "Žilvičių g. 1A",
        "city": "Kakliniškių K.",
        "lat": 54.790717,
        "lng": 24.669455,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (320.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Orlen Elektrėnai 2 | Inbalance grid",
        "address": "Žilvičių g. 1A",
        "city": "Kakliniškių K.",
        "lat": 54.790717,
        "lng": 24.669455,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2_COMBO (320.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Eldrive Lithuania Dariaus ir Girėno stadionas",
        "address": "Perkūno alėja 5",
        "city": "Kaunas",
        "lat": 54.898351,
        "lng": 23.936654,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.29
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 Eldrive Lithuania Jonavos autobusų stotis",
        "address": "Kalnų gatvė 18",
        "city": "Jonava",
        "lat": 55.076187,
        "lng": 24.280515,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.29
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (150.0kW) - 0.37€/kWh, IEC_62196_T2 (22.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 Portum Alytus",
        "address": "Naujoji gatvė 35",
        "city": "Alytus",
        "lat": 54.417195,
        "lng": 24.006653,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2231
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.22€/kWh"
    },
    {
        "name": "🔌 Architektų 214, Vilnius | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Architektų g. 214",
        "city": "Vilnius",
        "lat": 54.679132,
        "lng": 25.217214,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Eldrive Lithuania VIA SOLIS",
        "address": "B. Brazdžionio gatvė 12",
        "city": "Kaunas",
        "lat": 54.933989,
        "lng": 23.861444,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.37
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (400.0kW) - 0.37€/kWh"
    },
    {
        "name": "🔌 Bikuva Visaginas",
        "address": "Veteranų g. 4, Visaginas, Visagino sav.  LT-3",
        "city": "Visaginas",
        "lat": 55.597933,
        "lng": 26.4355,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.27
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (102.0kW) - 0.27€/kWh, CHADEMO (50.0kW) - 0.27€/kWh"
    },
    {
        "name": "🔌 PLTPALKR56_EDLT-191",
        "address": "Kretingos gatvė 56",
        "city": "Palanga",
        "lat": 55.914268,
        "lng": 21.077415,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.4
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (60.0kW) - 0.44€/kWh, CHADEMO (58.0kW) - 0.44€/kWh, IEC_62196_T2 (22.0kW) - 0.40€/kWh"
    },
    {
        "name": "🔌 Eldrive Lithuania Prekybos parkas Pušynas",
        "address": "Kupiškio gatvė 52",
        "city": "Utena",
        "lat": 55.509163,
        "lng": 25.577566,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.37
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (400.0kW) - 0.37€/kWh"
    },
    {
        "name": "🔌 Laisvės g. 3",
        "address": "Laisvės g. 3",
        "city": "Telšiai",
        "lat": 55.985858,
        "lng": 22.250218,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.31
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (150.0kW) - 0.31€/kWh"
    },
    {
        "name": "🔌 Architektų 132 (atrama 190) | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Architektų g.132",
        "city": "Vilnius",
        "lat": 54.682272,
        "lng": 25.209229,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Volungės 18A (3 atrama) | Vilniaus apšvietimas | Inbalance grid",
        "address": "Volungės 18A",
        "city": "Vilnius",
        "lat": 54.703263,
        "lng": 25.321038,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Sauletekio al. 51 (104 atrama) | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Sauletekio al. 51",
        "city": "Vilnius",
        "lat": 54.721273,
        "lng": 25.344616,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 Kapsų g. 19A | Vilniaus Apšvietimas | Inbalance grid",
        "address": "Kapsų g. 19A",
        "city": "Vilnius",
        "lat": 54.660564,
        "lng": 25.283703,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.24
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (4.0kW) - 0.24€/kWh"
    },
    {
        "name": "🔌 PLTJONVI51_EDLT-239",
        "address": "Vilniaus gatvė 51",
        "city": "Joniškis",
        "lat": 56.224568,
        "lng": 23.600792,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.33
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2_COMBO (180.0kW) - 0.33€/kWh"
    },
    {
        "name": "🔌 Eldrive Lithuania Barčių g. 3, Vilnius",
        "address": "Barčių gatvė 3",
        "city": "Vilnius",
        "lat": 54.604599,
        "lng": 25.2604,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.37
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (200.0kW) - 0.37€/kWh"
    },
    {
        "name": "🔌 Eldrive Lithuania IKI - Pasimatymas",
        "address": "V. Krėvės prospektas 57",
        "city": "Kaunas",
        "lat": 54.920507,
        "lng": 23.973534,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.37
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (150.0kW) - 0.37€/kWh"
    },
    {
        "name": "🔌 Eldrive Lithuania Kauno sporto halė",
        "address": "Perkūno alėja 5",
        "city": "Kaunas",
        "lat": 54.896095,
        "lng": 23.935071,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.29
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 Eldrive Lithuania K. Donelaičio g. 30, Utena",
        "address": "K. Donelaičio gatvė 30",
        "city": "Utena",
        "lat": 55.503334,
        "lng": 25.591756,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.29
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "CHADEMO (50.0kW) - 0.37€/kWh, IEC_62196_T2_COMBO (50.0kW) - 0.37€/kWh, IEC_62196_T2 (22.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 Eldrive Lithuania Utenio a. 16, Utena",
        "address": "Utenio aikštė 16",
        "city": "Utena",
        "lat": 55.494414,
        "lng": 25.601631,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.37
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (200.0kW) - 0.37€/kWh"
    },
    {
        "name": "🔌 Eldrive Lithuania Maironio g. 6A, Utena",
        "address": "J. Basanavičiaus gatvė 57",
        "city": "Utena",
        "lat": 55.498461,
        "lng": 25.601011,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.37
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (200.0kW) - 0.37€/kWh"
    },
    {
        "name": "🔌 Eldrive Lithuania Aušros g. 43, Utena",
        "address": "Aušros gatvė 45",
        "city": "Utena",
        "lat": 55.504939,
        "lng": 25.601726,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.29
        },
        "ev_status": "Laisva",
        "ev_connectors": "CHADEMO (50.0kW) - 0.37€/kWh, IEC_62196_T2_COMBO (50.0kW) - 0.37€/kWh, IEC_62196_T2 (22.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 Eldrive Lithuania Aukštakalnio g. 3, Utena",
        "address": "Aukštakalnio gatvė 3",
        "city": "Utena",
        "lat": 55.510058,
        "lng": 25.589564,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.29
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (50.0kW) - 0.37€/kWh, IEC_62196_T2 (22.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 Eldrive Lithuania Radviliškio g. 7, Kutiškiai | PARTNERIS",
        "address": "Radviliškio gatvė 7",
        "city": "Kutiškiai",
        "lat": 55.835984,
        "lng": 23.506368,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.29
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 Eldrive Lithuania Rimi Mylia 2",
        "address": "T. Ševčenkos g., 03117 Vilnius, Lietuva",
        "city": "Vilnius",
        "lat": 54.676219,
        "lng": 25.25772,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.29
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 PLTBUKBI36_EDLT-237",
        "address": "Bičiulių gatvė 36",
        "city": "Bukiškis",
        "lat": 54.75987,
        "lng": 25.218715,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.35
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (100.0kW) - 0.35€/kWh, IEC_62196_T2 (11.0kW) - 0.35€/kWh"
    },
    {
        "name": "🔌 Eldrive Lithuania Sabališkių g. 1H, Elektrėnai",
        "address": "Sabališkių gatvė 1H",
        "city": "Elektrėnai",
        "lat": 54.788563,
        "lng": 24.679058,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.37
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (200.0kW) - 0.37€/kWh"
    },
    {
        "name": "🔌 Lidl Vilnius, Bajorų",
        "address": "Bajorų kelias 6",
        "city": "Vilnius",
        "lat": 54.756199,
        "lng": 25.259458,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.3
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (43.0kW) - 0.30€/kWh, IEC_62196_T2_COMBO (50.0kW) - 0.36€/kWh, CHADEMO (50.0kW) - 0.36€/kWh"
    },
    {
        "name": "🔌 Eldrive Lithuania Eldrive | Porsche Charging Hub Rietavas",
        "address": "Tilto gatvė 10",
        "city": "Žadvainai",
        "lat": 55.643627,
        "lng": 21.870937,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.37
        },
        "ev_status": "Laisva",
        "ev_connectors": "CHADEMO (50.0kW) - 0.37€/kWh, IEC_62196_T2_COMBO (200.0kW) - 0.37€/kWh, IEC_62196_T2_COMBO (400.0kW) - 0.37€/kWh"
    },
    {
        "name": "🔌 PLTPABV116_EDLT-204",
        "address": "Vilniaus gatvė 116B",
        "city": "Pabradė",
        "lat": 54.974934,
        "lng": 25.74467,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.33
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (180.0kW) - 0.33€/kWh"
    },
    {
        "name": "🔌 PLTKAUR169_EDLT-242",
        "address": "Raudondvario plentas 169B",
        "city": "Kaunas",
        "lat": 54.918208,
        "lng": 23.830336,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.33
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.33€/kWh, IEC_62196_T2_COMBO (120.0kW) - 0.35€/kWh"
    },
    {
        "name": "🔌 Kaunas Vytauto",
        "address": "Vytauto gatvė 111B",
        "city": "Garliava",
        "lat": 54.82783,
        "lng": 23.871808,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.3
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.30€/kWh"
    },
    {
        "name": "🔌 Eldrive Lithuania Aušros g. 21, Druskininkai",
        "address": "Aušros gatvė 41",
        "city": "Druskininkai",
        "lat": 54.024665,
        "lng": 23.979955,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.29
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 Eldrive Lithuania Vilniaus al. 1, Druskininkai",
        "address": "Taikos gatvė 9",
        "city": "Druskininkai",
        "lat": 54.017668,
        "lng": 23.97564,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.29
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 Eldrive Lithuania M. K. Čiurlionio g. 82, Druskininkai",
        "address": "M. K. Čiurlionio gatvė 82",
        "city": "Druskininkai",
        "lat": 54.013292,
        "lng": 23.987587,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.29
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 Kaunas Taikos",
        "address": "Taikos prospektas 141",
        "city": "Kaunas",
        "lat": 54.919207,
        "lng": 23.999693,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.3
        },
        "ev_status": "Užimta / Nežinoma",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.30€/kWh"
    },
    {
        "name": "🔌 Eldrive Lithuania Gardino g. 3, Druskininkai",
        "address": "Gardino Gatvė 3",
        "city": "Druskininkai",
        "lat": 54.00963,
        "lng": 23.977925,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.29
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 Norfa XXL Bangų g. 11A, Palanga",
        "address": "Bangų g. 11A",
        "city": "Palanga",
        "lat": 55.9256405,
        "lng": 21.0793575,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2479
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (100.0kW) - 0.41€/kWh, IEC_62196_T2_COMBO (40.0kW) - 0.29€/kWh, IEC_62196_T2 (11.0kW) - 0.25€/kWh, IEC_62196_T2_COMBO (120.0kW) - 0.41€/kWh"
    },
    {
        "name": "🔌 Norfa XL, Molėtų pl. 47, Vilnius",
        "address": "Molėtų pl. 47",
        "city": "Vilnius",
        "lat": 54.7720878,
        "lng": 25.2720989,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.405
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (320.0kW) - 0.41€/kWh"
    },
    {
        "name": "🔌 Smuklė Žarija",
        "address": "Ežero g. 2",
        "city": "Velžių k.,  Radviliškio r.",
        "lat": 55.7734946,
        "lng": 23.6670319,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.2893
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (47.0kW) - 0.29€/kWh, IEC_62196_T2_COMBO (120.0kW) - 0.41€/kWh"
    },
    {
        "name": "🔌 Eldrive Lithuania Muziejaus g. 35, Telšiai | PARTNERIS",
        "address": "Muziejaus gatvė 35",
        "city": "Telšiai",
        "lat": 55.973273,
        "lng": 22.234123,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.29
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.29€/kWh"
    },
    {
        "name": "🔌 PLTSIALA60_EDLT-235",
        "address": "Latvių gatvė 60",
        "city": "Šiauliai",
        "lat": 55.905478,
        "lng": 23.284316,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.33
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (60.0kW) - 0.33€/kWh"
    },
    {
        "name": "🔌 PLTKARZIR3_EDLT-142",
        "address": "Žirgyno gatvė 3",
        "city": "Kauno raj., Karmėlavos sen.",
        "lat": 54.959456,
        "lng": 24.039295,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.35
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2_COMBO (300.0kW) - 0.35€/kWh"
    },
    {
        "name": "🔌 IKI Ukmergė 2 | Inbalance grid",
        "address": "Kauno g. 23",
        "city": "Ukmergė",
        "lat": 55.245982,
        "lng": 24.7546,
        "logo": "⚡",
        "prices": {
            "Elektra": 0.23
        },
        "ev_status": "Laisva",
        "ev_connectors": "IEC_62196_T2 (22.0kW) - 0.23€/kWh"
    }
];
