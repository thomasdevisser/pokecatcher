const mongoose = require("mongoose");

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

const Trainer = mongoose.model("Trainer", TrainerSchema);

module.exports = Trainer;
