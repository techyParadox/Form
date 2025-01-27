$(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
        $('.list-item').addClass('scrolled');
        $('.navbar').addClass('scrolled'); 
        $('.contact-btn').addClass('cntct-bg');
        $('.nav-list').addClass('top');
    } else {
        $('.list-item').removeClass('scrolled');
        $('.navbar').removeClass('scrolled'); 
        $('.contact-btn').removeClass('cntct-bg'); 
        $('.nav-list').removeClass('top'); 
    }
});
