function display(e){
  var element = e.name
  var hiddingElement = document.getElementsByClassName('btn-display')

  //Hidding all elements
  for( var i = 0; i < hiddingElement.length; i++ ){
    hiddingElement[i].style.display = 'none';
  }

  //Show selected element
  var screenPlay =  document.getElementsByName( element + '-content' )
  screenPlay[0].style.display = 'block';
}
