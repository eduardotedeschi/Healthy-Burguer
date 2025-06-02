const hamburger = document.querySelector('.hamburger-menu');
const menuPrincipal = document.querySelector('.menu-principal');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    menuPrincipal.classList.toggle('active');
});