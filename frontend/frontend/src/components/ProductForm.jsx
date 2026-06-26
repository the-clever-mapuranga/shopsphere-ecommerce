
import { useState } from "react";

function ProductForm({
  initialData = {},
  onSubmit,
  buttonText,
}) {
  const [form, setForm] = useState({
    name: initialData.name || "",
    description: initialData.description || "",
    price: initialData.price || "",
    stock_quantity: initialData.stock_quantity || "",
    category: initialData.category || "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setForm({
      ...form,
      [name]: files ? files[0] : value,
    });
  };

  const submit = (e) => {
    e.preventDefault();

    const formData = new FormData();

    Object.keys(form).forEach((key) => {
      if (form[key] !== null) {
        formData.append(key, form[key]);
      }
    });

    onSubmit(formData);
  };

  return (
    <form onSubmit={submit}>

      <input
        name="name"
        placeholder="Product Name"
        value={form.name}
        onChange={handleChange}
      />

      <br /><br />

      <textarea
        name="description"
        placeholder="Description"
        value={form.description}
        onChange={handleChange}
      />

      <br /><br />

      <input
        type="number"
        name="price"
        placeholder="Price"
        value={form.price}
        onChange={handleChange}
      />

      <br /><br />

      <input
        type="number"
        name="stock_quantity"
        placeholder="Stock"
        value={form.stock_quantity}
        onChange={handleChange}
      />

      <br /><br />

      <input
        type="number"
        name="category"
        placeholder="Category ID"
        value={form.category}
        onChange={handleChange}
      />

      <br /><br />

      <input
        type="file"
        name="image"
        onChange={handleChange}
      />

      <br /><br />

      <button type="submit">
        {buttonText}
      </button>

    </form>
  );
}

export default ProductForm;

