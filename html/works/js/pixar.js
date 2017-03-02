$(function(){
	
	//header
	var didScroll;
	var lastScrollTop = 0;
	var delta = 5;
	var navbarHeight = $('#header').outerHeight();

	$(window).scroll(function(){
		didScroll = true;
	});
	
	setInterval(function(){
		if(didScroll){
			hasScrolled();
			didScroll = false;
		}
	}, 250);
	
	function hasScrolled(){
		var thisScroll = $(this).scrollTop();
		
		if(Math.abs(lastScrollTop - thisScroll) <= delta)
			return;
		if(thisScroll > lastScrollTop && thisScroll > navbarHeight){
			$('#header').css('top','-6vh');
		}else{
			if(thisScroll + $(window).height() < $(document).height()){
				$('#header').css('top','0');
			}
		}
		lastScrollTop = thisScroll;
	};
	
	//mouse wheel
	var windowH = $(window).height();
	
	$('.content-item').each(function(index){
		$(this).attr('data-index', windowH * index);
	});
	
	$('.content-item').on("mousewheel",function(e){
		var sectionPos = parseInt($(this).attr("data-index"));
		
		if(e.originalEvent.wheelDelta >= 0){
			$('html, body').stop().animate({scrollTop:sectionPos - windowH});
			
			return false;
		}else if(e.originalEvent.wheelDelta < 0){
			$('html, body').stop().animate({scrollTop:sectionPos + windowH});
			
			return false;
		}
	});
	
	//popup
	function blind(){
		$('body').append('<div class="blind"></div>');
		$('.blind').fadeTo("500","0.6");
	}
	
	function popOpen(conts){
		$('.content-item').append('<div class="popbox"></div>')
		$('.content-item').children('.popbox').load(conts);
	}
	
	$('[class^=pop-]').click(function(){
		blind();
		
		var cont = $(this).attr('class');
		var conts = cont.split('-'); //쪼개는 것
		var fullUrl = "20161117_pixar_02"+".html ."+conts[1]; //popup.html .event*로 나옴
		popOpen(fullUrl)
	});

	$('.content-item').on('click','.close',function(){
		$('.popbox').fadeOut(function(){
			$(this).remove();
		})
		$('.blind').fadeOut(function(){
			$(this).remove();
		})
	});
});