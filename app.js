const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const jwt = require("jsonwebtoken");
require("dotenv").config();

var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(express.json());
app.use(cors(corsOptions));
mongoose
  .connect("mongodb://65.1.132.27:5000/storyBook", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then((res) => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log("Error Connection to database");
    console.log(err);
  });


 
app.use("/api/hello", (req, res) => {
  res.send("HELLO");
  console.log("hello");
});
// create user
// delete usera
// name Change Stuff
// log details
// Times Daily visits
app.use("/api/useraccount", require("./Routes/accountRoute"));

// Create Stories
// create Book
// create Page
app.use("/api/storyData",  require("./Routes/storyDataRoute"));

app.use("/api/getStoriesList", require("./Routes/storyListRoute"));

app.listen("9000", () => {
  console.log("App started on port 9000");
});
