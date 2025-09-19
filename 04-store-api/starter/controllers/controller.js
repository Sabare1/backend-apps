const prodTable = require('../models/product')

const getAllProductsStatic = async(req, res) => {
    const products = await prodTable.find({}).select("name price company rating");
    res.status(200).json({msg: products, nbHits: products.length});
}

const getAllProducts = async(req, res) => {
    const { featured, company, name, sort, fields } = req.query;
    const queryObj = {};
    if(featured){
        queryObj.featured = featured === 'true' ? true : false;
    }
    if(company){
        queryObj.company = company;
    }
    if(name){
        queryObj.name = {$regex:name, $options:'i'};
    }
    let products = prodTable.find(queryObj);
    if(sort){
        const sortList = sort.split(',').join(' ');
        products = products.sort(sortList);
    }
    else{
        products = products.sort("createdAt");
    }

    if(fields){
        const feildsList = fields.split(',').join(' ');
        products = products.select(feildsList);
    }
    const result = await products;
    res.status(200).json({msg: result, nbHits: result.length});
}

const getProduct = async(req, res) => {
    const id = req.params.id;
    const product = await prodTable.findOne({_id:id});
    if(!product){
        console.log(`cannot find the product with id: ${id}`);
    }
    res.status(200).json({msg: product});
}

module.exports = {getAllProductsStatic, getAllProducts, getProduct};