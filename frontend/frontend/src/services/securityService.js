import API from "./api";

export const getSecurityStatus = async () => {
  const { data } = await API.get("/security/");
  return data;
};