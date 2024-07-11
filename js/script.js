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
