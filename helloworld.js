var   https = require("https");
var   fs = require("fs");
var   url = require("url");

https.createServer({
		key: fs.readFileSync("private.key").toString(),
		cert: fs.readFileSync("certificate.pem").toString()
	},
	function (req, res) {
		res.end(fs.readFileSync("./" + url.parse(req.url).pathname));
	}).listen(8000);
