const express = require("express");
const Location = require("../models/locationSchema");
const { getAll, getOne } = require("../modules/getRequests");
const { randomNum } = require('../modules/randomNum')

const router = express.Router();

router.get("/all", async (req, res) => {
  return await getAll(req, res, Location);
});

router.get("/random", async (req, res) => {
  const id = randomNum(3)
  return await getOne(req, res, id, Location);
});

router.get("/:id", async (req, res) => {
  return await getOne(req, res, req.params.id, Location);
});

module.exports = router;
