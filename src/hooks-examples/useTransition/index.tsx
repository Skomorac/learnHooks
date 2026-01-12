import UseTransitionInfo from "./useTransitionInfo";
import UseTransitionDemo from "./useTransitionDemo";

const UseTransitionPage = () => {
  return (
    <div className="hook-page">
      <UseTransitionInfo />
      <hr />
      <UseTransitionDemo />
      <div className="code-reminder">
        <h4>💡 Podsjetnik za kod:</h4>
        <pre>
          {`const [isPending, startTransition] = useTransition();

const handleClick = () => {
  startTransition(() => {
    // Ovo ažuriranje stanja je sada tranzicija
    setTab('tab-koji-koci');
  });
};`}
        </pre>
      </div>
    </div>
  );
};

export default UseTransitionPage;
