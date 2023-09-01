const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const StrainDesc = new Schema({
    strainName: {type: String, required: true},
    cross1: {type: String, required: true},
    cross2: {type: String, required: true},
    desc: {type: String, required: true}
})

module.exports = mongoose.model('StrainDesc', StrainDesc)