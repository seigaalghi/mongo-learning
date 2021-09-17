const mongoose = require("mongoose");

module.exports = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://laptopDB:laptop@cluster0.kkvri.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
      {}
    );
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
};
