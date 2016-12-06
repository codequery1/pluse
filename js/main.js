(function ($) {
 "use strict";

			
	$("#nav").onePageNav();	
	$(".open").on('click', function(){
	$(".main-menu-area").fadeToggle(1000);
	});
	$(".nav-close").on('click', function(){
	$(".main-menu-area").css("display","none");
	});
	$("#nav li a").on('click', function(){
	$(".main-menu-area").css("display","none");
	});
	jQuery(function($) {
	$('#nav a').bind('click', function(event) {
	var $anchor = $(this);
	$('html').stop().animate({
	scrollTop: $($anchor.attr('href')).offset().top - 20
	}, 1000, 'easeInQuart');
	event.preventDefault();
	});
	}); 

	/*---------------------
	Top to Bottom
	--------------------- */
	$('.scroll-bottom').on("click", function(e) {
	e.preventDefault();
	$('html, body').animate({
	scrollTop: $('#bottom-items').offset().top - 83
	}, 1500);
	});

	/*---------------------
	TOP Menu Stick
	--------------------- */
	var s = $("#sticker");
	var pos = s.position();					   
	$(window).scroll(function() {
	var windowpos = $(window).scrollTop();
	if (windowpos > pos.top) {
	s.addClass("stick");
	} else {
	s.removeClass("stick");	
	}
	});	

	/*---------------------
	Scroll to Top
	--------------------- */
	$.scrollUp({
	scrollText: '<i class="fa fa-long-arrow-up"></i>',
	easingType: 'linear',
	scrollSpeed: 900,
	animation: 'fade'
	});

	/*---------------------
	Header Slider
	--------------------- */
	$(".slider-active").owlCarousel({
	autoPlay: 5000,	 
	items : 1,
	itemsDesktop : [1199,1],
	itemsDesktopSmall : [979,1],
	itemsMobile : [767,1],	
	slideSpeed:2000
	});

	/*---------------------
	Header Bottom Slider
	--------------------- */		  
	$(".header-bottom-slide").owlCarousel({
		autoPlay: false,	 
		items : 1,
		itemsDesktop : [1199,1],
		itemsDesktopSmall : [979,1],
		itemsMobile : [768,1],
		slideSpeed:2000,
		pagination : false,
		navigation:true,
		navigationText :	["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"]
	});

	/*---------------------
	CounterUp
	--------------------- */		  
	$('.counter').counterUp({
	delay: 10,
	time: 1000
	});
	/*---------------------
	Blog Slider
	--------------------- */		  
	var carousel = $("#blog-active");
		carousel.owlCarousel({
			items : 3,
			itemsDesktop : [1199,3],
			itemsDesktopSmall : [979,3],
			itemsMobile : [767,1],
			slideSpeed:2000,
			pagination : false,
			navigation:true,
			navigationText :	["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"],			
			afterAction: function(el){
			//remove class active
			this
			.$owlItems
			.removeClass('active')
			//add class active
			this
			.$owlItems //owl internal $ object containing items
			.eq(this.currentItem + 1)
			.addClass('active')
		}
	});

	/*---------------------
	Project Minit UP
	--------------------- */
	$('#project-active').mixItUp();

	/*---------------------
	Bootstrap Slider 
	--------------------- */			
	$('.carousel').carousel({
		pause: true,
		interval: false
	});

	/*---------------------
	BX Slider Slider 
	--------------------- */
	$('.bxslider').bxSlider({
		pagerCustom: '#bx-pager',
		controls: true,
		nextText:'<i class="fa fa-long-arrow-right"></i>',
		prevText:'<i class="fa fa-long-arrow-left"></i>',
	});	

	/*---------------------
	COLIO
	--------------------- */	
	var colio_run = function(){
	$('.list').colio({
		id: '',
		theme: 'white',
		placement: 'before',
		onContent: function(content){
			// init "flexslider" plugin
			$('.flexslider', content).flexslider({
			slideshow: true, 
			animationSpeed: 300,
			controlNav:true,
			});
		}
	});		
	};
	colio_run();
})(jQuery);    