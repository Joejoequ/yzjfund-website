

var initialize =  function initializeHeaderCarousel() {

    new WOW().init();


    // eslint-disable-next-line no-undef
    $(".header-carousel").owlCarousel({
        // 自动播放
        autoplay: true,

        // 动画速度
        smartSpeed: 1500,

        // 显示的项目数量
        items: 1,

        // 显示点导航
        dots: true,

        // 循环播放
        loop: true,

        // 显示导航按钮
        nav: true,

        // 自定义导航按钮的HTML
        navText: [
            '<i class="bi bi-chevron-left"></i>',  // 左导航按钮
            '<i class="bi bi-chevron-right"></i>'  // 右导航按钮
        ]
    });


    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });

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
}

var mapInitialize =  function createMap(){


    var map = new AMap.Map('mapContainer', {
        viewMode: '2D',  // 默认使用 2D 模式
        zoom:18,  //初始化地图层级
        center: [114.029626, 22.535885]  //初始化地图中心点
    });

    var marker = new AMap.Marker({
        position: new AMap.LngLat(114.029626, 22.535885),   // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
        offset: new AMap.Pixel(-9, -31),
        title: '扬子江基金'
    });

    // 将创建的点标记添加到已有的地图实例：


    marker.setLabel({
        offset: new AMap.Pixel(-50, -30),  //设置文本标注偏移量
        content: "<div class='info'>前海扬子江基金有限公司</div>", //设置文本标注内容
        direction: 'up' //设置文本标注方位
    });
    map.add(marker);

    map.plugin(["AMap.OverView"],function(){
        view = new AMap.OverView();
        view.open();
        map.addControl(view);
    });

    map.plugin(["AMap.ToolBar"],function(){
        //加载工具条
        var tool = new AMap.ToolBar();
        map.addControl(tool);
    });

    map.plugin(["AMap.Scale"],function(){
        var scale = new AMap.Scale();
        map.addControl(scale);
    });


}






// 获取表单元素

if (document.querySelector('#form_en') !== null) {
// 监听表单提交事件
    document.querySelector('#form_en').addEventListener('submit', (e) => {
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

