const router = require("express").Router();
const Places = require("../models/data.js");

// GET /places/new
router.get("/new", (req, res) => {
  res.render("places/new");
});

//Get /new
router.post("/", (req, res) => {
  Places.push(req.body);
  res.redirect("/places");
});

// GET /places
router.get("/", (req, res) => {
  res.render("places/index", { places: Places });
});

module.exports = router;
