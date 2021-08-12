const mongoose = require('mongoose')
const Estudio = require('../models/estudio')


// rota getAll
  const getAll = async (req, res) => {
    const estudios = await Estudio.find()
    res.json(estudios)
  }


//rota createStudio
  const createStudio = async (req, res) => {
    const estudio = new Estudio({
      _id: new mongoose.Types.ObjectId(),
      nome: req.body.nome,
      criadoEm: req.body.criadoEm,
    })

    const estudioJaExiste = await Estudio.findOne({nome: req.body.nome})

    if(estudioJaExiste) {
        return res.status(409).json({error: 'Estudio ja cadastrado'})
    }
    
    try {
    const novoEstudio = await estudio.save()
    res.status(201).json(novoEstudio)

    } catch(err) {
       res.status(400).json({message: err.message})
        }
  }


//rota updateOne
  const updateOne = async (req,res) => {
    try {

      //tenta encontrar um estudio pelo id
      const estudio = await Estudio.findById(req.params.id)

      // se o estudio nao for encontrado
      if (estudio == null) {
        return res.status(404).json({error: 'Estudio não encontrado'})
      }


      if (req.body.nome != null) {
        estudio.nome = req.body.nome
      }

      //já salvou?
      const estudioAtualizado = await estudio.save()
      //retornando o doc atualizado
      res.status(200).json(estudioAtualizado)

    } catch (err) {
      //se tiver erro,, mostre o erro
      res.status(500).json({message : err.message})
    }
  }

  const deleteStudio = async (req, res) => {
    try {
    const estudio = await Estudio.findById(req.params.id)

    const removeEstudio = await estudio.remove()
    res.status(200).json(removeEstudio)

    } catch (err) {
      res.status(500).json({ message: err })
    }
    
  } 


module.exports = {
    getAll,
    createStudio,
    updateOne,
    deleteStudio
}