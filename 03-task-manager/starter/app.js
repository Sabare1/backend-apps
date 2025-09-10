const express = require('express');
const app = express();
require('./db/connect.js')

const router = require('./routes/routes.js')

app.use(express.json());
app.use('/api/v1/tasks', router);

const port = 3000;

app.listen(port, ()=> {
    console.log(`Server is listening on the port ${port}...`);
})