
/**
 * Module dependencies.
 */

var render = require('views');

/**
 * Home
 */

exports.index = function *() {
  this.body = yield render('home/index.html');
}
