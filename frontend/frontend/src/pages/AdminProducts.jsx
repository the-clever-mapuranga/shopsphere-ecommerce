import { useEffect, useState } from "react";
import { getProducts, deleteProduct } from "../services/adminProductService";
import { Link } from "react-router-dom";

function AdminProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const data = await getProducts();
    setProducts(data);
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Delete this product?"
    );

    if (!confirmDelete) return;

    try {
      await deleteProduct(id);

      setProducts(products.filter((p) => p.id !== id));

      alert("Product deleted.");

    } catch (err) {

      alert("Delete failed.");

      console.log(err);

    }
  };

  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "40px auto",
      }}
    >
      <h1>Admin Products</h1>

      <Link to="/admin/products/add">
        <button
          style={{
            marginBottom: "20px",
          }}
        >
          Add Product
        </button>
      </Link>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
        }}
      >
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Rating</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>

              <td>${product.price}</td>

              <td>{product.stock_quantity}</td>

              <td>{product.rating}</td>

              <td>

                <Link
                  to={`/admin/products/edit/${product.id}`}
                >
                  <button>Edit</button>
                </Link>

                <button
                  onClick={() =>
                    handleDelete(product.id)
                  }
                >
                  Delete
                </button>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminProducts;