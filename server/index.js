const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const route = require("./src/routes/routes.js");
const cors = require('cors');


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());


mongoose
  .connect(
    "mongodb+srv://dbuser:S%40ndy19891@cluster0.dl1os.mongodb.net/CopHelp-DB",
    { useNewUrlParser: true }
  )
  .then(() => console.log("Connected with Database"))
  .catch((err) => console.log(err));

app.use("/", route);

app.get("/", (req, res) => {
  res.send("<h1>Welcome to CopHelp</h1>");
});

const port = 5003;

app.listen(process.env.PORT || port, () =>
  console.log("App is running on port", process.env.PORT || port)
);
