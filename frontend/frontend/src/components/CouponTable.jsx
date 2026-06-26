
function CouponTable({
  coupons,
  onDelete,
}) {
  return (
    <table
      style={{
        width: "100%",
        marginTop: "30px",
        borderCollapse: "collapse",
      }}
    >
      <thead
        style={{
          background: "#4f46e5",
          color: "white",
        }}
      >
        <tr>
          <th>Coupon</th>
          <th>Discount</th>
          <th>Expiry</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {coupons.map((coupon) => (
          <tr key={coupon.id}>
            <td>{coupon.code}</td>

            <td>{coupon.discount}%</td>

            <td>{coupon.expiry_date}</td>

            <td>
              <button
                onClick={() =>
                  onDelete(coupon.id)
                }
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CouponTable;