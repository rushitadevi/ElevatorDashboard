const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const elevatorCollection = new mongoose.Schema(
  {
    fabricationNumber: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    floorNumber: {
      type: String,
      required: true,
    },
    deviceIdentificationNumber: {
      type: String,
      required: true,
    },
    manufacturerName: {
      type: String,
      required: true,
    },
    productionYear: {
      type: Number,
      required: true,
    },
    elevatorType: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      enum: ["warning", "operational", "out-of-order"],
    },
    warningMessage: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Elevators = mongoose.model("elevators", elevatorCollection);
module.exports = Elevators;
