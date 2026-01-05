import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";
import UseActionStatePage from "./hooks-examples/useActionState";
import UseOptimisticPage from "./hooks-examples/useOptimistic";
import { useEffect, useState } from "react";
import "./App.css";

const HOOKS_LIST = [
  { id: "useActionState", name: "useActionState" },
  { id: "useOptimistic", name: "useOptimistic" },
];

function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedHook, setSelectedHook] = useState(location.pathname);

  useEffect(() => {
    setSelectedHook(location.pathname);
  }, [location]);

  return (
    <header className="main-header">
      <Link to="/" className="logo-link">
        <h1>React Hooks Masterclass</h1>
      </Link>
      <nav>
        <select
          value={selectedHook}
          onChange={(e) => navigate(e.target.value)}
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
  );
}

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navigation />

        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/useActionState" element={<UseActionStatePage />} />
            <Route path="/useOptimistic" element={<UseOptimisticPage />} />
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
