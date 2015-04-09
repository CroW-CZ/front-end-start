var board = document.getElementById("board");

function appendTile(row, color){
    var tile = document.createElement("span");
    tile.setAttribute("class", color);
    tile.setAttribute("default", color);
    row.appendChild(tile);
}

for(var i=0; i<4; i++){
    var row = document.createElement("div");
    row.setAttribute("class", "row");
    board.appendChild(row);

    for(var j=0; j<4; j++){
        if(i%2 === 0){
            if(j%2 === 0)
                appendTile(row, "black");
            else
                appendTile(row, "white");
        }else{
            if(j%2 === 0)
                appendTile(row, "white");
            else
                appendTile(row, "black");
        }
    }
}

var dColor = null;

document.getElementById("board").addEventListener("click", function(event){
    if(dColor){
        var color = dColor.getAttribute("default");
        dColor.setAttribute("class", color);
    }
    event.target.setAttribute("class", "red");
    dColor = event.target;
});