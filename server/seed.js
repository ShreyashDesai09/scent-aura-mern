const mongoose = require('mongoose');
const Product = require('./models/Product'); 

const MONGO_URI = 'mongodb://127.0.0.1:27017/scentaura';

const seedData = [
    {
        name: "Ocean Mist",
        price: 3500,
        description: "A fresh, breezy scent for daily wear.",
        fullDescription: "Ocean Mist captures the essence of the coast with notes of sea salt, citrus, and sage.",
        thumbnail: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=500",
        images: ["https://images.unsplash.com/photo-1541643600914-78b084683601", "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539"],
        sizes: ["50ml", "100ml"],
        reviews: []
    },
];

mongoose.connect(MONGO_URI)
    .then(async () => {
        console.log("Connected to MongoDB...");
        await Product.deleteMany({});
        console.log("Existing products cleared from the database.");
        await Product.insertMany(seedData);
        console.log("Database Seeded with 5 Perfumes!");
        process.exit();
    })
    .catch(err => console.log(err));
