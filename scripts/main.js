$('.menu-toggle').click(function(){
	$('.nav').toggleClass('show-nav');
	$('.menu-toggle').toggleClass('change');
});

var num = 350; //number of pixels before modifying styles

$(document).ready(function() {
    if ($(window).scrollTop() > num) {
        $('.navbar').addClass('sticky');
        $('.main').addClass('margin-fix');
        $('.top-nav').addClass('show-top-nav');
    }
});

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > num) {
        $('.navbar').addClass('sticky');
        $('.main').addClass('margin-fix');
        // $('.top-nav').slideDown("slow")
        $('.top-nav').addClass('show-top-nav');
    } else {
        $('.navbar').removeClass('sticky');
        $('.main').removeClass('margin-fix');
        $('.top-nav').removeClass('show-top-nav');
    }
});

