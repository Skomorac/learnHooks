import UseDeferredValueInfo from "./useDeferredValueInfo";
import UseDeferredValueDemo from "./useDeferredValueDemo";

const UseDeferredValuePage = () => {
  return (
    <div className="hook-page">
      <UseDeferredValueInfo />
      <hr />
      <UseDeferredValueDemo />
      <div className="code-reminder">
        <h4>💡 Podsjetnik za kod:</h4>
        <pre>
          {`const [text, setText] = useState('');
const deferredText = useDeferredValue(text);

// Koristite deferredText za 'teške' operacije:
return <HeavyComponent value={deferredText} />;`}
        </pre>
      </div>
    </div>
  );
};

export default UseDeferredValuePage;
