# Le pitch

> **Chouwi** retrouve sont ptit fils **Archibalde**, quel Bohneur ! Prenez le control des datas pour changer ce dialogue à votre sauce.

## <u>Les fichiers

Les informations constituant la page se trouvent dans le fichier `js/data.js` sous forme d'un objet *Javascript*.

```javascript

var data = {
  'perso_0' : {
    'name' : 'Chouwi',
    'picture' : 'img/chouwi.jpg',
    'texte' : ['Brouuuuwhaaaaa','Drrrriiiitch','Hinnn Wouaaa']
  },
  'perso_1' : {
    'name' : 'Archibalde',
    'picture' : 'img/archi.jpg',
    'texte' : ['Grand père, c\'est moi!','J\'aime les pâttes moi aussi','Pff nimporte quoi!']
  }
}


```

Vous pouvez rajouter des textes ou changer les images. Il est tout à fait possible de changer la structure de l'objet pour ajouter plusieurs image :
```javascript

var data = {
  'perso_0' : {
    'name' : 'Chouwi',
    'picture' : ['img/chouwi.jpg','img/chouwi-anim.gif'],
    'texte' : ['Brouuuuwhaaaaa','Drrrriiiitch','Hinnn Wouaaa']
  },
  'perso_1' : {
    'name' : 'Archibalde',
    'picture' : 'img/archi.jpg',
    'texte' : ['Grand père, c\'est moi!','J\'aime les pâttes moi aussi','Pff nimporte quoi!']
  }
}


```



L'execution et l'affichage de la page se fait dans le fichier `js/script.js` et ajoute chaque elements à la page de manière dynamique.


Vous pourrez prendre l'image en compte à un moment dans cette fonctiono :

```javascript

function dialogue(){

  // Le modulo par deux --> la valeur est pair ou impair 0 || 1
  if ( index%2 == 0 ) {
    var contexte = document.getElementById('character_02');
    var paroles = data.perso_1.texte;
  }else{
    var contexte = document.getElementById('character_01');
    var paroles = data.perso_0.texte;
  }
  var dom = contexte.getElementsByClassName('center'); //--> Renvoie un tableau
  dom[0].innerHTML = paroles[ index%3 ];
  index++;
}

```


Le style de la page se fait dans le fichier `css/style.css`. Libre à vous de la modifier au besoin.

Vous pouvez rajouter des information dans les tableaux et modifier leurs contenus.

Il est égallement possible de rajouter des propriétés, à vous de les utiliser par la suite sur le même modéle que ce qui est déjà fait.

> Lire le code est le premier pas vers la compréhenssion.


## <u>Les exemples :

<!-- | img | img | img | -->

| [![code route](https://raw.githubusercontent.com/Ma6Tvacoder-Docs/ExercicesJS/master/%5B02%5DExoRetrouvailles/img/referencesVS/CODEROUTE.png)](https://raw.githubusercontent.com/Ma6Tvacoder-Docs/ExercicesJS/master/%5B02%5DExoRetrouvailles/img/referencesVS/CODEROUTE.png) | [![naruto](https://raw.githubusercontent.com/Ma6Tvacoder-Docs/ExercicesJS/master/%5B02%5DExoRetrouvailles/img/referencesVS/maxresdefault.jpg)](https://raw.githubusercontent.com/Ma6Tvacoder-Docs/ExercicesJS/master/%5B02%5DExoRetrouvailles/img/referencesVS/maxresdefault.jpg) | [![pokemon](https://raw.githubusercontent.com/Ma6Tvacoder-Docs/ExercicesJS/master/%5B02%5DExoRetrouvailles/img/referencesVS/pokemon.jpg)](https://raw.githubusercontent.com/Ma6Tvacoder-Docs/ExercicesJS/master/%5B02%5DExoRetrouvailles/img/referencesVS/pokemon.jpg) |
| --- | --- | --- |
| [![sarko](https://raw.githubusercontent.com/Ma6Tvacoder-Docs/ExercicesJS/master/%5B02%5DExoRetrouvailles/img/referencesVS/sarkozy_macron_demission0.jpg)](https://raw.githubusercontent.com/Ma6Tvacoder-Docs/ExercicesJS/master/%5B02%5DExoRetrouvailles/img/referencesVS/sarkozy_macron_demission0.jpg) | [![trump](https://raw.githubusercontent.com/Ma6Tvacoder-Docs/ExercicesJS/master/%5B02%5DExoRetrouvailles/img/referencesVS/trump-vs-clinton.jpg)](https://raw.githubusercontent.com/Ma6Tvacoder-Docs/ExercicesJS/master/%5B02%5DExoRetrouvailles/img/referencesVS/trump-vs-clinton.jpg) |

## <u>Le workshop :

A vous d'imaginer une interaction  entre ces personnages en utilisant une image de duel en reference.

En **changeant** les informations vous devez pouvoir modifier la page à volontés.

### **Ajouter des elements !!**

Vous pouvez retoucher le css et ajouter des elements dans la page html de maniére classique. à vous de voir de quel façon et dans quel bloque.
On peux égallement ajouter des **gif animés**, alors faitent en bon usage :wink:

[![booyah](http://saiyansworld1.free.fr/images/gifs/64.gif)](https://www.google.fr/search?q=gif+dbz+alpha&espv=2&biw=2133&bih=1055&tbm=isch&tbo=u&source=univ&sa=X&ved=0ahUKEwiT_dWBjcDSAhULtBQKHWubB2wQsAQIHA#imgrc=AU-jsTjTECOLDM:)
[![boom](https://media.giphy.com/media/l0MYEqEzwMWFCg8rm/giphy.gif)](https://media.giphy.com/media/l0MYEqEzwMWFCg8rm/giphy.gif)
