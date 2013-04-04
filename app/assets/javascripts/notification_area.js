var notificationArea = (function(){
    var sidebarWidth = 400;
    var mainWidth = 720;
    var widthMargin = 120;

    var notificationArea = $("#notification_area");
    var main = $(".main");
    var button = $("#open_button");

    var menuClosed = true;
    button.bind("click", function(){
        if (menuClosed) {
            var distance = (document.body.clientWidth - (mainWidth + widthMargin)) / 2 - sidebarWidth;
            if (distance < 0) {
                main.css({
                    "transform" : "translate("+distance+"px, 0px)",
                    "-webkit-transform" : "translate("+distance+"px, 0px)",
                    "-moz-transform" : "translate("+distance+"px, 0px)",
                });
            }

            notificationArea.css("width", ""+sidebarWidth+"px");
            button.text("CLOSE");
            menuClosed = false;
        } else {
            notificationArea.css("width", "0px");
            main.css({
                "transform" : "translate(0px, 0px)",
                "-webkit-transform" : "translate(0px, 0px)",
                "-moz-transform" : "translate(0px, 0px)",
            });
            button.text("OPEN");
            menuClosed = true;
        }
    });

    var sections = {};
    return ({
        addSection : function(id, title){
            if (sections[id]) {
            } else {
                var section = $("<div></div>").css({
                    "margin-left" : "20px",
                    "color" : "white",
                });
                var header = $("<h3></h3>").text(title);
                section.append(header);
                notificationArea.append(section);
                sections[id] = section;
                return section;
            }
        }
    });
})();

