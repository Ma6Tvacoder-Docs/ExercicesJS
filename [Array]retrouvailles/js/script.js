console.log('hello');
// initalisation du document

var chouwi = document.getElementById ('character_01');

// Réalisation des éléments d'affichage
var picture = document.createElement('img');
var title = document.createElement("h3");

// on récupère la src de l'image 
var src = data.perso_0.picture;
var altText = data.perso_0.name;


// Ici, on applique tout cela à l'image
title.innerHTML = altText;
picture.src = src;
picture.alt = altText;

chouwi.appendChild(picture);
chouwi.appendChild(title);

