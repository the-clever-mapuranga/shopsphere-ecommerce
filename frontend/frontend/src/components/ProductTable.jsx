
function ProductTable({
  products = [],
  onEdit,
  onDelete,
}) {
  return (
    <table
      style={{
        width: "100%",
        borderCollapse: "collapse",
        marginTop: "30px",
      }}
    >
      <thead>
        <tr
          style={{
            background: "#4f46e5",
            color: "white",
          }}
        >
          <th style={{ padding: "12px" }}>Image</th>
          <th>Name</th>
          <th>Category</th>
          <th>Price</th>
          <th>Stock</th>
          <th>Rating</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {products.length === 0 ? (
          <tr>
            <td
              colSpan="7"
              style={{
                textAlign: "center",
                padding: "30px",
              }}
            >
              No Products Found
            </td>
          </tr>
        ) : (
          products.map((product) => (
            <tr
              key={product.id}
              style={{
                borderBottom:
                  "1px solid #ddd",
              }}
            >
              <td
                style={{
                  padding: "10px",
                }}
              >
                <img
                  src={
                    product.image ||
                    "https://placehold.co/70x70"
                  }
                  alt={product.name}
                  style={{
                    width: "70px",
                    borderRadius: "8px",
                  }}
                />
              </td>

              <td>{product.name}</td>

              <td>{product.category_name}</td>

              <td>${product.price}</td>

              <td>{product.stock_quantity}</td>

              <td>{product.rating}</td>

              <td>
                <button
                  onClick={() =>
                    onEdit(product)
                  }
                  style={{
                    marginRight: "10px",
                  }}
                >
                  Edit
                </button>

                <button
                  onClick={() =>
                    onDelete(product.id)
                  }
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}

export default ProductTable;
