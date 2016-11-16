// Initialisation du document

var title = document.createElement('h3');
var chouwi = document.getElementById('character_01');





// Créat° des éléménts d'affichage
var picture = document.createElement('img');


//On récup la source de l'image
var srcImage = data.perso_0.picture;
var altText = data.perso_0.name;


// ici on applique tout cela à l'image
title.innerHTML = altText;
picture.src = srcImage;
picture.alt = altText;

chouwi.appendChild(title);
chouwi.appendChild(picture);


