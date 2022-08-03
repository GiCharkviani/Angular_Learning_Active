const mongoose = require("mongoose");

const country = mongoose.Schema({
  name: { type: String, required: true },
  capital: {type: String, required: true},
});


module.exports = mongoose.model('Country', country)
