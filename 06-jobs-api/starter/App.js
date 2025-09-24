const express = require('express');
const app = express();

require('dotenv').config()
const port = process.env.PORT || 3000;

const connectDB = require('./db/connectDB.js');
const url = process.env.MONGO_URI;

const errorHandleMiddleware = require('./middleware/error-handler.js');
const notFoundMiddleware = require('./middleware/not-found.js');

const authRoute = require('./routes/auth.js');
const jobsRoute = require('./routes/jobs.js');

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({msg:"jobs api"});
})

app.use('/api/v1/auth', authRoute);
app.use('/api/v1/jobs', jobsRoute);

app.use(errorHandleMiddleware);
app.use(notFoundMiddleware);

const start = () => {
    try {
        app.listen(port, async()=> {
            await connectDB(url);
            console.log(`connected to the DB...`)
            console.log(`Server is listening on the port ${port}...`);
        })
    } catch (error) {
        console.log(error);
    }
}
start();