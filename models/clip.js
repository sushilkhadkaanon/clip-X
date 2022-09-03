const mongoose = require('mongoose');
const { Schema } = mongoose;

const clipSchema = new Schema({
  _id: String,
  data:   String,
  date: { type: Date, default: Date.now },
});

const Clip = mongoose.model('clip',clipSchema);
module.exports = Clip;