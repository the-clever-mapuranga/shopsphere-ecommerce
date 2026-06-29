import API from "./api";

export async function getProduct(slug) {
  const response = await API.get(`/products/${slug}/`);
  return response.data;
}

export async function submitReview(slug, reviewData) {
  const response = await API.post(
    `/products/${slug}/review/`,
    reviewData
  );

  return response.data;
}