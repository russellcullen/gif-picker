$(document).ready(function() {
	$("img").lazyload({event: "showing"});
	$("#menu").accordion({	
		collapsible: true, 
		active: false,
		heightStyle: "content",
		activate: function(event, ui) {
			if (ui.newPanel) {
				ui.newPanel.children().trigger("showing");
				ui.newPanel.children().zclip({
					path:'/static/js/ZeroClipboard.swf',
					copy: function() { return $(this).attr('data-original')},
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