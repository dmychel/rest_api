const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(morgan("dev"));

// routes
const characterRoutes = require("./api/routes/character");
const locationRoutes = require("./api/routes/location");

// listen for requests
app.get("/", (req, res) => {
  res.status(200).json({
    message: "connected to Yakuza API",
  });
});

app.use("/character", characterRoutes);
app.use("/location", locationRoutes);

// 404
app.use((req, res) => {
  res.status(404).json({
    message: "Something went wrong 404",
  });
});

module.exports = app;
