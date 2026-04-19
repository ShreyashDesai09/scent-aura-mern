const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const Product = require("./models/Product");

const app = express();

app.use(cors());
app.use(express.json());

const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/scentaura';

mongoose.connect(MONGO_URI)
    .then(() => console.log("Connected to MongoDB..."))
    .catch(err => console.log("Error Occoured While Connection To DB . ERROR : " , err));

app.get('/products' , async (req,res) => {
    try{
        const products = await Product.find();
        res.json(products);
    }
    catch(err)
    {
    res.status(500).json({message: "ERROR FETCHING PRODUCTS DATA | NO PRODUCTS" , error : err.message});
    }
})

app.get('/products/:id' , async  (req,res) => {
    try{
        const productId = await Product.findById(req.params.id);
        if(!productId)
            return res.status(404).json({message : "PRODUCT NOT FOUND"});
        res.json(productId);
    }
    catch(err)
    {
        res.status(500).json({message: "ERROR FETCHING PRODUCT DATA BY ID | NO SUCH PRODUCT" , error : err.message});
    }
});

// server.js
app.post('/products/:id/reviews', async (req, res) => {
    try {
        const { user, rating, comment } = req.body;
        const product = await Product.findById(req.params.id);
        
        if (!product) return res.status(404).send("Product not found");

        const newReview = { user, rating: Number(rating), comment };
        product.reviews.push(newReview);
        
        await product.save();
        res.status(201).json(newReview);
    } catch (err) {
        res.status(500).send("Server Error");
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT , () => {
    console.log(`SERVER IS RUNNING ON PORT ${PORT}...`);
    console.log(`CHECK SERVER RUNNUNG AT URL : http://localhost:${PORT}`);
})

