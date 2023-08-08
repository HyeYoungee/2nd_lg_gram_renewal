
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
  if ($(window).width() <= 768) {
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
  if ($(window).width() <= 768) {
    $(".main_header_icons").hide();
  } else {
    $(".main_header_icons").show();
  }
});
if ($(window).width() <= 768) {
  $(".main_header_icons").hide();
} //기본도 숨기기
$(".main_header_icons").click(function (e) {
  e.preventDefault();
});
/* 최성희 main_header 끝 */
/* 이현정 topbtn 시작 */

let goTop = $("#gotop_btn");
let logoBtn = $("#lg_logo_btn");

$(window).on("scroll",function () {
  let scrollPosition = $(this).scrollTop();
  let footerOST = $("footer").offset().top;

  if (scrollPosition > 700 && scrollPosition <= footerOST - 500) {
    goTop.removeClass("active");
    logoBtn.removeClass("active");
  } else {
    goTop.addClass("active");
    logoBtn.addClass("active");
  }
});

goTop.on("click",function (e) {
  e.preventDefault();
  $("html, body").stop().animate({ scrollTop: 0 }, "easeInCubic");
});

/* 이현정 topbtn 끝 */

