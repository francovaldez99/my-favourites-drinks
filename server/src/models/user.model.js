const mongoose = require('mongoose'); 
const List =require("./list.model")
var userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        
    },
});
userSchema.pre("save", function (next) {

  
    // Crea una nueva lista vacía
    const favoritesList = new List({ name: "Favourites", author: this._id, list: [] });
  
    // Guarda la lista en la base de datos
    favoritesList.save()
      .then(() => {
        next();
      })
      .catch((err) => {
        next(err);
      });
  });
  

module.exports = mongoose.model('User', userSchema);