const UseDeferredValueInfo = () => {
  return (
    <section className="hook-info">
      <a
        href="https://react.dev/reference/react/useDeferredValue"
        target="_blank"
        rel="noreferrer"
        className="hook-title-link"
      >
        <h2>useDeferredValue</h2>
      </a>
      <p>
        <strong>useDeferredValue</strong> je React hook koji vam omogućava da
        odložite ažuriranje dijela UI-a koji je "težak" za renderovanje. On
        zadržava staru vrijednost dok se nova verzija priprema u pozadini.
      </p>

      <div className="key-points">
        <h3>💡 Ključne prednosti:</h3>
        <ul>
          <li>
            <strong>Responsivnost:</strong> Glavni input ostaje brz i
            responzivan, čak i ako lista koju filtrirate ima hiljade elemenata.
          </li>
          <li>
            <strong>Prioriteti:</strong> React prvo renderuje brze promjene
            (kucanje), a zatim, kada procesor bude slobodan, renderuje spori dio
            (listu).
          </li>
          <li>
            <strong>Bez Spinnera:</strong> Umjesto prikazivanja loading
            spinnera, korisnik vidi stari sadržaj dok novi ne bude spreman, što
            je često bolji UX.
          </li>
        </ul>
      </div>

      <div className="testing-box">
        <strong>Testiraj u Demo sekciji:</strong>
        Brzo kucajte u polje za pretragu, možete koristiti brojeve od 1 do 4999.
        Primijetit ćete da polje reaguje trenutno, dok lista "kasni" djelić
        sekunde kako ne bi zagušila browser.
      </div>
    </section>
  );
};

export default UseDeferredValueInfo;
