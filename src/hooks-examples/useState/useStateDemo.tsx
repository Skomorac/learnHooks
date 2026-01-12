import { useState } from "react";

const UseStateDemo = () => {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({ name: "Junior", level: 1 });

  // 1. POGREŠAN NAČIN (Batching Issue)
  const problematicUpdate = () => {
    // Ovo će rezurtirati uvećanjem samo za 1, jer count ostaje 'zaključan'
    // na početnu vrijednost tokom ove funkcije.
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  };

  // 2. ISPRAVAN NAČIN (Functional Update)
  const correctUpdate = () => {
    // React garantuje da 'prev' uvijek sadrži najnovije izračunato stanje.
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  };

  // 3. OBJEKTI (Imutabilnost)
  const levelUp = () => {
    // Uvijek kopiramo stari objekat (...user) prije nego promijenimo polje.
    setUser((prev) => ({
      ...prev,
      level: prev.level + 1,
    }));
  };

  return (
    <div className="hook-demo">
      <div
        style={{
          marginBottom: "2rem",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        {/* Sekcija 1: Brojač */}
        <div className="testing-box" style={{ textAlign: "center" }}>
          <h3>
            Brojač:{" "}
            <span style={{ fontSize: "2rem", color: "var(--accent-color)" }}>
              {count}
            </span>
          </h3>
          <div
            style={{
              display: "flex",
              gap: "10px",
              justifyContent: "center",
              marginTop: "15px",
            }}
          >
            <button
              onClick={problematicUpdate}
              style={{ background: "#ef4444" }}
            >
              +3 (Pogrešno)
            </button>
            <button onClick={correctUpdate} style={{ background: "#10b981" }}>
              +3 (Ispravno)
            </button>
            <button
              onClick={() => setCount(0)}
              style={{ background: "var(--text-muted)" }}
            >
              Reset
            </button>
          </div>
          <p
            style={{
              fontSize: "0.8rem",
              marginTop: "15px",
              color: "var(--text-muted)",
              lineHeight: "1.4",
            }}
          >
            💡 <strong>Zašto je crveno dugme "palo"?</strong>
            <br />
            Kada koristite <code>setCount(count + 1)</code>,više puta uzastopno
            React koristi vrijednost iz momenta klika (snapshot). Sva tri poziva
            vide <code>count</code> kao isti broj i zato ga povećaju samo
            jednom.
            <br />
            <br />
            <strong>Zeleno dugme</strong> koristi{" "}
            <code>(prev) ={">"} prev + 1</code>, što govori Reactu da koristi
            "najsvježiju" vrijednost iz memorije za svaki korak.
          </p>
        </div>

        {/* Sekcija 2: Objekti */}
        <div className="testing-box" style={{ textAlign: "center" }}>
          <h3>
            User: {user.name} (Lvl {user.level})
          </h3>
          <button onClick={levelUp} style={{ marginTop: "10px" }}>
            🆙 Level Up!
          </button>
          <div style={{ marginTop: "10px" }}>
            <input
              className="hook-select"
              value={user.name}
              onChange={(e) =>
                setUser((prev) => ({ ...prev, name: e.target.value }))
              }
              placeholder="Promijeni ime..."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseStateDemo;
