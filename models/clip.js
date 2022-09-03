const mongoose = require('mongoose');
const { Schema } = mongoose;

const clipSchema = new Schema({
  _id: String,
  data:   String,
  date: { type: Date, default: Date.now },
});
clipSchema.index( { "lastModifiedDate": 1 }, { expireAfterSeconds: 30 } );
const Clip = mongoose.model('clip',clipSchema);
module.exports = Clip;