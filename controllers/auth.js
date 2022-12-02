const Trainer = require("../models/trainer");
const bcrypt = require("bcrypt");

class AuthController {
  authenticate = async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) return res.status(400).send({ message: "Missing credentials." });

    const trainer = await Trainer.findOne({ username });
    if (!trainer) return res.status(404).send({ message: "Invalid username or password." });

    const validPassword = await bcrypt.compare(password, trainer.password);
    if (!validPassword) return res.status(400).send({ message: "Invalid username or password." });

    const token = trainer.generateAuthToken();
    res.status(200).send(token);
  };
}

module.exports = new AuthController();
