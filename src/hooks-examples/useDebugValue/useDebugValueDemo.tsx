import { useState, useEffect, useDebugValue } from "react";

// CUSTOM HOOK: Prati online status
function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  // U React DevTools-u će pored 'OnlineStatus' pisati "Online" ili "Offline"
  useDebugValue(isOnline ? "Online ✅" : "Offline ❌");

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return isOnline;
}

const UseDebugValueDemo = () => {
  const isOnline = useOnlineStatus();

  return (
    <div className="hook-demo">
      <h3>Online Status Tracker</h3>
      <div className="testing-box" style={{ textAlign: "center" }}>
        <p>
          Trenutni status:{" "}
          <strong>{isOnline ? "Povezani ste" : "Niste povezani"}</strong>
        </p>
        <p
          style={{
            fontSize: "0.8rem",
            marginTop: "1rem",
            color: "var(--text-muted)",
          }}
        >
          🛠️ <strong>Zadatak:</strong> Otvorite React DevTools (Components tab),
          pronađite ovu komponentu i vidjet ćete labelu koju je postavio{" "}
          <code>useDebugValue</code>.
        </p>
      </div>

      <p style={{ fontSize: "0.8rem", fontStyle: "italic" }}>
        (Možete simulirati offline mod u Network tabu vašeg browsera)
      </p>
    </div>
  );
};
export default UseDebugValueDemo;
