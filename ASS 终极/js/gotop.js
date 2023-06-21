$(function () {
    $('.fixed-btn').hide();	//先让回顶部的div隐藏
    $(window).scroll(function () {
        //当网页滑下一定距离时使返回顶部的div出现
        if ($(window).scrollTop() >= 200) {
            $('.fixed-btn').fadeIn();
        }
        else {
            $('.fixed-btn').fadeOut();
        }
    });
});

//这里是使ID为btn_top的可点击元素实现回到顶部的点击事件
$('#btn_top').click(function () {
    $('html,body').animate({ scrollTop: 0 }, 500);
});
