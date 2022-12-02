const Winston = require("winston");

module.exports = (err, req, res, next) => {
  Winston.error(err.message, err);
  res.status(500).send("Something failed.");
};
