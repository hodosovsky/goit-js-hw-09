import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form');
const delayInput = document.querySelector('.form input[name="delay"]');
const step = document.querySelector('.form input[name="step"]');
const amount = document.querySelector('.form input[name="amount"]');
form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  let delay = 0;
  let position = 0;

  delay = +delayInput.value;
  for (let i = 1; i <= +amount.value; i += 1) {
    setTimeout(() => {
      position += 1;
      createPromise(position, delay)
        .then(({ position, delay }) => {
          Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
        })
        .catch(({ position, delay }) => {
          Notify.failure(`Rejected promise ${position} in ${delay}ms`);
        });
      delay += +step.value;
    }, +delayInput.value);
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  //

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
