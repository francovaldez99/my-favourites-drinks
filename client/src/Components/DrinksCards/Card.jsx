import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useDrinks } from "../../context/DrinkContext";
import { deleteFav, newFav } from "../../api/list";

function Card({ drink }) {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const {  favlist, setFavList } = useDrinks();
  const { isLoading } = useDrinks();
  const handleToggleFavorite = (drink) => {
    console.log(drink);
    if (!isAuthenticated) {
      navigate("/login");
      return;
    }
    if (!favlist.find((el) => el.idDrink === drink.idDrink)) {
      newFav({ newItem: drink })
        .then((res) => {
          setFavList(res.data.list);
        })
        .catch((err) => {
          console.log(err);
        });
    }else{
       
        deleteFav(drink.idDrink)
        .then((res)=>{
            console.log(res);
          setFavList(res.data.list);

        })
        .catch((err)=>{
            console.log(err);
        })
    }
  };

  if (isLoading) {
    return (
      <div className="w-full h-16 flex items-center justify-center">
        <div className="w-6 h-6 border-t-2 border-b-2 border-teal-500 rounded-full animate-spin"></div>
      </div>
    );
  }
  return (
    <div key={drink.idDrink} className="cursor-pointer rounded m-4">
      <img
        src={drink.strDrinkThumb}
        alt={`${drink.idDrink}+${drink.strDrink}`}
        width="300px"
        onClick={() => navigate(`/detail/${drink.idDrink}`)}
        loading="lazy"
        className="rounded"
      />

      <h4 className="text-teal-500 hover:text-teal-700 text-sm text-center">
        {drink.strDrink}
      </h4>

      {/* Botón de favoritos */}
      <button
        onClick={() => handleToggleFavorite(drink)}
        className={`mt-2 px-4 py-2 rounded text-white ${
          favlist.some((el) => el.idDrink === drink.idDrink)
            ? "bg-red-500"
            : "bg-gray-500"
        }`}
      >
        {favlist.some((el) => el.idDrink === drink.idDrink)
          ? "Favorito"
          : "Agregar a Favoritos"}
      </button>
    </div>
  );
}

export default Card;
