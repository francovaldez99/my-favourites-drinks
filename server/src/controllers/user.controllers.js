const User=require("../models/user.model")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken");
const { SECRET_KEY_JWTOKEN } = require("../config/env");
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
            
            res.status(200).json(newUser)
        }
        
    } catch (error) {
        console.log(error.message);
        res.status(400).json(error)
    }
}

const Login = async(req,res)=>{
    try {
        const {email,password}=req.body;
        const findUser= await User.findOne({email})
        if(!findUser){
            return res.status(401).json({errMessage:"User not found"})
        }
        
            const passwordMatch = bcrypt.compareSync(password,findUser.password)
            if(!passwordMatch){
                return res.status(400).json({errMessage:"Email or Password incorrect"})

            }
            //generamos token !!!
        const token=jwt.sign({id:findUser._id,username:findUser.username,email:findUser.email},SECRET_KEY_JWTOKEN,{expiresIn:"1d"})
        res.cookie('token', token).json({token})
    } catch (error) {
        console.log(error.message);
        res.status(400).json(error)
    }
}

module.exports={
    Register,Login
}