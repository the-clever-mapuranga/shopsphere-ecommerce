import API from "./api";

export const getNotificationSettings = async () => {
  const { data } = await API.get("/notifications/");
  return data;
};

export const saveNotificationSettings = async (settings) => {
  const { data } = await API.post(
    "/notifications/",
    settings
  );

  return data;
};