const BrandLaptop = require("../models/BrandLaptop");
const Laptop = require("../models/Laptop");

module.exports = {
  create: async (req, res) => {
    const body = req.body;
    try {
      const brand = await BrandLaptop.create(body);
      return res.status(201).json({
        status: "success",
        message: "Data saved to the database successfully",
        data: brand,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        status: "error",
        message: "Internal Server Error",
      });
    }
  },
  readAll: async (req, res) => {
    try {
      const brands = await BrandLaptop.find().populate("laptops");
      return res.status(200).json({
        status: "success",
        message: "Data retrieved successfully",
        data: brands,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        status: "error",
        message: "Internal Server Error",
      });
    }
  },
  search: async (req, res) => {
    const keyword = req.params.keyword;
    try {
      const laptop = await Laptop.find({ name: { $regex: new RegExp(keyword, "i") } });
      const laptopIds = laptop.map((e) => e.id);
      const brand = await BrandLaptop.find({ laptops: { $in: laptopIds } }).populate("laptops");

      res.status(200).json({
        status: "success",
        data: brand,
      });
    } catch (error) {
      console.log(error);
    }
  },
};