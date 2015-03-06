var mongoose = require('mongoose');

module.exports = mongoose.model('Comment', {
  body: String,
  updated: {type: Date, default: Date.now},
  duration: Number,
  project: {type: mongoose.Schema.Types.ObjectId, ref: 'Project'}
});
