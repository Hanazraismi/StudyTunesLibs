const wrapper = document.querySelector("wrapper"),
musicimg = wrapper.querySelector(".img img"),
musicName = wrapper.querySelector(".song .name"),
musicArtist = wrapper.querySelector(".song .artist"),

let musicIndex = 2

window.addEventListener("load", ()=>{
    loadMusic(musicIndex);
})

// load music

function loadMusic(indexNumb){
    musicName.innerText = allMusic[indexNumb - 1].name;
    musicArtist.innerText = allMusic[indexNumb - 1].name;
}
