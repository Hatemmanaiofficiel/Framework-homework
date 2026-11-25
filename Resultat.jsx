import './Resultat.css';

export default function Resultat({ moyenne }) {
  const estAdmis = moyenne >= 10;

  return (
    <div className={estAdmis ? 'admis' : 'refuse'}>
      <p>Moyenne : {moyenne}</p>
      <p>{estAdmis ? 'Admis' : 'Refusé'}</p>
    </div>
  );
}
