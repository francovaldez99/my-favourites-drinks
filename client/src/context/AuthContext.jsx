import { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import axios from "../api/axios";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  //auth y user
  const [user, SetUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  //toast
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("");
  //funcion para toast exitoso
  const handleShowSuccessToast = (successMessage) => {
    setToastMessage(successMessage);
    setToastType("success");
    setShowToast(true);
  };
  //funcion para toast error

  const handleShowErrorToast = (errorMessage) => {
    setShowToast(true);
    setToastMessage(errorMessage);
    setToastType("error");
  };
  //funcion para toast advertencia

  const handleShowWarningToast = (warningMessage) => {
    setToastMessage(warningMessage);
    setToastType("warning");
    setShowToast(true);
  };
  //funcion para toast al cerrar
  const onCloseToast = () => {
    setShowToast(false);
    setToastMessage("");
    setToastType("");
  };
  useEffect(() => {
    const checkLogin = async () => {
      try {
        const tokenFromLocalStorage = localStorage.getItem("token")

     
        const verify = await axios.get("/user/verify-token",{
          headers:{
            Authorization:`Bearer ${tokenFromLocalStorage}`
          }
        });
    
        setIsAuthenticated(true);
        SetUser(verify.data);
      } catch (error) {
        
   setIsAuthenticated(false);
        SetUser(null);
        navigate("/login");
      }
    };
    checkLogin();
  }, []);
  const logout = () => {
    localStorage.removeItem("token")
    SetUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        user,
        SetUser,
        onCloseToast,
        handleShowSuccessToast,
        handleShowErrorToast,
        handleShowWarningToast,
        toastType,
        showToast,
        toastMessage,
        logout,
        
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);
