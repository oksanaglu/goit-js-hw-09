import Notiflix from 'notiflix';

const refs = {
form: document.querySelector('form'),
delay: document.querySelector('input[name="delay"]'),
step: document.querySelector('input[name="step"]'),
amount: document.querySelector('input[name="amount"]'),
btnSubmit: document.querySelector('button[type="submit"]'),
};

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay })
      }
    }, delay);
  });
};

refs.form.addEventListener('input', () => {
  let FirstDelay = Number(refs.delay.value);
  let delayStep = Number(refs.step.value);
  let amountValue = Number(refs.amount.value);
  refs.btnSubmit.addEventListener('click', e => {
    e.preventDefault();
    for (let i = 1; i <= amountValue; i += 1) {
      createPromise(1 + i, FirstDelay + 1 * delayStep)
        .then(({ position, delay }) => {
          Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
        })
        .catch(({ position, delay }) => {
          Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
        });
    }
  });
});

