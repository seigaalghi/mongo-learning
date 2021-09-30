const mongoose = require("mongoose");

module.exports = async (cb) => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {});
    console.log("Connected to MongoDB");
    cb()
  } catch (error) {
    console.log(error);
  }
};
