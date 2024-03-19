const mongoose = require('mongoose');
const bcrypt = require ('bcrypt');


const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
       
    },
    description: {
        type: String,
        required: true,
       
    },
    price: {
        type: Number,
        required: true,
        
    },
    stock: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true,
        
    },
  

});

const productModel = mongoose.model('Products', productSchema);

module.exports = productModel;



