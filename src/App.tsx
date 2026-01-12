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
import UseCallbackPage from "./hooks-examples/useCallback";
import UseContextPage from "./hooks-examples/useContext";
import UseDebugValuePage from "./hooks-examples/useDebugValue";
import UseDeferredValuePage from "./hooks-examples/useDeferredValue";
import UseEffectPage from "./hooks-examples/useEffect";
import UseIdPage from "./hooks-examples/useId";
import UseImperativeHandlePage from "./hooks-examples/useImperativeHandle";
import UseLayoutEffectPage from "./hooks-examples/useLayoutEffect";
import UseMemoPage from "./hooks-examples/useMemo";
import UseOptimisticPage from "./hooks-examples/useOptimistic";
import UseReducerPage from "./hooks-examples/useReducer";
import UseRefPage from "./hooks-examples/useRef";
import UseStatePage from "./hooks-examples/useState";
import UseSyncExternalStorePage from "./hooks-examples/useSyncExternalStore";
import UseTransitionPage from "./hooks-examples/useTransition";
import { useEffect, useState } from "react";
import "./App.css";

const HOOKS_LIST = [
  { id: "useActionState", name: "useActionState" },
  { id: "useCallback", name: "useCallback" },
  { id: "useContext", name: "useContext" },
  { id: "useDebugValue", name: "useDebugValue" },
  { id: "useDeferredValue", name: "useDeferredValue" },
  { id: "useEffect", name: "useEffect" },
  { id: "useId", name: "useId" },
  { id: "useImperativeHandle", name: "useImperativeHandle" },
  { id: "useLayoutEffect", name: "useLayoutEffect" },
  { id: "useMemo", name: "useMemo" },
  { id: "useOptimistic", name: "useOptimistic" },
  { id: "useReducer", name: "useReducer" },
  { id: "useRef", name: "useRef" },
  { id: "useState", name: "useState" },
  { id: "useSyncExternalStore", name: "useSyncExternalStore" },
  { id: "useTransition", name: "useTransition" },
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
            <Route path="/useCallback" element={<UseCallbackPage />} />
            <Route path="/useContext" element={<UseContextPage />} />
            <Route path="/useDebugValue" element={<UseDebugValuePage />} />
            <Route
              path="/useDeferredValue"
              element={<UseDeferredValuePage />}
            />
            <Route path="/useEffect" element={<UseEffectPage />} />
            <Route path="/useId" element={<UseIdPage />} />
            <Route
              path="/useImperativeHandle"
              element={<UseImperativeHandlePage />}
            />
            <Route path="/useLayoutEffect" element={<UseLayoutEffectPage />} />
            <Route path="/useMemo" element={<UseMemoPage />} />
            <Route path="/useOptimistic" element={<UseOptimisticPage />} />
            <Route path="/useReducer" element={<UseReducerPage />} />
            <Route path="/useRef" element={<UseRefPage />} />
            <Route path="/useState" element={<UseStatePage />} />
            <Route
              path="/useSyncExternalStore"
              element={<UseSyncExternalStorePage />}
            />
            <Route path="/useTransition" element={<UseTransitionPage />} />
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
      <div className="hero-badge">React 19 Ready</div>
      <h2>Hook Trezor: Pokušaj da razumijemo kako rade React hooks</h2>

      <p className="hero-subtitle">
        Kompletna arhiva od <strong>16 React hooks</strong> obrađenih kroz
        teoriju i praksu.
      </p>

      <div className="hero-cards">
        <div className="hero-card">
          <h3>📝 Sažeta Teorija</h3>
          <p>
            Bez suvišnog teksta. Samo najbitnije definicije i "Key Points" koji
            prave razliku u razumijevanju.
          </p>
        </div>

        <div className="hero-card">
          <h3>Interaktivni Demo</h3>
          <p>
            Svaki hook prati demo aplikacija. Nismo samo pisali kod, već smo
            simulirali realne probleme (lag, memoriju, rendere).
          </p>
        </div>

        <div className="hero-card">
          <h3>💡 Best Practices</h3>
          <p>
            Savjeti zasnovani na vlastitom iskustvu – kada koristiti koji hook i
            kako izbjeći uobičajene zamke.
          </p>
        </div>
      </div>

      <div className="hero-footer">
        <p>
          Izaberi hook iz dropdown menija iznad i istraži mehanizme koji pokreću
          moderne React aplikacije.
        </p>
      </div>
    </div>
  );
}

export default App;
