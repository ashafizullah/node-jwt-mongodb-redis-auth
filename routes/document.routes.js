const express = require('express')
const router = express.Router()
const documentController = require('../controllers/document.controller')
const { upload } = require("../middlewares");

router.post('/', upload.single('filename'), documentController.create)

router.get('/', documentController.getAll)

router.get('/:id', documentController.getDetail)

module.exports = router