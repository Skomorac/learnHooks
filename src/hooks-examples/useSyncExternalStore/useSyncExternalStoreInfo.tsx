const UseSyncExternalStoreInfo = () => {
  return (
    <section className="hook-info">
      <a
        href="https://react.dev/reference/react/useSyncExternalStore"
        target="_blank"
        rel="noreferrer"
        className="hook-title-link"
      >
        <h2>useSyncExternalStore</h2>
      </a>
      <p>
        <strong>useSyncExternalStore</strong> je React hook koji vam omogućava
        da se pretplatite na spoljni "store" (skladište podataka) koji se nalazi
        van React-a.
      </p>

      <div className="key-points">
        <h3>💡 Kada je ovo potrebno?</h3>
        <ul>
          <li>
            <strong>Browser API:</strong> Praćenje širine prozora (window
            width), online statusa ili scroll pozicije.
          </li>
          <li>
            <strong>Vanjski Store:</strong> Ako koristite biblioteke za stanje
            koje nisu pisane isključivo za React.
          </li>
          <li>
            <strong>Stabilnost:</strong> Sprečava vizuelne nedosljednosti pri
            korišćenju <em>Concurrent React</em> funkcija (poput onih u{" "}
            <code>useTransition</code>).
          </li>
        </ul>
      </div>

      <div className="testing-box">
        <strong>Testiraj u Demo sekciji:</strong>
        Vidjet ćete real-time prikaz širine vašeg browser prozora. Svaki put
        kada smanjite ili povećate prozor, React će to ispisati bez ijednog
        <code>useEffect</code> poziva unutar same komponente.
      </div>
    </section>
  );
};

export default UseSyncExternalStoreInfo;
