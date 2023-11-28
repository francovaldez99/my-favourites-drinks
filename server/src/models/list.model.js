const mongoose = require("mongoose"); 

var ListSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    unique:true

  },
  list: {
    type: Array,
  },
});

module.exports = mongoose.model("List", ListSchema);
