const buttonStart = document.querySelector('[data-start]');
const buttonStop = document.querySelector('[data-stop]');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
buttonStop.disabled = true;

buttonStart.addEventListener('click', onButtonStartClick);
let intervalId = null;
function onButtonStartClick(event) {
  buttonStop.disabled = false;
  buttonStart.disabled = true;
  //   setInterval(changBackground, 1000);
  changBackground();
  intervalId = setInterval(changBackground, 1000);
}

function changBackground() {
  const body = document.querySelector('body');
  body.style.backgroundColor = getRandomHexColor();
}

buttonStop.addEventListener('click', onButtonStopClick);

function onButtonStopClick(event) {
  buttonStart.disabled = false;
  buttonStop.disabled = true;
  clearInterval(intervalId);
}
