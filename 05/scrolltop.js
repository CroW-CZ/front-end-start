/**
 * Created by CroW-CZ on 2015-04-23.
 */
var body = $(document.body);
var scrolltop =  $('.top');

scrolltop.click(function(){
    body.animate({scrollTop:0});
});

$(window).scroll(function(){
    var y = $(this).scrollTop();

    if(y >= 100)
        scrolltop.fadeIn();
    else
        scrolltop.fadeOut();
});