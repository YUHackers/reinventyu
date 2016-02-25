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
			items : 2,
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


// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {
	var mapOptions = {
		zoom: 13,

		center: new google.maps.LatLng(40.6700, -73.9400), // New York

		styles: [{"featureType":"all","elementType":"geometry.stroke","stylers":[{"visibility":"simplified"}]},{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"labels","stylers":[{"visibility":"simplified"},{"color":"#f0145a"}]},{"featureType":"landscape","elementType":"all","stylers":[{"weight":"3.79"},{"visibility":"on"},{"color":"#ffecf0"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"landscape","elementType":"geometry.stroke","stylers":[{"visibility":"on"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"simplified"},{"color":"#f0145a"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"saturation":"0"},{"lightness":"0"},{"visibility":"off"}]},{"featureType":"poi","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"all","stylers":[{"visibility":"simplified"},{"color":"#d89ca8"}]},{"featureType":"poi.business","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"poi.business","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"saturation":"0"}]},{"featureType":"poi.business","elementType":"labels","stylers":[{"color":"#f0145a"}]},{"featureType":"poi.business","elementType":"labels.icon","stylers":[{"visibility":"simplified"},{"lightness":"84"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#d89ca8"},{"visibility":"on"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#fedce3"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"off"}]}]
	};

	var mapElement = document.getElementById('map');

	var map = new google.maps.Map(mapElement, mapOptions);

	var marker = new google.maps.Marker({
		position: new google.maps.LatLng(40.6700, -73.9400),
		map: map,
		title: 'Klank Event!'
	});
}
