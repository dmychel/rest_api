const express = require("express");
const Character = require("../models/characterSchema");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const characters = await Character.find().then((result) => {
      res.json({ characters: result });
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  let character;
  try {
    const character = await Character.findById(id).then((result) => {
      res.json({ character: result });
    });
  } catch (err) {
    if (character == null) {
      res.json({ message: "Cannot find character" });
    } else {
      res.json({ message: err.message });
    }
  }
});

module.exports = router;
