const mongoose = require("mongoose");

const listSchema = new mongoose.Schema({
  titlename: {type: String, required: true},
  board: {type: mongoose.Schema.Types.ObjectId, ref: "Board", required: true},
  order: {type: Number, required: true}
});

module.exports = mongoose.model("List", listSchema);