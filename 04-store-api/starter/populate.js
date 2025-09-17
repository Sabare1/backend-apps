require('dotenv').config()

const connectDB = require('./db/connect.js');
const products = require('./models/product.js');
const productJson = require('./products.json');

const start = async () => {
    try{
        await connectDB(process.env.MONGO_URI);
        console.log("connected to DB...");
        await products.deleteMany();
        await products.create(productJson);
        process.exit(0);
    }
    catch(err){
        console.log(err);
        process.exit(1);
    }
}

start();