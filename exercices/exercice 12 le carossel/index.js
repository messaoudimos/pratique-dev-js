
let mesImages = document.getElementsByClassName("img");
let next = document.getElementById("next")
let prev = document.getElementById("prev")
let index = 0;
mesImages[index].classList.add("active");

 function nextImage() {
  mesImages[index].classList.remove("active");
  index = (index + 1) %  mesImages.length;
  mesImages[index].classList.add("active");  
}
 function previousImage(){
  mesImages[index].classList.remove("active");
  index = (index - 1)
  if(index < 0){
    index = mesImages.length-1;
  }
  mesImages[index].classList.add("active"); 
 }

 next.onclick = nextImage;
 prev.onclick = previousImage;

