const UseStateInfo = () => {
  return (
    <section className="hook-info">
      <a
        href="https://react.dev/reference/react/useState"
        target="_blank"
        rel="noreferrer"
        className="hook-title-link"
      >
        <h2>useState</h2>
      </a>
      <p>
        <strong>useState</strong> je osnovni React hook koji vam omogućava da
        dodate "stanje" (state) funkcionalnim komponentama. Čuva podatke između
        re-renderovanja.
      </p>

      <div className="key-points">
        <h3>💡 Ključna pravila:</h3>
        <ul>
          <li>
            <strong>Asinhronost:</strong> Poziv <code>setState</code> ne mijenja
            promjenljivu odmah, već zakazuje novi render sa novom vrijednošću.
          </li>
          <li>
            <strong>Imutabilnost:</strong> Nikada ne mijenjajte objekte ili
            nizove direktno! Uvijek kreirajte novu kopiju (npr. koristeći spread
            operaciju <code>[...]</code>).
          </li>
          <li>
            <strong>Functional updates:</strong> Ako novo stanje zavisi od
            starog, uvijek koristite callback formu:{" "}
            <code>setState(prev ={">"} prev + 1)</code>.
          </li>
        </ul>
      </div>

      <div className="testing-box">
        <strong>Testiraj u Demo sekciji:</strong>
        Vidjet ćete razliku između običnog ažuriranja i funkcionalnog
        ažuriranja, te kako React grupiše više promjena u jedan render.
      </div>
    </section>
  );
};

export default UseStateInfo;
