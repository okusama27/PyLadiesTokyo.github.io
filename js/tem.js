$(function() {
    $('.header .header__menu').on('click', function() {
        $('.navi').slideDown('fast');
    });
    $('.navi .header__menu').on('click', function() {
        $('.navi').slideUp('fast');
    });
})