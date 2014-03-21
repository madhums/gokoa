
/**
 * Module dependencies.
 */

var views = require('co-views');
var config = require('config');
var path = require('path');
var dir = path.normalize(__dirname + '/../app/views');

/**
 * Expose
 */

module.exports = views(dir, {
  map: { html: config.templating },
  cache: config.viewsCache
  // Should be able to pass locals to the templates
});
