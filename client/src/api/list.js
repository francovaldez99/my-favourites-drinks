import axios from "./axios"


export const getAllFav=()=>axios.get("/list/get-allfav")

export const newFav=(itemFav)=>axios.post("/list/new-fav",itemFav)

export const deleteFav=(idDrink)=>axios.delete("/list/delete-fav", { data: { idDrink } })
