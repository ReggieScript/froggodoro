const focus_time = document.querySelector('#focus_time').value;
const break_time = document.querySelector('#break_time').value;
const sessionTime = focus_time * 60;
let pomodoroTime = sessionTime; // 25 minutes in seconds
const breakTime =  break_time * 0; // 5 minutes in seconds
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