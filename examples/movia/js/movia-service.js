(function(parent, undefined){

	parent.Movia = function() {

		var service = new Service('http://localhost:8899/');

		var current_question = undefined;
		var current_score = 0;

		function getQuestion (callback, error) {
			service.request({
				method: 'get',
				path: 'question',
				success: function(result) {
					if (result.success) {
						current_question = result.data.id;
						callback(result.data);
					}
				},
				error: error
			});
		}

		function postAnswer (body, callback, error) {
			body.question = current_question;
			service.request({
				method: 'post',
				path: 'answer',
				body: body,
				success: function (result) {
					if (result.success) {
						
						if (result.data.answer) {
							alert('You had the answer correct!', { type: 'success'});
						} else {
							alert('You had the answer wrong :( !');
						}

						current_score += result.data.points;
						callback(result.data);
					}
				},
				error: error
			});
		}

		return {
			getQuestion: getQuestion,
			postAnswer: postAnswer,
			getScore: function () { return current_score; }
		}
	}();

})(window);