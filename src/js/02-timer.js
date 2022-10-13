import flatpickr from 'flatpickr';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';
const buttonStart = document.querySelector('[data-start]');
const daysOutput = document.querySelector('[data-days]');
const hoursOutput = document.querySelector('[data-hours]');
const minutesOutput = document.querySelector('[data-minutes]');
const secondsOutput = document.querySelector('[data-seconds]');
let timerSelected = null;
let timerTime = 0;
let isActive = false;
buttonStart.disabled = true;
let timerInterval = null;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    if (isActive) {
      Notify.info('Timer already started press ESC to stop');
      buttonStart.disabled = true;

      return;
    }

    if (selectedDates[0] - Date.now() < 0) {
      Notify.info('Please choose a date in the future');
      return;
    }
    timerSelected = selectedDates[0];
    buttonStart.disabled = false;
  },
};

// const flatpickr = require('flatpickr', options);
flatpickr('input[type = "text"]', options);

document.addEventListener('keydown', event => {
  if (event.code === 'Escape') {
    escPressed();
  }
});

function escPressed() {
  clearInterval(timerInterval);
  isActive = false;
  timerTime = 0;
  convertMs(timerTime);
  daysOutput.textContent = convertMs(timerTime).days;
  hoursOutput.textContent = convertMs(timerTime).hours;
  minutesOutput.textContent = convertMs(timerTime).minutes;
  secondsOutput.textContent = convertMs(timerTime).seconds;
}

buttonStart.addEventListener('click', onStartTimerClick);

function onStartTimerClick(event) {
  clearInterval(timerInterval);
  buttonStart.disabled = true;
  isActive = true;
  timerInterval = setInterval(() => {
    timerTime = timerSelected - Date.now();

    if (timerTime > 0) {
      console.log(convertMs(timerTime));
      daysOutput.textContent = convertMs(timerTime).days;
      hoursOutput.textContent = convertMs(timerTime).hours;
      minutesOutput.textContent = convertMs(timerTime).minutes;
      secondsOutput.textContent = convertMs(timerTime).seconds;
    } else {
      clearInterval(timerInterval);
      isActive = false;
      Notify.info('Time is over');
    }
  }, 1000);
}
function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}
