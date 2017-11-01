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
		var imc = peso/(altura*altura);
		tdImc.textContent = imc.toFixed(2);
	}
}

pacientes.forEach(atualizaImc);

var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event) {
	event.preventDefault();

	var form = document.querySelector('#form-adiciona');

	var nome = form.nome.value;
	var peso = form.peso.value;
	var altura = form.altura.value;
	var gordura = form.gordura.value;

	var pacienteTr = document.createElement("tr");

	var nomeTd = document.createElement("td");
	var pesoTd = document.createElement("td");
	var alturaTd = document.createElement("td");
	var gorduraTd = document.createElement("td");

	nomeTd.textContent = nome;
	pesoTd.textContent = peso;
	alturaTd.textContent = altura;
	gorduraTd.textContent = gordura;

	pacienteTr.appendChild(nomeTd);
	pacienteTr.appendChild(pesoTd);
	pacienteTr.appendChild(alturaTd);
	pacienteTr.appendChild(gorduraTd);

	var tableBody = document.querySelector("#tabela-pacientes");

	tableBody.appendChild(pacienteTr);

});