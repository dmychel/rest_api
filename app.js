// middleware
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

// use
const app = express();
app.use(morgan("dev"));
require("dotenv").config();

// routes
const characterRoutes = require("./api/routes/characters");
const locationRoutes = require("./api/routes/locations");

// Replace the uri string with your connection string.
const URI = process.env.DB_CONN;
const PORT = process.env.PORT

// connect to database
mongoose.connect(URI)
  .then((result) => app.listen(PORT))
  .catch((err) => console.log(err))

// listen for requests
app.get("/", (req, res) => {
  res.status(200).json({
    message: "connected to Yakuza API",
  });
});

app.use("/characters", characterRoutes);
app.use("/locations", locationRoutes);

// 404
app.use((req, res) => {
  res.status(404).json({
    message: "Something went wrong 404",
  });
});

module.exports = app;
