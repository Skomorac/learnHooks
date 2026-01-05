import UseCallbackInfo from "./UseCallbackInfo";
import UseCallbackDemo from "./UseCallbackDemo";

const UseCallbackPage = () => {
  return (
    <div className="hook-page">
      <UseCallbackInfo />
      <hr />
      <UseCallbackDemo />
      <div className="code-reminder">
        <h4>💡 Podsjetnik za kod:</h4>
        <pre>
          {`const cachedFn = useCallback(() => {
  doSomething(a, b);
}, [a, b]);`}
        </pre>
      </div>
    </div>
  );
};

export default UseCallbackPage;
