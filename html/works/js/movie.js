$(function(){
	//퀵배너
	var lil = 0;

	//버튼 스크립트
	//더보기 버튼 클릭
	$('.btn_area').click(function(){
		$('.sub_detail').stop().animate({"left":0},200)
	})
	//뒤로가기 버튼 클릭
	$('.btn_back').click(function(){
		$('.sub_detail').stop().animate({"left":"1080px"},200)
	})

	////////////////////////포스터 슬라이드 배너//////////////////////
	//이미지 슬라이드 함수
	function move(s,k,y){
		$('.movie_view_poster li').eq(y).addClass('on').children('img')
		.css({
			left:s,
			display:'block'
		}).stop().animate({
			left:k,
		},500).parent('li').siblings().removeClass('on')
	}

	function arr(){
		var lidix = []
		$('.movie_view_poster').each(function(i,e){
			lidix.push('0')
			$(e).attr('data-rol-index',i)
		})
	}

	//썸네일 하버
	$('.movie_thumb_list li').mouseenter(function(){
			$(this).find('span').addClass('bg_rac_small').parents()
				.siblings().find('span').removeClass('bg_rac_small')
			}).mouseleave(function(){
				$(this).find('span.bg_rac_small').removeClass('bg_rac_small')
				$(this).children().children('.on').css('display','block')
			})
		

	//영화 포스터 안 반원버튼 하버시
	$('.next_btn').hover(function(){
		$(this).stop().animate({
			'opacity' : 1
		})
			$('.next_btn').click(function(){
				var lidx = $('.like .movie_view_poster li').length;
				var idx = $('.movie_view_poster li.on').index();

					move('120px','-100%',idx)
					idx++
					move('100%','120px',idx)

					if(idx==lidx){
						idx=0
						move('100%','120px',idx)
					}

					if(idx==0){
						$('.movie_thumb_list li:eq(0)').children().children('span').addClass('on')
						$('.movie_thumb_list li:eq(1)').children().children('span').removeClass('on')
					}else if(idx==1){
						$('.movie_thumb_list li:eq(0)').children().children('span').removeClass('on')
						$('.movie_thumb_list li:eq(1)').children().children('span').addClass('on')
					}
				})

		},function(){
			$('.next_btn').stop().animate({
				'opacity': 0.5
			})
		})
		
		//영화 포스터 안 반원버튼 하버시
		$('.prev_btn').hover(function(){
			$(this).stop().animate({
				'opacity' : 1
			})
		
		$('.prev_btn').click(function(){
			var lidx = $('.like .movie_view_poster li').length;
			var idx = $('.movie_view_poster li.on').index();
			
			move('120px','100%',idx)
			idx++
			move('-100%','120px',idx)
	
			if(idx == lidx){
				idx=0
				move('-100%','120px',idx)
			}
			if(idx==0){
				$('.movie_thumb_list li:eq(0)').children().children('span').addClass('on')
				$('.movie_thumb_list li:eq(1)').children().children('span').removeClass('on')
			}else if(idx==1){
				$('.movie_thumb_list li:eq(0)').children().children('span').removeClass('on')
				$('.movie_thumb_list li:eq(1)').children().children('span').addClass('on')
			}
		})
		},function(){
		$('.prev_btn').stop().animate({
			'opacity': 0.5
			})
		})

		$('.movie_thumb_list li').click(function(){
			var idx = $('.movie_view_poster li.on').index();
			var tidx = $(this).index();
			
			$(this).children().children('span').addClass('on')
			$(this).siblings().find('.on').removeClass('on')
		
			if(tidx==0){
				move('-100%','120px',tidx)
				tidx=1
				move('120px','100%',tidx)
			}else{
				move('100%','120px',tidx)
				tidx=0
				move('120px','-100%',tidx)
		}
	})
	////////////////////////포스터 슬라이드 배너//////////////////////

	////////////////////////퀵배너 스크립트//////////////////////
	//퀵메뉴 클릭시 숨겨진 페이지 블락처리 및 이동하기
	$('.quick_bottom li').click(function(){
	lil = $(this).index()

	//이동
	$('body,html').animate({
		scrollTop:'649px'
	})

	//클릭시 논되어있는것 보이기
	$(this).children().children('img').next('span').addClass('on')
	$(this).siblings().children().children('img').next('span').removeClass('on')

	if(lil==0){
		$('.like').css('display','block').find('.sub_detail').css({'left':'1080px'})
		$('.like').siblings().css('display','none')
	}else if(lil==1){
		$('.panda').css('display','block').find('.sub_detail').css({'left':'1080px'})
		$('.panda').siblings().css('display','none')
	}else if(lil==2){
		$('.forget').css('display','block').find('.sub_detail').css({'left':'1080px'})
		$('.forget').css('display','block').siblings().css('display','none')
	}else if(lil==3){
		$('.himalaya').css('display','block').find('.sub_detail').css({'left':'1080px'})
		$('.himalaya').css('display','block').siblings().css('display','none')
	}else if(lil==4){
		$('.dori').css('display','block').find('.sub_detail').css({'left':'1080px'})
		$('.dori').css('display','block').siblings().css('display','none')
	}
	})

	$('.quick_bottom li a').parent().siblings().children().children('.on').css('display','none')

	//퀵메뉴 하버
	$('.quick_bottom li a').hover(function(){
		$(this).parent().siblings().children().children('.on').css('display','none')
		$(this).children('img').next().addClass('bg_rac').css('display','block')
	},function(){
		$(this).parent().siblings().children().children('.on').css('display','block')
		$(this).children('img').next().removeClass('bg_rac')
	})
	
	//퀵메뉴 움직이기
	$(window).scroll(function(){
		if($(window).scrollTop() == 0){
			$('.quick').css(
				'top','30px'
			)
			$('.quick .top').css('display','block')
			$('.quick_bottom li a').parent().siblings().children().children('.on').css('display','none')
		}else{$('.quick').css(
				'top','678px'
		)
		$('.quick .top').css('display','none')
		$('.quick_bottom li a').parent().siblings().children().children('.on').css('display','block')
		}
	})

	// 이미지 클릭시 올라가기
	$('.quick_top').click(function(){
	$('body,html').animate({
		scrollTop:'0px'
		})
	})

	//퀵메뉴 하위 위 아래 버튼
	var h = $('.quick_bottom ul li').height()
	var hm = h+16
	var onIdx = $('.quick_bottom ul li.on').index()

	$('.quick .quick_btn .btn_quick_down').click(function(){
		$('.quick .quick_btn .btn_quick_up').css('opacity','1')
		$('.quick .quick_bottom li').stop().animate({
			'top':-hm
			})
			$(this).css('opacity','0.5')
	})
	$('.quick .quick_btn .btn_quick_up').click(function(){
	$('.quick .quick_btn .btn_quick_down').css('opacity','1')
		$('.quick .quick_bottom li').stop().animate({
			'top': '0px'
		})
		$(this).css('opacity','0.5')
	})
	////////////////////////퀵배너 스크립트//////////////////////

	////////////////////////가이드 스크립트//////////////////////
	// 메인메뉴 하버시
	$('.gnb li a span img').css('opacity','0')
	$('.gnb .on a span img').css('opacity','1')
	
	$('.gnb li a').hover(function(){
		var gnbl = $(this).parent().index()
		
		if(gnbl==0){
			$('.gnb_bar').stop().animate({
				top:'1px',
			}).css('background','rgb(47, 217, 150)')
		}else if(gnbl==1){
			$('.gnb_bar').stop().animate({
				top:'71px',
			}).css('background','rgb(20, 182, 217)')
		}else if(gnbl==2){
			$('.gnb_bar').stop().animate({
				top:'141px',
			}).css('background','rgb(239, 76, 83)')
		}else if(gnbl==3){
			$('.gnb_bar').stop().animate({
				top:'211px',
			}).css('background','rgb(246, 182, 29)')
		}else if(gnbl==4){
			$('.gnb_bar').stop().animate({
				top:'281px',
			}).css('background','rgb(18, 124, 232)')
		}
		$('.gnb .on a span img').stop().animate({'opacity':'0'})
		$(this).children('span').children('img').stop().animate({'opacity':'1'})

		},function(){
			$(this).children('span').children('img').stop().animate({'opacity':'0'})
			$('.gnb .on a span img').stop().animate({'opacity':'1'})
			$('.gnb_bar').stop().animate({
				top:'71px'
			}).css('background','rgb(20, 182, 217)')
		})
	////////////////////////가이드 스크립트//////////////////////
})
