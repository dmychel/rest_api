const express = require("express");
const Character = require("../models/characterSchema");
const { getAll, getOne } = require("../modules/getRequests");
const { randomNum } = require('../modules/randomNum')

const router = express.Router();

router.get("/all", async (req, res) => {
  const allCharacters = await getAll(req, res, Character);
});

router.get("/random", async (req, res) => {
  const id = randomNum(24)
  await getOne(req, res, id, Character);
});

router.get("/:id", async (req, res) => {
  const character = await getOne(req, res, req.params.id, Character);
});

module.exports = router;
