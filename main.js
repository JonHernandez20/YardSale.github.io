// Deskop menu
const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const closeCart = document.querySelector('#closeCart');
const iconClose = document.querySelector('.product-detail-close');
const cartNav = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('#shoppingCartContainer');
const productDetail = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');
// Aside detail product
const imgDetail = document.querySelector('#infoImage'); // Image
const priceDetail = document.querySelector('#infoPrice'); // Price
const nameDetail = document.querySelector('#infoName'); // Name


// eventListener
navEmail.addEventListener('click', toggleDeskMenu);
burguerMenu.addEventListener('click', togglemobMenu);
cartNav.addEventListener('click', toggleCart);
iconClose.addEventListener('click', closedDetailProduct);
closeCart.addEventListener('click', closeIconCart);

//deskttop Menu
function toggleDeskMenu() {
    const isCLosedDetail = aside.classList.contains('inactive');
    const isClosedAside = productDetail.classList.contains('inactive');

    if(!isCLosedDetail) {
        aside.classList.add('inactive');
    }
    
    if(!isClosedAside) {
        productDetail.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

// Burguer Menu Mobile
function togglemobMenu () {
    const isClosedDetail = aside.classList.contains('inactive');
    const isClosedAside = productDetail.classList.contains('inactive');

    if(!isClosedDetail) {
        aside.classList.add('inactive');
    }

    if(!isClosedAside) {
        productDetail.classList.add('inactive');
    }
    
    mobileMenu.classList.toggle('inactive');
}

// Shopping cart 
function toggleCart () {
    const isClosedMobile = mobileMenu.classList.contains('inactive');
    const isClosedAside = productDetail.classList.contains('inactive');
    const isClosedEmail = desktopMenu.classList.contains('inactive');

    if(!isClosedMobile) {
        mobileMenu.classList.add('inactive');
    }
    
    if(!isClosedAside) {
        closedDetailProduct();
    }

    if(!isClosedEmail) {
        desktopMenu.classList.add('inactive');
    }
    aside.classList.toggle('inactive');
}

// close in case of permance open (cart shopping)
function closeIconCart () {
    aside.classList.add('inactive');
}

// Open product detail aside
function openDetailProduct() {
    const isCLosedDetail = aside.classList.contains('inactive');
    const isClosedEmail = desktopMenu.classList.contains('inactive');

    if(!isCLosedDetail) {
        aside.classList.add('inactive');
    }

    if(!isClosedEmail) {
        desktopMenu.classList.add('inactive');
    }

    productDetail.classList.remove('inactive');
}

// Close product detail aside 
function closedDetailProduct() {
    productDetail.classList.add('inactive');
}

// Product array var
const productList = [];
productList.push({
    name: 'Bike',
    price: 125,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Televisor',
    price: 880,
    image: 'https://i.pinimg.com/564x/c5/f5/3b/c5f53b78bd29ebb6ce3fb2621e67df85.jpg'
});
productList.push({
    name: 'Computer',
    price: 980,
    image: 'https://i.pinimg.com/564x/e3/de/d6/e3ded6b09a25c557fe2277a63bbc123f.jpg'
});
productList.push({
    name: 'Iphone',
    price: 1760,
    image: 'https://i.pinimg.com/236x/ca/18/45/ca18455b23e6205862a1d6ea1e3be4aa.jpg'
});
productList.push({
    name: 'Chair Game',
    price: 125,
    image: 'https://i.pinimg.com/236x/1f/ff/04/1fff04990e9556e26f09a5b7242223c7.jpg'
});
productList.push({
    name: 'Keyboard',
    price: 50,
    image: 'https://i.pinimg.com/564x/fc/51/3d/fc513d92a4e46c5146ae8fbdc305b63b.jpg'
});
productList.push({
    name: 'Humidifier',
    price: 5,
    image: 'https://i.pinimg.com/236x/10/dc/0e/10dc0e6363bcb563c419ae0ca746474f.jpg'
});
productList.push({
    name: 'Mat',
    price: 30,
    image: 'https://i.pinimg.com/236x/a1/f2/6b/a1f26b7a44d6718a355a0c32b1cbd647.jpg'
});
productList.push({
    name: 'Monitor floor',
    price: 50,
    image: 'https://i.pinimg.com/736x/a6/c3/fe/a6c3fe2f60fe20b2af4cfb181ddb319f.jpg'
});
productList.push({
    name: 'Earphones',
    price: 245,
    image: 'https://i.pinimg.com/736x/99/bb/c1/99bbc15fa7a2cf37cbcec4512b6d75d5.jpg'
});
productList.push({
    name: 'Desk',
    price: 245,
    image: 'https://i.pinimg.com/736x/99/bb/c1/99bbc15fa7a2cf37cbcec4512b6d75d5.jpg'
});
productList.push({
    name: 'Desk',
    price: 245,
    image: 'https://i.pinimg.com/736x/99/bb/c1/99bbc15fa7a2cf37cbcec4512b6d75d5.jpg'
});
productList.push({
    name: 'Desk',
    price: 245,
    image: 'https://i.pinimg.com/736x/99/bb/c1/99bbc15fa7a2cf37cbcec4512b6d75d5.jpg'
});
productList.push({
    name: 'Desk',
    price: 245,
    image: 'https://i.pinimg.com/736x/99/bb/c1/99bbc15fa7a2cf37cbcec4512b6d75d5.jpg'
});
productList.push({
    name: 'Desk',
    price: 245,
    image: 'https://i.pinimg.com/736x/99/bb/c1/99bbc15fa7a2cf37cbcec4512b6d75d5.jpg'
});
productList.push({
    name: 'Desk',
    price: 245,
    image: 'https://i.pinimg.com/736x/99/bb/c1/99bbc15fa7a2cf37cbcec4512b6d75d5.jpg'
});
productList.push({
    name: 'Desk',
    price: 245,
    image: 'https://i.pinimg.com/736x/99/bb/c1/99bbc15fa7a2cf37cbcec4512b6d75d5.jpg'
});
productList.push({
    name: 'Desk',
    price: 245,
    image: 'https://i.pinimg.com/736x/99/bb/c1/99bbc15fa7a2cf37cbcec4512b6d75d5.jpg'
});
productList.push({
    name: 'Desk',
    price: 245,
    image: 'https://i.pinimg.com/736x/99/bb/c1/99bbc15fa7a2cf37cbcec4512b6d75d5.jpg'
});
productList.push({
    name: 'Desk',
    price: 245,
    image: 'https://i.pinimg.com/736x/99/bb/c1/99bbc15fa7a2cf37cbcec4512b6d75d5.jpg'
});
productList.push({
    name: 'Desk',
    price: 245,
    image: 'https://i.pinimg.com/736x/99/bb/c1/99bbc15fa7a2cf37cbcec4512b6d75d5.jpg'
});
productList.push({
    name: 'Desk',
    price: 245,
    image: 'https://i.pinimg.com/736x/99/bb/c1/99bbc15fa7a2cf37cbcec4512b6d75d5.jpg'
});
productList.push({
    name: 'Desk',
    price: 245,
    image: 'https://i.pinimg.com/736x/99/bb/c1/99bbc15fa7a2cf37cbcec4512b6d75d5.jpg'
});
productList.push({
    name: 'Desk',
    price: 245,
    image: 'https://i.pinimg.com/736x/99/bb/c1/99bbc15fa7a2cf37cbcec4512b6d75d5.jpg'
});
productList.push({
    name: 'Desk',
    price: 245,
    image: 'https://i.pinimg.com/736x/99/bb/c1/99bbc15fa7a2cf37cbcec4512b6d75d5.jpg'
});

function renderProducts(arr) {
    for (let product of arr) {
        
        // Detail aside product
        imgDetail.setAttribute('src', product.image);
        priceDetail.innerText = '$' + product.price;
        nameDetail.innerText = product.name;

        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        //Img
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', () => {
            const isCLosedDetail = aside.classList.contains('inactive');
            const isClosedEmail = desktopMenu.classList.contains('inactive');

            if(!isCLosedDetail) {
                aside.classList.add('inactive');
            }

            if(!isClosedEmail) {
                desktopMenu.classList.add('inactive');
            }

            mostrarProductAside(product.image, product.price, product.name);
            productDetail.classList.remove('inactive');
        });
    
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

function mostrarProductAside (imagen,precio,nombre) {
    imgDetail.setAttribute('src', imagen);
    priceDetail.innerText = '$' + precio;
    nameDetail.innerText = nombre;
}

renderProducts(productList);