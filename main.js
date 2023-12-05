var slidr1 = $('.gallery__slider');
var slidr2 = $('.ross_slider');
$(window).load(function () {
    slidr1.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        draggable : true,
        asNavFor: '.ross_slider'
    });
    slidr2.slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        draggable : false,
        asNavFor: '.gallery__slider',
        focusOnSelect: true
    });
    $('.fancybox-modal').fancybox({padding: 0});
    $("input[type=tel]").mask("+7 (999) 999-99-99");
    function scrollToElement(element, offset) {
        $(element).click(function (e) {
            var elementClick = $(this).attr("href");
            var destination = $(elementClick).offset().top;
            if (destination < 0) {
                destination = 0;
            }
            $('html, body').animate({scrollTop: destination - offset}, "slow");
            e.preventDefault();
        });
    }
    scrollToElement("a[href='#f0']", 0);
});

