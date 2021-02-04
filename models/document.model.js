const mongoose = require('mongoose')
const Schema = mongoose.Schema

const DocumentSchema = new Schema({
    filename: {
        type: String,
        lowercase: true,
    },
    judul: {
        type: String,
        required: true
    },
    aktif: {
        type: Boolean,
        required: true,
        default: true
    }
},{
    timestamps: true
})

const Document = mongoose.model('Document', DocumentSchema)
module.exports = Document