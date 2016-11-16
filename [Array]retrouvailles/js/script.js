//On a besoin de creer les elements qui vont nous servir à construire notre dialogue
//Il nous faut, l'image du personne, son nom et des dialogues defilants.

//On commence par creer les elements du premiers personnage
function init(submit){

   //recuperation du context pour l'implementation des elements
  if( submit == data.perso_0 ){
    var contexte = document.getElementById('character_01')
  }else{
    var contexte = document.getElementById('character_02')
  }
  // Création des nouveaux éléments de paragraphe
    var image  = document.createElement("img");
    var name   = document.createElement("h3");
    var bouton = document.createElement("button");
    var parole = document.createElement("div");
  //implementation des elements à integrer :
    //Gestion de l'image
    image.src= submit.picture;

    //Affichage du nom
    name.innerHTML = submit.name;

    //Reglage du bouton
    bouton.innerHTML = 'Retrouvailles';
    bouton.onclick = dialogue;

    //Ajout des classes sur paroles
    parole.className = 'center';

    //console.log([bouton])

  //generation des elements dans le DOM
    contexte.appendChild(name);
    contexte.appendChild(image);
    contexte.appendChild(parole)

    if(document.getElementsByTagName('button').length == 0 ){
      document.getElementsByTagName('body')[0].appendChild(bouton);
    }
}

// initialisation des personnages
init(data.perso_0);
init(data.perso_1);

var index = 0;

function dialogue(){
  if (index%2 == 0) {
    var contexte = document.getElementById('character_02');
    var diction = data.perso_1.texte;
  }else{
    var contexte = document.getElementById('character_01');
    var diction = data.perso_0.texte;
  }

  var dom = contexte.getElementsByClassName('center')
  dom[0].innerHTML = diction[index%3];
  index++
}
