const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
const cartItemsContainer = document.getElementById('cart-items');

addToCartButtons.forEach(button => {
    button.addEventListener('click', addToCart);
});

function addToCart(event) {
    const item = event.target.parentElement;
    const itemName = item.querySelector('h3').textContent;
    const itemPrice = item.querySelector('p').textContent;

    const cartItem = document.createElement('li');
    cartItem.classList.add('cart-item');
    cartItem.innerHTML = `
        <img src="item1.jpg" alt="${itemName}">
        <span>${itemName}</span>
        <span>${itemPrice}</span>
    `;

    cartItemsContainer.appendChild(cartItem);
}


    

   






        





    












