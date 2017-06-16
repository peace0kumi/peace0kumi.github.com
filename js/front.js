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
			$('#header').css('top','-5vh');
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
	
	//smooth page move
	$('.gnb-item.item-resume').click(function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop:$('#contentResume').offset().top}, 
		500);
		return false;
	});
	
	$('.gnb-item.item-publishing').click(function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop:$('#contentPublishing').offset().top}, 
		500);
		return false;
	});
	
	$('.gnb-item.item-contact').click(function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop:$('#contentContact').offset().top}, 
		500);
		return false;
	});
	
	var bodyWidth = $('body').width();
	var bodyHeight = $('body').height();
	
	//portarait and landscape
	if(bodyWidth <= bodyHeight){
		
	}else if(bodyWidth > bodyHeight && bodyWidth < 1280){
		alert('이 페이지는 세로 고정 모드에서만 정상적으로 작동됩니다.');
		$('#frame').css('visibility','hidden');
		$('body').css('background-color','#2c4157');
	}
	
	//daum map
	var container = document.getElementById('map');
	var options = {
		center: new daum.maps.LatLng(37.544359, 126.941241),
		level: 2
	};
	
	var map = new daum.maps.Map(container, options);
	
	var circle = new daum.maps.Circle({
		center : new daum.maps.LatLng(37.544359, 126.941241),
		radius: 100, 
		strokeWeight: 5, 
		strokeColor: '#00ff7f',
		strokeOpacity: 1,
		strokeStyle: 'solid',
		fillColor: '#9bffcd',
		fillOpacity: 0.5 
	});
	circle.setMap(map);
	
	var marker = new daum.maps.Marker({ 
		position: map.getCenter() 
	});
	marker.setMap(map);
	
	function setZoomable(zoomable) {
		map.setZoomable(zoomable);
	}
	function setDraggable(draggable) {
		map.setDraggable(draggable);
	}
	
	if(bodyWidth <= 1024){
		setZoomable(true);
		setDraggable(true);
	}else{
		setZoomable(false);
		setDraggable(false);
	}
	
	//scroll hidden
	$(document).ready(function(){
		setTimeout(scrollTo, 0, 0, 1);
	});
	
	//device check > favicon spread
	if(Detectizr.os.name === 'ios') {
		$('head').append('<link rel="apple-touch-icon-precomposed" sizes="180x180" href="../images/favicon_180x180.png" />');
	} else if(Detectizr.os.name === 'android') {
		$('head').append('<link rel="apple-touch-icon-precomposed" href="../images/favicon_152x152.png" />');
		$('head').append('<link rel="icon" sizes="196x196" href="../images/favicon_196x196.png" />');
	} else {
		$('head').append('<link rel="shortcut icon" href="../images/favicon.ico" />');
	};
});