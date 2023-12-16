import axiosClient from "./axios";

const authApi = {
  login: (data) => {
    return axiosClient
      .post("/api/authentication/login", data)
      .catch((error) => {
        console.error("Error during login:", error);
        throw error; // Rethrow the error to propagate it further
      });
  },
  signup: (data) => {
    return axiosClient
      .post("/api/authentication/signup", data)
      .catch((error) => {
        console.error("Error during signup:", error);
        throw error; // Rethrow the error to propagate it further
      });
  },
};

export default authApi;
