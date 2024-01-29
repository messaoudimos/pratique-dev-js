let date
let hr
let min
let sec
function refreshHeur(){
  date = new Date();
  hr =date.getHours();
  min =  date.getMinutes();
  sec = date.getSeconds()
  document.querySelector(".hr").style.transform = `translate(-50%, -100%) rotate(${hr * 360 / 12 + min / 30 * 6 }deg)`
  document.querySelector(".min").style.transform = `translate(-50%, -100%) rotate(${min * 360 / 60 }deg)`
  document.querySelector(".sec").style.transform = `translate(-50%, -100%) rotate(${sec * 360 / 60 }deg)`
}
refreshHeur();
window.setInterval(refreshHeur, 1000)
