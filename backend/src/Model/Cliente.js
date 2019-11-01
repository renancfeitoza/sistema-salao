const mongoose = require('mongoose');
const ClienteSchema = new mongoose.Schema({
    nome: String,
    email: String,
    telefone: {
        celular: String,
        comercial: String,
        residencial: String,
        
    },
    cpf: String,
    rg: String,
    data_nasc: Date,
    sexo: String,
    endereco: {
        logradouro: String,
        numero: Number,
        complemento: String,
        cidade: String,
        cep: String,
        saude: {
            alergiaProduto: String,
            produto: String,

        },
        como_conheceu: String
    }
})
module.exports = mongoose.model('Cliente', ClienteSchema);