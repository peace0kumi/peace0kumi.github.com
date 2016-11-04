$(function(){

      // 메인메뉴 하버시
      $('.gnb li a span img').css('opacity','0')
      $('.gnb .on a span img').css('opacity','1')

      $('.gnb li a').hover(function(){
         var gnbl = $(this).parent().index()

         $('.gnb .on a span img').stop().animate({'opacity':'0'})
         $(this).children('span').children('img').stop().animate({'opacity':'1'})

      },function(){
         $(this).children('span').children('img').stop().animate({'opacity':'0'})
         $('.gnb .on a span img').stop().animate({'opacity':'1'})
      })

      //언어박스
      $('.leng_list').click(function(){

      if($('.leng_list_box').is('.a')==0){
        $('.leng_list_box').addClass('a').slideDown()
      }else if($('.leng_list_box').is('.a')==1){
        $('.leng_list_box').removeClass('a').slideUp()
      }

      })

      /*메뉴 하버*/
      $('.sub_tab_company li').mouseenter(function(){
         $(this).addClass('sub_menu_on').mouseleave(function(){
         $(this).removeClass('sub_menu_on')
         })
      })

      /*연혁 서브 메뉴 하버*/
      $('.history_menu li').mouseenter(function(){
      $(this).addClass('history_menu_on').mouseleave(function(){
      $(this).removeClass('history_menu_on')
      })
      })

      /*IR 서브 메뉴 하버*/
      $('.ir_menu li').mouseenter(function(){
      $(this).addClass('ir_menu_on').mouseleave(function(){
      $(this).removeClass('ir_menu_on')
      })
      })

      /*IR 서브의 서브 메뉴 하버*/
      $('.in_ir_menu li').mouseenter(function(){
      $(this).addClass('in_ir_menu_on').mouseleave(function(){
      $(this).removeClass('in_ir_menu_on')
      })
      })

      /*IR 서브의 서브 내용 셀렉트 박스*/
      $('.ir_s_box').click(function(){
      $(this).find('.ir_s_option li').slideDown(1000)
      })

        // 푸터 박스
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
	  
})
