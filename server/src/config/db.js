const mongoose=require("mongoose")

async function connectdb() {
    try {
     await   mongoose.connect("mongodb://localhost:27017/my-favourites-movies")
        console.log("conectado a la base de datos");
    } catch (error) {
        console.log(error.message);
    }
}

module.exports=connectdb