import React, { useState } from "react";
import { SlOptionsVertical } from "react-icons/sl";

const Collection = ({ datos, name, onClick, idlist, functionClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const mostrarCollage = datos.length >= 4;
  if (datos.length === 0) {
    return (
      <div className="w-[300px] h-[300px] border-gray-400 border flex flex-col justify-center items-center mx-auto my-auto relative ">
        <h3 className="font-bold ">there is not element in {name}</h3>
        {name != "Favourites" ? (
          <div className={` absolute right-0  text-teal-500 top-1`}>
            <div className="select-none">
              <div
                className={` absolute right-0  text-teal-500`}
                onClick={() => setIsOpen(!isOpen)}
              >
                <SlOptionsVertical />
              </div>
              {isOpen && (
                <div className="w-[190px] max-h-[120px] bg-white rounded  py-1 relative top-5 px-6 hover:bg-gray-100 ">
                  <p
                    className="text-center text-red-500 font-bold hover:text-red-600"
                    onClick={() => functionClick(idlist)}
                  >
                    delete{" "}
                  </p>
                </div>
              )}
            </div>
          </div>
        ) : null}
      </div>
    );
  }
  return (
    <div className="mx-auto hover:scale-105  transition relative">
      {mostrarCollage ? (
        <div className="flex flex-col content-center items-center justify-center  w-[300px]">
          <div className=" grid gap-0 grid-cols-2 justify-center items-center w-[300px] h-[300px] relative ">
            {name != "Favourites" ? (
              <div className={` absolute right-0  top-1 text-teal-500`}>
                <div className="select-none">
                  <div
                    className={` absolute right-0  text-teal-500`}
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <SlOptionsVertical />
                  </div>
                  {isOpen && (
                    <div className="w-[190px] max-h-[120px] bg-white rounded  py-1 relative top-5 px-6 hover:bg-gray-100 ">
                      <p
                        className="text-center text-red-500 font-bold hover:text-red-600"
                        onClick={() => functionClick(idlist)}
                      >
                        delete{" "}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ) : null}
            {datos.slice(0, 4).map((item) => (
              <img
                key={item.idDrink}
                src={item.strDrinkThumb}
                alt={item.strDrink}
                className=" w-[150px] h-[150px] object-contain select-none"
              />
            ))}
            <h3
              className="relative bottom-6 left-[50%] right-[50%] text-center text-white"
              onClick={onClick}
            >
              {name}
            </h3>
          </div>
        </div>
      ) : (
        // Si hay menos de 4 objetos, muestra la imagen única con dimensiones más grandes
        <div className="flex flex-col items-center  w-[300px] bg-red-500 text-center relative select-none">
          <img
            src={datos[0].strDrinkThumb}
            alt={datos[0].strDrink}
            className="  h-[300px] w-[300px] select-none"
          />
          {name != "Favourites" ? (
            <div className={` absolute right-0  top-1 text-teal-500`}>
              <div className="select-none">
                <div
                  className={` absolute right-0  text-teal-500`}
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <SlOptionsVertical />
                </div>
                {isOpen && (
                  <div className="w-[190px] max-h-[120px] bg-white rounded  py-1 relative top-5 px-6 hover:bg-gray-100 ">
                    <p
                      className="text-center text-red-500 font-bold hover:text-red-600"
                      onClick={() => functionClick(idlist)}
                    >
                      delete{" "}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ) : null}
          <h3
            className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-center text-white"
            onClick={onClick}
          >
            {name}
          </h3>
        </div>
      )}
    </div>
  );
};

export default Collection;
