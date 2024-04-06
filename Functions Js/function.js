const username = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const parrafo = document.getElementById("warnings");
const form = document.getElementById("form");
const forgotPasswordLink = document.getElementById("forgot-password");
const registerLink = document.getElementById("register-link");


form.addEventListener("submit", e => {
    e.preventDefault();
    let warnings = "";
    let entrar = false;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    parrafo.innerHTML = "";

    if (username.value.length < 6) {
        warnings += `El nombre no es válido, minimo 6 letras <br>`;
        entrar = true;
    }
    if (!regexEmail.test(email.value)) {
        warnings += `El email no es válido <br>`;
        entrar = true;
    }
    if (password.value.length < 6) {
        warnings += `La contraseña no es válida, 8 caracteres <br>`;
        entrar = true;
    }

    if (entrar) {
        parrafo.innerHTML = warnings;
    } else {
        parrafo.innerHTML = "Enviado";
        redirectToAnotherPage();
    }

    console.log("Todo funciona bien");
});

function redirectToAnotherPage() {
    window.location.href = "/blocks/ui.html"
}

forgotPasswordLink.addEventListener("click", function (event) {
    event.defaultPrevented();
    //Dirigir al formulario de contraseña

})

registerLink.addEventListener("click", function (event) {
    event.defaultPrevented();
    //Dirigir al formulario de registro
})