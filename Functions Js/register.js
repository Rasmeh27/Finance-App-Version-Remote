document.addEventListener('DOMContentLoaded', function () {
    const hereLink = document.getElementById('here');

    hereLink.addEventListener('click', function (event) {
        event.preventDefault();

        window.location.href = "/blocks/index.html";
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const login = document.getElementById('button-register');

    login.addEventListener('click', function (event) {
        event.preventDefault();

        window.location.href = "/blocks/index.html";
    });
});