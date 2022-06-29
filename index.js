const hourElement = document.querySelector(".hour");

const minuteElement = document.querySelector(".minute");


const $secondElement = document.querySelector(".second");


setInterval(tick, 1000);

function tick() {
    const dateNow = new Date();

    if (dateNow.getHours() < 10) {
        hourElement.textContent = (`0${dateNow.getHours()}`)

    } else {
        hourElement.textContent = dateNow.getHours();

    }



    if (dateNow.getMinutes() < 10) {
        minuteElement.textContent = (`0${dateNow.getMinutes()}`)

    } else {
        minuteElement.textContent = dateNow.getMinutes();

    }



    if (dateNow.getSeconds() < 10) {
        $secondElement.textContent = (`0${dateNow.getSeconds()}`)

    } else {
        $secondElement.textContent = dateNow.getSeconds();

    }

}