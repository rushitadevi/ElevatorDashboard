const mongoose = require("mongoose");
const Elevator = require("../models/elevator");
const fs = require("fs");

const dotenv = require("dotenv");
dotenv.config();

// Connection URL
const url = process.env.MONGO_URL;

mongoose.connect(url, { useNewUrlParser: true });

async function insertData() {
  try {
    // Insert data while enforcing the schema
    const parsedData = JSON.parse(
      fs.readFileSync("server/elevate-industries.json", "utf8")
    );

    parsedData &&
      parsedData.map(async (data) => {
        const elevatorData = new Elevator(data);
        await elevatorData.save();
      });

    console.log("Data inserted successfully.");
  } catch (err) {
    console.error("Error inserting data:", err);
  }
}

module.exports = insertData;
