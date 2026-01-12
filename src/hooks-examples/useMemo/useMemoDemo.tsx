import { useState, useMemo } from "react";

const UseMemoDemo = () => {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(10);
  const [isOptimized, setIsOptimized] = useState(true);

  // Simulirana teška kalkulacija
  const slowCalculation = (num: number) => {
    console.log("⏳ Kalkulišem...");
    let result = 0;
    for (let i = 0; i < 500000000; i++) {
      result += Math.sqrt(i);
    }
    return num + Math.floor(result * 0); // Vraća originalni num, ali je potrošio vrijeme
  };

  // Verzija sa useMemo
  const optimizedValue = useMemo(() => slowCalculation(number), [number]);

  // KLJUČNA PROMJENA: Pozivamo slowCalculation samo ako NISMO u optimized modu
  // Ako je isOptimized TRUE, slowCalculation se NEĆE pozvati osim unutar useMemo-a
  const finalValue = isOptimized ? optimizedValue : slowCalculation(number);

  return (
    <div className="hook-demo">
      <div
        style={{
          marginBottom: "2rem",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
          <button
            onClick={() => {
              setCount(0);
              setIsOptimized(!isOptimized);
            }}
            style={{ background: isOptimized ? "#10b981" : "#f59e0b" }}
          >
            Mod: {isOptimized ? "useMemo (ON)" : "Normal (OFF)"}
          </button>
        </div>

        <p
          style={{
            fontSize: "0.9rem",
            color: isOptimized ? "#10b981" : "#f59e0b",
            textAlign: "center",
            fontWeight: "500",
          }}
        >
          {isOptimized
            ? "✅ Sada je brzo: Klikni na brojač i broj će se odmah promijeniti."
            : "⚠️ Sada je sporo: Klikni na brojač i vidjet ćeš lag (pauzu) od oko sekundu."}
        </p>

        <div
          className="testing-box"
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <p>Obični brojač:</p>
            <button
              onClick={() => setCount((c) => c + 1)}
              style={{ fontSize: "1.5rem" }}
            >
              🔢 {count}
            </button>
            <p style={{ fontSize: "0.7rem", marginTop: "5px" }}>
              Klikni me brzo više puta!
            </p>
          </div>

          <div style={{ textAlign: "center" }}>
            <p>Unos za kalkulaciju:</p>
            <input
              type="number"
              value={number}
              onChange={(e) => setNumber(parseInt(e.target.value) || 0)}
              style={{ width: "80px", textAlign: "center" }}
              className="hook-select"
            />
            <p style={{ marginTop: "10px" }}>
              Rezultat: <strong>{finalValue}</strong>
            </p>
          </div>
        </div>
      </div>
      <p
        style={{
          fontSize: "0.8rem",
          color: "var(--text-muted)",
          textAlign: "center",
        }}
      >
        Otvori konzolu (F12) da vidiš kada se ispisuje "⏳ Kalkulišem...".
      </p>
    </div>
  );
};

export default UseMemoDemo;
