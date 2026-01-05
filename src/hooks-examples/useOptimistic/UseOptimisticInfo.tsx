const UseOptimisticInfo = () => {
  return (
    <section className="hook-info">
      <a
        href="https://react.dev/reference/react/useOptimistic"
        target="_blank"
        rel="noreferrer"
        className="hook-title-link"
      >
        <h2>useOptimistic</h2>
      </a>
      <p>
        <strong>useOptimistic</strong> je React 19 hook dizajniran za
        poboljšanje percipiranih performansi aplikacije. On omogućava trenutni
        prikaz promjena u interfejsu dok je asinhrona operacija još u toku,
        eliminišući vizuelno čekanje odgovora sa servera.
      </p>
      <div className="key-points">
        <h3>💡 Suština i Sinhronizacija:</h3>
        <ul>
          <li>
            <strong>Trenutni feedback:</strong> UI se ažurira bez čekanja na
            odgovor servera.
          </li>
          <li>
            <strong>Životni vijek:</strong> Optimistično stanje traje{" "}
            <strong>samo dok je asinhrona akcija u toku</strong>.
          </li>
          <li>
            <strong>Finalno usklađivanje:</strong> Čim akcija završi, React
            odbacuje privremeni prikaz i renderuje "pravo" stanje koje smo
            postavili u <code>try</code> ili <code>catch</code> bloku.
          </li>
          <li>
            <strong>Kontrola greške:</strong> Ako akcija ne uspije, imamo izbor:
            ili pustiti React da se vrati na staro stanje (rollback), ili
            eksplicitno dodati informaciju o grešci (kao u našem demo-u).
          </li>
        </ul>
      </div>
      <div className="testing-box error-variant">
        <strong>Testiraj grešku:</strong>
        Upiši riječ <code>"greška"</code> u chat i pritisni Enter da vidiš
        automatski roll-back.
      </div>
    </section>
  );
};
export default UseOptimisticInfo;
