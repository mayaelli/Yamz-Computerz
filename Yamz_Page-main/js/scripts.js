jQuery(document).ready(function($){
    $(window).scroll(function(){
        if($(this).scrollTop() >= 100){
            $('header').addClass('fixed');
        }else{
            $('header').removeClass('fixed');
        }
    });

    var lightbox = $('.port-items a').simpleLightbox({ history: false });

    var createdate = new Date();
    var getyear = createdate.getFullYear();
    var getyeardiv = document.getElementById('year');
    getyeardiv.innerHTML = getyear;

    $('a.showmenu').click(function(){
        $('nav').fadeIn();
        $('body').addClass('disablescroll');
        $('a.hidemenu').show();
    });

    $('a.hidemenu').click(function(){
        $('nav').fadeOut();
        $('body').removeClass('disablescroll');
        $(this).hide();
    });

    $(window).on("resize", function() {
        // Ensure menu visibility on resize
        const viewportWidth = $(window).width();
        if (viewportWidth >= 1200) {
            $('nav').show(); // Always show the menu on larger screens
            $('a.hidemenu').hide();
            $('a.showmenu').hide();
            $('body').removeClass('disablescroll');
        } else {
            $('nav').hide(); // Default to hidden for smaller screens
            $('a.showmenu').show();
        }
    }).trigger("resize"); // Trigger resize on page load to ensure correct initial state

    $(window).on("scroll", function() {
        const $header = $("header");
        const $menuLinks = $(".menu nav ul li a");
        const $activeLink = $(".menu nav ul li.active a");

        if ($(this).scrollTop() > 50) {
            $header.addClass("scrolled");
            $menuLinks.css("color", "#000");
            if ($activeLink.length) {
                $activeLink.css("color", "#fff");
            }
        } else {
            $header.removeClass("scrolled");
            if ($(window).width() < 1200) {
                $menuLinks.css("color", "#000");
            } else {
                $menuLinks.css("color", "#fff");
            }
            if ($activeLink.length) {
                $activeLink.css("color", "#fff");
            }
        }
    });
});
