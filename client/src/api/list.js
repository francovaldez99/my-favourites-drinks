import axios from "./axios"

//fav
export const getAllFav=()=>axios.get("/list/get-allfav")

export const newFav=(itemFav)=>axios.post("/list/new-fav",itemFav)

export const deleteFav=(idDrink)=>axios.delete("/list/delete-fav", { data: { idDrink } })

//list
export const getAllList=()=>axios.get("/list/get-all-list")

export const newList=(data)=>axios.post(`/list/new-list`,data)

export const deleteList=(idList)=>axios.delete(`/list/delete-list/${idList}`)

export const newItemInList=(drink,idList)=>axios.post(`/list/new-item/${idList}`,{newItem:{...drink}})

export const removeItemFromList=(drink,idList)=>axios.delete(`/list/delete-item/${idList}`,{data:{idDrink:drink.idDrink}})