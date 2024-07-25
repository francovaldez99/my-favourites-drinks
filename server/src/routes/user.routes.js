const {Router}=require("express")
const {
    Register, Login, verifyTokenController
}=require("../controllers/user.controllers")
const passport = require("passport")
const userRouter = Router()


userRouter.post("/register",Register)
userRouter.post("/login",passport.authenticate("local",{session:false}),Login)
userRouter.get("/verify-token",passport.authenticate("jwt",{session:false}),verifyTokenController)

module.exports=userRouter
