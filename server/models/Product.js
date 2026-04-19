const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  
    name : String,
    price : Number,
    description : String,
    fullDescription : String,
    images : [String],
    thumbnail : String,
    sizes : [String],
    reviews: [
        {
            user: String,
            rating: Number,
            comment: String,
            date : {type : Date , default : Date.now}
        }
    ]
});

module.exports = mongoose.model('Product', productSchema);