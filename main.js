// Deskop menu
const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu')

//deskttop Menu
navEmail.addEventListener('click', toggleDeskMenu);
function toggleDeskMenu() {
    desktopMenu.classList.toggle('inactive');
}

// Burguer Menu Mobile
burguerMenu.addEventListener('click', togglemobMenu);
function togglemobMenu () {
    mobileMenu.classList.toggle('inactive');
}