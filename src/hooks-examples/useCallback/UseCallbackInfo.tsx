const UseCallbackInfo = () => {
  return (
    <section className="hook-info">
      <a
        href="https://react.dev/reference/react/useCallback"
        target="_blank"
        rel="noreferrer"
        className="hook-title-link"
      >
        <h2>useCallback</h2>
      </a>
      <p>
        <strong>useCallback</strong> je React hook koji ti omogućava da keširaš
        definiciju funkcije između re-renderovanja. Umjesto da kreira novu
        funkciju svaki put, React će vratiti istu instancu funkcije sve dok se
        njene zavisnosti ne promijene.
      </p>

      <div className="key-points">
        <h3>💡 Kada je ovaj hook neophodan?</h3>
        <ul>
          <li>
            <strong>Očuvanje identiteta:</strong> U JavaScript-u,{" "}
            <code>{`function() {} `}</code>
            uvijek kreira <em>različitu</em> funkciju. <code>useCallback</code>{" "}
            osigurava da referenca ostane ista.
          </li>
          <li>
            <strong>Optimizacija Child komponenti:</strong> Koristi se kada
            prosljeđuješ funkciju komponenti koja je umotana u{" "}
            <code>React.memo</code>. Bez ovoga, child će se renderovati svaki
            put jer "vidi" novu funkciju.
          </li>
          <li>
            <strong>Sinergija sa useEffect:</strong> Ako je funkcija zavisnost u
            nekom drugom hook-u (npr. <code>useEffect</code>),{" "}
            <code>useCallback</code> sprečava nepotrebno pokretanje tog efekta.
          </li>
        </ul>
      </div>

      <div className="testing-box">
        <strong>Testiraj vizuelno:</strong>
        Obratite pažnju na crveni bedž <strong>"Renderovan"</strong> iznad liste
        u Demo sekciji. Prebacite mod klikom na gumb <strong>Mod</strong> i
        kliknite na brojač – vidjet ćete kako se lista nepotrebno re-renderuje
        pri svakom kliku. Zatim vratite na <strong>Mod</strong> i vidjet ćete da
        bedž ostaje miran, jer React prepoznaje da je funkcija identična onoj iz
        prošlog rendera.
      </div>
    </section>
  );
};

export default UseCallbackInfo;
