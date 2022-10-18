export const categories = {
    a: {
        conclusion:
            "Le numérique est fortement ancré dans notre société d’aujourd’hui, environ 3 français sur 4 possèdent un téléphone portable. En prévision, en 2030, il y aura environ 46 milliards d’objets connectées, et ces objets connectées consomment énormément tout au long de leur cycle de vie, on prendra pour exemple l’émission d’un ordinateur portable qui est de 169 kg de CO2. L’impact de notre utilisation personnelle du numérique sur l’environnement avoisine les 56 000 milliards de kg de CO2 émis chaque année si chaque personne était un salarié à titre d’exemple.",
    },
    b: {
        conclusion:
            "L'utilisation mondiale du numérique a un énorme impact sur la société de nos jours. Tout d’abord à cause de l’énorme consommation de toutes les infrastructures technologiques mais aussi à cause du stockage personnel. Cette consommation engendre des émissions de CO2 allant jusqu’à 1400 millions de tonnes, l’impact de ces émissions est donc énorme et pourtant ne correspond qu’à 4% des émissions totales.",
    },
    c: {
        conclusion:
            "Il est possible de participer individuellement à la réduction de l’empreinte environnementale du numérique. Cela englobe notamment la diminution de consommation des outils électronique tel les téléphones et les ordinateurs portables, ainsi que l’utilisation de la 4G lorsqu’il y a du wifi, éteindre ses équipements comme les box et les imprimantes,ou même adopter de bonnes pratiques pour les mails comme se désinscrire de toutes les newsletters qu’on ne lit pas.",
    },
};

export const questions = {
    a: [
        {
            category: "a",
            description: "Combien comptera-t-on d’objets connectés en 2030?",
            type: "CHOICES",
            choices: ["46 milliards", "32 milliards", "29 milliards"],
            answer: 0,
            detailedAnswer:
                "En effet, cela correspond à 3 fois plus qu’en 2018!",
        },
        {
            category: "a",
            description:
                "En 2021, en Europe occidentale, combien d’équipements informatiques a une personne en moyenne?",
            type: "CHOICES",
            choices: ["3 équipements", "5 équipements", "9 équipements"],
            answer: 2,
            detailedAnswer:
                "En 2016, le nombre d’équipements informatiques était d’environ 5 par personne.",
        },

        {
            category: "a",
            description:
                "90% des Français changent leur smartphone alors qu’il fonctionne encore.",
            type: "TF",
            answer: true,
            detailedAnswer:
                "En moyenne, les français changent leur téléphone tous les 2 ans alors que, dans 88% des cas ces téléphones portables fonctionnent encore",
        },
        {
            category: "a",
            description: "Qu’est-ce qui pollue le plus?",
            type: "CHOICES",
            choices: [
                "Regarder un streaming",
                "Envoyer un mail",
                "Flâner sur les réseaux sociaux",
            ],
            answer: 0,
            detailedAnswer:
                "Le streaming vidéo représente à lui 60% des flux de données sur internet, en raison du poids des fichiers vidéo. Selon le think tank The Shift Project, la consommation de streaming vidéo émettrait près de 1% des émissions mondiales de CO2",
        },

        {
            category: "a",
            description:
                "Envoyer un email consommerait autant qu’une ampoule allumée pendant",
            type: "CHOICES",
            choices: ["15 minutes", "25 minutes", "30 minutes"],
            answer: 1,
            detailedAnswer:
                "D’après une étude menée par l’ADEME, un email avec une pinède jointe 1 Mo envoyé à 1 personne émet 20 grammes de CO2 , soit l’équivalent de la consommation électrique d’une ampoule de 60 W pendant 25 minutes",
        },

        {
            category: "a",
            description:
                "Concrètement, un salarié français, à cause du numérique, émet chaque année…",
            type: "CHOICES",
            choices: [
                "200 kg de gaz à effet de serre",
                "400 kg de gaz à effet de serre",
                "800 kg de gaz à effet de serre",
            ],
            answer: 2,
            detailedAnswer:
                "Au final, l’empreinte numérique annuelle d’un salarié est de: 5740 kWh d’énergie primaire, 800 kg de gaz à effet de serre,14 000 litres d’eau, 3 kg de déchets électroniques",
        },

        {
            category: "a",
            description:
                "Quelle est la masse de produits chimiques nécessaires pour fabriquer un ordinateur ?",
            type: "CHOICES",
            choices: ["100g", "22kg", "50kg", "850kg"],
            answer: 1,
            detailedAnswer:
                "C'est la quantité de produits chimiques nécessaires pour fabriquer un ordinateur, ajoutés à 240 kg de combustible et 1,5 t d'eau.",
        },

        {
            category: "a",
            description:
                "Combien de kilos de dioxyde de carbone sont émis lors de l’ensemble du cycle de vie d’un ordinateur portable.",
            type: "CHOICES",
            choices: ["169 kg", "65 kg", "128kg"],
            answer: 0,
            detailedAnswer:
                "La fabrication d’un ordinateur de 2 kg équivaut à une émission de 124 kg de CO2, sur les 169 kg émis sur l'ensemble de son cycle de vie. Le cycle de vie d’un ordinateur va de sa conceptualisation à la miniaturisation et la complexification des composants. Cela demande énormément d’énergie et donc beaucoup d’émission de CO2. De plus, les nombreux transports émettent aussi beaucoup de CO2, l’ensemble de ce processus engendre donc des fortes émissions.",
        },
    ],
    b: [
        {
            category: "b",
            description:
                "Est-ce que l’utilisation du numérique mondiale représente environ 4000 TWh d'énergie primaire ?",
            type: "TF",
            answer: false,
            detailedAnswer:
                " Le numérique représente environ 6 800 TWh d'énergie primaire, 1 400 millions de tonnes de gaz à effet de serre et 7,8 millions de m3 d'eau douce.",
        },
        {
            category: "b",
            description:
                "Combien consomme les serveurs, les terminaux et les réseaux en un an ?",
            type: "CHOICES",
            choices: [
                "Environ 500 TWh par an",
                "Plus de 1000 TWh par an",
                " Entre 800 et 900 TWh par an",
            ],
            answer: 2,
            detailedAnswer:
                "L'infrastructure d'internet, soit les serveurs, les réseaux et les terminaux des utilisateurs, consomment entre 800 et 900 TWh par an*, soit l'équivalent du parc nucléaire américain. Cela représente plus ou moins 4% de la consommation mondiale d'électricité.",
        },
        {
            category: "b",
            description:
                "Parmi les émissions de gaz à effet de serre générées par le numérique, le pourcentage de gaz à effet de serre émis par l'utilisation d'infrastructures réseaux et des data-centers est d’environ 35% ?",
            type: "TF",
            answer: false,
            detailedAnswer:
                "Ces infrastructures sont responsables aujourd'hui de 53 % des émissions mondiales de gaz à effet de serre et la forte augmentation des usages laisse présager une énorme augmentation l’empreinte carbone du numérique d'ici 2025.",
        },
        {
            category: "b",
            description:
                "Quel est l’impact environnemental du stockage de données numérique ?",
            type: "CHOICES",
            choices: [
                "Des centaines de litres d’eau usagé déversées dans la mer tous les jours",
                "Plus de 9 kg d’émissions de C02 par an, par personne",
                "Des millions de TWh consommées toutes les heures",
            ],
            answer: 1,
            detailedAnswer:
                "Un mail émet environ 19 g de Co2 pour 1 Mo de pièce jointe. De plus, 34 millions mails sont envoyés toutes les heures sans compter les spams, cela revient donc à une quantité astronomique de CO2 émis. De plus, 80% des mails ne sont pas ouverts. Le stockage des boîte mail devient donc complètement saturés ce qui explique cette énorme émission de CO2",
        },
        {
            category: "b",
            description:
                "L’émission de gaz à effet de serre numérique mondial est de l’ordre de 1 400 millions de tonnes",
            type: "TF",
            answer: true,
            detailedAnswer:
                "L’empreinte environnementale du numérique mondial est de l’ordre de: 6 800 TWh d’énergie primaire (EP) ; 1 400 millions de tonnes de gaz à effet de serre (GES) ; 7,8 millions de m3 d’eau douce (Eau)  et 22 millions de tonnes d’antimoine (ADP).",
        },
    ],
    c: [
        {
            category: "c",
            description:
                "Les appareils électroniques peuvent être jeté dans une poubelle classique ",
            type: "TF",
            answer: false,
            detailedAnswer:
                "En effet, entre 70% à 90% des appareils électroniques ne suivent  pas des filières de recyclage réglementées",
        },
        {
            category: "c",
            description:
                "Quel score moyen obtiennent les entreprises quand on note sur 100 leurs pratiques écologiques?",
            type: "CHOICES",
            choices: ["2/100", "17/100", "59/100", "78/100"],
            answer: 2,
            detailedAnswer:
                "Les entreprises sont généralement assez actives dans la mise en œuvre de bonnes pratiques numériques plus responsables, avec une note moyenne de 59 sur 100.  Cependant, il y a un écart important entre les moins matures et les plus matures. Évidemment certains domaines comme l'impression ou l'optimisation de l'efficacité énergétique des centres informatiques sont les plus avancés.",
        },
        {
            category: "c",
            description: "combien consomme une box allumée 24h sur 24 en un an",
            type: "CHOICES",
            choices: ["150 à 300 kWh", "1000 Wh - 2000Wh", "20 à 25 kWh"],
            answer: 0,
            detailedAnswer:
                "Il est donc bien d'éteindre sa box et le boîtier TV. Car quand ils sont allumés 24 heures sur 24, une box ADSL et le boîtier TV associé consomment de 150 à 300 kWh par an, soit la consommation électrique annuelle de 5 à 10 ordinateurs portables 15 pouces utilisés 8h par jour. Éteindre sa box pendant la nuit permet d'économiser 65 à 130 kWh, entre 8 et 16 euros et 650 à 1 300 litres d’eau par an.",
        },
        {
            category: "c",
            description:
                "Quelle est la proportion du trafic que représente la vidéo en ligne? ",
            type: "CHOICES",
            choices: ["35%", "50%", "60%"],
            answer: 2,
            detailedAnswer:
                "la vidéo en ligne représente plus de 60% du trafic internet. Regarder une émission en streaming HD via sa box ADSL émet autant de gaz à effet de serre que de fabriquer, lire et transporter un DVD. Préférez donc l'utilisation de la TNT pour regarder les émissions en direct.",
        },
        {
            category: "c",
            description:
                "Le nombre de personnes en copie et le temps passé à écrire un mail n'influent pas sur l’impact environnemental.",
            type: "TF",
            answer: false,
            detailedAnswer:
                "En effet, le nombre de personnes en copie et le temps passé à écrire un mail influent sur l’impact environnemental. Ainsi, éviter d’envoyer beaucoup de mails, limiter les pièces-jointes et le nombre de personnes en copie, limite notre impact énergétique. En + : Pour transmettre un document à quelqu'un à proximité, utilisez un transfert via une clé USB, car plus un mail est lourd, plus son impact environnemental est important.",
        },
        {
            category: "c",
            description:
                "Qu’elles sont mes erreurs courantes qui ont le plus d’impact sur l’environnement",
            type: "CHOICES",
            choices: [
                "Laisser les appareils allumer",
                "Laisser les applications et les mails inutiles",
                "Acheter des nouveaux appareils sans rénover les autres",
            ],
            answer: 1,
            detailedAnswer:
                "La suppression de 30 mails équivaut à économiser une ampoule allumée pendant une journée. De plus, la suppression de mails c’est énormément faciliter grâce à des solutions gratuites tel que Cleanfox, ou d’autres sites ayant cette fonction. Enfin une application dûment installée continue d’utiliser les ressources du téléphone et de susciter des mises à jour automatiques.",
        },
        {
            category: "c",
            description:
                "Aller sur Internet avec le réseau 4G consomme 23 fois plus qu’en utilisant le wifi.",
            type: "TF",
            answer: true,
            detailedAnswer:
                "Aujourd’hui, nous avons la chance de pouvoir accéder à Internet grâce à la 4G. En effet, aller sur Internet avec le réseau 4G consomme 23 fois plus qu’en utilisant le wifi! Dès que vous êtes chez vous ou dans un endroit où la connexion est possible, activez le wifi surtout si vous téléchargez des fichiers.",
        },
        {
            category: "c",
            description:
                "Lequel de ces moteurs de recherche est écoresponsable.",
            type: "CHOICES",
            choices: ["Google", "Ecosia", "Firefox"],
            answer: 1,
            detailedAnswer:
                "En faisant vos recherches sur Ecosia, vous participez à la reforestation de certaines zones en Amérique du Sud et en Asie. Il y a aussi Lilo, Qwant, Ecogine.",
        },
        {
            category: "c",
            title:
                "Garder le plus longtemps possible ses équipements numériques",
            description:
                "On peut garder un ordinateur portable plus de 10 ans si l’on en prend bien soin.",
            type: "TF",
            answer: true,
            detailedAnswer:
                "La fabrication d’un ordinateur est très polluante. Pour cela on peut, le mettre en veille, optimiser ses capacités en supprimant tout fichier inutile, ne pas le faire surchauffer.",
        },
        {
            category: "c",
            title: "Hébergeur de données et de site web éco responsable ",
            description:
                "Lequel de ces hébergeurs de données et de site web n’est pas  écoresponsable",
            type: "CHOICES",
            choices: ["OVH", "Aonyx", "O2switch", "PlanetHoster"],
            answer: 0,
            detailedAnswer:
                "Aonyx : est implanté dans un bâtiment basse consommation, au cœur de l’Auvergne. o2switch : est une société 100% française. Ils possèdent leur propre Datacenter à Clermont-Ferrand. C’est un hébergeur éco-responsable qui a misé sur du matériel optimisé et un système de climatisation intelligent. PlanetHoster : est l’un des premiers hébergeurs web qui a limité son empreinte carbone. Elle alimente ainsi ses infrastructures canadiennes à l’énergie renouvelable hydroélectrique. Elle se sert aussi du grand froid canadien pour refroidir naturellement ses centres de données.",
        },
    ],
};
