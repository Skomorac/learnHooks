import { useState, useCallback, memo, useRef } from "react";

const TaskList = memo(
  ({ tasks, onDelete }: { tasks: string[]; onDelete: (t: string) => void }) => {
    // Ovaj brojač se ne resetuje na re-render i ne izaziva re-render.
    const renderCount = useRef(0);
    renderCount.current++;

    return (
      <div
        style={{ marginTop: "2rem", textAlign: "left", position: "relative" }}
      >
        {/* Vizuelni dokaz rendera */}
        <div
          key={renderCount.current}
          className="render-badge"
          style={{
            position: "absolute",
            top: "-25px",
            right: "0",
            background: "#334155",
            color: "#f87171",
            padding: "2px 10px",
            borderRadius: "20px",
            fontSize: "0.75rem",
            fontWeight: "bold",
            border: "1px solid #f87171",
          }}
        >
          Renderovan: {renderCount.current} puta
        </div>

        <ul style={{ listStyle: "none", padding: 0 }}>
          {tasks.map((task) => (
            <li
              key={task}
              style={{
                display: "flex",
                justifyContent: "space-between",
                background: "rgba(255,255,255,0.05)",
                padding: "10px",
                marginBottom: "8px",
                border: "1px solid var(--border-color)",
                borderRadius: "8px",
              }}
            >
              <span>{task}</span>
              <button
                onClick={() => onDelete(task)}
                style={{ background: "#ef4444", padding: "2px 8px" }}
              >
                Izbriši
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
);

const UseCallbackDemo = () => {
  const [count, setCount] = useState(0);
  const [tasks, setTasks] = useState(["Zadatak 1", "Zadatak 2"]);
  const [isOptimized, setIsOptimized] = useState(true);

  const deleteTaskOptimized = useCallback((taskToDelete: string) => {
    setTasks((current) => current.filter((t) => t !== taskToDelete));
  }, []);

  const deleteTaskNormal = (taskToDelete: string) => {
    setTasks((current) => current.filter((t) => t !== taskToDelete));
  };

  const currentDeleteHandler = isOptimized
    ? deleteTaskOptimized
    : deleteTaskNormal;

  return (
    <div className="hook-demo">
      <div
        style={{
          marginBottom: "2rem",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
          <button
            onClick={() => setIsOptimized(!isOptimized)}
            style={{ background: isOptimized ? "#10b981" : "#f59e0b" }}
          >
            Mod: {isOptimized ? "useCallback (ON)" : "Normal (OFF)"}
          </button>

          <button onClick={() => setCount((c) => c + 1)}>
            Povećaj Brojač ({count})
          </button>
        </div>

        <p
          style={{
            fontSize: "0.9rem",
            color: isOptimized ? "#10b981" : "#f59e0b",
            fontWeight: "500",
          }}
        >
          {isOptimized
            ? "Povećavanje brojača NE treba da utiče na 'Renderovan' broj ispod."
            : "Svaki klik na dugme će povećati 'Renderovan' broj (lista pati)."}
        </p>
      </div>

      <TaskList tasks={tasks} onDelete={currentDeleteHandler} />
    </div>
  );
};

export default UseCallbackDemo;
