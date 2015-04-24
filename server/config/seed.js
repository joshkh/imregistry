/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var generate = require('project-name-generator');
var User = require('../api/user/user.model');
var Mine = require('../api/mine/mine.model');

console.log("name", generate().dashed)

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function() {
      console.log('finished populating users');
    }
  );
});

Mine.find({}).remove(function() {

  for (var i = 0; i < 10; i++) {

    var name = generate().dashed;

    Mine.create({
      name: name,
      uri: 'http://www.' + name + '.com',
      email: 'admin@' + name + '.com',
      active: 'true'
    }, function() {
      console.log('finished populating mines');
    });

  }

});