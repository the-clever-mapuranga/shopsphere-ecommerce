import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  verifyTwoFactor,
  resendTwoFactor,
} from "../services/twoFactorService";

function TwoFactor() {

  const navigate = useNavigate();

  const [code, setCode] = useState("");

  const [loading, setLoading] = useState(false);

  const submit = async (e) => {

    e.preventDefault();

    setLoading(true);

    try {

      await verifyTwoFactor(code);

      alert("Verification successful.");

      navigate("/dashboard");

    } catch (error) {

      console.error(error);

      alert("Invalid verification code.");

    } finally {

      setLoading(false);

    }

  };

  const resend = async () => {

    try {

      await resendTwoFactor();

      alert("New verification code sent.");

    } catch (error) {

      console.error(error);

    }

  };

  return (

    <div
      style={{
        maxWidth: "500px",
        margin: "80px auto",
      }}
    >

      <h1>Two Factor Authentication</h1>

      <p>
        Enter the verification code sent to your email.
      </p>

      <form onSubmit={submit}>

        <input
          type="text"
          value={code}
          onChange={(e) =>
            setCode(e.target.value)
          }
          placeholder="Enter 6-digit code"
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        />

        <button
          type="submit"
          disabled={loading}
          style={{
            padding: "12px 30px",
            background: "#4f46e5",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Verify
        </button>

      </form>

      <button
        onClick={resend}
        style={{
          marginTop: "20px",
          background: "transparent",
          border: "none",
          color: "#4f46e5",
          cursor: "pointer",
        }}
      >
        Resend Code
      </button>

    </div>

  );

}

export default TwoFactor;