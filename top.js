
    $(document).ready(function(){
        var key=0;
        $("#main div").eq(0).css("opacity", "1");
        $("#main div").eq(0).find(".img").addClass("on");
        var intv = setInterval(function(){ 
            if(key<2){
                key++; 
            } else {
                key=0;
            }
            rAni(key);
        }, 3000);
        function rAni(n){
            $("#main div").css("opacity", "0");
            $("#main div .img").removeClass("on");
            $("#main div .titBox").css("display", "none");
//            $("#main div").eq(n).css("opacity","1");
//            $("#main div").eq(n).find(".img").addClass("on"); 
            $("#main div .titBox").delay(900).fadeIn(500);
        };
    });
    