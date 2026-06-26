import API from "./api";

export const getDiscountRules = async () => {
  const { data } = await API.get("/discounts/");
  return data;
};

export const createDiscountRule = async (rule) => {
  const { data } = await API.post("/discounts/", rule);
  return data;
};

export const deleteDiscountRule = async (id) => {
  const { data } = await API.delete(`/discounts/${id}/`);
  return data;
};