import './text-field.pug'
import './text-field.scss'

$('.text-field, .contact__form__message').on('click', function(){
    $(this).addClass('text-field_active');
}) 