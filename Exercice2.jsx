export default function Etudiant() {
  const nom = 'Ahmed';
  const prenom = 'Ali';
  const age = 20;
  const filiere = 'Informatique';

  return (
    <article className="td2-exercise">
      <h3>Exercice 2 – Informations de l’étudiant</h3>
      <p>Nom complet : {prenom} {nom}</p>
      <p>Nom : {nom}</p>
      <p>Prénom : {prenom}</p>
      <p>Âge : {age} ans</p>
      <p>Filière : {filiere}</p>
    </article>
  );
}
