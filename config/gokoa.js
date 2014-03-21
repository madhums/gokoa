
/**
 * Module dependencies.
 */

var config = require('config');
var router = require('koa-router');
var logger = require('koa-logger');
var serve = require('koa-static');
var fs = require('fs');
var path = require('path');
var models = path.normalize(__dirname + '/../app/models');

/**
 * Expose
 */

module.exports = {
  boot: function (app) {
    // Bootstrap models
    fs.readdirSync(models).forEach(function (file) {
      if (~file.indexOf('.js')) require(models + '/' + file);
    });

    // Serve Static files
    app.use(serve(path.normalize(__dirname + '/../public')));

    // Logger middleware
    app.use(logger());

    // Initialize router middleware
    app.use(router(app));

    // Bootstrap routes
    require('routes')(app);
  }
}
