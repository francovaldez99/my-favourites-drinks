require("dotenv").config()


const PORT = process.env.PORT
const SECRET_KEY_JWTOKEN=process.env.SECRET_KEY_JWTOKEN
module.exports={
    PORT,
    SECRET_KEY_JWTOKEN
}
