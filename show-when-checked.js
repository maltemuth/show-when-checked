;(function($) {
	$(function() {
		$(".show-when-checked").each(function() {
			var $target = $(this);
			var duration = $target.data("animation-duration") || 0;
			console.log(duration) ;
			var $trigger = $('#'+$(this).data("trigger-id"));
			var $inputs = $('input[name="'+$trigger.attr('name')+'"]');
;
			$inputs.on('change', function() {
				if ($trigger.prop('checked')) {
					$target.show(duration);
				} else {
					$target.hide(duration);
				};
			});

			$inputs.trigger('change');
		})
	})
})(jQuery);