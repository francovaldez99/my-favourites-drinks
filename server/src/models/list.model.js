const mongoose = require("mongoose"); 

var ListSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,


  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    
  },
  list: {
    type: Array,
  },
});

//Export the model
module.exports = mongoose.model("List", ListSchema);
