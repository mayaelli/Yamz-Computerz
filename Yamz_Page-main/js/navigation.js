jQuery(document).ready(function($){

    $('nav ul li a').click(function(){
        var target = $(this.hash);
        if (target.length) {
            $('html,body').animate({scrollTop: target.offset().top - 120}, 1200);
            $('nav ul li').removeClass('active');
            $(this).parent('li').addClass('active');
            return false;
        }
    });

    $.fn.isInViewport = function() {
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();
        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();
        return elementBottom > viewportTop && elementTop < viewportBottom;
    };

    $(window).on('scroll', function() {
        var zeroscroll = $(this).scrollTop() < 10;
        var afterscroll = $(this).scrollTop() > 140;

        if(zeroscroll){
            $('[href="#home"]').parent('li').siblings('li').removeClass('active');
            $('[href="#home"]').parent('li').addClass('active');
        }else{
            $('[href="#home"]').parent('li').removeClass('active');
        }

        if ($('#about').isInViewport() && afterscroll) {
            $('[href="#about"]').parent('li').siblings('li').removeClass('active');
            $('[href="#about"]').parent('li').addClass('active');
        }else{
            $('[href="#about"]').parent('li').removeClass('active');
        }

        if ($('#portfolio').isInViewport() && afterscroll) {
            $('[href="#portfolio"]').parent('li').siblings('li').removeClass('active');
            $('[href="#portfolio"]').parent('li').addClass('active');
        }else{
            $('[href="#portfolio"]').parent('li').removeClass('active');
        }

        if ($('#products').isInViewport() && afterscroll) {
            $('[href="#products"]').parent('li').siblings('li').removeClass('active');
            $('[href="#products"]').parent('li').addClass('active');
        }else{
            $('[href="#products"]').parent('li').removeClass('active');
        }

        if ($('#contact').isInViewport() && afterscroll) {
            $('[href="#contact"]').parent('li').siblings('li').removeClass('active');
            $('[href="#contact"]').parent('li').addClass('active');
        }else{
            $('[href="#contact"]').parent('li').removeClass('active');
        }
    });

});
// CLOSED