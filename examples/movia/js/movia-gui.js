(function(parent, undefined){

	parent.gui = function() {

		function renderQuestion(data) {
          	$('#question').text(data.question);
          	$('#points').text(data.points);

          	$('#answer-a-label').text(data.answers.a);
          	$('#answer-b-label').text(data.answers.b);
          	$('#answer-c-label').text(data.answers.c);
    	}

    	function renderScore () {
    		$('#score').text(parent.getScore());
    	}

		return {
			renderQuestion: renderQuestion, 
	    	renderScore: renderScore
		}
	}();

})(Movia);