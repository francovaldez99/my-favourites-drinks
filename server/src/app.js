const express=require("express")
const indexRouter = require("./routes/index.routes")
const morgan = require("morgan")
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser');
const connectdb = require("./config/db")
const cors=require("cors")
const app = express()


app.use(express.json())
app.use(cors({
    credentials: true,
    origin: "http://localhost:5173",
  }))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"))

app.use(cookieParser())

app.use(indexRouter)

 connectdb()
module.exports=app