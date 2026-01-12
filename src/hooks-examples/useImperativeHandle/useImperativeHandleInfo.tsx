const UseImperativeHandleInfo = () => {
  return (
    <section className="hook-info">
      <a
        href="https://react.dev/reference/react/useImperativeHandle"
        target="_blank"
        rel="noreferrer"
        className="hook-title-link"
      >
        <h2>useImperativeHandle</h2>
      </a>
      <p>
        <strong>useImperativeHandle</strong> vam omogućava da prilagodite
        instancu vrijednosti (handle) koja je izložena parent komponenti kada se
        koristi <code>ref</code>.
      </p>

      <div className="key-points">
        <h3>💡 Kada ovo koristiti?</h3>
        <ul>
          <li>
            <strong>Rijetke situacije:</strong> Koristite ga samo kada ne možete
            riješiti problem preko props-a.
          </li>
          <li>
            <strong>Manipulacija DOM-om:</strong> Fokusiranje inputa,
            skrolovanje na određenu poziciju ili pokretanje animacija.
          </li>
          <li>
            <strong>Integracija sa bibliotekama:</strong> Kada prosljeđujete ref
            nekoj vanjskoj JS biblioteci.
          </li>
        </ul>
      </div>

      <div className="testing-box">
        <strong>Testiraj u Demo sekciji:</strong>
        Kliknite na "Shake & Focus". Vidjet ćete kako parent komponenta direktno
        pokreće animaciju ili fokus unutar child komponente koristeći{" "}
        <code>ref</code>.
      </div>
    </section>
  );
};

export default UseImperativeHandleInfo;
