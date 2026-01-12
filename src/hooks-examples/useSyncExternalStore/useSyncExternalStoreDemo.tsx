import { useSyncExternalStore } from "react";

// 1. DEFINICIJA VANJSKOG STORA (Browser window)
// subscribe: Funkcija koja prima callback i pretplaćuje ga na 'resize' event
function subscribe(callback: () => void) {
  window.addEventListener("resize", callback);
  return () => window.removeEventListener("resize", callback);
}

// getSnapshot: Funkcija koja vraća trenutnu vrijednost iz browsera
function getSnapshot() {
  return window.innerWidth;
}

// getServerSnapshot: Potrebno za server-side rendering (opciono, ali dobra praksa)
function getServerSnapshot() {
  return 0; // Zadana vrijednost na serveru
}

const UseSyncExternalStoreDemo = () => {
  // Hook se brine o pretplati, čišćenju i re-renderu kada se 'getSnapshot' promijeni
  const width = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  return (
    <div className="hook-demo">
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <h3>Window Width Tracker</h3>
        <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
          Ova komponenta "sluša" direktno browser prozor.
        </p>
      </div>

      <div
        className="testing-box"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          background: "rgba(var(--accent-rgb), 0.1)",
          border: "2px dashed var(--accent-color)",
        }}
      >
        <div style={{ fontSize: "0.9rem", marginBottom: "10px" }}>
          Trenutna širina prozora:
        </div>
        <div
          style={{
            fontSize: "4rem",
            fontWeight: "bold",
            color: "var(--accent-color)",
            fontFamily: "Fira Code",
          }}
        >
          {width}px
        </div>
      </div>

      <div
        style={{
          marginTop: "20px",
          fontSize: "0.8rem",
          color: "var(--text-muted)",
          textAlign: "center",
        }}
      >
        <p>
          💡 <strong>Zadatak:</strong> Otvorite konzolu (F12) sa strane ili
          smanjite/povećajte cijeli prozor browsera. Vidjet ćete kako se broj
          mijenja trenutno!
        </p>
        <p style={{ marginTop: "10px" }}>
          Primijetite da u komponenti <strong>nemamo</strong>{" "}
          <code>useEffect</code>
          niti <code>useState</code>. Sve radi ovaj jedan hook.
        </p>
      </div>
    </div>
  );
};

export default UseSyncExternalStoreDemo;
