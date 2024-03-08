const btn = document.getElementById("toggleMenu");
const list = document.querySelector(".list");
const warnings = document.getElementById("warningsNumbers")
const nav = document.getElementsByClassName("gastos")
const logout = document.getElementById("log-out")
const info = document.getElementById("info")
const resultElement = document.getElementById("numerito")

btn.addEventListener("click", function () {
  list.classList.toggle("hidden");
});

if (logout) {
  logout.addEventListener("click", function () {
    window.location.href = "/blocks/index.html";
  });
}

function redirectToAnotherPage() {
  window.location.href = "/blocks/index.html"
}

if (info) {
  info.addEventListener("click", function () {
    swal.fire({
      title: "Information",
      text: "Facilitar la gestion financiera personal mediante soluciones de software intuitivas y personalizadas,promoviendo la prosperidad economica y el bienestar de nuestros usuarios.",
      icon: "info"
    });

  })
}

function calcularImpuestos() {
  var ingresos = parseFloat(document.getElementById('ingresos').value);
  var resultElement = document.getElementById('numerito');

  if (isNaN(ingresos) || ingresos === "") {
    swal.fire({
      title: "Por favor, ingresa el monto valido.",
      icon: "error"
    });
    return;
  }
  
  if (ingresos <= 20000) {
    warnings.innerHTML = ("No se le aplicaran los impuestos.");
    resultElement.innerHTML = ("$" + ingresos.toFixed(2));
    return;
  } else {
    if (ingresos > 416000) {
      var impuestos = ingresos * 0.27;
      warnings.innerHTML = ("Impuestos sobre la Renta: RD$ " + impuestos.toFixed(2));
      resultElement.innerHTML = ("$" + (ingresos - impuestos.toFixed(2)));
      return;

    } else {
      impuestos = ingresos * 0.18;
      warnings.innerHTML = ("RD$ " + impuestos.toFixed(2));
    }

    if (impuestos = ingresos * 0.18){
      var resultadoDespuesImpuestos = ingresos - impuestos;
      resultElement.innerHTML = ("$" + resultadoDespuesImpuestos.toFixed(2));
      return;
      }
      
      if (impuestos = ingresos * 0.27){
        var resultadoDespuesImpuestos = ingresos - impuestos;
        resultElement.innerHTML = ("$" + resultadoDespuesImpuestos.toFixed(2));
        return;
      }
  

    }

}
