const UseLayoutEffectInfo = () => {
  return (
    <section className="hook-info">
      <a
        href="https://react.dev/reference/react/useLayoutEffect"
        target="_blank"
        rel="noreferrer"
        className="hook-title-link"
      >
        <h2>useLayoutEffect</h2>
      </a>
      <p>
        <strong>useLayoutEffect</strong> je verzija <code>useEffect</code>{" "}
        hook-a koja se pokreće sinhrono odmah nakon što React završi promjene u
        DOM-u, ali
        <strong> prije</strong> nego što browser stigne nacrtati te promjene na
        ekranu.
      </p>

      <div className="key-points">
        <h3>💡 Kada ga koristiti?</h3>
        <ul>
          <li>
            <strong>Mjerenje DOM-a:</strong> Ako trebate saznati širinu, visinu
            ili poziciju elementa prije nego što ga korisnik vidi.
          </li>
          <li>
            <strong>Izbjegavanje titranja (Flickering):</strong> Ako mijenjate
            stil ili poziciju na osnovu mjerenja, obični <code>useEffect</code>{" "}
            može uzrokovati da korisnik na djelić sekunde vidi "staru" poziciju.
          </li>
          <li>
            <strong>Tooltipovi i Popoveri:</strong> Pozicioniranje elemenata
            koji ne smiju izaći van ivica ekrana.
          </li>
        </ul>
      </div>

      <div className="testing-box">
        <strong>Testiraj u Demo sekciji:</strong>
        Vidjet ćete kako mjerimo dimenzije tekstualnog polja. Obratite pažnju
        kako se vrijednosti ažuriraju trenutno i sinhronizovano sa vizuelnim
        prikazom.
      </div>
    </section>
  );
};

export default UseLayoutEffectInfo;
