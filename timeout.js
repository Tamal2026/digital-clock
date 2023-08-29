
let hours = 0;
let minutes = 0;
let seconds = 0;

const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');
const hoursDisplay = document.getElementById('hours');
const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');

startButton.addEventListener('click', () => {
    intervalId = setInterval(updateTime, 1000);
});

stopButton.addEventListener('click', () => {
    clearInterval(intervalId);
});

resetButton.addEventListener('click', () => {
    clearInterval(intervalId);
    hours = 0;
    minutes = 0;
    seconds = 0;
    updateTimeDisplay();
});

function updateTime() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }
    updateTimeDisplay();
}

function updateTimeDisplay() {
    hoursDisplay.textContent = hours.toString().padStart(2, '0');
    minutesDisplay.textContent = minutes.toString().padStart(2, '0');
    secondsDisplay.textContent = seconds.toString().padStart(2,'0');
}
