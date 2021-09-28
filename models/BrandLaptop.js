const mongoose = require('mongoose')

const brandLaptopSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    year : {
        type : Number,
        required : true
    },
    laptops : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "laptop"
        }
    ]
})

module.exports = BrandLaptop = mongoose.model('laptopBrand', brandLaptopSchema)