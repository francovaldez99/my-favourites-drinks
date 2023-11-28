const mongoose=require("mongoose");
const { MONDODB_CONNECT } = require("./env");

async function connectdb() {
  try {
    await mongoose.connect(MONDODB_CONNECT, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    
    });
    console.log("Conectado a la base de datos");
  } catch (error) {
    console.error("Error al conectar a la base de datos:", error.message);
  }
}
module.exports=connectdb