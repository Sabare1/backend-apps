const express = require("express");
const server = express();
const { products } = module.require('./data.js')

server.get('/', (req, res) =>{
    res.send('<h1>Home page</h1><a href="/api/products">products</a>')
})

server.get('/api/products', (req, res) => {
    const newProducts = products.map((product)=> {
        const {id, name, image} = product
        return {id, name, image}
    })
    res.json(newProducts);
})

// server.get('/api/products/:productId', (req, res) => {
//     console.log(req.params);
//     const {productId} = req.params; 
//     const prod = products.find((product) => {return product.id === Number(productId)})
//     if(!prod){
//         res.status(404).send("<h1>We can't seem to find the product you're looking for!</h1><a href='/'>Home page</a>")
//     }
//     res.json(prod);
// })

server.get('/api/products/query', (req, res) => {
    const {search, limit} = req.query
    let newProds = [...products]
    if(search){
        newProds = products.filter((product)=>{
            return product.name.charAt(0) === 'a';
        })
    }
    if(limit){
        newProds = products.filter((product) =>{
            return product.id <= Number(limit)
        })
    }
    res.json(newProds);
})

server.listen(5000, ()=>{
    console.log("server is listening on the port 5000...")
})