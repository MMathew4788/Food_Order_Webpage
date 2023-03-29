# Food_Order_Webpage

## Project Description
Mathew's Food Ordering Webpage, where you can view different dishes from two different cuisines.
You can add the dish in the cart, edit the cart items and finally order them.
On submitting the cart you will be promted to a checkout form.

## Technologies Used
- Tailwind <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwind" width="40" height="40"/><br>
- React <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/><br>
- Redux <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="redux" width="40" height="40"/><br>
- React-Router 
- Firebase  <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="firebase" width="40" height="40"/><br>
- Stripe


## Getting Started

### Stripe Integration
This project integrates Stripe for payment processing. When you submit your cart, you will be prompted to enter your payment information using the Stripe checkout form.

To use the Stripe integration, you will need to add your Stripe secret API key to the `STRIPE_SECRET_KEY` environment variable in the .env file located in the server folder, and your Stripe publishable key to the `REACT_APP_STRIPE_PUBLIC_KEY` environment variable in the root directory .env file. You can obtain your Stripe API key from your Stripe account dashboard.

### Runing the client side code
- Clone the repository to your local machine using `git clone`.
- Navigate to the project directory `cd Food_Order_Webpage`
- Install the dependencies using `npm install`
- To run the client-side code, run: `npm start`

This command runs the app in development mode. Open http://localhost:3000 to view it in your browser. The page will reload automatically when you make changes to the code.

### Runing the server side code
- Click on the New Terminal option.
- Navigate to the server folder `cd server`.
- Install the dependencies using `npm install`.
- To run the server-side code, run: `npm start`

This command starts the server and listens for incoming requests. The server should now be running on http://localhost:8282.

## Credits

The images used in this webpage are from <a href="https://www.pexels.com/creative-commons-images/" target="_blank">Pexels</a>, a source of high-quality free stock photos under the Creative Commons license.
