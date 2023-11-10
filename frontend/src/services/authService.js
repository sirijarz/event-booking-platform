const API_URL = "http://localhost:3001/api/auth/";

const register = async (userData) => {
  const response = await fetch(`${API_URL}register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
  if (response.ok) {
    const data = await response.json();
    localStorage.setItem("token", data.token);
    return data;
  } else {
    throw new Error("Registration failed");
  }
};

const login = async (userData) => {
  const response = await fetch(`${API_URL}login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
  if (response.ok) {
    const data = await response.json();
    localStorage.setItem("token", data.token);
    return data;
  } else {
    throw new Error("Login failed");
  }
};

const logout = () => {
  localStorage.removeItem("token");
};

export default {
  register,
  login,
  logout,
};
