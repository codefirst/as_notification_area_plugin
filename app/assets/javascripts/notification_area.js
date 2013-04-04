var notificationArea = (function(){
    function resizeSidebar(sidebarWidth){
        var distance =
            (document.body.clientWidth - (mainWidth + widthMargin)) / 2 - sidebarWidth;
        if (distance > 0) {
            distance = 0;
        }

        main.css({
            "transform" : "translate("+distance+"px, 0px)",
            "-webkit-transform" : "translate("+distance+"px, 0px)",
            "-moz-transform" : "translate("+distance+"px, 0px)",
        });
        notificationArea.css("width", ""+sidebarWidth+"px");
    }

    var sidebarWidth = 400;
    var mainWidth = 720;
    var widthMargin = 120;

    var notificationArea = $("#notification_area");
    var main = $(".main");
    var button = $("#open_button span");

    var menuClosed = true;
    button.bind("click", function(){
        if (menuClosed) {
            resizeSidebar(sidebarWidth);
            button.text("CLOSE");
            menuClosed = false;
        } else {
            resizeSidebar(0);
            button.text("OPEN");
            menuClosed = true;
        }
    });

    var pos_x = undefined;
    $("body").bind("mouseup", function(){
        pos_x = undefined;
    }).bind("mousemove", function(e){
        if (pos_x != undefined) {
            sidebarWidth += pos_x - e.screenX;
            pos_x = e.screenX;
            resizeSidebar(sidebarWidth);
        }
    });
    $("#notification_area #grip").bind("mousedown", function(e){
        e.preventDefault();
        pos_x = e.screenX;
    });
})();
