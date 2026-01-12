import { useState, useRef, useImperativeHandle, forwardRef } from "react";

// 1. CHILD KOMPONENTA
// Moramo koristiti forwardRef da bi child prihvatio ref od parenta
const FancyInput = forwardRef((_props, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isShaking, setIsShaking] = useState(false);

  // OVDJE definisemo sta tacno izlazemo parentu
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current?.focus();
    },
    shake: () => {
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
    },
  }));

  return (
    <input
      ref={inputRef}
      className={`hook-select ${isShaking ? "shake-animation" : ""}`}
      placeholder="Ja sam fancy input..."
      style={{
        transition: "all 0.3s",
        border: isShaking
          ? "2px solid #ef4444"
          : "1px solid var(--border-color)",
        width: "100%",
      }}
    />
  );
});

// 2. PARENT KOMPONENTA
const UseImperativeHandleDemo = () => {
  const customInputRef = useRef<{ focus: () => void; shake: () => void }>(null);

  return (
    <div className="hook-demo">
      <h3>Parent-to-Child Imperative Calls</h3>
      <p
        style={{
          fontSize: "0.85rem",
          marginBottom: "1.5rem",
          color: "var(--text-muted)",
        }}
      >
        Parent komponenta direktno "komanduje" child komponenti preko Ref-a.
      </p>

      <div
        style={{
          maxWidth: "300px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <FancyInput ref={customInputRef} />

        <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
          <button onClick={() => customInputRef.current?.focus()}>
            🎯 Focus Input
          </button>
          <button
            onClick={() => customInputRef.current?.shake()}
            style={{ background: "#ef4444" }}
          >
            🫨 Shake It!
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseImperativeHandleDemo;
