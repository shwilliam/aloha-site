'use strict'

// set up listeners when DOM is ready
window.addEventListener('DOMContentLoaded', () => {
  // check local storage for cart items
  const localCart = JSON.parse(localStorage.getItem('cart'))
  const cart = localCart || []

  document.getElementById('product-list')
    .addEventListener('click', e => {
      // click target is a button
      if (e.target && e.target.nodeName === 'BUTTON') {
        const listEl = e.target.parentNode
        const { name, price } = listEl.dataset
        purchaseItem(name, price)
      }
    })

  // update cart icon in case local cart exists
  updateCartIcon(cart.length)

  function purchaseItem(name, price) {
    cart.push({ name, price }) // update cart arr
    updateCartIcon(cart.length) // update DOM
    updateLocalCart(cart) // update local storage
  }

  // update DOM w/ cart size
  function updateCartIcon(cartSize) {
    if (!cartSize) return

    // query DOM for cart elements
    const cartEl = document.getElementById('cart')
    const cartChildren = Array.from(cartEl.children)
    let notificationEl = cartChildren.filter(
      ({ tagName }) => tagName !== 'IMG',
    )[0]

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
      cartSize < 10 ? `${cartSize} items in cart` : '+ 10 items in cart'
  }

  // update local storage w/ cart arr
  function updateLocalCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart))
  }
})
