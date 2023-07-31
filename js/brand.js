/* section 1 - mask */ 
let maskTT = $('.sec_1 .mask h2'),
    gramInnov = $('.sec_1_after'),
    sec2 = $('.sec_2'),
    sec2OST = $('.sec_2').offset().top,
    minus = $('.minus');
 


//hide()
$('.sec_2 h2, .sec_2 h3').hide();

let f = true;
$(window).scroll(function(){
  let sct  = $(window).scrollTop();
  console.log(sct)
  if(sct > 10){
    maskTT.addClass('active');
    //스크롤 발생시, 텍스트 마스크 실행

    if(f == true){
      gramInnov.addClass('animate__fadeInUp');
    } else{
      gramInnov.removeClass('animate__fadeInUp');
    }
    f = false;
    //한번 실행 후, f 값 변경 

  if(sct > sec2OST - 400){
    sec2.find('h2, h3').fadeIn(1000, function() {
      sec2.find('h3').addClass('active');
    })
    //한번 실행 후, f 값 변경 
  }

  // if(sct > minusOST - 300){
  //   minus.addClass('acitve');
  //   $('.sec2_bg').fadeOut(1000); 
  // }
}}
);

//minus effect
let minusImg = $('.minus_effect img');
let count = 0;

$(window).scroll(function(){
  let sct  = $(window).scrollTop();
  let scroll_AMT = $(window).scrollTop();
  let minusOST = $('.sec_3').offset().top;
  let plusOSP = $('.sec_4').offset().top;
  //console.log('scroll_ATM :', scroll_AMT);
  if(sct > minusOST - 300){
    minus.addClass('acitve');
    $('.minus_bg').fadeOut(1000); 
  }
  if(sct > plusOSP - 300){
    //minus.addClass('acitve');
    $('.minus_bg').fadeOut(1000); 
  }

  //그램 효과
  let minusOSTt = $('.minus_effect').innerHeight();

  count = Math.floor(((scroll_AMT) / minusOSTt) * 24)
    console.log(count);
  if(count > 12) { minusImg.attr({"src":`imgs/brand/brand_minus/minus_${count}.png`}) }


});


let minusAfter =$('.minus_after'),
    minusMoveOST = minusAfter.offset().top;

// function weightAuto(){
//   setInterval(function(){
//     minusAfter.find('h3').animate({transform: 'scaleY(0%) translateY(-100%)' })
//   }, 1000)
// }



// let weightAuto = setInterval(function() { 

//   $('.minus_after ul li').each(function(){
//     $('this').animate({transform: 'scaleY(0%) translateY(-100%)'})
//     console.log('작동')
//     $('.minus_after ul').animate({transform: 'translateY(-30%)'})
//   })

// }, 1000);
// function weightAu(){
//   setInterval(function() { 

//     $('.minus_after ul li').each(function(){
//        $('this').animate({transform: 'scaleY(0%) translateY(-100%)'})
//       // $(this).animate({opacity: 1, transform: ' translateY(-100%)'}).css({
//       //   "transform": "scaleY(0)",
//       // })
      
//       console.log('작동')
//       $('.minus_after ul').animate({transform: 'translateY(-33%)'})
//     })
  
//   }, 1000);
// }
// weightAu();

// function weightAu(){
//   $('.minus_after ul').stop().animate({top:'-92px'},900,function(){console.log("슬라이드 이동 완료"); });   
//   //활성화표시 on 
//   $('.minus_after ul li').animate({transform: 'scaleY(0%) translateY(-100%)'})
//   //$indicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');


// }



// },1000)
     $('.minus_after ul li').hide()
function slideListUp() {
  // $('.minus_after ul li').hide();
  const firstItem = $(".minus_after ul li:first-child");
  const itemHeight = firstItem.outerHeight();
  
  firstItem.animate({transform:'translateY(-100%)'}, 1000, function() {
   $('.minus_after ul li').css({opacity:0})
    // $('.minus_after ul li').hide()
    // $(this).scale(0);
    // $(this).animate({opacity: 1, transform: 'scaleY(0%) translateY(-100%)'})
    $(this).show();
    $(this).animate({opacity: 1, transform: ' translateY(-100%)'}).css({
      "transform": "scaleY(0)",
  })
    // $(this).scale()
    //$(this).animate({opacity: 1}, 1000)
      $(this).appendTo(".minus_after ul").css("marginTop", 0);
  });
}

setInterval(slideListUp, 2000);




$(window).scroll(function(){
  let scrollAmt = $(window).scrollTop();
  //console.log('scroll_ATM :', scroll_AMT);

 let gram_height = $('.plus_effect').innerHeight();
 let count = Math.floor(((scrollAmt) / gram_height) * 40)
 
    if(scrollAmt > 12*count) {  $('.plus_effect img').attr({"src":`imgs/brand/brand_plus/plus_${count+1}.png`})}
})