const express = require('express');
const mongoose = require('mongoose');
const productRoute = require('./routes/product.route.js');
const Product = require('./models/product.model.js');
const app = express();

//midleware configurations
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//routes
app.use('/api/products', productRoute);




//connecting to mongodb and testing for successfull connection
mongoose.connect("mongodb+srv://aleckipchumba:ud8qVk1k2WMxYfx6@products.t79bp.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Products")
    .then(() => {
        console.log('Connection successfull.');
        //testing if server is listening on ports
        app.listen(3000, () => {
            console.log('Listening on port 3000...');
        });
    })
    .catch(() => {
        console.log('Connection failed!');
    });