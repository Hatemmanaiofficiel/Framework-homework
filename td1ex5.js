// Exercice 5 - Mini-projet : Gestion des favoris

const favoris = [
    { id: 1, ville: "Venise", pays: "Italie", visite: false },
    { id: 2, ville: "Marrakech", pays: "Maroc", visite: true },
    { id: 3, ville: "Maldives", pays: "Maldives", visite: false },
    { id: 4, ville: "Barcelone", pays: "Espagne", visite: true }
];

console.log("Toutes les destinations favorites :", favoris);

const destinationsNonVisitees = favoris.filter(destination => !destination.visite);
console.log("Destinations non visitées :", destinationsNonVisitees);

const nomsDesVilles = favoris.map(destination => destination.ville);
console.log("Noms des villes :", nomsDesVilles);

const destinationAvecId3 = favoris.find(destination => destination.id === 3);
console.log("Destination avec l'identifiant 3 :", destinationAvecId3);

const nombreDejaVisitees = favoris.reduce((total, destination) => {
    return total + (destination.visite ? 1 : 0);
}, 0);
console.log("Nombre de destinations déjà visitées :", nombreDejaVisitees);

const nouvelleDestination = {
    id: 5,
    ville: "Kyoto",
    pays: "Japon",
    visite: false
};
const favorisAvecNouvelleDestination = [...favoris, nouvelleDestination];
console.log("Favoris avec une nouvelle destination :", favorisAvecNouvelleDestination);

const favorisAvecVeniseVisitee = favoris.map(destination =>
    destination.id === 1 ? { ...destination, visite: true } : destination
);
console.log("Favoris après avoir marqué Venise comme visitée :", favorisAvecVeniseVisitee);

const favorisSansMarrakech = favoris.filter(destination => destination.id !== 2);
console.log("Favoris sans Marrakech :", favorisSansMarrakech);

console.log("Tableau original inchangé :", favoris);
