const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');

// Read products from file data.json. The contents are available at https://jsonblob.com/1069249464195366912 

let product = [];
// Read the JSON file
fs.readFile('./data.json', 'utf-8', (err, data) => {
  if (err) throw err;

  // Parse the JSON data
 product = JSON.parse(data);
});

// Middleware to parse request bodies as JSON
app.use(express.json());

// Endpoint to retrieve all products
app.get('/products', (req, res) => {
  //Get a list of all products
  res.send("you need to send products list")
});

// Endpoint to retrieve a product by id
app.get('/products/:id', (req, res) => {
  //return the product with the specified id
  //Handle errors
});

// Endpoint to create a new product
app.post('/products', (req, res) => {
  //Create a new product and return the created product.
  //Handle errors while creating 
});

// Endpoint to update a product by id
app.put('/products/:id', (req, res) => {
  //update the specified product and return the same.
  //Handle errors.
});

// Endpoint to delete a product by id
app.delete('/products/:id', (req, res) => {
  //delete the specidfied product and return deleted product id
  //Handle errors like product not found.
});

// Start the server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});