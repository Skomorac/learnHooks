import UseDebugValueInfo from "./useDebugValueInfo";
import UseDebugValueDemo from "./useDebugValueDemo";

const UseDebugValuePage = () => {
  return (
    <div className="hook-page">
      <UseDebugValueInfo />
      <hr />
      <UseDebugValueDemo />
      <div className="code-reminder">
        <h4>💡 Podsjetnik za kod:</h4>
        <pre>
          {`// Koristi se ISKLJUČIVO unutar custom hookova
useDebugValue(vrijednost);

// Sa funkcijom za formatiranje (bolje za performanse)
useDebugValue(vrijednost, v => v.toDateString());`}
        </pre>
      </div>
    </div>
  );
};

export default UseDebugValuePage;
