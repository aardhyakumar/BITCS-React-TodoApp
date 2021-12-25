const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//creating schemas for the Tasks
const taskSchema = new Schema({
    task: {
        type: String,
        required: true,
    },
    completed: {
        type: Boolean,
        default: false,
    },
});

module.exports = mongoose.model("task", taskSchema);
