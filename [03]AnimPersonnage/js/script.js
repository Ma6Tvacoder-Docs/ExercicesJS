// Le javascript va nous permetre de permuter

//Identification de l'element
var megaman = document.getElementById('megaman').getElementsByTagName('div')[0]

//On definis notre fonction Jump
function jump(){
  
  megaman.className = "jump";

  setTimeout( function(){
    megaman.className = 'run'
  }, 300 )
}

//On utilise le EventListener
megaman.addEventListener( "click" , jump )
