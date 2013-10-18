(function (global) {
    var application,
        mobileSkin = "",
        defaultChartTheme = 'silver',
        app = global.app = global.app || {};
    
    app.chartsTheme = defaultChartTheme;    

    document.addEventListener("deviceready", function () {
        application = new kendo.mobile.Application(document.body, { transition: "", layout: "mobile-tabstrip" });
        global.app.chartsTheme = 'flat';
        mobileSkin = "flat";
        application.skin(mobileSkin);
        application.view().show();
    }, false);

    
    app.data = {
        person : {
            name : 'KK'
        },
        calories : [20, 10, 40, 30, 20, 10, 60],
        fat : [60, 20, 30, 20, 50, 40, 10]
    }
    
})(window);