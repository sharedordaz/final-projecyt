const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

require('dotenv').config()

const runController = require("./controller.js")
//const hotelRoutes = require("./routes/hotels");

const app = express();

let DBURI = `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASSWORD}@${process.env.HOST}/Rock-me-this?retryWrites=true&w=majorityprocess.env.DBURI`;

console.log(DBURI);

mongoose.connect(DBURI)
  .then(() => {
    console.log('connected to database!')
  })
  .catch(() => {
    console.log('Connection failed');
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  // "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
  res.setHeader("Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE, OPTIONS");
  next();
});


app.use("/api", runController);



module.exports =
  app;

