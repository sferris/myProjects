var mongoose = require('mongoose');

module.exports = mongoose.model('Project', {
  name: String,
  description: String,
  owner: String,
  priority: {type: Number, min: 0, max: 10},
  created: { type: Date, default: Date.now },
  completed: Date,
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
  tags: [{type: String, lowercase: true, trim: true}],
  tasks: [{type: String, lowercase: true, trim: true}]
});
