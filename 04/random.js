/**
 * Created by CroW-CZ on 2015-04-09.
 */
var box = document.querySelectorAll('.randBox')[0];
var winWidth = window.innerWidth;
var winHeight = window.innerHeight;

console.log(winWidth);
console.log(winHeight);

var div = document.getElementById('wrap');
var box = document.createElement('div');
box.setAttribute("class", "randBox");
var printScore = document.getElementById('print_score');
printScore.innerHTML = 'score : 0';
var printMCount = document.getElementById('print_moveCount');

var score = 0;
var mCount = 0;
var sameposition = false;

moveBox();

div.appendChild(box);

function moveBox(){
    sameposition = false;
    var x = Math.random() * (winWidth - 20);
    var y = Math.random() * (winHeight - 20);
    box.style.left = x + 'px';
    box.style.top = y + 'px';
    mCount++;
    printMCount.innerHTML = 'move : ' + mCount;
}

box.addEventListener('click', function(){
    if( !sameposition ) {
        sameposition = true
        score++;
        printScore.innerHTML = 'score : ' + score;
        console.log(score);
    }
});

window.setInterval(moveBox, 3000);