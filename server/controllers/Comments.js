var Comment = require('../models/Comments');

module.exports.create = function(req, res) {
  var project = new Comment(req.body);
  project.save(function(err,result) {
    res.json(result);
  });
};

module.exports.list = function(req, res) {
  Comment.find({}, function(err, results) {
    res.json(results);
  });
};
