

Responsive Shopping Cart App (React + CSS)
A fully responsive shopping cart application built using React and vanilla CSS. It allows users to browse a list of products, add them to the cart, adjust quantities, and unlock a free gift when a purchase threshold is met.

# Features

1. Add products to the cart with adjustable quantities

2. Real-time subtotal calculation

3. Automatically adds a free gift when subtotal reaches or exceeds $1000

4. Removes the free gift if subtotal goes below the threshold

5. Displays a progress bar showing how much more is needed for the gift

6. Responsive layout for mobile, tablet, laptop, and TV using media queries

7. Clean, user-friendly interface with minimalistic styling

# Project Structure :

shopping-cart-app/
│── public/
│── src/
│   ├── components/
│   │   ├── ProductList.js
│   │   ├── Cart.js
│   │   ├── ProgressBar.js
│   ├── styles/
│   │   ├── styles.css
│   ├── App.js
│   ├── index.js
│── package.json
│── README.md


Products Data

const PRODUCTS = [
  { id: 1, name: "Laptop", price: 500 },
  { id: 2, name: "Smartphone", price: 300 },
  { id: 3, name: "Headphones", price: 100 },
  { id: 4, name: "Smartwatch", price: 150 },
  { id: 99, name: "Wireless Mouse", price: 0 }, // Free gift
];

const THRESHOLD = 1000;


# How to Run Locally

 Clone the Repository

git clone https://github.com/bhanu100141/shopping-cart-app
cd shopping-cart-app

# Install Dependencies

npm install

# Start the App

npm start
The app will open in your browser at http://localhost:3000.

# Technologies Used
React (via create-react-app)

Vanilla CSS for styling

Flexbox and media queries for responsive layout

# Responsive Design
Media queries are used to ensure the layout looks good across devices:

max-width: 768px for tablets

max-width: 480px for mobile phones

Wide screen support for smart TVs and desktops

# Free Gift Logic
If subtotal >= $1000, a "Wireless Mouse" is automatically added to the cart.

# The message changes to:

🎉 Congratulations! You've unlocked a free gift!
If the subtotal drops below $1000, the gift is removed and the progress bar appears again.

# Progress Bar Logic
Shows remaining amount to reach the threshold:

Spend $[X] more to unlock a free gift!
Updates in real-time based on cart changes

# License
This project is open source and available under the MIT License.

# Acknowledgments
Thanks to the open-source community for making React and CSS awesome!

