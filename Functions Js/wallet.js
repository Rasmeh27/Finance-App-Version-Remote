function actualizarResultado() {
    // Recuperar el resultado del cálculo en la primera página
    var resultadoDespuesImpuestos = calcularImpuestos(); // Asegúrate de que esta función devuelva el resultado

    // Guardar el resultado en el localStorage
    localStorage.setItem('resultadoImpuestos', resultadoDespuesImpuestos.toFixed(2));

}

document.addEventListener('DOMContentLoaded', function () {
    // Recuperar el resultado del localStorage
    var resultadoImpuestos = localStorage.getItem('resultadoImpuestos');
    var totalGastos = localStorage.getItem('totalGastos');

    // Mostrar el resultado en la página
    document.getElementById('numerito').innerHTML = "$" + resultadoImpuestos;
    document.getElementById('totalGastos').innerHTML = "$ -" + totalGastos;
});