const UseMemoInfo = () => {
  return (
    <section className="hook-info">
      <a
        href="https://react.dev/reference/react/useMemo"
        target="_blank"
        rel="noreferrer"
        className="hook-title-link"
      >
        <h2>useMemo</h2>
      </a>
      <p>
        <strong>useMemo</strong> je React hook koji vam omogućava da keširate
        rezultat skupe kalkulacije između re-renderovanja.
      </p>

      <div className="key-points">
        <h3>💡 Kada ga koristiti?</h3>
        <ul>
          <li>
            <strong>Skupa računanja:</strong> Filtriranje velikih listi,
            kompleksne matematičke operacije ili transformacija podataka.
          </li>
          <li>
            <strong>Referencijalni integritet:</strong> Kada prosleđujete objekt
            ili niz childu koji je umotan u <code>React.memo</code>.
          </li>
          <li>
            <strong>Izbjegavanje bespotrebnog rada:</strong> React će samo
            jednom izračunati vrijednost i čuvati je sve dok se zavisnosti ne
            promijene.
          </li>
        </ul>
      </div>

      <div className="testing-box">
        <strong>Testiraj u Demo sekciji:</strong>
        Vidjet ćete razliku u brzini između optimizovane i neoptimizovane
        kalkulacije prostoih brojeva. Obratite pažnju na logove i "lag" pri
        kucanju.
      </div>
    </section>
  );
};

export default UseMemoInfo;
