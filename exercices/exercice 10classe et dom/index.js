// let second = document.getElementById("second");
// second.classList.remove("hidden");
// second.removeAttribute("class")

var elements = document.getElementsByClassName("spoiler");

let monBouton1 = document.getElementById("cacher");
monBouton1.addEventListener('click', function(cacher){
    for (var i = 0; i < elements.length; i++) 
    {
        var element = elements[i];
        element.classList.add ("hidden");
    }  
}
);

