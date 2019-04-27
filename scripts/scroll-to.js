'use strict'

// avoid polluting window
{
  // set up listeners when DOM is ready
  window.addEventListener('load', initLinks)

  function initLinks() {
    // query DOM for internal links
    const linkEls = Array.from(document.querySelectorAll('[data-scroll-to]'))

    // add click event listeners
    linkEls.forEach(el => {
      el.addEventListener('click', () => {
        document.querySelector(el.dataset.scrollTo)
          .scrollIntoView({behavior: 'smooth', block: 'center'})
      })
    })
  }
}
