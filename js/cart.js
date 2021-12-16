/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  let tableRows = document.querySelector('tbody');
  tableRows.innerHTML('');
};

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body
  let tableBody = document.getElementById('cart');
  // TODO: Iterate over the items in the cart
  for (let i = 0; i < Cart.allItems; i++) {
    let tr = document.createElement('tr');
    tr.textContent = Cart.allItems[i];
    let deleteLink = document.createElement('td');
    let quantity = document.createElement('td');
    let item = document.createElement('td');
    deleteLink.textContent = document.createElement('button');
    deleteLink.innerHTML = 'x';
    quantity.textContent = Cart.allItems[i].quantity;
    item.textContent = Cart.allItems[i].item;
    tableBody.appendChild(tr);
    tr.appendChild(td);
  }
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table
  let clickedItem = event.target.id;
  Cart.removeItem(clickedItem);
  saveToLocalStorage();
  renderCart();
}

// This will initialize the page and draw the cart on screen
renderCart();
