const express = require("express");
const insertData = require("./db");
const app = express();
const mongoose = require("mongoose");
const router = require("./routes/index");
const cors = require("cors");

const dotenv = require("dotenv");
dotenv.config();

const port = process.env.PORT || 5000;
const url = process.env.MONGO_URL;

app.use(cors());

// app.get("/api/data", (req, res) => {
//   res.json({ message: "Hello from the server!" });
// });

mongoose
  .connect(url, {
    server: {
      reconnectTries: Number.MAX_VALUE,
      reconnectInterval: 1000,
    },
  })
  .then(
    app.listen(port, () => {
      console.log("Server is listening on " + port);
    })
  )
  // .then(() => {
  //   // insert data from json into mongodb
  //   // insertData();
  // })
  .catch((err) => console.log(err));

console.log("k");
app.use("/elevators", router);
