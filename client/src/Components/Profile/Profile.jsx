import React, { useState } from "react";
import { useDrinks } from "../../context/DrinkContext";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import Modal from "../Model/Modal";
import CreateList from "./CreateList";
import { BsFolderX } from "react-icons/bs";
import { SlOptionsVertical } from "react-icons/sl";
import Collection from "./Collection";
import { deleteList } from "../../api/list";
import { useAuth } from "../../context/AuthContext";

function Profile() {
  const [ModalIsOpen, SetModalIsOpen] = useState(false);
  const { favlist, allList, removeFromFavorites,setAllList } = useDrinks(); 
  const {handleShowWarningToast,handleShowErrorToast,handleShowSuccessToast}=useAuth()
  const navigate = useNavigate();

  const handleDeleteList = (idList) => {
    deleteList(idList)
    .then((res)=>{
      setAllList(res.data)
      handleShowSuccessToast("Deleted List")

    })
    .catch((err)=>{
      console.log(err);

    })

  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Profile</h2>
      <button
        className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-md"
        onClick={() => SetModalIsOpen(true)}
      >
        Crear Lista
      </button>

<div className="grid grid-cols-3 gap-5  content-center max-md:grid-cols-2 mt-3  py-2">
      {
        
        
        <Collection datos={favlist} name={"Favourites"} onClick={()=>navigate("/profile/fav")}/>
      }

{
  allList.map((el,index)=>(
  <Collection datos={el.list} key={index} idlist={el._id} name={el.name}
  functionClick={handleDeleteList}
  onClick={()=>navigate(`/profile/collection/${el._id}
  `)}/>))
}
</div>

 
      
      
      <div className="text-center mt-4 w-full">
        {/* {allList.map((el, index) => (
          <>
          <SlOptionsVertical />
            <h4>{el.name}</h4>
            <div className="text-center text-gray-500 border border-gray-300 rounded-md p-8 max-w-[1220px] w-[1220px] min-w-[200px] h-[409px] min-h-[200px]">

            <Splide
              options={{
                type: "slide",
                perPage: 4,
                perMove: 1,
                rewind: true,
              }}
              aria-label={`${el.name}`}
            >
              {el.list.length !== 0 ? (
                el.list.map((itemEl, indexEl) => (
                  <SplideSlide key={indexEl}>
                    <img
                      src={itemEl.strDrinkThumb}
                      alt={itemEl.strDrinkThumb}
                      className="p-4 rounded-lg"
                    />
                    <div>
                      <button className="bg-white text-2xl  font-semibold px-3 py-1 rounded-md mt-2 relative ">
                      <BsFolderX />
                      </button>
                      <h4
                        className="text-center font-bold"
                        onClick={() => navigate("/detail/" + itemEl.idDrink)}
                        >
                        {itemEl.strDrink}
                      </h4>
                    </div>
                  </SplideSlide>

))
) : (
  <div >
                  <p className="text-center m-auto">No hay elementos en {el.name}</p>
                </div>
              )}
            </Splide>
              </div>
          </>
        ))} */}
      </div>
      <Modal isOpen={ModalIsOpen} setIsOpen={SetModalIsOpen}>
        <div>

        <CreateList />
        </div>
      </Modal>
    </div>
  );
}

export default Profile;
