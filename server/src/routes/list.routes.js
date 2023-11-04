const {Router}=require("express");
const {  getAllFav, newFav, deleteFav } = require("../controllers/fav.controllers");
const {getAllList}=require("../controllers/list.controllers")

const listRouter=Router()
listRouter.get("/get-allfav",getAllFav)
listRouter.post("/new-fav",newFav)
listRouter.delete("/delete-fav",deleteFav)

listRouter.get("/get-all-list",getAllList)
// listRouter.post("/new-list/")
// listRouter.put("/update-name-list/:idList")
// listRouter.put("/update-movies-list/:idList")
// listRouter.delete("/delete-list/:idList")
// listRouter.delete("/delete-movie-list/:idList")



module.exports=listRouter