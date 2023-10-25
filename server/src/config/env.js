require("dotenv").config()


const PORT = process.env.PORT
const SECRET_KEY_JWTOKEN=process.env.SECRET_KEY_JWTOKEN
const MONDODB_CONNECT=process.env.MONDODB_CONNECT
const CLIENT_URL=process.env.CLIENT_URL
module.exports={
    PORT,
    SECRET_KEY_JWTOKEN,
    MONDODB_CONNECT,
    CLIENT_URL
}
