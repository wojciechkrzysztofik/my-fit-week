var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var entrySchema = new Schema({
  name: String,
  hour: Date,
  time: Number,
  created_at: Date,
  updated_at: Date
});

var Entry = mongoose.model('entries', entrySchema);

module.exports = Entry;