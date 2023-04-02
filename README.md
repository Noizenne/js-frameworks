# Dings
## An E-Commerce site built with React
![image](https://user-images.githubusercontent.com/73695367/229354674-2b3d2670-3143-4ca4-97b3-c39f93507f5c.png)

This is an assignment where I built an e-commerce website built with React..

On this site, I have used:
* React hook form and yup for forms
* Styled components for styling
* Zustand for state management

## How to use
* Clone the repo
* Commands to start with:
```npm i```
```npm run start```

## I built this project with:
<div align="left">
<a href="https://react.dev" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png" alt="React" height="50"/></a>
<a href="https://en.wikipedia.org/wiki/HTML5" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/html5-original-wordmark.svg" alt="HTML5" height="50" /></a>  
<a href="https://www.javascript.com/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/javascript-original.svg" alt="JavaScript" height="50" /></a>
<a href="https://sass-lang.com/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/sass-original.svg" alt="Sass" height="50" /></a>  
</div>

## Brief of assignment
The API you are using for this brief is: https://api.noroff.dev/api/v1/online-shop

You can find individual items by appending a product ID at the end of the API URL e.g. https://api.noroff.dev/api/v1/online-shop/f99cafd2-bd40-4694-8b33-a6052f36b435

You are tasked with build out the following pages for an eCom store:

* Homepage
* Individual product page
* Cart page
* Checkout success page

The Homepage should have a list of all the products. There should be a look-ahead search bar that filters products when typing in a product name. Clicking on a product should take a user to an individual product page.

You pages should use a <Layout> component that contains a header and footer. The header should contain a nav bar as well as a Cart icon component that acts as a button as well as displays the current number of items in the cart.

The individual product page should display data for a single product. There should be an Add to cart button which, upon clicking, adds the product to the cart. The product page should display the title of the product, the description and the image. There should also be reviews listed for the product, if there are any. You should use the discountedPrice property to display the price of the product. If there is a difference between the discountedPrice and price properties then that means there is a discount for that product. Calculate what this discount is and display it on the page.

Clicking on the Cart icon will load the Cart page, which will list all of the products as well as a total. The Cart page will have a Checkout button. Clicking this Checkout button then goes to a Checkout success page.

The Checkout success page will display a message to the user notifying them that their order was successful. There should also be a link that lets a user go back to the store. The cart must be cleared if the user gets to the Checkout success page.

There will be a contact page which will contain a contact form with the following fields. There must be form validation:

Full name (Minimum number of characters is 3, required)
Subject (Minimum number of characters is 3, required)
Email (Must be a valid email address, required)
Body (Minimum number of characters is 3, required)
You will be using React Router to switch between pages.

Your design should be responsive. You are welcome to use a CSS Framework, however, you’re encouraged to design from scratch and use styled-components or CSS Modules.

You are not required to use TypeScript.

Your code is expected to be clean and well-formatted.

## Process
- [x] Create a new CRA app.

- [x] Create a Header that has a Nav.

- [x] Create a Cart Icon component and position this next to your Nav. This Cart Icon component will have an overlay that displays the number of items in the cart.

- [x] Create a Footer component.

- [x] Create a Layout component that has your Header and Footer.

Create the other pages:

- [x] ContactPage

- [x] ProductPage

- [x] CheckoutPage

- [x] CheckoutSuccessPage


- [x] Add React Router and route to each of the pages. The ProductPage page will be using a dynamic segment.

- [x] Fetch the list of products on the Homepage and store this as a state.

- [x] On the homepage, loop through the products and display a Product component for each of the values. This Product component should look like a product card. Each Product component will have a View product button which will link to the ProductPage page.

- [x] The homepage should have a lookahead/auto-complete Search bar component. Typing values in the search bar should display products where the title matches the search input. Clicking on an item should take the user to the ProductPage page. Tip: Filter the user input and then display products that match the input.

- [x] On the ProductPage, use the ID of the product as the params for the dynamic segment. Add the product details as mentioned in the brief.

- [x] Create a cart state. When the Add to cart button on the ProductPage is clicked, add the product to the cart.

- [x] Clicking on the Cart Icon component will take the user to the CheckoutPage page.

- [x] The CheckoutPage must list all of the products in the cart, show a total at the bottom and a Checkout button.

- [x] Clicking the Checkout button will take the user to the CheckoutSuccessPage.

- [x] The CheckoutSuccessPage should display that the order was successful and clear the cart. There should be a link to go back to the store.

On the ContactPage, create the following inputs with the following requirements.

- [x] Full name (Minimum number of characters is 3, required)

- [x] Subject (Minimum number of characters is 3, required)

- [x] Email (Must be a valid email address, required)

- [x] Body (Minimum number of characters is 3, required)

- [x] Submit button

- [x] console.log the data from the form once validation requirements are met.

- [x] Once your project is done, deploy it to Netlify.

- [x] Delivery
