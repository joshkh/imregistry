'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    uuid = require('node-uuid');

var MineSchema = new Schema({
	name: String,
  uri: String,
  email: String,
  uuid: {
  	type: String,
  	default: function genUUID() {
  		return uuid.v1();
  	}
  },
  active: Boolean
});

module.exports = mongoose.model('Mine', MineSchema);