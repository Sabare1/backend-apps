const express = require('express');
const app = express();

const port = 3000;

app.get('/', (req, res) =>{
    res.status(200).json({success: true, msg: "Hello"});
})

app.listen(port, ()=> {
    console.log(`Server is listening on the port ${port}...`);
})