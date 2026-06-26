import { useState } from "react";

function TwoFactorForm({ onEnable }) {
  const [code, setCode] = useState("");

  const submit = (e) => {
    e.preventDefault();

    onEnable(code);

    setCode("");
  };

  return (
    <form
      onSubmit={submit}
      style={{
        border: "1px solid #ddd",
        padding: "20px",
        borderRadius: "10px",
        marginBottom: "30px",
      }}
    >
      <h2>Enable Two Factor Authentication</h2>

      <input
        type="text"
        placeholder="Enter verification code"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginTop: "15px",
        }}
      />

      <button
        type="submit"
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          background: "#4f46e5",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Enable 2FA
      </button>
    </form>
  );
}

export default TwoFactorForm;