const mongoose = require("mongoose");

const person = mongoose.Schema({
  name: { type: String, required: true },
  surname: {type: String, required: true},
  age: {type: Number, required: true}
});


module.exports = mongoose.model('Person', person)
