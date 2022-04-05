const { isInteger } = require("lodash");
const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({

  title: {
    type: String,
    required: true,
  },
  completedTask: {
    type: Boolean,
    default: false
  },

});


module.exports = new mongoose.model("ToDo", TodoSchema);