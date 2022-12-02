const express = require("express");
const auth = require("../../middleware/auth");
const router = express.Router();
const trainerController = require("../../controllers/trainers");

router.get("/", trainerController.get);
router.post("/", trainerController.create);

router.get("/:username", trainerController.getOne);

module.exports = router;
