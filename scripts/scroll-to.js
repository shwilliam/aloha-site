'use strict'

// set up listeners when DOM is ready
window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('internal-links')
    .addEventListener('click', e => {
      e.preventDefault() // prevent jump to internal anchor
      if (e.target && e.target.dataset && e.target.dataset.scrollTo) {
        document.querySelector(e.target.dataset.scrollTo)
          .scrollIntoView({behavior: 'smooth', block: 'center'})
      }
    })
})
