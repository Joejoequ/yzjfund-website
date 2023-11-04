//设置您的安全密钥
window._AMapSecurityConfig = {
    securityJsCode:'085e1d2e84014eb3206b6d04dae52f78',
}
window.onLoad  = function(){

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