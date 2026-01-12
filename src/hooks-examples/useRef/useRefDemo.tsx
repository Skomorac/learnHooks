import { useState, useRef, useEffect } from "react";

const UseRefDemo = () => {
  const [count, setCount] = useState(0);

  // 1. DOM REF: Koristimo ga da direktno manipulišemo inputom
  const inputRef = useRef<HTMLInputElement>(null);

  // 2. MUTABLE REF: Brojimo koliko puta se komponenta renderovala
  // BITNO: Ažuriranje ovog ref-a NEĆE pokrenuti novi render
  const renderCount = useRef(0);

  useEffect(() => {
    // Svaki put kad se desi render, povećamo renderCount.
    renderCount.current += 1;
  });

  const handleFocus = () => {
    // Direktno pristupamo HTML elementu i pozivamo native JS metodu .focus()
    inputRef.current?.focus();
    if (inputRef.current) {
      inputRef.current.style.borderColor = "var(--accent-color)";
    }
  };

  return (
    <div className="hook-demo">
      <div style={{ marginBottom: "2rem", textAlign: "center" }}>
        <h3>DOM vs Data Persistence</h3>
        <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
          useRef čuva vrijednosti "ispod radara" Reactovog re-renderovanja.
        </p>
      </div>

      <div
        className="testing-box"
        style={{ display: "flex", flexDirection: "column", gap: "20px" }}
      >
        {/* Primjer 1: DOM Manipulacija */}
        <div
          style={{
            borderBottom: "1px solid var(--border-color)",
            paddingBottom: "15px",
          }}
        >
          <p style={{ marginBottom: "10px" }}>1. Pristup DOM elementu:</p>
          <div style={{ display: "flex", gap: "10px" }}>
            <input
              ref={inputRef}
              type="text"
              placeholder="Klikni dugme da me fokusiraš..."
              className="hook-select"
              style={{ flex: 1 }}
            />
            <button onClick={handleFocus}>🎯 Fokusiraj</button>
          </div>
        </div>

        {/* Primjer 2: Čuvanje podataka bez rendera */}
        <div>
          <p style={{ marginBottom: "10px" }}>
            2. Čuvanje podataka (ne trigeruje render):
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <button onClick={() => setCount((c) => c + 1)}>
              🔢 Povećaj State: {count}
            </button>
            <div style={{ textAlign: "right", fontSize: "0.9rem" }}>
              <p>Komponenta je renderovana:</p>
              <code
                style={{ fontSize: "1.2rem", color: "var(--accent-color)" }}
              >
                {renderCount.current} puta
              </code>
            </div>
          </div>
          <p
            style={{
              fontSize: "0.75rem",
              color: "var(--text-muted)",
              marginTop: "10px",
            }}
          >
            Primijetit ćete da se broj rendera poveća u kodu, ali se na ekranu
            osvježi tek kada kliknete na "Povećaj State" (jer ref sam ne
            osvježava UI).
          </p>
        </div>
      </div>
    </div>
  );
};

export default UseRefDemo;
