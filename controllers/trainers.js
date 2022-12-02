const Trainer = require("../models/trainer");
const bcrypt = require("bcrypt");

class TrainerController {
  get = async (req, res) => {
    const trainers = await Trainer.find().select(["username", "pokemon", "createdAt"]);
    res.status(200).send(trainers);
  };

  create = async (req, res) => {
    let { username, password } = req.body;
    if (!username || !password) return res.status(400).send({ message: "Missing credentials." });

    let trainer = await Trainer.findOne({ username });
    if (trainer) return res.status(400).send({ message: "Username already in use." });

    const salt = await bcrypt.genSalt(10);
    password = await bcrypt.hash(password, salt);

    trainer = await Trainer.create({ username, password, isAdmin: false });
    res.status(200).send(trainer);
  };

  getOne = async (req, res) => {
    const { username } = req.params;

    const trainer = await Trainer.findOne({ username }).select([
      "username",
      "pokemon",
      "createdAt",
    ]);
    if (!trainer) return res.status(404).send({ message: "No trainer with that username." });

    res.status(200).send(trainer);
  };
}

module.exports = new TrainerController();
