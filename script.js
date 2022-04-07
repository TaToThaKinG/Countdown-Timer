const daysTo = document.getElementById('days');
const hoursTo = document.getElementById('hours');
const minsTo = document.getElementById('mins');
const secondsTo = document.getElementById('seconds');

const christmas = "25 December 2022";

function countdown() {
    const christmasDate = new Date(christmas);
    const currentDate = new Date();

    const totalSeconds = (christmasDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysTo.innerHTML = days;
    hoursTo.innerHTML = formatTime(hours);
    minsTo.innerHTML = formatTime(mins);
    secondsTo.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;

}


//initial call
countdown();

setInterval(countdown, 1000);

//snowfall

function init() {
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    var w = canvas.width;
    var h = canvas.height;

    var bg = new Image();
    bg.src = "snowflake.jpg";

    var flakes = [];

    function snowfall () {
        context.clearRect(0, 0, w, h);
        //context.drawImage(bg, 0, 0);
        addFlake();
        snow();
    }

    function addFlake() {
        var x = Math.ceil(Math.random() * w);
        var s = Math.ceil(Math.random() * 4); 
        flakes.push({"x": x, "y": 0, "s": s});
    }

    function snow () {
        for (var i = 0; i < flakes.length; i++) {
            var flake = flakes[i];
            context.beginPath();
            context.fillStyle = "rgba(255, 255, 255, 0.7)";
            context.arc(flake.x, flakes[i].y+=flake.s/2, flake.s/2, 0, 2 * Math.PI);
            context.fill(); 
            if(flakes[i].y > h){
                flakes.splice(i, 1);
            }
        }
    }
    
    setInterval(snowfall, 20);
}
window.onload = init;