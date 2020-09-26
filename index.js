

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
        speed: 300,
        slidesToScroll: 1,
        prevArrow: `<div class="prevButton"> <i class="fas fa-long-arrow-alt-left"></i> </div>`,
        nextArrow: `<div class="nextButton"> <i class="fas fa-long-arrow-alt-right"></i> </div>`,
        centerMode: true,
        variableWidth: true,
        responsive: [
            {
              breakpoint: 820,
              settings: {
                centerMode: false
              }
            },
        ]
    });
  });