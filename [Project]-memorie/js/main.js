window.onload = function(){


	// Le quatrième paramètre correspond à la postion des cartes

	Kcarte( 'coeur', dame );
	Kcarte( 'pique', valet );
	Kcarte( 'pique', dame );
	Kcarte( 'coeur', valet );
	Kcarte( 'pique', roi );
	Kcarte( 'carreau', dame );
	Kcarte( 'carreau',valet);
	Kcarte( 'trefle',roi);
	Kcarte( 'trefle',valet);
	Kcarte( 'trefle', dame );
	Kcarte( 'carreau', roi );
	Kcarte( 'coeur', roi );
	Kcarte( 'coeur', roi );
	Kcarte( 'coeur', roi );
	Kcarte( 'coeur', roi );

/*On récupère toute les cartes et on le met dans le tableau regle.ca pour ensuite le rendre cliquable*/
	nombre_enfant = table.childNodes.length;

	for(i = 0; i < nombre_enfant; i++){
		regle.nbr.push(i)


		 cart = document.getElementById('carte'+i);

		/* console.log([cart])*/
		regle.ca.push(cart)

	regle.ca[i].addEventListener('click',function(){

				var random = Math.floor(Math.random() * 4)
				var random2 = Math.floor(Math.random() * 6)
				console.log([this])
				var carte = this.src.split("/")
				carte[carte.length - 1] = 'cartes/'+regle.type[random2]+'_'+regle.signe[random]+'.png';
				var source = carte.join('/')
				console.log(source)
				var drawCarte = this

				/*	console.log(random);
					console.log(regle.type[random2]+regle.signe[random]);*/

				setTimeout(function(){
					drawCarte.src = source;
				}, 300);
				this.style.transform = 'rotateY(180deg)';


				console.log(cart.rotate)
		},false)


	}
		/*On récupère le nombre de carte et on la met dans le tableau nbr qui n'est pas à l'intérieur de la fonction*/
	/*for(j = 0 ; j < regle.ca.length; j++){

			regle.nbr.push(j);
		regle.ca[j].addEventListener('click',function(){
		console.log(this);
		var random = Math.floor(Math.random() * regle.nbr.length)
		console.log(random)
		},false)

	}*/
}
