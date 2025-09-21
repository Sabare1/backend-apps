const express = require("express");
const app = express();
require('dotenv').config();

const router = require('./routes/routes.js');
const errorHandler = require('./middlewares/error-handler.js');
const notFound = require('./middlewares/not-found.js');

app.use(express.json());
app.use(express.static('./public'))

app.use('/api/v1', router)

app.use(errorHandler);
app.use(notFound);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`server listening on the port ${port}...`)
})