import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getProduct } from "../services/productService";
import ProductCard from "../components/ProductCard";
import ReviewForm from "../components/ReviewForm";
import ReviewList from "../components/ReviewList";

const API_URL = "http://127.0.0.1:8000";

function ProductDetail() {
  const { slug } = useParams();

  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProduct();
  }, [slug]);

  const fetchProduct = async () => {
    try {
      const data = await getProduct(slug);

      setProduct(data.product);
      setRelatedProducts(data.related_products);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <h2 style={{ textAlign: "center", marginTop: "40px" }}>
        Loading Product...
      </h2>
    );
  }

  if (!product) {
    return (
      <h2 style={{ textAlign: "center", marginTop: "40px" }}>
        Product not found.
      </h2>
    );
  }

  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "40px auto",
        padding: "20px",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "40px",
        }}
      >
        <div>
          <img
            src={
              product.image
                ? `${API_URL}${product.image}`
                : "https://via.placeholder.com/500x500?text=No+Image"
            }
            alt={product.name}
            style={{
              width: "100%",
              borderRadius: "10px",
            }}
          />
        </div>

        <div>
          <h1>{product.name}</h1>

          <h2 style={{ color: "#4f46e5" }}>
            ${product.price}
          </h2>

          <p>
            ⭐ {product.rating}
          </p>

          <p>
            <strong>Reviews:</strong>{" "}
            {product.reviews}
          </p>

          <p>
            <strong>Category:</strong>{" "}
            {product.category_name}
          </p>

          <p>
            <strong>Stock:</strong>{" "}
            {product.stock_quantity}
          </p>

          <hr />

          <p>{product.description}</p>

          <button
            style={{
              marginTop: "25px",
              background: "#4f46e5",
              color: "white",
              padding: "15px 35px",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Add To Cart
          </button>
        </div>
      </div>

      <ReviewForm
        slug={slug}
        onReviewAdded={fetchProduct}
      />

      <ReviewList
        reviews={product.review_list || []}
      />

      <div
        style={{
          marginTop: "70px",
        }}
      >
        <h2>Related Products</h2>

        {relatedProducts.length === 0 ? (
          <p>No related products.</p>
        ) : (
          <div className="products-grid">
            {relatedProducts.map((item) => (
              <ProductCard
                key={item.id}
                product={item}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductDetail;