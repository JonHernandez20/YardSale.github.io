// Deskop menu
const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu')
const cartNav = document.querySelector('.navbar-shopping-cart');
const prodDetail = document.querySelector('.product-detail');

//deskttop Menu
navEmail.addEventListener('click', toggleDeskMenu);
function toggleDeskMenu() {
    const isCLosedDetail = prodDetail.classList.contains('inactive');

    if(!isCLosedDetail) {
        prodDetail.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

// Burguer Menu Mobile
burguerMenu.addEventListener('click', togglemobMenu);
function togglemobMenu () {
    const isClosedDetail = prodDetail.classList.contains('inactive');

    if(!isClosedDetail) {
        prodDetail.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

// Shopping cart 
cartNav.addEventListener('click', toggleCart);
function toggleCart () {
    const isClosedMobile = mobileMenu.classList.contains('inactive');
    const isClosedEmail = desktopMenu.classList.contains('inactive');

    if(!isClosedMobile) {
        mobileMenu.classList.add('inactive');
    }

    if(!isClosedEmail) {
        desktopMenu.classList.add('inactive');
    }
    
    prodDetail.classList.toggle('inactive');
}