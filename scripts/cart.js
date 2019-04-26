'use strict'

// avoid polluting window
{
  // init cart and set up listeners when DOM is ready
  window.addEventListener('load', initCart)

  function initCart() {
    // check local storage for cart items
    const localCart = JSON.parse(localStorage.getItem('cart'))

    const cart = localCart || []

    // query DOM for purchase buttons
    const productsEl = document.getElementsByClassName('product-list__item')
    const productList = Array.from(productsEl)

    // add purchase product event listeners
    productList.forEach(productEl => {
      const purchaseBtn = productEl.getElementsByClassName(
        'product-list__button',
      )[0]
      const { name, price } = productEl.dataset

      purchaseBtn.addEventListener('click', () => purchaseItem(name, price))
    })

    // update cart icon in case local cart exists
    updateCartIcon(cart.length)

    // runs on purchase btn click
    function purchaseItem(name, price) {
      // update cart arr
      cart.push({ name, price })
      // update DOM
      updateCartIcon(cart.length)
      // update local storage
      updateLocalCart(cart)
    }

    // update DOM w/ cart size
    function updateCartIcon(cartSize) {
      // avoid size icon if cart is empty
      if (!cartSize) return

      // query FOM for cart elements
      const cartEl = document.getElementById('cart')
      const cartChildren = Array.from(cartEl.children)
      let notificationEl = cartChildren.filter(
        ({ tagName }) => tagName !== 'IMG',
      )[0]

      // if cart size icon not found
      if (!notificationEl) {
        // create cart size icon
        notificationEl = document.createElement('span')
        notificationEl.classList.add('cart__size')
        notificationEl.setAttribute('aria-live', 'assertive')

        // append cart size icon to cart el
        cartEl.appendChild(notificationEl)
      }

      // update cart size
      notificationEl.innerText =
        // replace number w/ '+' if double-digit
        cartSize < 10 ? cartSize : '+'
    }

    // update local storage w/ cart arr
    function updateLocalCart(cart) {
      localStorage.setItem('cart', JSON.stringify(cart))
    }
  }
}
