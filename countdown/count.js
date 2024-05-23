const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const giveawayEnd = document.querySelector('.giveaway-end');
const countdown = document.querySelector(".countdown");
const items = document.querySelectorAll(".time-box h4");

let futureDate = new Date();
futureDate.setDate(futureDate.getDate() + 10);
futureDate.setHours(11, 30, 0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
let month = months[futureDate.getMonth()];
const date = futureDate.getDate();
const weekday = weekdays[futureDate.getDay()];

giveawayEnd.textContent = `Giveaway ends on ${weekday}, ${date} ${month} ${year}, ${hours}:${minutes < 10 ? '0' : ''}${minutes} AM`;

const futureTime = futureDate.getTime();

function getRemainingTime() {
    const today = new Date().getTime();
    const t = futureTime - today;

    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;
    const oneSecond = 1000;

    let days = Math.floor(t / oneDay);
    let hours = Math.floor((t % oneDay) / oneHour);
    let minutes = Math.floor((t % oneHour) / oneMinute);
    let seconds = Math.floor((t % oneMinute) / oneSecond);

    const values = [days, hours, minutes, seconds];

    function format(item) {
        return item < 10 ? `0${item}` : item;
    }

    items.forEach((item, index) => {
        item.innerHTML = format(values[index]);
    });

    if (t < 0) {
        clearInterval(countdownInterval);
        countdown.innerHTML = `<h4 class="expired">Sorry, this giveaway has expired</h4>`;
    }
}

let countdownInterval = setInterval(getRemainingTime, 1000);
getRemainingTime();
