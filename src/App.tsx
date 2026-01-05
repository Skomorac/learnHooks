import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import UseActionStatePage from "./hooks-examples/useActionState";

// Kasnije možemo ovo izvući u poseban fajl (npr. navigationData.ts)
const HOOKS_LIST = [
  { id: "useActionState", name: "useActionState" },
  // Ovdje ćemo dodavati ostale hookove...
];

function App() {
  return (
    <Router>
      <div className="app-container">
        <header className="main-header">
          <h1>React Hooks Masterclass</h1>
          <nav>
            <select
              onChange={(e) => (window.location.href = e.target.value)}
              className="hook-select"
            >
              <option value="/">Izaberi hook...</option>
              {HOOKS_LIST.map((hook) => (
                <option key={hook.id} value={`/${hook.id}`}>
                  {hook.name}
                </option>
              ))}
            </select>
          </nav>
        </header>

        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/useActionState" element={<UseActionStatePage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="home-hero">
      <h2>Dobrodošli u Hook Trezor!</h2>
      <p>
        Izaberi hook iz dropdown menija iznad kako bi vidio teoriju, primjere i
        "live" demo.
      </p>
    </div>
  );
}

export default App;
