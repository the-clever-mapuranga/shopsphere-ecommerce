
function InventoryTable({ products }) {
  return (
    <table
      style={{
        width: "100%",
        borderCollapse: "collapse",
        marginTop: "30px",
      }}
    >
      <thead
        style={{
          background: "#4f46e5",
          color: "white",
        }}
      >
        <tr>
          <th>Name</th>
          <th>Category</th>
          <th>Price</th>
          <th>Stock</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td>{product.name}</td>

            <td>{product.category_name}</td>

            <td>${product.price}</td>

            <td>{product.stock_quantity}</td>

            <td>
              {product.stock_quantity > 10 && (
                <span style={{ color: "green" }}>
                  In Stock
                </span>
              )}

              {product.stock_quantity <= 10 &&
                product.stock_quantity > 0 && (
                  <span style={{ color: "orange" }}>
                    Low Stock
                  </span>
                )}

              {product.stock_quantity === 0 && (
                <span style={{ color: "red" }}>
                  Out of Stock
                </span>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default InventoryTable;