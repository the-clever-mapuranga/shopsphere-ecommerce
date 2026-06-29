import API from "./api";

export const checkout = async () => {
  const response = await API.post("/orders/checkout/");

  return response.data;
};