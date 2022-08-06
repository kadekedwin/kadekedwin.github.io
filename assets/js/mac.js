const preload = document.querySelector('.preload');
const buttonyes = document.querySelector('#buttonyes');
const esc = document.querySelector('#esc');
const skip = document.querySelector('#skip');
const shoot = document.querySelector('#shoot');
const video = document.querySelector('#video');
const jam = document.querySelector('#jam');
const tanggal = document.querySelector('#tanggal');
const ucapan = document.querySelector('#ucapan');
const alertTab = document.querySelector('.alert');
const photobooth = document.querySelector('.photobooth');
const clock = document.querySelector('.clock')

let nama = ""

// preload
document.addEventListener('DOMContentLoaded', function() {
    setInterval(() => {
        preload.innerHTML = "Done"
        preload.style= "background: rgba(0, 0, 0, 0); color: rgba(255, 255, 255, 0); backdrop-filter: blur(0px); z-index: -2;";
    }, 400);
})

// background
const d = new Date();
let hour = d.getHours();
if(hour <= 18 && hour >= 6){
    document.body.style.background = "url('assets/media/wp2b.jpg') no-repeat center center fixed"
    
} else {
    document.body.style.background = "url('assets/media/wp1b.jpg') no-repeat center center fixed"
}

// fullscreen
function requestFullScreen(element){
    if (element.requestFullscreen)
    element.requestFullscreen();
    else if (element.msRequestFullscreen)
    element.msRequestFullscreen();
    else if (element.mozRequestFullScreen)
    element.mozRequestFullScreen();
    else if (element.webkitRequestFullscreen)
    element.webkitRequestFullscreen();
}
function exitFullScreen(){
    if (document.exitFullscreen)
    document.exitFullscreen();
    else if (document.msExitFullscreen)
    document.msExitFullscreen();
    else if (document.mozCancelFullScreen)
    document.mozCancelFullScreen();
    else if (document.webkitExitFullscreen)
    document.webkitExitFullscreen();
}
function isFullScreen(){
    return (document.fullScreenElement && document.fullScreenElement !== null)
         || document.mozFullScreen
         || document.webkitIsFullScreen;
}
function toggleFullScreen(element){
    if (isFullScreen())
        exitFullScreen();
    else
        requestFullScreen(element || document.documentElement);
}

function refreshPage(){
    location.reload()
}
function mainPage(){
    window.location = "index.html";
}

buttonyes.addEventListener("click", function(){
    if(alertTab.children[2].children[2].value != ""){
        nama = alertTab.children[2].children[2].value;
    } else{
        nama = "Noname"
    }
    requestFullScreen(document.documentElement);
    alertTab.style = "display: none;"
    photobooth.style = "display: block;"
});
esc.addEventListener("click", function(){
    toggleFullScreen(document.documentElement);
});
skip.addEventListener("click", function(){
    photobooth.style = "display: none"
    clock.style = "display: block"
    ucapan.innerHTML = "Halo "+nama+", semoga hari anda menyenangkan."
    startTime()
})

function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    m = checkTime(m);

    var year = today.getYear()

    if (year < 1000)
        year+=1900

    var day = today.getDay() // Current Day of week - 2
    var month = today.getMonth() // Current Month 2
    var daym = today.getDate() // Current Date -24
    var dayarray = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday")
    var montharray = new Array("January","February","March","April","May","June","July","August","September","October","November","December")

    tanggal.innerHTML = dayarray[day]+", "+daym+" "+montharray[month]+" "+year
    jam.innerHTML =  h + ":" + m;
    setTimeout(startTime, 1000);
}
  
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

shoot.addEventListener("click", function(){
    video.paused ? video.play() : video.pause();
    console.log(video.paused)
})