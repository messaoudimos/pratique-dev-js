let container = document.createElement("div");
document.body.appendChild(container);
container.style.textAlign = "center";
container.style.display = "flex"
container.style.flexWrap = "wrap"
let names = ["ahmed" , "mostapha", "youssef" , "khalid"]
let ages = ["20 years old", "30 years old", "35 years old", "10 years old"]
let images = [ "image1.jpeg","image2.jpeg" , "image3.jpeg","image4.jpeg" ]
function element(names, ages, images)
{
    //element
    let card = document.createElement("div");
    let title = document.createElement("h2");
    let age = document.createElement("p");
    let img = document.createElement("img");
    //content
    let head = document.createTextNode(names);
    let ageContent = document.createTextNode(ages);
    img.src = images;
    // ajouter le contenu à chaque element.
    title.appendChild(head);
    age.appendChild(ageContent);
    //styele
    card.style.width = "200px";
    card.style.background = "#444";
    card.style.color= "#fff";
    card.style.padding = "10px";
    card.style.margin = "10px";




    img.style.width = "100%";
    img.style.height = "150px";

    card.appendChild(title);
    card.appendChild(age);
    card.appendChild(img);

    container.appendChild(card);  
}
for (let i=0; i<4; i++)
{
    element(names[i], ages[i], images[i]);
}


