document.addEventListener('DOMContentLoaded', function () {
    const hereLink = document.getElementById('here');

    hereLink.addEventListener('click', function (event) {
        event.preventDefault();


        window.location.href = "/blocks/index.html";
    });
});