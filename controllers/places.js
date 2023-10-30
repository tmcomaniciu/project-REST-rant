const router = require("express").Router();
const Places = require("../models/data.js");

//Show
router.get("/:id", (req, res) => {
  let id = Number(req.params.id);
  if (isNaN(id)) {
    res.render("error404");
  } else if (!places[id]) {
    res.render("error404");
  } else {
    res.render("places/show", { place: places[id] });
  }
});

// GET /places/new
router.get("/new", (req, res) => {
  res.render("places/new");
});

//Get /new
router.post("/", (req, res) => {
  console.log(req.body);
  Places.push(req.body);
  res.redirect("/places");
});

// GET /places
router.get("/", (req, res) => {
  res.render("places/index", { places: Places });
});

module.exports = router;
