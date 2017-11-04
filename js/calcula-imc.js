var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

var atualizaImc = function(paciente) {
	var peso = paciente.querySelector(".info-peso").textContent;
	var altura = paciente.querySelector(".info-altura").textContent;

	tdImc = paciente.querySelector(".info-imc");

	var pesoValido = true;
	var alturaValida = true;

	if(peso <= 0 || peso >=1000) {
		console.log("Peso Inválido");
		tdImc.textContent = "Peso Inválido";
		pesoValido = false;
		paciente.classList.add("paciente-invalido");
	}

	if(altura <= 0 || altura >= 3.00) {
		console.log("Altura Inválida");
		tdImc.textContent = "Altura Inválida";
		alturaValida = false;
		paciente.classList.add("paciente-invalido");
	}

	if(pesoValido && alturaValida) {
		tdImc.textContent = calculaImc(peso, altura);
	}
}

pacientes.forEach(atualizaImc);

var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event) {
	event.preventDefault();

});

function calculaImc(peso, altura) {
	var imc = peso/(altura*altura);

	return imc.toFixed(2);
}