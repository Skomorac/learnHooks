const UseIdInfo = () => {
  return (
    <section className="hook-info">
      <a
        href="https://react.dev/reference/react/useId"
        target="_blank"
        rel="noreferrer"
        className="hook-title-link"
      >
        <h2>useId</h2>
      </a>
      <p>
        <strong>useId</strong> je React hook za generisanje jedinstvenih
        identifikatora (ID) koji se mogu sigurno koristiti za HTML atribute kao
        što je <code>aria-describedby </code>
        ili povezivanje <code>label</code> sa <code>input</code> elementom.
      </p>

      <div className="key-points">
        <h3>💡 Zašto ne Math.random()?</h3>
        <ul>
          <li>
            <strong>Stable ID:</strong> ID ostaje isti čak i pri re-renderovanju
            komponente.
          </li>
          <li>
            <strong>Server Rendering:</strong> Garantuje da će ID generisan na
            serveru biti identičan onome na klijentu (izbjegava{" "}
            <em>Hydration mismatch</em>).
          </li>
          <li>
            <strong>Višestruka upotreba:</strong> Ako istu komponentu koristiš 5
            puta na stranici, svaka će dobiti svoj unikatni ID bez da ti moraš o
            tome razmišljati.
          </li>
        </ul>
      </div>

      <div className="testing-box">
        <strong>Testiraj u Demo sekciji:</strong>
        Pogledajte HTML kod preko Inspect elementa (F12). Vidjet ćete da inputi
        imaju unikatne ID-jeve (npr. <code>:r1:</code>, <code>:r2:</code>) koji
        su automatski kreirani.
      </div>
    </section>
  );
};

export default UseIdInfo;
