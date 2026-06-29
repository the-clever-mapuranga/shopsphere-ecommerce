import { Link } from "react-router-dom";

function OrderSuccess() {
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "80px",
      }}
    >
      <h1
        style={{
          color: "green",
          fontSize: "42px",
        }}
      >
        ✓ Order Placed Successfully
      </h1>

      <h2>Order Number</h2>

      <h3>#SPH20260001</h3>

      <p>
        Estimated Delivery:
      </p>

      <h3>3 - 5 Business Days</h3>

      <Link to="/products">
        <button
          style={{
            marginTop: "30px",
            padding: "15px 40px",
            background: "#4f46e5",
            color: "white",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          Continue Shopping
        </button>
      </Link>
    </div>
  );
}

export default OrderSuccess;