require("express-async-errors");
const Winston = require("winston");

module.exports = () => {
  Winston.exceptions.handle(new Winston.transports.Console({ colorize: true, prettyPrint: true }));
};
