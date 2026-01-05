import UseOptimisticInfo from "./UseOptimisticInfo";
import UseOptimisticDemo from "./UseOptimisticDemo";

const UseOptimisticPage = () => {
  return (
    <div className="hook-page">
      <UseOptimisticInfo />
      <hr />
      <UseOptimisticDemo />
      <div className="code-reminder">
        <h4>💡 Podsjetnik:</h4>
        <pre>
          {`const [optimisticState, addOptimistic] = useOptimistic(state, updateFn);`}
        </pre>
      </div>
    </div>
  );
};
export default UseOptimisticPage;
