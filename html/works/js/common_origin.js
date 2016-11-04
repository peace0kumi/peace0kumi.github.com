$(function(){

	///////////////////////////글로벌 변수/////////////////////////////////////
		//퀵배너
		var lil = 0;
		//영화 페이지
    var pwidth = $('sub_detail').width();
	///////////////////////////글로벌 변수/////////////////////////////////////


	////////////////////////버튼 스크립트//////////////////////
    //더보기 버튼 클릭
    $('.btn_area').click(function(){
          $('.sub_detail').stop().animate({"left":-pwidth},200)
    })
   //뒤로가기 버튼 클릭
    $('.btn_back').click(function(){
    	  $('.sub_detail').stop().animate({"left":"1080px"},200)
    })
    //반원 버튼 마우스오버
    // function nextH(){
		//
    // 	$('.next_btn').mouseenter(function(){
	 // 		 		$(this).stop().animate({"opacity": 1},500)
	  //  }).mouseleave(function(){
	  //        $(this).stop().animate({"opacity": 0.5},500)
	  //  })
		//
		//
    // }
		//
		// function nextA(){
		//
		// 	$('.next_btn').mouseenter(function(){
		// 	 		$(this).stop().animate({"opacity":0.5},500)
		//  }).mouseleave(function(){
		// 			 $(this).stop().animate({"opacity": 0.5},500)
		//  })
		//
		// }
		//
    // function prevH(){
		//
 	 //   $('.prev_btn').mouseenter(function(){
 	 //         $(this).stop().animate({"opacity": 1},500)
 	 //   }).mouseleave(function(){
 	 //         $(this).stop().animate({"opacity": 0.5},500)
 	 //   })
		//
    //  }

    // if(idx==0){
    // 	// nextH();
		// 	$('body').css('color','blue')
		//
    // }else{
    // 	// nextA()
		// 	$('body').css('color','red')
    // }
   ////////////////////////버튼 스크립트//////////////////////


   ////////////////////////포스터 슬라이드 배너//////////////////////
  //  var like1 = $('.movie_view_poster > li').eq(0)
  //  var like2 = $('.movie_view_poster > li').eq(1)
	 //
	 //
  //  $('.next_btn').click(function(){

		//  var aa = $('.movie_view_poster li:first')
		// 			 if(aa.is('.on')==1){
		// 					//  	$('.next_btn').mouseenter(function(){
		// 					//  		 	$(this).stop().animate({"opacity": 1},500)
		// 					//    		}).mouseleave(function(){
		// 					//     			$(this).stop().animate({"opacity": 0.5},500)
		// 					// })
		// 					$('.next_btn').hover(function(){
		// 			  		$(this).stop().animate({
		// 			  			'opacity':0.5
		// 			  		})
		// 			  	},function(){
		// 						$(this).stop().animate({
		// 							'opacity':0.5
		// 						})
		// 			  	})
		// 				}else{
		// 					$('.next_btn').hover(function(){
		// 			  		$(this).stop().animate({
		// 			  			'opacity':1
		// 			  		})
		// 			  	},function(){
		// 						$(this).stop().animate({
		// 							'opacity':0.5
		// 						})
		// 			  	})
		// 				}
					//  }else if(like2.is('.on')==1){
					// 		 $('.prev_btn').mouseenter(function(){
					// 				$(this).stop().animate({"opacity": 1},500)
					// 		 		}).mouseleave(function(){
					// 					 $(this).stop().animate({"opacity": 0.5},500)
					// 		 })
					//  }

//            $('.movie_view_poster .on').stop().animate({'left':'-540px'},500)
//            .removeClass('on')
//            like2.addClass('on')
//            .stop().animate({
//                'left':'-540px'
//            },500)
// })

//
//    $('.prev_btn').click(function(){
//
// 					 $('.prev_btn').mouseenter(function(){
// 								 $(this).stop().animate({"opacity": 1},500)
// 					 }).mouseleave(function(){
// 								 $(this).stop().animate({"opacity": 0.5},500)
// 					 })
//
//            like2.stop().animate({'left':'540px'},500)
//            .removeClass('on')
//            like1.addClass('on')
//            .stop().animate({
//                'left':'0'
//            },500)
//
//    })
//
// 	 	var firstLi = $('.movie_view_poster li:first')
//  		var secondLi = $('.movie_view_poster li:last')
// 	 console.log(firstLi)
// 	 console.log(secondLi)
//  if(firstLi.is('.on')==1){
// 	// nextH();
// 	$('body').css('color','blue')
//
// }else if(secondLi.is('.on')==1){
// 	// nextA()
// 	$('body').css('color','red')
// }

				function move(s,k,y){

				      $('.movie_view_poster li').eq(y).addClass('on').children('img')
				      .css({
				        left:s,
				        display:'block'
				      }).stop().animate({
				        left:k
				      },1000).parent('li').siblings().removeClass('on')

				    }

						// var lidx2 = $('.panda .movie_view_poster li').length;
						// var lidx3 = $('.forget .movie_view_poster li').length;
						// var lidx4 = $('.himalaya .movie_view_poster li').length;
						// var lidx5 = $('.dori .movie_view_poster li').length;

				$('.next_btn').click(function(){

				          var lidx1 = $('.like .movie_view_poster li').length
									var idx = $('.movie_view_poster li.on').index();


				           move('120px','-100%',idx)
				           idx++
				           move('100%','120px',idx)
				           $('.movie_thumb_list span.on').removeClass('on').next().addClass('on')

				           if(idx == lidx1){
				               idx=0
				               move('100%','120px',idx)
				           }

				        })

				$('.prev_btn').click(function(){
				          var lidx1 = $('.like .movie_view_poster li').length;
									var idx = $('.movie_view_poster li.on').index();


				           move('120px','100%',idx)
				           idx++
				           move('-100%','120px',idx)
				           $('.movie_thumb_list span.on').removeClass('on').next().addClass('on')

				           if(idx == lidx1){
				               idx=0
				               move('-100%','120px',idx)
				           }

				        })


 ////////////////////////포스터 슬라이드 배너//////////////////////


   ////////////////////////썸네일 스크립트//////////////////////

			//썸네일 하버
	   $('.movie_thumb_list li').mouseenter(function(){
		   $(this).find('span').addClass('bg_rac_small').css('display','block')
	   }).mouseleave(function(){
		  $(this).find('span.bg_rac_small').css('display','none')
	   })

	   //썸네일 클릭시 슬라이드 배너 움직이고 보더 고정되는 것
   	   $('.movie_thumb_list li img').click(function(){

   		   var like1 = $('.movie_view_poster > li').eq(0)
   		   var like2 = $('.movie_view_poster > li').eq(1)
   		   var onFind = $('.movie_thumb_list li a').html

           $('.movie_view_poster li.on').stop().animate({'left':'-540px'},500)
           .removeClass('on')
           like2.addClass('on')
           .stop().animate({
               'left':'-540px'
           },500)

   		   if(onFind.is('.on')==1){
   			   $('.movie_thumb_list li img').next('span').addClass('on')
   			   .$(this).click(function(){
			           $('.movie_view_poster li.on').animate({'left':'-540px'},500)
			           .removeClass('on')
			           like2.addClass('on')
			           .animate({
			               'left':'-540px'
			           },500)
				  })
   		   }

	   })

   ////////////////////////썸네일 스크립트//////////////////////


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

  //언어별 박스
  $('.leng_list').click(function(){

    if($('.leng_list_box').is('.a')==0){
      $('.leng_list_box').addClass('a').slideDown()
    }else if($('.leng_list_box').is('.a')==1){
      $('.leng_list_box').removeClass('a').slideUp()
    }
  })

  //푸터 박스
  $(".footer_none_on .foot_close").click(function(){
    $(".footer_slct .footer_none").hide().siblings('.fam_tit').removeClass('on')
    $(".footer_box_right .footer_slct .fam_tit").css("background-position-y","0%")
  })

  $('.footer_slct .fam_tit').click(function(){
    if($(this).is('.on') == 0){
      $(this).addClass('on').css("background-position-y","100%")
      $(".footer_slct .footer_none").css('display','block')
    }
    else if($(this).is('.on') == 1){
      $(this).css("background-position-y","0%").removeClass('on')
      $('.footer_slct .footer_none').css('display','none')
    }
  })
  	////////////////////////가이드 스크립트//////////////////////


    ////////////////////////퀵배너 스크립트//////////////////////
   //퀵메뉴 클릭시 숨겨진 페이지 블락처리 및 이동하기
  	$('.quick_bottom li').click(function(){
    lil = $(this).index()

    // 이동
    $('body,html').animate({
      scrollTop:'649px'
    })

    // 클릭시 논되어있는것 보이기
    $(this)
    .children()
    .children('img')
    .next('span')
    .addClass('on')
    $(this).siblings()
    .children()
    .children('img')
    .next('span')
    .removeClass('on')

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
      }else{
        $('.quick').css(
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

})
