const pomodoroTime = 25 * 60; // 25 minutes in seconds
const breakTime = 5 * 60; // 5 minutes in seconds
let timer = null;
let isBreak = false;

const timerElement = document.querySelector('#timer');

const startBtn = document.querySelector('#start-btn');
startBtn.addEventListener('click', startTimer);

function startTimer() {
  clearInterval(timer);
  timer = setInterval(() => {
    pomodoroTime--;
    timerElement.innerHTML.replace = pomodoroTime;
    if (pomodoroTime < 0 && !isBreak) {
      clearInterval(timer);
      alert('Take a break!');
      pomodoroTime = 25 * 60;
      isBreak = true;
      startTimer();
    } else if (pomodoroTime < 0 && isBreak) {
      clearInterval(timer);
      alert('Time to work!');
      pomodoroTime = 25 * 60;
      isBreak = false;
      startTimer();
    }
  }, 1000);
}
