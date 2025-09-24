const express = require('express');
const app = express();

require('dotenv').config()
const port = process.env.PORT || 3000;

const connectDB = require('./db/connectDB.js');
const url = process.env.MONGO_URI;

const start = () => {
    try {
        app.listen(port, ()=> {
            connectDB(url);
            console.log(`connected to the DB...`)
            console.log(`Server is listening on the port ${port}...`);
        })
    } catch (error) {
        console.log(error);
    }
}
start();