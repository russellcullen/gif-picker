$(document).ready(function() {
	$("#menu").accordion({	
		collapsible: true, 
		active: false,
		activate: function(event, ui) {
			$('.gif').zclip({
				path:'/static/ZeroClipboard.swf',
				copy: function() { return $(this).attr('src')},
				afterCopy: function(){}
			});
		}
	});
});