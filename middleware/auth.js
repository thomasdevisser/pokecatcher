const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) return res.status(401).send("You must be logged in.");

  try {
    req.user = jwt.verify(token, process.env.JWT_KEY);
    next();
  } catch (error) {
    res.status(400).send("Invalid token.");
  }
};
