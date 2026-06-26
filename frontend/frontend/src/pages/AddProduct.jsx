
import { useNavigate } from "react-router-dom";

import ProductForm from "../components/ProductForm";

import {
  createProduct,
} from "../services/adminProductService";

function AddProduct() {
  const navigate = useNavigate();

  const submit = async (formData) => {
    try {
      await createProduct(formData);

      alert("Product Created Successfully");

      navigate("/admin/products");

    } catch (error) {
      console.error(error);

      alert("Failed to create product.");
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Add Product</h1>

      <ProductForm
        onSubmit={submit}
        buttonText="Create Product"
      />
    </div>
  );
}

export default AddProduct;

