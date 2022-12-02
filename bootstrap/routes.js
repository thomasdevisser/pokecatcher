const express = require("express");
const trainers = require("../routes/api/trainers");
const auth = require("../routes/api/auth");
const pokemon = require("../routes/api/pokemon");
const error = require("../middleware/error");

module.exports = function (app) {
  app.use(express.json());
  app.use("/api/trainers", trainers);
  app.use("/api/auth", auth);
  app.use("/api/pokemon", pokemon);
  app.use(error);
};
