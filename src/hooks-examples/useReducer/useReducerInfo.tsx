const UseReducerInfo = () => {
  return (
    <section className="hook-info">
      <a
        href="https://react.dev/reference/react/useReducer"
        target="_blank"
        rel="noreferrer"
        className="hook-title-link"
      >
        <h2>useReducer</h2>
      </a>
      <p>
        <strong>useReducer</strong> je React hook koji vam omogućava da
        upravljate kompleksnim stanjima kroz "reducer" funkciju{" "}
        <strong>umjesto da direktno mijenjate stanje</strong>. Svu logiku
        promjene stanja izmještate u jednu funkciju koja kontroliše kako se
        podaci smiju mijenjati.
      </p>

      <div className="key-points">
        <h3>💡 Kada je bolji od useState?</h3>
        <ul>
          <li>
            <strong>Kompleksna logika:</strong> Kada promjena jednog dijela
            stanja zavisi od drugog dijela ili prethodnog stanja.
          </li>
          <li>
            <strong>Povezane akcije:</strong> Kada imate više različitih načina
            da ažurirate isto stanje (npr. dodaj, obriši, resetuj).
          </li>
          <li>
            <strong>Preglednost:</strong> Sva logika ažuriranja je na jednom
            mjestu (u reducer-u), van same komponente.
          </li>
        </ul>
      </div>

      <div className="testing-box">
        <strong>Testiraj u Demo sekciji:</strong>
        Vidjet ćete To-Do listu. Svaki klik na "Dodaj", "Obriši" ili "Završi"
        šalje specifinu akciju (dispatch) koju naš centralni{" "}
        <code>reducer</code> obrađuje.
      </div>
    </section>
  );
};

export default UseReducerInfo;
