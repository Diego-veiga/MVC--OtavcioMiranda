const mongoose = require('mongoose')

const apSchema = mongoose.Schema({
    numero:{
        type: Number,
        require:true
    }
})

const apModel = mongoose.model('ap', apSchema)

module.exports = apModel