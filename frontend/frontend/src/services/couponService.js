
import API from "./api";

export const getCoupons = async () => {
  const response = await API.get("/coupons/");
  return response.data;
};

export const createCoupon = async (coupon) => {
  const response = await API.post("/coupons/", coupon);
  return response.data;
};

export const updateCoupon = async (id, coupon) => {
  const response = await API.put(`/coupons/${id}/`, coupon);
  return response.data;
};

export const deleteCoupon = async (id) => {
  const response = await API.delete(`/coupons/${id}/`);
  return response.data;
};