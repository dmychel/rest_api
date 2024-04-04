const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const characterSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Character = mongoose.model("Character", characterSchema);
module.exports = Character;
