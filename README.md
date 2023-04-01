Process
[x] Create a new CRA app.

[x] Create a Header that has a Nav.

[x] Create a Cart Icon component and position this next to your Nav. This Cart Icon component will have an overlay that displays the number of items in the cart.

[x] Create a Footer component

[x] Create a Layout component that has your Header and Footer.

Create the other pages:
[x] ContactPage

[x] ProductPage

[x] CheckoutPage

[x] CheckoutSuccessPage

[x] Add React Router and route to each of the pages. The ProductPage page will be using a dynamic segment.

[x] Fetch the list of products on the Homepage and store this as a state.

[x] On the homepage, loop through the products and display a Product component for each of the values. This Product component should look like a product card. Each Product component will have a View product button which will link to the ProductPage page.

[x] The homepage should have a lookahead/auto-complete Search bar component. Typing values in the search bar should display products where the title matches the search input. Clicking on an item should take the user to the ProductPage page. Tip: Filter the user input and then display products that match the input.

[x] On the ProductPage, use the ID of the product as the params for the dynamic segment. Add the product details as mentioned in the brief.

[x] Create a cart state. When the Add to cart button on the ProductPage is clicked, add the product to the cart.

[x] Clicking on the Cart Icon component will take the user to the CheckoutPage page.

[x] The CheckoutPage must list all of the products in the cart, show a total at the bottom and a Checkout button.

[x] Clicking the Checkout button will take the user to the CheckoutSuccessPage.

[x] The CheckoutSuccessPage should display that the order was successful and clear the cart. There should be a link to go back to the store.

On the ContactPage, create the following inputs with the following requirements.

[x] Full name (Minimum number of characters is 3, required)

[x] Subject (Minimum number of characters is 3, required)

[x] Email (Must be a valid email address, required)

[x] Body (Minimum number of characters is 3, required)

[x] Submit button

[x] console.log the data from the form once validation requirements are met.

[ ] Once your project is done, deploy it to Netlify.

Remember to:

[x] Design loader
[x] Design error message
[] Test
[] Check responsiveness
[] Update readme.md
