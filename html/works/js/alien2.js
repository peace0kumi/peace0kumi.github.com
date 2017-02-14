$(document).ready(function(){

	//메뉴바 하버
	$('#header .data-item').mouseenter(function(){
		$(this).css({'background-color':'#bed44d'}).children('a').css({'color':'#1974c7'})
	});
	
	$('#header .data-item').mouseleave(function(){
		$(this).css({'background-color':'#1974c7'}).children('a').css({'color':'#ffffff'})
	});
	
	//슬라이드 배너
	var st = $('.slide-list li');
	var stIdx = $('.slide-list li').first().index();
	var nav = $('#header .data-list li');
	var hisnum = null;
	var stimg = null;
	st.eq(stIdx).addClass('active').find('img').css('display','block')

	//메인 페이지
	//다음 클릭
	$('.button-area .next').click(function(){
		stimg = st.eq(stIdx).find('img')
		slideMotion(stimg,0,"-100%",500)
		stIdx ++
		stimg = st.eq(stIdx).find('img')
		slideMotion(stimg,"100%",0,500)
	});

	//이전 클릭
	$('.button-area .prev').click(function(){
		stimg = st.eq(stIdx).find('img')
		slideMotion(stimg,0,"100%",500)
		stIdx --
		stimg = st.eq(stIdx).find('img')
		slideMotion(stimg,"-100%",0,500)
	});

	//번호 크기에 따라 이동이 변함
	st.on({
		click:function(){
			hisnum = stIdx;
			stIdx = $(this).index();
			
			if(hisnum < stIdx){
				stimg = st.eq(hisnum).find('img')
				slideMotion(stimg,0,"-100%",500)
				stimg = st.eq(stIdx).find('img')
				slideMotion(stimg,"100%",0,500)
			}else if(hisnum > stIdx){
				stimg = st.eq(hisnum).find('img')
				slideMotion(stimg,0,"100%",500)
				stimg = st.eq(stIdx).find('img')
				slideMotion(stimg,"-100%",0,500)
			}
		}
	});

	//메뉴바 클릭시 이동
	nav.on({
		click:function(){
			hisnum = $('.slide-list li.active').index();
			stIdx = $(this).index();
			
			$(this).addClass('active').siblings().removeClass('active')
			
			if(hisnum < stIdx){
				stimg = st.eq(hisnum).find('img')
				slideMotion(stimg,0,"-100%",500)
				stimg = st.eq(stIdx).find('img')
				slideMotion(stimg,"100%",0,500)
			}else if(hisnum > stIdx){
				stimg = st.eq(hisnum).find('img')
				slideMotion(stimg,0,"100%",500)
				stimg = st.eq(stIdx).find('img')
				slideMotion(stimg,"-100%",0,500)
			}
		}
	});
	
	//다음 이전 함수 재사용
	function slideMotion(select,start,end,speed){
		select.parent('li').addClass('active').siblings('li').removeClass('active')
		select.css({
			left:start,
			display:'block'
		}).stop().animate({
			left:end
		},speed)

		if(stIdx == st.length){
			stIdx=0;
			stimg = st.eq(stIdx).find('img');
			slideMotion(stimg,"100%",0,500);
		}else if(0>stIdx){
			stIdx=st.length-1;
			stimg = st.eq(stIdx).find('img');
			slideMotion(stimg,"-100%",0,500);
		}
	}

	//창 사이즈 조절
	$(window).resize(function(){
		var windowW = $('body').width();
		if(windowW <= 1920 && windowW > 450){
		}else{
			alert('모바일 버전은 제대로 보이지 않습니다. PC버전으로 접속 부탁 드립니다.')
		}
	});
});