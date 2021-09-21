const mongoose = require('mongoose')

const laptopSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true
    },
    stock : {
        type : Number,
        required : true
    },
    brand : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'laptopBrand',
        required : true,
        index : true
    }
})

module.exports = Laptop = mongoose.model("laptop", laptopSchema)