const express = require('express')
const products = require('./models/product')
const app = express()
const connectDB = require('./db/connect.js')
require('dotenv').config()

const port = process.env.PORT || 3000
const url = process.env.MONGO_URI


app.listen(port, () => {
    connectDB(url);
    console.log("Connected to the DB...")
    console.log(`Server is listening on the port ${port}...`);
})
