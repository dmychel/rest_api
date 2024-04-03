const Location = require("../models/locationSchema");
const Character = require("../models/characterSchema");

async function getAll(req, res, model) {
  try {
    const items = await model.find();
    res.json(items);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
}

async function getOne(req, res, id, model) {
  let item;
  try {
    const item = await model.findOne({ item: Number(id) });
    res.json(item);
  } catch (err) {
    if (item == null) {
      res.send({ message: "Cannot find item" });
    } else {
      res.send({ message: err.message });
    }
  }
}

module.exports = { getAll, getOne };
