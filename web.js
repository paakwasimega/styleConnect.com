const items = [
    { name: 'Item 1', price: '$10.00' },
    { name: 'Item 2', price: '$15.00' },
    // Add more items as needed
];

const cart = [];

function addToCart(item) {
    cart.push(item);
    updateCart();
}

function removeFromCart(item) {
    const index = cart.findIndex(cartItem => cartItem.name === item.name);
    if (index !== -1) {
        cart.splice(index, 1);
    }
    updateCart();
}

function updateCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';

    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <span>${item.name}</span>
            <span>${item.price}</span>
            <button class="remove-from-cart-btn">Remove from Cart</button>
        `;

        const removeButton = cartItem.querySelector('.remove-from-cart-btn');
        removeButton.addEventListener('click', () => removeFromCart(item));

        cartItemsContainer.appendChild(cartItem);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const itemsContainer = document.getElementById('items');

    items.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('item');
        itemElement.innerHTML = `
            <h3>${item.name}</h3>
            <p>${item.price}</p>
            <button class="add-to-cart-btn">Add to Cart</button>
        `;

        const addButton = itemElement.querySelector('.add-to-cart-btn');
        addButton.addEventListener('click', () => addToCart(item));

        itemsContainer.appendChild(itemElement);
    });
});
