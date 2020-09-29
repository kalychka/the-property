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

import '../node_modules/jquery/dist/jquery.js'
import './assets/slick-1.8.1/slick/slick.js'
import './assets/slick-1.8.1/slick/slick.css'



$(document).ready(function(){
    $('#reviews').slick({
        
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1800,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: `<div class="prevButton"> <i class="fas fa-long-arrow-alt-left"></i> </div>`,
        nextArrow: `<div class="nextButton"> <i class="fas fa-long-arrow-alt-right"></i> </div>`,
        centerMode: true,
        variableWidth: false,
        responsive: [
            {
              breakpoint: 1100,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            }
        ]
    });
  });