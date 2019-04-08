jQuery(function() {
	
	//main-visual slide
	$('.bxslider').bxSlider({
		mode: 'fade',
		auto: true,
		pause: 4000,
		autoControls: true,
		slideZIndex: 8,
		minSlides: 1,
		maxSlides: 2,
		onSliderLoad: function() {
			kiteAmination();
		}
	});

	function floatingBanner() {
		// floating banner
		$(window).scroll(function() {
			if($(window).scrollTop() > '620') {
				$('#floatingBanner').addClass('fixed');
			} else {
				$('#floatingBanner').removeClass('fixed');
			}
		});
		var imgHeight = 261;
		var numImgs = 100;
		var cont = 0;
		var img = $('.floating-banner').find('a');
	
		var animation = setInterval( moveSprite,75);
	
		function moveSprite(){
			img.css('margin-top', -1 * (cont*imgHeight));
			cont++;
			if(cont == numImgs){
				cont = 0;
			}
		}
	}
	function kiteAmination() {
		var imgHeight = 580;
		var numImgs = 65;
		var cont = 0;
		var img = $('.kite-motion').find('.kite-con');

		var animation = setInterval( moveSprite,65);

		function moveSprite(){
			img.css('margin-top', -1 * (cont*imgHeight));
			cont++;
			if(cont == numImgs){
				cont = 0;
			}
		}
	}
	floatingBanner();
});