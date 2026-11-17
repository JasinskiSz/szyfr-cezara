import { useState } from 'react';
import './App.css';
import Okienko from './Okienko';

function App() {
  const [tekst, setTekst] = useState('PIEROGI');
  const [przesuniecie, setPrzesuniecie] = useState(3);
  const [indexZaszyfrowanego, setIndexZaszyfrowanego] = useState(0); // 0 oznacza, że nic nie jest zaszyfrowane

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

      <p>
        {tekst.split('').map(
          (znak, i) => {
            <Okienko key={i}
              znak={znak}
              czyZaszyfrowany={i < indexZaszyfrowanego}
              przesuniecie={przesuniecie} />
          })}
      </p>
    </>
  )
}

export default App
