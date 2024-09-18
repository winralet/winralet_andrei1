const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartItemsContainer = document.querySelector('.cart-items');
const totalPriceElement = document.getElementById('.total');
let cart = [];

window.onload = function() {
    alert('Здравствуйте.')
   let name = prompt("Укажите свой актуальный адрес проживания для доставки.");

  if (name) {
     
      alert("Хорошо мы доставим заказ на адрес " + name);
      alert('если адрес не правельный то перезапустите наш сайт')
      console.log(name)
      
  } else {
      alert("Просто знайте что тогда вы не можете заказать доставку.");
      console.log('гость')
  }
};

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const productElement = button.closest('.product');
        const productId = productElement.dataset.id;
        const productName = productElement.querySelector('h3').innerText;
        const productPrice = parseFloat(productElement.querySelector('p').innerText.replace('Цена: ', '').replace(' Руб.', ''));

        const productInCart = cart.find(item => item.id === productId);

        if (productInCart) {
            productInCart.quantity++;
        } else {
            cart.push({ id: productId, name: productName, price: productPrice, quantity: 1 });
        }

        renderCart();
    });
});

function renderCart() {
    cartItemsContainer.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.innerText = `${item.name} - ${item.quantity} шт. по ${item.price} Руб.`;
        cartItemsContainer.appendChild(cartItem);
        total += item.price * item.quantity;
    });

    totalPriceElement.innerText = `Итого: ${total} Руб.`;
}

document.getElementById('checkout').addEventListener('click', () => {
    alert('Спасибо за покупку! Ваши продукты доставят на адрес который вы указывали в начале');
    cart = [];
    renderCart();
});


