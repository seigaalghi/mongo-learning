const mongoose = require('mongoose')

const brandLaptopSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    year : {
        type : Number,
        required : true
    }
})

module.exports = BrandLaptop = mongoose.model('laptopBrand', brandLaptopSchema)