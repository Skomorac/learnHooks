import UseLayoutEffectInfo from "./useLayoutEffectInfo";
import UseLayoutEffectDemo from "./useLayoutEffectDemo";

const UseLayoutEffectPage = () => {
  return (
    <div className="hook-page">
      <UseLayoutEffectInfo />
      <hr />
      <UseLayoutEffectDemo />
      <div className="code-reminder">
        <h4>💡 Podsjetnik za kod:</h4>
        <pre>
          {`// Blokira iscrtavanje dok se ne završi!
useLayoutEffect(() => {
  // 1. Izmjeri nešto u DOM-u
  const height = ref.current.offsetHeight;
  
  // 2. Uradi nešto sa tim (npr. pomjeri element)
  setPos(height / 2);
}, [data]);`}
        </pre>
      </div>
    </div>
  );
};

export default UseLayoutEffectPage;
