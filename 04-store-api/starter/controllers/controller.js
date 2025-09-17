const prodTable = require('../models/product')

const getAllProductsStatic = async(req, res) => {
    const products = await prodTable.find({featured: true, name: "vase table"});
    res.status(200).json({msg: products, nbHits: products.length});
}

const getAllProducts = async(req, res) => {
    const { featured } = req.query;
    const queryObj = {};
    if(featured){
        queryObj.featured = featured === 'true' ? true : false;
    }
    //throw new Error("Something went wrong");
    const products = await prodTable.find(queryObj);
    res.status(200).json({msg: products});
}

const getProduct = async(req, res) => {
    const id = req.params.id;
    const product = await prodTable.findOne({_id:id});
    if(!product){
        console.log(`cannot find the product with id: ${id}`);
    }
    // res.status(200).json({msg:"dummy product"});
    res.status(200).json({msg: product});
}

module.exports = {getAllProductsStatic, getAllProducts, getProduct};