import {  getSecondsLeftOfYear, getTimeString, getDates} from "./clock";

const timeContainer = document.getElementById("time");
const timeLeft = document.getElementById("seconds-left");
const minutesLeft = document.getElementById("minutes-left");
const daysLeft = document.getElementById("days-left");
const nextWeekend = document.getElementById("next-weekend");
const currDate = document.getElementById("curr-date");

const render = () => {
  const now = new Date();
  timeContainer.innerText = getTimeString(now);
  timeLeft.innerText = getSecondsLeftOfYear(now);
  minutesLeft.innerText = (getSecondsLeftOfYear(now) / 60).toFixed(0);
  daysLeft.innerText = (getSecondsLeftOfYear(now) / 3600 / 24).toFixed(0);

  const nextWeekendDate = getDates(now).nextWeekendDate;
  const timeRemaining = nextWeekendDate.getTime() - now.getTime();

  // Convert the time remaining to hours, minutes, and seconds
  const hoursRemaining = Math.floor(timeRemaining / 3600000);
  // const minutesRemaining = Math.floor((timeRemaining % 3600000) / 60000);
  // const secondsRemaining = Math.floor((timeRemaining % 60000) / 1000);

  nextWeekend.innerText = `${hoursRemaining}h`;

  const day = now.getDate().toString().padStart(2, '0');
  const month = (now.getMonth() + 1).toString().padStart(2, '0');
  const year = now.getFullYear().toString().padStart(2, '0');
  const currentDate = `${day}.${month}.${year}`;
  currDate.innerText = `${currentDate}`
}

render();
setInterval(render, 1000);