// Deskop menu
const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

navEmail.addEventListener('click', toggleDeskMenu);

function toggleDeskMenu() {
    desktopMenu.classList.toggle('inactive');
}