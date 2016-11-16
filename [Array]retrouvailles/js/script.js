//console.log('hello')

//Initialisation du document
var chouwi = document.getElementById('character_01');


//Création des élément d'affichage.
var picture = document.createElement('img');
var title= document.createElement('h3');

//On récupère la source de'image
var srcImage = data.perso_0.picture;
var altText = data.perso_0.name;




//Ici on applique tout cela à l'image
title.innerHTML = altText;
picture.src=srcImage;
picture.alt= altText;

chouwi.appendChild(title);

chouwi.appendChild(picture);












//console.log([picture]);
