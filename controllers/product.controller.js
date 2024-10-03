const Product = require('./models/product.model.js');



//create a product controller
const createProduct = async (req, res) => {
    try {
        const products = await Product.create(req.body);
        res.status(200).json(products);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//get all products controller
const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    }
    catch {
        res.status(500).json({ message: error.message });
    }
};

//get a single product controller
const getProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    }
    catch {
        res.status(500).json({ message: error.message });
    }
};


//update controller
const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;

        const product = await Product.findByIdAndUpdate(id, req.body);

        //checking if the item exists
        if (!product) {
            return res.status(404).json({ message: "The product cannot be found!" });
        }
        const updatedProduct = await Product.findById(id);
        res.status(200).json({ updatedProduct });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//delete controller
const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);
        res.status(200).json({ message: "Product deleted successfully!" });
    }
    catch {
        res.status(500).json({ message: "Product is could not be found!" });
    }
};


module.exports = {
    createProduct,
    getProduct,
    getProducts,
    updateProduct,
    deleteProduct
};