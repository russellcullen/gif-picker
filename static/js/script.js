$(document).ready(function() {
	$("#menu").accordion({	
		collapsible: true, 
		active: false,
		heightStyle: "content",
		activate: function(event, ui) {
			if (ui.newPanel) {
				ui.newPanel.children().zclip({
					path:'/static/js/ZeroClipboard.swf',
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
		}
	});
});