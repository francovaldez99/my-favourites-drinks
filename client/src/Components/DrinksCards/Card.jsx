import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useDrinks } from "../../context/DrinkContext";
import { deleteFav, newFav } from "../../api/list";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { BsFolderPlus, BsFolderCheck } from "react-icons/bs";
import Modal from "../Model/Modal";
import FormList from "./FormList";

function Card({ drink }) {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const { favlist, setFavList, isLoading,isInOneList } = useDrinks();
  const [ModalIsOpen, SetModalIsOpen] = useState(false);

  const handleToggleFavorite = (drink) => {
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
    } else {
      deleteFav(drink.idDrink)
        .then((res) => {
          setFavList(res.data.list);
        })
        .catch((err) => {
          console.log(err);
        });
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
    <div key={drink.idDrink} className="cursor-pointer rounded m-4 ">
      <div className="relative flex w-full   justify-between items-center top-[50px] text-xl px-2">
        <button
          onClick={() => handleToggleFavorite(drink)}
          className={`mt-2 p-2  rounded-full bg-white border-white   ${
            favlist.some((el) => el.idDrink === drink.idDrink)
              ? "text-red-500"
              : "text-gray-500"
          }`}
        >
          {favlist.some((el) => el.idDrink === drink.idDrink) ? (
            <FaHeart />
          ) : (
            <FaRegHeart />
          )}
        </button>
        <button
          className={`mt-2 p-2 bg-white rounded-full text-gray`}
          onClick={() => isAuthenticated && SetModalIsOpen(true)}
        >
          {isInOneList(drink.idDrink) ? <BsFolderCheck /> : <BsFolderPlus />}
        </button>
      </div>
      <img
        src={drink.strDrinkThumb}
        alt={`${drink.idDrink}+${drink.strDrink}`}
        onClick={() => navigate(`/detail/${drink.idDrink}`)}
        loading="lazy"
        className="rounded"
      />
      <h4 className="text-slate-500 hover:text-slate-800  text-center font-bold">
        {drink.strDrink}
      </h4>
      <Modal isOpen={ModalIsOpen} setIsOpen={SetModalIsOpen}>
        <FormList drink={drink}/>
      </Modal>
    </div>
  );
}

export default Card;
