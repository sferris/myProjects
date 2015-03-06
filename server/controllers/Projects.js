var Project = require('../models/Projects');

module.exports.create = function(req, res) {
  var project = new Project(req.body);
  project.save(function(err,result) {
    res.json(result);
  });
};

module.exports.list = function(req, res) {
  Project.find({}, '_id name', function(err, results) {
    res.json(results);
  });
};

module.exports.get = function(req, res) {
  Project.findById(req.params.id, null, function(err, results) {
    res.json(results);
  });
};
