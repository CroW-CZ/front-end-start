/**
 * Created by CroW-CZ on 2015-04-09.
 */
var box = document.querySelectorAll('.box')[0];
var x = 10;
var winWidth = window.innerWidth;
var indicator = "right";

console.log(winWidth);

function moveBox(){
    var value = x;

    console.log(x);

    if(x + 100 >= winWidth){
        indicator = "left";
    }
    if(x <= 0){
        indicator = "right";
    }

    console.log(box.style.left);

    if(indicator === "right"){
        value = x + 5;
    }
    else{
        value = x - 5;
    }
    x = value;
    value = value + 'px';
    box.style.left = value;
}

window.setInterval(moveBox, 100);
