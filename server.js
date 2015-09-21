var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic('c:/repos/node-sample')).listen(8080);