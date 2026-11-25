// Exercice 4 - Spread Operator (...)

// Partie A - Manipulation des tableaux
const destinationsEurope = ["Rome", "Paris", "Madrid"];
const destinationsAsie = ["Tokyo", "Bali", "Bangkok"];

const copieDestinationsEurope = [...destinationsEurope];
console.log("Copie de l'Europe :", copieDestinationsEurope);

const toutesLesDestinations = [...destinationsEurope, ...destinationsAsie];
console.log("Toutes les destinations :", toutesLesDestinations);

const avecLisbonneAuDebut = ["Lisbonne", ...destinationsEurope];
console.log("Lisbonne au début :", avecLisbonneAuDebut);

const avecLondresALaFin = [...destinationsEurope, "Londres"];
console.log("Londres à la fin :", avecLondresALaFin);

const sansParis = destinationsEurope.filter(destination => destination !== "Paris");
console.log("Destinations sans Paris :", sansParis);

// Partie B - Manipulation des objets
const reservation = {
    numero: 201,
    client: "Nadia",
    destination: "Bali",
    statut: "En attente"
};

const copieReservation = { ...reservation };
console.log("Copie de la réservation :", copieReservation);

const reservationConfirmee = { ...reservation, statut: "Confirmée" };
console.log("Réservation confirmée :", reservationConfirmee);

const reservationAvecAssurance = { ...reservation, assurance: true };
console.log("Réservation avec assurance :", reservationAvecAssurance);

const reservationModifiee = {
    ...reservation,
    statut: "Confirmée",
    destination: "Tokyo"
};
console.log("Réservation modifiée :", reservationModifiee);
