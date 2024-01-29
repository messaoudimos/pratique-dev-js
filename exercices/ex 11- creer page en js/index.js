
var bouton = document.createElement('button');
var texteBouton = document.createTextNode('le bouton');
bouton.appendChild(texteBouton);
document.body.appendChild(bouton);

var input = document.createElement('input');
input.type='text';
document.body.appendChild(input);

bouton.onclick = function() {
  input.value = '';
}