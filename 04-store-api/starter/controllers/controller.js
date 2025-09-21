const prodTable = require('../models/product')

const getAllProductsStatic = async(req, res) => {
    const products = await prodTable.find({price:{$gt: 30}}).sort('price').select("name price company rating");
    res.status(200).json({msg: products, nbHits: products.length});
}

const getAllProducts = async(req, res) => {
    const { featured, company, name, sort, fields, numericfilters} = req.query;
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
    if(numericfilters){
        const operatorMap = {
            '>':'$gt',
            '>=':'$gte',
            '=':'$eq',
            '<':'$lt',
            '<=':'$lte',
        }
        const RegExp = /\b(>|>=|<|<=|=)\b/g;
        let result = numericfilters.replace(RegExp, (match) => `-${operatorMap[match]}-`);
        const options = ['price', 'rating'];
        result = result.split(',').forEach((str) => {
            const [field, operator, value] = str.split('-');
            if(options.includes(field)){
                queryObj[field] = {[operator]:Number(value)}
            }
        })
        console.log(queryObj);
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


    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const skip = (page-1)*limit;
    products = products.skip(skip).limit(limit);
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