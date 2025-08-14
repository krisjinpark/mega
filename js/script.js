$(function(){
  //    [ 화면구성(초기설정) ]    : page1 제외한 페이지들 숨기기
  //    (방법1) 원시적
  //$('#page2,#page3,#page4,#page5').hide();
  //    (방법2) 원시적
  //$('#container section:not(#page1)').hide();
  //    (방법3) 자동
  //    $('.submenu li a.connect.selected').attr('href')  => #page1  과 동일
  $('#container section:not('+ $('.submenu li a.connect.selected').attr('href') +')').hide();
  //console.log($('.submenu li a.connect.selected').attr('href'));    // 결과 : #page1  찍힘 


  //    [ GNB : 2단 메뉴 클릭시 화면 이동 이벤트 ]
  $('.submenu li a.connect').click(function(){
    //  (1) 메뉴 디자인 => 모든 2단 메뉴에서 디자인 제거 + 클릭한 메뉴에 디자인 적용
    $('.submenu li a.connect').removeClass('selected');
    $(this).addClass('selected');

    //  (2) 내용 => 모든 내용 숨김 + 클릭한 메뉴의 내용만 보임
    $('#container section').hide();
    $( $(this).attr('href') ).show();   // $(this).attr('href') : #page2  => 한번 더 감싸서 객체로 인식 => show
    return false; 
  });


  //    [ GNB : 마우스 아웃시 숨김처리 ]
      $('#menu_wrap').mouseleave(function(){
        $('#menu_wrap').animate({'right':'-60%'},'fast');
      });



  //    [ GNB : 메뉴 아이콘 ]
  //    $(선택자).animate({'속성명':'속성값'}, 시간)
  $('.menu_icon').click(function(){
    $('#menu_wrap').animate({'right':'0%'}, 'fast');
  });
  $('.menu_close').click(function(){
    $('#menu_wrap').animate({'right':'-60%'}, 'fast');
  });



  //    [ GNB : 메뉴 동작 ]
  $('#gnb > ul > li').click(function(){
    //  (1) 디자인 적용 => 모든 1단 메뉴에서 클래스(.on) 제거 + 클릭된 메뉴만 클래스(.on) 적용
    $('#gnb > ul > li > a').removeClass('on');
    $(this).children('a').addClass('on');   //  클릭한 자신(li)의 자식(a) 
    
    //  (2-1) 2단 메뉴 등장 => [토글링]
    //$(this).children('ul').slideToggle();   //  slideToggle : 슬라이딩되면서 숨김->보임 / 보임->숨김
    //  (2-2) 2단 메뉴 등장 => [아코디언]
    if( $(this).children('ul').css('display') == 'none' ){  // if : 2단 메뉴가 숨김상태이면 
      $('#gnb > ul > li > ul').slideUp();
    }
    $(this).children('ul').slideDown();
  });



  //    [ toTop 아이콘 ]
  $('.top_btn').hide();

  //    overflow 속성을 body에 설정된 상태 => window.scroll 이벤트가 감지 x => body 활용
  //$(window).scroll(function(){
  //console.log(123);
  $('body').scroll(function(){      // body 활용
  //console.log(123);
    let sc_num = $(this).scrollTop();   //스크롤 양
    let height = $(this).height();      //화면높이
    console.log(sc_num, height/2);

    if( sc_num > (height/2) ){
      $('.top_btn').fadeIn();
    }else{
      $('.top_btn').fadeOut();
    }

  });



}); /* f */