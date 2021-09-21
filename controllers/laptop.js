const Laptop = require("../models/Laptop");

module.exports = {
  create: async (req, res) => {
    const body = req.body;
    try {
      const saveLaptop = await Laptop.create(body);
      const getLaptop = await Laptop.findById(saveLaptop.id).populate("brand", ["name", "year"]);
      return res.status(201).json({
        status: "success",
        message: "Data created successfully",
        data: getLaptop,
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
      const laptops = await Laptop.find().populate("brand", ["name", "year"]);
      return res.status(200).json({
        status: "success",
        message: "Data retrieved successfully",
        data: laptops,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        status: "error",
        message: "Internal Server Error",
      });
    }
  },
  readOne: async (req, res) => {
    const id = req.params.id;
    // id = 1asdase1231asda
    // id = Pavilion / Vivobook
    try {
      // const laptop = await Laptop.findById(id)  // Mengambil satu data dari database based on ID
      const laptop = await Laptop.findOne(id).populate("brand", ["name", "year"]);

      return res.status(200).json({
        status: "success",
        message: "Data retrieved successfully",
        data: laptop,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        status: "error",
        message: "Internal Server Error",
      });
    }
  },
  update: async (req, res) => {
    const name = req.params.id;
    const body = req.body;
    try {
      const updateLaptop = await Laptop.findOneAndUpdate({ name: name }, body, {
        returnOriginal: false,
      }).populate("brand", ["name", "year"]);
      return res.status(201).json({
        status: "success",
        message: "Data updated successfully",
        data: updateLaptop,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        status: "error",
        message: "Internal Server Error",
      });
    }
  },
  delete: async (req, res) => {
      const id = req.params.id
    try {
        const deleteLaptop = await Laptop.deleteOne({ name : id})
        if(!deleteLaptop.deletedCount){
            return res.status(404).json({
                status : "failed",
                message : "Data that you wanna delete is not found"
            })
        }
        return res.status(200).json({
            status : "success",
            message : "Data deleted successfully"
        })
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        status: "error",
        message: "Internal Server Error",
      });
    }
  },
};
