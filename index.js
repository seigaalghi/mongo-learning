require('dotenv').config()
const express = require('express')
const app = express()
const port = 5000
const db = require('./database/db')
const route = require('./routes')

db()
app.use(express.json())
app.use("/api/v1", route)

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});