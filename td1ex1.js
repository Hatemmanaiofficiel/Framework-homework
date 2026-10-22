const destinations = [
    {
        id: 1, ville: "Santorin", pays: "Grèce", prix: 1200, duree: 7,
        disponible: true
    },
    {
        id: 2, ville: "Bali", pays: "Indonésie", prix: 1800, duree: 10,
        disponible: true
    },
    {
        id: 3, ville: "Istanbul", pays: "Turquie", prix: 750, duree: 5,
        disponible: false
    },
    {
        id: 4, ville: "Rome", pays: "Italie", prix: 950, duree: 4,
        disponible: true
    },
    {
        id: 5, ville: "Tokyo", pays: "Japon", prix: 2500, duree: 12,
        disponible: true
    },
    {
        id: 6, ville: "Djerba", pays: "Tunisie", prix: 500, duree: 6,
        disponible: false
    }
];


destinations.forEach(destination => {
    console.log(destination.ville);
});


const villes = destinations.map(destination => destination.ville);
console.log(villes);

const destinationsAbordables = destinations.filter(destination => destination.prix < 1500);
console.log(destinationsAbordables);

const destinationTrouvee = destinations.find(destination => destination.id === 3);
console.log(destinationTrouvee);

const positionTokyo = destinations.findIndex(destination => destination.ville === "Tokyo");
console.log(positionTokyo);

const existeDisponible = destinations.some(destination => destination.disponible === true);
console.log(existeDisponible);

const tousPrixPositifs = destinations.every(destination => destination.prix > 0);
console.log(tousPrixPositifs);

const budgetTotal = destinations.reduce((total, destination) => {
    return total + destination.prix;
}, 0);
console.log(budgetTotal + " DT");