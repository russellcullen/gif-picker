$(document).ready(function() {
	$("#menu").accordion({	
		collapsible: true, 
		active: false,
		heightStyle: "content",
		activate: function(event, ui) {
			$('.gif').zclip({
				path:'/static/ZeroClipboard.swf',
				copy: function() { return $(this).attr('src')},
				afterCopy: function() {
					$.toast({
				        message:"Copied!",
				        displayTime:1000,
				        inTime:100,
				        outTime:200
				    });
				}
			});
		}
	});
});