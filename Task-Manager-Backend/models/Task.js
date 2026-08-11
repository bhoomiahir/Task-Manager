const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  titlename: {type: String, required: true},
  list: { type: mongoose.Schema.Types.ObjectId, ref: "List", required: true},
  dueDate: { type: Date },
  order: { type: Number, required: true }
});

module.exports = mongoose.model("Task", taskSchema);