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

app.post('/products/:id/review' , async(req,res) => {
    try{
        const {user , rating , comment} = req.body;
        const productReview = await Product.findById(req.params.id);
        
        if(!productReview)
            return res.status(404).json({message : 'PRODUCT REVIEW NOT FOUND'});
        
        const newReview = {user , rating , comment};
        productReview.reviews.push(newReview);

        await productReview.save();
        res.json({message : "REVIEW ADDED SUCCESSFULLY" , review : newReview});
    }
    catch(err)
    {
        res.status(500).json({message: "ERROR ADDING REVIEW TO PRODUCT | NO SUCH PRODUCT FOR ADDING REVIEW" , error : err.message});
    }
})

const PORT = process.env.PORT || 5000;
app.listen(PORT , () => {
    console.log(`SERVER IS RUNNING ON PORT ${PORT}...`);
    console.log(`CHECK SERVER RUNNUNG AT URL : http://localhost:${PORT}`);
})

