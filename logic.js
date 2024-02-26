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
  // console.log(seconds);
  report();
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
    // isRunning = false;
  }
});
