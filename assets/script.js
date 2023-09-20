
const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];



const flecheDroite = document.querySelector(".arrow_right"); // on récupére et  Sélectionne la flèche droite
const flecheGauche = document.querySelector(".arrow_left"); // on récupére et  Sélectionne la flèche gauche
const image = document.querySelector(".banner-img"); //crée une variable image correspondant au bloc avec la classe .banner-img
const tagLine = document.querySelector("#banner p");  //idem pour le bloc p contenu dans la div ayant l'id #banner
const numberImg=slides.length;
let imageEnCours=0;
const dots= document.querySelector(".dots");
const newDiv = document.createElement("div");


// Affichage des points
for(let i=0; i<numberImg; i++){
	const newDiv = document.createElement("div");
	newDiv.classList.add('dot');
	if(i==0){newDiv.classList.add('dot_selected');}
	dots.appendChild(newDiv);
}


// Ajouter un événement clic sur la flèche droite
flecheDroite.addEventListener("click", () => {
	if(imageEnCours<(numberImg-1)){imageEnCours++;}else{imageEnCours=0;}
	changeImage(imageEnCours);
  
});

flecheGauche.addEventListener("click", () => {
	if(imageEnCours>0){imageEnCours--;}else{imageEnCours=numberImg-1;}
	changeImage(imageEnCours);
 
});


function changeImage(nouvelleImage){
	// Mettre à jour l'image et le texte de la slide

	image.src = "assets/images/slideshow/"+slides[nouvelleImage].image; // Met à jour l'attribut src de l'image avec l'URL de l'image de la slide courante
	tagLine.innerHTML=slides[nouvelleImage].tagLine;


	//Enleve la class dot_selected 
	const dot_selected= document.querySelector(".dot_selected");
	dot_selected.classList.remove('dot_selected');

	//ajoute la class dot_selected a la div n+1 enfant de la div avec class dots
	let pointSelection=nouvelleImage+1;
	const newdot_selected= document.querySelector('.dots :nth-child('+pointSelection+')');
	newdot_selected.classList.add('dot_selected');
}








	 
		
	 







	
		
	  
	  
		
	


 