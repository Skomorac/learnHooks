import UseContextInfo from "./useContextInfo";
import UseContextDemo from "./useContextDemo";

const UseContextPage = () => {
  return (
    <div className="hook-page">
      <UseContextInfo />
      <hr />
      <UseContextDemo />
      <div className="code-reminder">
        <h4>💡 Podsjetnik za kod:</h4>
        <pre>
          {`// 1. Kreiranje
const MyContext = createContext(defaultValue);

// 2. Omotavanje (Provider)
<MyContext.Provider value={someValue}>
  <App />
</MyContext.Provider>

// 3. Konzumiranje (Consumer)
const value = useContext(MyContext);`}
        </pre>
      </div>
    </div>
  );
};

export default UseContextPage;
