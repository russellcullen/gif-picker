$(document).ready(function() {
	var btn
	$('div.gif').zclip({
		path:'/static/ZeroClipboard.swf',
		copy: function() { return $(this).children('img')[0].src},
		afterCopy: function(){}
	});
	$('div.gif').click(function() {
		console.log($(this).children('img')[0].src);
	});
});