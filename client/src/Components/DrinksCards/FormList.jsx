import React from 'react'
import { useDrinks } from '../../context/DrinkContext'
import CreateList from '../Profile/CreateList';
import { newItemInList, removeItemFromList } from '../../api/list';
import { useAuth } from '../../context/AuthContext';
import { FaBookmark } from "react-icons/fa6";
import { FaRegBookmark } from 'react-icons/fa';

function FormList({drink}) {
    const {allList,isInOneList,setAllList}=useDrinks();
    const {handleShowWarningToast,handleShowErrorToast,handleShowSuccessToast}=useAuth()
  const handleInputChange=(event)=>{
    const {id,name}=event.target
console.log(id,name);
    console.log(!allList.find((el)=>el.name===name).list.some((item)=>item.idDrink===drink.idDrink));
    if(!allList.find((el)=>el.name===name).list.some((item)=>item.idDrink===drink.idDrink)){
    console.log("por aca pasa if");

      newItemInList(drink,id)
      .then((res)=>{
        setAllList(res.data)
        handleShowSuccessToast("drink agregado")
      })
      .catch((err)=>{
        console.log(err);
        handleShowErrorToast("Algo salio mal ")
      })
    }else{
    console.log("por aca pasa else ");

      removeItemFromList(drink,id)
      .then((res)=>{

        setAllList(res.data)
        handleShowSuccessToast("drink quitado")

      })
      .catch((err)=>{

        handleShowErrorToast("Algo salio mal ")
console.log(err);
      })
    }
  }
  return (
    <div>
      <div className='bg-white mb-2 py-2 px-4 rounded flex flex-col '>

      
  {
    allList && allList.map((drinkItem,index)=>(
    
    <div key={index} className='py-1'>
      <input type='checkbox' checked={allList.find((el)=>el.name===drinkItem.name).list.some((item)=>item.idDrink===drink.idDrink)} id={drinkItem._id} name={drinkItem.name} onChange={(event)=>handleInputChange(event)} style={{display:"none"}}/>
      <label htmlFor={drinkItem._id} className='flex items-center '>{allList.find((el)=>el.name===drinkItem.name).list.some((item)=>item.idDrink===drink.idDrink) ? 
  <div className='text-blue-500'>
    <FaBookmark />
  </div>
  :
  <div className=''>
    <FaRegBookmark />
  </div>}{drinkItem.name}</label>
    </div>
    
    ))
  }
  </div>
  <CreateList/>
    </div>
  )
}

export default FormList