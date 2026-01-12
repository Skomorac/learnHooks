import UseEffectInfo from "./useEffectInfo";
import UseEffectDemo from "./useEffectDemo";

const UseEffectPage = () => {
  return (
    <div className="hook-page">
      <UseEffectInfo />
      <hr />
      <UseEffectDemo />
      <div className="code-reminder">
        <h4>💡 Podsjetnik za kod:</h4>
        <pre>
          {`useEffect(() => {
  // 1. Akcija (npr. API poziv, tajmer)
  const timer = setInterval(() => {}, 1000);

  // 2. Cleanup (opciono)
  return () => clearInterval(timer);
}, [dependencies]); // 3. Niz zavisnosti`}
        </pre>
      </div>
    </div>
  );
};

export default UseEffectPage;
