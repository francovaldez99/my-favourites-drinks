const {Router}=require("express")
const userRouter = require("./user.routes")
const authMiddleware = require("../middlewares/auth")
const listRouter = require("./list.routes")
const passport = require("passport")
const indexRouter=Router()
indexRouter.use("/user",userRouter)


indexRouter.use(passport.authenticate("jwt",{session:false}))
indexRouter.use("/list",listRouter)

module.exports=indexRouter