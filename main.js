// Deskop menu
const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu')
const cartNav = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');

//deskttop Menu
navEmail.addEventListener('click', toggleDeskMenu);
function toggleDeskMenu() {
    const isCLosedDetail = aside.classList.contains('inactive');

    if(!isCLosedDetail) {
        aside.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

// Burguer Menu Mobile
burguerMenu.addEventListener('click', togglemobMenu);
function togglemobMenu () {
    const isClosedDetail = aside.classList.contains('inactive');

    if(!isClosedDetail) {
        aside.classList.add('inactive');
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
    
    aside.classList.toggle('inactive');
}

// Product array var
const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Televisor',
    price: 520,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Computer',
    price: 250,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        //Img
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
    
        // Info div
        const info = document.createElement('div');
        info.classList.add('product-info');
    
        // div characters
        const divChar = document.createElement('div');
    
        // Characters
        const productPrice = document.createElement('p');
        productPrice.innerText = `$${product.price}`;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        // Figure icon
        const figure = document.createElement('figure');
        const imgFigure = document.createElement('img');
        imgFigure.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        //Appendchild
        // imgFigure -> Figure
        figure.appendChild(imgFigure);
    
        // characters -> div characters
        divChar.appendChild(productPrice);
        divChar.appendChild(productName);
    
        // figure, characters -> Product info
        info.appendChild(divChar);
        info.appendChild(figure);
    
        // Product info, img -> product card
        productCard.append(productImg);
        productCard.append(info);
    
        // Product card -> cardsContainer
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);