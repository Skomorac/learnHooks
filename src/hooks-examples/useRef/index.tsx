import UseRefInfo from "./useRefInfo";
import UseRefDemo from "./useRefDemo";

const UseRefPage = () => {
  return (
    <div className="hook-page">
      <UseRefInfo />
      <hr />
      <UseRefDemo />
      <div className="code-reminder">
        <h4>💡 Podsjetnik za kod:</h4>
        <pre>
          {`// 1. Inicijalizacija
const myRef = useRef(initialValue);

// 2. Upotreba (DOM)
<div ref={myRef}>Sadržaj</div>

// 3. Pristup (uvijek preko .current)
console.log(myRef.current);`}
        </pre>
      </div>
    </div>
  );
};

export default UseRefPage;
