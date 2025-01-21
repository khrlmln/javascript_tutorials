let intervalId;

// generating a random color
const randomColor = function () {
  const hexValue = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += hexValue[Math.floor(Math.random() * 16)];
  }

  return color;
};

const startChangingColor = function () {
  if (!intervalId) {
    intervalId = setInterval(changeBackgroundColor, 1000);
  }

  function changeBackgroundColor() {
    document.body.style.backgroundColor = randomColor();
  }
};

const stopChangingColor = function () {
  clearInterval(intervalId);
  intervalId = null;
};

document.querySelector("#start").addEventListener("click", startChangingColor);
document.querySelector("#stop").addEventListener("click", stopChangingColor);
