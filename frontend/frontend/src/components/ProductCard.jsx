import { Link } from "react-router-dom";
import { addToWishlist } from "../utils/wishlist";
import { addToCart } from "../services/cartService";
import "../styles/productCard.css";

const API_URL = "http://127.0.0.1:8000";

function ProductCard({ product }) {

  const handleWishlist = () => {
    addToWishlist(product);
    alert(`${product.name} added to Wishlist ❤️`);
  };

  const handleCart = async () => {
    try {
      await addToCart(product.id, 1);

      alert(`${product.name} added to Cart 🛒`);

    } catch (error) {

      if (error.response?.status === 401) {
        alert("Please login first.");
      } else {
        alert("Failed to add product to cart.");
      }

      console.error(error);
    }
  };

  const imageUrl = product.image
    ? product.image.startsWith("http")
      ? product.image
      : `${API_URL}${product.image}`
    : "https://via.placeholder.com/300x220?text=No+Image";

  return (

    <div className="product-card">

      {product.stock_quantity <= 3 && (
        <div className="sale-badge">
          LOW STOCK
        </div>
      )}

      <img
        src={imageUrl}
        alt={product.name}
        className="product-image"
      />

      <div className="product-info">

        <span className="category">
          {product.category_name}
        </span>

        <h2>{product.name}</h2>

        <p>{product.description}</p>

        <div className="rating">
          ⭐ {product.rating}

          <span
            style={{
              color: "#666",
              marginLeft: "8px",
            }}
          >
            ({product.reviews} Reviews)
          </span>
        </div>

        <h3>${product.price}</h3>

        <p>
          Stock:
          <strong> {product.stock_quantity}</strong>
        </p>

        <div className="card-buttons">

          <Link to={`/products/${product.slug}`}>
            <button className="details-btn">
              View Details
            </button>
          </Link>

          <button
            className="cart-btn"
            onClick={handleCart}
          >
            Add To Cart
          </button>

        </div>

        <button
          className="wishlist-btn"
          onClick={handleWishlist}
        >
          ❤️ Add to Wishlist
        </button>

      </div>

    </div>

  );
}

export default ProductCard;