import { useActionState } from "react";

// Simulacija API poziva na serveru
async function addToNewsletterAction(prevState: any, formData: FormData) {
  const email = formData.get("email");

  // Simuliramo kašnjenje mreže
  await new Promise((res) => setTimeout(res, 1000));

  if (email === "error@test.com") {
    return { error: "Ovaj email je već zauzet!", success: false };
  }

  return {
    error: null,
    success: true,
    message: `Uspješno ste prijavljeni sa: ${email}`,
  };
}

const UseActionStateDemo = () => {
  // Prvi argument je funkcija, drugi je inicijalno stanje
  const [state, formAction, isPending] = useActionState(addToNewsletterAction, {
    error: null,
    success: false,
    message: "",
  });

  return (
    <div className="hook-demo">
      <h3>Newsletter Form (Demo)</h3>
      <form action={formAction}>
        <input
          type="email"
          name="email"
          placeholder="Unesite email (error@test.com za grešku)"
          required
          disabled={isPending}
        />
        <button type="submit" disabled={isPending}>
          {isPending ? "Slanje..." : "Prijavi se"}
        </button>
      </form>

      {state?.error && <p className="error-msg">{state.error}</p>}
      {state?.success && <p className="success-msg">{state.message}</p>}
    </div>
  );
};

export default UseActionStateDemo;
