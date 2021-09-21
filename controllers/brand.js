const BrandLaptop = require('../models/BrandLaptop')

module.exports = {
    create : async (req, res)=>{
        const body = req.body
        try {
            const brand = await BrandLaptop.create(body)
            return res.status(201).json({
                status : "success",
                message : "Data saved to the database successfully",
                data : brand
            })
        } catch (error) {
            console.log(error)
            return res.status(500).json({
                status : "error",
                message : "Internal Server Error"
            })
        }
    },
    readAll : async (req,res)=>{
        try {
            const brands = await BrandLaptop.find()
            return res.status(200).json({
                status : "success",
                message : "Data retrieved successfully",
                data : brands
            })
        } catch (error) {
            console.log(error)
            return res.status(500).json({
                status : "error",
                message : "Internal Server Error"
            })
        }
    }
}