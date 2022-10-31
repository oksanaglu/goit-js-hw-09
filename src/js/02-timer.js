
import flatpickr from "flatpickr";

import "flatpickr/dist/flatpickr.min.css";

const startTimerBtn = document.querySelector("button[data-start]");
startTimerBtn.disabled = true;

const timePicker = document.querySelector("#datetime-picker");

const timerValue = {
    days: document.querySelector("[data-days]"),
    hours: document.querySelector("[data-hours]"),
    minutes: document.querySelector("[data-minutes]"),
    seconds: document.querySelector("[data-seconds]")
};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    console.log(new Date())

    if (selectedDates[0] < new Date()) {
      startTimerBtn.disabled = true;
      window.alert("Please choose a date in the future")
    } else {
      startTimerBtn.disabled = false
      startTimerBtn.addEventListener("click", () => { changeTimerValue(selectedDates[0]) })
    }
  },
};

flatpickr(timePicker, options);

function changeTimerValue() {
  let timerId = setInterval(() => {
    let countdown = new Date(timePicker.value) - new Date();
    startTimerBtn.disabled = true;
    timePicker.disabled = true;
   
    if (countdown >= 0) {
      let timerData = convertMs(countdown);
        timerValue.days.textContent = timerData.days;
        timerValue.hours.textContent = timerData.hours;
        timerValue.minutes.textContent = timerData.minutes;
        timerValue.seconds.textContent = timerData.seconds;
    } else {
      clearInterval(timerId);
    }
  }, 1000);

function pad(value) {
  return String(value).padStart(2, "0");
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = pad(Math.floor(ms / day));
  // Remaining hours
  const hours = pad(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

    return { days, hours, minutes, seconds };
}