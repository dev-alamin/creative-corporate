//    tosearchbox
$("li.searchTrigger a").click(function () {
    $("form.topSearchBox").addClass("active");
});


$("li.topSearchBoxClose a").click(function () {
    $("form.topSearchBox").removeClass("active");
});









//   owlcarousel     

$(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    if (scroll < 100) {
        $(".row.main-menu-bg").removeClass("sticky");
    } else {
        $(".row.main-menu-bg").addClass("sticky");
    }
});



//wow js animation

var wow = new WOW({
    boxClass: 'wow', // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset: 120, // distance to the element when triggering the animation (default is 0)
    mobile: true, // trigger animations on mobile devices (default is true)
    live: true // act on asynchronously loaded content (default is true)
});
wow.init();


//Counter activation
$('.project-1st').countTo({
    from: 0,
    to: 986,
    speed: 10000,
    refreshInterval: 50,
    formatter: function (value, options) {
        return value.toFixed(options.decimals);
    },
    onUpdate: function (value) {
        console.debug(this);
    },
    onComplete: function (value) {
        console.debug(this);
    }
});

$('.project-2nd').countTo({
    from: 0,
    to: 276,
    speed: 20000,
    refreshInterval: 100,
    formatter: function (value, options) {
        return value.toFixed(options.decimals);
    },
    onUpdate: function (value) {
        console.debug(this);
    },
    onComplete: function (value) {
        console.debug(this);
    }
});

$('.project-3rd').countTo({
    from: 0,
    to: 700,
    speed: 10000,
    refreshInterval: 100,
    formatter: function (value, options) {
        return value.toFixed(options.decimals);
    },
    onUpdate: function (value) {
        console.debug(this);
    },
    onComplete: function (value) {
        console.debug(this);
    }
});

//count to start end




$(function () {
    $.scrollUp({
        scrollName: 'scrollUp', // Element ID
        topDistance: '300', // Distance from top before showing element (px)
        topSpeed:200, // Speed back to top (ms)
        animation: 'fade', // Fade, slide, none
        animationInSpeed: 200, // Animation in speed (ms)
        animationOutSpeed: 200, // Animation out speed (ms)
        scrollText: ["<i class='fa fa-angle-up'></i>"], // Text for element
        activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    });
});

//heroSlider
$('.home-slide').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    autoplay: false,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    animateOut: 'fadeOut',
    transitionStyle: "fade",
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});

//Testimonial slider active

$('.testimonial-carousel-wrap').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: true,
    smartSpeed: 1200,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});

//Team slider active

$('.teamCarouselParent').owlCarousel({
    loop: true,
    margin: 25,
    nav: false,
    dots: false,
    smartSpeed: 1200,
    autoplay: true,
    responsive: {
        0: {
            items: 1,
            margin:30,
        },
        575.98: {
            items: 2,
            margin:20,
        },
        776.98: {
            items: 3,
            margin:20,
        },
        1000: {
            items: 4
        }
    }
});


//brand parter secion
$('.parter-brand').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    autoplay: true,
    autoplayTimeout: 3000,
    smartSpeed: 1200,
    dots: true,
    responsive: {
        0: {
            items:2,
            margin:20,
        },
        
        575.98: {
            items: 3,
            margin:20,
        },
        776.98: {
            items: 4,
            margin:20,
        },
        992: {
            items: 4,
            margin:20,
        },
        1200: {
            items: 6, 
            margin:20,
        }
    }
});





$(".main-menu").slicknav({
    prependTo: ".responsive-menu-wrap"
});





$(".image-filtering-btn li").on('click', function () {

    $(".image-filtering-btn li").removeClass("active");
    $(this).addClass("active");

    var selector = $(this).attr('data-filter');
    $(".project-parent").isotope({
        filter: selector
    });

});



//smoth navigation


$(".project-parent").isotope({});



//smoth navigation

$(document).ready(function () {
    $('#smoothEase').onePageNav({
        currentClass: 'current',
        changeHash: false,
        scrollSpeed: 2000,

    });    
    
});







