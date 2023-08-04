
const csSwiper = new Swiper('.mySwiper', {
  slidesPerView: 2,
  spaceBetween: 10,
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    800: {
      slidesPerView: 4,
      spaceBetween: 24
    }
  },
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
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

$('.control_prev').click(function () {
  csSwiper.slidePrev();
});
$('.control_next').click(function () {
  csSwiper.slideNext();
});


