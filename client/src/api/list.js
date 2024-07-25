import axios from "./axios"

//fav
export const getAllFav=()=>axios.get("/list/get-allfav",{
    headers:{
      Authorization:`Bearer ${localStorage.getItem("token")}`
    }
  })

export const newFav=(itemFav)=>axios.post("/list/new-fav",itemFav,{
    headers:{
      Authorization:`Bearer ${localStorage.getItem("token")}`
    }
  })

export const deleteFav=(idDrink)=>axios.delete("/list/delete-fav",{
    headers:{
      Authorization:`Bearer ${localStorage.getItem("token")}`
    },
    data: { idDrink }
  })

//list
export const getAllList=()=>axios.get("/list/get-all-list",{
    headers:{
      Authorization:`Bearer ${localStorage.getItem("token")}`
    }
  })

export const newList=(data)=>axios.post(`/list/new-list`,data,{
    headers:{
      Authorization:`Bearer ${localStorage.getItem("token")}`
    }
  })

export const deleteList=(idList)=>axios.delete(`/list/delete-list/${idList}`,{
    headers:{
      Authorization:`Bearer ${localStorage.getItem("token")}`
    }
  })

export const newItemInList=(drink,idList)=>axios.post(`/list/new-item/${idList}`,{newItem:{...drink}},{
    headers:{
      Authorization:`Bearer ${localStorage.getItem("token")}`
    }
  })

export const removeItemFromList=(drink,idList)=>axios.delete(`/list/delete-item/${idList}`,{
    headers:{
      Authorization:`Bearer ${localStorage.getItem("token")}`
    },data:{idDrink:drink.idDrink}
  })