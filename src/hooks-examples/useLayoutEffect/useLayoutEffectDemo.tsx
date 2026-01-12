import { useState, useRef, useLayoutEffect } from "react";

const UseLayoutEffectDemo = () => {
  const [content, setContent] = useState("Ovo je mali tekst.");
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const boxRef = useRef<HTMLDivElement>(null);

  // useLayoutEffect se okida sinkrono nakon promjene DOM-a,
  // ali PRIJE nego sto se browser iscrta.
  useLayoutEffect(() => {
    if (boxRef.current) {
      const { offsetWidth, offsetHeight } = boxRef.current;
      setDimensions({
        width: offsetWidth,
        height: offsetHeight,
      });
    }
  }, [content]);

  return (
    <div className="hook-demo">
      <h3>Active DOM Measurement</h3>
      <p
        style={{
          fontSize: "0.85rem",
          marginBottom: "1.5rem",
          color: "var(--text-muted)",
        }}
      >
        Klikajte na dugmad da promijenite sadržaj. React će izmjeriti box prije
        nego ga vidite, osiguravajući da su dimenzije uvijek tačne.
      </p>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <div style={{ display: "flex", gap: "10px" }}>
          <button onClick={() => setContent("Kratko.")}>Kratki tekst</button>
          <button
            onClick={() =>
              setContent(
                "Ovo je sada jedan znatno duži tekst koji će proširiti naš box."
              )
            }
          >
            Dugi tekst
          </button>
          <button onClick={() => setContent("Ovo je\ntekst u\ntri reda.")}>
            Multi-line
          </button>
        </div>

        <div
          ref={boxRef}
          className="testing-box"
          style={{
            display: "inline-block",
            padding: "20px",
            background: "rgba(var(--accent-rgb), 0.1)",
            border: "2px solid var(--accent-color)",
            whiteSpace: "pre-wrap",
            minWidth: "100px",
            textAlign: "center",
          }}
        >
          {content}
        </div>

        <div
          style={{
            padding: "10px 20px",
            background: "#334155",
            borderRadius: "20px",
            fontSize: "0.9rem",
            color: "var(--accent-color)",
            fontWeight: "bold",
          }}
        >
          Širina: {dimensions.width}px | Visina: {dimensions.height}px
        </div>
      </div>
    </div>
  );
};

export default UseLayoutEffectDemo;
