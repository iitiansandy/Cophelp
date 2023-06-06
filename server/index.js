const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const route = require("./src/routes/routes.js");
const { mongoDbUrl, port } = require('./src/controllers/config.js');
const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());


mongoose
  .connect(
    mongoDbUrl,
    { useNewUrlParser: true }
  )
  .then(() => console.log("Connected with Database"))
  .catch((err) => console.log(err));

app.use("/", route);

app.get("/", (req, res) => {
  res.send("<h1>Welcome to CopHelp</h1>");
});

app.listen( port, () =>
  console.log("Server is up and running")
);
