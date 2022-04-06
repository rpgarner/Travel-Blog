const mongoose = require("mongoose");

////////////// USE MONGOOSE TO CONNECT TO MONGODB //////////////////////
mongoose
  .connect("mongodb://127.0.0.1:27017/travelDatabase")
  .then(() => {
    console.log("Successfully connected to MongoDB");
  })
  .catch((e) => {
    console.error("Connection error", e.message);
  });

const db = mongoose.connection;

module.exports = db;
