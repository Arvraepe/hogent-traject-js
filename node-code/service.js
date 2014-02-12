// Service

var restify = require('restify');
var questions = require('./questions.js');
var _ = require('underscore');

// Server
var server = restify.createServer({
	name: 'Movia',
	version: '1.0.0'
});

server.use(restify.CORS());
// server.use(restify.fullResponse());
server.use(restify.bodyParser());

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

server.get('/question', function (req, res, next) {
	var questionObject = questions.list[getRandomInt(0, questions.list.length - 1)];
  	res.send({
  		success: true,
  		data: _.omit(questionObject, "correct")
  	});
  	return next();
});

server.post('/answer', function (req, res, next) {
	var question = _.find(questions.list, function (q) { return q.id === req.body.question; });
	if (question) {
		var correct = (question.correct === req.body.answer);
		var points = correct ? question.points : 0;
		res.send({
			success: true,
			data: {
				answer: correct,
				points: points
			}
		});
	} else {
		res.send({
			success: false,
			message: "Couldn't find the question"
		});
	}
});

server.listen(8899, function () {
  	console.log('%s listening at %s', server.name, server.url);
});