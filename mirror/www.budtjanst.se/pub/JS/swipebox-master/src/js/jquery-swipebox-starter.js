$(function() {
	$('.swipebox').swipebox( {
		useCSS : true, // false will force the use of jQuery for animations
		useSVG : false, // false to force the use of png for buttons
		initialIndexOnArray : 0, // which image index to init when a array is passed
		hideCloseButtonOnMobile : false, // true will hide the close button on mobile devices
		hideBarsDelay : 3000000, // delay before hiding bars on desktop
		videoMaxWidth : 1140, // videos max width
		beforeOpen: function() {}, // called before opening
		afterOpen: null, // called after opening
		afterClose: function() {}, // called after closing
		loopAtEnd: false // true will return to the first image after the last image is reached
	});
	
	
	$('body').on('click', '.slide.current', function() {
		if($('html').hasClass('swipebox-no-touch')) {
			$('#swipebox-close').trigger('click');
		}
	});
});

