$.domReady () ->
	$('.js-transform-email').click (e) ->
		e.preventDefault
		$(this).attr 'href', 'mailto:hi@tomgordon.me'