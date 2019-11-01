const mongoose = require('mongoose');
const CadastroSchema = new mongoose.Schema({

    email: String,
    usuario: String,
    senha: String,
    data_criacao: Date,
    status: String,
    telefone: {
        residencial: String,
        celular: String,
        comercial: String
    },
    seguimento: String,
    cpf: String,
    rg: String,
    endereco: {
        logradouro: String,
        numero: Number,
        complemento: String,
        bairro: String,
        cidade: String,
        estado: String,
        cep: String
    }
    
})
module.exports = mongoose.model('Cadastro', CadastroSchema);