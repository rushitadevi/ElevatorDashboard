const express = require("express");
const insertData = require("./db");
const app = express();
const mongoose = require("mongoose");
const elevatorRouter = require("./routes/elevatorRoute");
const userRouter = require("./routes/userRoute");
const bodyParser = require("body-parser");

const cors = require("cors");
app.use(bodyParser.json());

const dotenv = require("dotenv");
dotenv.config();

const port = process.env.PORT || 5000;
const url = process.env.MONGO_URL;

app.use(
  cors({
    AccessControlAllowOrigin: "*",
    origin: "*",
  })
);

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

app.use("/api/elevators", elevatorRouter);
app.use("/api/users", userRouter);

module.exports = app;
