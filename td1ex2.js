// ex 

const t = [10, 12, 14, 16, 18];
const a = t[0];
const b = t[1];
console.log(a, b);
const [a1, b1, c1] = t
console.log(a1, b1, c1);
const [, , c2] = t

const reservations = [
{ numero: 101, client: "Nadia", destination: "Bali", montant: 1800,
statut: "Confirmée" },
{ numero: 102, client: "Karim", destination: "Rome", montant: 950,
statut: "En attente" },
{ numero: 103, client: "Leila", destination: "Tokyo", montant: 2500,
statut: "Confirmée" },
{ numero: 104, client: "Sami", destination: "Santorin", montant: 1200,
statut: "Annulée" },
{ numero: 105, client: "Amira", destination: "Djerba", montant: 500,
statut: "Confirmée" }
];

const confirmedReservations = reservations.filter(reservation => reservation.statut === "Confirmée");
console.log(confirmedReservations);
const numdeclient = reservations.map(reservation => reservation.client);
console.log(numdeclient);
const recherche = reservations.find(reservation => reservation.numero === 103);
console.log(recherche);
const totalMontantconfirmed = reservations.reduce((total, reservation) => {
  if (reservation.statut === "Confirmée") {
    return total + reservation.montant;
  }
  return total;
}, 0);
console.log(totalMontantconfirmed);
const reserv = reservations.verify(reservation => reservation.statut === "Confirmée");
console.log(reserv);
const tablist = reservations.map(reservation => reservation.client ,reservation => reservation.destination);
console.log(tablist);