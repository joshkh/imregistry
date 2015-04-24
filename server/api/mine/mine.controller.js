'use strict';

var _ = require('lodash');
var Mine = require('./mine.model');

// Get list of mines
exports.index = function(req, res) {
  Mine.find(function (err, mines) {
    if(err) { return handleError(res, err); }
    return res.json(200, mines);
  });
};

// Get a single mine
exports.show = function(req, res) {
  Mine.findById(req.params.id, function (err, mine) {
    if(err) { return handleError(res, err); }
    if(!mine) { return res.send(404); }
    return res.json(mine);
  });
};

// Creates a new mine in the DB.
exports.create = function(req, res) {
  Mine.create(req.body, function(err, mine) {
    if(err) { return handleError(res, err); }
    return res.json(201, mine);
  });
};

// Updates an existing mine in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Mine.findById(req.params.id, function (err, mine) {
    if (err) { return handleError(res, err); }
    if(!mine) { return res.send(404); }
    var updated = _.merge(mine, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, mine);
    });
  });
};

// Deletes a mine from the DB.
exports.destroy = function(req, res) {
  Mine.findById(req.params.id, function (err, mine) {
    if(err) { return handleError(res, err); }
    if(!mine) { return res.send(404); }
    mine.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}