const express = require("express");
const auth = require("../../middleware/auth");
const admin = require("../../middleware/admin");
const router = express.Router();
const pokemonController = require("../../controllers/pokemon");

router.get("/", pokemonController.get);
router.post("/", auth, admin, pokemonController.create);

router.get("/:name", pokemonController.getOne);

module.exports = router;
