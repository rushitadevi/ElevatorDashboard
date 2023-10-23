const express = require("express");
const ElevatorSchema = require("../models/elevator");
const verifyToken = require("../middleware");
const router = express.Router();

router.get("/list", verifyToken, async (req, res) => {
  try {
    const elevators = await ElevatorSchema.find({});
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(elevators);
  } catch (exx) {
    res.statusCode = 500;
    res.send(exx);
  }
});

module.exports = router;
