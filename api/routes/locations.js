const express = require("express");
const Location = require("../models/locationSchema");
const { getAll, getOne } = require("../modules/getRequests");

const router = express.Router();

router.get("/", async (req, res) => {
  const allLocations = await getAll(req, res, Location);
});

router.get("/:id", async (req, res) => {
  const location = await getOne(req, res, req.params.id, Location);
});

module.exports = router;
