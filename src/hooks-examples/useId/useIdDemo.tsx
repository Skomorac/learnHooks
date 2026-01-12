import { useId } from "react";

const CustomInput = ({
  label,
  type = "text",
}: {
  label: string;
  type?: string;
}) => {
  const id = useId();

  return (
    <div style={{ marginBottom: "1rem", textAlign: "left" }}>
      {/* Povezujemo label i input koristeći isti generisani ID */}
      <label
        htmlFor={id}
        style={{ display: "block", marginBottom: "5px", fontSize: "0.9rem" }}
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        className="hook-select"
        style={{ width: "100%" }}
        placeholder={`ID za ovo polje je: ${id}`}
      />
      <small style={{ color: "var(--text-muted)", fontSize: "0.75rem" }}>
        Generisani ID: <code>{id}</code>
      </small>
    </div>
  );
};

const UseIdDemo = () => {
  return (
    <div className="hook-demo">
      <h3>Unique ID Generator</h3>
      <p style={{ fontSize: "0.85rem", marginBottom: "1.5rem" }}>
        Ista komponenta se ponavlja više puta, ali <code>useId</code> osigurava
        da su Labele i Inputi uvijek ispravno upareni.
      </p>

      <div style={{ maxWidth: "400px", margin: "0 auto" }}>
        <CustomInput label="Ime i prezime" />
        <CustomInput label="Email adresa" type="email" />
        <CustomInput label="Lozinka" type="password" />
      </div>
    </div>
  );
};

export default UseIdDemo;
