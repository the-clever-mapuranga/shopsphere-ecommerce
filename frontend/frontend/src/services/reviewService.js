import API from "./api";

export const createReview = async (slug, reviewData) => {
  const response = await API.post(
    `/products/${slug}/reviews/`,
    reviewData
  );

  return response.data;
};