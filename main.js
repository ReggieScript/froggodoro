const sessionTime = 1 * 60;
let pomodoroTime = 1 * 60; // 25 minutes in seconds
const breakTime = 5 * 60; // 5 minutes in seconds
let timer = null;
let isBreak = false;

const timerElement = document.querySelector('#timer');

const startBtn = document.querySelector('#start-btn');
startBtn.addEventListener('click', startTimer);

function startTimer() {
  clearInterval(timer);
  timer = setInterval(() => {
    // timerElement.innerHTML = pomodoroTime;
    if (pomodoroTime == 0 && !isBreak) {
      clearInterval(timer);
      alert('Take a break!');
      pomodoroTime = breakTime;
      isBreak = true;
      startTimer();
    } else if (pomodoroTime == 0 && isBreak) {
      clearInterval(timer);
      alert('Time to work!');
      pomodoroTime = sessionTime;
      isBreak = false;
      startTimer();
    }
    pomodoroTime--;
    timeUpdate()
  }, 1000);
}

function timeUpdate() {
  let mins = Math.floor(pomodoroTime / 60) ;
  let secs = pomodoroTime % 60; 
  let minutes = document.querySelector('#js-minutes');
  let seconds = document.querySelector('#js-seconds');

  if (secs <10 ){
    seconds.innerHTML = "0" + secs.toString();
  }
  else{
    seconds.innerHTML = secs;
  }
  minutes.innerHTML = mins;
}