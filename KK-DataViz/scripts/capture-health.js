(function (global) {
    var app = global.app = global.app || {};

    app.captureHealth = {
        createView: function () {
            
            
            var $calorieForToday = $("#calorieForToday").empty()
           
            var $submitButton = $("#btnCaptureHealth");
            
            $submitButton.on("click", function () {
                alert(1)
            });
        }
    };
})(window);