import Exercice1 from './Exercice1';
import Etudiant from './Exercice2';
import Exercice3 from './Exercice3';
import Exercice4 from './Exercice4';
import './TD2.css';

export default function TD2() {
  return (
    <section className="td2-section">
      <h2>TD2 – Exercices React</h2>
      <div className="td2-grid">
        <Exercice1 />
        <Etudiant />
        <Exercice3 />
        <Exercice4 />
      </div>
    </section>
  );
}
