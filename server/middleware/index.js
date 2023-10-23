const jwt = require("jsonwebtoken");
const fs = require("fs");
require("dotenv").config();

const secretKey = fs.readFileSync("privateKey.pem", "utf-8");

const verifyToken = (req, res, next) => {
  const tokenWithHeader = req.header("Authorization");

  if (process.env.NODE_ENV === "development") {
    if (!tokenWithHeader) {
      return res
        .status(401)
        .json({ message: "Access denied. No token provided." });
    }
    const token = tokenWithHeader.replace("Bearer ", "");

    try {
      const decoded = jwt.verify(token, secretKey, {
        algorithms: ["RS256"],
      });

      next();
    } catch (ex) {
      res.status(400).json({ message: "Invalid token." });
    }
  } else next(); // for testing
};

module.exports = verifyToken;
