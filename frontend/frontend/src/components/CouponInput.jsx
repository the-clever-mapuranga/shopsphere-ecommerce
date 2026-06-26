import { useState } from "react";

function CouponInput({ onApply }) {
  const [coupon, setCoupon] = useState("");

  const handleApply = () => {
    const code = coupon.trim().toUpperCase();

    let discount = 0;

    if (code === "WELCOME10") {
      discount = 10;
    } else if (code === "SAVE20") {
      discount = 20;
    } else if (code === "FREESHIP") {
      discount = 10;
    } else {
      alert("Invalid coupon code.");
      return;
    }

    onApply(discount);

    alert("Coupon Applied!");

    setCoupon("");
  };

  return (
    <div
      style={{
        marginBottom: "30px",
      }}
    >
      <h3>Discount Coupon</h3>

      <input
        type="text"
        placeholder="Enter Coupon Code"
        value={coupon}
        onChange={(e) => setCoupon(e.target.value)}
        style={{
          padding: "12px",
          width: "250px",
        }}
      />

      <button
        onClick={handleApply}
        style={{
          marginLeft: "15px",
          padding: "12px 25px",
          background: "#4f46e5",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Apply
      </button>
    </div>
  );
}

export default CouponInput;