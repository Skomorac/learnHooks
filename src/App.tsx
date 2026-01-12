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
import UseCallbackPage from "./hooks-examples/useCallback";
import UseContextPage from "./hooks-examples/useContext";
import UseDebugValuePage from "./hooks-examples/useDebugValue";
import UseDeferredValuePage from "./hooks-examples/useDeferredValue";
import UseTransitionPage from "./hooks-examples/useTransition";
import UseEffectPage from "./hooks-examples/useEffect";
import UseIdPage from "./hooks-examples/useId";
import UseImperativeHandlePage from "./hooks-examples/useImperativeHandle";
import { useEffect, useState } from "react";
import "./App.css";

const HOOKS_LIST = [
  { id: "useActionState", name: "useActionState" },
  { id: "useOptimistic", name: "useOptimistic" },
  { id: "useCallback", name: "useCallback" },
  { id: "useContext", name: "useContext" },
  { id: "useDebugValue", name: "useDebugValue" },
  { id: "useDeferredValue", name: "useDeferredValue" },
  { id: "useTransition", name: "useTransition" },
  { id: "useEffect", name: "useEffect" },
  { id: "useId", name: "useId" },
  { id: "useImperativeHandle", name: "useImperativeHandle" },
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
            <Route path="/useCallback" element={<UseCallbackPage />} />
            <Route path="/useContext" element={<UseContextPage />} />
            <Route path="/useDebugValue" element={<UseDebugValuePage />} />
            <Route path="/useTransition" element={<UseTransitionPage />} />
            <Route path="/useEffect" element={<UseEffectPage />} />
            <Route path="/useId" element={<UseIdPage />} />
            <Route
              path="/useImperativeHandle"
              element={<UseImperativeHandlePage />}
            />
            <Route
              path="/useDeferredValue"
              element={<UseDeferredValuePage />}
            />
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
