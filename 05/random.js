/**
 * Created by CroW-CZ on 2015-04-09.
 */
var box = $('.randBox');
var winWidth = $(window).width();
var winHeight = $(window).height();

console.log(winWidth);
console.log(winHeight);

var div = $('#wrap');
var box = $('<div>', {
    addClass: 'randBox'
});
var printScore = $('#print_score');
printScore.html('score : 0');
var printMCount = $('#print_moveCount');

var score = 0;
var mCount = 0;
var sameposition = false;

moveBox();

box.appendTo(div);

function moveBox(){
    sameposition = false;
    var x = Math.random() * (winWidth - 20);
    var y = Math.random() * (winHeight - 20);

    box.css({
        'left': x,
        'top': y
    });
    //box.style.left = x + 'px';
    //box.style.top = y + 'px';
    mCount++;
    printMCount.html('move : ' + mCount);
}

box.click(function(){
    if( !sameposition ) {
        sameposition = true
        score++;
        printScore.html('score : ' + score);
        console.log(score);
    }
});

window.setInterval(moveBox, 3000);