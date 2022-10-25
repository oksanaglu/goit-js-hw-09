const refs = {
  bodyColor: document.querySelector('body'),
  startButton: document.querySelector('[data-start]'),
  stopButton: document.querySelector('[data-stop]'),
};

refs.startButton.addEventListener('click', start);
refs.stopButton.addEventListener('click', stop);

const randomIntegerFromInterval = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

function changeBackground(color) {
  refs.bodyColor.style.backgroundColor = color;
};

let intervalColorChange = undefined;

function start() {
  intervalColorChange = setInterval(randomColor => {
    randomColor = randomIntegerFromInterval();
    changeBackground(randomColor);
  }, 1000);
  refs.stopButton.removeAttribute('disabled');
  refs.startButton.setAttribute('disabled', true);
};

function stop() {
  clearInterval(intervalColorChange);
  refs.startButton.removeAttribute('disabled');
  refs.stopButton.setAttribute('disabled', true);
};
