const mongoose = require('mongoose');
const ServicoSchema = new mongoose.Schema({
    nome: String,
    descricao: String,
    valor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Servico'
    },
    data: Date,
    tempo_atendimento: Number
})
module.exports = mongoose.model('Servico', ServicoSchema);