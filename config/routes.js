
/**
 * Module dependencies.
 */

var home = require('home');

/**
 * Expose
 */

module.exports = function (app) {

  // Home routes
  app.get('/', home.index)

}
