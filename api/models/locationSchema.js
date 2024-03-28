const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const locationSchema = new Schema({
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

const Location = mongoose.model("Location", locationSchema);
module.exports = Location;
