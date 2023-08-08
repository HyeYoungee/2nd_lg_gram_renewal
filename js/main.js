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

$("#gramtype").niceSelect();
$("#gramcolor").niceSelect();

$(".goPage").on("click", function () {
  const typeSelect = $("#gramtype").val();
  const colorSelect = $("#gramcolor").val();
  console.log(typeSelect, colorSelect);
  window.location.href = `http://127.0.0.1:5506/search.html?type=${typeSelect}&color=${colorSelect}`;
});

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
/* main_sec2 */
var swiper = new Swiper(".slider", {
  slidesPerView: 1,
  centeredSlides: true,
  // slidesOffsetAfter:24,
  // slidesOffsetBefore:24,
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

/* main_sec5 */
let sec5_cardBox = $(".main_sec5 .card_box > div");
console.log(sec5_cardBox);

sec5_cardBox.mouseover(function () {
  $(this).addClass("active");
});
sec5_cardBox.mouseout(function () {
  $(this).removeClass("active");
});
