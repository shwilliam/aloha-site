# Aloha site

A simple one-page website made without build tools, styled to reflect the following mockups:

<img alt="Mobile mockup" src="https://user-images.githubusercontent.com/38357771/56353306-f5915d80-6185-11e9-9416-f301414af239.png" height="400px">
<img alt="Tablet mockup" src="https://user-images.githubusercontent.com/38357771/56353307-f5915d80-6185-11e9-9cb0-0637c37b261a.png" height="400px">
<img alt="Desktop mockup" src="https://user-images.githubusercontent.com/38357771/56353304-f4f8c700-6185-11e9-8cf2-cc714f5654a0.png" height="400px">
<img alt="Desktop stretch mockup" src="https://user-images.githubusercontent.com/38357771/56353305-f4f8c700-6185-11e9-9574-0c143af1596f.png" height="400px">

## Styling

This project uses a [BEM](http://getbem.com/introduction/)-ish approach when it comes to styling, with several exceptions. The project makes use of a CSS reset for a general, low-specificity reset of common cross-browser/CSS issues, as well as a few utility classes (eg. for layout containers & text colors). Modifier classes have also been used within their element for convenience, as opposed to on the same element, for example when styling a part of single heading tag.

## Interactivity

The 'Add to Cart' buttons push an object with the target product's details into an array that is persisted with local storage. When a product is added, the cart icon in the site header will update to reflect the amount of products in the cart.
