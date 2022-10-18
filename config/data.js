export const categories = {
    a: {
        conclusion: "Hello world",
    },
    b: {
        conclusion:
            "L'utilisation mondiale du numérique a un énorme impact sur la société de nos jours. Tout d’abord à cause de l’énorme consommation de toutes les infrastructures technologiques mais aussi à cause du stockage personnel. Cette consommation engendre des émissions de CO2 allant jusqu’à 1400 millions de tonnes, l’impact de ces émissions est donc énorme et pourtant ne correspond qu’à 4% des émissions totales.",
    },
};

export const questions = {
    a: [
        {
            category: "a",
            title: "Question 1",
            description: "Description 1",
            type: "TF",
            answer: true,
            detailedAnswer: "here is the explanation",
        },
        {
            category: "a",
            title: "Question 2",
            description: "Description 2",
            type: "TF",
            answer: false,
            detailedAnswer: "here is the explanation",
        },
    ],
    b: [
        {
            category: "b",
            title: "Question 1",
            description:
                "Est-ce que l’utilisation du numérique mondiale représente environ 4000 TWh d'énergie primaire ?",
            type: "TF",
            answer: false,
            detailedAnswer:
                " Le numérique représente environ 6 800 TWh d'énergie primaire, 1 400 millions de tonnes de gaz à effet de serre et 7,8 millions de m3 d'eau douce.",
        },
        {
            category: "b",
            title: "Question 2",
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
            title: "Question 3",
            description:
                "Parmi les émissions de gaz à effet de serre générées par le numérique, le pourcentage de gaz à effet de serre émis par l'utilisation d'infrastructures réseaux et des data-centers est d’environ 35% ?",
            type: "TF",
            answer: false,
            detailedAnswer:
                "Ces infrastructures sont responsables aujourd'hui de 53 % des émissions mondiales de gaz à effet de serre et la forte augmentation des usages laisse présager une énorme augmentation l’empreinte carbone du numérique d'ici 2025.",
        },
        {
            category: "b",
            title: "Question 4",
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
            title: "Question 5",
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
            category: "b",
            title: "Question 1",
            description: "Description 1",
            type: "TF",
            answer: false,
            detailedAnswer: "here is the explanation",
        },
        {
            category: "b",
            title: "Question 2",
            description: "Description 2",
            type: "TF",
            answer: false,
            detailedAnswer: "here is the explanation",
        },
        {
            category: "b",
            title: "Question 3",
            description: "Description 3",
            type: "CHOICES",
            choices: ["Choice 1", "Choice 2", "Choice 3"],
            answer: 0,
            detailedAnswer: "here is the explanation",
        },
    ],
};
