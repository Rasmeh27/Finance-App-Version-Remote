const username = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const parrafo = document.getElementById("warnings");
const form = document.getElementById("form");
const forgotPasswordLink = document.getElementById("forgot-password");
const registerLink = document.querySelector("#register-link");


form.addEventListener("submit", e => {
    e.preventDefault();
    let warnings = "";
    let entrar = false;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    parrafo.innerHTML = "";

    if (username.value.length < 4) {
        warnings += `El nombre no es válido, minimo 4 letras <br>`;
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
    const forgotPasswordLink = "/blocks/changepass.html"

    window.location.href = forgotPasswordLink;


})

registerLink.addEventListener("click", function (event) {
    const registerPage = "/blocks/register.html"

    window.location.href = registerPage;

})