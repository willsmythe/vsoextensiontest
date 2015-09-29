var   http = require("http");
var   fs = require("fs");
var   url = require("url");
var   port = process.env.PORT || 1337;

http.createServer(
	function (req, res) {
		res.end(fs.readFileSync("./" + url.parse(req.url).pathname));
	}).listen(port);
