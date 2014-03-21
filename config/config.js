
var extend = require('util')._extend;
var base = require('env/base');
var config = require('env/' + process.env.NODE_ENV);

module.exports = extend(base, config);
