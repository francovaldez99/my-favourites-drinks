const express=require("express")
const indexRouter = require("./routes/index.routes")
const connectdb = require("./config/db")
const app = express()



app.use(express.json())
app.use(indexRouter)

 connectdb()
module.exports=app