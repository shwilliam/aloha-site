# Aloha site

A simple one-page website made without build tools, styled to reflect the following mockups:

- [Mobile](https://user-images.githubusercontent.com/38357771/56353306-f5915d80-6185-11e9-9416-f301414af239.png)
- [Tablet](https://user-images.githubusercontent.com/38357771/56353307-f5915d80-6185-11e9-9cb0-0637c37b261a.png)
- [Desktop](https://user-images.githubusercontent.com/38357771/56353304-f4f8c700-6185-11e9-8cf2-cc714f5654a0.png)
- [Desktop (stretch)](https://user-images.githubusercontent.com/38357771/56353305-f4f8c700-6185-11e9-9574-0c143af1596f.png)

## Styling

This project uses a [BEM](http://getbem.com/introduction/)-ish approach when it comes to styling, with several exceptions. The site makes use of a CSS reset for a general, low-specificity reset of common cross-browser/CSS issues, as well as a few utility classes (eg. for layout containers & text colors). Modifier classes have also been used within their element for convenience, as opposed to on the same element, for example when styling a part of single heading tag.

If JavaScript is not enabled, an additional CSS file is loaded that corrects some styling and hides elements that depend on JS.

## Interactivity

Interactive elements are generally accessible with keyboard navigation, with an exception being the carousel that does not bring focused items into view. ARIA attributes have been used on several elements to communicate additional information about their functionality when necessary, and used to notify screen-reader users of changes to content.

A majority of this project's interactive functionality was required to be repeated across many elements. For these, delegated event handlers are used on container elements to listen & filter its events.

Internal links with smooth-scroll are achieved using the native `scrollIntoView` method on DOM elements. The 'Add to Cart' buttons push an object with the target product's details into an array that is persisted with local storage. When a product is added, the cart icon in the site header will update to reflect the amount of products in the cart. The mailing list form input is validated using both native HTML5 email validation and a JS validation that calls the input's `setCustomValidity` to display a native-style error message.
