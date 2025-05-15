const Days = document.getElementById('days');
const Hours = document.getElementById('hours');
const Minutes = document.getElementById('minutes');
const Seconds = document.getElementById('seconds');

const targetDate = new Date("May 27 2025 00:00:00").getTime();

function timer () {
    const currentDate = new Date().getTime();
    const distance = targetDate - currentDate;

const days = Math.floor(distance / 1000 / 60 / 60 / 24);
const hours = Math.floor(distance / 1000 / 60 / 60) % 24;
const minutes =Math.floor(distance / 1000 / 60) % 60;
const seconds =Math.floor(distance / 1000) % 60;

Days.innerHTML = days;
Hours.innerHTML = hours;
Minutes.innerHTML = minutes;
Seconds.innerHTML = seconds;
}

setInterval(timer, 1000)