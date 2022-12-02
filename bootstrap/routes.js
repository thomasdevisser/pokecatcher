const express = require("express");
const trainers = require("../routes/api/trainers");

module.exports = function (app) {
  app.use(express.json());
  app.use("/api/trainers", trainers);
};
