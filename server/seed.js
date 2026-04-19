const mongoose = require('mongoose');
const Product = require('./models/Product'); 

const MONGO_URI = 'mongodb://127.0.0.1:27017/scentaura';

const seedData = [
    {
        name: "Azure Intense",
        price: 3200,
        description: "A deep oceanic scent with hints of cedarwood.",
        thumbnail: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800&q=80",
        fullDescription: "Azure Intense captures the essence of the Mediterranean sea. It opens with refreshing bergamot and sea salt, transitioning into a heart of aromatic rosemary and sage.",
        images: [
            "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1557170334-a9632e77c6e4?auto=format&fit=crop&w=800&q=80"
        ],
        sizes: ["50ml", "100ml"],
        reviews: []
    },
    {
        name: "Midnight Musk",
        price: 4500,
        description: "Bold, mysterious, and perfect for evening wear.",
        thumbnail: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=800&q=80",
        fullDescription: "A sophisticated blend of black pepper, leather, and dark musk. Midnight Musk is designed for those who want to leave a lasting impression long after the sun goes down.",
        images: [
            "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1585232004423-244e0e6904e3?auto=format&fit=crop&w=800&q=80"
        ],
        sizes: ["100ml"],
        reviews: []
    },
    {
        name: "Velvet Rose",
        price: 2800,
        description: "Soft floral notes with a honey-sweet finish.",
        thumbnail: "https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?auto=format&fit=crop&w=800&q=80",
        fullDescription: "Velvet Rose is a modern take on a classic floral. Using hand-picked Damask roses and smoky oud wood, it provides a scent that is both feminine and powerful.",
        images: [
            "https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1615037512866-6873ff9cbb78?auto=format&fit=crop&w=800&q=80"
        ],
        sizes: ["30ml", "50ml", "100ml"],
        reviews: []
    },
    {
        name: "Golden Santal",
        price: 5200,
        description: "Warm sandalwood and cardamom for ultimate luxury.",
        thumbnail: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=80",
        fullDescription: "A unisex masterpiece. Golden Santal combines the creaminess of Australian sandalwood with the spicy kick of cardamom and iris. A true signature scent.",
        images: [
            "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1616190819551-3fd9a4a49c20?auto=format&fit=crop&w=800&q=80"
        ],
        sizes: ["100ml"],
        reviews: []
    },
    {
        name: "Citrus Bloom",
        price: 1900,
        description: "Freshly squeezed lemon and white jasmine.",
        thumbnail: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=800&q=80",
        fullDescription: "Start your day with a burst of energy. Citrus Bloom is a bright, uplifting fragrance that combines Sicilian lemon, orange blossom, and a light vanilla base.",
        images: [
            "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1563170351-be82bc888bb4?auto=format&fit=crop&w=800&q=80"
        ],
        sizes: ["50ml", "150ml"],
        reviews: []
    }
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
