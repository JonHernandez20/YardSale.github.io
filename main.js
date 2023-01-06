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
    price: 25,
    image: 'https://i.pinimg.com/236x/11/4a/dd/114addd8f455f6374d5545028def932b.jpg'
});
productList.push({
    name: 'Terreneitor',
    price: 30,
    image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSLNKuaVtwWmS2zPIem9tZTTsGoVLrZgku5gcDj1Q8TCZuM9ySf_8RxQf1bgPBRQIHJPPVyeeZiBfk7zLLqtg1gM7oLnu465veKyyPso2kQQWi_12yin6KGew&usqp=CAE'
});
productList.push({
    name: 'Drone',
    price: 80,
    image: 'https://i.pinimg.com/236x/b5/d4/32/b5d4327128dd905e923fa126f71c90ed.jpg'
});
productList.push({
    name: 'Hidrogel',
    price: 41,
    image: 'https://i.pinimg.com/236x/b3/1a/5d/b31a5d06e45989d6c9dbdb0698fde56b.jpg'
});
productList.push({
    name: 'Ball of wordl',
    price: 207,
    image: 'https://i.pinimg.com/236x/b2/27/6c/b2276caf672d1c3de9a301dc45def1c5.jpg'
});
productList.push({
    name: 'PlayStation 5',
    price: 777,
    image: 'https://i.pinimg.com/236x/a5/ca/69/a5ca6910e56d517a80222784e7be3cc7.jpg'
});
productList.push({
    name: 'Mando PS5',
    price: 70,
    image: 'https://i.pinimg.com/236x/68/65/6e/68656e59bc4f5d2de1208ab6c8d5393c.jpg'
});
productList.push({
    name: 'Vegeta',
    price: 41,
    image: 'https://i.pinimg.com/236x/f4/17/a8/f417a856e0ebb66ba1e5c0fa86683f68.jpg'
});
productList.push({
    name: 'Repisa',
    price: 414,
    image: 'https://i.pinimg.com/236x/a7/25/c0/a725c01869bfb4f2fcf63a4618934f1b.jpg'
});
productList.push({
    name: 'Juego de sillones',
    price: 777,
    image: 'https://i.pinimg.com/236x/0e/2d/35/0e2d353629258927c1499fb4e6fc9f0f.jpg'
});
productList.push({
    name: 'Mesa',
    price: 260,
    image: 'https://i.pinimg.com/236x/46/55/44/46554421807d6da4d49bf3bc9d0bce2c.jpg'
});
productList.push({
    name: 'Zapatera',
    price: 130,
    image: 'https://i.pinimg.com/236x/42/37/c6/4237c6b19ea7c53814bac339c64447ce.jpg'
});
productList.push({
    name: 'Closet',
    price: 1036,
    image: 'https://i.pinimg.com/236x/eb/b2/7d/ebb27d8976229ed44730d85e252779b7.jpg'
});
productList.push({
    name: 'Cazadora',
    price: 41,
    image: 'https://i.pinimg.com/236x/d9/7e/2b/d97e2bb5be41b03fd669cab3a8ec4862.jpg'
});
productList.push({
    name: 'Tenis blancos',
    price: 466,
    image: 'https://i.pinimg.com/236x/99/fc/09/99fc09aa02ab19c0f2ca59cf848279e5.jpg'
});
productList.push({
    name: 'Falda',
    price: 77,
    image: 'https://i.pinimg.com/236x/ae/0e/e7/ae0ee7fe43c4c7ccceea7fd885930125.jpg'
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