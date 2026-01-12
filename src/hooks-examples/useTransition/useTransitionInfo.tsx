const UseTransitionInfo = () => {
  return (
    <section className="hook-info">
      <a
        href="https://react.dev/reference/react/useTransition"
        target="_blank"
        rel="noreferrer"
        className="hook-title-link"
      >
        <h2>useTransition</h2>
      </a>
      <p>
        <strong>useTransition</strong> je React hook koji vam omogućava da
        označite određena ažuriranja stanja kao "tranzicije", što znači da ona
        nisu hitna i neće blokirati UI dok se procesiraju.
      </p>

      <div className="key-points">
        <h3>💡 Suština:</h3>
        <ul>
          <li>
            <strong>Non-blocking:</strong> React će prioritet dati hitnim
            stvarima (npr. klik na dugme, kucanje), dok će tranzicije raditi "sa
            strane".
          </li>
          <li>
            <strong>isPending status:</strong> Dobijate boolean koji vam kaže da
            li je tranzicija još u toku, što je savršeno za prikazivanje loading
            indikatora.
          </li>
          <li>
            <strong>Kontrola prekidanja:</strong> Ako se započne nova tranzicija
            dok stara još traje, React će automatski prekinuti staru i
            fokusirati se na novu.
          </li>
        </ul>
      </div>

      <div className="testing-box">
        <strong>Testiraj u Demo sekciji:</strong>
        Kliknite na "Teški Tab" koji simulira učitavanje ogromnog broja
        podataka. Vidjet ćete da aplikacija ostaje responzivna i da možete
        kliknuti na druge tabove čak i dok se onaj teški još "muči" s
        učitavanjem.
      </div>
    </section>
  );
};

export default UseTransitionInfo;
