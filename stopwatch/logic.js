//Stopwatch

let hoursReporter = document.querySelector("#hours");
let minutesReporter = document.querySelector("#minutes");
let secondsReporter = document.querySelector("#seconds");

let seconds = 0;
let hours = 0;
let minutes = 0;

let startButton = document.querySelector("#start");
let stopButton = document.querySelector("#stop");
let resetButton = document.querySelector("#reset");

let isRunning = false;

function tick() {
  seconds++;
  console.log(seconds);
  report();

  if (seconds >= 59) {
    minutes++;
    seconds = 0;
  }

  if (minutes >= 59) {
    hours++;
    minutes = 0;
  }

  if (hours >= 24) {
    hours = 1;
  }
}

function report() {
  secondsReporter.textContent = seconds.toString().padStart(2, "0");
  minutesReporter.textContent = minutes.toString().padStart(2, "0");
  hoursReporter.textContent = hours.toString().padStart(2, "0");
}

startButton.addEventListener("click", (e) => {
  if (!isRunning) {
    timerInterval = setInterval(tick, 1000);
    isRunning = true;
  }
});

stopButton.addEventListener("click", (e) => {
  if (isRunning) {
    clearInterval(timerInterval);
    isRunning = false;
  }
});

resetButton.addEventListener("click", (e) => {
  resetAll();
  isRunning = false;
});

function resetAll() {
  secondsReporter.textContent = "00";
  minutesReporter.textContent = "00";
  hoursReporter.textContent = "00";
  clearInterval(timerInterval);
  seconds = 0;
  minutes = 0;
  hours = 0;
}


//Countdown timer

{/* <input type="number" id="timeInput" min="1">
<button id="start">Start</button>
<p id="timeOutput"></p> */}

let beginCountdown = document.getElementById('start');

beginCountdown.addEventListener('click', () => {
  const timeInput = document.getElementById('timeInput');
  const time = timeInput.value * 60;
  const timeOutput = document.getElementById('timeOutput');

  function a(){
    time--;
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    timeOutput.textContent = minutes + ":" + (seconds < 10 ? "0" : "") + seconds;

    if (time <= 0){
      
    }

  }

  const timer = setInterval(a, 1000);
})
