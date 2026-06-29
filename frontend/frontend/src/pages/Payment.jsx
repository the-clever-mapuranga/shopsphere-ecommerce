import PaymentForm from "../components/PaymentForm";

function Payment() {
  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "40px auto",
      }}
    >
      <h1>Payment</h1>

      <PaymentForm />
    </div>
  );
}

export default Payment;