const express = require('express')
const app = express()
const connectDB = require('./db/connect.js')
const notFound = require('./middleware/not-found.js')
const errorHandler = require('./middleware/error-handler.js')
require('dotenv').config()

const port = process.env.PORT || 3000
const url = process.env.MONGO_URI

app.get('/', (req, res) => {
    res.status(200).send('<h1>Store API</h1><a href="/api/v1/products">products</a>');
})

const router = require('./routes/router.js')
app.use('/api/v1/products', router);
app.use(errorHandler);
app.use(notFound);

const start =  async () => {
    try{
        await connectDB(url);
        console.log("Connected to the DB...");
        app.listen(port, () => {
            console.log(`Server is listening on the port ${port}...`);
        })
    }
    catch(err){
        console.log(err);
    }
}
start()