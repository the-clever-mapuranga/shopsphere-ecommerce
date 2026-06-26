import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { getWishlist } from "../utils/wishlist";

function Wishlist() {

  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    setWishlist(getWishlist());
  }, []);

  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "40px auto",
        padding: "20px",
      }}
    >
      <h1>My Wishlist ❤️</h1>

      {wishlist.length === 0 ? (
        <h2>No favourite products yet.</h2>
      ) : (
        <div className="products-grid">
          {wishlist.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Wishlist;