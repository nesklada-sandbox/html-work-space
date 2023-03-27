export default function() {
    $.Lazy("vid", ["video"], function (element, response) {
		var srcVideo = element.data('src');
		var srcPoster = element.data('poster');
	
		element.attr('poster', srcPoster);
		element.attr('src', srcVideo);
	
		element.removeAttr('data-src data-poster');
	});

    $('.js_lazy').Lazy({
		threshold: 1000
	});
}