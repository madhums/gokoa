
/*!
 * gokoa
 * Copyright(c) 2014 Madhusudhan Srinivasa <madhums8@gmail.com>
 * MIT Licensed
 */

var koa = require('koa');
var app = koa();
var gokoa = require('gokoa');

gokoa.boot(app);

var port = process.env.PORT || 3000;
console.log('Koajs application started on port ' + port);
app.listen(port);
