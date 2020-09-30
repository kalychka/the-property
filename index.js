import './components/loader/loader.js'

import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import '../node_modules/bootstrap/dist/css/bootstrap.css'

import './assets/font.css'
import './assets/fontawesome/css/all.css'
import './styles/style.scss'
import './index.pug'

import './components/button/button.js'

import './components/review/review.js'

import './components/input/text-field.js'

import './components/property-item/property-item.js'

import '../node_modules/jquery/dist/jquery.js'
import './assets/slick-1.8.1/slick/slick.js'
import './assets/slick-1.8.1/slick/slick.css'



$(function() {
    $('#reviews-carousel').slick({    
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1800,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: `<div class="prevButton"> <i class="fas fa-long-arrow-alt-left"></i> </div>`,
        nextArrow: `<div class="nextButton"> <i class="fas fa-long-arrow-alt-right"></i> </div>`,
    });

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
    

  });