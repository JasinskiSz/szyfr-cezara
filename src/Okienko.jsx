import { alfabet } from "./alfabet";

function Okienko({ znak, czyZaszyfrowany, przesuniecie }) {

  const pozycja = alfabet.indexOf(znak);

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

  console.log(szyfruj(pozycja, przesuniecie))

  return (
    <>
      a
      {czyZaszyfrowany}
      {czyZaszyfrowany ? szyfruj(pozycja, przesuniecie) : znak}
    </>
  )
}

export default Okienko;