$(document).ready(function () {

    $("#owl-demo").owlCarousel({
        loop: true,
        navigation: true, // Show next and prev buttons
        slideSpeed: 100,
        paginationSpeed: 100,
        items: 1,
        itemsDesktop: false,
        itemsDesktopSmall: false,
        itemsTablet: false,
        itemsMobile: false,
        autoplay:true,
        autoplayTimeout:3000

    });

});
