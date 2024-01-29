/*let monNombre = 4;
let maChaine = "bonjour !";
let monBooleen = false;
let sansValeur;
console.log(monNombre)
for(i=0;i<3; i++){
console.log(i);}*/

/*let sonPrenom=prompt("Quelle est votre prénom ?");
alert("bonjour" + " " + sonPrenom + '!')
let question1=prompt(" tu rentre dans une salle et tu a trois portes : derière la première il y a un incendie, derière la deuxième, il y a un lion qui n'a pas mangé depuis un an, derière la troisième il y a un tueur, quelle porte tu choisi ? 1,2 ou 3");
if (question1 === "1")
{alert('malheureusement tu est brulé');}
else if (question1 ==="2")
{alert("bravo tu est vivant car le lion est déja mort, il n'a pas mangé depuis un an");}
else {alert ("malheureusement tu est mort a cause du voleur");}*/


/*function estMultipleDeTrois(nombre) {return nombre % 3 === 0;}
function estMultipleDeCinq(nombre) {return nombre % 5 === 0;}
var nombre 
  for(nombre=1;nombre<200; nombre++)
    {if ((estMultipleDeTrois(nombre))&&(estMultipleDeCinq(nombre)))
    {console.log("FIZZBUZZ");}
    else if (estMultipleDeTrois(nombre)) 
    {console.log('Fizz');} 
    else if  (estMultipleDeCinq(nombre)) 
    {console.log('Buzz');}  
    else console.log(nombre);}*/


    /*let secret = Math.round(Math.random() * 100);
    let nom = prompt("Tu t 'appelle comment ?")
    alert("bonjour  " + nom)
    alert ("vous avez 10 tentatives pour deviner le nombre dans ma tête, choisissez un nombre entre 0 et 100") 
  for (i = 1; i <= 11; i++){
    let nombreDonné = prompt("il vous reste " + (11- i) + " essais")
      if (nombreDonné < secret)
        {alert("plus grand");}
      else if (nombreDonné > secret)
        {alert("plus petit");}
      else  if (nombreDonné == secret )
        {alert("bravo ! tu as gagné le nombre secret est : " + secret);break; }
      else if (nombreDonné ==="s" )
        {alert("Aurevoir");break; }
      if ( i === 10) 
        {alert("tu as perdu, tu a fait 10 essais le nombre secret est : " + secret ); break;}

  }*/

  // function diviserParDeux(nombre)
  //  { return nombre/2;}
  //  console.log(diviserParDeux(10))


  // function sommme(m,n)
  // { return m+n};
  // console.log(sommme(4,6));

//   function signe(num){
//     if(num > 0)
//     {return "positif";}
//     else  if(num < 0)
//     {return "négatif";}
//     else
//     {return "nul"};}
 
//     console.log(signe(100))
//     console.log(signe(-10))
//     console.log(signe(0))

//     function factorielle(y)
//     {var resultat = 1;
//       for(i = 1; i <= y; i++){
//         resultat = resultat * i
//       }
//       return resultat; }
   
// console.log(factorielle(5))

// switch({
//   case "pierre"
// })



// let f = "feuille"
// let p = "pierre"
// let c = "ciseaux"
// let scoreOrdi = 0
// let scoreU = 0
// let choixOrdi = Math.round(Math.random() * 3)


// function comparer(choixOrdi, choixU) {
//     let result

//     if ((choixOrdi === 1) && (choixU === p)) {
//         result = f;
//         scoreOrdi++;
//     } else if ((choixOrdi === 1) && (choixU === c)) {
//         result = c;
//         scoreU++;
//     } else if ((choixOrdi === 2) && (choixU === c)) {
//         result = p;
//         scoreOrdi++;
//     } else if ((choixOrdi === 2) && (choixU === f)) {
//         result = f;
//         scoreU++;
//     } else if ((choixOrdi === 3) && (choixU === p)) {
//         result = p;
//         scoreU++;
//     } else if ((choixOrdi === 3) && (choixU === f)) {
//         result = c;
//         scoreOrdi++;
//     } else if (choixOrdi === choixU) {
//         result = "egalité";
//     }

//     return result && scoreOrdi && scoreU
// }

// for (let i = 1; i <= 3; i++) {
//     let choixU = prompt("entrez votre choix (feuille, pierre, ciseaux)")
//     let result = comparer(choixOrdi, choixU)
//     alert(result + " ton score :" + scoreU + " le score de l'ordi :" + scoreOrdi)
// }

// if (scoreOrdi > scoreU)
//     alert("c'est l'ordinateur qui a gagné !")
// else if (scoreU > scoreOrdi)
//     alert("vous avez gagné !")
// else
//     alert("égalité !")  

// let jours = ['lun', '007', 'mer', 'jeu', 'ven', 'sam', 'BUG'];
// let f = jours.pop();
// console.log(jours);
// jours.push('dim')
// jours[1]= ' mar'
// console.log(jours.length)
// console.log(jours[3])
// console.log(jours)





// var fruits = [ 'Mangue', 'Raisin', 'Figue', 'Kiwi' ];
// let FruitDemandé = prompt ("quel fruit désirez vous acheter?")
// let x = fruits.indexOf(FruitDemandé)
// if (x >= 0) {
//   fruits.splice(x, 1);
//   alert ('les fruits qui restent sont :' + (fruits.join(" "," ")));
// } else if (x === -1) {
// alert ("indisponible")
// }
 



// var mauvaisesLettres = [ ]; 
// let lettresAttendues = [ 'v', 'o', 'i', 't', 'u', 'r', 'e' ];
// let lettresCorrectes = [ ]

// for(let i = 1; i <= (lettresAttendues.length + 10) ; i++) 
// {
//   let lettredemandé = prompt("Entrez une lettre pour deviner le mot !, tu a le droit à 10 erreurs")
//   let index = lettresAttendues.indexOf(lettredemandé)
//   if (lettredemandé === "quitter")
//   {
//     alert ("aurevoir!");
//     break;
//   }
//   if (lettredemandé === "voiture")
//   {
//     alert("bravo tu as gagné! le mot attendu est : voiture");
//     break;
//   }
//   if (lettredemandé === "")
//   {
//   alert ("tu dois entrer une lettre pour jouer");
//   }

//   if ( index >= 0)
//   {
//     lettresCorrectes.push(lettredemandé);
//     lettresAttendues.splice(index,1);
//     alert ("bonne lettre ! : "  + lettresCorrectes + "           essai n° : " + i )
//     if (lettresAttendues.length === 0 )
//     {
//       alert("bravo tu as gagné! le mot attendu est voiture");
//       break;
//     }
//   }
//   else if (index == -1)
//   { 
//     if (lettresCorrectes.includes(lettredemandé))
//     {
//     alert ("tu a déja trouvé la lettre " + lettredemandé);
//     }
//     else if (mauvaisesLettres.includes(lettredemandé))
//     {
//       alert("Tu t'est déja trempé sur cette lettre")
//     }
//     else 
//     mauvaisesLettres.push(lettredemandé);
//     alert ("Combien de lettres mauvaises : " + mauvaisesLettres.length +"  Tes mauvaises lettres sont: " + mauvaisesLettres +  "        essai n° : " + i);
    
//     if (mauvaisesLettres.length === 10)
//     {
//       alert("perdu! le mot attendu est super"); 
//       break; 
//     }  
  
//   } 
// }   


// var annuaire = {
//   patricia: '06 66 66 66 66',
//   david: '07 77 77 77 77',
// };
// console.log(annuaire.patricia)
// let prénom = prompt (" entrez le nom de la personne dont vous cherchez le numéro")
// alert ("le numéro de téléphone de " + prénom + " est : " + annuaire[prénom])


// var annuaire =
// {
//   patricia: '06 66 66 66 66',
//   david: '07 77 77 77 77',
//   mos : '05 55 55 55 55',
//   rayane : '02 22 22 22 22'
// };

// let paramaitre = ""
// while (paramaitre !== "q" )
// {
//   let paramaitre = prompt ("Quel paramaitre voulez vous executer : \n- r pour rechercher, \n- l pour afficher la liste, \n- a pour ajouter,\n- s pour supprimer")
//   if (paramaitre === "r" )
//   {
//     let prénom = prompt (" entrez le nom de la personne dont vous cherchez le numéro")
//     let numero = annuaire[prénom]
//     alert("le numéro de téléphone de " + prénom + " est : " + annuaire[prénom])
//   }
//   else if (paramaitre === "l")
//   {   
//     console.clear();
//     for(var keys in annuaire)
//     {
//     console.log(keys, ":",  annuaire[keys]);
//     }
//   }
//   else if (paramaitre === "q")
//   {
//     alert ("aurevoir");
//     break;
//   }
//   else if (paramaitre === "s")
//   {
//     let nomSupprimer = prompt ("entrez le nom à supprimer !");
//     delete annuaire[nomSupprimer];
//     alert ( nomSupprimer + " est supprimé")
//   }
//   else if (paramaitre === "a")
//   {
//     let nom = prompt("entrez le nom que vous voulez rajouter")
//     let tel = prompt("entrez le numéro de téléphone")
//     annuaire [nom]=tel
//   }
// }
  

// let names = ['toyota', 'mercedes' ,'citroen'];
// let prix = [110, 60, 38, 20, 50];
// let nationalité = ['morroco', 'french', 'belgique'];
// for (n = 0; n < names.length ; n++)
// {
//   console.log(`names : ${names[n]}`);
//   for (p = 0; p < prix.length ; p++)
//   {
//     console.log(`prix : ${prix[p]}`)
//   }
//   for (t = 0; t < nationalité.length ; t++)
//   {
//     console.log(`nationalité : ${nationalité[t]}`)
//   }
//   console.log('_______________________')
//  }
  
//  let names = ['toyota', 'mercedes' ,'citroen'];
//  let prix = [110, 60, 38, ];
//  let nationalité = ['morroco', 'french', 'belgique'];
//  for (n = 0; n < names.length ; n++)
// {
//   console.log(`names : ${names[n]}` + ` prix : ${prix[n]}`+ ` nationalité : ${nationalité[n]}`)
// }

// let age = prompt("entrez votre age")
// function calcAgeDay(age)
// {
// let result = age * 365;
// return result;
// }
// let day = calcAgeDay(age)

// function calcAgeHours(age)
// {
// let result = day * 24
// return result
// }
// let hours = calcAgeHours(age)
// console.log(hours)


class Etudiant {
  constructor(nom, age) {
      this.nom = nom;
      this.age = age;
  }
}

let etudiant1 = new Etudiant("jack", 20);
let etudiant2 = new Etudiant("mostapha", 38);

console.log(etudiant1);
console.log(etudiant2);

