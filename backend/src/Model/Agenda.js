const mongoose = require('mongoose');
const AgendaSchema = new mongoose.Schema({
    
         
    funcionario_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Funcionario'
    },
    cliente_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cliente'
    },
    produto_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Produto'
    },
    servico_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Servico'
    },
    tempo_atendimento: Number,
    data: Date,
        
    
})
module.exports = mongoose.model('Agenda', AgendaSchema);