$(document).ready(function() {
    $('.button-collapse').sideNav({
        menuWidth: 300, // Default is 240
        edge: 'left', // Choose the horizontal origin
        closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    });

    $('.parallax').parallax();

    $('.scrollspy').scrollSpy();

    $('#modal').leanModal();

    $('ul.tabs').tabs();

    $('#services .card').addClass("hidden").viewportChecker({
        classToAdd: 'visible',
        offset: 200
    });

    $('nav ul li a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 64)
        }, 750, 'easeInOutExpo');
        event.preventDefault();
    });

    $('.carousel').carousel();


    // $(window).scroll(function() {
    //     if ($('#services .card').length != 0) {
    //         $('.how_it_works_step').each(function(i) {
    //             $(this).delay((i++) * 300).fadeTo(1000, 1);;
    //         })
    //     };
    //
    // }).trigger('scroll');
});
