const express = require('express')
const server = express()
const logger = require('./logger')
const authorize = require('./authorize.js')
const morgan = require('morgan')
server.use(morgan('tiny'))

server.get('/', (req, res) =>{
    res.status(200).send("Home");
})

server.get('/about', (req, res)=>{
    res.status(200).send("About")
})

server.listen(5000, () => {
    console.log("server is listening on the port 5000")
})