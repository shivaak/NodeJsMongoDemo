const mongoose = require('mongoose')

//Define schema
const todoModel = mongoose.Schema({
    todo: {
        type: String,
        require: true
    }, 
    created_at: {
        type: Date,
        require: false
    },
    last_updated:{
        type: Date,
        require: false
    }
})

// Convert schema to Model
module.exports = mongoose.model("Todo", todoModel)

