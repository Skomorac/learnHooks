import UseActionStateInfo from "./UseActionStateInfo";
import UseActionStateDemo from "./UseActionStateDemo";

const UseActionStatePage = () => {
  return (
    <div className="hook-page">
      <UseActionStateInfo />
      <hr />
      <UseActionStateDemo />
      <div className="code-reminder">
        <h4>💡 Podsjetnik za kod:</h4>
        <pre>
          {`const [state, formAction, isPending] = useActionState(fn, initialState);`}
        </pre>
      </div>
    </div>
  );
};

export default UseActionStatePage;
