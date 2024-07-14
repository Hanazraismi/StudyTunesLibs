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

const wrapper = document.querySelector("wrapper"),
musicImg = wrapper.querySelector(".img img"),
musicName = wrapper.querySelector(".song .name"),
musicArtist = wrapper.querySelector(".song .artist"),

let musicIndex = 2

window.addEventListener("load", ()=>{
    loadMusic(musicIndex);
})

// load music

function loadMusic(indexNumb){
    musicName.innerText = allMusic[indexNumb - 1].name;
    musicArtist.innerText = allMusic[indexNumb - 1].artist;
}
