/* section 1 - mask */
let maskTT = $('.sec_1 .mask h2'),
  sec1 = $('.sec_1_after'),
  sec2 = $('.sec_2'),
  sec2OST = $('.sec_2').offset().top,
  maskActive = true;


//hide()
$('.sec_2 h2, .sec_2 h3').fadeOut();

$(window).on('scroll', function () {
  let sct = $(window).scrollTop();
  if (sct > 10) {
    //스크롤 발생시, 텍스트 마스크 실행
    maskTT.addClass('active');
    if (sct > 40) {
      setTimeout(() => {
        sec1.addClass('active');
        $('.sec_1_after h2').addClass('animate__fadeInLeft');
        $('.sec_1_after h3').addClass('animate__fadeInRight');
      }, 500, 'easeInOutBack')
    }

    // if(f == true){
    // } else{
    //   gramInnov.removeClass('animate__fadeInUp');
    // }
    // f = false;
    //한번 실행 후, f 값 변경 

    if (sct > sec2OST - 400) {
      sec2.find('h2, h3').fadeIn(1000, function () {
        // sec2.find('h3').addClass('active');
        sec2.find('h3').css({ transition: '0.5s', transform: 'scale(1.5)' });
      })
      //sec2 페이드인


      // if(sct > minusOST - 300){
      //   minus.addClass('acitve');
      //   $('.sec2_bg').fadeOut(1000); 
      // }
    }
  };
});


/* minus effect */
let minusIcon = $('.minus'),
    minusImg = $('.minus_effect img');

$(window).on('scroll', function ()  {
  let sct = $(window).scrollTop(); //스크롤 양 확인
  let count = 0;                   //이미지 index count 
  let minusOST = $('.sec_3').offset().top;
  let kgGram = $('.kg_gram');
 // let kgGramOST = kgGram.offset().top;

//  kgGram.fadeOut(1000);
  if (sct > minusOST - 400) {
    minusIcon.addClass('acitve');
    $('.minus_bg').fadeOut(1000);
  }
  if (sct > minusOST +300 ) {
    // kgGram.fadeIn(1000);
    // kgGram.addClass('active');
    setTimeout(() => {
      kgGram.addClass('active');
      kgGram.addClass('animate__fadeIn');
    }, 1000, 'easeInOutBack')
  }
  
  //console.log($('.sec_4').innerHeight());
 /* 그램 notebook 애니메이션 */
  let minusAniOST = $('.minus_effect').innerHeight();
  count = Math.floor(((sct) / minusAniOST) * 60)
  if (count > 1) { 
      //console.log('카운트', count);
    minusImg.attr({ "src": `imgs/brand/brand_minus/minus_${count}.png`}) 
  }

 /* 그램 weight 애니메이션 */
  let minusAfter = $('.minus_after'),
   // minusMoveOST = minusAfter.offset().top,
    minuseffectOST = $('.minus_effect').offset().top,
    weightTT = $('.weight li'),
    weightUpCount = weightTT.length,
    currentIdx = 0;
  
    let weightStop;
    let isActive = false;

    function weightUp(){
      
      let nextIdx = (currentIdx + 1) % weightUpCount;
  
      weightTT.eq(currentIdx).css({ transformOrigin: '50% 0'});
      weightTT.eq(currentIdx).addClass('fold');

      // weightTT.eq(currentIdx).stop().animate({ transform: 'scaleY(0)' }, 1000, "linear");

      weightTT.eq(nextIdx).css({ transformOrigin: '50% 100%' });
      weightTT.eq(nextIdx).addClass('spread');

      setTimeout(()=>{
        weightTT.eq(currentIdx).removeClass('fold');
        weightTT.eq(nextIdx).removeClass('spread');
      })
    
      // weightTT.eq(nextIdx).stop().animate({ transform: 'scaleY(1)' }, 1000,"linear");
      currentIdx = nextIdx;
      if (currentIdx == 2) {
        clearInterval(weightStop);
     
      }console.log(currentIdx)
    }   
    
  if (sct > minuseffectOST) {
    if(!isActive){
      weightStop = setInterval(() => {
        weightUp();
       
       }, 3000);
       isActive = true;
       console.log(isActive)
    }
   


    //  let weightUp = setInterval(() => {
    //    let nextIdx = (currentIdx + 1) % weightUpCount;
    //    weightTT.eq(currentIdx).show().css({ transformOrigin: '50% 0' }).animate({ transform: 'scaleY(0)', opacity: 1 }, 1000);
 
    //    weightTT.eq(nextIdx).css({ transformOrigin: '50% 100%' }).animate({ transform: 'scaleY(1)' }, 1000);
    //    currentIdx = nextIdx;
 
    //    //console.log(currentIdx)
    //    if (currentIdx == 2) {
    //      clearInterval(weightUp);
    //    }
    //  }, 3000);

    let plusIcon = $('.plus');
    let plusOSP = $('.sec_4').offset().top;
    //console.log(plusOSP);

    if (sct > plusOSP) {
      plusIcon.addClass('acitve');
      $('.plus_bg').fadeOut(1000);
    }






 
   };

  // console.log('카운트', count);
  // console.log('스크롤', sct);

  // if (sct > plusOSP + $('.sec_4').innerHeight()) {

    /* 킵
      if (sct > plusOSP + 2000) {
    //minus.addClass('acitve');
    $('.plus_bg').fadeOut(1000);

  }
  console.log('plusOSP',plusOSP)
     */

  //console.log('sct',sct)
})


/* minus effect, text */
// let minusAfter = $('.minus_after'),
//    // minusMoveOST = minusAfter.offset().top,
//     minusMoveOST = $('.minus_effect').offset().top,
//     weightTT = $('.weight li'),
//     weightUpCount = weightTT.length,
//     currentIdx = 0;
/* 킵
$(window).on('scroll', function () {
  let sct = $(window).scrollTop(); //스크롤 양 확인
  if (sct > $('.minus_effect').offset().top) {
   //console.log($('.minus_effect').offset())
   console.log(sct)
    //weightTT.css({opacity:0})
    let weightUp = setInterval(() => {
      let nextIdx = (currentIdx + 1) % weightUpCount;
      weightTT.eq(currentIdx).show().css({ transformOrigin: '50% 0' }).animate({ transform: 'scaleY(0)', opacity: 1 }, 1000);

      weightTT.eq(nextIdx).css({ transformOrigin: '50% 100%' }).animate({ transform: 'scaleY(1)' }, 1000);
      currentIdx = nextIdx;

      //console.log(currentIdx)
      if (currentIdx == 2) {
        clearInterval(weightUp);
      }
    }, 1500);

  }

})
*/




$('.plus_tt').hide();
$(window).on('scroll',function () {
  let sct = $(window).scrollTop(),
      plusOpenOST = $('.plus_open').offset().top,
      count = Math.floor(((sct) / plusOpenOST) * 20);
  console.log('sct :', sct);
  if (count >1 && count < 64) {
    $('.plus_effect img').attr({ "src": `imgs/brand/brand_plus/plus_${count}.png` });
    if (count == 20) {
      // setTimeout(() => {
      //   kgGram.addClass('active');
      //   kgGram.addClass('animate__fadeIn');
      // }, 1000, 'easeInOutBack')
      // $('.plus_tt').fadeIn();
      $('.plus_tt h2').addClass('active');
      $('.plus_tt h2').addClass('animate__fadeIn');
    }
    
  }
})


let plusImg = $('.plus_open img');


$(window).scroll(function () {
  let sct = $(window).scrollTop();
  let plusOSP = $('.sec_4').offset().top;
  if (sct > plusOSP - 300) {
    $('.plus_bg').fadeOut(1000);
    
  }
})



// $ ( '.20twenty-container'). twentytwenty ({ default_offset_pct : 0.3 });

$(".20twenty-container").twentytwenty({
  default_offset_pct: 0.4, // How much of the before image is visible when the page loads
  // no_overlay: true, //Do not show the overlay with before and after
  move_slider_on_hover: true, // Move slider on mouse hover?
  move_with_handle_only: true, // Allow a user to swipe anywhere on the image to control slider movement. 
  click_to_move: true // Allow a user to click (or tap) anywhere on the image to move the slider to that location.
});



let divisionIcon = $('.division'),
    multipleIcon = $('.multiple');
    //minusImg = $('.minus_effect img');

$(window).on('scroll', function ()  {
  let sct = $(window).scrollTop(); //스크롤 양 확인
  //let count = 0;                   //이미지 index count 
  let divisionOST = $('.sec_5').offset().top;
  let multiplenOST = $('.sec_6').offset().top;
  
  if (sct > divisionOST - 400) {
    divisionIcon.addClass('acitve');
    $('.division_bg').fadeOut(1000);
    if (sct > divisionOST) {
      setTimeout(() => {
        $('.division_tt').addClass('active');
        $('.division_tt').addClass('animate__fadeIn');
      }, 800, 'easeInOutBack');
      let count = 0; 
      setInterval((i)=>{
        $('.division_tt img').attr({ "src": `imgs/brand/brand_division/battery/battery_${count+1}.png`});
      },100)
   
    }
  }
  if (sct > multiplenOST - 400) {
    multipleIcon.addClass('acitve');
    $('.multiple_bg').fadeOut(1000);
  }
   

  let dolbyAniOST = $('.dolby_wrap img').offset().top;
  //console.log('돌비OST', dolbyAniOST);
  count = Math.floor(((sct) / dolbyAniOST) * 50)
  if (count > 1) { 
      //console.log('돌비카운트', count);

    $('.dolby_wrap img').attr({ "src": `imgs/brand/dolby/dolby_${count}.png`}) 
  }
  
});





// sec_8
let sec8 = $('.sec_8');
let switch1 = false;

$(window).on('scroll',function(){

  let sec8OST = sec8.offset().top;
  let sct = $(window).scrollTop();

  console.log(sec8OST)
  if(!switch1){
    if(sct > sec8OST){
      sec8.find('.sec_8_tt1').fadeIn();
      
      if (sct > sec8OST + 30) {
        sec8.find('.sec_8_tt1').fadeOut();
        sec8.find('.sec_8_tt2').fadeIn();
  
        // if (sct > sec8OST + 0) {
        //   sec8.find('.sec_8_tt1').fadeout();
        // }
      }
      //sec8.find('.sec_8_tt1').addClass('active');
    }
  
  }
  switch1 = false;
})
