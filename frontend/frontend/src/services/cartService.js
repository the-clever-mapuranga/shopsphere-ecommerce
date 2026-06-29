import API from "./api";

export const addToCart = async (productId, quantity = 1) => {
  const response = await API.post("/cart/add/", {
    product_id: productId,
    quantity,
  });

  return response.data;
};

export const getCart = async () => {
  const response = await API.get("/cart/");

  return response.data;
};

export const removeFromCart = async (itemId) => {
  const response = await API.delete(`/cart/remove/${itemId}/`);

  return response.data;
};

export const updateCartQuantity = async (itemId, quantity) => {
  const response = await API.patch(`/cart/update/${itemId}/`, {
    quantity,
  });

  return response.data;
};