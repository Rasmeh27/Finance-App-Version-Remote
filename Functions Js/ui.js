const btn = document.getElementById("toggleMenu");
const list = document.querySelector(".list");
const warnings = document.getElementById("warningsNumbers");
const nav = document.getElementsByClassName("gastos");
const logout = document.getElementById("log-out");
const info = document.getElementById("info");
const resultElement = document.getElementById("numerito");

//Funciones del nav 
const invertion = document.getElementById("inversion");
const cartera = document.getElementById('wallet');
const menu = document.getElementById('overview');

//Funciones del button nav 
const Information = document.getElementById('Informacion');

if (Information) {
	Information.addEventListener("click", function (event) {
		event.preventDefault()
		window.location.href = 'https://enlightened-english-809236.framer.app';
	});

	function redirectToAnotherPage() {
		window.location.href = 'https://enlightened-english-809236.framer.app'

	}
}

if (cartera) {
	cartera.addEventListener("click", function () {
		window.location.href = "/blocks/wallet.html";

	})
}

if (menu) {
	menu.addEventListener("click", function () {
		window.location.href = "/blocks/ui.html"
	})
}


if (invertion) {
	invertion.addEventListener("click", function () {
		swal.fire({
			title: "Inversiones",
			text: "Este apartado está destinado a personas con experiencia en el ámbito de las inversiones.",
			icon: "warning",
			footer: '<a id="inversionLink" href="https://www.rexi.do">Invierte un porcentaje aquí en Rexi</a>'
		});

		document.getElementById('inversionLink').addEventListener('click', function (event) {
			event.preventDefault();
			window.open(this.href, '_blank');
		});
	});
}


btn.addEventListener("click", function () {
	list.classList.toggle("hidden");
});


if (logout) {
	logout.addEventListener("click", function () {
		window.location.href = "/blocks/index.html";
	});
}

function redirectToAnotherPage() {
	window.location.href = "/blocks/index.html";
}

if (info) {
	info.addEventListener("click", function () {
		swal.fire({
			title: "Information",
			text: "1. Introduce tus ingresos. 2. Introduce tus gastos 3. Presiona el botón de calcular. NOTA: Si ganas quincenal divide tus resultados en 2. Tus gastos totales los puedes ver en la cartera.",
			icon: "info",
		});
	});
}

function calcularImpuestos() {
	var ingresos = parseFloat(document.getElementById("ingresos-input").value);
	var resultElement = document.getElementById("numerito");
	var warnings = document.getElementById("warningsNumbers");

	var gastosInternetInput = parseFloat(document.getElementById("input-gastos-internet").value.trim());
	var gastosVehiculoInput = parseFloat(document.getElementById("input-gastos-vehiculo").value.trim());
	var gastosTelefonoInput = parseFloat(document.getElementById("input-gastos-telefono").value.trim());
	var gastosSeguroInput = parseFloat(document.getElementById("input-gastos-seguro").value.trim());
	var gastosAfpInput = parseFloat(document.getElementById("input-gastos-pension").value.trim());
	var gastosEnergiaInput = parseFloat(document.getElementById("input-gastos-energia").value.trim());
	var gastosAguaInput = parseFloat(document.getElementById("input-gastos-agua").value.trim());

	// Calcular gastos
	var gastosInternet = gastosInternetInput ? gastosInternetInput : 0;
	var gastosVehiculo = gastosVehiculoInput ? gastosVehiculoInput : 0;
	var gastosTelefono = gastosTelefonoInput ? gastosTelefonoInput : 0;
	var gastosSeguro = gastosSeguroInput ? gastosSeguroInput : 0;
	var gastosAfp = gastosAfpInput ? gastosAfpInput : 0;
	var gastosEnergia = gastosEnergiaInput ? gastosEnergiaInput : 0;
	var gastosAgua = gastosAguaInput ? gastosAguaInput : 0;

	var totalGastos = gastosInternet + gastosVehiculo + gastosTelefono + gastosSeguro + gastosAfp + gastosEnergia + gastosAgua;

	if (isNaN(ingresos) || isNaN(totalGastos) || ingresos === "") {
		swal.fire({
			title: "Por favor, ingresa un monto válido.",
			icon: "error",
		});
		return;
	}

	var ingresosDespuesGastos = ingresos - totalGastos;

	if (ingresosDespuesGastos <= 0) {
		resultElement.innerHTML = "Los gastos exceden los ingresos";
		return;
	}

	// Mostrar el resultado después de restar los gastos de los ingresos
	resultElement.innerHTML = "$" + ingresosDespuesGastos.toFixed(2);

	if (ingresos <= 20000) {
		warnings.innerHTML = "No se le aplicarán impuestos.";
		return;
	} else {
		var impuestos;

		if (ingresos > 416220) {
			impuestos = ingresos * 0.27;
			warnings.innerHTML = "Impuestos sobre la Renta: RD$ - " + impuestos.toFixed(2);
		} else {
			impuestos = ingresos * 0.18;
			warnings.innerHTML = "RD$ - " + impuestos.toFixed(2);
		}

		//alerta de ahorro 
		var porcentajeDeAhorro = (ingresosDespuesGastos / ingresos * 50);
		var porcentajeDeInversion = (ingresosDespuesGastos / ingresos * 20);

		// Después de calcular el resultado
		var resultadoDespuesImpuestos = ingresosDespuesGastos - impuestos;
		resultElement.innerHTML = "$" + resultadoDespuesImpuestos.toFixed(2);

		// Guardar el resultado en el localStorage
		localStorage.setItem('resultadoImpuestos', resultadoDespuesImpuestos.toFixed(2));
		localStorage.setItem('totalGastos', totalGastos.toFixed(2));

		if (porcentajeDeAhorro) {
			swal.fire({
				title: "AHORRA O INVIERTE",
				text: "Deberías ahorrar: " + porcentajeDeAhorro.toFixed(2) + "% " + "O podrías invertir este porcentaje " + porcentajeDeInversion.toFixed(2) + "%",
				icon: "info",
			});
			return;
		}
	}
}