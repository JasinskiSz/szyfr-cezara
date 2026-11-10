import { useState } from 'react';
import './App.css'

const alfabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function szyfruj(znak, przesuniecie) {
  // znajduje jego pozycję w alfabecie
  const pozycja = alfabet.indexOf(znak);

  // Znaki spoza alfabetu zwraca bez zmian
  if (pozycja === -1) {
    return znak;
  }

  // dodaje przesunięcie
  // zawija wynik na początek alfabetu
  const pozycjaPoPrzesunieciu = (pozycja + przesuniecie) % alfabet.length;

  return alfabet[pozycjaPoPrzesunieciu];
}

function App() {
  const [tekst, setTekst] = useState('PIEROGI');
  const [przesuniecie, setPrzesuniecie] = useState("3");

  const zaszyfrowanyTekst = tekst.split("").map((znak) => szyfruj(znak, przesuniecie)).join("");

  return (
    <>
      <input type="text"
        value={tekst}
        onChange={(e) => setTekst(e.target.value)} />
      <input type="range"
        min={1}
        max={25}
        value={przesuniecie}
        onChange={(e) => {
          const wartosc = Number(e.target.value);
          console.log(typeof wartosc)
          console.log(wartosc)
          setPrzesuniecie(wartosc);
        }} />

      <p>klucz: {przesuniecie}</p>
      <p>{zaszyfrowanyTekst}</p>
    </>
  )
}

export default App
