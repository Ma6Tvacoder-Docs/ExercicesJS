console.log('coucou');

var chouwi = document.getElementById('personnage01');

//création des éléments d'affichage
var balise_image = document.createElement("img");
var titre = document.createElement("h3");


//console.log([balise_image])// le tableau dans la console va nous montrer toutes les possibilités

// on récupère la source de l'image et les autres infos
var source_image = data.perso_0.photo;
var altText = data.perso_0.nom; // pour le nom de la photo

// ici on applique tout cela à l'image
balise_image.src = source_image;
balise_image.alt = altText;
titre.innerHTML = altText;


chouwi.appendChild(titre);
chouwi.appendChild(balise_image);