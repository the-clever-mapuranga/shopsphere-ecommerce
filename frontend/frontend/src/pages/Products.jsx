import "../styles/products.css";
import { useEffect, useState } from "react";
import API from "../services/api";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await API.get("/products/");
      setProducts(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const addToCart = async (productId) => {
    try {
      const token = localStorage.getItem("access");

      await API.post(
        "/cart/add/",
        {
          product_id: productId,
          quantity: 1,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Product added to cart!");
    } catch (error) {
      console.error(error);
      alert("Please login first.");
    }
  };

  if (loading) {
    return <h2>Loading Products...</h2>;
  }

  return (
    <div className="products-container">
      <h1>Our Products</h1>

      <div className="products-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <h2>{product.name}</h2>

            <p>{product.description}</p>

            <h3>${product.price}</h3>

            <p>Stock: {product.stock_quantity}</p>

            <button
              onClick={() => addToCart(product.id)}
            >
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;