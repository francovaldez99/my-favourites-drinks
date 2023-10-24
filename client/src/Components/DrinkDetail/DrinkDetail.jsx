import React, { useEffect, useState } from "react";
import { useDrinks } from "../../context/DrinkContext";
import { useParams } from "react-router-dom";
import { getDetailDrinkById } from "../../api/drinks";
import LoadingSpinner from "../Loading/LoadingSpinner";

function DrinkDetail() {
  const { drinkDetail, setDrinkDetail } = useDrinks();
  const { idDrink } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchDetail(id) {
      try {
        const {
          data: { drinks },
        } = await getDetailDrinkById(id);
        setDrinkDetail(drinks[0]);
        setIsLoading(false)
      } catch (error) {
        console.log(error);
      }
    }

    fetchDetail(idDrink);

    return () => {
      setDrinkDetail({});
    };
  }, []);

  if (isLoading) {
    return (<LoadingSpinner/>)
  }
  return (
      <>
             
              <div className="flex m-3 flex-wrap justify-center">
   
          <img
            src={drinkDetail.strDrinkThumb}
            alt={drinkDetail.strDrink}
            className="max-w-sm mx-auto rounded-lg shadow-md"
          />
          <div className="max-w-lg p-4">
            <h2 className="text-2xl font-semibold mb-2">{drinkDetail.strDrink}</h2>
            <div className="text-gray-500 mb-2">
              <p>Category: {drinkDetail.strCategory}</p>
              <p>Glass: {drinkDetail.strGlass}</p>
              <p>Alcoholic: {drinkDetail.strAlcoholic}</p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold">Ingredients:</h3>
              <ul className="text-gray-500">
                {Object.keys(drinkDetail)
                  .filter((key) => key.startsWith("strIngredient"))
                  .filter((el) => drinkDetail[el] !== null)
                  .map((key, index) => (
                    <li key={index}>
                      {drinkDetail[key]} - {drinkDetail[`strMeasure${index + 1}`]}
                    </li>
                  ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Instructions:</h3>
              <p className="text-gray-500">{drinkDetail.strInstructions}</p>
            </div>
          </div>
          
              </div>
              
      </>
  );
}

export default DrinkDetail;
