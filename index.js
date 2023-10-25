// Modules and Globals
require("dotenv").config();
const express = require("express");
const methodOverride = require("method-override");
const app = express();

// Express Settings
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

// Controllers & Routes
app.use("/places", require("./controllers/places"));

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("*", (req, res) => {
  res.status(404).send("<h1>404 Page</h1>");
});

// Listen for Connections
app.listen(process.env.PORT);
