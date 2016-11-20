jQuery(document).ready(function($) {
	function stick() {
		jQuery(".footer-inner:not(.stickable), .entry-header.entry-meta:not(.stickable)").addClass("stickable").stick_in_parent({
			parent: '.entry-meta'
		});
	}
	stick();

	$("#secondary").stick_in_parent({
		offset_top: 21
	});

	$(document.body).on('post-load', function() {
		stick();
	});
});
