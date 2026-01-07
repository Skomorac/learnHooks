const UseContextInfo = () => {
  return (
    <section className="hook-info">
      <a
        href="https://react.dev/reference/react/useContext"
        target="_blank"
        rel="noreferrer"
        className="hook-title-link"
      >
        <h2>useContext</h2>
      </a>
      <p>
        <strong>useContext</strong> je React hook koji omogućava komponentama da
        pristupe podacima (context-u) bez potrebe da ih ručno proslijeđuju kroz
        svaki nivo stala (<em>prop drilling</em>).
      </p>

      <div className="key-points">
        <h3>💡 Kada koristiti Context?</h3>
        <ul>
          <li>
            <strong>Globalni podaci:</strong> Idealno za teme (light/dark),
            informacije o ulogovanom korisniku ili jezičke postavke.
          </li>
          <li>
            <strong>Izbjegavanje Prop Drilling-a:</strong> Kada komponenta na
            nivou 5 treba podatke iz nivoa 1, a nivoi 2, 3 i 4 te podatke uopšte
            ne koriste.
          </li>
          <li>
            <strong>Provider-Consumer patern:</strong> Podaci su dostupni svim
            potomcima unutar <code>Provider</code> komponente.
          </li>
        </ul>
      </div>

      <div className="testing-box">
        <strong>Testiraj u Demo sekciji:</strong>
        Primijetite kako komponente "Level 2" direktno komuniciraju sa stanjem
        iz "Level 1" bez ikakvih propsa. Kliknite na dugme za promjenu teme i
        posmatrajte kako se podaci trenutno sinhronizuju na svim nivoima.
      </div>
    </section>
  );
};

export default UseContextInfo;
