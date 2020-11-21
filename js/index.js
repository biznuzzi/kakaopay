/* 2020.11.19 kang */
/* index js */


$(document).ready(function() {
    $(".main_drop").addClass("active");
    setTimeout(function() {
        $(".main_drop").find(".coinbig").addClass("none");
    }, 200);
});

$(window).scroll(function(e){
    parallax();
});

$(document).on("click", ".main_btn", function() {
    $("#main").hide();
    $("#btn").hide();
    $("#pop").show();
    $(".pop_intro").find(".top").animate({
        top: "0"
    },1000,"easeOutBounce");
    $(".pop_intro").find(".bottom").animate({
        top: "0"
    },1000,"easeOutBounce");
    setTimeout(function() {
        $(".pop_btn").slideDown(400);
    }, 700);
});

$(document).on("click", ".close", function() {
    $("#pop").hide();
    $(".pop_intro").find(".top").css("top","-100vh");
    $(".pop_intro").find(".bottom").css("top","100vh");
    $(".pop_btn").hide();
    $("#main").show();
    $("#btn").show();
});

function parallax(){
    var scrolled = $(window).scrollTop();
    $('.coin').css('top',-(scrolled*0.15)+'px');
    $('.coindown').css('top',-(scrolled*0.15)+'px');
}