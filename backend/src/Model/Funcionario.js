const mongoose = require('mongoose');
const FuncionarioSchema = new mongoose.Schema({
    
     nome: String,
     usuario: String,
     email: String,
     senha: String,
     data_criacao: String,
     atividades: String,
     vinculo: String,
     permissoes: String,
     
     cpf: String,
     rg: String,
     data_nasc: Date,
     endereco:{
         logradouro: String,
         numero: Number,
         complemento: String,
         bairro: String,
         cidade: String,
         cep: String

     },
     admissao: Date,
     acoes: ["store","index","show"]
            
    

});

module.exports = mongoose.model('Funcionario', FuncionarioSchema);