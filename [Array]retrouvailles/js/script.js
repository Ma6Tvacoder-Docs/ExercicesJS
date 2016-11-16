// Initialisation du document

var chouwi = document.getElementById("character_01");

// Création des éléments d'affichage

var picture = document.createElement("img");
var title = document.createElement("h3");

// On récupère la source de l'image

var srcImage = data.perso_0.picture;
var altText = data.perso_0.name;


// Ici on applique tout cela à l'image
picture.src = srcImage;
picture.alt = altText;

title.innerHTML =altText;


chouwi.appendChild(title);
chouwi.appendChild(picture);
