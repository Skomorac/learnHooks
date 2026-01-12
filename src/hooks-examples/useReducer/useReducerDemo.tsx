import { useReducer, useState } from "react";

// 1. DEFINICIJA STANJA I TIPOVA
type Todo = { id: number; text: string; completed: boolean };
type State = Todo[];
type Action =
  | { type: "ADD_TODO"; text: string }
  | { type: "TOGGLE_TODO"; id: number }
  | { type: "DELETE_TODO"; id: number };

// 2. REDUCER FUNKCIJA - Centralni mozak aplikacije
// Ona prima trenutno stanje i akciju, te vraća POTPUNO NOVO stanje.
const todoReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        { id: Date.now(), text: action.text, completed: false },
      ];
    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
};

const UseReducerDemo = () => {
  const [text, setText] = useState("");
  // useReducer vraća trenutno stanje (todos) i 'dispatch' funkciju za slanje akcija
  const [todos, dispatch] = useReducer(todoReducer, []);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch({ type: "ADD_TODO", text });
      setText("");
    }
  };

  return (
    <div className="hook-demo">
      <h3>Reducer Todo List</h3>

      <form
        onSubmit={handleAdd}
        style={{ display: "flex", gap: "10px", marginBottom: "20px" }}
      >
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Šta treba uraditi?"
          className="hook-select"
          style={{ flex: 1 }}
        />
        <button type="submit" style={{ background: "var(--accent-color)" }}>
          Dodaj
        </button>
      </form>

      <div
        className="todo-list"
        style={{ display: "flex", flexDirection: "column", gap: "10px" }}
      >
        {todos.length === 0 && (
          <p style={{ color: "var(--text-muted)", textAlign: "center" }}>
            Lista je prazna...
          </p>
        )}

        {todos.map((todo) => (
          <div
            key={todo.id}
            className="testing-box"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              background: todo.completed
                ? "rgba(16, 185, 129, 0.05)"
                : "rgba(255,255,255,0.05)",
              borderColor: todo.completed ? "#10b981" : "var(--border-color)",
              opacity: todo.completed ? 0.7 : 1,
              minWidth: "300px",
            }}
          >
            <span
              onClick={() => dispatch({ type: "TOGGLE_TODO", id: todo.id })}
              style={{
                cursor: "pointer",
                textDecoration: todo.completed ? "line-through" : "none",
                flex: 1,
              }}
            >
              {todo.completed ? "✅ " : "⭕ "} {todo.text}
            </span>

            <button
              onClick={() => dispatch({ type: "DELETE_TODO", id: todo.id })}
              style={{
                padding: "5px 10px",
                marginLeft: "10px",
                background: "#ef4444",
                fontSize: "0.8rem",
              }}
            >
              Obriši
            </button>
          </div>
        ))}
      </div>

      <div
        style={{
          marginTop: "20px",
          fontSize: "0.8rem",
          color: "var(--text-muted)",
        }}
      >
        <p>
          💡 <strong>Savjet:</strong> Primijetite kako komponenta samo šalje
          (dispatch) šta se desilo, a ne mora znati <em>kako</em> se niz
          mijenja.
        </p>
      </div>
    </div>
  );
};

export default UseReducerDemo;
