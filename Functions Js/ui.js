const btn = document.getElementById("toggleMenu");
const list = document.querySelector(".list");
const warnings = document.getElementById("warningsNumbers");
const nav = document.getElementsByClassName("gastos");
const logout = document.getElementById("log-out");
const info = document.getElementById("info");
const resultElement = document.getElementById("numerito");

//Funciones del nav 
const invertion = document.getElementById("inversion");

if (invertion) {
	invertion.addEventListener("click", function () {
		swal.fire({
			title: "Inversiones",
			text: "Aqui podras invertir un porcentaje de tus ingresos",
			icon: "success"

		})
	})
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
			text: "1. Introduce tus ingresos. 2. Introduce tus gastos 3. Presiona el botón de calcular.",
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
	var gastosEnergiaInput = parseFloat(document.getElementById("input-gastos-energia").value.trim())
	var gastosAguaInput = parseFloat(document.getElementById("input-gastos-agua").value.trim())

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

	if (ingresos <= 20000) {
		warnings.innerHTML = "No se le aplicarán impuestos.";
		resultElement.innerHTML = "$" + ingresos.toFixed(2);
		return;
	} else {
		var impuestos;

		if (ingresos > 416220) {
			impuestos = ingresos * 0.27;
			warnings.innerHTML =
				"Impuestos sobre la Renta: RD$ - " + impuestos.toFixed(2);
		} else {
			impuestos = ingresos * 0.18;
			warnings.innerHTML = "RD$ - " + impuestos.toFixed(2);
		}

		var resultadoDespuesImpuestos = ingresosDespuesGastos - impuestos;
		resultElement.innerHTML = "$" + resultadoDespuesImpuestos.toFixed(2);
	}

}