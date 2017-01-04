$(function(){
	
	//header
	var didScroll;
	var lastScrollTop = 0;
	var delta = 5;
	var navbarHeight = $('#header').outerHeight();

	$(window).scroll(function(){
		didScroll = true;
	})
	
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
	}
	
	//scroll
	var spot = []
	
	$('.content-primary .content-item').each(function(i,e){
		spot.push($(e).offset().top)
	});
	
	$("#gnb li").click(function(){
		var idx = $(this).index();
		
		$('html, body').animate({
			scrollTop:spot[idx]
		});
		
		$('#siteTitle a').click(function(){
			$('html, body').animate({
				scrollTop:0
			});
		});
	});
	
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
	})
});