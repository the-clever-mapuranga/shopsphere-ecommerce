export const isAuthenticated = () => {
  return !!localStorage.getItem("access");
};

export const login = (access, refresh) => {

  localStorage.setItem("access", access);

  localStorage.setItem("refresh", refresh);

};

export const logout = () => {

  localStorage.removeItem("access");

  localStorage.removeItem("refresh");

};

export const getAccessToken = () => {
  return localStorage.getItem("access");
};