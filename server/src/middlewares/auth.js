const jwt=require("jsonwebtoken")
const {SECRET_KEY_JWTOKEN}=require("../config/env")
const authMiddleware=(req,res,next)=>{
    const token = req.cookies.token;

    if (!token) {
        res.status(401).send('Unauthorized: No token provided');
      } else {
        console.log(token);
        jwt.verify(token, SECRET_KEY_JWTOKEN, function(err, decoded) {
          if (err) {
            res.status(401).send('Unauthorized: Invalid token');
          } else {
            req.email = decoded.email;
            req.id=decoded.id;
            next();
          }
        });
      }
}

module.exports=authMiddleware