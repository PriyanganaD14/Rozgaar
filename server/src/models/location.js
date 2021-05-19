const mongoose = require('mongoose');

const locationSchema = mongoose.Schema({
  locality: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  district: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  pincode: {
    type: String,
    required: true
  }
})

const Location = mongoose.model("Location", locationSchema);

module.exports = Location;