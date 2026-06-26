
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import ProductTable from "../components/ProductTable";
import ProductSearch from "../components/ProductSearch";
import DeleteModal from "../components/DeleteModal";
import Pagination from "../components/Pagination";

import {
  getAdminProducts,
  deleteProduct,
} from "../services/adminProductService";

function AdminProductTable() {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const data = await getAdminProducts();

      setProducts(data);
      setFiltered(data);

    } catch (error) {
      console.error(error);
    }
  };

  const search = (text) => {
    const result = products.filter((product) =>
      product.name.toLowerCase().includes(
        text.toLowerCase()
      )
    );

    setFiltered(result);
  };

  const remove = async () => {
    try {
      await deleteProduct(deleteId);

      setDeleteId(null);

      loadProducts();

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      style={{
        padding: "40px",
      }}
    >
      <h1>Admin Products</h1>

      <button
        onClick={() =>
          navigate("/admin/products/add")
        }
      >
        Add Product
      </button>

      <ProductSearch
        onSearch={search}
      />

      <ProductTable
        products={filtered}
        onEdit={(product) =>
          navigate(
            `/admin/products/edit/${product.id}`
          )
        }
        onDelete={(id) =>
          setDeleteId(id)
        }
      />

      <Pagination
        currentPage={1}
        totalPages={1}
        onPageChange={() => {}}
      />

      <DeleteModal
        open={deleteId !== null}
        onClose={() =>
          setDeleteId(null)
        }
        onConfirm={remove}
      />
    </div>
  );
}

export default AdminProductTable;
