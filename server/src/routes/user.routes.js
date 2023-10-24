const {Router}=require("express")
const {
    Register, Login, verifyTokenController
}=require("../controllers/user.controllers")
const userRouter = Router()


userRouter.post("/register",Register)
userRouter.post("/login",Login)
userRouter.get("/verify-token",verifyTokenController)
module.exports=userRouter
