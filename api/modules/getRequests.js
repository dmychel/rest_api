const Location = require("../models/locationSchema");
const Character = require("../models/characterSchema");

async function getAll(req, res, model) {
  try {
    const items = await model.find().then((result) => {
      res.json({ items: result });
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

async function getOne(req, res, id, model) {
  let item;
  try {
    const item = await model.findById(id).then((result) => {
      res.json({ item: result });
    });
  } catch (err) {
    if (item == null) {
      res.json({ message: "Cannot find item" });
    } else {
      res.json({ message: err.message });
    }
  }
}

module.exports = { getAll, getOne };
