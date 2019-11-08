const Cadastro = require('../Model/Cadastro');

module.exports = {
    async store(req, res) {
        const {
            email,
            usuario,
            senha,
            residencial,
            celular,
            comercial,
            seguimento,
            cpf,
            rg,
            logradouro,
            numero,
            complemento,
            bairro,
            cidade,
            estado,
            cep } = req.body

        const cadastro = await Cadastro.create({
            email,
            usuario,
            senha,
            telefone: {
                residencial,
                celular,
                comercial
            },
            seguimento,
            cpf,
            rg,
            endereco: {
                logradouro,
                numero,
                complemento,
                bairro,
                cidade,
                estado,
                cep
            }
        })

        return res.json(cadastro)
    },
    async show(req, res) {
        const { email, senha } = req.body

        const usuario = await Cadastro.findOne({ email, senha })

        return res.json(usuario)
    }
}