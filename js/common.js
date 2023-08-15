/* 최성희 main_header 시작 */
// 전체화면에 공통으로 일어날 일
// gnb를 클릭하면 lnb 토글
$(".main_header_menu > li").hover(function () {
  $(".main_header_menu > li").not(this).find("ul").slideUp();
  $(this).find("ul").stop().slideDown();
},
function () {
  $(this).find("ul").stop().slideUp();
});
$(".main_header_menu li ul").hide(); // 기본으로도 안보이게
// 윈도우 클릭시 lnb 숨김
$(document).on("mouseout", function (event) {
  if (!$(event.target).closest(".main_header_menu").length) {
    $(".main_header_menu li ul").hide(); // lnb 숨김
  }
});
// 윈도우 리사이즈시 열려있던 lnb 숨김
$(window).resize(function () {
  $(".main_header_menu li ul").hide();
});
// 아이콘에 호버하면 색상변화
$(".main_header_icons li a").hover(
  function () {
    $(this).find("svg>path").css("fill", "var(--blue_02)");
  },
  function () {
    $(this).find("svg>path").css("fill", ""); // 원래 색상으로 되돌리기
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
/* 768px 이하 화면에서 일어날 일 */
// 햄버거 버튼을 클릭하면 gnb 보이거나 숨김, 토글 버튼 상태 초기화
let $toggleBtn = $(".main_header_toggleBtn img");
  $toggleBtn.attr("src", "imgs/index/main_header_menu.svg");
$(".main_header_toggleBtn").click(function (e) { //토글 버튼을 클릭할 때의 동작
  e.preventDefault();
  if ($(window).width() <= 768) { //화면 너비가 768px 이하일 경우에만 동작
    $(".main_header_icons").toggle();
    $(".main_header_menu, .main_header_menu>li>ul").toggleClass("active");

    if ($toggleBtn.attr("src") === "imgs/index/main_header_menu.svg") {
      $toggleBtn.attr("src", "imgs/index/main_header_close.svg");
    } else {
      $toggleBtn.attr("src", "imgs/index/main_header_menu.svg");
    }
  }
});
// 아이콘들이 화면이 작을 때는 안보이고 클 때는 보임
$(window).resize(function () {
  if ($(window).width() <= 768) {
    $(".main_header_icons").hide();
  } else {
    $(".main_header_icons").show();
  }
}).resize(); // 초기화 시 바로 적용
$(".main_header_icons").click(function (e) {
  e.preventDefault();
});


/* 이현정 topbtn 시작 */

let goTop = $("#gotop_btn");
let logoBtn = $("#lg_logo_btn");

$(window).on("scroll",function (e) {
  e.preventDefault();
  let scrollPosition = $(this).scrollTop();
  let footerOST = $("footer").offset().top;
 

  if (scrollPosition > 700 ) {
    goTop.addClass("active");
    logoBtn.addClass("active");
  }else{
    goTop.removeClass("active");
    logoBtn.removeClass("active");
  }
  if(scrollPosition >= footerOST - 500) {
    goTop.addClass("light");
    logoBtn.addClass("light");
  }else{
  goTop.removeClass("light");
  logoBtn.removeClass("light");

  }
});

goTop.on("click",function (e) {
  e.preventDefault();
  $("html, body").stop().animate({ scrollTop: 0 }, "easeInCubic");
});

/* 이현정 topbtn 끝 */

