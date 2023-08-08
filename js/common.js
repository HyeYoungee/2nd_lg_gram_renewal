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

