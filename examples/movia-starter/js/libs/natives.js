$.pnotify.defaults.delay = 1250;
$.pnotify.defaults.styling = "bootstrap3";

window._alert = window.alert;
window.alert = function (message, options) {
	var config = $.extend({ text: message, type: 'warning' }, options);
	console.log(config);
	$.pnotify(config);
};