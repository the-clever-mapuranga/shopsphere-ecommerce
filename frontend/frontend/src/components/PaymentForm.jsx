import { useNavigate } from "react-router-dom";

function PaymentForm() {
  const navigate = useNavigate();

  const handlePayment = (e) => {
    e.preventDefault();

    alert("Payment Successful");

    navigate("/order-success");
  };

  return (
    <form
      onSubmit={handlePayment}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <input
        type="text"
        placeholder="Card Number"
        required
      />

      <input
        type="text"
        placeholder="Card Holder"
        required
      />

      <div
        style={{
          display: "flex",
          gap: "20px",
        }}
      >
        <input
          type="text"
          placeholder="MM/YY"
          required
        />

        <input
          type="password"
          placeholder="CVV"
          required
        />
      </div>

      <button
        style={{
          padding: "15px",
          background: "#4f46e5",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Pay Now
      </button>
    </form>
  );
}

export default PaymentForm;