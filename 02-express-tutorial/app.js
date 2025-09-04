const express = require('express')
const server = express()

const logger = (req, res, next) =>{
    const method = req.method;
    const url = req.url;
    const year = new Date().getFullYear();
    console.log(method, url, year);
    next();
}

server.get('/', logger, (req, res) =>{
    res.send("Home");
})

server.get('/about', logger, (req, res)=>{
    res.send("About")
})

server.listen(5000, () => {
    console.log("server is listening on the port 5000")
})