let body = document.querySelector("body");
let heading = document.querySelector("h1");

function randomColor() {
  let hex = "0123456789ABCDEF";
  let hexCode = "#";
  for (let i = 0; i < 6; i++) {
    hexCode += hex[Math.floor(Math.random() * 16)];
  }
  return hexCode;
}

let interval;

document.querySelector(".start").addEventListener("click", () => {
  if (!interval) {
    interval = setInterval(() => {
      body.style.backgroundColor = randomColor();
      heading.style.color = randomColor();
    }, 1000);
  }
});

document.querySelector(".stop").addEventListener("click", () => {
  clearInterval(interval);
  interval = null;
});
