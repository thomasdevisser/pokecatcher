const Pokemon = require("../models/pokemon");

class PokemonController {
  get = async (req, res) => {
    const pokemon = await Pokemon.find();
    res.status(200).send(pokemon);
  };

  create = async (req, res) => {
    let { name, type, rarity, isLegendary } = req.body;
    if (!name || !type || !rarity) return res.status(400).send({ message: "Missing information." });
    if (!isLegendary) isLegendary = false;

    let pokemon = await Pokemon.findOne({ name });
    if (pokemon) return res.status(400).send({ message: "Pokemon already exists." });

    pokemon = await Pokemon.create({ name, type, rarity, isLegendary });
    res.status(200).send(pokemon);
  };

  getOne = async (req, res) => {
    const { name } = req.params;
    console.log(name);

    const pokemon = await Pokemon.findOne({ name });
    if (!pokemon) return res.status(404).send({ message: "No Pokemon with that name." });

    res.status(200).send(pokemon);
  };
}

module.exports = new PokemonController();
