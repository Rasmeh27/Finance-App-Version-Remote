document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('password-reset-form');
    const backToLoginLink = document.getElementById('here');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Evitar que el formulario se envíe automáticamente

        const email = document.getElementById('email').value;

        // Enviar una solicitud al servidor para enviar el correo electrónico
        fetch('http://localhost:5000/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email
                })
            })
            .then(response => {
                if (response.ok) {
                    alert('Correo electrónico enviado con éxito');
                    form.reset(); // Reiniciar el formulario después del envío
                    window.location.href = "/otra-pagina.html"; // Redirigir a otra página
                } else {
                    throw new Error('Error al enviar el correo electrónico');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Hubo un problema al enviar el correo electrónico');
            });
    });

    // Redirigir al hacer clic en el enlace "Volver al login"
    backToLoginLink.addEventListener('click', function (event) {
        event.preventDefault(); // Evitar el comportamiento predeterminado del enlace
        window.location.href = "/blocks/index.html"; // Cambia "/pagina-de-login.html" por la URL de tu página de inicio de sesión
    });
});