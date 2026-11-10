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
  const [przesuniecie, setPrzesuniecie] = useState(3);
  const [indexZaszyfrowanego, setIndexZaszyfrowanego] = useState(0); // 0 oznacza, że nic nie jest zaszyfrowane

  const zaszyfrowanyTekst = tekst.split("", indexZaszyfrowanego).map((znak) => szyfruj(znak, przesuniecie)).join("");

  function szyfrujCalosc() {
    setIndexZaszyfrowanego(tekst.length);
  }

  function szyfrujNastepnaLitere() {
    setIndexZaszyfrowanego(indexZaszyfrowanego + 1);
  }

  return (
    <>
      <input type="text"
        value={tekst}
        onChange={(e) => {
          setTekst(e.target.value);
          setIndexZaszyfrowanego(0);
        }} />
      <input type="range"
        min={1}
        max={25}
        value={przesuniecie}
        onChange={(e) => {
          setPrzesuniecie(Number(e.target.value));
          setIndexZaszyfrowanego(0);
        }} />

      <p>klucz: {przesuniecie}</p>

      <button onClick={szyfrujNastepnaLitere}>Zaszyfruj następną literę</button>
      <button onClick={() => szyfrujCalosc()}>Zaszyfruj całość</button>
      <button onClick={() => setIndexZaszyfrowanego(0)}>Wyczyść zaszyfrowany tekst</button>

      <p>{zaszyfrowanyTekst}</p>
    </>
  )
}

export default App
