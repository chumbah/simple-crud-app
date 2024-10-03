const express = require('express');
const router = express.Router();
const Product = require('./model/product.model.js');
const { createProduct, getProducts, getProduct, updateProduct, deleteProduct } = require('./controllers/product.controller.js');


router.post("./", createProduct);

router.get("/", getProducts);

router.get("/:id", getProduct);

router.put("/:id", updateProduct);

router.delete("/:id", deleteProduct);

module.exports = router;