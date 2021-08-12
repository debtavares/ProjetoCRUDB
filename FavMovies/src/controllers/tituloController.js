const mongoose = require('mongoose')
const Titulo = require('../models/titulo')

const getAll = async (req, res) => {
    const titulos = await Titulo.find().populate('estudio')
    res.status(200).json(titulos)
}

const getAllPixar = async (req, res) => {
    const titulos = await Titulo.find().populate('estudio')
    const titulosFiltrados = titulos.filter(titulo => titulo.estudio.nome == "Pixar")
    res.json(titulosFiltrados)
    
}

const getAllMarvel = async (req, res) => {
    const titulos = await Titulo.find().populate('estudio')
    const titulosFiltrados = titulos.filter(titulo => titulo.estudio.nome == "Marvel")
    res.json(titulosFiltrados)
    
}

const getAllGhibli = async (req, res) => {
    const titulos = await Titulo.find().populate('estudio')
    const titulosFiltrados = titulos.filter(titulo => titulo.estudio.nome == "Ghibli")
    res.json(titulosFiltrados)
}

const createTitle = async (req, res) => {
    const titulo = new Titulo({
        _id: new mongoose.Types.ObjectId(),
        nome: req.body.nome,
        genero: req.body.genero,
        descricao: req.body.descricao,
        estudio: req.body.estudio,
        criadoEm: req.body.criadoEm
    })

    const tituloJaExiste = await Estudio.findOne({nome: req.body.nome})
    if(tituloJaExiste) {
        return res.status(409).json({error: 'Estudio ja cadastrado'})
    }

    try {
        //se der certo, salva
        const novoTitulo = await titulo.save()
        res.status(201).json(novoTitulo)
        //se der errado, messagem de erro
    } catch (err) {
        res.status(400).json({message : err.message})
    }
}

const updateTitulo = async (req,res) => {
    try {

      const titulos = await Titulo.findById(req.params.id)

      if (titulos == null) {
        return res.status(404).json({error: 'Estudio não encontrado'})
      }


      if (req.body.nome != null) {
        titulos.nome = req.body.nome
      }

      const tituloAtualizado = await estudio.save()
      res.status(200).json(tituloAtualizado)

    } catch (err) {
      res.status(500).json({message : err.message})
    }
  }


const deleteTitulo = async (req, res) => {
    try {
    const titulos = await Titulo.findById(req.params.id)

    const removetitulos = await titulos.remove()
    res.status(200).json(removetitulos)

    } catch (err) {
      res.status(500).json({ message: err })
    }
    
  } 

module.exports = {
    getAll,
    createTitle,
    getAllPixar,
    getAllGhibli,
    getAllMarvel,
    updateTitulo,
    deleteTitulo

}