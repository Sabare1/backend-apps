const express = require("express");
const server = express();

server.get('/',(req, res)=>{
    res.json([{name:"john"}, {name:"smilga"}])
})

server.listen(5000, ()=>{
    console.log("server is listening on the port 5000...")
})