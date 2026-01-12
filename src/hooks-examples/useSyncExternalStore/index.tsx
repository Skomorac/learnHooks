import UseSyncExternalStoreInfo from "./useSyncExternalStoreInfo";
import UseSyncExternalStoreDemo from "./useSyncExternalStoreDemo";

const UseSyncExternalStorePage = () => {
  return (
    <div className="hook-page">
      <UseSyncExternalStoreInfo />
      <hr />
      <UseSyncExternalStoreDemo />
      <div className="code-reminder">
        <h4>💡 Podsjetnik za kod:</h4>
        <pre>
          {`const value = useSyncExternalStore(
  subscribe,         // Funkcija za pretplatu na promjene
  getSnapshot,       // Čita trenutnu vrijednost iz store-a
  getServerSnapshot  // (Opciono) Vrijednost za Server Side Rendering
);`}
        </pre>
      </div>
    </div>
  );
};

export default UseSyncExternalStorePage;
