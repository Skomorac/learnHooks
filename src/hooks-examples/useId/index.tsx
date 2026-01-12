import UseIdInfo from "./useIdInfo";
import UseIdDemo from "./useIdDemo";

const UseIdPage = () => {
  return (
    <div className="hook-page">
      <UseIdInfo />
      <hr />
      <UseIdDemo />
      <div className="code-reminder">
        <h4>💡 Podsjetnik za kod:</h4>
        <pre>
          {`const id = useId();

return (
  <>
    <label htmlFor={id}>Email</label>
    <input id={id} type="email" />
  </>
);`}
        </pre>
      </div>
    </div>
  );
};

export default UseIdPage;
