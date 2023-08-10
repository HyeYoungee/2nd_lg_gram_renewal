// let goodsCard = $('.collabo_goods_list li'),
//     moreBtn = $('.more_btn');
    
// console.log(goodsCard);

/* 아티스트&브랜드 콜라보 - 더보기 버튼 실행 함수 */
$(function(){
  $('.collabo_goods_list li').slice(0,4).show();
  $('.more_btn').click(function(){
    $('.collabo_goods_list li:hidden').slice(0,4).fadeIn(); // 클릭시 보여줄 갯수
      if($('.collabo_goods_list li:hidden').length == 0){   // 컨텐츠 남아있는지 확인
        $('.more_btn').hide();
      }
  });
});

/* 하트 버튼 svg 변경 효과 */
let jammyG_03 = $('.jammyG_sec03'),
    likeBtn = jammyG_03.find('.collabo_goods_list button'),
    goodsList = jammyG_03.find('.collabo_goods_list .img_box');

    // console.log(goodsList)
likeBtn.each(function(){
  $(this).click(function(){
    goodsList.addClass('active');
  })
})