import API from "./api";

export const enableTwoFactor = async (code) => {
  const response = await API.post("/2fa/enable/", {
    code,
  });

  return response.data;
};

export const disableTwoFactor = async () => {
  const response = await API.post("/2fa/disable/");

  return response.data;
};