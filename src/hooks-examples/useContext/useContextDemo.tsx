import { createContext, useContext, useState } from "react";

// 1. Definisanje tipova
type Theme = "light" | "dark";
interface UserContextType {
  user: string;
  theme: Theme;
  toggleTheme: () => void;
}

// 2. Kreiranje Context-a
const DashboardContext = createContext<UserContextType | null>(null);

// 3. Child komponenta (Deeply Nested)
const ThemeStatus = () => {
  const context = useContext(DashboardContext);

  if (!context) return null;

  const isDark = context.theme === "dark";

  return (
    <div
      style={{
        marginTop: "1rem",
        padding: "1rem",
        borderRadius: "8px",
        background: isDark ? "#334155" : "#f1f5f9",
        color: isDark ? "#f1f5f9" : "#334155",
        border: "1px solid var(--border-color)",
        transition: "all 0.3s ease",
      }}
    >
      <p>
        Trenutna tema: <strong>{context.theme.toUpperCase()}</strong>
      </p>
      <p>
        Prijavljeni korisnik: <strong>{context.user}</strong>
      </p>
    </div>
  );
};

// 4. Još jedna Child komponenta (Sidebar/Action area)
const Actions = () => {
  const context = useContext(DashboardContext);
  if (!context) return null;

  return (
    <div style={{ marginTop: "1.5rem" }}>
      <button
        onClick={context.toggleTheme}
        style={{
          background: context.theme === "dark" ? "#f59e0b" : "#334155",
          color: "white",
        }}
      >
        Promijeni na {context.theme === "light" ? "Dark" : "Light"} Mod
      </button>
    </div>
  );
};

// 5. Glavna Demo Komponenta (Provider)
const UseContextDemo = () => {
  const [theme, setTheme] = useState<Theme>("dark");
  const [user] = useState("Admin"); // Simulacija ulogovanog korisnika

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className="hook-demo">
      {/* 
        Provider umotava sve komponente kojima trebaju podaci.
        Sve komponente unutar (čak i duboko ugniježdene) imat će pristup 'value' objektu.
      */}
      <DashboardContext.Provider value={{ user, theme, toggleTheme }}>
        <h3>Dashboard Demo</h3>
        <p style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>
          Podaci o korisniku i temi se prenose kroz Context bez "prop
          drilling-a".
        </p>

        <div
          style={{
            border: "1px dashed var(--border-color)",
            padding: "1rem",
            borderRadius: "12px",
          }}
        >
          <h4>Level 1: Parent Container</h4>

          <div
            style={{
              paddingLeft: "1.5rem",
              borderLeft: "2px solid var(--accent-color)",
            }}
          >
            <h4>Level 2: Nested Content</h4>
            <ThemeStatus />
            <Actions />
          </div>
        </div>
      </DashboardContext.Provider>
    </div>
  );
};

export default UseContextDemo;
