import React, { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";

const Notification = () => {
 const {showToast,onCloseToast,toastMessage,toastType}=useAuth()

  useEffect(() => {
    const timeout = setTimeout(() => {
        onCloseToast();
    }, 3000); 

    return () => {
      clearTimeout(timeout);
    };
  }, [showToast]);

  const getBackgroundColor = () => {
    switch (toastType) {
      case "success":
        return "bg-green-500";
      case "error":
        return "bg-red-500";
      case "warning":
        return "bg-yellow-500";
      default:
        return "bg-blue-500";
    }
  };

  const handleClose = () => {

    onCloseToast();
  };

  return (
    <div
      className={`${
        showToast ? "block" : "hidden"
      } fixed bottom-0 right-0 m-4 p-4 w-64 rounded-lg text-white text-center ${getBackgroundColor()}`}
    >
      {toastMessage}
      <button
        onClick={()=>handleClose()}
        className="absolute top-0 right-0 p-2 text-white hover:text-gray-300"
      >
        &#215;
      </button>
    </div>
  );
};

export default Notification;
