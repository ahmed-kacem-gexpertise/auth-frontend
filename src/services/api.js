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
        const res =refreshToken()
        
        return api(originalRequest);
      } catch (refreshError) {
        console.error("Refresh token failed:", refreshError);
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);
const refreshToken = async() =>{
  const refreshToken = async () => {
    try {
      const response = await api.post("/auth/token/refresh", {}, { withCredentials: true });
  
    return response
     
  
    } catch (error) {
      console.error("Failed to refresh token", error);
      throw error;
    }
  };
  
}
const login = async (data) => {
  try {
    const res = await api.post("/auth/login", data);
    return res;
  } catch (error) {
    console.error("Failed to login", error);
    throw error;
  }
};

const register = async (data) => {
  try {
    const res = await api.post("/auth/register", data);
    return res;
  } catch (error) {
    console.error("Failed to register", error);
    throw error;
  }
};

const user = async () => {
  try {
    const response = await api.get("/auth/user");
    return response.data;
  } catch (error) {
    console.error("Failed to fetch user", error);
    throw error;
  }
};

const forgotPassword = async (email) => {
  try {
    await api.post("/auth/forgot_password", email);
  } catch (error) {
    console.error("Failed to request password reset", error);
    throw error;
  }
};

const resetPassword = async (data, token) => {
  try {
    const res = await api.put("/auth/resetPassword", data, {
      params: { token },
    });
    return res;
  } catch (error) {
    console.error("Failed to reset password", error);
    throw error;
  }
};

const confirmEmail = async (token) => {
  try {
    const response = await api.get("/auth/confirm", {
      params: { token },
    });
    return response.data;
  } catch (error) {
    console.error("Failed to confirm email", error);
    throw error;
  }
};

const resendConfirmationEmail = async (email) => {
  try {
    await api.post("/auth/resendEmail", email);
  } catch (error) {
    console.error("Failed to resend confirmation email", error);
    throw error;
  }
};
const logout = async()=> {
  try {
    await api.post("/auth/logout");

  } catch (error) {
      console.error("Failed to resend confirmation email", error);
      throw error;
    }

}


export {
  login,
  register,
  user,
  resetPassword,
  confirmEmail,
  resendConfirmationEmail,
  forgotPassword,
  logout
};
