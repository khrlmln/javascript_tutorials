function updateTime() {
  const clock = document.querySelector("#clock");
  const date = new Date();

  clock.innerHTML = date.toLocaleTimeString();
}

// Update the time every second
setInterval(updateTime, 1000);

// Initial call to display time immediately
updateTime();
