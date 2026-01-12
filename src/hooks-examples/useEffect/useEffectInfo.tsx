const UseEffectInfo = () => {
  return (
    <section className="hook-info">
      <a
        href="https://react.dev/reference/react/useEffect"
        target="_blank"
        rel="noreferrer"
        className="hook-title-link"
      >
        <h2>useEffect</h2>
      </a>
      <p>
        <strong>useEffect</strong> je hook koji vam omogućava da sinhronizujete
        komponentu sa spoljnim sistemom (npr. API-jem, browser API-jem, mrežom).
      </p>

      <div className="key-points">
        <h3>💡 Pravila ponašanja:</h3>
        <ul>
          <li>
            <strong>Bez niza zavisnosti:</strong> Pokreće se nakon{" "}
            <em>svakog</em> renderovanja.
          </li>
          <li>
            <strong>
              Prazan niz <code>[]</code>:
            </strong>{" "}
            Pokreće se samo jednom, pri "montiranju" komponente (onMount).
          </li>
          <li>
            <strong>
              Niz sa zavisnostima <code>[data]</code>:
            </strong>{" "}
            Pokreće se na početku i svaki put kada se neka od zavisnosti
            promijeni.
          </li>
          <li>
            <strong>Cleanup funkcija:</strong> Ako vratite funkciju, React je
            pokreće prije deinstalacije komponente ili prije novog pokretanja
            efekta.
          </li>
        </ul>
      </div>

      <div className="testing-box">
        <strong>Testiraj u Demo sekciji:</strong>
        Vidjet ćete kako tajmer kuca u pozadini i kako React "čisti" resurse
        kada promijenite stranicu, kako aplikacija ne bi trošila memoriju
        uzalud.
      </div>
    </section>
  );
};

export default UseEffectInfo;
