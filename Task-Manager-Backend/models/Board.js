const mongoose = require("mongoose");

const boardSchema = new mongoose.Schema({
  titlename: {type: String, required: true},
  owner: {type: mongoose.Schema.Types.ObjectId, ref: "User", required: true}
});

module.exports = mongoose.model("Board", boardSchema);