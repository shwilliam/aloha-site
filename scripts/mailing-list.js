'use strict'

// set up listeners when DOM is ready
window.addEventListener('DOMContentLoaded', () => {
  // query DOM for mailing list form & input
  const formEl = document.getElementById('mailing-list')
  const inputEl = document.getElementById('email-input')

  // alert message on submit event listener
  formEl.addEventListener('submit', e => {
    e.preventDefault()
    alert('Thanks for subscribing!')

    const successEl = document.createElement('p')
    successEl.innerText = 'Thanks for subscribing!'
    successEl.classList.add('updates__success')
    formEl.parentNode.replaceChild(successEl, formEl)

    setTimeout(() => {
      successEl.style.opacity = 1
    }, 400)
  })

  // validate email on input
  inputEl.addEventListener('input', e => {
    switch (inputEl.validity.typeMismatch) {
      case true: // invalid email
        inputEl.setCustomValidity('Please make sure you provide a valid e-mail')
        break
      default:
        // valid email
        inputEl.value && inputEl.value.length < 10
          ? inputEl.setCustomValidity('Hmmm... That e-mail looks a bit short.')
          : inputEl.setCustomValidity('')
        break
    }
  })
})
