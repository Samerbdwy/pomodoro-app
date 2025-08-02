const timerDisplay = document.getElementById("timer");
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const resetBtn = document.getElementById("reset");
const statusText = document.getElementById("status");

let time = 25 * 60; // 25 minutes
let timer = null;
let isPaused = false;

function updateDisplay() {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function startTimer() {
  if (timer || isPaused) return;
  statusText.textContent = "You're doing great! 💪";

  timer = setInterval(() => {
    if (time > 0) {
      time--;
      updateDisplay();
    } else {
      clearInterval(timer);
      timer = null;
      statusText.textContent = "Time's up! Take a break. ☕️";
    }
  }, 1000);
}

function pauseTimer() {
  if (timer) {
    clearInterval(timer);
    timer = null;
    isPaused = true;
    statusText.textContent = "Paused ⏸️";
  } else if (isPaused) {
    isPaused = false;
    startTimer();
    statusText.textContent = "Resumed ▶️";
  }
}

function resetTimer() {
  clearInterval(timer);
  timer = null;
  time = 25 * 60;
  isPaused = false;
  updateDisplay();
  statusText.textContent = "Stay focused! 🔥";
}

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimer);

// Initialize display
updateDisplay();
