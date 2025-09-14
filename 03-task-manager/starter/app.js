const express = require('express');
const app = express();
const connectDB = require('./db/connect.js')
const router = require('./routes/routes.js')
require('dotenv').config()

app.use(express.json());
app.use('/api/v1/tasks', router);
app.use(express.static('./public'));

const port = 3000;

const start = async() => {
    try{
        await connectDB(process.env.mongoDB_url);
        console.log("connected to DB...");
        app.listen(port, ()=> {
            console.log(`Server is listening on the port ${port}...`);
        })
    }
    catch(err){
        console.log(err);
    }
}
start()