const mongoose = require("mongoose");

module.exports = () => {
  mongoose.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.vhfps41.mongodb.net/pokecatcher`
  );
  console.log("Connected to MongoDB...");
};
