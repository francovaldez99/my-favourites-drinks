const mongoose = require('mongoose'); 
const List =require("./list.model");
const Fav = require('./fav.model');
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

    const favoritesList = new Fav({ author: this._id, list: [] });
  
    favoritesList.save()
      .then(() => {
        next();
      })
      .catch((err) => {
        next(err);
      });
  });
  

module.exports = mongoose.model('User', userSchema);