/* section 1,2 - mask 효과, 페이드인 */
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
    if (sct > 40){
      setTimeout(() => {
        sec1.addClass('active');
        $('.sec_1_after h2').addClass('animate__fadeInLeft');
        $('.sec_1_after h3').addClass('animate__fadeInRight');
      }, 500, 'easeInOutBack');   
    // 마스크 실행 후, 텍스트 좌우로 페이드인 
    };
    if (sct > sec2OST - 400) {
      sec2.find('h2, h3').fadeIn(1000, function () {
        // sec2.find('h3').addClass('active');
        sec2.find('h3').css({ transition: '0.5s', transform: 'scale(1.5)'});
      });
      // sec2 텍스트 페이드인
    };
  };
});

/* section 3 - minus effect, 페이드인, 노트북 애니메이션 */
let minusIcon = $('.minus'),
    minusImg = $('.minus_effect img');

$(window).on('scroll', function () {
  let sct = $(window).scrollTop(), //스크롤 양 확인
      count = 0,                   //이미지 index count 
      minusOST = $('.sec_3').offset().top,
      kgGram = $('.kg_gram');

  if (sct > minusOST) {
    minusIcon.addClass('acitve');
    $('.minus_bg').fadeOut(1000);
  }; 
  // minus_bg 페이드 아웃
  if (sct > minusOST+100) {
    setTimeout(() => {
      kgGram.addClass('active animate__fadeIn');
    }, 1000, 'easeInOutBack');
  };

  // 그램 노트북 애니메이션, 스크롤 양에 따라 count 변수로 이미지 인덱스 변경
  let minusAniOST = $('.minus_effect').innerHeight();
  count = Math.floor(((sct) / minusAniOST) * 60)
  if (count > 1 && count <= 110) {
    //console.log('카운트', count);
    minusImg.attr({ "src": `imgs/brand/brand_minus/minus_${count}.png` })
  }

  // weight 텍스트 페이드인
  let minusAfter = $('.minus_after'),
    minuseffectOST = $('.minus_effect').offset().top,
    weightTT = $('.weight li'),
    weightUpCount = weightTT.length,
    currentIdx = 0;
    let nextIdx = 0;

  let weightStop;
  let isActive = false;
  weightTT.fadeOut();
  function weightUp() {
   //let nextIdx = (currentIdx + 1) % weightUpCount;
    weightTT.eq(currentIdx).fadeIn();
    setInterval(()=>{
       nextIdx = (currentIdx + 1)%weightUpCount;
      weightTT.eq(currentIdx).fadeOut(1000);
      weightTT.eq(nextIdx).fadeIn(1000);
      currentIdx = nextIdx;
      
    }, 4000);
    // let nextIdx = (currentIdx + 1) % weightUpCount;

    // weightTT.eq(currentIdx).css({ transformOrigin: '50% 0' });
    // weightTT.eq(currentIdx).addClass('fold');

    // // weightTT.eq(currentIdx).stop().animate({ transform: 'scaleY(0)' }, 1000, "linear");

    // weightTT.eq(nextIdx).css({ transformOrigin: '50% 100%' });
    // weightTT.eq(nextIdx).addClass('spread');

    // setTimeout(() => {
    //   weightTT.eq(currentIdx).removeClass('fold');
    //   weightTT.eq(nextIdx).removeClass('spread');
    // })

    // weightTT.eq(nextIdx).stop().animate({ transform: 'scaleY(1)' }, 1000,"linear");
    //currentIdx = nextIdx;
    if (currentIdx == 2) {
      clearInterval(weightUp);

    };
  }

  if (sct > minuseffectOST) {
    if (!isActive) {
      weightStop = setInterval(() => {
        weightUp();

      }, 3000);
      isActive = true;
    }


    let plusIcon = $('.plus'),
      plusOSP = $('.sec_4').offset().top,
      divisionIcon = $('.division'),
      divisionOSP = $('.sec_5').offset().top,
      multipleIcon = $('.multiple'),
      multipleOSP = $('.sec_6').offset().top,
      twentyOST = $('.twenty').offset().top;
      count = 1;
      let batterySwitch = false;

    console.log( $('.division_tt img').innerHeight());
    if (sct > plusOSP) {
      plusIcon.addClass('acitve');
      $('.plus_bg').fadeOut(1000);
    }
    if (sct > divisionOSP) {
      divisionIcon.addClass('acitve');
      $('.division_bg').fadeOut(1000);

      if(sct > divisionOSP + 50) {
        if(!batterySwitch){
          let i = 1;
          let battery = setInterval(() => {
            $('.division_tt img').attr({ "src": `imgs/brand/brand_division/battery/battery_${i}.png`});
            i++;
            if(i == 25){
              clearInterval(battery);
            }
          }, 100);
          batterySwitch = true;
        };
  
      }

    

    if (sct > multipleOSP) {
      multipleIcon.addClass('acitve');
      $('.multiple_bg').fadeOut(1000);
    };
    if (sct > multipleOSP + 30) {
      $('.vivid').addClass('active animate__fadeInUp');
    }
    if (sct > multipleOSP + 80) {
      $('.multiple_tt').find('h2').eq(0).addClass('animate');
      setTimeout(() => {
        $('.multiple_tt').find('h2').eq(1).addClass('animate');
      }, 1000)
    }
    if (sct > twentyOST) {
      $('.twenty h2').addClass('active animate__fadeIn');
    }
 }
};





// $('.plus_tt').hide();
$(window).on('scroll', function () {
  let sct = $(window).scrollTop(),
    plusOpenOST = $('.plus_open').offset().top,
    count = Math.floor(((sct) / plusOpenOST) * 20);
  console.log('sct :', sct);
  if (count > 1 && count < 64) {
    $('.plus_effect img').attr({ "src": `imgs/brand/brand_plus/plus_${count}.png` });
    if (count > 20) {
      // $('.plus_tt h2').addClass('active');
      $('.plus_tt h2').addClass('active animate__fadeIn');
    }

  }
})


let plusImg = $('.plus_open img');


// $(window).scroll(function () {
//   let sct = $(window).scrollTop();
//   let plusOSP = $('.sec_4').offset().top;
//   if (sct > plusOSP - 300) {
//     $('.plus_bg').fadeOut(1000);

//   }
// })



/* twentytwenty / gram 해상도 비교  */
$(".20twenty-container").twentytwenty({
  default_offset_pct: 0.4,
  move_slider_on_hover: true,
  move_with_handle_only: true,
  click_to_move: true
});



let divisionIcon = $('.division'),
  multipleIcon = $('.multiple');
//minusImg = $('.minus_effect img');

$(window).on('scroll', function () {
  let sct = $(window).scrollTop(); //스크롤 양 확인
  //let count = 0;                   //이미지 index count 
  let divisionOST = $('.sec_5').offset().top;
  let multiplenOST = $('.sec_6').offset().top;

  if (sct > divisionOST - 400) {
    // divisionIcon.addClass('acitve');
    // $('.division_bg').fadeOut(1000);
    if (sct > divisionOST) {
      let divisionTT = $('.division_tt');
      divisionTT.find('.d_time').addClass('active animate__fadeIn');
      setTimeout(()=>{
        divisionTT.find('.d_day').addClass('active animate__fadeIn');
        setTimeout(()=>{
          divisionTT.find('.d_long').addClass('active animate__fadeIn');
        },1000)
      },1000)
      
  
      // divisionTT.find('.d_time').addClass('active animate__fadeIn');
      // setTimeout(() => {
      //   $('.division_tt').addClass('active');
      //   $('.division_tt').addClass('animate__fadeIn');
      // }, 800, 'easeInOutBack');
      let count = 0;

      plusOpenOST = $('.plus_open').offset().top,
        count = Math.floor(((sct) / plusOpenOST) * 20);
      console.log('sct :', sct);
      if (count > 1 && count < 64) {
        $('.plus_effect img').attr({ "src": `imgs/brand/brand_plus/plus_${count}.png` });

      }
    }



    let dolbyAniOST = $('.dolby_wrap img').offset().top;
    //console.log('돌비OST', dolbyAniOST);
    count = Math.floor(((sct) / dolbyAniOST) * 50)
    if (count > 1) {
      //console.log('돌비카운트', count);

      $('.dolby_wrap img').attr({ "src": `imgs/brand/dolby/dolby_${count}.png` })
    }
  }
});





AOS.init();

// sec_8
let sec8 = $('.sec_8');
let switch1 = false;

$(window).on('scroll', function () {

  let sec8OST = sec8.offset().top;
  let sct = $(window).scrollTop();

  console.log(sec8OST)
  if (sct > sec8OST) {
    if (!switch1){
  
      sec8.find('.sec_8_tt1').fadeIn();
    }  switch1 = true;
    if (sct > sec8OST + 10) {
      sec8.find('.sec_8_tt1').fadeOut();
      // sec8.find('.sec_8_tt2').fadeIn();
    }
    if (sct > sec8OST + 20) {
      // sec8.find('.sec_8_tt1').fadeOut();
      sec8.find('.sec_8_tt2').fadeIn();
    }
    //sec8.find('.sec_8_tt1').addClass('active');
   

  }

  })
});

