$(function(){
	
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
		alert('이 페이지는 세로 고정 모드에서만 정상적으로 작동됩니다.')
		console.log(bodyWidth)
	}
	
	//scroll hidden
	$(document).ready(function(){
		setTimeout(scrollTo, 0, 0, 1);
	});
	
});