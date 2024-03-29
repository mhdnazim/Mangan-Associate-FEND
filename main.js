
$(document).ready(function () {

    // owl carousal 

    $("#owl-demo").owlCarousel({

        navigation: true, // Show next and prev buttons

        slideSpeed: 300,
        paginationSpeed: 400,
        loop:true,
        items: 3,
        margin: 10,
        itemsDesktop: false,
        itemsDesktopSmall: false,
        itemsTablet: false,
        itemsMobile: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            786: {
                items: 3,
                nav: false
            }
        }


    })


    // slick 

    $('.fade').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: false,
        adaptiveHeight: true,
        cssEase: 'linear'
    })


    // to add an img tag inside a div

    $(window).resize(function () {
        if ($(window).width() < 767) {
            $("#empty").html("<img src='./assets/aboutus_bg.png' width='100%'>")

        } else {
            $("#empty").html("<div></div>")

        }
    })


    $(window).resize(function () {
        if ($(window).width() < 992) {

            $("#image").html("<img src='./assets/right.png' width='100%' height='100%'>")
        } else {

            $("#image").html("<div></div>")
        }
    })


    // header 

    $(".on").click(function () {
        $('.alert').css({
            'transform': 'translateX(0)',
        })
    })

    $(".close").click(function () {
        $('.alert').css({
            'transform': 'translateX(150%)',
        })
    })

    $(".out").click(function () {
        $('.alert').css({
            'transform': 'translateX(150%)',
        })
    })


})