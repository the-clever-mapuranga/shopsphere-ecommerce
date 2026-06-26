
import { useState } from "react";

function CouponForm({ onSubmit }) {
  const [coupon, setCoupon] = useState({
    code: "",
    discount: "",
    expiry_date: "",
  });

  const handleChange = (e) => {
    setCoupon({
      ...coupon,
      [e.target.name]: e.target.value,
    });
  };

  const submit = (e) => {
    e.preventDefault();
    onSubmit(coupon);

    setCoupon({
      code: "",
      discount: "",
      expiry_date: "",
    });
  };

  return (
    <form onSubmit={submit}>

      <input
        type="text"
        name="code"
        placeholder="Coupon Code"
        value={coupon.code}
        onChange={handleChange}
      />

      <br /><br />

      <input
        type="number"
        name="discount"
        placeholder="Discount %"
        value={coupon.discount}
        onChange={handleChange}
      />

      <br /><br />

      <input
        type="date"
        name="expiry_date"
        value={coupon.expiry_date}
        onChange={handleChange}
      />

      <br /><br />

      <button type="submit">
        Save Coupon
      </button>

    </form>
  );
}

export default CouponForm;