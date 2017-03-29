$('.owl-carousel').owlCarousel({
    stagePadding: 200,
    loop:true,
    margin:10,
    items:1,
    nav:true,
    navText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>"
    ],
    dots:true,
    autoplay: true,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items:1,
            stagePadding: 0
        },
        600:{
            items:1,
            stagePadding: 0
        },
        768:{
            items:1,
            stagePadding: 0
        },
        1000:{
            items:1,
            stagePadding: 200
        },
        1200:{
            items:1,
            stagePadding: 300
        },
        1400:{
            items:1,
            stagePadding: 350
        },
        1600:{
            items:1,
            stagePadding: 400
        },
        1800:{
            items:1,
            stagePadding: 450
        }
    }
});
