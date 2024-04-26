const Location = require("../models/locationSchema");
const Character = require("../models/characterSchema");

async function getAll(req, res, model) {
  try {
    const items = await model.find();
    return res.json(items);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
}

async function getOne(req, res, id, model) {
  let item;
  try {
    const item = await model.findOne({ item: Number(id) });
    return res.json(item);
  } catch (err) {
    if (item == null) {
      return res.send({ message: "Cannot find item" });
    } else {
      return res.send({ message: err.message });
    }
  }
}


module.exports = { getAll, getOne };
