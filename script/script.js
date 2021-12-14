"use scrit" 

const container = document.querySelector(".carrossel")
container.classList.add("carrossel")
let  status  =  "img1"

const imagem1 = () => {
	container.style.backgroundImage= "url(./img/img1.jpg)"
	status = "img1"
}

const imagem2 = () => {
	container.style.backgroundImage= "url(./img/img2.jpg)"
	status = "img2"
}

const imagem3 = () => {
	container.style.backgroundImage= "url(./img/img3.jpg)"
	status = "img3"
}
const imagem4 = () => {
	container.style.backgroundImage= "url(./img/img4.jpg)"
	status = "img4"
}


	
function  galeriaFotos ( )  {
	if ( status  !=  "" ) {
		if  ( status  ==  "img2" ) {
			imagem1()
		}  else  if ( status  ==  "img3" ) {
			imagem2()
		}  else if ( status  ==  "img4" ){
		imagem3()
		}else {
		imagem4()
		}
	}	
}

function slideFotos( ){
	status  =  "img4"
	setInterval(galeriaFotos, 3000)
}

galeriaFotos(slideFotos())
