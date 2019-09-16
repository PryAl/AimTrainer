var canvas = document.getElementById("c1");
var ctx = canvas.getContext("2d");
var targetSize;
var arr=[];
var timer = 0;

canvas.onclick = function (event) {
    //ctx.clearRect(0,0,canvas.width,canvas.height);
    startGame();
    var x = event.offsetX;
    var y = event.offsetY;
    targetSize = document.getElementById("targetsize").value;
    xTarget = getRandomInt(canvas.width-targetSize);
    yTarget = getRandomInt(canvas.height-targetSize);
    
    ctx.fillRect(xTarget, yTarget, targetSize, targetSize);
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function startGame() {

}