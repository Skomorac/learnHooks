import { useState, useDeferredValue, memo } from "react";

const HeavyList = memo(({ query }: { query: string }) => {
  const items = [];

  const startTime = performance.now();
  while (performance.now() - startTime < 200) {
    // Vještački "težak" render
  }

  for (let i = 0; i < 5000; i++) {
    if (i.toString().includes(query) || query === "") {
      items.push(<li key={i}>Stavka #{i}</li>);
    }
  }

  return (
    <div>
      {/* Dodajemo brojač rezultata unutar teške komponente */}
      <p
        style={{
          fontSize: "0.8rem",
          marginBottom: "0.5rem",
          textAlign: "left",
          color: "var(--text-main)",
        }}
      >
        Pronađeno rezultata: <strong>{items.length}</strong>
      </p>

      <ul
        style={{
          maxHeight: "300px",
          overflowY: "auto",
          listStyle: "none",
          padding: 0,
          opacity: query !== "" ? 0.7 : 1,
        }}
      >
        {items.length > 0 ? items : <li>Nema rezultata.</li>}
      </ul>
    </div>
  );
});

const UseDeferredValueDemo = () => {
  const [query, setQuery] = useState("");
  const [isOptimized, setIsOptimized] = useState(true);

  const deferredQuery = useDeferredValue(query);
  const queryForList = isOptimized ? deferredQuery : query;
  const isStale = isOptimized && query !== deferredQuery;

  return (
    <div className="hook-demo">
      <div
        style={{
          marginBottom: "2rem",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
          <button
            onClick={() => {
              setQuery("");
              setIsOptimized(!isOptimized);
            }}
            style={{ background: isOptimized ? "#10b981" : "#f59e0b" }}
          >
            Mod: {isOptimized ? "useDeferredValue (ON)" : "Normal (OFF)"}
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
            ? "✅ Brojač i lista će se ažurirati sa malim zakašnjenjem."
            : "⚠️ Sve se ažurira odmah, ali input će jako zapinjati."}
        </p>

        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Brzo kucajte brojeve..."
          className="hook-select"
          style={{ width: "100%" }}
        />

        {isStale && (
          <p
            style={{
              color: "var(--accent-color)",
              fontSize: "0.8rem",
              margin: 0,
              textAlign: "center",
            }}
          >
            ⏳ Preračunavam rezultate...
          </p>
        )}
      </div>

      <div
        style={{
          border: "1px solid",
          borderColor: isOptimized ? "var(--border-color)" : "#f59e0b",
          padding: "15px",
          borderRadius: "8px",
          background: isStale ? "rgba(255,255,255,0.02)" : "transparent",
        }}
      >
        <HeavyList query={queryForList} />
      </div>
    </div>
  );
};

export default UseDeferredValueDemo;
