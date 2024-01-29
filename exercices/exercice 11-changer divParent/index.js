let mesBoutons = document.getElementsByTagName("button");

for(let i = 0 ; i < mesBoutons.length; i++)
{
  mesBoutons[i].onclick = function(event)
  {
    let bouton = event.target; 
    let divParent = bouton.parentNode;
    divParent.style.background = 'yellow';
  };
}

