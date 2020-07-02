/* eslint-disable no-unused-vars */

const Config = {
    wfsImgPath: "./ressources/img/",
    namedProjections: [
        ["EPSG:25832", "+title=ETRS89/UTM 32N +proj=utm +zone=32 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs"]
    ],
    footer: {
        urls: [
            {
                "bezeichnung": "HCU Projekt, Geodateninfrastruktur, basierend auf: ",
                "url": "https://www.masterportal.org/",
                "alias": "Masterportal/LGV",
                "alias_mobil": "MP/LGV"
            }
        ],
        showVersion: true
    },
    quickHelp: {
        imgPath: "./ressources/img/"
    },
    layerConf: "./ressources/services-internet.json",
    restConf: "./ressources/rest-services-internet.json",
    styleConf: "./ressources/style_v3.json",
    scaleLine: true,
    mouseHover: {
        numFeaturesToShow: 2,
        infoText: "(weitere Objekte. Bitte zoomen.)"
    },
    useVectorStyleBeta: true
};

/* eslint-enable no-unused-vars */
