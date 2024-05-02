document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('password-reset-form');
    const backToLoginLink = document.getElementById('here');

    backToLoginLink.addEventListener('click', function (event) {
        event.preventDefault();
        window.location.href = "/blocks/index.html";
    });
});

// Compilar con Python para enviar correo electronico