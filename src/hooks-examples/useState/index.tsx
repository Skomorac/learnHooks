import UseStateInfo from "./useStateInfo";
import UseStateDemo from "./useStateDemo";

const UseStatePage = () => {
  return (
    <div className="hook-page">
      <UseStateInfo />
      <hr />
      <UseStateDemo />
      <div className="code-reminder">
        <h4>💡 Podsjetnik za kod:</h4>
        <pre>
          {`// 1. Prosta vrijednost
const [count, setCount] = useState(0);

// 2. Kompleksni objekt
const [user, setUser] = useState({ name: 'admin', age: 30 });

// Ažuriranje objekta:
setUser(prev => ({ ...prev, age: prev.age + 1 }));`}
        </pre>
      </div>
    </div>
  );
};

export default UseStatePage;
