'use strict'

// set up listeners when DOM is ready
window.addEventListener('load', () => {
  // query DOM for mailing list form
  const formEl = document.getElementById('mailing-list')

  // add submit event listener
  formEl.addEventListener('submit', e => {
    e.preventDefault()
    alert('Thanks for subscribing!')
  })
})
