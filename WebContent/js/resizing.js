var winHeight80 = $(window).height()*0.8;
var winHeight = $(window).height();
var winWidth = $(window).width();

/* DOM이 모두 load 된 이후 */
$(window).on('load', function(e){
    $('.main_banner .content').height(winHeight80);
    var contentHeight = $('.main_banner .content').height();
    $('.main_banner .content ul li').height(contentHeight);//.width(winWidth);
    $('.main_banner .content ul li a').height(contentHeight);
    $('.main_banner .content ul li img').height(contentHeight);
    /* 브라우저 크기 조정 시 발생되는 이벤트. */
    $(window).on('orientationchange', function(e){
        console.log('orientationchange');
        setHeaderMargin();
    });
    /* 브라우저 크기 조정 시 발생되는 이벤트. (orientationchange미지원 브라우저에서 발동.)*/
    $(window).on('throttledresize', function(e){
        console.log('throttledresize');
        setHeaderMargin();
    });
});

function setHeaderMargin(){
    console.log('setHeaderMargin');
    var headerHeight = $('#main_head').outerHeight(true);
    $('.main_banner').css('margin-top',headerHeight);
}
