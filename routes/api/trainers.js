const express = require("express");
const router = express.Router();
const TrainerController = require("../../controllers/trainers");

router.get("/", TrainerController.get);
router.post("/", TrainerController.create);

router.get("/:username", TrainerController.getOne);

module.exports = router;
