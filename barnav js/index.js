let btnOpen = document.getElementById('open');
let btnClose = document.getElementById("close");
let container = document.querySelector(".container");

btnClose.onclick = function(){
container.classList.add('hidden');
btnClose.classList.add('hidden');
btnOpen.classList.remove('hidden');

}
btnOpen.onclick = function(){
    container.classList.remove("hidden");
    btnOpen.classList.add("hidden");
    btnClose.classList.remove("hidden");
   
}