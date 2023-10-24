import React, { useState } from "react";
import { useDrinks } from "../../context/DrinkContext";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../Loading/LoadingSpinner";
import { newFav } from "../../api/list";
import Card from "./Card";

function Drinks() {
  const { drinks } = useDrinks();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

 

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
        gap: "20px",
        paddingTop: "20px",
        margin: "0 auto",
      }}
      className="w-full p-4"
    >
      {drinks?.map((drink,index) => (
        <Card drink={drink} key={index}/>
      ))}
      {drinks.length === 0 ? (
        <div>
          <h4>{drinks.length} resultados de búsqueda</h4>
        </div>
      ) : null}
    </div>
  );
}

export default Drinks;
