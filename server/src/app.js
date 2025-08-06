const express = require("express");
const indexRouter = require("./routes/index.routes");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const connectdb = require("./config/db");
const cors = require("cors");
const { CLIENT_URL } = require("./config/env");
const passport = require("passport");
const {localPassportStrategy,JwtpassportStrategy} = require("./config/passport");
const User=require("./models/user.model")
const app = express();

console.log(CLIENT_URL);
app.use(morgan("dev"));

app.use(
  cors({
    origin: CLIENT_URL,
  })
);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());


app.use(cookieParser());
app.use(passport.initialize());

passport.use("local",localPassportStrategy);
passport.use("jwt",JwtpassportStrategy);
app.get("/protected",passport.authenticate("jwt",{session:false}))
app.use(indexRouter);



connectdb();


module.exports = app;
