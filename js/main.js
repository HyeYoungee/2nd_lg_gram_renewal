$('.main_header_menu > li').click(function() {
  $('.main_header_menu > li').not(this).find('ul').slideUp(300);
  $(this).find('ul').stop().slideToggle(300);  
});

// .main_header_toggleBtn을 클릭하면 .main_header_menu가 보이거나 숨겨집니다.
$('.main_header_toggleBtn').click(function() {
  $('.main_header_menu').toggle();
});

  $( "#accordion" ).accordion();