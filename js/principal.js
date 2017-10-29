var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");

var peso = paciente.querySelector(".info-peso").textContent;
var altura = paciente.querySelector(".info-altura").textContent;

tdImc = paciente.querySelector(".info-imc");

var pesoValido = true;
var alturaValida = true;

if(peso <= 0 || peso > 1000) {
	console.log("Peso Inválido");
	tdImc.textContent = "Peso Inválido";
	pesoValido = false;
}

if(altura <= 0 || altura >= 3.00) {
	console.log("Altura Inválida");
	tdImc.textContent = "Altura Inválida";
	alturaValida = false;
}

if(pesoValido && alturaValida) {
	var imc = peso/(altura*altura);
	tdImc.textContent = imc;
}
