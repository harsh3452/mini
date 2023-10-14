let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Chicken Biryani',
        image: 'dish-1.PNG',
        price: 350
    },
    {
        id: 2,
        name: 'Burgers',
        image: 'dish-2.PNG',
        price: 200
    },
    {
        id: 3,
        name: 'Rolls',
        image: 'dish-3.PNG',
        price: 150
    },
    {
        id: 4,
        name: 'Thali',
        image: 'dish-4.PNG',
        price: 300
    },
    {
        id: 5,
        name: 'Dessert',
        image: 'dish-5.PNG',
        price: 400
    },
    {
        id: 6,
        name: 'South-Indian',
        image: 'dish-6.PNG',
        price: 270
    },
    {
        id: 7,
        name: 'Pizza',
        image: 'menu-1.jpg',
        price: 300
    },
    {
        id: 8,
        name: 'Pav Bhaji',
        image: 'menu-2.jpg',
        price: 150
    },
    {
        id: 9,
        name: 'Steamed Momos',
        image: 'menu-3.jpg',
        price: 80
    },
    {
        id: 10,
        name: 'Fried Momos',
        image: 'menu-4.jpg',
        price: 80
    },
    {
        id: 11,
        name: 'Barbeque',
        image: 'menu-5.jpg',
        price: 450
    },
    {
        id: 12,
        name: 'Mendu Vada',
        image: 'menu-6.jpg',
        price: 45
    },
    {
        id: 13,
        name: 'Veg Fried Rice',
        image: 'menu-7.jpg',
        price: 200
    },
    {
        id: 14,
        name: 'Waffle',
        image: 'menu-8.jpg',
        price: 450
    },
    {
        id: 15,
        name: 'Chicken Tandori',
        image: 'menu-9.jpg',
        price: 450
    },
    
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}