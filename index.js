document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;
    const menuOpenButton = document.getElementById('menu-open-button');
    const menuCloseButton = document.getElementById('menu-close-button');

    menuOpenButton.addEventListener('click', function () {
        body.classList.add('show-mobile-menu');
    });

    menuCloseButton.addEventListener('click', function () {
        body.classList.remove('show-mobile-menu');
    });
});