let timer = null;
let time = 0;

const span = document.getElementById('time');
const secondHand = document.getElementById('secondhand');
const minuteHand = document.getElementById('minutehand');
const hourHand = document.getElementById('hourhand');

function counter() {
    time++;
    const seconds = time % 60;
    const minutes = Math.floor((time / 60) % 60);
    const hours = Math.floor(time / 3600);
    span.innerText = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    // Calculate the rotation angles for the clock hands
    const secondRotation = (seconds / 60) * 360;
    const minuteRotation = (minutes / 60) * 360 + (seconds / 60) * 6;
    const hourRotation = (hours % 12) * 30 + (minutes / 60) * 30;

    setRotation(secondHand, secondRotation);
    setRotation(minuteHand, minuteRotation);
    setRotation(hourHand, hourRotation);
}

function setRotation(element, rotationRatio) {
    element.style.transform = `rotate(${rotationRatio}deg)`;
}

let startbtn = document.getElementById('Start');
let stopbtn = document.getElementById('Stop');
let resetbtn = document.getElementById('Reset');

startbtn.addEventListener("click", start);
stopbtn.addEventListener("click", stop);
resetbtn.addEventListener("click", reset);

function start() {
    if (timer) { return; }
    timer = setInterval(counter, 1000);
}

function stop() {
    clearInterval(timer);
    timer = null;
}

function reset() {
    clearInterval(timer);
    timer = null;
    time = 0;
    span.innerText = '00:00:00';
    setRotation(secondHand, 0);
    setRotation(minuteHand, 0);
    setRotation(hourHand, 0);
}

// Initial setup
reset();
