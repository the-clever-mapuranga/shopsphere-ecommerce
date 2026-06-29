import API from "./api";

export const createPaymentIntent = async (amount) => {
  const response = await API.post("/payments/create/", {
    amount,
  });

  return response.data;
};

export const confirmPayment = async (paymentData) => {
  const response = await API.post(
    "/payments/confirm/",
    paymentData
  );

  return response.data;
};