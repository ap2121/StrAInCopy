const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const StrainDesc = new Schema({
    strainName: {type: String, required: true},
    cross1: {type: String, required: false},
    cross2: {type: String, required: false},
    desc: {type: String, required: true}
})

module.exports = mongoose.model('StrainDesc', StrainDesc)