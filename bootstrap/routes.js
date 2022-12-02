const express = require("express");
const trainers = require("../routes/api/trainers");
const error = require("../middleware/error");

module.exports = function (app) {
  app.use(express.json());
  app.use("/api/trainers", trainers);
  app.use(error);
};
