const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const TrainerSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
    },
    pokemon: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Pokemon",
    },
  },
  { timestamps: true }
);

TrainerSchema.methods.generateAuthToken = function () {
  return jwt.sign(
    {
      _id: this._id,
      username: this.username,
      isAdmin: this.isAdmin,
    },
    process.env.JWT_KEY
  );
};

const Trainer = mongoose.model("Trainer", TrainerSchema);

module.exports = Trainer;
