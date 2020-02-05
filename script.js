var altura = 0
var largura = 0
var vida = 0
var tempo = 10
var velocidade = 0



var nivel = (window.location.search).replace('?','')

if (nivel === 'facil') {
	velocidade = 1500
}
if (nivel === 'normal') {
	velocidade = 1000
}
if (nivel === 'dificil') {
	velocidade = 850
}







function capturaTamanho(){

	altura = window.innerHeight
	largura = window.innerWidth

	console.log(altura,largura)
}

capturaTamanho()

function posicaoRandomica(){

	if (document.getElementById('mosquito')) {
		document.getElementById('mosquito').remove()
		vida++
		if (vida > 2) {
			window.location.href = "gameover.html"
		}else {
			document.getElementById('v' + vida).src = "imagens/coracao_vazio.png"
		}
		
	}
	var randomY = Math.floor(Math.random() * altura) -150
	var randomX = Math.floor(Math.random() * largura) -120

	randomY = randomY < 0 ? 0 : randomY
	randomX = randomX < 0 ? 0 : randomX

	console.log(randomY,randomX) 

	var mosquito = document.createElement('img')
	document.body.appendChild(mosquito)
	mosquito.src = 'imagens/mosca.png'
	mosquito.className = random_size() + ' ' + mudaLado()

	mosquito.style.position = 'absolute'
	mosquito.style.top = randomY + 'px'
	mosquito.style.left = randomX + 'px'
	mosquito.id = 'mosquito'
	mosquito.onclick = function(){
		this.remove()
	}


	console.log(mudaLado())



	}


var cronometro = setInterval(function(){

	tempo--

	document.getElementById('cronometro').innerHTML = tempo

	

	if (tempo == 0 ) {
		clearInterval(cronometro)
		clearInterval(criaMosca)
		tempo = 0
		window.location.href = 'vitoria.html'
	}


		},1000)	


function random_size(){

	var classe = Math.floor((Math.random() * 5))

	switch (classe) {
		case 0:
			return 'mosquito1'
		case 1:
			return 'mosquito2'
		case 2:
			return 'mosquito3'
		case 3:
			return 'mosquito4'
		case 4:
			return 'mosquito5'
		}
}

function mudaLado(){
	var classe1 = Math.floor(Math.random() * 3)

	switch (classe1) {
		case 0:
			return 'ladoA'
		case 1:
			return 'ladoB'
		case 2:
			return 'ladoX'
			
	}


}





var criaMosca = setInterval(function(){posicaoRandomica()
},velocidade)

