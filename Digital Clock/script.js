function digitalClock() {
  setInterval(() => {
    const date = new Date();
    const currentHour = date.getHours();
    const currentMinute = date.getMinutes();
    const currentSecond = date.getSeconds();

    const hour = document.querySelector(".hour");
    const minute = document.querySelector(".minute");
    const second = document.querySelector(".second");

    hour.innerHTML = currentHour;
    minute.innerHTML = currentMinute;
    second.innerHTML = currentSecond;
  }, 1000);
}

digitalClock();