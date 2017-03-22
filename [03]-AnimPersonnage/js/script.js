// On va changer l'objet className

//Identification de l'element
var megaman = document.getElementById('megaman').getElementsByTagName('div')[0]

//On definis notre fonction Jump
function jump(){
  console.log( [megaman] )
  megaman.className = "jump";

  setTimeout( function(){
    megaman.className = 'run'
  }, 300 )

}

//On utilise le EventListener
megaman.addEventListener( "click" , jump )

console.log(megaman)
