const Joi = require('@hapi/joi')

const authSchema = Joi.object({
    email: Joi.string().email().lowercase().required(),
    password: Joi.string().min(6).required()
})

const documentSchema = Joi.object({
    judul: Joi.string().required(),
    aktif: Joi.boolean().required()
})

module.exports = {
    authSchema, documentSchema
}