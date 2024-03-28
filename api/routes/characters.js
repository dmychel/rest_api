const express = require("express");
const Character = require("../models/characterSchema");
const { getAll, getOne } = require("../modules/getRequests");

const router = express.Router();

router.get("/", async (req, res) => {
  const allCharacters = await getAll(req, res, Character);
  res.json(allCharacters);
});

router.get("/:id", async (req, res) => {
  const character = await getOne(req, res, req.params.id, Character);
  res.json(character);
});

module.exports = router;
