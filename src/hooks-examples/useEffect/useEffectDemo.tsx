import { useState, useEffect } from "react";

const UseEffectDemo = () => {
  const [seconds, setSeconds] = useState(0);
  const [isEffectEnabled, setIsEffectEnabled] = useState(true);

  // LOGIKA SA EFFECTOM (Sigurna verzija)
  useEffect(() => {
    if (!isEffectEnabled) return;

    console.log("🚀 Effect okinut: Pokrećem tajmer...");

    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    // CLEANUP FUNKCIJA (Ključni dio!)
    return () => {
      console.log("🧹 Cleanup: Brišem tajmer da spriječim memory leak.");
      clearInterval(interval);
    };
  }, [isEffectEnabled]); // Reaguje samo na promjenu ON/OFF prekidača

  // LOGIKA BEZ EFFECTA (Opasna verzija)
  // Zašto je ovo loše? Ako bismo ovo pokrenuli van useEffect-a,
  // setInterval bi se kreirao iznova na svaki render i nikada se ne bi obrisao!

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
              setSeconds(0);
              setIsEffectEnabled(!isEffectEnabled);
            }}
            style={{ background: isEffectEnabled ? "#10b981" : "#ef4444" }}
          >
            Mod:{" "}
            {isEffectEnabled
              ? "Cleanup Aktivan (SIGURNO)"
              : "Cleanup UGAŠEN (EKSPERIMENT)"}
          </button>
        </div>

        <p
          style={{
            fontSize: "0.9rem",
            color: isEffectEnabled ? "#10b981" : "#ef4444",
            textAlign: "center",
            fontWeight: "500",
          }}
        >
          {isEffectEnabled
            ? "✅ React će uredno obrisati tajmer kada napustite ovaj hook."
            : "🚨 PAŽNJA: Isključili smo cleanup logiku. U stvarnom svijetu ovo bi srušilo aplikaciju."}
        </p>

        <div
          className="testing-box"
          style={{ textAlign: "center", background: "rgba(255,255,255,0.05)" }}
        >
          <h2 style={{ fontSize: "3rem", margin: "0" }}>{seconds}s</h2>
          <p>Vrijeme provedeno na ovoj stranici</p>
        </div>
      </div>

      <div
        style={{
          marginTop: "1rem",
          fontSize: "0.8rem",
          color: "var(--text-muted)",
        }}
      >
        <p>
          💡 Posmatrajte konzolu (F12) dok mijenjate modove ili napuštate
          stranicu.
        </p>
      </div>
    </div>
  );
};

export default UseEffectDemo;
