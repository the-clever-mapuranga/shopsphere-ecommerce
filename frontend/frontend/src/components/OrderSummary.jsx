function OrderSummary({
  subtotal,
  shipping = 10,
  taxRate = 0.15,
  discount = 0,
}) {
  const tax = subtotal * taxRate;

  const total = subtotal + shipping + tax - discount;

  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "25px",
        background: "#fafafa",
      }}
    >
      <h2>Order Summary</h2>

      <hr />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "15px 0",
        }}
      >
        <span>Subtotal</span>
        <strong>${subtotal.toFixed(2)}</strong>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "15px 0",
        }}
      >
        <span>Shipping</span>
        <strong>${shipping.toFixed(2)}</strong>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "15px 0",
        }}
      >
        <span>Tax (15%)</span>
        <strong>${tax.toFixed(2)}</strong>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "15px 0",
          color: "green",
        }}
      >
        <span>Discount</span>
        <strong>-${discount.toFixed(2)}</strong>
      </div>

      <hr />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: "22px",
          fontWeight: "bold",
        }}
      >
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </div>
    </div>
  );
}

export default OrderSummary;