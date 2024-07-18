// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// menu
document.querySelector("#Menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

const menu = document.querySelector("#Menu");
document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

const audioElement = document.getElementById("audioElement");
const playPauseButton = document.getElementById("playPauseButton");
const audioStatus = document.getElementById("audioStatus");
const startTimeButton = document.getElementById("startTimeButton");

playPauseButton.addEventListener("click", () => {
  if (audioElement.paused) {
    audioElement.play();
    playPauseButton.textContent = "Pause";
    audioStatus.textContent = "Playing";
  } else {
    audioElement.pause();
    playPauseButton.textContent = "Play";
    audioStatus.textContent = "Paused";
  }
});

audioElement.addEventListener("ended", () => {
  playPauseButton.textContent = "Play";
  audioStatus.textContent = "Ended";
});
