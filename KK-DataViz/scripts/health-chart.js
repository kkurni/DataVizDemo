(function (global, $) {
    var healthChart = null,
        app = global.app = global.app || {};

    app.healthChart = {
        createChart: function () {
            app.healthChart.drawChart();
            app.healthChart.bindResizeEvent();
        },

        drawChart: function () {
                        
            if (healthChart !== null) {
                healthChart.destroy();
            }             
            
            var $healthChart = $("#healthChart").empty();
            var status = "look great";
            
            var todayDay = new Date().getDay();
            var dataDay = todayDay - 1;
            if (app.data.calories[dataDay] < app.data.fat[dataDay]){
                status = "can be better";
            }
            
            
            $healthChart.kendoChart({
                title: {
                    text: "Hi " + app.data.person.name + ", You " + status + " today"
                },
                legend: {
                    position: "bottom"
                },
                chartArea: {
                    background: ""
                },
                seriesDefaults: {
                    type: "line"
                },
                series: [{
                    name: "Calories",
                    data: app.data.calories
                },{
                    name: "Fat",
                    data: app.data.fat
                }
                ],
                valueAxis: {
                    labels: {
                        format: "{0}"
                    },
                    line: {
                        visible: false
                    },
                    axisCrossingValue: -10
                },
                categoryAxis: {                    
                    categories: ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],
                    majorGridLines: {
                        visible: true
                    }
                },
                tooltip: {
                    visible: true,
                    format: "{0}%",
                    template: "#= series.name #: #= value #"
                }
            });         
        },

        bindResizeEvent: function () {
            //as the dataviz-s are complex elements they need redrow after window resize 
            //in order to position themselve on the right place and right size
            $(window).on("resize.healthChart", $.proxy(app.healthChart.drawChart, app.healthChart));
        },

        unbindResizeEvent: function () {
            //unbind the "resize event" to prevent redudntant calculations when the tab is not active
            $(window).off("resize.healthChart");
        }
    };
})(window, jQuery);