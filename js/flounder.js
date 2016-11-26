jQuery(document).ready(function($) {
	function stick() {
		jQuery(".footer-inner:not(.stickable)").addClass("stickable").stick_in_parent({
			parent: 'footer.entry-meta'
		});
		jQuery(".entry-header.entry-meta:not(.stickable)").addClass("stickable").stick_in_parent({
			parent: '.entry-area'
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
