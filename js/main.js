/* 이현정 팝업 시작 */

let popup = $(".popup");
let pCloseBtn = popup.find("#ppCloseBtn");
let dayCheck = popup.find("#daycheck");

function setCookie(name, value, day) {
  let date = new Date();
  date.setDate(date.getDate() + day);
  document.cookie = `${name}=${value};expires=${date.toUTCString()}`;
}

popup.find(".github").on("click", function () {
  window.open("https://github.com/hazel305/lg_gram_renewal_website");
});

function cookieCheck(name) {
  let cookieArr = document.cookie.split(";");
  let visited = false;
  for (let cookie of cookieArr) {
    if (cookie.search(name) > -1) {
      visited = true;

      break;
    }
  }
  if (!visited) {
    popup.attr("open", "");
  } else {
    popup.removeAttr("open");
  }
}
cookieCheck("team");

pCloseBtn.on("click", function () {
  popup.removeAttr("open");
  if (dayCheck.prop("checked")) {
    setCookie("team", "coala", 1);
  } else {
    setCookie("team", "coala", -1);
  }
});

/* 이현정 팝업 끝 */

/* 이현정 main_sec_01_video 시작 */
$(function () {
  $(".select_slider").bxSlider({
    minSlides: 3,
    maxSlides: 8,
    slideWidth: 345,
    slideMargin: 10,
    ticker: true,
    speed: 20000,
  });
});

$(window).on("resize", function () {
  let windowWid = $(window).width();
  let scrollLgBtn = $("#scroll_btn");
  let scrollSmBtn = $("#scroll_sm_btn");
  let videoChange = $(".video_slider div video");
  if (windowWid < 768) {
    videoChange.attr(
      "src",
      "https://res.cloudinary.com/doq5gztmf/video/upload/v1695731623/newjeans_gram_mb_k4c9fm.mp4"
    );
    scrollLgBtn.css("display", "none");
    scrollSmBtn.css("display", "block");
  } else {
    videoChange.attr(
      "src",
      "https://res.cloudinary.com/doq5gztmf/video/upload/v1695731107/gram_dance_cdbuiv.mp4"
    );
    scrollLgBtn.css("display", "block");
    scrollSmBtn.css("display", "none");
  }
});
$(window).trigger("resize");
/* 이현정 main_sec_01_video 끝 */

/* 이현정 main_sec_04_select 시작 */
$("#gramtype").niceSelect();
$("#gramcolor").niceSelect();

$(".goPage").on("click", function () {
  const typeSelect = $("#gramtype").val();
  const colorSelect = $("#gramcolor").val();
  window.location.href = `http://127.0.0.1:5505/search.html?type=${typeSelect}&color=${colorSelect}`;
});

/* 이현정 main_sec_04_select 끝 */

/* 천혜영 main_sec_02_slide 시작 */
var swiper = new Swiper(".slider", {
  slidesPerView: 1,
  centeredSlides: true,
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

//autoplayStart autoplayStop
let slide = $(".swiper-slide img");

slide.on("mouseenter", function (e) {
  swiper.autoplay.stop();
});
slide.on("mouseleave", function (e) {
  swiper.autoplay.start();
});
/* 천혜영 main_sec_02_slide 끝 */

/* 천혜영 main_sec_05_all 시작 */
let sec5_cardBox = $(".main_sec5 .card_box > div");

sec5_cardBox.mouseover(function () {
  $(this).addClass("active");
});
sec5_cardBox.mouseout(function () {
  $(this).removeClass("active");
});
/* 천혜영 main_sec_05_all 끝 */

/* 김유림 main_sec_06_service 시작 */
const csSwiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 10,
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    720: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    800: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
  autoplay: {
    delay: 3000,
    pauseOnMouseEnter: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/* 김유림 main_sec_06_service 끝 */
