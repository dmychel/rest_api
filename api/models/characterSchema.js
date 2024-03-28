const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const characterSchema = new Schema({
  id: {
    type: String,
  },
  name: {
    type: String,
  },
  description: {
    type: String,
  },
});

const Character = mongoose.model("Character", characterSchema);
module.exports = Character;
