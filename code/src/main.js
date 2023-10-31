import {  getSecondsLeftOfYear, getTimeString } from "./clock";

const timeContainer = document.getElementById("time");
const timeLeft = document.getElementById("seconds-left");
const minutesLeft = document.getElementById("minutes-left");

const render = () => {
  const now = new Date();
  timeContainer.innerText = getTimeString(now);
  timeLeft.innerText = getSecondsLeftOfYear(now);
  minutesLeft.innerText = (getSecondsLeftOfYear(now) / 60).toFixed(0);
}

render();
setInterval(render, 1000);