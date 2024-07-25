const JwtStrategy = require('passport-jwt').Strategy;
const  ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy=require("passport-local")
const bcrypt = require("bcrypt")
const User=require("../models/user.model")
    const opts = {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.SECRET_KEY_JWTOKEN,
      };
const jwt = require("jsonwebtoken")

const JwtpassportStrategy = new JwtStrategy(opts, (jwt_payload, done) => {

  // jwt_payload={
    
  //     username: 'test',
  //     email: 'hola2@hola.com',
  //     id: '669dc04b68610a814ee4b7f4',
  //     iat: 1721615805
    
  // }
  User.findById(jwt_payload.id)
  .then((user)=>{
   
      if(!user){
          return done(null, false)
      }else{
         
          return done(null, {email:user.email, id:user._id,username:user.username});
      }
      
  })
  .catch((err)=>{
  
      return done(err);
  })
  })

;
  const localPassportStrategy = new LocalStrategy.Strategy(
    {
        usernameField:"email"
    },
    (email,password,done)=>{
        User.findOne({email:email})
        
        .then((user)=>{
            if(!user){
                return done(null, false)
            }else{
                if(!bcrypt.compareSync(password,user.password)){
                    return done(null, false);
                }
                return done(null, {email:user.email, id:user._id,username:user.username});
            }
            
        })
        .catch((err)=>{
            
            return done(err);
        })
       
    }
  )

  const generateToken = (user) => {
    return jwt.sign({ id: user.id }, opts.secretOrKey, { expiresIn: '24h' });
  };
  module.exports ={
    localPassportStrategy,
    JwtpassportStrategy
  }