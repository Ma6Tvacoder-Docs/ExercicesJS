		
var regle = {

	ca : [], // contient toutes nos cartes du jeu
	nbr : [], // On stock les nombres
	signe : ['Coeur','Pique','Carreau','Trefle'],
	type : ['dame','roi','valet','as','8','7']
}
	
var carte = function(puissance,type,signe,nbr){
	/*Initialisation des valeur*/

	var puissances = this.puissance
	var types = this.type
	var signes = this.signe
	var nbrs = this.nbr

	
	/*-------------------------*/

	/* création de l'objet qui contiendra toute les caractèristique de la carte*/
	var cartes = {

		puissances : puissance,
		types : type,
		signes : signe

	}
	/*--------------------------------------------------------------------------*/
	
	/*Récupération de la table de jeu*/
	var table = document.getElementById('table');
	/*--------------------------------*/

	/* CREATION DE LA CARTE AVEC SON ID ET SA CLASS */
	var createCarte = document.createElement('img')
	createCarte.src = 'img/carte.jpg';
	createCarte.setAttribute('id','carte'+nbr);
	createCarte.setAttribute('class','Carte');
	/*----------------------------------------------*/


		/*Mettre les cartes qui ont été crée dans la table de jeu*/
		table.appendChild(createCarte);
		/*------------------------------------------------------*/

			

}
