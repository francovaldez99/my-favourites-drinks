const {Router}=require("express")
const userRouter = require("./user.routes")
const authMiddleware = require("../middlewares/auth")
const listRouter = require("./list.routes")

const indexRouter=Router()
indexRouter.use("/user",userRouter)

indexRouter.use(authMiddleware)
indexRouter.use("/list",listRouter)

module.exports=indexRouter