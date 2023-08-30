# MERN-STACK-E-Commerce-Website
<p>Welcome to the documentation for our E-commerce website named <b>"Lets Shop Pk"</b> built using the MERN (MongoDB, Express, React, Node.js) stack. This application features both guest/user and admin panels to facilitate seamless online shopping and store management. Below, you'll find essential information to set up, run, and customize the project.</p>
 
 # Hosting URL
 https://real-jade-squirrel-fez.cyclic.app

# API Endpoints
<b>1) Categories</b>
   /api/get-all-categories<br>
   /api/get-category-by-id<br>
   /api/get-category-by-name<br>
   /api/add-category<br>
   /api/update-category<br>
   /api/delete-category<br>

 <b>2) Brands</b>
   /api/get-all-brands<br>
   /api/get-brand-by-id<br>
   /api/get-brand-by-name<br>
   /api/add-brand<br>
   /api/update-brand<br>
   /api/delete-brand<br>

  <b>3) Products </b>
   /api/get-all-products<br>
   /api/get-product-by-id<br>
   /api/get-product-by-category<br>
   /api/get-product-by-brand<br>
   /api/add-products<br>
   /api/update-product<br>
   /api/delete-product<br>

 <b>4) Orders</b>
   /api/create-order<br>
   /api/get-all-orders<br>
   /api/order-by-id/:_id<br>

 <b>5)Users</b>
   /api/signup<br>
   /api/login<br>
   /api/get-all-users<br>
   /api/get-users-by-id<br>
   /api/get-users-by-email<br>
   /api/update-user<br>
   /api/delete-users<br>  

# Features:
<h3>Introduction</h3>

<p>Our E-commerce website is designed to provide a user-friendly online shopping experience for customers and efficient management tools for administrators. The project is divided into three main parts: the guest/visitor interface, the user interface and the admin panel.</p>

<p><b>Guest Interface:</b></p>

<p><b>User Interface:</b></p>
Browse products by category.<br>
Browse products by brands.<br>
View product details, images, and reviews.<br>
Add products to the cart and proceed to checkout.<br>


<p><b>Admin Panel:</b></p>

Add and delete products.<br>
Monitor and process orders.<br>

# Prerequisites
Node.js and npm installed.<br>
MongoDB instance or connection URI.<br>
Basic knowledge of the MERN stack.<br>


# Installation
Clone this repository: git clone https://github.com/Maria-Siddiqui-Ned/MERN-STACK-E-Commerce-Project.git<br>
Navigate to the project folder: cd e-commerce-website<br>
Install server dependencies: npm install<br>
Navigate to the client folder: cd client<br>
Install client dependencies: npm install<br>

# Configuration
Create a .env file in the root directory with the following variables:<br>
SERVER_PORT=<server-port><br>
NODE_ENV=<development/production><br>
MONGO_URL=<mongodb-connection-uri><br>
JWT_SECRET=<your-secret-key><br>

# Usage
Start the server: npm run dev<br>

# Contributing
We welcome contributions to enhance the project.<br>

Feel free to contact us for any questions or assistance.<br>
Thank you for using our E-commerce website  <b>"Lets Shop Pk"</b> built on the MERN stack! We hope it serves as a solid foundation for your online business.<br>

