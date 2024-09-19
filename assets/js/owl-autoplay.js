$('.owl-carousel-demo').owlCarousel({
    loop: true,
    margin: 24,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: false,
    responsive: {
        0: {
            items: 1,
            autoplayTimeout: 5000
        },
        992: {
            items: 2
        },
        1399: {
            items: 3
        }
    }
});



