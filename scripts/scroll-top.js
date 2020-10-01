$(window).scroll(function() {
    var height = $(window).scrollTop();

    if (height > 600) {
      $('.scroll-top').addClass('scroll-top_visible');
    } else {
      $('.scroll-top').removeClass('scroll-top_visible');
    };       
})

$('.scroll-top').on('click', (e) => {
  $('body, html').animate({scrollTop: 0}, 400);
})