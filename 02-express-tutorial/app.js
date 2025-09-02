const express = require('express');
const path = require('path')
const server = express()
server.use(express.static("./public"))

server.get('/', (req, res)=>{
    res.status(200).sendFile(path.resolve(__dirname, "./navbar-app/index.html"))
})

server.all('*', (req, res)=>{
    res.send(`<h1>Page not found</h1><a href='/'>home page</a>`)
})

server.listen(5000, ()=>{
    console.log("server is listening on the port 5000...")
})