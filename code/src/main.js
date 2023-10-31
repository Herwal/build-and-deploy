import {  getSecondsLeftOfYear, getTimeString } from "./clock";

const timeContainer = document.getElementById("time");
const timeLeft = document.getElementById("seconds-left");
const minutesLeft = document.getElementById("minutes-left");

const render = () => {
  const now = new Date();
  timeLeft.innerText = getSecondsLeftOfYear(now);
  timeContainer.innerText = getTimeString(now);
  minutesLeft.innerText = (getSecondsLeftOfYear(now) / 60).toFixed(2);
}

render();
setInterval(render, 1000);