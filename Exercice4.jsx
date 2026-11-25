export default function Exercice4() {
  const disponible = true;
  const places = 5;

  return (
    <article className="td2-exercise">
      <h3>Exercice 4 – Formation</h3>
      <p>Formation : React JS</p>
      {disponible && <p>Inscriptions ouvertes</p>}
      {disponible && places > 0 && <p>Il reste des places</p>}
    </article>
  );
}
