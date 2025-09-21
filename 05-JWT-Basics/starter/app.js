const express = require("express");
const app = express();
const errorHandler = require('./errors/error-handler.js');
const notFound = require('./errors/not-found.js');

const connectDB = require('./db/connect.js');
require('dotenv').config();
app.use(errorHandler);
app.use(notFound);

const url = process.env.MONGO_URI;
const port = process.env.PORT || 3000;

app.get('/', (req, res)=> {
    res.status(200).send("Home page");
})

const start = async() => {
    try{
        await connectDB(url);
        console.log('connected to the DB...');
        app.listen(port, () => {
            console.log(`server listening on the port ${port}...`)
        })
    }
    catch(err){
        console.log(err);
    }
}

start();