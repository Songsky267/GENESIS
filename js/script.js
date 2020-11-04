$( document ).ready( function() {
    $( '#sec01 .design_01 img' ).fadeIn( 3000 );

      // $('.tabBtn1').click(function(){//1번 버튼을 클릭했을때
            //     $('.tabBtn1').addClass('on');//1번 버튼 활성화
            //     $('.tabBtn2, .tabBtn3').removeClass('on');//2.3번 버튼 비활성화
            //     $('.tabCont1').css('display','block');//1번컨텐츠 활성화
            //     $('.tabCont2, .tabCont3').css('display', 'none');//2.3번 컨텐츠 비활성화
            //     return false;// a테그 무효화
            // });
            $('#sec01 .color .tabBtn li').click(function(){//n번 버튼을 클릭했을때
                var idx = $(this).index();
                // console.log(idx);

                $('#sec01 .car a').eq(idx).siblings().find('img').hide();
                $('#sec01 .car a').eq(idx).find('img').fadeIn();
                return false;// a테그 무효화
            });

            //처음 창을 열었을때 , 기본으로 세팅되어 있는경우
            // $('.tabBtn1').addClass('on');
            // $('.tabCont1').css('display','block');
  });

  AOS.init();
