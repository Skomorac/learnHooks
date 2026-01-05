const UseActionStateInfo = () => {
  return (
    <section className="hook-info">
      <h2>useActionState</h2>
      <p>
        <strong>useActionState</strong> je React 19 hook koji ti omogućava da
        upravljaš stanjem na osnovu rezultata neke "akcije" (obično form
        action).
      </p>

      <div className="key-points">
        <h3>💡 Suština na našem primjeru:</h3>
        <p>U našem demo newsletteru, ovaj hook rješava tri velika problema:</p>
        <ul>
          <li>
            <strong>Loading stanje:</strong> <code>isPending</code> postaje{" "}
            <code>true</code> čim klikneš na dugme i automatski se vraća na{" "}
            <code>false</code> kad funkcija završi. Nema više{" "}
            <code>setIsLoading(true)</code> u try/catch bloku!
          </li>
          <li>
            <strong>Upravljanje podacima:</strong> Funkcija prima{" "}
            <code>formData</code> direktno, što znači da ne moraš imati{" "}
            <code>onChange</code> na svakom inputu.
          </li>
          <li>
            <strong>Povratna informacija:</strong> <code>state</code> varijabla
            direktno čuva ono što naša funkcija vrati (poruku o uspjehu ili
            grešku), što odmah prikazujemo korisniku.
          </li>
        </ul>
      </div>

      <div className="theory-snippet">
        <p>
          <em>
            Ukratko: Spaja asinhronu logiku, prosljeđivanje podataka iz forme i
            praćenje statusa u jedan jednostavan niz.
          </em>
        </p>
      </div>
    </section>
  );
};

export default UseActionStateInfo;
