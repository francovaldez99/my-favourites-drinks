const {Router}=require("express")
const userRouter = require("./user.routes")

const indexRouter=Router()
indexRouter.use("/user",userRouter)
module.exports=indexRouter