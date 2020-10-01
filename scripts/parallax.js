$('.offer').on('mousemove', (e) => {
    const x = e.pageX / $(window).width();
    const y = e.pageY / $(window).height();

    $('.offer-parallax__star ').css(
      'transform',
      'translate(' + x * 60  + 'px, ' + y * 60 + 'px)' 
    )

    $('.offer-parallax__ellipse').css(
      'transform',
      'translate(-' + x * 30  + 'px, -' + y * 30 + 'px)' 
    )
});