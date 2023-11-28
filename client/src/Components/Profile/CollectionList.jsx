import React,{useState,useEffect} from 'react'
import { useAuth } from '../../context/AuthContext';
import { removeItemFromList } from '../../api/list';
import { useDrinks } from '../../context/DrinkContext';
import { useParams } from 'react-router-dom';
import Dropdown from '../Dropdown/Dropdown';
import { Navigate ,useNavigate} from 'react-router-dom';
function CollectionList() {
    const {idlist}=useParams()
   const navigate =useNavigate()
    const [listInCollection,SetListInCollection]=useState([])
    const {allList,setAllList}=useDrinks()
    const {handleShowWarningToast,handleShowErrorToast,handleShowSuccessToast}=
    useAuth()
    const handleDelete=(...items)=>{
console.log(items[0]);
        removeItemFromList(items[0].drink,items[0].idList)
      .then((res) => {
        handleShowSuccessToast(`drink ${items[0].idDrink} deleted`)
        setAllList(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
     
    }
    useEffect(() => {
    
    const listColl=allList.filter((el)=>el._id===idlist)

    SetListInCollection(listColl)
   
      return () => {
        SetListInCollection([])
      }
    }, [allList])
    

 
    return (
      <div className="grid grid-cols-4 content-center justify-center max-w-[1200px] mx-auto mt-8">
        {listInCollection[0] && listInCollection[0].list.map((el,index) => (
          <div key={index + el.idDrink} className="max-w-[300px] max-h-[300px] min-w-[120px] min-h-[120px]  flex flex-col items-center justify-between relative">
            <div className="absolute top-1 right-0 ">
              
            <div className="absolute right-2 ">
              <Dropdown functionClick={handleDelete} idDrink={el.idDrink} propsdelete={{drink:{...el},idList:listInCollection[0]._id,idDrink:el.idDrink}}/>
              </div>
            </div>
            <img src={el.strDrinkThumb} alt={el.strDrink} className="w-full h-full object-cover" />
            <h3 className="relative bottom-6 text-center text-white " onClick={()=>navigate("/detail/"+el.idDrink)}>{el.strDrink}</h3>
          </div>
        ))}
      </div>
    );
}

export default CollectionList