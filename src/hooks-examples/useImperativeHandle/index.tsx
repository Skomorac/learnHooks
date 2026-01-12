import UseImperativeHandleInfo from "./useImperativeHandleInfo";
import UseImperativeHandleDemo from "./useImperativeHandleDemo";

const UseImperativeHandlePage = () => {
  return (
    <div className="hook-page">
      <UseImperativeHandleInfo />
      <hr />
      <UseImperativeHandleDemo />
      <div className="code-reminder">
        <h4>💡 Podsjetnik za kod:</h4>
        <pre>
          {`// 1. Child mora koristiti forwardRef
const MyInput = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    myMethod() { /* logika */ }
  }));
  return <input />;
});

// 2. Parent zove metodu preko ref-a
myRef.current.myMethod();`}
        </pre>
      </div>
    </div>
  );
};

export default UseImperativeHandlePage;
