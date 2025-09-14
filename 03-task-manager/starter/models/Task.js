const mongoose = require('mongoose');
const TaskSchema = mongoose.Schema({
    name:{
        type: String,
        required: [true, "Task is required"],
        maxlength: [30, "Task should be less than 30 characters"],
        trim: true
    }, completed:{
        type: Boolean,
        default: false
    } 
})

module.exports = mongoose.model('Task', TaskSchema);