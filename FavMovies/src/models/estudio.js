const mongoose = require('mongoose')

const estudioSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  nome: {
    type: String,
    required: true  //significa que é obrigatório
  },
  criadoEm: {
    type: Date,
    required: true,
    default: new Date
  }
})

module.exports = mongoose.model('estudio', estudioSchema)