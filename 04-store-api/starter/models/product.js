const mongoose = require('mongoose');

const storeSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "Product name is required"],
    },
    price:{
        type: Number,
        required: [true, "Product price is required"],
    },
    featured:{
        type: Boolean,
        default: false
    },
    rating:{
        type: Number,
        default: 4.5
    },
    createdAt:{
        type: Date,
        default: Date.now()
    },
    company:{
        type: String,
        enum: {
            values: ['ikea', 'marcos', 'caressa', 'liddy'],
            message: '{VALUE} is not supported'
        }
    }
});

module.exports = mongoose.model('products', storeSchema);