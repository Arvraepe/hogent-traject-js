var restify = require('restify');

var server = restify.createServer({
	name: 'Movia',
	version: '1.0.0'
});

server.get('/hello', function (req, res, next) {
  	res.send({
  		success: true,
  		message: 'Hello Restify!'
  	});
  	return next();
});

server.listen(8899, function () {
  	console.log('%s listening at %s', server.name, server.url);
});