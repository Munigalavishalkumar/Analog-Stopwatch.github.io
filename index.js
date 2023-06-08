timer = null
time = 0;
const span = document.getElementById('time')
const secondHand = document.getElementById('secondhand')
function counter() {
    time++
    seconds = time % 60;
    secondsRatio = time % 60;
    minutes = Math.floor(time / 60);
    hours = Math.floor(time / 3600);
    span.innerText = `${hours}:${minutes}:${seconds}`
    setRotation(secondHand, secondsRatio);
}
function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', 6 * rotationRatio)
}
let startbtn = document.getElementById('Start')
let stopbtn = document.getElementById('Stop')
let resetbtn = document.getElementById('Reset')

startbtn.addEventListener("click", start);
stopbtn.addEventListener("click", stop);
resetbtn.addEventListener("click", reset);

function start() {
    if (timer) { return }
    timer = setInterval(counter, 1000);
}
function stop() {
    clearInterval(timer);
    timer = null;
}

function reset() {
    ratio = time
    secondHand.style.setProperty('--rotation', 0)
    clearInterval(timer)
    timer = null
    time = 0
    span.innerText = '00:00:00'
}