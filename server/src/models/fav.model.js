const mongoose = require("mongoose");

// Declare the Schema of the Mongo model
var favSchema = new mongoose.Schema({
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  list: [],
});

module.exports = mongoose.model("Fav", favSchema);
