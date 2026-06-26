import { useState } from "react";
import { useNavigate } from "react-router-dom";

import OrderSummary from "../components/OrderSummary";
import CouponInput from "../components/CouponInput";

function Checkout() {
  const navigate = useNavigate();

  const subtotal = 500;

  const [discount, setDiscount] = useState(0);

  const placeOrder = () => {
    navigate("/order-success");
  };

  return (
    <div
      style={{
        maxWidth: "1000px",
        margin: "40px auto",
      }}
    >
      <h1>Checkout</h1>

      <CouponInput
        onApply={(value) => setDiscount(value)}
      />

      <OrderSummary
        subtotal={subtotal}
        discount={discount}
      />

      <button
        onClick={placeOrder}
        style={{
          marginTop: "30px",
          padding: "15px 40px",
          background: "#4f46e5",
          color: "white",
          border: "none",
          borderRadius: "10px",
          cursor: "pointer",
          fontSize: "18px",
        }}
      >
        Place Order
      </button>
    </div>
  );
}

export default Checkout;