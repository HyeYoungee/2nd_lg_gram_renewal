//const { flash } = require("modernizr");
/* section 1,2 - mask 효과, 페이드인 */
let maskTT = $(".sec_1 .mask h2"),
  sec1 = $(".sec_1_after"),
  sec2 = $(".sec_2"),
  sec2OST = $(".sec_2").offset().top;
let batterySwitch = false;
let lastSwitch = false;
let weightSwich = false;

$(".sec_2 h2, .sec_2 h3").fadeOut();
// 스크롤 이벤트 시작
$(window).on("scroll", function () {
  let sct = $(window).scrollTop(); //스크롤 양 계산

  if (sct > 10) {
    // 스크롤 발생시, 텍스트 마스크 실행
    maskTT.addClass("active");
    if (sct > 40) {
      setTimeout(
        () => {
          sec1.addClass("active");
          $(".sec_1_after h2").addClass("animate__fadeInLeft");
          $(".sec_1_after h3").addClass("animate__fadeInRight");
        },
        500,
        "easeInOutBack"
      );
      // 마스크 실행 후, 텍스트 좌우로 페이드인
    }
    if (sct > sec2OST - 400) {
      sec2.find("h2, h3").fadeIn(1000, function () {
        sec2.find("h3").css({ transition: "0.5s", transform: "scale(1.5)" });
      });
      // sec2 텍스트 페이드인
    }
  }

  /* section 3 - minus effect, 페이드인, 노트북 애니메이션 */
  let minusIcon = $(".minus"),
    minusImg = $(".minus_effect img");
  (count = 0), //이미지 index count
    (minusOST = $(".sec_3").offset().top),
    (kgGram = $(".kg_gram"));

  if (sct > minusOST) {
    // minus_bg 페이드 아웃
    minusIcon.addClass("acitve");
    $(".minus_bg").fadeOut(1000);

    // minus_effect 페이드 인
    setTimeout(
      () => {
        kgGram.addClass("active animate__fadeIn");
      },
      1000,
      "easeInOutBack"
    );
  }
  // 그램 노트북 애니메이션, 스크롤 양에 따라 count 변수로 이미지 인덱스 변경
  let minusAniOST = $(".minus_effect").innerHeight();
  count = Math.floor((sct / minusAniOST) * 60);
  if (count > 1 && count <= 110) {
    minusImg.attr({ src: `imgs/brand/brand_minus/minus_${count}.png` });
  }

  // weight 텍스트 페이드인
  let minuseffectOST = $(".minus_effect").offset().top,
    weightTT = $(".weight li"),
    weightUpCount = weightTT.length,
    currentIdx = 0,
    nextIdx = 0,
    weigtSwitch = false;

  // weightTT.hide();
  //   if (sct > minuseffectOST) {
  //     if(weigtSwitch == false){
  //       // weiCount = weightTT.length;
  //       currentIdx = 0;
  //       weightTT.eq(currentIdx).fadeIn();
  //       let weightUp = setInterval(()=>{
  //       nextIdx = (currentIdx + 1)% weightUpCount;
  //       weightTT.eq(currentIdx).fadeOut(1000);
  //       weightTT.eq(nextIdx).fadeIn(1000);
  //       nextIdx = nextIdx;
  //       if(currentIdx < weightUpCount +1){
  //         weigtSwitch = true;
  //         clearInterval(weightUp);
  //       }

  //   }, 2000);

  // }}
  //let batterye;

  // weightTT.hide();
  //   if (sct > minuseffectOST) {
  //     if(weightSwich == false){
  //       // weiCount = weightTT.length;
  //       currentIdx = 0;
  //       weightTT.eq(currentIdx).fadeIn();
  //        batterye = setInterval(()=>{
  //         nextIdx = (currentIdx + 1)% weightUpCount;
  //         weightTT.eq(currentIdx).fadeOut(1000);
  //         weightTT.eq(nextIdx).fadeIn(1000);
  //         currentIdx = nextIdx;
  //         if(currentIdx < weightUpCount +1){
  //           clearInterval(batterye);
  //         }

  //   }, 2000);
  //   weigtSwitch = true;
  // }}

  let plusIcon = $(".plus"),
    plusOSP = $(".sec_4").offset().top,
    divisionIcon = $(".division"),
    divisionOSP = $(".sec_5").offset().top,
    multipleIcon = $(".multiple"),
    multipleOSP = $(".sec_6").offset().top,
    twentyOST = $(".twenty").offset().top;
  let battery;
  count = 1;

  if (sct > plusOSP) {
    plusIcon.addClass("acitve");
    $(".plus_bg").fadeOut(1000);
  }

  if (sct > divisionOSP) {
    divisionIcon.addClass("acitve");
    $(".division_bg").fadeOut(1000);
  }
  if (sct > divisionOSP + 30) {
    if (batterySwitch == false) {
      let i = 1;
      battery = setInterval(() => {
        $(".division_tt img").attr({
          src: `imgs/brand/brand_division/battery/battery_${i}.png`,
        });
        i++;

        if (i == 25 || i > 25) {
          clearInterval(battery);
        }
      }, 100);
      batterySwitch = true;
    }
  }

  if (sct > multipleOSP) {
    multipleIcon.addClass("acitve");
    $(".multiple_bg").fadeOut(1000);
  }
  if (sct > multipleOSP + 30) {
    $(".vivid").addClass("active animate__fadeInUp");
  }
  if (sct > multipleOSP + 80) {
    $(".multiple_tt").find("h2").eq(0).addClass("animate");
    setTimeout(() => {
      $(".multiple_tt").find("h2").eq(1).addClass("animate");
    }, 1000);
  }
  if (sct > twentyOST) {
    $(".twenty h2").addClass("active animate__fadeIn");
  }

  let plusOpenOST = $(".plus_open").offset().top;
  let pluscount = Math.floor((sct / plusOpenOST) * 20);
  if (pluscount > 1 && pluscount < 64) {
    $(".plus_effect img").attr({
      src: `imgs/brand/brand_plus/plus_${pluscount}.png`,
    });
  }

  let plusImg = $(".plus_open img");

  //let count = 0;                   //이미지 index count
  let divisionOST = $(".sec_5").offset().top;
  let multiplenOST = $(".sec_6").offset().top;

  if (sct > divisionOST - 400) {
    if (sct > divisionOST) {
      let divisionTT = $(".division_tt");
      divisionTT.find(".d_time").addClass("active animate__fadeIn");
      setTimeout(() => {
        divisionTT.find(".d_day").addClass("active animate__fadeIn");
        setTimeout(() => {
          divisionTT.find(".d_long").addClass("active animate__fadeIn");
        }, 1000);
      }, 1000);

      let count = 0;
      (plusOpenOST = $(".plus_open").offset().top),
        (count = Math.floor((sct / plusOpenOST) * 20));

      if (count > 1 && count < 64) {
        $(".plus_effect img").attr({
          src: `imgs/brand/brand_plus/plus_${count}.png`,
        });
      }
    }

    let dolbyAniOST = $(".dolby_wrap img").offset().top;
    count = Math.floor((sct / dolbyAniOST) * 50);
    if (count > 1) {
      $(".dolby_wrap img").attr({ src: `imgs/brand/dolby/dolby_${count}.png` });
    }
  }

  // sec_8
  let sec8 = $(".sec_8");
  let sec8OST = sec8.offset().top;
  let switch1 = false;

  // let lastTT = $('.last_tt div'),
  //     lastTTCount = lastTT.length,
  //     lastTTcurrentIdx = 0;

  //     if (sct > sec8OST + 50) {
  //       if(!switch1) {
  //         lastTT.eq(lastTTcurrentIdx).fadeIn();
  //         setInterval(()=>{
  //           let nextIdx = (lastTTcurrentIdx + 1)%lastTTCount;
  //           lastTT.eq(lastTTcurrentIdx).fadeOut();
  //           lastTT.eq(nextIdx).fadeIn();
  //           lastTTcurrentIdx = nextIdx;
  //           switch1 = true;
  //         }, 4000);
  //       }

  // }
  /*
    if (sct > sec8OST + 50) {
      if (!switch1) {

        // sec8.find('.sec_8_tt1').fadeOut();
      } switch1 = true;
      if (sct > sec8OST + 60) {
        // sec8.find('.sec_8_tt').fadeOut();
        // sec8.find('.sec_8_tt2').fadeIn();
        console.log('8 작동')
        sec8.find('.sec_8_tt2').addClass('active');
      }
      // if (sct > sec8OST + 20) {
      //   // sec8.find('.sec_8_tt1').fadeOut();
      //   sec8.find('.sec_8_tt2').fadeIn();
      // }
      //sec8.find('.sec_8_tt1').addClass('active');


    }
    */

  /*
    if (sct > sec8OST) {
      if (!switch1){
    
        sec8.find('.sec_8_tt1').fadeIn();
        setTimeout(()=>{
          sec8.find('.sec_8_tt1').fadeOut();
        },10)
      }  switch1 = true;
      // if (sct > sec8OST + 10) {
      //   sec8.find('.sec_8_tt1').fadeOut();
      //   // sec8.find('.sec_8_tt2').fadeIn();
      // }
      if (sct > sec8OST + 20) {
        // sec8.find('.sec_8_tt1').fadeOut();
        sec8.find('.sec_8_tt2').fadeIn();
      }
      //sec8.find('.sec_8_tt1').addClass('active');
     
  
    }
    */
  // $('.last_tt .sec_8_tt2').fadeOut();
  // if (sct > sec8OST) {
  //   if (!lastSwitch) {

  //     let fadeIndex = 0;

  //     function fadeText() {

  //       $('.last_tt div').eq(fadeIndex).fadeOut(700, function () {
  //         fadeIndex = (fadeIndex + 1) % $('.last_tt div').length;
  //         $('.last_tt div').eq(fadeIndex).fadeIn(700).addClass('visible');
  //         $('.last_tt div').eq(0).hide();
  //         // $('.last_tt div').eq(fadeIndex).addClass('visible');
  //       });
  //     }

  //     fadeText();
  //     lastSwitch = true;
  //   };
  // };
}); //스크롤

AOS.init();

/* twentytwenty / gram 해상도 비교  */
$(".twentytwenty-container").twentytwenty({
  default_offset_pct: 0.4,
  move_slider_on_hover: true,
  move_with_handle_only: true,
  click_to_move: false,
});
