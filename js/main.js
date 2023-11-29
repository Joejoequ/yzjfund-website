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


// 获取表单元素
const form = document.querySelector('#form_ch');
if (form !== null) {
    // 监听表单提交事件
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // 阻止默认提交行为

        let name = document.getElementById("name");
        let phone = document.getElementById("phone");
        let msg = document.getElementById("message");

        const data = {
            name: name.value,
            phone: phone.value,
            message: msg.value
        };
        // 将formData对象转换为JSON字符串
        const jsonData = JSON.stringify(data);

        // 使用Fetch API发送POST请求
        fetch('https://api.yzjfund.com/sendEmail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // 指定请求的内容类型为JSON
            },
            body: jsonData,
        })
            .then((response) => {
                if (response.ok) {
                    // 请求成功，可以根据需要进行处理
                    alert('发送成功');
                    name.value="";
                    phone.value="";
                    msg.value="";

                } else {
                    // 请求失败，可以根据需要进行处理
                    alert('发送失败');
                }
            })
            .catch((error) => {
                // 发生网络错误
                alert('网络错误');
                console.error('网络错误', error);
            });
    });
}



// 获取表单元素
const form_en = document.querySelector('#form_en');
if (form_en !== null) {
// 监听表单提交事件
    form_en.addEventListener('submit', (e) => {
        e.preventDefault(); // 阻止默认提交行为

        let name = document.getElementById("name_en");
        let phone = document.getElementById("phone_en");
        let msg = document.getElementById("message_en");

        const data = {
            name: name.value,
            phone: phone.value,
            message: msg.value
        };
        // 将formData对象转换为JSON字符串
        const jsonData = JSON.stringify(data);

        // 使用Fetch API发送POST请求
        fetch('https://api.yzjfund.com/sendEmail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // 指定请求的内容类型为JSON
            },
            body: jsonData,
        })
            .then((response) => {
                if (response.ok) {
                    // 请求成功，可以根据需要进行处理
                    alert('Sent Successfully');
                    name.value = "";
                    phone.value = "";
                    msg.value = "";

                } else {
                    // 请求失败，可以根据需要进行处理
                    alert('Sent Failed');
                }
            })
            .catch((error) => {
                // 发生网络错误
                alert('Network Error');
                console.error('网络错误', error);
            });
    });
}

