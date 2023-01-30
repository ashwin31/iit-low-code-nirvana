# Low Code Nirvana

[![RunCode](https://runcode-app-public.s3.amazonaws.com/images/dark_btn.png)](https://runcode.io/)

Product API 

This is a Node.js Express app that serves a list of products to the Bubble frontend. The app provides endpoints for the CRUD operations of products. 

Getting Started 

These instructions will get you a copy of the project up and running on runcode.io for development and testing purposes. 

Click on the “Open in RunCode” button in https://github.com/parentheseslabs/iit-low-code-nirvana/ to launch the basic express app that you can work on. 

Now, you can see the workspace in your runcode dashboard. 

You can share/start/stop/delete it. 

Every workspace is a vscode in the browser, you can install, configure, and run your code in the vscode terminal. 

You need to run the code with “npm run start” and then you can see the output in this format https://<port>-<workspace_domain>/ for example if your workspace domain is fancy-sunset-87165010.eu-ws3.runcode.io and you are running the code on port 3000 then your output will be on https://3000-fancy-sunset-87165010.eu-ws3.runcode.io 

The boilerplate code having basic routes, you need to write complete code. 

You can use “thunder client” (vscode extension) or postman to test the API 

If you have any questions about runcode, get in touch with community support at https://discord.com/invite/runcode/ 

API Endpoints 

The following endpoints are available for the app: 

GET /products: Returns a list of all products 

GET /products/:id: Returns a single product with specified id 

POST /products: Creates a new product 

PUT /products/:id: Updates a product with the specified id 

DELETE /products/:id: Deletes a product with the specified id 

Built With 

Node.js - JavaScript runtime 

Express - Web framework for Node.js 

npm - Dependency management 

 

Json data link https://jsonblob.com/1069249464195366912. This is a sample data. Feel free to use your own data if you wish to. 

Final Hackathon day 

Making a Bubble.io Frontend- 

User persona- 

Admin 

User 

Admin- Signup/ Login redirects to landing page which displays the list of products and the quantities in which they are available.  The page will reflect the number of products available in the inventory. 

From this page 

They can create a product  

Edit the product (Quantity and description) 

Delete a product 

Any changes in the bubble app should be able to change the original database 

Customer- 

After login/ Sign up page the customer can view all the product listings with the real time quantity and description. They can add products into a cart (more than one) and order the product (No need to create workflows for product ordering).  

A customer order should be able to decrease the quantity of product in the original inventory. 

Submission- 

The submission links for viewing the platform has to be generated from bubble.io nd shared along with the username and password required to view the platform.
