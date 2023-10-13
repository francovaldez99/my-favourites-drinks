const {Router}=require("express")

const userRouter = Router()


userRouter.get("/",(req,res)=>{
    res.send("hola desde users")
})

module.exports=userRouter
