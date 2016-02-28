jQuery(function () {
	"use strict";

    /*global jQuery, $*/
	jQuery(document).ready(function(){

		// One Page nav
		jQuery('#navigation').onePageNav({
			'scrollOffset': -2,
			filter: ':not(.external)'
		});

		// Parallax Background
		jQuery('.head-area').parallax("50%", 0.1);
		jQuery('.separator1-area').parallax("50%", 0.1);
		jQuery('.fetu-testimonial-area').parallax("50%", 0.1);
		jQuery('.separator2-area').parallax("50%", 0.1);
		jQuery('.subscribe-area').parallax("50%", 0.1);
		jQuery('.booking-area').parallax("50%", 0.1);
		jQuery('.cta-area').parallax("50%", 0.1);
		jQuery('.sb-head-area').parallax("50%", 0.1);

		// Magnific Popup
		jQuery('.image-popup').magnificPopup({
			type: 'image',
			closeOnContentClick: true,
			closeBtnInside: false,
			mainClass: 'mfp-no-margins mfp-with-zoom',
			image: {
				verticalFit: true
			},
			zoom: {
				enabled: true,
				duration: 300
			}
		});

		// Responsive Video
		$(".video-wrapper").fitVids();

		// About Slider
		$(".about-image-slide").owlCarousel({
			autoPlay: 3000, //Set AutoPlay to 3 seconds
			items : 3,
			itemsDesktop : [1199,2],
			itemsDesktopSmall : [979,2],
			pagination: false
		});

		$(function() {
		  $('a[href*="#"]:not([href="#"])').click(function() {
		    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		      var target = $(this.hash);
		      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		      if (target.length) {
		        $('html, body').animate({
		          scrollTop: target.offset().top
		        }, 1000);
		        return false;
		      }
		    }
		  });
		});

	});
}());
