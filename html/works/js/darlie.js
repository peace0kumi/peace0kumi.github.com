$(document).ready(function(){
	
	//drop down menu
	$('#gnb .gnb-item').mouseenter(function(){
		$(this).find('.local-navigations').slideDown();
	}).mouseleave(function(){
		$(this).find('.local-navigations').slideUp();
    });
	
	//go to top
	$(function() {
		var $gotop = $('#frame .goto-top');
		var $gotopMovBtn = $gotop.find('>a');
		var footerHeight = $('#footer').height();

		if ($(document).scrollTop() > 0) {
			if ($(window).scrollTop()+$(window).height() >= $(document).height()-footerHeight) {
				$gotopMovBtn.css({'top':50});
			} else {
				$gotopMovBtn.css({'top':20});
			}
			$gotop.show();
		} else {
			$gotop.hide();
		}

		$(window).scroll(function() {
			if ($(document).scrollTop() > 0) {
				if ($(window).scrollTop()+$(window).height() >= $(document).height()-footerHeight) {
					$gotopMovBtn.css({'top':50});
				} else {
					$gotopMovBtn.css({'top':20});
				}
				$gotop.show();
			} else {
				$gotop.hide();
			}
		});
	});
	
});