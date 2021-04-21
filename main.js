$(function(){
    $('.visual').slick({
        autoplay: true,
        dots:true
      });

      $('.notice_slide').slick({
        autoplay: true,
        arrows:false,
        dots:true
      });

      $('footer .top_btn').click(function(){
        // e.prevententDefault();
        $('body,html').animate({scrollTop:0},800)
      })





      // 이미지 호버

      $('.model_list li').mouseenter(function(){
        var txt = $(this).find('img').prop('src');
        // console.log(txt)
       var txt2 =  txt.replace('_off','_on');
       console.log(txt2)
       $(this).find('img').prop('src',txt2)
      });

      $('.model_list li').mouseleave(function(){
        var txt1 = $(this).find('img').prop('src');

        var txt3 = txt1.replace('_on','_off')
        $(this).find('img').prop('src',txt3)
      })
      
      // prop = attr이랑 같은 것 attr 은 속성값만 prop는 전체 경로를 불러옴 attr은 추가를 시킬 수 없음 


      // 브라우저 창의 크기를 조절하는 이벤트
      $(window).resize(function(){
        var num = $(this).width();
        console.log(num);
        if(num <= 750){
          $('main .visual .slick-prev,main .visual .slick-next').hide();
          $('main .visual .slick-dots').show();                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
        }else{
          $('main .visual .slick-prev,main .visual .slick-next').show();
          $('main .visual .slick-dots').hide();      
        }
    
         // 슬라이드 이미지 바꾸기
    
        if(num<=750){
    
          $('main .visual .visual1 img').attr('src','images/visual01_m.jpg')
          $('main .visual .visual2 img').attr('src','images/visual02_m.jpg')
          $('main .visual .visual3 img').attr('src','images/visual03_m.jpg')
          $('main .visual .visual4 img').attr('src','images/visual04_m.jpg')
          $('main .box1 img').attr('src','images/img_story01_m.jpg')
          $('main .box2 img').attr('src','images/img_story02_m.jpg')
          $('main .box3 img').attr('src','images/img_story03_m.jpg')
          $('main .notice1 img').attr('src','images/img_blogevent160816_m.jpg')
          $('main .notice2 img').attr('src','images/img_facebookevent160816_m.jpg')
          $('main .notice3 img').attr('src','images/img_renewalevent1_m.jpg')
          $('main .notice4 img').attr('src','images/img_renewalevent2_m.jpg')
        }else{
          $('main .visual .visual1 img').attr('src','images/visual01.jpg')
          $('main .visual .visual2 img').attr('src','images/visual02.jpg')
          $('main .visual .visual3 img').attr('src','images/visual03.jpg')
          $('main .visual .visual4 img').attr('src','images/visual04.jpg')
          $('main .box1 img').attr('src','images/img_story01.jpg')
          $('main .box2 img').attr('src','images/img_story02.jpg')
          $('main .box3 img').attr('src','images/img_story03.jpg')
          $('main .notice1 img').attr('src','images/img_blogevent160816.jpg')
          $('main .notice2 img').attr('src','images/img_facebookevent160816.jpg')
          $('main .notice3 img').attr('src','images/img_renewalevent1.jpg')
          $('main .notice4 img').attr('src','images/img_renewalevent2.jpg')
        }
    
    
    
      });
    
           // 브라우저 크기를 조절하는 이벤트가 없을 때 모바일 버전을 보이게 할 때
    
      var num = $(window).width();
      if(num <= 750){
        $('main .visual .visual1 img').attr('src','images/visual01_m.jpg')
          $('main .visual .visual2 img').attr('src','images/visual02_m.jpg')
          $('main .visual .visual3 img').attr('src','images/visual03_m.jpg')
          $('main .visual .visual4 img').attr('src','images/visual04_m.jpg')
          $('main .box1 img').attr('src','images/img_story01_m.jpg')
          $('main .box2 img').attr('src','images/img_story02_m.jpg')
          $('main .box3 img').attr('src','images/img_story03_m.jpg')
          $('main .notice1 img').attr('src','images/img_blogevent160816_m.jpg')
          $('main .notice2 img').attr('src','images/img_facebookevent160816_m.jpg')
          $('main .notice3 img').attr('src','images/img_renewalevent1_m.jpg')
          $('main .notice4 img').attr('src','images/img_renewalevent2_m.jpg')
      }
      if(num <= 750){
        $('main .visual .slick-prev,main .visual .slick-next').hide();
        $('main .visual .slick-dots').show();                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
      }else{
        $('main .visual .slick-prev,main .visual .slick-next').show();
        $('main .visual .slick-dots').hide();      
      }

      $('.m_btn').click(function(){
        $('.cover').fadeIn();
        $('.m_gnb').animate({'left':0});
        $('body,html').css('overflow','hidden')
        $('.m_gnb').css('overflow-x','hidden')
      });

      $('.cover').click(function(){
        $('.m_gnb').animate({'left':'-100%'},700)
        $('.cover').fadeOut()
        $('body,html').css('overflow','auto')
      })
});
