
import React,{useState} from 'react'
import { SlOptionsVertical } from "react-icons/sl";

function Dropdown({functionClick,idDrink,propsdelete}) {
    const [isOpen,setIsOpen]=useState(false)

  return (
    <div className='select-none' >
        <div className={` absolute right-0  text-teal-500` } 
        onClick={()=>setIsOpen(!isOpen)}>

        <SlOptionsVertical />
        </div>
      {
          isOpen &&
     <div className='w-[190px] max-h-[120px] bg-white rounded  py-1 relative top-5 px-6 hover:bg-gray-100 '>

          
          <p className='text-center text-red-500 font-bold hover:text-red-600' onClick={()=>functionClick(propsdelete?propsdelete:idDrink)}>delete </p>
        </div>
        }
    </div>
  )
}

export default Dropdown