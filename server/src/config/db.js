const mongoose=require("mongoose");
const { MONDODB_CONNECT } = require("./env");

async function connectdb() {
    try {
     await   mongoose.connect(MONDODB_CONNECT)
        console.log("conectado a la base de datos");
    } catch (error) {
        console.log(error.message);
    }
}

module.exports=connectdb