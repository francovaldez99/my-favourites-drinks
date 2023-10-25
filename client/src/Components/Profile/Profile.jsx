import React from 'react';
import { useDrinks } from '../../context/DrinkContext';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const { favlist, removeFromFavorites } = useDrinks(); // Agregamos la función removeFromFavorites para eliminar de favoritos
  const navigate = useNavigate();

  const handleRemoveFromFavorites = (drinkId) => {
    // Llama a la función para eliminar de favoritos al hacer clic en el botón
    removeFromFavorites(drinkId);
  };

  return (
    <div className='container mx-auto p-4'>
      <h2 className='text-2xl font-semibold mb-4'>Profile</h2>

      <div className='text-center text-gray-500 border border-gray-300 rounded-md m-2 p-4'>
        {favlist.length ? (
          <Splide
            options={{
              type: 'slide',
              perPage: 4,
              perMove: 1,
              rewind: true,
            }}
            aria-label='My Favorite Images'
          >
            {favlist.map((drinkfav, index) => (
              <SplideSlide key={index}>
                <img src={drinkfav.strDrinkThumb} alt={drinkfav.strDrinkThumb} className='p-4 rounded-lg' />
                <div>
                  <h4 className='text-center font-bold' onClick={() => navigate("/detail/" + drinkfav.idDrink)}>{drinkfav.strDrink}</h4>
                  {/* Agrega un botón "Eliminar de Favoritos" */}
                  <button
                    className='bg-red-500 text-white font-semibold px-3 py-1 rounded-md mt-2'
                    onClick={() => handleRemoveFromFavorites(drinkfav.idDrink)}
                  >
                    Eliminar de Favoritos
                  </button>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        ) : (
          <div className='text-center text-gray-500 border border-gray-300 rounded-md p-8'>
            <p>No hay elementos en favoritos</p>
          </div>
        )}

        {/* Agrega el botón "Crear Lista" */}
      </div>
        <div className='text-center mt-4'>
          <button className='bg-blue-500 text-white font-semibold px-4 py-2 rounded-md'>
            Crear Lista
          </button>
        </div>
    </div>
  );
}

export default Profile;
