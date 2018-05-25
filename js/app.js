var Calculadora = {
	operaCalc: "no",
	lastOperac: "",
	chainCalc: "",
// Metodo de Inicializar
	init: function(){
		this.asignarEventoBtn('teclado')
	},

//Metodos al presionar Boton
	asignarEventoBtn: function(selector){
		var keyb = document.querySelectorAll('.' + selector + ' img')
		for(i=0;i<keyb.length;i++){
			keyb[i].onclick = this.pushKeyEvent
			keyb[i].onmouseleave = this.eventoSoltoTecla
		}
	},

//Metodo para llamar funcion de Botones
	pushKeyEvent: function(event){
		if(event.target.id == "1" || event.target.id == "2" || event.target.id == "3"
			|| event.target.id == "4" || event.target.id == "5" || event.target.id == "6"
			|| event.target.id == "7" || event.target.id == "8" || event.target.id == "9"
			|| event.target.id == "0") {
			showNumber(event.target.id)
		}

		if(event.target.id == "on"){
			clsScreen()
		}

		if(event.target.id == "punto"){
			agregarPunto()
		}

		if(event.target.id == "sign"){
			agregarSigno()
		}

		if(event.target.id == "mas"){
			sumarValores()
		}

		if(event.target.id == "menos"){
			restarValores()
		}

		if(event.target.id == "por"){
			multiplicarValores()
		}

		if(event.target.id == "dividido"){
			dividirValores()
		}

		if(event.target.id == "igual"){
			mostrarResultado()
		}

		disminuirTamanoTecla(event.target)

	},

	eventoSoltoTecla: function(event){
		aumentarTamanoTecla(event.target)
	}

}

function sumarValores(){
	if(Calculadora.chainCalc == 'XXX'){
		Calculadora.chainCalc = ""
		Calculadora.operaCalc = "no"
	}
	if(Calculadora.operaCalc == "no"){
		Calculadora.chainCalc = document.getElementById('display').innerHTML
		Calculadora.operaCalc = "+"
	} else {
		Calculadora.chainCalc = Calculadora.chainCalc + Calculadora.operaCalc + document.getElementById('display').innerHTML
		Calculadora.operaCalc = "+"
	}
	document.getElementById('display').innerHTML = ""
}

function restarValores(){
	if(Calculadora.chainCalc == 'XXX'){
		Calculadora.chainCalc = ""
		Calculadora.operaCalc = "no"
	}
	if(Calculadora.operaCalc == "no"){
		Calculadora.chainCalc = document.getElementById('display').innerHTML
		Calculadora.operaCalc = "-"
	} else {
		Calculadora.chainCalc = Calculadora.chainCalc + Calculadora.operaCalc + document.getElementById('display').innerHTML
		Calculadora.operaCalc = "-"
	}
	document.getElementById('display').innerHTML = ""
}

function multiplicarValores(){
	if(Calculadora.chainCalc == 'XXX'){
		Calculadora.chainCalc = ""
		Calculadora.operaCalc = "no"
	}
	if(Calculadora.operaCalc == "no"){
		Calculadora.chainCalc = document.getElementById('display').innerHTML
		Calculadora.operaCalc = "*"
	} else {
		Calculadora.chainCalc = Calculadora.chainCalc + Calculadora.operaCalc + document.getElementById('display').innerHTML
		Calculadora.operaCalc = "*"
	}
	document.getElementById('display').innerHTML = ""
}

function dividirValores(){
	if(Calculadora.chainCalc == 'XXX'){
		Calculadora.chainCalc = ""
		Calculadora.operaCalc = "no"
	}
	if(Calculadora.operaCalc == "no"){
		Calculadora.chainCalc = document.getElementById('display').innerHTML
		Calculadora.operaCalc = "/"
	} else {
		Calculadora.chainCalc = Calculadora.chainCalc + Calculadora.operaCalc + document.getElementById('display').innerHTML
		Calculadora.operaCalc = "/"
	}
	document.getElementById('display').innerHTML = ""
}

function mostrarResultado(){
	if(Calculadora.chainCalc == ""){
		document.getElementById('display').innerHTML = "0"
	} else if(Calculadora.chainCalc == 'XXX'){
			Calculadora.chainCalc = document.getElementById('display').innerHTML + Calculadora.lastOperac
			document.getElementById('display').innerHTML = actualizarResultado()
			Calculadora.chainCalc = 'XXX'
	} else {
				Calculadora.chainCalc = Calculadora.chainCalc + Calculadora.operaCalc + document.getElementById('display').innerHTML
				Calculadora.lastOperac = Calculadora.operaCalc + document.getElementById('display').innerHTML
				document.getElementById('display').innerHTML = actualizarResultado()
				Calculadora.chainCalc = 'XXX'
	}
}

function actualizarResultado(){
	resultado = 0
	resultado = eval(Calculadora.chainCalc)
	return resultado.toPrecision(4)
}

function agregarSigno(){
	var pantalla = document.getElementById('display')
	if(pantalla.innerHTML[0] = "-"){
		pantalla.innerHTML[0] = ""
	}
	if(pantalla.innerHTML.length<7 && pantalla.innerHTML != "0"){
		pantalla.innerHTML = "-" + pantalla.innerHTML
	}
}

function agregarPunto(){
	var existe = "1"
	var pantalla = document.getElementById('display')
	for(i=0;i<pantalla.innerHTML.length;i++){
		if (pantalla.innerHTML[i] == "."){
			existe = "0"
		}
	}
	if(existe == "1" && pantalla.innerHTML.length < 6){
		pantalla.innerHTML = pantalla.innerHTML + "."
	}
}

function clsScreen(){
	var pantalla = document.getElementById('display')
	pantalla.innerHTML = "0"
	Calculadora.chainCalc = ""
	Calculadora.operaCalc = "no"
}

function showNumber(numero){
	var pantalla = document.getElementById('display')
	if (pantalla.innerHTML.length < 8){
		if(pantalla.innerHTML == "0" && numero != "0"){
			pantalla.innerHTML = numero
		} else if(pantalla.innerHTML != "0"){
			pantalla.innerHTML = pantalla.innerHTML + numero
		}
	}
}

function aumentarTamanoTecla(elementoDOM){
	elementoDOM.style.padding = "0px"
}

function disminuirTamanoTecla(elementoDOM){
	elementoDOM.style.padding = "1px"
}

Calculadora.init()
