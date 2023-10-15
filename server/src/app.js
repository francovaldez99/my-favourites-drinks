const express=require("express")
const indexRouter = require("./routes/index.routes")
const morgan = require("morgan")
const cookieParser = require('cookie-parser')
const connectdb = require("./config/db")
const app = express()


app.use(express.json())
app.use(morgan("dev"))
app.use(cookieParser())

app.use(indexRouter)

 connectdb()
module.exports=app