$(document).ready(function() {
    //메뉴
   $(".gnb #menu>li").mouseover(function() {
     $(".gnb #menu>li").find(".sub").stop().slideDown(600);
   });
    $(".gnb #menu>li").mouseout(function() {
       $(".gnb #menu>li").find(".sub").stop() .slideUp(500);
    });
    
    //슬라이드
    var wd = parseInt($("#vs").width());
    var intv = setInterval(function() { nAni(); }, 3000);
    
    function nAni () {
        $("#vs .imgBox").not(":animated").animate({"margin-left":-wd+"px"},900, function(){
            $("#vs .imgBox li").eq(0).appendTo($("#vs .imgBox"));
            $("#vs .imgBox").css("margin-left", "0px");
            $("#vs .btn_box .btn").removeClass("on");
            $("#vs .btn_box .btn").eq(0).appendTo($("#vs .btn_box"));
            $("#vs .btn_box .btn").eq(0).addClass("on");
        });
    }
    $("#vs .btn_box .btn").click(function() {
        clearInterval(intv);
        var idx = $(this).index();
        for (var i=0;i<idx-2;i++){
            $("#vs .imgBox li").eq(0).appendTo($("#vs .imgBox"));
            $("#vs .btn_box .btn").eq(0).appendTo($("#vs .btn_box"));
        }
        nAni();
        intv = setInterval(function() { nAni(); }, 3000);
    });
    
    //탑버튼
    $('#toTop').click(function(){
       $('body, html').animate({
           scrollTop:0
       }, 800);
        return false;
    });
});