/* 최성희 main_header 시작 */
/*전체화면에 공통으로 일어날 일*/
//gnb 를 클릭하면 lnb 토글
$(".main_header_menu > li").click(function () {
  $(".main_header_menu > li").not(this).find("ul").slideUp();
  $(this).find("ul").stop().slideToggle();
});
$(".main_header_menu li ul").hide(); //기본으로도 안보이게
//윈도우 클릭시 lnb 숨김
$(document).click(function (event) {
  // 클릭된 요소가 gnb면 클릭 이벤트 무시
  if (!$(event.target).closest(".main_header_menu").length) {
    $(".main_header_menu li ul").hide(); //lnb 숨김
  }
});
//윈도우 리사이즈시 열려있던 lnb숨김
$(window).resize(function () {
  $(".main_header_menu li ul").hide();
});
//아이콘에 호버하면 색상변화
$(".main_header_icons li a").hover(
  function () {
    $(this).find("svg>path").css("fill", "var(--blue_02)");
  },
  function () {
    $(this).find("svg>path").css("fill", ""); //원래 색상으로 되돌리기
  }
);
// 초기에 border 없고 스크롤 내릴 때 border 추가
let $scrollBorder = $("nav.main_header_scroll_border");
$(window).on("scroll", function () {
  if ($(window).scrollTop() > 0) {
    $scrollBorder.addClass("with_border");
  } else {
    $scrollBorder.removeClass("with_border");
  }
});

/*768이하 화면에서 일어날 일*/
//햄버거 버튼을 클릭하면 gnb 보이거나 숨김
$(".main_header_toggleBtn").click(function (e) {
  e.preventDefault();
  if ($(window).width() < 768) {
    $(".main_header_icons").toggle();
    $(".main_header_menu, .main_header_menu>li>ul").toggleClass("active");
    let $toggleBtn = $(this).find("img");
    if ($toggleBtn.attr("src") === "./imgs/index/main_header_menu.svg") {
      $toggleBtn.attr("src", "./imgs/index/main_header_close.svg");
    } else {
      $toggleBtn.attr("src", "./imgs/index/main_header_menu.svg");
    }
  }
});
//아이콘들이 화면이 작을때는 안보이고 클때는 보임
$(window).resize(function () {
  if ($(window).width() < 768) {
    $(".main_header_icons").hide();
  } else {
    $(".main_header_icons").show();
  }
});
if ($(window).width() < 768) {
  $(".main_header_icons").hide();
} //기본도 숨기기
$(".main_header_icons").click(function (e) {
  e.preventDefault();
});
/* 최성희 main_header 끝 */

/* 이현정 main_sec1_video 시작 */
$(function () {
  $(".video_slider").bxSlider({
    controls: false,
    onSlideLoad: function () {
      $(".video-slider").find("div:eq(0)").find("video").get(0).play();
    },
    onSlideAfter: function ($slideElement) {
      $(".video-slider div").find("video").get(0).pause();
      $(".video-slider div").find("video").get(0).currentTime = 0;
      $slideElement.find("video").get(0).play();
    },
  });

  $(".select_slider").bxSlider({
    minSlides: 3,
    maxSlides: 8,
    slideWidth: 345,
    slideMargin: 10,
    ticker: true,
    speed: 20000,
  });
});

$(window).resize(function () {
  let windowWid = $(window).width();
  let scrollLgBtn = $("#scroll_btn");
  let scrollSmBtn = $("#scroll_sm_btn");
  let videoChange = $(".video-slider div video");
  if (windowWid < 768) {
    videoChange.attr(
      "src",
      "https://res.cloudinary.com/damxzwed4/video/upload/v1690634452/gram_global_dtaxus.mp4"
    );
    scrollLgBtn.css("display", "none");
    scrollSmBtn.css("display", "block");
  } else {
    scrollLgBtn.css("display", "block");
    scrollSmBtn.css("display", "none");
  }
});
/* 이현정 main_sec1_video 끝 */

$("#gramtype").niceSelect();
$("#gramcolor").niceSelect();

// }
// let videoSection = document.querySelector(".main_sec01_video"),
//   videoWrapper = videoSection.querySelector(".main_video"),
//   videoSlide = videoSection.querySelectorAll(".video_slide"),
//   videos = videoSection.querySelectorAll("video"),
//   videoPager = videoSection.querySelector(".video_pager"),
//   videoCount = videoSlide.length,
//   videoCurrentIdx = 0,
//   videoPagerHtml = "";

// function setVideo() {
//   if (window.innerWidth <= 768) {
//     let video1 = document.getElementById("video1");
//     let video2 = document.getElementById("video2");
//     video1.setAttribute(
//       "src",
//       "https://res.cloudinary.com/damxzwed4/video/upload/v1690634463/newjeans_gram_mb_fea6sh.mp4"
//     );
//     video2.setAttribute(
//       "src",
//       "https://res.cloudinary.com/damxzwed4/video/upload/v1690634463/newjeans_gram_mb_fea6sh.mp4"
//     );
//     videoPager.style.display = "none";
//   } else {
//     let video1 = document.getElementById("video1");
//     let video2 = document.getElementById("video2");
//     video1.setAttribute(
//       "src",
//       "https://res.cloudinary.com/damxzwed4/video/upload/v1690634452/gram_global_dtaxus.mp4"
//     );
//     video2.setAttribute(
//       "src",
//       "https://res.cloudinary.com/damxzwed4/video/upload/v1690634515/gram_dance_ljnqcm.mp4"
//     );
//     videoPager.style.display = "block";
//   }
// }

// window.addEventListener("resize", setVideo);
// setVideo();

//스크롤다운 버튼 사이즈에 따라 바꿔주기
// let scrollButton = document.getElementById("scroll_btn");
// function updateScrollButton() {
//   if (window.innerWidth <= 768) {
//     scrollButton.style.display = "block";
//   } else {
//     scrollButton.style.display = "block";
//   }
// }
// window.addEventListener("resize", updateScrollButton);
// updateScrollButton();

// if (videoCount > 0) {
//   videoSlide.forEach((item, idx) => {
//     item.style.left = `${idx * 100}%`;
//     let activeClass = idx === 0 ? " active" : "";
//     videoPagerHtml += `<a href="#" class="${activeClass}">${idx + 1}</a>`;
//   });
// }

// videoPager.insertAdjacentHTML("beforeend", videoPagerHtml);
// let videoPagerBtn = videoPager.querySelectorAll("a");

// function video_moveSlide(num) {
//   videoWrapper.style.left = `${num * -100}%`;
//   videoCurrentIdx = num;
//   for (let pg of videoPagerBtn) {
//     pg.classList.remove("active");
//   }
//   videoPagerBtn[videoCurrentIdx].classList.add("active");

//   for (let i = 0; i < videos.length; i++) {
//     if (i !== videoCurrentIdx) {
//       videos[i].pause();
//       videos[i].currentTime = 0;
//     }
//   }

//   videos[videoCurrentIdx].play();
// }

// videoPagerBtn.forEach((btn, idx) => {
//   btn.addEventListener("click", (e) => {
//     e.preventDefault();
//     video_moveSlide(idx);
//   });
// });

// function video_autoSlide() {
//   let videoTimer = setInterval(() => {
//     let videoSlideNext = (videoCurrentIdx + 1) % videoCount;
//     video_moveSlide(videoSlideNext);
//   }, 20000);
// }
// video_autoSlide();

/* 천혜영 main_sec_02_slide 시작 */
var swiper = new Swiper(".slider", {
  slidesPerView: 1,
  centeredSlides: true,
  // allowSlideNext: false,
  // allowSlidePrev: false,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 3000,
  },
  breakpoints: {
    480: {
      //480px 이상부터
      slidesPerView: 1.3,
    },
    768: {
      //768px 이상부터
      slidesPerView: 1.5,
    },
    1500: {
      //1500px 이상부터
      slidesPerView: 2,
    },
  },
});

// let slide = $('.swiper-slide.swiper-slide-active img');
// console.log(slide);

// slide.on('mouseenter',function(e){
//   console.log('stop autoplay');
//   swiper.stopAutoplay();
// });
// slide.on('mouseleave',function(e){
//   console.log('start autoplay');
//   swiper.startAutoplay();
// });

//autoplayStart autoplayStop
let slide = $(".swiper-slide.swiper-slide-active img");
console.log(slide);

slide.mouseenter(function (e) {
  console.log("stop autoplay");
  swiper.stopAutoplay();
});
slide.mouseleave(function (e) {
  console.log("start autoplay");
  swiper.startAutoplay();
});

// slide.sliderMove(function(){
//   swiper.autoplay.stop();
// });
// slide.sliderMove(function(){
//   swiper.autoplay.play();
// });
/* 천혜영 main_sec_02_slide 끝 */

/* 천혜영 main_sec_05_all 시작 */
let sec5_cardBox = $(".main_sec5 .card_box > div");
console.log(sec5_cardBox);

sec5_cardBox.mouseover(function () {
  $(this).addClass("active");
});
sec5_cardBox.mouseout(function () {
  $(this).removeClass("active");
});
/* 천혜영 main_sec_05_all 끝 */



/* 김유림 main_sec_06_service 시작 */
const csSwiper = new Swiper('.mySwiper', {
  slidesPerView: 2,
  spaceBetween: 10,
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    720: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    800: {
      slidesPerView: 4,
      spaceBetween: 24
    }
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
  autoplay: {
    delay: 2000,
    pauseOnMouseEnter: true,
  },
  // navigation: {
  //   // enabled:true,
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  //   // nextEl: '.control_prev',
  //   // prevEl: '.control_next',
  // },
});

$('.control_prev').on('click', function () {
  csSwiper.slidePrev();
});
$('.control_next').on('click',function () {
  csSwiper.slideNext();
});
/* 김유림 main_sec_06_service 끝 */
