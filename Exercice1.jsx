import Resultat from './Resultat';

export default function Exercice1() {
  const moyenne = 14;
  const moyenneRemplacee = 8;

  return (
    <article className="td2-exercise">
      <h3>Exercice 1 – Résultat de l’étudiant</h3>
      <Resultat moyenne={moyenne} />
      <p>
        Si on remplace 14 par 8, le résultat devient « Refusé » et le style
        passe au rouge :
      </p>
      <Resultat moyenne={moyenneRemplacee} />
    </article>
  );
}
