$(document).ready(() => {
    $('.burger').on('click', function () {
        if($('.burger, .menu__nav').toggleClass('active')) {
            $('.body').toggleClass('lock');
        } else {
            $('.burger').addClass('active');
        }
    })
});


























































