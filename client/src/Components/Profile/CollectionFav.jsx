import React from "react";
import { useDrinks } from "../../context/DrinkContext";
import Dropdown from "../Dropdown/Dropdown";
import { deleteFav } from "../../api/list";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

function CollectionFav() {
  const { favlist ,setFavList} = useDrinks();
  const navigate=useNavigate()
  const {handleShowWarningToast,handleShowErrorToast,handleShowSuccessToast}=useAuth()
  const handleDelete=(idDrink)=>{
    deleteFav(idDrink)
    .then((res) => {
      handleShowSuccessToast(`drink ${idDrink} deleted`)
      setFavList(res.data.list);
    })
    .catch((err) => {
      console.log(err);
    });
   
  }
  return (
    <div className="grid grid-cols-4 content-center justify-center max-w-[1200px] mx-auto mt-8">
      {favlist.map((el,index) => (
        <div key={index + el.idDrink} className="max-w-[300px] max-h-[300px] min-w-[120px] min-h-[120px]  flex flex-col items-center justify-between relative">
          <div className="absolute top-1 right-0 ">
            
          <div className="absolute right-2 ">
            <Dropdown functionClick={handleDelete} idDrink={el.idDrink}/>
            </div>
          </div>
          <img src={el.strDrinkThumb} alt={el.strDrink} className="w-full h-full object-cover" />
          <h3 className="relative bottom-6 text-center text-white" onClick={()=>navigate("/detail/"+el.idDrink)}>{el.strDrink}</h3>
        </div>
      ))}
    </div>
  );
}

export default CollectionFav;
