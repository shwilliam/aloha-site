'use strict'

// avoid polluting window
{
  // set up listeners when DOM is ready
  window.addEventListener('load', initMailingList)

  function initMailingList() {
    // query DOM for mailing list form
    const formEl = document.getElementById('mailing-list')

    // add submit event listener
    formEl.addEventListener('submit', e => {
      e.preventDefault()
      alert('Thanks for subscribing!')
    })
  }
}
