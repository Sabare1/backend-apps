const mongoose = require('mongoose');

const conStr = "mongodb+srv://sabaregirivasan_db_user:GjscPhb8Aatg65MO@cluster0.lez22t3.mongodb.net/03-task-manager?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(conStr).then(() => console.log("Connected to the DB")).catch((err) => console.log(err));