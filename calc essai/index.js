


// Get references to the elements on the page
var monBouton = document.getElementById("mon-bouton");
var premierNombre = document.getElementById("premier-nombre");
var deuxiemeNombre = document.getElementById("deuxieme-nombre");
var resultat = document.getElementById("resultat");

// Add an event listener for when the button is clicked
monBouton.addEventListener('click', function(addition){
    // Parse the input values as integers
    var num1 = parseInt(premierNombre.value);
    var num2 = parseInt(deuxiemeNombre.value);

    // Add the two numbers together and display the result
    var result = num1 + num2;
    resultat.value = result;

    // Check if the first number is a string (invalid input)
    if ((isNaN(num1)) || (isNaN(num2))) {
        alert('Veuillez saisir un nombre entier');
    }
});
