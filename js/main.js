(function ($) {
    "use strict";




    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: true,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            }
        }
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
})(jQuery);

function toggle(num){
    var blur=document.getElementById('blur');
    blur.classList.toggle("active");

    var popup=document.getElementById('popup'+num.toString());
    popup.classList.toggle("active")

}

const body = document.body;

// 锁定滚轮的函数
function lockScroll() {
    body.classList.add("scroll-locked");


}

// 解锁滚轮的函数
function unlockScroll() {
    body.classList.remove("scroll-locked");
}


const elementsWithPop = document.getElementsByClassName("popBtn");

for (let i = 0; i < elementsWithPop.length; i++) {
    const element = elementsWithPop[i];
    // 在这里你可以对元素进行任何操作，例如修改内容或样式
    element.addEventListener("click", lockScroll);
}
const elementsWithPopClose = document.getElementsByClassName("popCloseBtn");

for (let i = 0; i < elementsWithPopClose.length; i++) {
    const element = elementsWithPopClose[i];
    // 在这里你可以对元素进行任何操作，例如修改内容或样式
    element.addEventListener("click", unlockScroll);
}



