import { useEffect, useState } from "react";
import API from "../services/api";
import ProductCard from "../components/ProductCard";
import "../styles/products.css";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("");

  const [categories, setCategories] = useState(["All"]);

  useEffect(() => {
    fetchProducts();
  }, [search, category, sort]);

  const fetchProducts = async () => {
    setLoading(true);

    try {
      let url = "/products/?";

      if (search !== "") {
        url += `search=${search}&`;
      }

      if (category !== "All") {
        url += `category=${category}&`;
      }

      if (sort === "low") {
        url += "ordering=price";
      }

      if (sort === "high") {
        url += "ordering=-price";
      }

      const response = await API.get(url);

      setProducts(response.data);

      if (categories.length === 1) {
        const allProducts = await API.get("/products/");
        const cats = [
          "All",
          ...new Set(
            allProducts.data.map((p) => p.category_name)
          ),
        ];
        setCategories(cats);
      }
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  if (loading) {
    return <h2>Loading Products...</h2>;
  }

  return (
    <div className="products-page">

      <h1>Our Products</h1>

      <h3>Total Products: {products.length}</h3>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          marginBottom: "30px",
        }}
      >
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "12px",
            width: "260px",
          }}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{
            padding: "12px",
          }}
        >
          {categories.map((cat) => (
            <option
              key={cat}
              value={cat}
            >
              {cat}
            </option>
          ))}
        </select>

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          style={{
            padding: "12px",
          }}
        >
          <option value="">
            Sort Price
          </option>

          <option value="low">
            Lowest Price
          </option>

          <option value="high">
            Highest Price
          </option>
        </select>
      </div>

      {products.length === 0 ? (
        <h2>No products found.</h2>
      ) : (
        <div className="products-grid">
          {products.map((product) => (
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

export default Products;