import UseMemoInfo from "./useMemoInfo";
import UseMemoDemo from "./useMemoDemo";

const UseMemoPage = () => {
  return (
    <div className="hook-page">
      <UseMemoInfo />
      <hr />
      <UseMemoDemo />
      <div className="code-reminder">
        <h4>💡 Podsjetnik za kod:</h4>
        <pre>
          {`// Kešira REZULTAT funkcije
const cachedValue = useMemo(() => {
  return expensiveCalculation(a, b);
}, [a, b]); // Izvršava se ponovo samo ako se a ili b promijene`}
        </pre>
      </div>
    </div>
  );
};

export default UseMemoPage;
