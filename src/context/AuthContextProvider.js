import axios, { formToJSON } from "axios";
import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
export const authContext = createContext();
export const useAuth = () => useContext(authContext);
const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const API = "http://34.173.115.25/api/v1";

  async function handleRgister(FormData) {
    try {
      setLoading(true);
      await axios.post(`${API}/account/register/`, FormData);
      navigate("/register-success");
    } catch (error) {
      setError(Object.values(error.response.data));
    } finally {
      setLoading(true);
    }
  }

  const values = { handleRgister, loading, error, setError, current };
  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthContextProvider;
