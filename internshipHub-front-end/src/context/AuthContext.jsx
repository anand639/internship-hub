import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import api from "../axiosConfig";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ token: null, user: null });

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("user");
    if (token) {
      setAuth({ user: JSON.parse(userData), token });
    }
  }, []);

  const login = async (email, password) => {
    try {
      const res = await api.post("/auth/login", { email, password });

      const { token, data } = res.data;
      setAuth({ token, user: data });
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(data));
      return true;
    } catch (error) {
      alert(error?.response?.data?.msg);

      return false;
    }
  };

  const register = async (email, password, username) => {
    try {
      const res = await api.post("/auth/register", {
        email,
        password,
        username,
      });

      const { token, data } = res.data;
      setAuth({ token, user: data });
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(data));
    } catch (error) {
      alert(error?.response?.data?.msg);

      return false;
    }
  };

  const logout = () => {
    setAuth({ token: null, user: null });
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.reload();
  };

  return (
    <AuthContext.Provider value={{ auth, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
