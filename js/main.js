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
    480: {   //480px 이상부터
      slidesPerView: 1.3
    },
    768: {   //768px 이상부터
      slidesPerView: 1.7
    },
    1500: {   //1500px 이상부터
      slidesPerView: 2
    }
  }
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
let slide = $('.swiper-slide.swiper-slide-active img');
console.log(slide);

slide.mouseenter(function(e){
  console.log('stop autoplay');
  swiper.stopAutoplay();
});
slide.mouseleave(function(e){
  console.log('start autoplay');
  swiper.startAutoplay();
});


// slide.sliderMove(function(){
//   swiper.autoplay.stop();
// });
// slide.sliderMove(function(){
//   swiper.autoplay.play();
// });



/* main_sec5 */
let sec5_cardBox = $('.main_sec5 .card_box > div');
console.log(sec5_cardBox);

sec5_cardBox.mouseover(function(){
  $(this).addClass('active');
})
sec5_cardBox.mouseout(function(){
  $(this).removeClass('active');
});