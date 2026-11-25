// Exercice 3 - Destructuring

// Partie A - Destructuration d'un tableau
const pays = ["Italie", "Japon", "Grèce", "Espagne", "Canada"];

const [premierPays, deuxiemePays] = pays;
console.log("Premier et deuxième pays :", premierPays, deuxiemePays);

const [, , troisiemePays] = pays;
console.log("Troisième pays :", troisiemePays);

const [destinationPrincipale, ...autresPays] = pays;
console.log("Destination principale :", destinationPrincipale);
console.log("Autres pays :", autresPays);

// Partie B - Destructuration d'un objet
const voyage = {
    destination: "Bali",
    prix: 1800,
    duree: 10,
    transport: "Avion",
    hotel: "5 étoiles"
};

const { destination, prix } = voyage;
console.log("Destination et prix :", destination, prix);

const { destination: ville } = voyage;
console.log("Ville :", ville);

const { prix: prixAvecDefaut = 0, duree: dureeAvecDefaut = 1 } = voyage;
console.log("Prix et durée :", prixAvecDefaut, dureeAvecDefaut);

function afficherVoyage({ destination, prix, duree, transport, hotel }) {
    console.log("Informations du voyage :", destination, prix, duree, transport, hotel);
}

afficherVoyage(voyage);
