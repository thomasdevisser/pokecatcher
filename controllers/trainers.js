const Trainer = require("../models/trainer");

class TrainerController {
  get = async (req, res) => {
    const trainers = await Trainer.find();
    res.status(200).send(trainers);
  };
}

module.exports = new TrainerController();
