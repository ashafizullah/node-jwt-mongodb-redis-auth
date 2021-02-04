const createError = require('http-errors')
const Document = require('../models/document.model')
const { documentSchema } = require('../helpers/validation_schema')

module.exports = {
    create: async(req, res, next) => {
        try{
            const result = await documentSchema.validateAsync(req.body)
            
            const document = new Document({
                filename: req.file.filename,
                judul: result.judul,
                aktif: result.aktif
            })
    
            const savedDocument = await document.save()
    
            res.send({savedDocument})
        }catch(error){
            if(error.isJoi === true) error.status = 422
            next(error)
        }
    },
    getAll: async(req, res, next) => {
        try {
            const documents = await Document.find({ aktif: true })

            res.send(documents)
        } catch (error) {
            next(error)
        }
    },
    getDetail: async(req, res, next) => {
        try {
            const id = req.params.id

            const document = await Document.findById(id)

            res.send(document)
        } catch (error) {
            next(error)
        }
    }
}