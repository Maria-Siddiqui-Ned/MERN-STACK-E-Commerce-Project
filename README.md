# MERN-STACK-E-Commerce-Website
<p>Welcome to the documentation for our E-commerce website named <b>"Lets Shop Pk"</b> built using the MERN (MongoDB, Express, React, Node.js) stack. This application features both guest/user and admin panels to facilitate seamless online shopping and store management. Below, you'll find essential information to set up, run, and customize the project.</p>
 
 # Hosting URL
 https://real-jade-squirrel-fez.cyclic.app

# API Endpoints
<b>1) Categories</b><br>
   /api/get-all-categories<br>
   /api/get-category-by-id<br>
   /api/get-category-by-name<br>
   /api/add-category<br>
   /api/update-category<br>
   /api/delete-category<br>

 <b>2) Brands</b><br>
   /api/get-all-brands<br>
   /api/get-brand-by-id<br>
   /api/get-brand-by-name<br>
   /api/add-brand<br>
   /api/update-brand<br>
   /api/delete-brand<br>

  <b>3) Products </b><br>
   /api/get-all-products<br>
   /api/get-product-by-id<br>
   /api/get-product-by-category<br>
   /api/get-product-by-brand<br>
   /api/add-products<br>
   /api/update-product<br>
   /api/delete-product<br>

 <b>4) Orders</b><br>
   /api/create-order<br>
   /api/get-all-orders<br>
   /api/order-by-id/:_id<br>

 <b>5)Users</b><br>
   /api/signup<br>
   /api/login<br>
   /api/get-all-users<br>
   /api/get-users-by-id<br>
   /api/get-users-by-email<br>
   /api/update-user<br>
   /api/delete-users<br>  

# Features:
<h3>Favicon</h3>
<p>Having a favicon is a great addition to our website! This helps users quickly recognize our website among other tabs and bookmarks, enhancing our brand's visibility. Also it shows attention to detail and professionalism.</p>

<h3>Introduction</h3>
<p>Our E-commerce website is designed to provide a user-friendly online shopping experience for customers and efficient management tools for administrators. The project is divided into three main parts: the guest/visitor interface, the user interface and the admin panel.</p><br>


<p><b>Guest Interface:</b></p>
* Securely Signup to become Customer/User<br>
* Browse all categories.<br>
* Browse all brands.<br><br>

<p><b>User Interface:</b></p>
* Securely login<br>
* Browse all products.<br>
* Browse all categories.<br>
* Browse all brands.<br>
* Browse products by category.<br>
* Browse products by brands.<br>
* View product details i.e title, price, stock, brand, images, description and reviews.<br>
* Add products to the cart with quantity and proceed to checkout.<br><br>

<p><b>Admin Panel:</b></p>
* Add and delete products.<br>
* Add and delete categories.<br>
* Add and delete brands.<br>
* Monitor and process orders.<br>

# Prerequisites
Node.js and npm installed.<br>
MongoDB instance or connection URI.<br>
Basic knowledge of the MERN stack.<br>


# 🛠️ Installation
Clone this repository: git clone https://github.com/Maria-Siddiqui-Ned/MERN-STACK-E-Commerce-Project.git<br>
Navigate to the project folder: cd MERN-STACK-E-Commerce-Project<br>
Install server dependencies: npm install<br>
Navigate to the client folder: cd client<br>
Install client dependencies: npm install<br>

# Configuration
Create a .env file in the root directory with the following variables:<br>
SERVER_PORT<br>
MONGO_URL<br>
JWT_SECRET<br>
NODEMAILER_EMAIL<br>
NODEMAILER_PASSWORD<br>

# Usage
Start the server by npm run dev<br>

# Contributing
We welcome contributions to enhance the project.<br>

Feel free to contact us for any questions or assistance.<br>
Thank you for using our E-commerce website  <b>"Lets Shop Pk"</b> built on the MERN stack!<br>
We hope it serves as a solid foundation for your online business.<br>

