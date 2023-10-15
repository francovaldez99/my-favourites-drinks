const {Router}=require("express");

const listRouter=Router()
listRouter.get("/get-all-list")
listRouter.post("/new-list/:idList")
listRouter.put("/update-name-list/:idList")
listRouter.put("/update-movies-list/:idList")
listRouter.delete("/delete-list/:idList")
listRouter.delete("/delete-movie-list/:idList")



module.exports=listRouter