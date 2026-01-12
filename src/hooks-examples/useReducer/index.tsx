import UseReducerInfo from "./useReducerInfo";
import UseReducerDemo from "./useReducerDemo";

const UseReducerPage = () => {
  return (
    <div className="hook-page">
      <UseReducerInfo />
      <hr />
      <UseReducerDemo />
      <div className="code-reminder">
        <h4>💡 Podsjetnik za kod:</h4>
        <pre>
          {`const [state, dispatch] = useReducer(reducer, initialValue);

// Slanje akcije
dispatch({ type: 'ADD_ITEM', payload: 'Novi podatak' });

// Reducer (van komponente)
function reducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': return [...state, action.payload];
    default: return state;
  }
}`}
        </pre>
      </div>
    </div>
  );
};

export default UseReducerPage;
