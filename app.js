require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

require("./bootstrap/db");

app.listen(port, () => {
  console.log(`Server started listening on port ${port}...`);
});
