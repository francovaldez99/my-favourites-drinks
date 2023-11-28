const {Router}=require("express");
const {  getAllFav, newFav, deleteFav } = require("../controllers/fav.controllers");
const {getAllList, newList, newListItem, deleteItemList, deleteList}=require("../controllers/list.controllers")

const listRouter=Router()
//fav
listRouter.get("/get-allfav",getAllFav)
listRouter.post("/new-fav",newFav)
listRouter.delete("/delete-fav",deleteFav)
//list 
listRouter.get("/get-all-list",getAllList)
listRouter.post("/new-list",newList)
listRouter.delete("/delete-list/:idList",deleteList)
//new item on list
listRouter.post("/new-item/:idlist",newListItem)
//delete item on list
listRouter.delete("/delete-item/:idlist",deleteItemList)


module.exports=listRouter