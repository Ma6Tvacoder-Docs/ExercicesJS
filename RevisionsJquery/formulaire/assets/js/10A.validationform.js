/*
Exploration des champs de formulaire de manière procedurale

$(function(){
  $('#contact').on('submit',function(e){
    e.preventDefault();
    for(var i = 0; i < e.currentTarget.length-1; i++){

      if( e.currentTarget[i].id == 'email' ){
        console.log('cet email est : ' + e.currentTarget[i].value)

      }else if( e.currentTarget[i].id == 'tel' ){
        console.log('ce telephone est : ' + e.currentTarget[i].value)

      }else{
        console.log('le ' +  e.currentTarget[i].id + ' est : ' + e.currentTarget[i].value)
      }
    }
  })
});
*/

function validateEmail(email){
	var emailReg = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
	var valid = emailReg.test(email);

	if(!valid) {
        return false;
    } else {
    	return true;
    }
}

//variable globale
var validation = true;

function error(x) {
  x.parent().addClass('has-error');
  $( "<p class='alert alert-danger '>Le champ " + x[0].id + " n'est pas valide</p>" ).appendTo( x.parent() );
  validation = false;
}

$(function(){
  $('#contact').on('submit', function(a){
    a.preventDefault();

    // Réinitialisation des champs //
    $('#contact .has-error').removeClass('has-error');
    $('.alert-danger').remove()
    validation = true;

    // Déclaration des variables //
     var nom, prenom, email, tel;
     nom     = $('#nom');
     prenom  = $('#prenom');
     email   = $('#email');
     tel     = $('#tel');

    // validation des champs
    if(nom.val().length == 0){
      error(nom);
    }
    if(prenom.val().length == 0){
      error(prenom);
    }
    if(email.val().length == 0 || !validateEmail(email.val())){
      error(email);
    }
    if(tel.val().length == 0 || $.isNumeric(tel.val()) == false){
      error(tel);
    }

    //Affichage du message de réussite
    if( validation == true ){
      //console.log(validation)
      $('#contact').replaceWith( "<div class='alert alert-success'>Bravo, votre contact à bien été ajouté a la base de donnée</div>" );
    };

  });
});
