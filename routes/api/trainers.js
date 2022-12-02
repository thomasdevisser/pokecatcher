const express = require("express");
const router = express.Router();
const TrainerController = require("../../controllers/trainers");

router.get("/", TrainerController.get);

module.exports = router;
