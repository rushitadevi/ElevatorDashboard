const express = require("express");
const ElevatorSchema = require("../models/elevator");
const elevatorRouter = express.Router();

elevatorRouter.get("/list-elevators", async (req, res) => {
  try {
    const elevators = await ElevatorSchema.find({});
    res.send(elevators);
  } catch (exx) {
    res.statusCode = 500;
    res.send(exx);
  }
});

module.exports = elevatorRouter;
