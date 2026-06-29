
import API from "./api";

export const getInventory = async () => {
  const response = await API.get("/products/");
  return response.data;
};

export const updateStock = async (id, quantity) => {
  const response = await API.patch(`/products/${id}/`, {
    stock_quantity: quantity,
  });

  return response.data;
};
