$('.card').on('click', function() {
    const src = $(this).find('img').attr('src');
    $('body').append(' <div id="overlay"></div> <div id="property-item__modal"> <img src="'+src+'"> </div>');
    $('#property-item__modal').css({
      left: ( $(document).width() - $('#property-item__modal').outerWidth() ),
      top: ( $(window).height() - $('#property-item__modal').outerHeight() )
    })
    $('#property-item__modal').fadeIn();
});

$('body').on('click', '#property-item__modal', function(event) {
  event.preventDefault();
  $('#property-item__modal, #overlay').fadeOut('fast', function() {
    $('#property-item__modal, #overlay').remove();
  })
})