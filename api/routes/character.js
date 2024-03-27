const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({
    message: "Handling GET request /character",
  });
});

router.get("/:characterId", (req, res) => {
  const id = req.params.characterId;
  res.status(200).json({
    message: "you passed a character ID",
  });
});

module.exports = router;