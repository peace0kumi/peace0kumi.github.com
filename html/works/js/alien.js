$(document).ready(function(){

	//슬라이드 배너
	var st = $('.slidebanner li');
	var stIdx = $('.slidebanner li').first().index();
	var nav = $('.nav li');
	var hisnum = null;
	var stimg = null;
	st.eq(stIdx).addClass('on').find('img').css('display','block')

	//메인 페이지
	//다음 클릭
	$('.slidebanner .next').click(function(){
		stimg = st.eq(stIdx).find('img')
		slideMotion(stimg,0,"-100%",800)
		stIdx ++
		stimg = st.eq(stIdx).find('img')
		slideMotion(stimg,"100%",0,800)
	});

	//이전 클릭
	$('.slidebanner .prev').click(function(){
		stimg = st.eq(stIdx).find('img')
		slideMotion(stimg,0,"100%",800)
		stIdx --
		stimg = st.eq(stIdx).find('img')
		slideMotion(stimg,"-100%",0,800)
	});

	//메뉴바 하버
	$('#header .data-item').hover(function(){
		$(this).css({'background-color':'#bed44d'}).children('a').css({'color':'#1974c7'})
	},function(){

		var as = $('.slidebanner li.on').index();
		var asd = $('.data-item li.active').index();

		if(as+1 == asd){
			$(this).css({'background-color':'#bed44d'}).children('a').css({'color':'#1974c7'})
		}
		else{
			$(this).css({'background-color':'#bed44d'}).children('a').css({'color':'#1974c7'})
		}
	});

	//번호 크기에 따라 이동이 변함
	st.on({
		click:function(){
			hisnum = stIdx;
			stIdx = $(this).index();
			
			if(hisnum < stIdx){
				stimg = st.eq(hisnum).find('img')
				slideMotion(stimg,0,"-100%",800)
				stimg = st.eq(stIdx).find('img')
				slideMotion(stimg,"100%",0,800)
			}else if(hisnum > stIdx){
				stimg = st.eq(hisnum).find('img')
				slideMotion(stimg,0,"100%",800)
				stimg = st.eq(stIdx).find('img')
				slideMotion(stimg,"-100%",0,800)
			}
		}
	});

	//메뉴바 클릭시 이동
	nav.on({
		click:function(){
			hisnum = $('.slidebanner li.on').index();
			stIdx = $(this).index()-1;
			
			$(this).addClass('on').siblings().removeClass('on')
			
			if(hisnum < stIdx){
				stimg = st.eq(hisnum).find('img')
				slideMotion(stimg,0,"-100%",800)
				stimg = st.eq(stIdx).find('img')
				slideMotion(stimg,"100%",0,800)
			}else if(hisnum > stIdx){
				stimg = st.eq(hisnum).find('img')
				slideMotion(stimg,0,"100%",800)
				stimg = st.eq(stIdx).find('img')
				slideMotion(stimg,"-100%",0,800)
			}
		}
	});
	
	//다음 이전 함수 재사용
	function slideMotion(select,start,end,speed){
		select.parent('li').addClass('on').siblings('li').removeClass('on')
		select.css({
			left:start,
			display:'block'
		}).stop().animate({
			left:end
		},speed)

		if(stIdx == st.length){
			stIdx=0;
			stimg = st.eq(stIdx).find('img');
			slideMotion(stimg,"100%",0,800);
		}else if(0>stIdx){
			stIdx=st.length-1;
			stimg = st.eq(stIdx).find('img');
			slideMotion(stimg,"-100%",0,800);
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
	
	// //X좌표 Y좌표 뽑기
	// $(window).on("mousemove", function(event){
	// 	  $(".slidebanner li img").text("pageX: " + event.pageX + ", pageY: " + event.pageY);
	// })

	// var xValue = event.pageX;
	// var yValue = event.pageY;

	// if(xValue <= 1650 && xValue > 700 && yValue <= 955 && yValue > 190){
	// 	$('.slidebanner li').append('<a href="http://www.naver.com"></a>')
	// }
});