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
        <h3>Ključne stavke:</h3>
        <ul>
          <li>
            Vraća <code>[state, formAction, isPending]</code>.
          </li>
          <li>
            Idealno za forme: automatski upravlja <code>isPending</code> stanjem
            dok asinhrona akcija traje.
          </li>
          <li>
            Zamjenjuje ručno pisanje <code>useState</code> za error, success i
            loading stanja kod slanja formi.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default UseActionStateInfo;
