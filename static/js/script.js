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
						$('.toast').fadeIn(200);
						$('.toast').delay(500);
						$('.toast').fadeOut(600);
					}
				});
			}
		}
	});
});