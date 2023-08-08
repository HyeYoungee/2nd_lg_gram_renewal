let goTop = $("#gotop_btn");
let logoBtn = $("#lg_logo_btn");

$(window).scroll(function () {
  let scrollPosition = $(this).scrollTop();
  let footerOST = $("footer").offset().top;

  if (scrollPosition < 700 || scrollPosition >= footerOST) {
    goTop.addClass("active");
    logoBtn.addClass("active");
  } else {
    goTop.removeClass("active");
    logoBtn.removeClass("active");
  }
});

goTop.click(function (e) {
  e.preventDefault();
  $("html, body").stop().animate({ scrollTop: 0 }, "easeInCubic");
});
