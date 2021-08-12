const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Titulo = require('../models/titulo')
const controller = require('../controllers/tituloController')

//listar todos os titulos 
router.get('/', controller.getAll)

//listar todos os titulos da Pixar
router.get('/pixar', controller.getAllPixar)

//listar todos os titulos da Ghibli
router.get('/ghibli', controller.getAllGhibli)

//listar todos os titulos da Ghibli
router.get('/marvel', controller.getAllMarvel)

//criar um novo titulo
router.post('/', controller.createTitle)

//atualizar uma informacao especifica num estudio/patch/findById/save
router.patch('/:id', controller.updateTitulo)

//deletar um estudio/delete/findById/remove
router.delete('/:id', controller.deleteTitulo)


module.exports = router