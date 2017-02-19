var mongoose = require('mongoose');

var loggerSchema = new mongoose.Schema({
  log: {
    type: String,
    required: true,
    unique: true
  },
  createdAt: {
    type: Date,
    expires: 604800,
    default: Date.now
  }
});

module.exports = mongoose.model('Logger',loggerSchema);
