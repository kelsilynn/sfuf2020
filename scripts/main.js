$('.fas').click(function(){
	$('.nav').toggleClass('show-nav');
	$('.fas').toggleClass('fa-bars');
	$('.fas').toggleClass('fa-times');
});

var num = 350; //number of pixels before modifying styles

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > num) {
        $('.navbar').addClass('sticky');
        $('.main').addClass('margin-fix');
        // $('.logo').slideDown('slow');
    } else {
        $('.navbar').removeClass('sticky');
        $('.main').removeClass('margin-fix');
        // $('.logo').hide();
    }
});

