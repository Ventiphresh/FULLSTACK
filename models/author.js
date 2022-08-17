const mongoose = require('mongoose')

const authorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})
// Name of model and passing the schema
module.exports = mongoose.model('Author', authorSchema)