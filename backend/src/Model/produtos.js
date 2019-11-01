const mongoose = require('mongoose');
const ProdutosSchema = new mongoose.Schema({
    nome: String,
    fornecedor: String,
    valor_revenda: Number,
    categoria: String,
    marca: String,
    linha: String,
    descricao: String,
    como_utilizar: String,
    recomendacoes: String,
    avaliacoes:{
        data: Date,
        nota: Number,
        descricao: String,
        id_usuario: {
            type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
        }

    },
    estoque:{
        quantidade_atual: Number,
        unidade_armazenamento: String,
        descricao: String,
        entrada:[
            {
                data: Date,
                quantidade: Number,
                custo: Number
            }
        ],
        saida:[{
            data: Date,
            quantidade: Number
            }    
         ]
    },

});

module.exports = mongoose.model('Produtos', ProdutosSchema);