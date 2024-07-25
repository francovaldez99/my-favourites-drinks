const User=require("../models/user.model")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken");
const { SECRET_KEY_JWTOKEN, CLIENT_URL, NODE_ENV } = require("../config/env");
const Register=async(req,res)=>{

    try {
        const {email,username,password}=req.body;
        const userExist=await User.findOne({ 
            email: email
        });
        const usernameExist=await User.findOne({ 
            username: username
        });
        if(userExist){return res.status(400).json({errMessage:"Email already in use."})}
        if(usernameExist){return res.status(400).json({errMessage:"Username already in use."})}
        
        else{
         //creamos el usuario
            const HashedPassword=bcrypt.hashSync(password,10)
            
            const newUser=await User.create({username,email,password:HashedPassword})
            
            res.status(200).json({username:newUser.username,id:newUser._id,email:newUser.email,message:"User created Succefully"})
        }
        
    } catch (error) {
        console.log(error.message);
        res.status(400).json(error)
    }
}

const Login = async(req,res)=>{
    try {
      let payload = {
        username : req.user.username,
        id:req.user.id
      }
       const token = await jwt.sign(payload,process.env.SECRET_KEY_JWTOKEN)

       return res.status(200).json(
        {
          ...req.user,
          token
        }
       )
      
    } catch (error) {
        console.log(error.message);
        res.status(400).json(error)
    }
}

const verifyTokenController  = async(req,res)=>{
    try {
      res.status(200).json(
        {
          email:req.user.email,username:req.user.username }
      )
    } catch (error) {
      res.status(401)
    }
  }
  


module.exports={
    Register,Login,verifyTokenController
}