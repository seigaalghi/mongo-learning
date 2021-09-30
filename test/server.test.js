const app = require("../server");
const mongoose = require("mongoose");
const BrandLaptop = require("../models/BrandLaptop");
const supertest = require('supertest')

beforeEach((done) => {
  mongoose.connect(
    "mongodb://localhost:27017/JestDB",
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => done()
  );
});

afterEach((done) => {
  mongoose.connection.db.dropDatabase(() => {
    mongoose.connection.close(() => done());
  });
});

test("GET /api/v1/brand", async()=>{
    const brand = await BrandLaptop.create({ name : "MSI", year : 2004 })

    await supertest(app).get("/api/v1/brand")
    .expect(200)
    .then((response) => {
      // Check type and length
      expect(Array.isArray(response.body.data)).toBeTruthy();
      expect(response.body.data.length).toEqual(1);

      // Check data
      expect(response.body.data[0]._id).toBe(brand.id);
      expect(response.body.data[0].name).toBe(brand.name);
      expect(response.body.data[0].year).toBe(brand.year);
    });
})

test("POST /api/v1/brand", async()=>{
  const data = { name : "MSI", year : 2004 };

  await supertest(app).post("/api/v1/brand", )
  .send(data)
  .expect(201)
  .then((response) => {
    // Check type and length
    expect(typeof(response.body.data) == "object").toBeTruthy();

    // Check data
    expect(response.body.data.name).toBe(data.name);
    expect(response.body.data.year).toBe(data.year);
  });
})