
import { useParams } from "react-router-dom";

import ProductForm from "../components/ProductForm";

import {
  updateProduct,
} from "../services/adminProductService";

function EditProduct() {
  const { id } = useParams();

  const submit = async (formData) => {
    try {
      await updateProduct(id, formData);

      alert("Product Updated");

    } catch (error) {
      console.error(error);

      alert("Update Failed");
    }
  };

  return (
    <div style={{ padding: "40px" }}>

      <h1>Edit Product</h1>

      <ProductForm
        onSubmit={submit}
        buttonText="Update Product"
      />

    </div>
  );
}

export default EditProduct;
