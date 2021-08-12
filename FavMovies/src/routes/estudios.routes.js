const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Estudio = require('../models/estudio')
const controller = require('../controllers/estudioController')

//listar todos os estudios/get/find
router.get('/', controller.getAll)

//criar um novo estudio/post/save
router.post('/', controller.createStudio)

//atualizar uma informacao especifica num estudio/patch/findById/save
router.patch('/:id', controller.updateOne)

//deletar um estudio/delete/findById/remove
router.delete('/:id', controller.deleteStudio)

module.exports = router