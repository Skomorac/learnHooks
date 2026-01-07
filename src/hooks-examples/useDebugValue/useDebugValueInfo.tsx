const UseDebugValueInfo = () => {
  return (
    <section className="hook-info">
      <a
        href="https://react.dev/reference/react/useDebugValue"
        target="_blank"
        rel="noreferrer"
        className="hook-title-link"
      >
        <h2>useDebugValue</h2>
      </a>
      <p>
        <strong>useDebugValue</strong> se koristi za dodavanje labele custom
        hook-u u React DevTools-u. On ne utiče na logiku aplikacije, već
        olakšava debagiranje.
      </p>

      <div className="key-points">
        <h3>💡 Specifičnosti:</h3>
        <ul>
          <li>
            <strong>Samo za Custom Hookove:</strong> Ne koristi se direktno u
            komponentama.
          </li>
          <li>
            <strong>React DevTools:</strong> Vidljiv je samo ako imate
            instaliran browser extension za React.
          </li>
          <li>
            <strong>Opciono formatiranje:</strong> Može primiti drugu funkciju
            kao argument koja formatira vrijednost samo kada je DevTools otvoren
            (dobro za performanse).
          </li>
        </ul>
      </div>
    </section>
  );
};
export default UseDebugValueInfo;
