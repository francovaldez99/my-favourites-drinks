const express=require("express");
const indexRouter = require("./routes/index.routes")
const morgan = require("morgan")
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser');
const connectdb = require("./config/db")
const cors=require("cors");
const { CLIENT_URL } = require("./config/env");
const app = express()

console.log(CLIENT_URL);
app.use(express.json())
app.use(cors({
    credentials: true,
    origin: CLIENT_URL,
  }))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"))

app.use(cookieParser())
app.get("/start",(req,res)=>{
  res.status(200).send("<h1>hola esta funcionando</h1>")
})
app.use(indexRouter)

 connectdb()
module.exports=app