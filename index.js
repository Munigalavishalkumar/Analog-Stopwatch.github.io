// Define digital clock element
const digitalClock = document.getElementById('digitalClock');

// Function to update the digital clock with the current time
function updateDigitalClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    digitalClock.innerText = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// Initial setup to display the current time
updateDigitalClock();

// Update the digital clock every second (1000 milliseconds)
setInterval(updateDigitalClock, 1000);


// Define audio elements
const tickSound = new Audio('assets/tick.mp3');
const chimesSound = new Audio('assets/chimes.mp3');

let timer = null;
let time = 0;

const span = document.getElementById('time');
const secondHand = document.getElementById('secondhand');
const minuteHand = document.getElementById('minutehand');
const hourHand = document.getElementById('hourhand');

// Initialize the ticking sound
tickSound.loop = true; // Loop the ticking sound
tickSound.currentTime = 0;
//initialize the chimes sound when minutes = 0 and seconds = 0
chimesSound.currentTime = 0;
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
    tickSound.play(); // Start playing the ticking sound
}

function stop() {
    if (!timer) { return; }
    clearInterval(timer);
    timer = null;
    tickSound.pause(); // Pause the ticking sound
}

function reset() {
    if (timer) {
        clearInterval(timer);
        timer = null;
    }
    secondHand.style.transform = 'rotate(0deg';
    tickSound.pause(); // Pause the ticking sound
    time = 0;
    span.innerText = '00:00:00';
    setRotation(secondHand, 0);
    setRotation(minuteHand, 0);
    setRotation(hourHand, 0);
}

// Initial setup
reset();
