import { useState, useTransition, memo } from "react";

const HeavyTab = memo(() => {
  const startTime = performance.now();
  while (performance.now() - startTime < 1000) {}

  const items = [];
  for (let i = 0; i < 10000; i++) {
    items.push(<li key={i}>Teška stavka #{i}</li>);
  }

  return (
    <div style={{ marginTop: "1rem" }}>
      <p>✅ Teški podaci su konačno renderovani.</p>
      <ul
        style={{
          maxHeight: "250px",
          overflowY: "auto",
          listStyle: "none",
          padding: 0,
        }}
      >
        {items}
      </ul>
    </div>
  );
});

const UseTransitionDemo = () => {
  const [isPending, startTransition] = useTransition();
  const [tab, setTab] = useState("pocetna");
  const [isOptimized, setIsOptimized] = useState(true);

  function selectTab(nextTab: string) {
    if (isOptimized) {
      startTransition(() => {
        setTab(nextTab);
      });
    } else {
      // Mod: OFF - Obično ažuriranje (blocking)
      setTab(nextTab);
    }
  }

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
              setTab("pocetna");
              setIsOptimized(!isOptimized);
            }}
            style={{ background: isOptimized ? "#10b981" : "#f59e0b" }}
          >
            Mod: {isOptimized ? "useTransition (ON)" : "Normal (OFF)"}
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
            ? "✅ Kliknite na Teški Tab i odmah nazad na Početnu - radit će!"
            : "⚠️ Kliknite na Teški Tab i odmah nazad na Početnu - zaledit će se!"}
        </p>

        <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
          <button
            onClick={() => selectTab("pocetna")}
            style={{
              border:
                tab === "pocetna" ? "2px solid var(--accent-color)" : "none",
            }}
          >
            Početna
          </button>
          <button
            onClick={() => selectTab("teski-tab")}
            style={{
              background:
                tab === "teski-tab" ? "var(--accent-color)" : "#334155",
              opacity: isPending ? 0.6 : 1,
            }}
          >
            {isPending ? "Učitavam..." : "Teški Tab 🔥"}
          </button>
        </div>
      </div>

      <div
        style={{
          padding: "1rem",
          border: "1px solid",
          borderColor: isOptimized ? "var(--border-color)" : "#f59e0b",
          borderRadius: "12px",
          minHeight: "200px",
        }}
      >
        {isPending && (
          <p style={{ color: "var(--accent-color)" }}>
            ⏳ React radi u pozadini, aplikacija nije zaleđena...
          </p>
        )}

        {tab === "pocetna" && (
          <p>Dobrodošli na početnu stranu. Sve radi brzo!</p>
        )}
        {tab === "teski-tab" && <HeavyTab />}
      </div>
    </div>
  );
};

export default UseTransitionDemo;
