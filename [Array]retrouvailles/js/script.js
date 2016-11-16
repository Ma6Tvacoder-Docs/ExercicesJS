// Initialisation du document
var chouwi = document.getElementById('character_01');

// Création des éléments d'affichage
var picture = document.createElement('img');
var title = document.createElement('h3');

// On récupère la source de l'image
var srcImage = data.perso_0.picture;
var altText = data.perso_0.name;

picture.src = srcImage;
picture.alt = altText;

chouwi.appendChild(title)
chouwi.appendChild(picture);






/*console.log(Math.floor(Math.random(0 data.perso_0.texte[0]));*/

// console.log(data.perso_0.texte.length);

