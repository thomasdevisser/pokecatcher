const mongoose = require("mongoose");

const PokemonSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    type: {
      type: [String],
      required: true,
    },
    rarity: {
      type: String,
      required: true,
      enum: ["common", "uncommon", "rare"],
    },
    isLegendary: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

const Pokemon = mongoose.model("Pokemon", PokemonSchema);

module.exports = Pokemon;
