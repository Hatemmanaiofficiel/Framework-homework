export default function Exercice3() {
  const budget = 1500;
  const message = budget >= 2000
    ? 'Voyage premium'
    : budget >= 1000
      ? 'Voyage économique'
      : 'Budget insuffisant';

  return (
    <article className="td2-exercise">
      <h3>Exercice 3 – Conditions selon le budget</h3>
      <p>Budget : {budget} DT</p>
      <p>{message}</p>
    </article>
  );
}
