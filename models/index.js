require("dotenv").config();
const mongoose = require("mongoose");
const { Schema } = mongoose;

const placeSchema = new Schema({
  name: { type: String, required: true },
  pic: { type: String, default: "http://placekitten.com/350/350" },
  cuisines: { type: String, required: true },
  city: { type: String, default: "anytown" },
  state: { type: String, default: "USA" },
  founded: {
    type: Number,
    min: [1673, "Surly not that old?!"],
    max: [new Date().getFullYear(), "Hey, this  year is in the future!"],
  },
});

placeSchema.methods.showEstablished = function () {
  return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}.`;
};

const Place = mongoose.model("Place", placeSchema);
module.exports = Place;
