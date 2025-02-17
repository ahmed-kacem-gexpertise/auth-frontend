import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:5000",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        await api.post("/auth/token/refresh", {}, { withCredentials: true });

        return api(originalRequest);
      } catch (refreshError) {
        console.error("Refresh token failed:", refreshError);
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

const login = (data) => {
  return api.post("/auth/login", data);
};

const register = (data) => {
  return api.post("/auth/register", data);
};
const user = async () => {
  const response = await api.get("/auth/user");
  return response.data;
};
const forgotPassword = (email) => {
  api.post("/auth/forgot_password", email);
};
const resetPassword = (data, token) => {
  return api.put("/auth/resetPassword", data, {
    params: { token },
  });
};
const confirmEmail = async (token) => {
  const response = await api.get("/auth/confirm", {
    params: { token },
  });
  return response.data;
};
const resendConfirmationEmail = (email) => {
  api.post("/auth/resendEmail", email);
};

export {
  login,
  register,
  user,
  resetPassword,
  confirmEmail,
  resendConfirmationEmail,
  forgotPassword,
};
