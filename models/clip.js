const mongoose = require('mongoose');
const { Schema } = mongoose;

const clipSchema = new Schema({
  _id: String,
  data:   String,
  createdAt: { type: Date, default: Date.now },
});
clipSchema.index({ "createdAt": 1 }, { expireAfterSeconds: 30 } )
const Clip = mongoose.model('clip',clipSchema);
module.exports = Clip;