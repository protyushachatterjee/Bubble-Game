var clutter = "";
var hitNum=0;
var bubble;
function getRandomNumber() {
    for (var i = 0; i <= 199; i++) {
        var rn = Math.floor(Math.random() * 10)
        clutter += `<div id="bubble">${rn}</div>`;
    }
    var bubble = document.querySelector("#pbtm").innerHTML = clutter;
}

var timer = 60;
function runTimmer() {
    var startTime= setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerval").innerHTML = timer;
        }else{
            clearInterval(startTime);
            document.querySelector("#pbtm").innerHTML="<h1>Game Over!</h1>";
        }

    }, 1000)
}

function getNewHit(){
    hitNum=Math.floor(Math.random()*10);
    document.querySelector("#hitval").innerHTML=hitNum
 }

var score=0;
function scoreTable(){
    score+=10;
    document.querySelector("#scoreval").innerHTML=score;
}

function totalProcess(){
var process= document.querySelector("#pdtm");
process= addEventListener("click", function(dets){
    var clickedNum=(Number(dets.target.innerHTML));
    if(clickedNum===hitNum){
        scoreTable();
        getNewHit();
    }
})

}
runTimmer()
getRandomNumber()
getNewHit()
totalProcess()