const mongoose = require('mongoose')

async function connectDB(url){
    try{
        await mongoose.connect(url);
    }
    catch(err){
        console.log(err);
    }
}

module.exports = connectDB;