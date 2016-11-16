//Initialisation du document 
var title = document.createElement('h3');
var chouwi = document.getElementById('character_01');

// Creation des elements d'affichage 
var picture = document.createElement('img');


//On recupere les elements

var src = data.perso_0.picture;
var altText = data.perso_0.name;

// on les applique a l'image 

title.innerHTML= altText;
picture.src= src;
picture.alt = altText;


chouwi.appendChild(title);
chouwi.appendChild(picture);