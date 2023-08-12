const mongoose = require("mongoose")
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: false
    },
    price: {
        type: Number,
        require: true
    },
    stock: {
        type: Number,
        require: true
    },
    imageUrl: {
        type: String,
        require: false
    },
})

const Product = mongoose.model('product', productSchema)
module.exports = Product