const times = document.querySelectorAll("[data-time]"); // selecting all DOM elements with attribute [data-time]
const [dispDay, dispHour, dispMinutes, dispSec] = times;
const timerContainer = document.querySelector(".timer-container");

// Setting the Launch Date (yy, mm, dd, hr, min, sec)
// mm -> 0-indexed
const launchDate = new Date(2023, 11, 31, 12, 0o0, 0o0); // 1st January, 2024 12:00

// Format output time as XX
function formatDisplay(num) {
  return num < 10 ? `0${num}` : num;
}

const intervalId = setInterval(() => {
  // Date every 1 sec
  const currDate = new Date();
  const difference = launchDate - currDate; // difference in milliseconds

  // conversion to Days, hours, minutes and seconds from milliseconds
  const sec = 1000;
  const min = 60 * sec;
  const hour = 60 * min;
  const days = 24 * hour;

  const diffDay = parseInt(difference / days);
  const diffHour = parseInt((difference % days) / hour);
  const diffMin = parseInt((difference % hour) / min);
  const diffSec = parseInt((difference % min) / sec);

  // Handle display when countdown is over
  if (diffDay <= 0 && diffHour <= 0 && diffMin <= 0 && diffSec <= 0) {
    clearInterval(intervalId);
    notifyBtn.style.display = "none";
  }

  dispDay.innerText = formatDisplay(diffDay);
  dispHour.innerText = formatDisplay(diffHour);
  dispMinutes.innerText = formatDisplay(diffMin);
  dispSec.innerText = formatDisplay(diffSec);
}, 1000);
