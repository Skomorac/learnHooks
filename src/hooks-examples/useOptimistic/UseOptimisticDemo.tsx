import { useOptimistic, useState, useRef } from "react";

type Message = {
  text: string;
  sending: boolean;
  isError: boolean;
};

async function deliverMessage(message: string) {
  await new Promise((res) => setTimeout(res, 2000));

  // Simulacija greške
  if (message.toLowerCase() === "greška") {
    throw new Error("Mrežna greška!");
  }

  return message;
}

const UseOptimisticDemo = () => {
  const [error, setError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [messages, setMessages] = useState<Message[]>([
    { text: "Zdravo!", sending: false, isError: false },
  ]);

  // Ovaj hook prima originalno stanje i funkciju koja definiše kako ga privremeno izmjeniti
  const [optimisticMessages, addOptimisticMessage] = useOptimistic(
    messages,
    (state, newMessage: string) => [
      ...state,
      { text: newMessage, sending: true, isError: false },
    ]
  );

  async function formAction(formData: FormData) {
    const messageText = formData.get("message") as string;
    setError(null);

    // 1. Odmah "optimistično" dodajemo poruku
    addOptimisticMessage(messageText);
    formRef.current?.reset();

    // 2. Šaljemo na "server"
    try {
      const deliveredMessage = await deliverMessage(messageText);
      // 3. Kad asinhrona akcija završi, trajno ažuriramo pravo stanje
      setMessages((current) => [
        ...current,
        { text: deliveredMessage, sending: false, isError: false },
      ]);
    } catch (e) {
      setMessages((current) => [
        ...current,
        { text: messageText, sending: false, isError: true },
      ]);
    }
  }

  return (
    <div className="hook-demo">
      <h3>Optimistic Chat</h3>
      <div
        className="message-list"
        style={{ minHeight: "150px", marginBottom: "1rem" }}
      >
        {optimisticMessages.map((m, i) => (
          <div
            key={i}
            style={{
              color: m.isError ? "#f87171" : m.sending ? "#94a3b8" : "#f1f5f9",
              marginBottom: "0.5rem",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            {m.text}
            {m.sending && (
              <small style={{ fontStyle: "italic" }}>(šaljem...)</small>
            )}
            {m.isError && (
              <small style={{ fontSize: "0.7rem" }}>⚠️ Neuspjelo slanje</small>
            )}
          </div>
        ))}
      </div>
      {error && (
        <p className="error-msg" style={{ fontSize: "0.8rem" }}>
          {error}
        </p>
      )}

      <form ref={formRef} action={formAction}>
        <input name="message" placeholder="Upiši poruku..." required />
        <button type="submit">Pošalji</button>
      </form>
    </div>
  );
};
export default UseOptimisticDemo;
