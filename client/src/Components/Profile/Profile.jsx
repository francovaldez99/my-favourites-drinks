import React,{useEffect,useState} from 'react'
import { getAllFav } from '../../api/list'
import { useDrinks } from '../../context/DrinkContext'
function Profile() {
const {favlist}=useDrinks()

  return (
    <div>Profile
<div>
    <h2>Favourites</h2>
    
{/* {
    favlist.length!=0 && (<h1>Hay elementos en Fav</h1>)
} */}
<div className='grid grid-cols-4 '>

{
    favlist.map((drinkfav,index)=>(
        <div key={`fav${index} `} className='p-2'>
            <img src={drinkfav.strDrinkThumb} className='rounded w-full'/>

        </div>
    ))
}
</div>
</div>
    </div>
  )
}

export default Profile