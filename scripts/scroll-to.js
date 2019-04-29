'use strict'

// set up listeners when DOM is ready
window.addEventListener('DOMContentLoaded', () => {
  // query DOM for internal links
  document.getElementById('internal-links')
    .addEventListener('click', e => {
      e.preventDefault() // prevent jump to internal anchor
      // click target is a button
      if (e.target && e.target.dataset && e.target.dataset.scrollTo) {
        document.querySelector(e.target.dataset.scrollTo)
          .scrollIntoView({behavior: 'smooth', block: 'center'})
      }
    })
})
