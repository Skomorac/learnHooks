const UseRefInfo = () => {
  return (
    <section className="hook-info">
      <a
        href="https://react.dev/reference/react/useRef"
        target="_blank"
        rel="noreferrer"
        className="hook-title-link"
      >
        <h2>useRef</h2>
      </a>
      <p>
        <strong>useRef</strong> je React hook koji vam omogućava da
        referencirate vrijednost koja nije potrebna za iscrtavanje
        (renderovanje). On vraća objekat sa svojstvom <code>current</code>.
      </p>

      <div className="key-points">
        <h3>💡 Dvije glavne uloge:</h3>
        <ul>
          <li>
            <strong>Pristup DOM elementima:</strong> Direktno fokusiranje
            inputa, mjerenje elemenata ili integracija sa vanjskim bibliotekama.
          </li>
          <li>
            <strong>Čuvanje "tihih" vrijednosti:</strong> Čuvanje podataka koji
            se ne bi smjeli izgubiti pri re-renderu, ali čija promjena ne treba
            da pokrene novi render (npr. ID tajmera, prethodne vrijednosti
            props-a).
          </li>
          <li>
            <strong>Postojanost:</strong> Vrijednost unutar{" "}
            <code>ref.current </code>
            ostaje ista tokom cijelog životnog vijeka komponente.
          </li>
        </ul>
      </div>

      <div className="testing-box">
        <strong>Testiraj u Demo sekciji:</strong>
        Vidjet ćete primjer sa automatskim fokusom na input i brojač
        renderovanja koji se ne prikazuje na ekranu, ali "pamti" koliko se puta
        komponenta osvježila.
      </div>
    </section>
  );
};

export default UseRefInfo;
